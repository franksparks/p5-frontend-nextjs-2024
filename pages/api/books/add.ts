import { addBook } from "@/lib/books";
import { IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), "public/covers"),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error parsing form data" });
    }

    try {
      const title = Array.isArray(fields.title)
        ? fields.title[0]
        : fields.title;
      const authorName = Array.isArray(fields.authorName)
        ? fields.authorName[0]
        : fields.authorName;
      const authorLastName = Array.isArray(fields.authorLastName)
        ? fields.authorLastName[0]
        : fields.authorLastName;
      const pagesStr = Array.isArray(fields.pages)
        ? fields.pages[0]
        : fields.pages;
      const pages = pagesStr ? parseInt(pagesStr, 10) : 0;

      const publishYearStr = Array.isArray(fields.publishYear)
        ? fields.publishYear[0]
        : fields.publishYear;
      const publishYear = publishYearStr
        ? parseInt(publishYearStr, 10)
        : 0;

      const publisher = Array.isArray(fields.publisher)
        ? fields.publisher[0]
        : fields.publisher;

      const coverFile =
        files.cover && Array.isArray(files.cover) ? files.cover[0] : null;

      const coverPath = coverFile
        ? `/covers/${path.basename(coverFile.filepath)}`
        : "/covers/default.jpeg";

      const bookData = {
        title,
        authorName,
        authorLastName,
        pages,
        publisher,
        publishYear,
        cover: coverPath,
        status: "PENDING",
      };

      const book = await addBook(bookData);
      res.status(200).json(book);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error saving book" });
    }
  });
}

import booksData from "@/app/books.json";
import { Book } from "@/lib/books";
import { redirect } from "next/navigation";

type PageProps = {
  params: {
    bookId: string;
  };
};

export default function page({ params }: PageProps) {
  const { bookId } = params;
  const bookIdNumber = parseInt(bookId, 10);

  const book: Book | undefined = booksData.find(
    (b) => b.bookId === bookIdNumber
  );

  console.log(book);

  //Forzamos un error
  if (bookIdNumber === 9) {
    throw new Error("Please try again");
  }
  if (!book) {
    return redirect("/notFound");
  }

  return (
    <main className="p-4">
      <div>{book.title}</div>
    </main>
  );
}

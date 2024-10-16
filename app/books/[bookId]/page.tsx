import BookEditableData from "@/components/BookEditableData";
import { Button } from "@/components/ui/button";
import { Book, getOneBook } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    bookId: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { bookId } = params;
  const bookIdNumber = parseInt(bookId, 10);

  const book: Book | undefined = await getOneBook(bookIdNumber);

  //Forzamos un error para un libro en concreto
  if (book.title === "Error Humano") {
    throw new Error("Error book selected!");
  }

  //Forzamos un "not found" para un libro en concreto
  if (book.title === "Atlantis found") {
    notFound();
  }

  if (!book) {
    notFound();
  }

  return (
    <main className="flex flex-row items-center min-h-96 p-10">
      <div className="w-1/3 flex flex-col items-center">
        <Image
          className="shadow-xl"
          src={book.cover || "/public/covers/default.jpeg"}
          width={250}
          height={250}
          alt={`Portada del libro: "${
            book.cover || "/public/covers/default.jpeg"
          }"`}
        />
        <Button className="ml-10 mt-10">
          <Link href="/books" className="text-white ">
            &#8617; Volver al listado
          </Link>
        </Button>
      </div>

      <div className="flex flex-col w-1/4  items-start">
        <h3>
          <p className="underline">Título:</p>{" "}
          <p className="italic">{book.title}</p>
        </h3>
        <h3>
          <p className="underline">Autor/a:</p>
          <p>
            {book.authorLastName}, {book.authorName}
          </p>
        </h3>
        <h3>
          <p className="underline">Editorial:</p>
          <p>{book.publisher}</p>
        </h3>
        <h3>
          <p className="underline">Año de publicación:</p>
          <p>{book.publishYear}</p>
        </h3>
        <h3>
          <p className="underline">Número de páginas:</p>
          <p>{book.pages}</p>
        </h3>
      </div>

      <div className="w-1/3 flex flex-col items-start">
        <BookEditableData key={book.bookId} book={book} />
      </div>
    </main>
  );
}

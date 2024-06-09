import booksData from "@/app/books.json";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/books";
import Image from "next/image";
import Link from "next/link";
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

  //Forzamos un error para un libro en concreto
  if (bookIdNumber === 9) {
    throw new Error("Error book selected!");
  }
  if (!book) {
    return redirect("/notFound");
  }

  return (
    <main className="p-4">
      <div className="flex flex-row p-10 ">
        <div>
          <Image
            className="shadow-xl"
            src={book.cover}
            width={250}
            height={250}
            alt={`Portada del libro: "${book.cover}"`}
          />
          <Button className="ml-10 mt-10">
            <Link href="/books" className="text-white ">
              &#8617; Volver al listado
            </Link>
          </Button>
        </div>
        <div className="ml-20 mt-20">
          <h3>
            <span className="underline">Título:</span>{" "}
            <span className="italic">{book.title}</span>
          </h3>
          <h3>
            <span className="underline">Autor/a:</span>{" "}
            {book.authorLastName}, {book.authorName}
          </h3>
          <h3>
            <span className="underline">Año de publicación:</span>{" "}
            {book.publishYear}
          </h3>
          <h3>
            <span className="underline">Estado:</span>{" "}
            {book.status === "TO READ" && <span>Pendiente</span>}
            {book.status === "READING" && <span>Leyendo</span>}
            {book.status === "READ" && <span>Leído</span>}
          </h3>
          <div className="flex flex-col gap-5">
            <Button className="w-40 flex flex-row ">
              <Link href="" className="text-white">
                Cambiar estado
              </Link>
            </Button>
          </div>
        </div>
        <div className="ml-20 mt-20">
          {book.review === "" && (
            <div>
              <span>Pendiente de valoración</span>{" "}
              <div className="flex flex-col gap-5">
                <Button>
                  <Link href="" className="text-white ">
                    Añadir valoración
                  </Link>
                </Button>
              </div>
            </div>
          )}
          {book.review !== "" && (
            <div>
              <h3 className="underline">Mi valoración: </h3>
              <p className="italic">{book.review}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

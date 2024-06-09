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

export default async function page({ params }: PageProps) {
  const { bookId } = params;
  const bookIdNumber = parseInt(bookId, 10);

  const book: Book | undefined = await getOneBook(bookIdNumber);

  //Forzamos un error para un libro en concreto
  if (bookIdNumber === 11) {
    throw new Error("Error book selected!");
  }

  //Forzamos un "not found" para un libro en concreto
  if (bookIdNumber === 12) {
    notFound();
  }
  if (!book) {
    notFound();
  }

  return (
    <main className="flex flex-row justify-around items-center min-h-96 p-10">
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
      <div className="flex flex-col ">
        <h3>
          <span className="underline">Título:</span>{" "}
          <span className="italic">{book.title}</span>
        </h3>
        <h3>
          <span className="underline">Autor/a:</span> {book.authorLastName}
          , {book.authorName}
        </h3>
        <h3>
          <span className="underline">Año de publicación:</span>{" "}
          {book.publishYear}
        </h3>
        <h3>
          <span className="underline">Estado:</span>{" "}
          {book.status === "PENDING" && (
            <div className="flex flex-row">
              <span className="mr-5">Pendiente</span>{" "}
              <Image
                src="/icons/toRead.svg"
                width={10}
                height={10}
                alt="Read Icon"
                className="w-6 h-6"
              />
            </div>
          )}
          {book.status === "READING" && (
            <div className="flex flex-row">
              <span className="mr-5">Leyendo</span>{" "}
              <Image
                src="/icons/reading.svg"
                width={10}
                height={10}
                alt="Read Icon"
                className="w-6 h-6"
              />
            </div>
          )}
          {book.status === "READ" && (
            <div className="flex flex-row">
              <span className="mr-5">Leído</span>
              <Image
                src="/icons/read.svg"
                width={10}
                height={10}
                alt="Read Icon"
                className="w-6 h-6"
              />
            </div>
          )}
        </h3>
        <div className="flex flex-col gap-5">
          <Button className="w-40 flex flex-row ">
            <Link href="" className="text-white">
              Cambiar estado
            </Link>
          </Button>
        </div>
      </div>
      <div className="">
        {book.review === "" && (
          <div>
            <p>Pendiente de valoración</p>{" "}
            <div className="flex flex-col pt-5">
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
    </main>
  );
}

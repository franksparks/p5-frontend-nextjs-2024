import { Button } from "@/components/ui/button";
import Image from "next/image";
import booksData from "../books.json";
import { Book } from "@/lib/books";

export default function page() {
  let books: Book[] = booksData;

  return (
    <main className="p-4">
      <div className=" flex flex-row justify-between ">
        <h1>My books</h1>
        <Button
          className="ml-auto bg-blue-600 
        "
        >
          Add a book
        </Button>
      </div>

      <div className=" flex flex-wrap">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-row m-4 w-64 hover:outline "
          >
            <Image
              src={book.cover}
              width={75}
              height={75}
              alt={`Portada del libro: "${book.cover}"`}
            />
            <div className="m-4 flex flex-col justify-around">
              <p className="italic">{book.title}</p>
              <p className="font-bold">
                {book.authorName} {book.authorLastName}
              </p>
              {book.status === "READ" && (
                <Image
                  src="/icons/read.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
              {book.status === "READING" && (
                <Image
                  src="/icons/reading.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
              {book.status === "TO READ" && (
                <Image
                  src="/icons/toRead.svg"
                  width={10}
                  height={10}
                  alt="Read Icon"
                  className="w-6 h-6"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

import { Button } from "@/components/ui/button";
import booksData from "../books.json";
import Image from "next/image";

export default function page() {
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

      <div className="p-3 flex flex-wrap">
        {booksData.map((book) => (
          <div key={book.id} className="flex flex-row m-4 hover:border-2">
            <Image
              src={book.cover}
              width={50}
              height={50}
              alt={`Portada del libro: "${book.cover}"`}
            />
            <div className="m-4">
              <p className="italic">{book.title}</p>
              <p>
                {book.authorName} {book.authorLastName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

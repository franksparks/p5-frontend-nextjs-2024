import BookInfo from "@/components/BookInfo";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/books";
import Image from "next/image";
import booksData from "../books.json";

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
          <BookInfo key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}

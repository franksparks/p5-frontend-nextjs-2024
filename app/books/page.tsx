import BookInfo from "@/components/BookInfo";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/books";
import Link from "next/link";
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
          <Link href={`/books/${book.bookId}`} key={book.bookId}>
            <BookInfo key={book.bookId} book={book} />
          </Link>
        ))}
      </div>
    </main>
  );
}

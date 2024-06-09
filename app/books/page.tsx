import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Book } from "@/lib/books";
import Link from "next/link";
import booksData from "../books.json";

export default function page() {
  let books: Book[] = booksData;

  return (
    <main>
      <div className="flex flex-wrap p-5 justify-around">
        {books.map((book) => (
          <Link href={`/books/${book.bookId}`} key={book.bookId}>
            <BookCard key={book.bookId} book={book} />
          </Link>
        ))}
      </div>
    </main>
  );
}

"use client";
import { actionGetBooks } from "@/app/actions/books";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/books";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await actionGetBooks();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

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

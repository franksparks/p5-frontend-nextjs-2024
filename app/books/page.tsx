import { actionGetBooks } from "@/app/actions/books";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/books";
import Link from "next/link";

export default async function Page() {
  let books: Book[] = await actionGetBooks();
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

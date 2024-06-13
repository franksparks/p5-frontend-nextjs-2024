import { Book } from "@/lib/books";
import Image from "next/image";

type bookCardProps = {
  book: Book;
};

export default function BookCard({ book }: bookCardProps) {
  return (
    <div className="flex flex-row m-2 w-64 hover:outline hover:scale-110 shadow-xl">
      <Image
        src={book.cover}
        width={85}
        height={80}
        alt={`Portada del libro: "${book.cover}"`}
        className="w-24 h-40 "
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
        {book.status === "PENDING" && (
          <Image
            src="/icons/pending.svg"
            width={10}
            height={10}
            alt="Read Icon"
            className="w-6 h-6"
          />
        )}
      </div>
    </div>
  );
}

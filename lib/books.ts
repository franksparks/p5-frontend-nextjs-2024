import { prisma } from "@/db/db";

export type Book = {
  bookId: number;
  title: string;
  authorName: string;
  authorLastName: string;
  publishYear: number;
  review: string;
  cover: string;
  status: string;
};

export async function getBooks() {
  return await prisma.book.findMany({
    orderBy: { bookId: "asc" },
  });
}

export async function getOneBook(bookId: number) {
  return await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });
}

import { prisma } from "@/db/db";
import { Status } from "@prisma/client"; // Importa el tipo Status generado por Prisma

export type Book = {
  bookId: number;
  title: string;
  authorName: string;
  authorLastName: string;
  pages: number;
  publisher: string;
  publishYear: number;
  review: string | null;
  cover: string | null;
  status: string | null;
};

export async function getBooks() {
  return await prisma.books.findMany({
    orderBy: { bookId: "asc" },
  });
}

export async function getOneBook(bookId: number) {
  return await prisma.books.findUniqueOrThrow({
    where: { bookId },
  });
}

export async function addBook(data: any) {
  return await prisma.books.create({ data });
}

export async function updateBookReview(bookId: number, review: string) {
  return await prisma.books.update({
    where: { bookId },
    data: { review },
  });
}

export async function updateBookStatus(bookId: number, status: string) {
  const validStatus: Status = status as Status;

  return await prisma.books.update({
    where: { bookId },
    data: { status: validStatus },
  });
}

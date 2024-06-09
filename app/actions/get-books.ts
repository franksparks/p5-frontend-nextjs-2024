"use server";
import { getBooks, getOneBook } from "@/lib/books";

export async function actionGetBooks() {
  const books = await getBooks();

  return books;
}

export async function actionGetOneBook(bookId: number) {
  const book = await getOneBook(bookId);

  return book;
}

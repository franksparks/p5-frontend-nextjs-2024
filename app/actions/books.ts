"use server";
import { getBooks, getOneBook, updateBookReview } from "@/lib/books";
import { revalidatePath } from "next/cache";

export async function actionGetBooks() {
  const books = await getBooks();
  return books;
}

export async function actionGetOneBook(bookId: number) {
  const book = await getOneBook(bookId);
  return book;
}

export async function actionUpdateReview(id: number, review: string) {
  await updateBookReview(id, review);
  revalidatePath("/");
}

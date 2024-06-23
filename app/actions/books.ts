"use server";
import {
  addBook,
  getBooks,
  getOneBook,
  updateBookReview,
  updateBookStatus,
} from "@/lib/books";
import { revalidatePath } from "next/cache";

export async function actionAddBook(data: FormData) {
  const book = await addBook(data);
  return book;
}

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

export async function actionUpdateStatus(id: number, status: string) {
  await updateBookStatus(id, status);
  revalidatePath("/");
}

enum status {
  READ,
  "TO READ",
  READING,
}

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

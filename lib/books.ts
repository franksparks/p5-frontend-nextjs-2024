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
  cover: string;
  status: string;
};

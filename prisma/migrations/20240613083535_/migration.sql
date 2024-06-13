-- CreateEnum
CREATE TYPE "Status" AS ENUM ('READ', 'PENDING', 'READING');

-- CreateTable
CREATE TABLE "Book" (
    "bookId" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "authorName" STRING NOT NULL,
    "authorLastName" STRING NOT NULL,
    "pages" INT4 NOT NULL,
    "publisher" STRING NOT NULL,
    "publishYear" INT4 NOT NULL,
    "review" STRING NOT NULL,
    "cover" STRING NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("bookId")
);
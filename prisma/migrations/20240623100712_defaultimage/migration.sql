-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "cover" DROP NOT NULL;
ALTER TABLE "Books" ALTER COLUMN "cover" SET DEFAULT '/covers/default.jpeg';

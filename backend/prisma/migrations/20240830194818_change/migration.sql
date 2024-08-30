/*
  Warnings:

  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Post_defaultid_key";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "author" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `id` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_id_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "id";

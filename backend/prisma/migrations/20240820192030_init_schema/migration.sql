/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - The required column `defaultid` was added to the `Post` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Post_userId_key";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "userId",
ADD COLUMN     "defaultid" TEXT NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_key" ON "Post"("id");

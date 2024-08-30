/*
  Warnings:

  - A unique constraint covering the columns `[defaultid]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Post_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Post_defaultid_key" ON "Post"("defaultid");

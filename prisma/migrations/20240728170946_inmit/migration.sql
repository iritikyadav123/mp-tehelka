/*
  Warnings:

  - You are about to drop the `NEWS` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `thumbnailUrl` to the `Story` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "thumbnailUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "thumbnailUrl" TEXT;

-- DropTable
DROP TABLE "NEWS";

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "time" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "thumbnailUrl" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "News_type_idx" ON "News"("type");

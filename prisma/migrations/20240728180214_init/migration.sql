/*
  Warnings:

  - Changed the type of `time` on the `Article` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `News` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Story` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "News" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Story" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;

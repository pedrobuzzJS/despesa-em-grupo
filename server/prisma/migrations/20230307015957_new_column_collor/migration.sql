/*
  Warnings:

  - Added the required column `cor` to the `tbstatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbstatus" ADD COLUMN     "cor" VARCHAR(100) NOT NULL;

/*
  Warnings:

  - Made the column `time_spent` on table `Task` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "time_spent" SET NOT NULL,
ALTER COLUMN "time_spent" SET DEFAULT 0;

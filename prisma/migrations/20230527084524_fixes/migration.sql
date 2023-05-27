/*
  Warnings:

  - You are about to drop the column `time_finished` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "time_finished",
ADD COLUMN     "time_spent" INTEGER;

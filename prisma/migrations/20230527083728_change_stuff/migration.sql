/*
  Warnings:

  - You are about to drop the column `complete` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `time_spent` on the `Task` table. All the data in the column will be lost.
  - You are about to alter the column `estimated_time` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `start_time` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "complete",
DROP COLUMN "time_spent",
ADD COLUMN     "time_finished" TIMESTAMP(3),
ALTER COLUMN "estimated_time" DROP NOT NULL,
ALTER COLUMN "estimated_time" DROP DEFAULT,
ALTER COLUMN "estimated_time" SET DATA TYPE INTEGER,
ALTER COLUMN "start_time" SET DATA TYPE INTEGER;

/*
  Warnings:

  - You are about to alter the column `time_spent` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `estimated_time` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `start_time` on the `Task` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "time_spent" SET DATA TYPE INTEGER,
ALTER COLUMN "estimated_time" SET DATA TYPE INTEGER,
ALTER COLUMN "start_time" SET DATA TYPE INTEGER;

// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export interface Task {
  id: number;
  name: string;
  time_spent: number;
  start_time?: Date | null;
  estimated_time?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

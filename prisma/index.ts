// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export interface Task {
  id: number;
  name: string;
  time_spent: number;
  estimated_time: number;
  start_time?: number | null;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

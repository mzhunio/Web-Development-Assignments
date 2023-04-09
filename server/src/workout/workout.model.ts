import { RowDataPacket } from "mysql2";

export interface WorkoutModel extends RowDataPacket {
  id: number;
  name: string;
  duration: number;
  userId: number;
}

export interface CreateWorkoutModel {
  name: string;
  duration: string;
  userId: number;
}

export interface UpdateWorkoutModel {
  name?: string;
  duration?: string;
}

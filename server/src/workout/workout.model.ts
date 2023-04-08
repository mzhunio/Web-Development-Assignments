import { RowDataPacket } from "mysql2";

export interface WorkoutModel extends RowDataPacket {
  id: number;
  name: string;
  duration: number;
  userId: number;
}

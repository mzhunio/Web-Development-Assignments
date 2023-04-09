import { OkPacket, Pool } from "mysql2/promise";
import { pool } from "../database/connection";
import { WorkoutModel, CreateWorkoutModel, UpdateWorkoutModel } from "./workout.model";

export class WorkoutService {
  private pool: Pool = pool;

  async getWorkouts(): Promise<WorkoutModel[]> {
    const [workouts] = await this.pool.query<WorkoutModel[]>(
      "SELECT * FROM Workout;"
    );

    return workouts;
  }

  async getWorkout(id: number): Promise<WorkoutModel | null> {
    const [rows] = await this.pool.query<WorkoutModel[]>(
      "SELECT * FROM Workout WHERE id = ?",
      [id]
    );

    return rows[0];
  }

  async createWorkout({
    name,
    duration,
    userId,
  }: CreateWorkoutModel): Promise<WorkoutModel | null> {
    const [result] = await this.pool.execute<OkPacket>(
      `INSERT INTO Workout (name, duration, userId) VALUES (?, ?, ?);`,
      [name, duration, userId]
    );

    const [rows] = await this.pool.query<WorkoutModel[]>(
      `SELECT * FROM Workout WHERE id = ?`,
      [result.insertId]
    );

    return rows[0];
  }

  async updateWorkout(
    id: number,
    changes: UpdateWorkoutModel): Promise<WorkoutModel | null> {
        const workout = await this.getWorkout(id);

        const { name, duration } = { ...workout, ...changes};
    
        await this.pool.execute(
          "UPDATE Workout SET name = ?, duration = ? WHERE id = ?;",
          [name, duration, id]
        );
    
        return this.getWorkout(id);
    }

    async deleteWorkout(id: number): Promise<WorkoutModel | null> {
      const workout = await this.getWorkout(id);
      await this.pool.execute("DELETE FROM User WHERE id = ?", [id]);
      return workout;
    }

}

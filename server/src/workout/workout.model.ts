export interface WorkoutModel {
  id: string;
  name: string;
  duration: number;
  // exercises: any[];
  // workoutId: string;
}

export interface CreateWorkoutModel {
  name: string;
  duration: string;
  userId: number;
  // exercises: any[]
}

export interface UpdateWorkoutModel {
  name?: string;
  duration?: string;
}

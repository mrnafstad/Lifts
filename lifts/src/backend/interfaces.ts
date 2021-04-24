
export type Nullable<T> = T | null;

export interface User {
    userName: string;
    firstName: string;
    lastName: string;
    authState: boolean;
}

export interface WorkOutSession {
    sets: Set[];
    date: Date;
    id: number;
    comment?: string;
    workoutScore?: number;
    dailyFitnes?: number;
    duration?: number;
}

export interface Set {
    exercise: Exercise;
    type: string;
    rpe?: number;
    repetitions?: number;
    time?: number;
    weight?: number;
}

export interface Cardio {
    exercise: Exercise;
    time?: number;
    distance?: Distance;
}

export enum ExerciseType {
    REGULAR,
    TIMED,
    FULLBODY,
    OLYMPIC
}

// Discuss this
export enum BodyPart {
    CHEST,
    BACK,
    LEGS,
    CORE
}

// bodyParts is optional because it can be inferred from mainMuscles
export interface Exercise {
    name: string;
    type: ExerciseType;
    note: string;
    bodyPart?: BodyPart;
    mainMuscles?: string;
}

export enum DistanceUnit {
    METERS,
    MILES
}

export interface Distance {
    unit: DistanceUnit;
    value: number;
    
}

export enum WeightUnit {
    KG,
    LBS
}


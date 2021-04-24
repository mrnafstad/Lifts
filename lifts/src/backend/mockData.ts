import { Set, BodyPart, ExerciseType, Exercise, WeightUnit, Weight, WorkOutSession } from './interfaces';

export const squat: Exercise = {
    type: ExerciseType.REGULAR,
    bodyPart: BodyPart.LEGS,
    name: 'Squat',
    note: 'Do it ass to grass',
    mainMuscles: 'Quadriceps, gluteus maximus',
};

export const benchPress: Exercise = {
    type: ExerciseType.REGULAR,
    bodyPart: BodyPart.CHEST,
    name: 'Bench Press',
    note: 'Do it hard for getting boobs',
    mainMuscles: 'Triceps, Pectoralis major',
};

export const hangUp: Exercise = {
    type: ExerciseType.REGULAR,
    bodyPart: BodyPart.BACK,
    name: 'Hang Up',
    note: 'Halvor is awesome',
    mainMuscles: 'Biceps, Latissimus dorsi',
}

export const exercises: Exercise[] = [squat, benchPress, hangUp];

export const set1: Set = {
    type: 'regular',
    exercise: squat,
    weight: 80,
    repetitions: 5,   
}
export const set2: Set = {
    type: 'regular',
    exercise: squat,
    weight: 80,
    repetitions: 5,   
}
export const set3: Set = {
    type: 'regular',
    exercise: squat,
    weight: 80,
    repetitions: 5,   
}

export const set4: Set = {
    type: 'regular',
    exercise: benchPress,
    weight: 80,
    repetitions: 5,   
}
export const set5: Set = {
    type: 'regular',
    exercise: benchPress,
    weight: 80,
    repetitions: 5,   
}
export const set6: Set = {
    type: 'regular',
    exercise: benchPress,
    weight: 80,
    repetitions: 5,   
}
export const set7: Set = {
    type: 'regular',
    exercise: hangUp,
    weight: 80,
    repetitions: 5,   
}

export const workOut: WorkOutSession = {
    sets: [set1, set2, set3, set4, set5, set6, set7],
    date: new Date(),
    id: 1,
    comment: 'Halvor is getting la id!!!',
    workoutScore: 5,
    dailyFitnes: 5,
    duration: 10,

}
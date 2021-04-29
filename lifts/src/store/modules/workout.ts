import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { Exercise, Nullable, ExerciseSet, WorkOutSession } from '@/backend/interfaces';
import { LiftStorage } from '@/backend/vuexLocalForage';

export interface IWorkoutModule{
    workout: Nullable<WorkOutSession>;
    currentExercise: Nullable<Exercise>;
}

@Module({dynamic: true, namespaced: true, store, name: 'workout'})
class workout extends VuexModule implements IWorkoutModule {
    public workout: Nullable<WorkOutSession> = null;
    public currentExercise: Nullable<Exercise> = null;

    @Action({ commit: 'setStateMutation' })
    public setStateFromStorage(storedState: {workout: WorkOutSession, currentExercise: Exercise}): {workout: WorkOutSession, currentExercise: Exercise} {
        return storedState;
    }

    @Mutation
    public setStateMutation({workout, currentExercise}: {workout: WorkOutSession, currentExercise: Exercise}) {
        // TODO: handle by id, not by date
        if ( workout.date === this.workout?.date) {
            this.workout = workout;
            this.currentExercise = currentExercise;
        }
    }

    public get getState() {
        return {
            workout: this.workout, 
            currentExercise: this.currentExercise
        };
    }

    @Action({ commit: 'setExercise' })
    public setCurrentExercise(exercise: Exercise) {
        return exercise;
    }

    @Action({ commit: 'newSet' })
    public addNewSet(set: ExerciseSet ) {
        return set;
    }

    @Mutation
    public newSet(set: ExerciseSet) {
        if (!this.workout) {
            this.workout = {
                sets: [],
                date: new Date(),
                id: 1,
            }
        }
        this.workout.sets.push(set);
    }

    @Mutation
    public setExercise(exercise: Exercise) {
        this.currentExercise = exercise;
    }

    public get getCurrentExercise() {
        return this.currentExercise;
    }

    public get setsForCurrentExercise(): Nullable<ExerciseSet[]> {
        if (this.workout && this.currentExercise) {
            const sets = this.workout.sets.filter(set => set.exercise.name === this.currentExercise?.name);
            return sets;
        }
        return null;
    }
}

new LiftStorage(getModule(workout), 'workout');
export const WorkoutModule = getModule(workout);
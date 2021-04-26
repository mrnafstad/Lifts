<template>
  <div class="home">
    <v-expansion-panels>
    <v-expansion-panel
      v-for="(exercise,i) in exercises"
      :key="i"
    >
      <v-expansion-panel-header>
        {{ exercise.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  Set
                </th>
                <th >
                  Repetitions
                </th>
                <th >
                  Weight
                </th>
              </tr>
            </thead>
            <tbody>
        <tr
          v-for="(set, idx) in setsOfExercise(exercise.name)"
          :key="idx"
        >
          <td >{{ idx + 1 }}</td>
          <td >{{ set.repetitions }}</td>
          <td >{{ set.weight }}</td>
        </tr>
      </tbody>
          </template>
        </v-simple-table>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { workOut } from '@/backend/mockData';
import { Exercise, ExerciseSet } from '@/backend/interfaces';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  public workout = workOut;

  public get exercises(): Exercise[] {
    const exercises = new Set(this.workout.sets.map(set => set.exercise));
    return Array.from(exercises);
  }

  public setsOfExercise(exerciseName: string): ExerciseSet[] {
    const filteredSets = this.workout.sets.filter(set => exerciseName === set.exercise.name);
    return filteredSets;
  }
}
</script>

<style scoped>
.home {
  margin: auto;
  width: clamp(350px, 95vw, 500px);
  margin-top: 3vh;
}
</style>

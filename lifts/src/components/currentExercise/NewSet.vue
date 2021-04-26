<template>
  <v-container>
      <v-row>
          <v-col>
              
          </v-col>
      </v-row>
      <v-btn block @click="addSet">ADD SET</v-btn>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import  { Exercise, Nullable } from '@/backend/interfaces'
import { WorkoutModule } from '@/store/modules/workout'

@Component
export default class NewSet extends Vue {
    @Prop({ required: true, type: Object}) public exercise!: Nullable<Exercise>;

    public reps = 0;
    public weight = 0;

    public addSet(): void {
        if (this.exercise) {

            WorkoutModule.addNewSet({
                exercise: this.exercise,
                weight: this.weight,
                repetitions: this.reps,
                type: 'regular'
        })
            }
    }
}
</script>

<style>

</style>
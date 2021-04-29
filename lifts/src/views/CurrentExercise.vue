<template>
   <v-container class="current-exercise">
     <v-row v-if="currentExercise" justify="center" class="view-header">
          {{ currentExercise.name }}
     </v-row>
     <v-row>
       <new-set :exercise="currentExercise"></new-set>
     </v-row>
   </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { WorkoutModule } from '@/store/modules/workout';
import { benchPress } from '@/backend/mockData';
import { Exercise, Nullable } from '@/backend/interfaces';
import NewSet from '@/components/currentExercise/NewSet.vue';


@Component({
  components: {
    NewSet
  },
})
export default class CurrentExercise extends Vue {
  public mounted(): void {
    WorkoutModule.setCurrentExercise(benchPress);
  }

  public get currentExercise(): Nullable<Exercise> {
    return WorkoutModule.getCurrentExercise;
  }
}
</script>

<style lang="scss" scoped>
.view-header {
  font-size: 3vh;
  margin: 1vh 0;
}
</style>
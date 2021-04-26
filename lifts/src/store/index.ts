import Vue from 'vue';
import Vuex from 'vuex';
import { IUserModule } from './modules/user';
import { IWorkoutModule } from './modules/workout';


Vue.use(Vuex);

export interface IRootState {
  user: IUserModule,
  workout: IWorkoutModule
}

export default new Vuex.Store<IRootState>({

});

import Vue from 'vue';
import Vuex from 'vuex';
import { IUserModule } from './modules/user';

Vue.use(Vuex);

export interface IRootState {
  user: IUserModule,
}

export default new Vuex.Store<IRootState>({
});

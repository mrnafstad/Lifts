import Vue from 'vue';
import Vuex from 'vuex';
import { IProfileModule } from './modules/profile';

Vue.use(Vuex);

export interface IRootState {
  profile: IProfileModule,
}

export default new Vuex.Store<IRootState>({
});

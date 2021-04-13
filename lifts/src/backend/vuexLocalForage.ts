import localForage from 'localforage';
import { VuexModule } from 'vuex-module-decorators';
import store from '@/store';

/* eslint-disable */

localForage.config({
    name: 'LiftsStorage'
})

export class LiftStorage {
    private module: VuexModule;

    public constructor(module: VuexModule, moduleName: string) {
        this.module = module;
        localForage.getItem(moduleName).then(res => {
            if (res) {
                // eslint-disable-next-line
                module.setStateFromStorage(res);
            }

            store.subscribe((mutation, payload) => {
                if (mutation.type !== 'setStateMutation') {
                    const newState = module.getState;
                    
                    localForage.setItem(moduleName, newState);
                }
                
            })
        })
    }
}
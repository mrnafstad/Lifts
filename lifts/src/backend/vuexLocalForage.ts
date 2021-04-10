import localForage from 'localforage';
import { VuexModule } from 'vuex-module-decorators';

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
            } else {
                // eslint-disable-next-line
                localForage.setItem(moduleName, module.getState)
            }
        })
    }
}
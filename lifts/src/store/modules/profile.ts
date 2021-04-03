import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import state from '../index';




export interface IProfileModule {
    username: string,
    authentication: boolean,
}

@Module({dynamic: true, store: state, name: 'profile'})
class profile extends VuexModule implements IProfileModule {
    public username!: string;
    public firstName = 'John';
    public lastName = 'Doe';

    // Placeholder untill we get actual backend
    public authentication = true;
}

export const ProfileModule = getModule(profile);
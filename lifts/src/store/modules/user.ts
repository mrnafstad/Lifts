import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { User } from '@/backend/interfaces';
import { LiftStorage } from '@/backend/vuexLocalForage';



export interface IUserModule {
    user: User,
}

@Module({dynamic: true, store, name: 'user'})
class user extends VuexModule implements IUserModule {
    public user: User = {
        userName: '',
        firstName: '',
        lastName: '',
        authState: true,
    }

    @Action({ commit: 'setStateMutation'})
    public setStateFromStorage(user: User) {
        return user;
    }

    @Mutation
    public setStateMutation(user: User) {
        this.user = user;
    }

    public get getState(): User {
        return this.user;
    }

    @Action({ commit: 'updateUserNameMutation' })
    public updateUserName(newName: string) {
        return newName;
    }

    @Action({ commit: 'updateUserFirstNameMutation' })
    public updateUserFirstName(newName: string) {
        return newName;
    }

    @Action({ commit: 'updateUserLastNameMutation' })
    public updateUserLastName(newName: string) {
        return newName;
    }

    @Mutation
    public updateUserNameMutation(newName: string) {
        this.user.userName = newName;
    }

    @Mutation
    public updateUserFirstNameMutation(newName: string) {
        this.user.firstName = newName;
    }

    @Mutation
    public updateUserLastNameMutation(newName: string) {
        this.user.lastName = newName;
    }

    public get getUser(): User {
        return this.user;
    }
}

export const UserModule = getModule(user);
new LiftStorage(UserModule, 'user');
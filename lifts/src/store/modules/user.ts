import { VuexModule, Module, getModule, Action, Mutation } from 'vuex-module-decorators';
import store from '@/store';
import { User, Nullable } from '@/backend/interfaces';
import { LiftStorage } from '@/backend/vuexLocalForage';

export interface IUserModule {
    user: Nullable<User>,
}

@Module({dynamic: true, store, name: 'user'})
class user extends VuexModule implements IUserModule {
    public user: Nullable<User>  = {
        userName: '',
        firstName: '',
        lastName: '',
        authState: true,
    };

    @Action({ commit: 'setStateMutation' })
    public setStateFromStorage(user: User) {
        return user;
    }

    @Mutation
    public setStateMutation(user: User) {
        this.user = user;
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
        if (this.user !== null) {
            this.user.userName = newName;
        }
    }

    @Mutation
    public updateUserFirstNameMutation(newName: string) {
        if (this.user !== null) {
            this.user.firstName = newName;
        }
    }

    @Mutation
    public updateUserLastNameMutation(newName: string) {
        if (this.user !== null) {
            this.user.lastName = newName;
        }
    }

    public get getState() {
        return this.user;
    }

    public get getUser() {
        return this.user;
    }

    // public get getUser(): User {
    //     return this.user;
    // }
}


new LiftStorage(getModule(user), 'user');
export const UserModule = getModule(user);
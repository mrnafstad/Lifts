<template>
   <v-container class="profile">
     <v-row>
       <v-col>Username:</v-col>
       <v-col v-if="user">
         <v-text-field :value="user.userName" @change="updateUserName"></v-text-field>
       </v-col>
     </v-row>
    <v-row>
       <v-col>First name:</v-col>
       <v-col v-if="user">
         <v-text-field :value="user.firstName" @change="updateFirstName"></v-text-field>
         </v-col>
     </v-row>  
      <v-row>
       <v-col>Last name:</v-col>
       <v-col v-if="user">
         <v-text-field :value=" user.lastName" @change="updateLastName"></v-text-field>
       </v-col>
     </v-row>
   </v-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { UserModule } from '@/store/modules/user';
import { User, Nullable } from '@/backend/interfaces';

@Component({
  components: {
  },
})
export default class Profile extends Vue {
  
  public get user(): Nullable<User>{
    return UserModule.getUser;
  }

  public updateUserName(newName: string): void {
    UserModule.updateUserName(newName);
  }

  public updateFirstName(newName: string): void{
    UserModule.updateUserFirstName(newName);
  }

  public updateLastName(newName: string): void {
    UserModule.updateUserLastName(newName);
  }

}
</script>

<style>

</style>
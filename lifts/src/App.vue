<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
    <span @click="$router.push('/CurrentExercise')" class="menu-item">Current Exercise</span>
    <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>
              mdi-dots-vertical
            </v-icon>
            </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(route,idx) in routes" :key="idx">
            <v-list-item-title @click="$router.push(route.path)" class="menu-item">{{ route.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-switch label="Advanced" @click.stop="toggleAdvanced" class="advanced-switch">
        </v-switch>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';


@Component
export default class App extends Vue {
  public routes = this.$router.options.routes;

  public toggleAdvanced(): void {
    // toggle advanced view
  }
}
</script>
<style scoped>
.menu-item {
  cursor: pointer;
}

.advanced-switch {
  padding: 0 15px;
}
</style>
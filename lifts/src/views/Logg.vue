<template>
  <div class="logg">This will be the logg view</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class Logg extends Vue {}
</script>

<style scoped>
.logg {
    height: 100%;
    background-color: grey;
}
</style>
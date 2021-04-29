<template>
    <div>
        <v-btn icon @click="valueIncrement">
            <v-icon>
                mdi-chevron-up
            </v-icon>
        </v-btn>
        <v-input v-model="value">
            
        </v-input>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, VModel } from 'vue-property-decorator'

@Component
export default class NumberWithChevron extends Vue {
    @Prop({ required: false, type: String}) public label?: string;
    @VModel({required: true, type: Number}) public value!: number;

    public valueIncrement(): void {
        this.value += 1;
    }

    public valueDecrement(): void {
        this.value -= 1;
    }
}
</script>

<style>

</style>
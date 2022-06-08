<script setup lang="ts">
import { ref, onMounted } from "vue";
// defineProps<{ msg: string }>();
const bg = ref(null)
onMounted(() => {
 console.log(bg, 'bg')
 const canvas = bg.value;

});

const count = ref(0);
</script>

<template>
 <div>
    <canvas ref="bg" bg-blue></canvas>
 </div>
</template>

<style lang="scss" scoped>
    // .aaaa {
    //     border-color: red;
    // }
</style>

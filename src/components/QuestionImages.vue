<template>
    <div class="question-img-container">
        <img v-for="(imagePath, n) in imagePaths" :src="images[n].value"
            :alt="imagePath" />
    </div>
</template>

<script setup>
import { defineProps, ref, computed } from "vue"
const prop = defineProps({
    "imagePaths": {
        type: Array,
    }
})

const images = computed(()=>{
    return prop.imagePaths.map(imagePath => ref(`/src/assets/data/${imagePath}`))
})
    


</script>

<style scoped>
div.question-img-container {
    display: flex;
    justify-content: center;
    box-sizing: border-box;

}
</style>
<template>
    <div class="explanation-container">
        <div class="explanation"><b>Explanation: </b> {{ explanation }}</div>
        <div class="category"><b>Category: </b> {{ category }}</div>
        <div class="references"><b>References: </b> {{ references }}</div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
const prop = defineProps({
    explanation: String,
    category: String,
    references: String,
});
</script>

<style scoped>
div.explanation-container > div {
    padding: 0.5rem;
}

div.explanation-container {
    border-radius: 0.2rem;
    background-color: antiquewhite;
    border: 0.15rem solid rgb(255, 191, 107);
    margin: 0.5rem;
}
</style>

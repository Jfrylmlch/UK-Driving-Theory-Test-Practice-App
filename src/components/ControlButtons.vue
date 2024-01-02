<template>
    <div class="control-buttons">
        <button id="check" @click="checkAnswer">Check</button>
        <button id="next" @click="nextQuestion">Next</button>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    "checkAnswer",
    "nextQuestion"
])
const checkAnswer = ()=>{
    emit("checkAnswer", true)
}

const nextQuestion = ()=>{
    emit("nextQuestion", 1)
}

const previousQuestion = ()=>{
    emit("changeQuestion", -1)
}
</script>

<style scoped>
div.control-buttons {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0.5rem;
}

div.control-buttons button {
    background-color: rgb(255, 255, 255);
    border: 0.1rem solid #767676;
    padding: 0.5rem;
    flex-basis: 30%;
}

div.control-buttons button:hover {
    background-color: rgb(230, 230, 230);
}
</style>
<template>
    <div class="option-container">
        <div class="option" v-for="option in options" @click="selectOption(option)" :class='{
            selected: selectedOptions.has(option),
            correct: showAnswer && selectedCorrectOption(option),
            incorrect: showAnswer && !selectedCorrectOption(option),
            true_ans: showAnswer && correctAnswers.indexOf(option) >= 0
        }'>

            <img v-if="option.startsWith('@')" :src="`/src/assets/data/${option.replace(/@/, '')}`" />
            <div v-else>{{ option }}</div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from "vue"
const prop = defineProps({
    "options": {
        type: Array,
        required: true,
    },
    "correctAnswers": {
        type: Array,
        required: true,
    },
    "showAnswer": {
        type: Boolean,
        required: true,
    },
    "result": {
        type: Number,
        required: true,
        default: 0
    },
    "updateResult": {
        type: Function,
        required: true,
        default: () => { }
    },
})
const selectedOptions = ref(new Set())

const selectOption = (option) => {
    if (prop.showAnswer) {
        return
    }
    if (selectedOptions.value.has(option)) {
        selectedOptions.value.delete(option)
    } else {
        selectedOptions.value.add(option)
    }
}

const selectedCorrectOption = (option) => {
    if (selectedOptions.value.size === 0) {
        prop.updateResult(-1)
        return false
    }
    if (!selectedOptions.value.has(option)) {
        return false
    }
    if (prop.correctAnswers.indexOf(option) >= 0) {
        prop.updateResult(1)
        return true
    } 
    prop.updateResult(-1)
    return false
}

</script>

<style scoped>
.option-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;

}

.option {
    font-size: large;
    padding: 0.5rem;
    background-color: #f1f1f1;
    margin: 0.5rem;
    border-radius: 0.2rem;
    text-align: center;
    justify-items: center;
    box-sizing: border-box;
    flex-basis: 45%;
}

.option:hover {
    cursor: pointer;
}

.option:not(.checked):not(.selected):hover {
    background-color: #e1e1e1;
}

.option.selected {
    background-color: #ff7b1d;
}

.option.selected:not(.correct, .incorrect):hover {
    background-color: #f78d42;
}

.option.selected.correct {
    background-color: rgb(57, 223, 57);
}

.option.selected.incorrect {
    background-color: rgb(223, 57, 57);
}

.option.true_ans {
    box-shadow: 0px 0px 0px 0.2rem rgb(57, 223, 57) inset;
}

.optionCheckBox {
    width: 2rem;
}
</style>
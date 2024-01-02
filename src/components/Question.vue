<template>
    <div id="question-container">
        <EntryTitle :questionNumber="currentQuestionNumber" :title="currentQuestion.entry_title" />
        <QuestionImages :imagePaths="currentQuestion.question_img_paths" />
        <Options :result="result" :updateResult="updateResult" :options="currentQuestion.options" :correctAnswers="currentQuestion.correct_ans" :showAnswer="checkAnswer"/>
        <Explanation :explanation="currentQuestion.explanation" :category="currentQuestion.category"
            :references="currentQuestion.references" v-if="checkAnswer"/>
    </div>
</template>

<script setup>
import Options from "@/components/Options.vue"
import EntryTitle from "@/components/EntryTitle.vue"
import QuestionImages from "@/components/QuestionImages.vue"
import Explanation from "@/components/Explanation.vue"

import { defineProps } from "vue"
const prop = defineProps({
    "currentQuestion": {
        type: Object,
        required: true
    },
    "currentQuestionNumber": {
        type: Number,
        required: true
    },
    "checkAnswer": {
        type: Boolean, 
        required: true,
        default: false
    },
    "result": {
        type: Number,
        required: true,
        default: 0
    },
    "updateResult": {
        type: Function,
        required: true,
        default: ()=>{}
    },
})



</script>

<style scoped>
div.question-img-container {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
}

div#question-container {
    flex-grow: 0;
    /* height: 100%; */
    /* overflow-y: auto; */
    box-sizing: border-box;
}
</style>
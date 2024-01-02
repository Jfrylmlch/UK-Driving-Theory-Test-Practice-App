<template>
    <Overlay v-show="showScoreboard || showSettings" :tempcolor="`blue`" @click="showScoreboard = false"></Overlay>

    <Toolbar @openScoreboard="handleOpenScoreboard" @openSettings="handleOpenSettings" :showSearchPanel="showSearchPanel"
        :toggleSearchPanel="toggleSearchPanel" />
    <div id="content-container">
        <SearchPanel v-show="showSearchPanel" :history="history" :results="results" :questions="questionBank" @setQuestion="q => {handleSetQuestion(q)}">
        </SearchPanel>
        <div id="answering-container">
            <Scoreboard :results="results" :showScoreboard="showScoreboard" @closeScoreboard="handleOpenScoreboard" />
            <Settings :showSettings="showSettings" :clearData="clearData" @closeSettings="handleOpenSettings"
                :setTracker="setTracker">
            </Settings>
            <Question :result="results[currentQuestionNumber]" :updateResult="updateResult"
                :currentQuestionNumber="currentQuestionNumber" :currentQuestion="questionBank[currentQuestionNumber]"
                :checkAnswer="checkAnswer" />
            <ControlButtons @checkAnswer="handleCheckAnswer" @nextQuestion="handleNextQuestion" />
        </div>
    </div>
</template>

<script setup>
import Scoreboard from '@/components/Scoreboard.vue';
import Toolbar from '@/components/Toolbar.vue';
import SearchPanel from '@/components/SearchPanel.vue';
import Question from '@/components/Question.vue';
import ControlButtons from '@/components/ControlButtons.vue';
import Settings from '@/components/Settings.vue';

import questionBank from "@/assets/data/data.json"

import { ref, reactive, onBeforeMount } from "vue"
import Overlay from '@/components/Overlay.vue';

import { useProgressTracker } from "../composables/useProgressTracker"
import { useLocalStorage } from "../composables/useLocalStorage"
import { useHistoryTracker } from "../composables/useHistoryTracker"

const showScoreboard = ref(false)
const showSearchPanel = ref(false)
const showSettings = ref(false)
const checkAnswer = ref(false)
const { history, addHistoryItem } = useHistoryTracker()
const currentQuestionNumber = ref()

const results = reactive(new Array(questionBank.length).fill(0))

const { retrieveStorageData, removeStorageData, writeStorageData } = useLocalStorage()

const { RandomModeProgressTracker, OrderedModeProgressTracker } = useProgressTracker()
const tracker = ref(null)

const handleOpenScoreboard = (open) => {
    showScoreboard.value = open
}

const handleOpenSettings = (open) => {
    showSettings.value = open
}

const handleCheckAnswer = (check) => {
    if (results[currentQuestionNumber.value]===0) {
        addHistoryItem(currentQuestionNumber.value)
    }
    checkAnswer.value = check
}

const setTracker = (r) => {
    const oTracker = new OrderedModeProgressTracker(questionBank, currentQuestionNumber)
    const rTracker = new RandomModeProgressTracker(questionBank, currentQuestionNumber)
    tracker.value = r ? rTracker : oTracker
}

const handleNextQuestion = () => {
    const stillHaveQuestions = tracker.value.nextQuestion();
    if (!stillHaveQuestions) {
        showScoreboard.value = true
        return
    }
    checkAnswer.value = false
    writeStorageData("currentQuestionNumber", currentQuestionNumber)
}

const handleSetQuestion = (q) => { 
    tracker.value.setQuestion(q) 
    checkAnswer.value = false
    writeStorageData("currentQuestionNumber", currentQuestionNumber)
}

const toggleSearchPanel = () => {
    showSearchPanel.value = !showSearchPanel.value
}

const updateResult = (r) => {
    results[currentQuestionNumber.value] = r
    localStorage.setItem('results', JSON.stringify(results))
}

const clearData = () => {
    removeStorageData("history")
    removeStorageData("results")
    removeStorageData("currentQuestionNumber")
    location.reload();
}

onBeforeMount(() => {
    retrieveStorageData("history", history)
    retrieveStorageData("results", results)
    retrieveStorageData("currentQuestionNumber", currentQuestionNumber)
    setTracker(false)
    writeStorageData("currentQuestionNumber", currentQuestionNumber)
})

</script>

<style scoped>
div#content-container {
    padding: 0;
    display: flex;
    box-sizing: border-box;
    height: calc(100vh - 2rem);

}

#answering-container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex-grow: 1;
}
</style>
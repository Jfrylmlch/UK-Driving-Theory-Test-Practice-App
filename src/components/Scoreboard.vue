<template>
    <div id="scoreboard-container" v-show="showScoreboard">
        <div id="scoreboard-info">
            <div id="view-options">
                <label for="showCorrect">show correct</label>
                <input type="checkbox" v-model="scoreboardViewOptions['correct']" name="showCorrect" id="showCorrect"
                    :true-value="true" :false-value="false">
                <label for="showIncorrect">show incorrect</label>
                <input type="checkbox" v-model="scoreboardViewOptions['incorrect']" name="showIncorrect" id="showIncorrect"
                    :true-value="true" :false-value="false">
                <label for="showIncomplete">show incomplete</label>
                <input type="checkbox" v-model="scoreboardViewOptions['incomplete']" name="showIncomplete"
                    id="showIncomplete" :true-value="true" :false-value="false">
            </div>
            <div id="score">
                Score: {{ score }}
            </div>
        </div>
        <div id="scoreboard">
            <table>
                <tr>
                    <th>Question No.</th>
                    <th>Result</th>
                </tr>
                <tr v-for="(r, n) in results" v-show="showRow(r)">
                    <td>{{ n }}</td>
                    <td v-if="r === 1" class="correct">
                        Correct
                    </td>
                    <td v-else-if="r === -1" class="incorrect">
                        Incorrect
                    </td>
                    <td v-else class="incomplete">
                        Incomplete
                    </td>
                </tr>
            </table>


        </div>
        <button id="close-btn" @click="closeScoreboard">Close</button>

    </div>
</template>

<script setup>
import { defineEmits, reactive, computed } from "vue"

const scoreboardViewOptions = reactive({
    "correct": true,
    "incorrect": true,
    "incomplete": false,
})

const showRow = (r) => {
    if (r === 0 && scoreboardViewOptions['incomplete']) {
        return true
    }
    if (r === 1 && scoreboardViewOptions['correct']) {
        return true
    }
    if (r === -1 && scoreboardViewOptions['incorrect']) {
        return true
    }
    return false
}

const score = computed(() => {
    const ncorrect = props.results.filter(x => x === 1).length
    const ncomplete = props.results.filter(x => x === 1 || x === -1).length
    if (ncomplete === 0) {
        return `0/0 (0.0%)`
    }
    return `${ncorrect}/${ncomplete} (${(ncorrect/ncomplete*100).toFixed(1)}%)`
})

const props = defineProps({
    "showScoreboard": {
        type: Boolean,
        required: true
    },
    "results": {
        type: Array,
        required: true
    }
})

const emit = defineEmits([
    "closeScoreboard"
])

const closeScoreboard = () => {
    emit("closeScoreboard", false)
}



</script>

<style scoped>
#scoreboard-container {
    position: fixed;
    z-index: 1;
    background-color: white;
    box-sizing: border-box;
    width: 85%;
    height: 85vh;
    padding: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    }

#scoreboard-info {
    display: flex;
    justify-content: space-between;
}

#scoreboard {
    box-sizing: border-box;
    width: 100%;
    overflow: auto;
    flex: 1;
}

.correct {
    color: green;
}

.incorrect {
    color: red;
}

.incomplete {
    color: blue;
}

table {
    width: 100%;
}

td,
th {
    background-color: #f1f1f1;
    border: white solid;
}

#close-btn {
    background-color: #04AA6D;
    border: 0;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-weight: bold;
    color: white;
}

#close-btn:hover {
    background-color: #058254;
}
</style>
<template>
    <SidePanel :id="`browser`">
        <div id="tab-switch-bar">
            <button class="tab-switcher" id="browse-toggle" @click="showSearchPanel = true;">Browse</button>
            <button class="tab-switcher" id="history-toggle" @click="showSearchPanel = false;">History</button>
        </div>
        <input type="text" name="searchbox" id="searchbox" placeholder="Search..." v-model="queryStr">
        <div id="search-panel" v-show="showSearchPanel">
            <div id="query-results-container">
                <div class="query-result" v-for="r in searchBrowseResult" @click="setQuestion(r)" :key="`query${r}`">
                    <div>
                        <b>{{ `Q${r}. ` }}</b>{{ `${questions[r].entry_title}` }}
                    </div>
                    <div class="check-mark-container">
                        <span v-if="results[r] == 1" class="check-mark">&#10004</span>
                        <span v-else-if="results[r] == -1" class="check-mark">&#10060</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="history-panel" v-show="!showSearchPanel">
            <div id="history-container">
                <div class="history-item" v-for="r in searchHistoryResult" @click="setQuestion(r)" :key="`history${r}`">
                    <div>
                        <b>{{ `Q${r}. ` }}</b>{{ `${questions[r].entry_title}` }}
                    </div>
                    <div class="check-mark-container">
                        <span v-if="results[r] == 1" class="check-mark">&#10004</span>
                        <span v-else-if="results[r] == -1" class="check-mark">&#10060</span>
                    </div>
                </div>
            </div>
        </div>

    </SidePanel>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue"
import SidePanel from "./SidePanel.vue";

const props = defineProps({
    'questions': {
        type: Array,
        required: true
    },
    "history": {
        type: Array,
        default: [],
        required: true
    },
    "results": {
        type: Array,
        default: [],
        required: true
    }
})

const emit = defineEmits([
    "setQuestion"
])

const queryStr = ref("")

const searchBrowseResult = computed(() => {
    const re = new RegExp(`.*${queryStr.value}.*`, "i")
    let searchResults = []
    for (let n = 0; n < props.questions.length; n++) {
        if (re.test(props.questions[n].entry_title) || re.test(n)) {
            searchResults.push(n)
        }
    }
    return searchResults
})

const searchHistoryResult = computed(() => {
    if (queryStr.value.length === 0) return props.history
    const re = new RegExp(`.*${queryStr.value}.*`, "i")
    let searchResults = []
    for (let n = 0; n < props.history.length; n++) {
        if (re.test(props.questions[props.history[n]].entry_title) || re.test(props.history[n])) {
            searchResults.push(props.history[n])
        }
    }
    return searchResults
})

const setQuestion = (questionNumber) => {
    emit("setQuestion", questionNumber)
}

const showSearchPanel = ref(true)

const historyDesc = computed(() => {
    return props.history.slice().reverse()
})

</script>

<style scoped>
#browser {
    /* background-color: rgb(91, 91, 91);
    width: 25%;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column; */
    overflow-y: hidden;
}

.check-mark {
    color: rgb(0, 54, 12);
}


#tab-switch-bar {
    display: flex;
    justify-content: center;
    padding: 0.2rem;
}

.tab-switcher {
    border: 0;
    background-color: rgb(235, 235, 235);
}

#browse-toggle {
    border-radius: 0.5rem 0 0 0.5rem;
    border-right: 0.1rem rgb(200, 200, 200) solid;
    background-color: v-bind("showSearchPanel ? `rgb(200, 200, 200)` : `rgb(235, 235, 235)`");
}

#history-toggle {
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: v-bind("showSearchPanel ? `rgb(235, 235, 235)` : `rgb(200, 200, 200)`");
}

#search-panel,
#history-panel {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: auto;
}

#searchbox {
    margin: 0.3rem;
    padding: 0.2rem 0.4rem;
    height: 1.5rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 0.01rem black solid;
}

.query-result,
.history-item {
    background-color: rgb(235, 235, 235);
    width: 100%;
    margin: 0;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
}

.check-mark-container {
    padding-left: 0.5rem;
}

.query-result:hover,
.history-item:hover {
    background-color: rgb(200, 200, 200);
    cursor: pointer;
}

#query-results-container {
    overflow-y: auto;
    width: 100%;
}
</style>

<template>
    <div id="settings-container" v-show="showSettings">
        <div id="settings">
            <h2>Settings</h2>
            <div class="checkbox-container">
                <input type="checkbox" name="mode" id="mode" @input="setTracker($event.target.checked)">
                <label for="mode">randomly select questions</label>
            </div>
            <div>
                <button type="button" id="clear-data-btn" @click="clearData">Clear Data</button>
            </div>

        </div>
        <button id="close-btn" @click="closeSettings">Close</button>
    </div>
</template>

<script setup>
import { defineEmits, ref } from "vue"

const props = defineProps({
    "showSettings": {
        type: Boolean,
        default: false,
        required: true
    },
    "clearData": {
        type: Function,
        required: true
    },
    "setTracker": {
        type: Function, 
        required: true
    }
})

const emit = defineEmits([
    "closeSettings",
])

const closeSettings = () => {
    emit("closeSettings", false)
}

</script>

<style scoped>
#settings-container {
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
    justify-content: space-between;
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

#clear-data-btn {
    background-color: #ff0000;
    border: 0;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-weight: bold;
    color: white;
    margin: auto;
}

#clear-data-btn:hover {
    background-color: #820505;
}

#settings div {
    margin-bottom: 1rem;
}




.checkbox-container {
    display: flex;
    align-items: center;
}

.checkbox-container label {
    font-size: larger;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.checkbox-container input[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
}

.checkbox-container label::before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .15em;
    margin-right: .5em;
    border: .05em solid black;
}

.checkbox-container label:hover::before {
    box-shadow: 0 0 0.2rem black;
    /* background-color: #35E07D; */
}

.checkbox-container input[type='checkbox']:focus+label::before {
    box-shadow: 0 0 0.2rem black;
}

/* .checkbox-container input[type='checkbox']:disabled + label,
.checkbox-container input[type='checkbox']:disabled {
    color: #aaa;
    cursor: default;
} */

.checkbox-container input[type='checkbox']:checked+label::before {
    content: '\002714';
    background-color: #04AA6D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>
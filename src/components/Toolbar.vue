<template>
    <nav>
        <ul>
            <div id="menu-btn" @click="toggleSearchPanel"></div>
            <!-- <li><router-link to="/home">Home</router-link></li> -->
            <li><router-link to="/about">About</router-link></li>
        </ul>
        <div id="right">
            <button id="scoreboard-btn" @click="openScoreboard">Scoreboard</button>
            <img id="setting-btn" alt="setting-btn" src="../assets/icons/setting-icon.svg" @click="openSettings"/>

        </div>
    </nav>
</template>

<script setup>
import { defineEmits, defineProps } from "vue"

const props = defineProps({
    "showSearchPanel": {
        type: Boolean,
        required: true,
        default: false
    },
    "toggleSearchPanel": {
        type: Function,
        required: true,
    }
})


const emit = defineEmits([
    "openScoreboard",
    "openSettings",
    'update:showSearchPanel'
])

const openScoreboard = () => {
    emit("openScoreboard", true)
}

const openSettings = () => {
    emit("openSettings", true)
}





</script>

<style scoped>
nav {
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 0.5rem 0 rgb(227, 227, 227);
    padding: 0.15rem;
    margin: 0;
    border: 0;
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}

#menu-btn {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    padding-right: .5rem;
    box-sizing: border-box;
}

#menu-btn:hover {
    cursor: pointer;
}

#menu-btn::before {
    --strokeWidth: 3px;
    content: '';
    display: block;
    width: 20px;
    height: var(--strokeWidth);
    border-radius: calc(var(--strokeWidth) / 2);
    background-color: #000;
    box-shadow: 0 calc(-2 * var(--strokeWidth)) 0 0, 0 calc(2 * var(--strokeWidth)) 0 0;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

nav li {
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a:hover {
    color: #c00;
}

#scoreboard-btn {
    background-color: white;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    background-color: #04AA6D;
    border: 0;
    color: white;
}

#scoreboard-btn:hover {
    box-shadow: 0px 0px 5px rgb(205, 205, 205);
    background-color: #058254;
}

#right {
    display: flex;
    
}
</style>
<template>
    <div class="menu-sidebar" :id="id">
        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps ({
    id: {
        type: String,
        required: true
    }
})
</script>

<style>
.menu-sidebar {
    background-color: rgb(91, 91, 91); 
    width: 25%;
    margin: 0;
    padding: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto; 
}
</style>

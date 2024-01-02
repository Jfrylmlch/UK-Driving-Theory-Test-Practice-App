<template>
    <div class="entry-title">
        <span class="questionNumber"><b>Q{{ questionNumber }}. </b></span>
        {{ title }}
    </div>
</template>

<script setup>
    import { defineProps } from "vue"
    const prop = defineProps({
        "title": {
            type: String,
            required: true,
        },
        "questionNumber": {
            type: Number,
            required: true,
        }
    })
</script>

<style scoped>
.entry-title {
    font-size: x-large;
    padding: 0.5rem;
    box-sizing: border-box;
}
</style>
<template>
    <div id="not-found-container">
        <h1>404 Not Found</h1>
        <p>You will be redirected to home page in {{ counter }} seconds.</p>
        <router-link to="practice">
            <button type="button" id="back-to-home-btn">Back to Home</button>
        </router-link>
    </div>
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router"
import { ref } from "vue"

const router = useRouter()
const timeout = ref(10)
const counter = timeout

setInterval(()=>{
    counter.value--
}, 1000)

setTimeout(() => {
    router.push('/practice')
}, timeout.value * 1000)

</script>
<style scoped>
#not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#back-to-home-btn {
    background-color: #04AA6D;
    border: 0;
    padding: 0.5rem;
    border-radius: 0.2rem;
    font-weight: bold;
    color: white;
    margin: auto;
}

#back-to-home-btn:hover {
    background-color: #058254;
}
</style>

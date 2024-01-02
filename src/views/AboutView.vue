<template>
  <div id="about-container">
    <h1>About</h1>
    <h2>Motivation</h2>
    <p>
      Driving is almost an indispensable skill in the UK. Unfortunately, the UK driving theory test is a notoriously
      challenging test, with the pass rate lower than 50%. To prepare for the test, we can do practice in a variety of
      apps or websites. Unfortunately, most of them contain annoying ads or are paid apps. I hope this website
      can serve as a simple and privacy respecting practice platform for everyone. Feel free to raise issues or give
      suggestions on my github page, and give a &#11088 if you like this project.
    </p>
    <p>
      This dataset consists of 3932 multiple-choice questions, ranging from 0 to 3931. All data in this webpage were
      scraped from other free practice websites. You can either let the webpage randomly select questions for you, or do
      the exercises in order.
    </p>
    <p>
      In the real test, you have 57 minutes to answer 50 multiple-choice questions. In order to pass the test, at least 43
      questions out of 50 should be correct (86%). Details about the theory test can be referred to <a target="_blank"
        href="https://www.gov.uk/theory-test/multiple-choice-questions">the official website</a>.
    </p>
    <h2>Usage</h2>
    <h3>How to navigate?</h3>
    <p>
      Two practice modes are implemented, either doing the questions randomly or in order. In "random" mode, the next question will be randomly selected from the question bank whenever the "Next" button is clicked. In "ordered" mode, the next question will be the question with the current question number plus one. If you want to review a particular question, you can navigate it by the search panel. Once all the questions are completed, the scoreboard will pop up automatically to show you the results. 
    </p>
    <h3>Will the history be preserved?</h3>
    <p>
      You do not need to worry about losing data if you accidentally refresh the page or close the tab. The data are preserved in the local storage of your browser until your browser is closed. If you would like to start the test over, you can clear the data in the settings panel.
    </p>
    <router-link to="practice">
      <button type="button" id="back-to-home-btn">Back to Home</button>
    </router-link>

  </div>
</template>

<script setup>
import { RouterLink } from "vue-router"

</script>
<style scoped>
#about-container {
  padding: 1rem;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
}

p {
  width: 100%;
  box-sizing: border-box;
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

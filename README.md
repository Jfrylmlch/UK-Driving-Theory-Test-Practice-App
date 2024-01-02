# UK Driving Theory Test Practice App
## Motivation
Driving is almost an indispensable skill in the UK. Unfortunately, the UK driving theory test is a notoriously
challenging test, with the pass rate lower than 50%. To prepare for the test, we can do practice in a variety of
apps or websites. Unfortunately, most of them contain annoying ads or are paid apps. I hope this website
can serve as a simple and privacy respecting practice platform for everyone. Feel free to raise issues or give
suggestions on my github page, and give a :star: if you like this project.

## Usage 
### How to navigate?
Two practice modes are implemented, either doing the questions randomly or in order. 

In "random" mode, the next question will be randomly selected from the question bank whenever the "Next" button is clicked. In "ordered" mode, the next question will be the question with the current question number plus one. 

If you want to review a particular question, you can navigate it by the search panel. Once all the questions are completed, the scoreboard will pop up automatically to show you the results. 

### Will the history be preserved?
You do not need to worry about losing data if you accidentally refresh the page or close the tab. The data are preserved in the local storage of your browser until your browser is closed. If you would like to start the test over, you can clear the data in the settings panel.

## Host locally
If you are satisfied with the pre-built web app, you can simply serve the webpage using python then open localhost:8000 in a browser:
```sh
cd dist
python3 -m http.server
```

Otherwise you can build it from scratch using javascript:
```sh
npm install
npm run build
```

To scrape the data, 
```sh
cd data_collection/
python3 -m venv data_collection_venv
source data_collection_venv/bin/activate
jupyter-notebook
```
Then run the notebook step by step.



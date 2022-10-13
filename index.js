const questions = [
    {
        question: "How many days are there in a week?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "How many hours are there in a day?",
        optionA: "21 Hours",
        optionB: "24 Hours",
        optionC: "9 Hours",
        optionD: "12 Hours",
        correctOption: "optionB"
    },

    {
        question: "How many paise in 1 Rupee?",
        optionA: "200 Paise",
        optionB: "10 Paise",
        optionC: "50 Paise",
        optionD: "100 Paise",
        correctOption: "optionD"
    },

    {
        question: "How many letters are there in the English alphabet?",
        optionA: "21",
        optionB: "27",
        optionC: "26",
        optionD: "29",
        correctOption: "optionC"
    },

    {
        question: "Rainbow has ___________.",
        optionA: "10 colours",
        optionB: "3 colours",
        optionC: "5 colours",
        optionD: "7 colours",
        correctOption: "optionD"
    },

    {
        question: "How many days are there in a year?",
        optionA: "365 Days",
        optionB: "200 Days",
        optionC: "100 Days",
        optionD: "300 Days",
        correctOption: "optionA"
    },

    {
        question: "What comes after A ?",
        optionA: "F",
        optionB: "C",
        optionC: "B",
        optionD: "D",
        correctOption: "optionC"
    },

    {
        question: "2 + 3 is _______ ?",
        optionA: "5",
        optionB: "8",
        optionC: "7",
        optionD: "9",
        correctOption: "optionA"
    },

    {
        question: "Pick an odd number ?",
        optionA: "10",
        optionB: "8",
        optionC: "4",
        optionD: "9",
        correctOption: "optionD"
    },

    {
        question: "3 x 2 = __",
        optionA: "3",
        optionB: "2",
        optionC: "7",
        optionD: "6",
        correctOption: "optionD"
    },

    {
        question: "9 - 7 = __",
        optionA: "5",
        optionB: "4",
        optionC: "2",
        optionD: "8",
        correctOption: "optionC"
    },

    {
        question: "What comes before G ?",
        optionA: "F",
        optionB: "H",
        optionC: "I",
        optionD: "K",
        correctOption: "optionA"
    },


    {
        question: "How many sides does a Dice have ?",
        optionA: "8",
        optionB: "6",
        optionC: "4",
        optionD: "10",
        correctOption: "optionB"
    },

    {
        question: "What is the color of Sun ?",
        optionA: "Green",
        optionB: "Black",
        optionC: "white",
        optionD: "Yellow",
        correctOption: "optionD"
    },

    {
        question: "What is the colour of moon?",
        optionA: "White",
        optionB: "Red",
        optionC: "Blue",
        optionD: "Green",
        correctOption: "optionA"
    },

    {
        question: "How many vowels are there in English ?",
        optionA: "8",
        optionB: "7",
        optionC: "5",
        optionD: "9",
        correctOption: "optionC"
    },

    {
        question: "Pick the even out",
        optionA: "4",
        optionB: "8",
        optionC: "10",
        optionD: "7",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does square have ?",
        optionA: "Four",
        optionB: "Sevene",
        optionC: "Three",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "Solar system have ______ planets.",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Color of sky is ?",
        optionA: "Green",
        optionB: "Blue",
        optionC: "Red",
        optionD: "Pink",
        correctOption: "optionB"
    },

    {
        question: "How many ears does humans have ?",
        optionA: "one",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionB"
    },

    {
        question: "Cow have __ legs.",
        optionA: "1",
        optionB: "3",
        optionC: "4",
        optionD: "8",
        correctOption: "optionC"
    },

    {
        question: "How many eyes does human have?",
        optionA: "1",
        optionB: "3",
        optionC: "2",
        optionD: "6",
        correctOption: "optionC"
    }

]


let shuffledQuestions = []
function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0
let wrongAttempt = 0
let indexNumber = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 250)

            
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}


function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
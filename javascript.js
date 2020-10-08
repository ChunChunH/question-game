'use strict'

let state = ""
let level = 1
let contador = 1
let randomQuestion;

let questions = [
    {question: "What was the name of the prisoner who was released by Pilate instead of Jesus?",
    answers: ["Judas","Barrabas","Jose de Arimatea"],
    correct: 1,
    },
    {question: "Which of these historical figures was primarily a scientist?",
    answers: ["Albert Einstein","Nelson Mandela","George Washington"],
    correct: 0,
    },
    {question: "What is the longest bone in the human body?",
    answers: ["Humerus","Femur","Tibia"],
    correct: 1,
    }
];

let questionPlace = document.querySelector("#questionPlace");
let answerPlaces = document.querySelectorAll(".realAnswer");
let correctIcons = document.querySelectorAll(".fa-check-circle");
let incorrectIcons = document.querySelectorAll(".fa-times-circle");
let levelPlace = document.querySelector(".level")

function randomQuestions(){
    let indexAleatorio = Math.round(Math.random()*(questions.length-1))
    console.log(indexAleatorio)
    return questions[indexAleatorio]
};


function gameStart(){
    contador = contador+1

    if(contador === 10){
        window.location.href = "final.html"
    };

    levelPlace.innerHTML = level;

    randomQuestion = randomQuestions();
    
    questionPlace.innerHTML = randomQuestion.question;

    answerPlaces.forEach((answerPlace, index)=> {
        answerPlace.innerHTML = randomQuestion.answers[index]
    });

    correctIcons.forEach((correctIcon, index)=> {
        correctIcon.style.display = "none"
    });

    incorrectIcons.forEach((incorrectIcon, index)=> {
        incorrectIcon.style.display = "none"
    });

    normalidad();
}

function normalidad(index){
    correctIcons.forEach((correctIcon, index)=> {
        correctIcon.style.display = "none"
    });
    todoLoDeRespuestas.forEach((respuesta, index)=> {
        respuesta.style.filter = "none"
    });
    boton.innerHTML = "Back Home"
    state = ""
    todoLoDeRespuestas.forEach((answerPlace, index)=> {
        answerPlace.onclick = () => checkResult(index)
    });
}

let todoLoDeRespuestas = document.querySelectorAll(".answer")

let boton = document.querySelector(".buttonSecondary")

function checkResult(index){
    console.log("SE HIZO CLICK",index)
    event.preventDefault()
    if (index === randomQuestion.correct) {
        console.log("ENTRRA")
        correctIcons[index].style.display = "block"
        todoLoDeRespuestas[index].style.filter  = "drop-shadow(0px 1px 10px rgba(9, 3, 44, 0.45))"
        boton.innerHTML = "Continue"
        state = "respondido"
        todoLoDeRespuestas.forEach((answerPlace, index)=> {
            answerPlace.onclick = null
        });
        level = level+1
    }else {
        correctIcons[randomQuestion.correct].style.display = "block"
        incorrectIcons[index].style.display = "block"
        todoLoDeRespuestas[index].style.filter  = "drop-shadow(0px 1px 10px rgba(9, 3, 44, 0.45))"
        boton.innerHTML = "Continue"
        state = "respondido"
        todoLoDeRespuestas.forEach((answerPlace, index)=> {
            answerPlace.onclick = null
        });
   
    }
}

function buttonBottom(){
    if(state === ""){
        window.location.href = "index.html"
    }else {
        gameStart();
    }
}

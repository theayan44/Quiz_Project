let quiz = [
    {
        question: "What does HTML stand for?",
        answer: "answer2",
        options: [
            "Hyper Text Machine Language",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: "answer4",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        question: "What does SQL stand for?",
        answer: "answer4",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        question: "What does XML stand for?",
        answer: "answer1",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },
    {
        question: "In CSS, choose the correct option to select an element by its id (id='idName')?",
        answer: "answer4",
        options: [
            ".idName { }",
            "*idName { }",
            "idname { }",
            "#idName { }"
        ]
    },
    {
        question: "Select the option to make a list that lists the items with bullets?",
        answer: "answer2",
        options: [
            "List",
            "Ul",
            "Dl",
            "Ol"
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "answer1",
        options: [
            "<script>",
            "<javascript>",
            "<js>",
            "<scripting>"
        ]
    },
    {
        question: "Where is the correct place to link a JavaScript?",
        answer: "answer3",
        options: [
            "The <head> section",
            "The <body> section",
            "Both the <head> section and the <body> section",
            "No need to link"
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'quiz.js'?",
        answer: 'answer4',
        options: [
            '<a href="quiz.js">',
            '<script href="quiz.js">',
            '<a src="quiz.js">',
            '<script src="quiz.js">'
        ]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer: 'answer4',
        options: [
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");',
            'alert("Hello World");'
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: "answer2",
        options: [
            "function:myFunction()",
            "function myFunction()",
            "function = myFunction()",
            "function -> myFunction()"
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: 'answer3',
        options: [
            'var array = "HTML", "CSS", "JS"',
            'var array = (1:"HTML", 2:"CSS", 3:"JS")',
            'var array = ["HTML", "CSS", "JS"]',
            'var array = 1:("HTML"), 2:("CSS"), 3:("JS")'
        ]
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer: "answer2",
        options: [
            "round(7.25)",
            "Math.round(7.25)",
            "md(7.25)",
            "Math.md(7.25)"
        ]
    },
    {
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        answer: 'answer2',
        options: [
            'w2 = window.new("URL")',
            'w2 = window.open("URL")',
            'w2 = window.create("URL")',
            'w2 = window.newWindow("URL")'
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "answer2",
        options: [
            "onchange",
            "onclick",
            "onmouseclick",
            "onmouseover"
        ]
    }
];

// const questionNumber = document.getElementById("question-number");
// const question = document.getElementById("question");
// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const option3 = document.getElementById("option3");
// const option4 = document.getElementById("option4");
// const submit = document.getElementById("submit");

let questionIndex = 0;
let points = 0;

function loadContent(){
    const questionNumber = document.getElementById("question-number");
    const question = document.getElementById("question");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
    const submit = document.getElementById("submit");
    const presentQuestion = document.getElementById("present-question");
    const totalQuestion = document.getElementById("total-question");
    questionNumber.innerText = questionIndex+1;
    question.innerText = quiz[questionIndex].question;
    option1.innerText = quiz[questionIndex].options[0];
    option2.innerText = quiz[questionIndex].options[1];
    option3.innerText = quiz[questionIndex].options[2];
    option4.innerText = quiz[questionIndex].options[3];
    presentQuestion.innerText = questionIndex + 1;
    totalQuestion.innerText = quiz.length;
}

function checkAnswer(){
    const answers = document.querySelectorAll(".answer-button");
    let currentAnswer;
    answers.forEach((el) => {
        if(el.checked){
            currentAnswer = el.id;
        }
    })
    if(currentAnswer === quiz[questionIndex].answer){
        points++;
    }
}

function deSelect(){
    const answers = document.querySelectorAll(".answer-button");
    answers.forEach((el) => {
        el.checked = false;
    })
}

function submit(){
    checkAnswer();
    deSelect();
    questionIndex++;
    if(questionIndex < quiz.length-1){
        loadContent();
    }else{
        if(questionIndex === quiz.length-1){
            loadContent();
            const chkSubmit = document.getElementById("submit");
            chkSubmit.innerText = "Submit";
        }
        else{
            const quizContainer = document.querySelector(".quiz-container");
            const scoreContainer = document.querySelector(".score-container");
            const obtainedPoints = document.getElementById("ontained-points");
            const totalPoints = document.getElementById("total-points");
            quizContainer.style.display = "none";
            scoreContainer.style.display = "flex";
            obtainedPoints.innerText = points;
            totalPoints.innerText = quiz.length;
        }
    }
}

function showCondition(){
    const startContainer = document.querySelector(".start-container");
    const conditionContainer = document.querySelector(".condition-container");
    const scoreContainer = document.querySelector(".score-container");
    startContainer.style.display = "none";
    scoreContainer.style.display = "none";
    conditionContainer.style.display = "flex";
    questionIndex = 0;
    points = 0;
    const chkSubmit = document.getElementById("submit");
        chkSubmit.innerText = "Next";
}

function startQuiz(){
    const conditionContainer = document.querySelector(".condition-container");
    const quizContainer = document.querySelector(".quiz-container");    
    conditionContainer.style.display = "none";
    quizContainer.style.display = "flex";
    loadContent();
}


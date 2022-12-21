

//choice
// 0 = rock3
//1 = paper
// 2 = scissor

let choiceArray = ["Rock", "Paper", "Scissor"]
let attempt = 0
let score = 0
let commentSpan1 = document.getElementById('span1');
let commentSpan2 = document.getElementById('span2');
let comment = document.getElementsByClassName("commentText")[0]

const resetFunction = () => {
    score = 0
    attempt = 0
}
//Hide Comment
document.getElementsByClassName("commentText")[0].firstElementChild.style.display = 'none'
//computer choice
const compChoice = () => {
    return Math.floor(Math.random() * 3)
}

// let reset = document.getElementsByClassName("buttons")[0].firstElementChild
// reset.onclick = () => {
//     attempt = 0
//     score = 0
// }

//Whole Processing
const process = (personChoice) => {
    attempt++;
    let comChoice = compChoice()
    if (personChoice == comChoice) {
        comment.innerHTML = `Game Draw! || Computer Choices is ${choiceArray[comChoice]}`
    }
    else if ((personChoice == 0 && comChoice == 2) || (personChoice == 1 && comChoice == 0) || (personChoice == 2 && comChoice == 1)) {
        score++;
        comment.innerHTML = `You Won! || Computer Choices is ${choiceArray[comChoice]}`
    }
    else {
        comment.innerHTML = `You Lose! || Computer Choices is ${choiceArray[comChoice]}`
    } document.getElementsByClassName("score")[0].lastElementChild.firstElementChild.innerText = `${score}`
    document.getElementsByClassName("score")[0].firstElementChild.firstElementChild.innerText = `${attempt}`
}

let clickChoice = document.getElementsByTagName("i")

clickChoice[0].onclick = () => process(0)
clickChoice[1].onclick = () => process(1)
clickChoice[2].onclick = () => process(2)

let btn = document.body.getElementsByTagName("button")

//reset above data
btn[0].onclick = () => {
    document.getElementsByClassName("score")[0].lastElementChild.firstElementChild.innerText = `${0}`
    document.getElementsByClassName("score")[0].firstElementChild.firstElementChild.innerText = `${0}`
    comment.innerHTML=""
    score = 0;
    attempt = 0;
}
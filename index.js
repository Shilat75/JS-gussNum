
// //const user_number=Number(prompt("Enter your number:"));
// const pNew=document.getElementById("p1_")
// pNew.textContent=`your number is`;


// // const p2=document.getElementById("p2_")

//  // if(user_number>10){
    
// //     p2.textContent="your number is Large that 10"
// // }
// // else{
// //       p2.textContent="your number is Smaller that 10"
// // }
// const Nb1=document.createElement('button')
// Nb1.textContent="my button"
// pNew.appendChild(Nb1);


// const p1=document.createElement('p')
// pNew.appendChild(p1);



// setTimeout(() => {
//     p1.textContent="my paragraf"
// }, 5000);

// const b1=document.getElementById("bt1");
// const b2=document.getElementById("bt2");
// const b3=document.getElementById("bt3");
// const form = document.getElementById("f1");

// b1.addEventListener("click",()=>{
//      form.classList.toggle("dark");
// })

// b2.addEventListener("click",()=>{
    
//    const h1= document.createElement("h1")
//      h1.textContent="new h1";
//      console.log(h1);
  
// })

// b3.addEventListener("click",()=>{
//     b1.classList.remove();
//     b1.classList.add("btn1");
//     b2.classList.remove();
//     b3.classList.remove();
   
// })


// // const name=document.getElementById("name");
// // const age=document.getElementById("age");
// // const email=document.getElementById("email");


// // setTimeout(() => {
// //     console.log(` ${name.value} ${age.value} ${email.value} `)
// // }, 30000);





const form = document.getElementById("form");
const guess = document.getElementById("guess");
const result = document.getElementById("result");
const attemptsText = document.getElementById("attempts");
const start = document.getElementById("start");

let randomNumber;
let attempts = 0;
let min = 1;
let max = 100;

function startGame() {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);

    if (!Number.isInteger(min) || !Number.isInteger(max) || min >= max) {
        result.textContent = "Enter a valid range!";
        return;
    }

    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    attempts = 0;
    attemptsText.textContent = "Attempts: 0";
    result.textContent = "Game started!";
    guess.value = "";
    guess.min = min;
    guess.max = max;
    guess.disabled = false;
    form.querySelector("button").disabled = false;
}

start.addEventListener("click", startGame);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (guess.value === "") return;

    const userGuess = Number(guess.value);

    if (!Number.isInteger(userGuess) || userGuess < min || userGuess > max) {
        result.textContent = "Enter a number within the range!";
        return;
    }

    attempts++;
    attemptsText.textContent = "Attempts: " + attempts;

    if (userGuess > randomNumber) {
        result.textContent = "Too High! 📈";
        result.style.color = "red";
    }
    else if (userGuess < randomNumber) {
        result.textContent = "Too Low! 📉";
        result.style.color = "orange";
    }
    else {
        result.textContent = "Correct! 🎉";
        result.style.color = "green";
        guess.disabled = true;
        form.querySelector("button").disabled = true;
    }

    result.classList.remove("animate");
    void result.offsetWidth;
    result.classList.add("animate");
});

startGame();

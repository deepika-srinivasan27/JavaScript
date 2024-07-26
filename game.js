let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()  => {
        //rock, paper scissors
        const options = ["rock", "paper", "scissors"];
        const randIdx = Math.floor(Math.random() * 3);
        return options [randIdx];

};

const drawGame = () => {
    
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin ,userChoice , compChoice) => {
    if(userWin) {
        userScore++ ;
        userScorePara.innerText = userScore;
       
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++ ;
        compScorePara.innerText = compScore;
        
        msg.innerText = `You Lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
     
     //Generate computer choice
     const compChoice =  genCompChoice();
     

     if(userChoice === compChoice){
        //Draw Game
        drawGame();
     } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scciors, papper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock , scissors 
            userWin = compChoice === "scissors" ? false : true;
        } else{
            // rock , papper
           compChoice === "rock" ? false : true ;

        }
           showWinner(userWin , userChoice , compChoice);
        }
     };


choices.forEach((choice) => {
          
          choice.addEventListener("click", () =>{
             const userChoice = choice.getAttribute("id");

             playGame(userChoice);         
          });
});
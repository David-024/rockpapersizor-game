let user=0;
let computer=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user");
const compscore=document.querySelector("#computer");
//3rd process--
const gencompchoice=() =>{
const options=["rock","paper","sissor"];
const randid=Math.floor(Math.random()*3);
return options[randid];
}
//4th step--
const showwinner=(userwin,userchoice,compchoice) =>{
if(userwin){
    user++;
    userscore.innerText=user;
    console.log("you win");
    msg.innerText=`you win ! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green"
}
    else{
        computer++;
        compscore.innerText=computer;
    console.log("you lost");
    msg.innerText=`you lost. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red"
    }
};
// 2nd process-- it calls gencompchoice function--
const playgame=(userchoice) => {
console.log("user choice=",userchoice);
const compchoice=gencompchoice(); //calling gencompchoice function to get computer choice.
console.log("comp choice=",compchoice);

if(userchoice===compchoice)
{
console.log("game draw");
msg.innerText="game draw, try again !";

msg.style.backgroundColor="#081b31";
}else{
    let userwin=true;
    if (userchoice==="rock"){
    userwin=compchoice==="sissor"?true:false;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="rock"?true:false;
    } else {
        userwin=compchoice==="paper"?true:false;
    }
     showwinner(userwin,userchoice,compchoice); //it calls showwinner function here
}
};
//1st process
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // calling function playgame to play the game and passing user choice
        playgame(userchoice);
    });
});
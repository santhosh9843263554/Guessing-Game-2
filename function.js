const randomNumber=Math.floor(Math .random()*9+1);
const userGeuss=document.querySelector("#input");
const resultDiv=document.querySelector(".result");
const historyDiv=document.querySelector(".history");
let chances=3;
console.log(randomNumber);





historyDiv.innerHTML="";
let isWin=false;
function game(){
    let result;
    const  guess=userGeuss.value;
    switch( true){
        case( guess>100||guess<1):
        result="Guess The Number between 1 and 100"
        break;
         
         
         case(randomNumber==guess):
         result="You Won!" + audio;
         isWin=true;
        
         
         
         break;

case( randomNumber<guess):
result="You Too Highe"
break;
         case( chances==1):
         result="You Too Highe";
         result="Game over!"+ randomNumber;
         break;


         case(randomNumber>guess):
         result="You too Low";
         break;
         case(chances==0):
            result=
            reload();




        default:( chances==1)



         
         result="Game Over!" + randomNumber;
        }
    chances--;
    historyDiv.innerHTML+=`<h4>You Guessed ${guess}</h4>`
    return resultDiv.innerHTML=result;
    
    }
    
        
    

function reload(){
    
     if(!chances ==1|| isWin){
         location.reload();
     }
}
reload();

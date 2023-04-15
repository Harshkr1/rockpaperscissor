function getComputerChoice() {

    /* this Math.random function generatees a random number between 0 and 1 here 
     we  have set our conddition according to that here and Math.floor Rounds off to ther nearest decimal number  */
    let randomnumber = Math.random();
    if (randomnumber <= 0.33)
        return 'Rock';
    else if (randomnumber > 0.33 && randomnumber <= 0.66)
        return 'Paper';
    else
        return 'Scissor ';
}
console.log(getComputerChoice());
function getUserChoice() {
    //generate User choice 
    let entry=prompt("ENTER YOUR CHOICE :");
    // we are bringing it down to lower case so that it becomes case insensitive using the mentioned function here 
    let userChoice = entry.toLowerCase();

    return userChoice;
}
console.log(getUserChoice());
let choice=getComputerChoice().toLowerCase();
function Result(userChoice,choice)
{
    if(userChoice==choice)
    {
        return 'Both Got Same choice hence Match Draw';
    }
    //using lower case because we have made already this to Lower case here 
    else if(userChoice==rock && choice==scissor)
    {
        return 'User wins as User have Rock and Computer have scissor';
    }
    else if(userChoice==scissor && choice==rock)
    {
        return 'Computer wins as User have Scissor and Computer have rock';
    }
    else if(userChoice==paper && choice==scissor)
    {
        return 'Computer  wins as User have Paper and Computer have scissor';
    }
    else if(userChoice==scissor && choice==paper)
    {
        return 'User wins as User have Scissor and Computer have Paper';
    }
    else if(userChoice== rock&& choice==paper)
    {
        return 'Computer  wins as User have rock and Computer have paper';
    }
    else if(userChoice==paper && choice==rock)
    {
        return 'User wins as User have Paper and Computer have  Rock';
    }
}
console.log(Result());

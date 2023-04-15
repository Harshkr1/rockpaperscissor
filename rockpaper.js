function getComputerChoice() {

    /* this Math.random function generatees a random number between 0 and 1 here 
     we  have set our conddition according to that here and Math.floor Rounds off to ther nearest decimal number  */
    let randomnumber = Math.random();
    console.log(randomnumber);
    if (randomnumber <= 0.33)
        return 'rock';
    else if (randomnumber > 0.33 && randomnumber <= 0.66)
        return 'paper';
    else if (randomnumber > 0.66 )
        return 'scissor ';
}

function getUserChoice() {
    //generate User choice 
    let entry = prompt("ENTER YOUR CHOICE :");
    // we are bringing it down to lower case so that it becomes case insensitive using the mentioned function here 
    let userChoice = entry;
    return userChoice;
}
let a = getComputerChoice(); // convert;
let b= getUserChoice();
console.log(a);
console.log(b);

 function value(a) 
 {
    if(a.toLowerCase() === 'rock' )
    {
        return 1;   
    }
    else if(a.toLowerCase() === 'paper')
    {
        return 2;
    }
    else if(a.toLowerCase()==='scissor')
    {
        return 3;
    }
    else
    {
        return 'Invalid Input Cannot fight ';
    }
}

let computer= value(a);
let user= value(b);
console.log(computer);
console.log(user);

function Result(computer, user) {
    if(computer===user)
    {
        return 'Both is Same Match Draw';
    }
    if(computer>user)
    {
        if(computer===3 && user===1)
        {
            return 'User Win Computer Lost ';
        }
        else{
            return 'Computer Wins User lost ';
        }
    }
    else if (computer<user)
    {
          if(computer===1 && user===3)
          {
            return 'Computer Win User Lost';
          }
          else
          {
            return 'User Win Computer Lost';
          }
    }
    else
    {
        return 'No game Possible';
    }
    
}

let result = Result(computer, user);


console.log(result);

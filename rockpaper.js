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
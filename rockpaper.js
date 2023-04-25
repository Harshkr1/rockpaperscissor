let UserCount = 0;
let ComputerCount = 0;
function getComputerChoice() {
    /* this Math.random function generatees a random number between 0 and 1 here 
     we  have set our conddition according to that here and Math.floor Rounds off to ther nearest decimal number  */
    let randomnumber = Math.random();
    // console.log(randomnumber);
    if (randomnumber <= 0.33)
        return 'Rock';
    else if (randomnumber > 0.33 && randomnumber <= 0.66)
        return 'Paper';
    else if (randomnumber > 0.66)
        return 'Scissor';
}
const game = function () {
    const container = document.querySelector('#container');
    const buttons = document.querySelectorAll('img');
    const Comp = document.querySelector('.Comp');
    const User = document.querySelector('.User');
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {

            let Compchance = getComputerChoice().toLowerCase();
            let UserChance = e.target.alt.toLowerCase();
            if (Compchance === UserChance) {
            }
            else if ((UserChance === 'rock' && Compchance === 'scissor') || (UserChance === 'paper' && Compchance === 'rock') || (UserChance === 'scissor' && Compchance === 'paper')) {
                UserCount++;
            }
            else if ((UserChance === 'rock' && Compchance === 'paper') || (UserChance === 'paper' && Compchance === 'scissor') || (UserChance === 'scissor' && Compchance === 'rock')) {
                ComputerCount++;
            }
            let choice = document.querySelector('.choice');
            choice.innerHTML = `<p>User Selected  ${UserChance} <br> and <br> Computer Selected ${Compchance}</p>`;
            Comp.textContent = `Computer Score is ${ComputerCount}`;
            User.textContent = `User Score is ${UserCount}`;



        });
    });

}
const Result = function () {
    const result = document.querySelector('#Result');
    const res = document.querySelector('.res');
    result.addEventListener('click', () => {
        if (UserCount > ComputerCount) {
            res.textContent = `User Win by ${UserCount - ComputerCount} points to Computer`;
        }
        else if (UserCount < ComputerCount) {
            res.textContent = `Computer  Wins by ${ComputerCount - UserCount} points to User`;
        }
        else {
            res.textContent = `Game Tied with both Computer and User having ${UserCount} points.`;
        }
    })
}
game();
Result();



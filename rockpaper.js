
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
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
            let Compchance = getComputerChoice().toLowerCase();
            let UserChance = e.target.textContent.toLowerCase();
            console.log(`UserChoice: ${UserChance} and Compchance: ${Compchance}`);

            game: {
                if (Compchance === UserChance) {
                    console.log(`Match Draw As Both Same `);
                }
                else if ((UserChance === 'rock' && Compchance === 'scissor') || (UserChance === 'paper' && Compchance === 'rock') || (UserChance === 'scissor' && Compchance === 'paper')) {
                    UserCount++;
                    console.log(`User Win Computer Lost `);
                }
                else if ((UserChance === 'rock' && Compchance === 'paper') || (UserChance === 'paper' && Compchance === 'scissor') || (UserChance === 'scissor' && Compchance === 'rock')) {
                    ComputerCount++;
                    console.log(`Computer Win User Lost `);
                }
            }

            console.log(UserCount);
            console.log(ComputerCount);

        });
    });

}
game();

// console.log(a);




// function getUserChoice() {
//     //generate User choice
//     let entry = prompt("ENTER YOUR CHOICE :");
//     let userChoice = entry;
//     return userChoice;
// }
// let UserCount = 0;
// let ComputerCount = 0;




// function Result(comp, user) {
//     let Compchance = comp.toLowerCase();
//     let userchance = user.toLowerCase();
//     if (Compchance === userchance) {
//         return `User:${user} and computer :${comp},Match Draw As Both Same `;
//     }
//     else if ((userchance === 'rock' && Compchance === 'scissor') || (userchance === 'paper' && Compchance === 'rock') || (userchance === 'scissor' && Compchance === 'paper')) {
//         UserCount++;
//         return `User : ${user} and computer : ${comp} ,User Win Computer Lost `;
//     }
//     else if ((userchance === 'rock' && Compchance === 'paper') || (userchance === 'paper' && Compchance === 'scissor') || (userchance === 'scissor' && Compchance === 'rock')) {
//         ComputerCount++;
//         return `User : ${user} and computer : ${comp} ,Computer Win User Lost `;
//     }
//     else {
//         return 'Invalid values cannot match .'
//     }

// }


// function game() {
//     let n = parseInt(prompt(`Enter the number of rounds you want to play :`));
//     for (let i = 0; i < n; i++) {
//         let comp = getComputerChoice();
//         let user = getUserChoice();
//         console.log(`computer shows:${comp}`);
//         console.log(`User shows:${user}`);
//         console.log(Result(comp, user));

//     }
//     if (UserCount > ComputerCount) {
//         console.log(`User Wins , User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
//     }
//     else if (UserCount < ComputerCount) {
//         console.log(`Computer Wins , User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
//     }
//     else {
//         console.log(`Game Draw, User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
//     }
// }

// game();



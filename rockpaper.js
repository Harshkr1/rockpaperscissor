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

function getUserChoice() {
    //generate User choice 
    let entry = prompt("ENTER YOUR CHOICE :");
    let userChoice = entry;
    return userChoice;
}
let UserCount = 0;
let ComputerCount = 0;




function Result(comp, user) {
    let Compchance = comp.toLowerCase();
    let userchance = user.toLowerCase();
    if (Compchance === userchance) {
        return `User:${user} and computer :${comp},Match Draw As Both Same `;
    }
    else if ((userchance === 'rock' && Compchance === 'scissor') || (userchance === 'paper' && Compchance === 'rock') || (userchance === 'scissor' && Compchance === 'paper')) {
        UserCount++;
        return `User : ${user} and computer : ${comp} ,User Win Computer Lost `;
    }
    else if ((userchance === 'rock' && Compchance === 'paper') || (userchance === 'paper' && Compchance === 'scissor') || (userchance === 'scissor' && Compchance === 'rock')) {
        ComputerCount++;
        return `User : ${user} and computer : ${comp} ,Computer Win User Lost `;
    }
    else {
        return 'Invalid values cannot match .'
    }

}


function game() {
    let n = parseInt(prompt(`Enter the number of rounds you want to play :`));
    for (let i = 0; i < n; i++) {
        let comp = getComputerChoice();
        let user = getUserChoice();
        console.log(`computer shows:${comp}`);
        console.log(`User shows:${user}`);
        console.log(Result(comp, user));

    }
    if (UserCount > ComputerCount) {
        console.log(`User Wins , User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
    }
    else if (UserCount < ComputerCount) {
        console.log(`Computer Wins , User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
    }
    else {
        console.log(`Game Draw, User Count: ${UserCount} , Computer Count: ${ComputerCount}`);
    }
}

game();

// let a = getComputerChoice(); // convert;
// let b = getUserChoice();
// console.log(a);
// console.log(b);

// function value(a) {
//     if (a.toLowerCase() === 'rock') {
//         return 1;
//     }
//     else if (a.toLowerCase() === 'paper') {
//         return 2;
//     }
//     else if (a.toLowerCase() === 'scissor') {
//         return 3;
//     }
//     else {
//         return 'Invalid Input Cannot fight ';
//     }
// }

// let computer = value(a);
// let user = value(b);
// console.log(computer);
// console.log(user);


// function Result(computer, user) {
//     if (computer === user) {
//         return 'Both is Same Match Draw';
//     }
//     if (computer > user) {
//         if (computer === 3 && user === 1) {
//             return 'User Win Computer Lost ';
//         }
//         else {
//             return 'Computer Wins User lost ';
//         }

//     }
//     else if (computer < user) {
//         if (computer === 1 && user === 3) {
//             return 'Computer Win User Lost';
//         }
//         else {
//             return 'User Win Computer Lost';
//         }
//     }
//     else {
//         return 'No game Possible';
//     }

// }
// console.log(Result(computer, user));

// function game() {
//     for (let i = 0; i < 5; i++) {
//         let p = getUserChoice();
//         let q = getComputerChoice();
//         console.log(p);
//         console.log(q);
//         let a = value(p);
//         let b = value(q);
//         if (a > b) {
//             UserCount++;
//         }
//         else if (a < b) {
//             ComputerCount++;
//         }


//         console.log(Result(p, q));

//     }

//     if (UserCount > ComputerCount) {
//         console.log(`User is Winner with Point ${UserCount}`);
//     }
//     else if (UserCount < ComputerCount) {
//         console.log(`Computer is Winner with Point ${ComputerCount}`);
//     }
// }

// game();


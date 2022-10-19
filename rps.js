let pc_score = 0
let user_score = 0
const rps = ['Rock', 'Paper', 'Scissor'] 

function randomNumber () {
    return Math.floor(Math.random() * 3);
}

function player_choice (option)  {
    let pc_choice = randomNumber ();
    document.getElementById('picks').innerHTML = `You picked <strong>${rps[option]}</strong>, PC Picked <strong>${rps[pc_choice]}</strong>`;
    if (option == pc_choice) {
        document.getElementById('round').innerHTML = 'Tie';
    }
    else if (option == 0 && pc_choice == 2) {
        ++user_score;
        document.getElementById('round').innerHTML = '<strong>You</strong> won the round';
    }
    else if (option == 1 && pc_choice == 0) {
        ++user_score;
        document.getElementById('round').innerHTML = '<strong>You</strong> won the round';
    }
    else if (option == 2 && pc_choice == 1) {
        ++user_score;
        document.getElementById('round').innerHTML = '<strong>You</strong> won the round';
    }
    else {
        ++pc_score;
        document.getElementById('round').innerHTML = '<strong>PC</strong> won the round';
    }
    changeScore();
}

function changeScore () {
    if (user_score == 5) {
        pc_score = 0;
        user_score = 0;
        document.getElementById('round').innerHTML = '<strong>You</strong> won the game';
    }
    else if (pc_score == 5) {
        pc_score = 0;
        user_score = 0;
        document.getElementById('round').innerHTML = '<strong>PC</strong> won the game';
    }
    document.getElementById('user_score').innerHTML = user_score;
    document.getElementById('pc_score').innerHTML = pc_score;
}

let pc_score = 0
let user_score = 0

function randomNumber () {
    return Math.floor(Math.random() * 3) + 1;
}

function player_choice (option)  {
    let pc_choice = randomNumber ();
    if (option == 1 && pc_choice == 3) {
        document.getElementById('result').innerHTML = 'User chose <strong>Rock</strong> and PC chose <strong>Scissor</strong> ';
        ++user_score;
        document.getElementById('user_score').innerHTML = user_score;
    }
    else if (option == 2 && pc_choice == 1) {
        document.getElementById('result').innerHTML = 'User chose <strong>Paper</strong> and PC chose <strong>Rock</strong> ';
        ++user_score;
        document.getElementById('user_score').innerHTML = user_score;
    }
    else if (option == 3 && pc_choice == 2) {
        document.getElementById('result').innerHTML = 'User chose <strong>Scissor</strong> and PC chose <strong>Paper</strong> ';
        ++user_score;
        document.getElementById('user_score').innerHTML = user_score;
    }
    else if (pc_choice == 1 && option == 3) {
        document.getElementById('result').innerHTML = 'User chose <strong>Scissor</strong> and PC chose <strong>Rock</strong> ';
        ++pc_score;
        document.getElementById('pc_score').innerHTML = pc_score;
    }
    else if (pc_choice == 2 && option == 1) {
        document.getElementById('result').innerHTML = 'User chose <strong>Rock</strong> and PC chose <strong>Paper</strong> ';
        ++pc_score;
        document.getElementById('pc_score').innerHTML = pc_score;
    }
    else if (pc_choice == 3 && option == 2) {
        document.getElementById('result').innerHTML = 'User chose <strong>Paper</strong> and PC chose <strong>Scissor</strong> ';
        ++pc_score;
        document.getElementById('pc_score').innerHTML = pc_score;
    }
    else {
        document.getElementById('result').innerHTML = 'Tie';
    }
}


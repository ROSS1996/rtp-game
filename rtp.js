function player_choice (option)  {
    if (option == 1) {
        document.getElementById('result').innerHTML = 'User clicked <strong>Rock</strong>';
    }
    else if (option == 2) {
        document.getElementById('result').innerHTML = 'User clicked <strong>Paper</strong>';
    }
    else {
        document.getElementById('result').innerHTML = 'User clicked <strong>Scissors</strong>';
    }
}
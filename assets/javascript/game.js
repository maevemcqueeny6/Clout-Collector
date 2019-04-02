


    var wins = 0;
    var losses = 0;
    var computerGuess;
    console.log(computerGuess);
    
    function newRound() {
        computerGuess = Math.floor(Math.random() * 120) + 19;
        // $("#computerchoice-text").after(computerGuess);
        console.log(computerGuess);
    }
    
    newRound();
    $("#computer-choicetext").append(computerGuess);

    
    


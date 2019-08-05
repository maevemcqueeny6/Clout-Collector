$("document").ready(function () {



    var wins = 0;
    var losses = 0;
    var result=0;
    var computerGuess;
    var rubyvalue;
    var diamondvalue;
    var emeraldvalue;
    var cyanvalue;
    var gamewon = false;
    console.log(computerGuess);
    
    function newRound() {
        computerGuess = Math.floor(Math.random() * 120) + 19;
        console.log(computerGuess);
        rubyvalue=Math.floor(Math.random() * 12) + 1;
        diamondvalue=Math.floor(Math.random() * 12) + 1;
        emeraldvalue=Math.floor(Math.random() * 12) + 1;
        cyanvalue=Math.floor(Math.random() * 12) + 1;
        result=0;
        $("#computer-choicetext").text("Clout Calculator " + computerGuess);
        $("#result-text").empty();
    }
    
    newRound();
    
    function check(){
        if (computerGuess === result){
        alert("You win!");
         wins++;
         $("#wins-text").text("Fame: " + wins);
        newRound();
    }
    else if (result > computerGuess){
        alert("You lose!");
         losses++;
         $("#losses-text").text("Infamy: " + losses);
        newRound();
    }
    }
    
    newRound();
    
    
    $(".emerald").click(function(){
        result= parseInt(result)+parseInt(emeraldvalue);
        console.log(emeraldvalue);
        console.log(result);
        $("#result-text").html(result);
        check();
    })
    
    $(".diamond").click(function(){
        result= parseInt(result)+parseInt(diamondvalue);
        console.log(diamondvalue);
        console.log(result);
        $("#result-text").html(result);
        check();
    })
    
    $(".ruby").click(function(){
        result= parseInt(result)+parseInt(rubyvalue);
        console.log(rubyvalue);
        console.log(result);
        $("#result-text").html(result);
        check();
    })
    
    $(".cyan").click(function(){
        result= parseInt(result)+parseInt(cyanvalue);
        console.log(cyanvalue);
        console.log(result);
        $("#result-text").html(result);
        check();
    })
    
    
    $("#result-text").append(result);
    
    
    
    
    })
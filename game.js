window.onload = function(){

    var score = 0;
    
    function reset(){
        score = 0;
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        }  
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>.";

    }
    document.getElementById("start").addEventListener("click", reset);

    function playAgain(){
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>, Your score is: " + score +".";
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        }
    }
    document.getElementById("start").addEventListener("mouseover", playAgain);

    function youWin(){
        score += 5;
        document.getElementById("status").innerHTML= "You won, Your score is: " + score + ".";
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "green";
        }
    }
    document.getElementById("end").addEventListener("mouseover", youWin);

    function youLose(){
        score -= 10;
        document.getElementById("status").innerHTML= "You lose, Your score is: " + score + ".";
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#ff8888";
        }
         
    }
    var boundaries = document.getElementsByClassName("boundary");
    for (var j = 0; j < boundaries.length; j++){
        boundaries[j].addEventListener("mouseover", youLose);
    }
}
    

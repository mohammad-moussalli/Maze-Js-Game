window.onload = function(){

    var score = 0;
    var rules = false;
    function reset(){
        rules = true;
        score = 0;
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        }  
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>.";

    }
    document.getElementById("start").addEventListener("click", reset);

    function playAgain(){
        rules = true;
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>, Your score is: " + score +".";
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        }
    }
    document.getElementById("start").addEventListener("mouseover", playAgain);

    function youWin(){
        if (rules == true){
            score += 5;
            document.getElementById("status").innerHTML= "You won, Your score is: " + score + ".";
            var border_color = document.getElementsByClassName("boundary");
            for (var i = 0; i < border_color.length; i++){
                border_color[i].style.backgroundColor = "green";
            }
        }
        rules = false;
    }
    document.getElementById("end").addEventListener("mouseover", youWin);

    function youLose(){
        if (rules == true){
            score -= 10;
            document.getElementById("status").innerHTML= "You lose, Your score is: " + score + ".";
            var border_color = document.getElementsByClassName("boundary");
            for (var i = 0; i < border_color.length; i++){
                border_color[i].style.backgroundColor = "#ff8888";
            }
        rules = false;
        }
         
    }
    var boundaries = document.getElementsByClassName("boundary");
    for (var j = 0; j < boundaries.length; j++){
        boundaries[j].addEventListener("mouseover", youLose);
    }
}
    

window.onload = function(){
    
    function reset(){
        scoringSystem() = 0;
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        }  
    }
    document.getElementById("start").addEventListener("click", reset);

    function playAgain(){
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>."
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "#eeeeee";
        } 
    }
    document.getElementById("start").addEventListener("mouseover", playAgain);

    function youWin(){
        document.getElementById("status").innerHTML= "You won"
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.backgroundColor = "green";
        }
    }
    document.getElementById("end").addEventListener("mouseover", youWin);

    function youLose(){
        document.getElementById("status").innerHTML= "You lose"
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
    

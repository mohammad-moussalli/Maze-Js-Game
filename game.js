window.onload = function(){
    
    function reset(){
        scoringSystem() = 0;
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.borderColor = "black";
        } 
    }
    document.getElementById("start").addEventListener("click", reset);

    function playAgain(){
        document.getElementById("status").innerHTML= "Begin by moving your mouse over the <q>S</q>."
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.borderColor = "black";
        } 
    }
    document.getElementById("start").addEventListener("mouseover", playAgain);


    function resetColor(){

    }

    function youWin(){
        document.getElementById("status").innerHTML= "You won"
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.borderColor = "green";
        }
    }
    document.getElementById("end").addEventListener("mouseover", youWin);

    function youLose(){
        document.getElementById("status").innerHTML= "You lose"
        var border_color = document.getElementsByClassName("boundary");
        for (var i = 0; i < border_color.length; i++){
            border_color[i].style.borderColor = "red";
        }    
    }
    var boundaries = document.getElementsByClassName("boundary");
    for (var j = 0; j < boundaries.length; j++){
        boundaries[j].addEventListener("mouseover", youLose);
    }

    function cumulativeScore(){
        return 0;
    }

    function turnRed(){

    }

    function turnGreen(){
        
    }

}
    

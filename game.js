    function reset(){
        scoringSystem() = 0;
    }

    function resetColor(){
        var restart_color = document.getElementsByClassName("boundary");
        for (i =0; i < restart_color.length; i++){
            restart_color[i].getElementsByClassName("youlose");
        }
    }

    function youWin(){
        document.getElementById("status").innerHTML= "You won"
        document.getElementsByClassName("boundary").
        scoringSystem() += 5;
    }

    function youLose(){
        alert("You lose");
        scoringSystem -= 10;
    }

    function scoringSystem(){
        var score = 0;
        return score;
    }

    function turnRed(){

    }

    function turnGreen(){

    }

    

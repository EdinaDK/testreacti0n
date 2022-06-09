const btn2 = document.getElementById("btn2")
const btn = document.getElementById("btn")
const text = document.getElementById("reaction")

function rand(){
    return (10000-1000)*Math.random()+1000
}


btn2.addEventListener("click", () => {
    setTimeout(() => {
        btn.style.background = "green";
        text.innerText = "hi";
    }, 1000);
});

/*function setTimer(){
    $("#game_div").attr("class","view-waiting reaction-main");
    $("#game_div").data("step", "waiting").attr("data-step", "waiting");
    $("#game-icon").attr("class","fa fa-hourglass-start");
    $("#game-title").text("Подождите, пока не будет зеленый");
    $("#game-title2").text("");
    $("#game-title3").text("");

    waitingTimerId = setTimeout(function(){
        $("#game_div").attr("class","view-go reaction-main");
        $("#game_div").data("step", "go").attr("data-step", "go");
        $("#game-icon").attr("class","fa fa-hand-o-down");
        $("#game-title").text("Нажимай!");
        $("#game-title2").text("");
        $("#game-title3").text("");

        startTime = new Date().getTime();
        clearTimeout(waitingTimerId);
    }, randomInteger(1300, 4100));
}

function randomInteger(min, max){
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);

    stepTimeOut = rand;

    return rand;
}
function step(step){
        switch (step) {
            case "init":
                setTimer();
                break;

            case "go":
                go();
                break;

            case "waiting":
                if($("#game_div").hasClass("view-waiting")){
                    falseStart();
                }else{
                    setTimer();
                }
                break;
        }
    }

*/
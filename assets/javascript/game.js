

var playerNum = 0;
var win = 0;
var loss = 0;
var butVal1 = (Math.floor(Math.random() * 12) + 1);
var butVal2 = (Math.floor(Math.random() * 12) + 1);
var butVal3 = (Math.floor(Math.random() * 12) + 1);
var butVal4 = (Math.floor(Math.random() * 12) + 1);
var ranNum = Math.floor(Math.random() * 102) +19;

$(document).ready(function() {
    
    $("#ranNum").html(ranNum);

    $("#btn1").on("click", function(){

        var button1 = $(this).attr("value", butVal1);
        playerNum += butVal1;
        $("#userScore").html(`<p> ${playerNum}</p>`);
        

        if (ranNum === playerNum){
           
            alert("You win!!");
            win++;
            $("#win").text(`Wins: ${win}`);
            restart();
            }
        else if (ranNum < playerNum){
           
            alert("You lose!");
            loss++;
            $("#loss").text(`Losses: ${loss}`);
            restart();
        };
        
});

    $("#btn2").on("click", function(){

        var button2 = $(this).attr("value", butVal2);
        playerNum += butVal2;
        $("#userScore").html(`<p> ${playerNum}</p>`);
        

        if (ranNum === playerNum){
           
            alert("You win!!");
            win++;
            $("#win").text(`Wins: ${win}`);
            restart();
            }
        else if (ranNum < playerNum){
           
            alert("You lose!");
            loss++;
            $("#loss").text(`Losses: ${loss}`);
            restart();
        };
}); 

    $("#btn3").on("click", function(){

        var button3 = $(this).attr("value", butVal3);
        playerNum += butVal3;
        $("#userScore").html(`<p> ${playerNum}</p>`);
        

        if (ranNum === playerNum){
           
            alert("You win!!");
            win++;
            $("#win").text(`Wins: ${win}`);
            restart();
            }
        else if (ranNum < playerNum){
           
            alert("You lose!");
            loss++;
            $("#loss").text(`Losses: ${loss}`);
            restart();
        };
});

    $("#btn4").on("click", function(){

        var button4 = $(this).attr("value", butVal4);
        playerNum += butVal4;
        $("#userScore").html(`<p> ${playerNum}</p>`);
        

        if (ranNum === playerNum){
           
            alert("You win!!");
            win++;
            $("#win").text(`Wins: ${win}`);
            restart();
            }
        else if (ranNum < playerNum){
           
            alert("You lose!");
            loss++;
            $("#loss").text(`Losses: ${loss}`);
            restart();
        };
    });


function restart(){
    butVal1 = (Math.floor(Math.random() * 12) + 1);
    butVal2 = (Math.floor(Math.random() * 12) + 1);
    butVal3 = (Math.floor(Math.random() * 12) + 1);
    butVal4 = (Math.floor(Math.random() * 12) + 1);
    ranNum = Math.floor(Math.random() * 102) +19;
    $("#ranNum").html(ranNum);
    playerNum = 0;
    $("#userScore").html(`<p>${playerNum}</p>`);
    $("#win").text("Wins: " + win);
    $("#loss").text(`Losses: ${loss}`);
};

});






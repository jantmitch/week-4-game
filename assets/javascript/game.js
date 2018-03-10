

// var playerNum = 0;
var win = 0;
var loss = 0;
var butVal1 = (Math.floor(Math.random() * 12) + 1);
var butVal2 = (Math.floor(Math.random() * 12) + 1);
var butVal3 = (Math.floor(Math.random() * 12) + 1);
var butVal4 = (Math.floor(Math.random() * 12) + 1);

$(document).ready(function() {
    var ranNum = Math.floor(Math.random() * 102) +19;
    $("#ranNum").html(ranNum);

$("#btn1").on("click", function(){

    var button1 = $(this).attr("value", butVal1);
    console.log(butVal1);
});

$("#btn2").on("click", function(){

    var button2 = $(this).attr("value", butVal2);
    console.log(butVal2);
}); 

$("#btn3").on("click", function(){

    var button3 = $(this).attr("value", butVal3);
    console.log(butVal3);
}); 

$("#btn4").on("click", function(){

    var button4 = $(this).attr("value", butVal4);
    console.log(butVal4);
}); 
    
  
});


var playerNum = function(){

    
};










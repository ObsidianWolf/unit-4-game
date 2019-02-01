$(document).ready(function () {

/////////////////////////////////////////////////
//////////////////global variables///////////////
/////////////////////////////////////////////////

  //this will be our randomnum
  var targetScore = 0;

  var score = 0;

  //wins and loses
  var wins = 0;

  var loses = 0;

  var gameStart = true;

  var crystals = ["assets/images/blue.jpg", "assets/images/green.jpg", "assets/images/red.jpg", "assets/images/yellow.jpg"];
/////////////////////////////////////////////////
/////////////////////////////////////////////////

  var displayResults = function(){

    $("#wins").text("Wins: "+ wins);
    $("#loses").text("Loses: "+ loses);

  }

  //this will get the random number
  var randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var setScore = function(){
    console.log("setScore");
    targetScore = randomNum(19, 120);

    $("#target").text(targetScore);
  
  
    //this will count the numbers added to the score
    score = 0;
  
    $("#total").text(score);
  }

  
  var displayCrystals = function(){
    console.log("displayCrystals");
  for (i = 0; i < crystals.length; i++) {

    var raNum = Math.floor(Math.random() * 12 + 1);
    var img = $('<img class = "crystalImage">');
    img.attr('src', crystals[i]);
    img.attr('data-value', raNum);
    img.appendTo('#crystals');
  }

}

 //functions to call on game start
 setScore();
 displayCrystals();
 displayResults();

 $(document).on("click", ".crystalImage", function(){
  // $(".crystalImage").on("click", function () {
    console.log("click");
    console.log($(this).attr("data-value"));
    if (gameStart) {
      score += parseInt($(this).attr("data-value"));
      $("#total").text(score);

      if (score === targetScore) {
        gameStart = false;
        $("#total").text("You Win!!!");
        wins++;
        displayResults();

      } else if (score > targetScore) {
        gameStart = false;
        $("#total").text("You Lose!!!");
        loses++;
        displayResults();

      }
    } else {
      resetFunction();
    }
  });

  function resetFunction() {
console.log("resetFunction");
    // render our images dynamically
    $("#crystals").empty();
    // functions to call
    setScore();
    displayCrystals();

    // set gameStart = true;
    gameStart = true; 
  }

  
});

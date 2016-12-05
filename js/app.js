// wait for the DOM to finish loading
console.log("ready")
$(document).ready(function() {
  var draw = function() {
    var boxOne = $(".box-one").html();
    var boxTwo = $(".box-two").html();
    var boxThree = $(".box-three").html();
    var boxFour = $(".box-four").html();
    var boxFive = $(".box-five").html();
    var boxSix = $(".box-six").html();
    var boxSeven = $(".box-seven").html();
    var boxEight = $(".box-eight").html();
    var boxNine = $(".box-nine").html();
    if (boxOne!==(" ") && boxTwo!==(" ") && boxThree!==(" ") && boxFour!==(" ") && boxFive!=(" ") && boxSix!==(" ") && boxSeven!==(" ") && boxEight!==(" ") && boxNine!==(" ")) {
    alert("It's a draw! Reset and play again.");
    }
  }
  var reset = function () {
    $(".box").html(" ");
    $(".player").html("X");
  }
  $(".button").on("click", reset);
  var choice = function() {
    var answer = $(this).html();
    if (answer == " ") {
      $(this).html("X");
      $(this).css({ 'color': '#FA5755'});
      $(".player").html("O");
    }
    else if (answer == "X") {
      $(this).html("O");
      $(this).css({ 'color': 'yellow'});
      $(".player").html("X");
    }
    else if (answer == "O") {
    //  alert("sorry, this square is already taken!");
      $(this).html("X");
      $(this).css({ 'color': '#FA5755'});
      $(".player").html("O");
    }
    draw();
    win();
  }
  var winner = $();
  var win = function() {
    var boxOne = $(".box-one").html();
    var boxTwo = $(".box-two").html();
    var boxThree = $(".box-three").html();
    var boxFour = $(".box-four").html();
    var boxFive = $(".box-five").html();
    var boxSix = $(".box-six").html();
    var boxSeven = $(".box-seven").html();
    var boxEight = $(".box-eight").html();
    var boxNine = $(".box-nine").html();
    if (
      (boxOne==("X") && boxTwo==("X") && boxThree==("X"))
    ||(boxFour==("X") && boxFive==("X") && boxSix==("X"))
    ||(boxSeven==("X") && boxEight==("X") && boxNine==("X"))
    ||(boxOne==("X") && boxFour==("X") && boxSeven==("X"))
    ||(boxTwo==("X") && boxFive==("X") && boxEight==("X"))
    ||(boxThree==("X") && boxSix==("X") && boxNine==("X"))
    ) {
    alert("Player X wins!");
  } else if (
      (boxOne==("O") && boxTwo==("O") && boxThree==("O"))
    ||(boxFour==("O") && boxFive==("O") && boxSix==("O"))
    ||(boxSeven==("O") && boxEight==("O") && boxNine==("O"))
    ||(boxOne==("O") && boxFour==("O") && boxSeven==("O"))
    ||(boxTwo==("O") && boxFive==("O") && boxEight==("O"))
    ||(boxThree==("O") && boxSix==("O") && boxNine==("O"))
    ) {
    alert("Player O wins!");
    }
  }
  $(".box-one").on("click", choice);
  $(".box-two").on("click", choice);
  $(".box-three").on("click", choice);
  $(".box-four").on("click", choice);
  $(".box-five").on("click", choice);
  $(".box-six").on("click", choice);
  $(".box-seven").on("click", choice);
  $(".box-eight").on("click", choice);
  $(".box-nine").on("click", choice);
});

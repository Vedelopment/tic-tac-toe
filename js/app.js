// wait for the DOM to finish loading
console.log("ready")
$(document).ready(function() {
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
      alert("sorry, this square is already taken!");
    }
  }
  var winner = $();
  var win = function () {
    if (win=="true") {
      alert(" won!");
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

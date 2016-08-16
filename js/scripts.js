$(document).ready(function() {
  $("#trackApp").submit(function(event) {
    var q1Input = parseInt($("select#question1").val());
    var q2Input = parseInt($("select#question2").val());
    var q3Input = parseInt($("select#question3").val());
    var q4Input = parseInt($("select#question4").val());
    var q5Input = parseInt($("select#question5").val());
    event.preventDefault();
    $("#trackApp").delay(90).fadeOut(400);
    $("#person").text($("#name").val());

    var total = (q1Input + q2Input + q3Input + q4Input + q5Input);

    if (total < 9) {
      $("#css").show();
      $("#namearea").show();
      $("#net").hide();
      $("#android").hide();
    } else if (total >= 9 && total <= 12) {
      $("#net").show();
      $("#namearea").show();
      $("#css").hide();
      $("#android").hide();
    } else if (total >= 13) {
      $("#android").show();
      $("#namearea").show();
      $("#css").hide();
      $("#net").hide();
    }
  });
});

$(document).ready(function() {
  var age = parseInt(prompt("Are you eligible to vote?"));

  if (age >= 18) {
    $('#voterinfo').show();
  } else {
    $('#under-18').show();
  }
});
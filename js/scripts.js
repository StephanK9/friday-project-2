
  $(document).ready(function() {
    $("form").submit(function(event) {
      var q1  = $("input:radio[name=q1]:checked").val();
      var q2  = $("input:radio[name=q2]:checked").val();
      var q3  = $("input:radio[name=q3]:checked").val();
      var q4  = $("input:radio[name=q4]:checked").val();

    if (q1 === "kraken" && q2 === "black" && q3 === "summer" && q4 === "boat") {
    alert("You should take the CSS/Design Track!");
    $("#jack").show();
  } else if (q1 === "kraken" && q2 === "black" && q3 === "summer") {
    alert("You should take the CSS/Design Track!");
    $("#jack").show();
  } else if (q1 === "kraken" && q4 === "boat" && q3 === "summer") {
    alert("You should take the CSS/Design Track!");
    $("#jack").show();
  } else if (q2 === "black" && q4 === "boat" && q3 === "summer") {
    alert("You should take the CSS/Design Track!");
    $("#jack").show();
  } else if (q2 === "black" && q4 === "boat" && q1 === "kraken") {
    alert("You should take the CSS/Design Track!");
    $("#jack").show();
  } else if (q1 === "none" && q2 === "beige" && q3 === "nochange" && q4 === "walking") {
    alert("You should take the PHP/Drupal Track!");
    $("#larry").show();
  } else if (q1 === "none" && q2 === "beige" && q3 === "nochange") {
    alert("You should take the PHP/Drupal Track!");
    $("#larry").show();
  } else if (q1 === "none" && q4 === "walking" && q3 === "nochange") {
    alert("You should take the PHP/Drupal Track!");
    $("#larry").show();
  } else if (q2 === "beige" && q4 === "walking" && q3 === "nochange") {
    alert("You should take the PHP/Drupal Track!");
    $("#larry").show();
  } else if (q2 === "beige" && q4 === "walking" && q1 === "none") {
    alert("You should take the PHP/Drupal Track!");
    $("#larry").show();
  } else if (q1 === "dog" && q2 === "pink" && q3 === "holiday" && q4 === "privatejet") {
    alert("You should take the C#/.Net Track!");
    $("#Miley").show();
  } else if (q1 === "dog" && q2 === "pink" && q3 === "holiday") {
    alert("You should take the C#/.Net Track!");
    $("#Miley").show();
  } else if (q1 === "dog" && q4 === "privatejet" && q3 === "holiday") {
    alert("You should take the C#/.Net Track!");
    $("#Miley").show();
  } else if (q2 === "pink" && q4 === "privatejet" && q3 === "holiday") {
    alert("You should take the C#/.Net Track!");
    $("#Miley").show();
  } else if (q2 === "pink" && q4 === "privatejet" && q1 === "dog") {
    alert("You should take the C#/.Net Track!");
    $("#Miley").show();
  } else {
    alert("You don't have a clear preference.");
  };




    event.preventDefault();
  });
});

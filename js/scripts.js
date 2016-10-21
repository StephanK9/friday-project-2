
  $(document).ready(function() {
    $("form").submit(function(event) {
      var q1  = $("input:radio[name=q1]:checked").val();
      var q2  = $("input:radio[name=q2]:checked").val();
      var q3  = $("input:radio[name=q3]:checked").val();
      var q4  = $("input:radio[name=q4]:checked").val();
      var q5  = $("input:radio[name=q5]:checked").val();

    if (q1 === "css1" && q2 === "css2" && q3 === "css3" && q4 === "css4") {
    alert("You should take the CSS/Design Track!");
    $("#css").show();
  } else if (q1 === "css1" && q2 === "css2" && q3 === "css3") {
    alert("You should take the CSS/Design Track!");
    $("#css").show();
  } else if (q1 === "css1" && q4 === "css4" && q3 === "css3") {
    alert("You should take the CSS/Design Track!");
    $("#css").show();
  } else if (q2 === "css2" && q4 === "css4" && q3 === "css3") {
    alert("You should take the CSS/Design Track!");
    $("#css").show();
  } else if (q2 === "css2" && q4 === "css4" && q1 === "css1") {
    alert("You should take the CSS/Design Track!");
    $("#css").show();
  } else if (q1 === "php1" && q2 === "php2" && q3 === "php3" && q4 === "php4") {
    alert("You should take the PHP/Drupal Track!");
    $("#php").show();
  } else if (q1 === "php1" && q2 === "php2" && q3 === "php3") {
    alert("You should take the PHP/Drupal Track!");
    $("#php").show();
  } else if (q1 === "php1" && q4 === "php4" && q3 === "php3") {
    alert("You should take the PHP/Drupal Track!");
    $("#php").show();
  } else if (q2 === "php2" && q4 === "php4" && q3 === "php3") {
    alert("You should take the PHP/Drupal Track!");
    $("#php").show();
  } else if (q2 === "php2" && q4 === "php4" && q1 === "php1") {
    alert("You should take the PHP/Drupal Track!");
    $("#php").show();
  } else if (q1 === "c1" && q2 === "c2" && q3 === "c3" && q4 === "c4") {
    alert("You should take the C#/.Net Track!");
    $("#c").show();
  } else if (q1 === "c1" && q2 === "c2" && q3 === "c3") {
    alert("You should take the C#/.Net Track!");
    $("#c").show();
  } else if (q1 === "c1" && q4 === "c4" && q3 === "c3") {
    alert("You should take the C#/.Net Track!");
    $("#c").show();
  } else if (q2 === "c2" && q4 === "c4" && q3 === "c3") {
    alert("You should take the C#/.Net Track!");
    $("#c").show();
  } else if (q2 === "c2" && q4 === "c4" && q1 === "c1") {
    alert("You should take the C#/.Net Track!");
    $("#c").show();
  } else {
    alert("You don't have a clear preference.");
  };




    event.preventDefault();
  });
});

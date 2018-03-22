
$("#addBtn").on("click", function(event) {
  event.preventDefault();

  // make a newCharacter obj
  var Pal = {
    // name from name input
    palName: $("#petName").val().trim(),
    // role from role input
    palType: $("#petType").val().trim(),
    // age from age input
    breed: $("#petBreed").val().trim(),
    // pal gender
    gender: $("#petGender").val().trim(),
    // is the Pal fixed
    fixed: $("#fixed").val().trim(),
    // Pal description
    description: $("#aboutThePet").val(),
    // points from force-points input
    image: $("#imgInp").val()
  };

  //console.log($("#imgInp").val())

  console.log(Pal)
// send an AJAX POST-request with jQuery
$.post("/api/new", Pal)
  // on success, run this callback
  .then(function(data) {
    // log the data we found
    console.log(data);
    // tell the user we're adding a character with an alert window
    alert("Adding character...");
  });

// empty each input box by replacing the value with an empty string
$("#petName").val("");
$("#petType").val("");
$("#petBreed").val("");
$("#petGender").val("");
$("#fixed").val("");
$("#aboutThePet").val("");
$("#imgInp").val("");
});
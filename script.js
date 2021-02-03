$( ".toggler-button" ).click(function() {
  if($( "#nav-bar" ).hasClass("d-flex")){
    $( "#nav-bar" ).removeClass("d-flex")
    .addClass("d-none");
  }else{
    $( "#nav-bar" ).removeClass("d-none")
    .addClass("d-flex").addClass("bk-blue");     
    $( ".nav-link" ).addClass("text-white");
  }
});
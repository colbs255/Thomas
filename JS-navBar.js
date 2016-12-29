$(document).ready(function() {
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > $('#jumbo').outerHeight()) {
        $('#myBar').removeClass('absBar');
        $('#myBar').addClass('fixedBar');
        
       } else {
         $('#myBar').removeClass('fixedBar');
        $('#myBar').addClass('absBar');
           console.log("yo");
       }
    });
});
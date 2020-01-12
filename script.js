'use strict'

$( document ).ready(function() {

    checkSize();
});
    
function checkSize() {
    if ($(".hamburger").css("position") == "absolute" ){
        $( ".cross" ).hide();
        $( ".menu" ).hide();
        $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "fast", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
        });
        });
    }
    if ($(".cross").css("position") == "absolute" ){
        $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "fast", function() {
        $( ".cross" ).hide();
        $( ".hamburger" ).show();
        });
        });
    }
    if ($(".hamburger").css("display") == "none" ){
        $( ".menu" ).show();
    }
}

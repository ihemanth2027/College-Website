$(document).ready(function() {
    $(".toggle-button").click(function() {
      $(this).parent().find("ul").slideToggle(function() {
        // Animation complete.
      });
    });


 });

let button = document.getElementById("btn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 1){
        button.style.display = "block";
    }
    else{
        button.style.display = "none";
    }
}
function scrolltoTop(){
    document.documentElement.scrollTop = 0;
}






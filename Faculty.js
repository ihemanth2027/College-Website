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

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function validate(){

  
  var val1="",val2 ="";
  val1 = document.getElementById("email").value ;
  val2 = document.getElementById("password").value;

  if(val1=="cvr" && val2=="cvr123"){
    alert("login success");
  }
  else{
    alert("login Fail");
  }

  }






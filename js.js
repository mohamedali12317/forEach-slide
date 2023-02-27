let a = document.querySelectorAll('.wrapper-2 ul li a');

a.forEach(function(ele){

 ele.onclick = function(){

     a.forEach(function(ele){               
      
         ele.classList.remove("active");

     }); // a-2

     this.classList.add("active");
 }; // ele

}); // a
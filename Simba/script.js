"use strict"
// $(document).ready(function() {
//     $('a[href^="#"]').on('click', function(event) {
//       var target = $(this.getAttribute('href'));
//       if (target.length) {
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000); 
//       }
//     });
//   });
const elmt= document.getElementsByTagName('checkbox');
console.log(elmt);
if (elmt){
  elmt.addEventListener('click', function (){
    alert('You clicked a button');
  });
}
  
  // if (elmt.checked){
  //   to_change.textContent= 'Read';
  //   to_change.style.backgroundColor="#00b33c";
  //   to_change.style.color="white";
  // }

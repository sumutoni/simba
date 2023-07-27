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
const elmt= document.querySelector('.checked');
elmt.addEventListener('click', function () {
  const to_change =document.querySelector('#status');
 if (elmt.checked){
    to_change.textContent= 'Read';
    to_change.style.color="#00b33c";

  }
  else{
    to_change.textContent= 'Unread';
    to_change.style.color="#ff0000";
  }
});
  
  

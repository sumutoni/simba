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
// const elmt= document.querySelector('.checked');

// elmt.addEventListener('click', function () {
//   const to_change =document.querySelector('#status');
//  if (elmt.checked){
//     to_change.textContent= 'Read';
//     to_change.style.color="#00b33c";

//   }
//   else{
//     to_change.textContent= 'Unread';
//     to_change.style.color="#ff0000";
//   }
// });

const elements= document.querySelectorAll('.checked');

for(let i=0; i< elements.length; i++){
  elements[i].addEventListener('click', function () {
    const to_change = document.querySelector('#status');
   if (elements[i].checked){
      to_change.textContent= 'Read';
      to_change.style.color="#00b33c";
      // elements[i].parentNode.parentNode.parentNode.style.backgroundColor="#e5e5e5";
  
    }
    else{
      to_change.textContent= 'Unread';
      to_change.style.color="#ff0000";
    }
  });
}

  
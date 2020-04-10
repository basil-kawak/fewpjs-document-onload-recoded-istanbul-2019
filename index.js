// Your code goes here
function change() {
    document.querySelector( 'p' ).textContent = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", change);


   
//   console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//   );

//   window.onload = function() {
//     document.addEventListener("DOMContentLoaded", function() {
//         console.log("The DOM has loaded");
//       });
       
//       console.log(
//         "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//       );
//   }

//   function ready() {
//     alert('DOM is ready');

//     // image is not yet loaded (unless was cached), so the size is 0x0
//     alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
//   }

//   document.addEventListener("DOMContentLoaded", ready);

// <img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0"></img>
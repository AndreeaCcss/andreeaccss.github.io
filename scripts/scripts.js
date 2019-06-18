var myHeading = document.querySelector('h1');
myHeading.textContent = 'HOLA';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rhea-in-snow.jpg') {
      myImage.setAttribute ('src','images/rhea-warrior-pose.jpg');
    } else {
      myImage.setAttribute ('src','images/rhea-in-snow.jpg');
    }
};


// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');
// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
// };
// // initialization on load 
// if(!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }
// myButton.onclick = function() {
//     setUserName();
// }
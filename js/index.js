// Your code goes here
console.log('This Project is difficult!!!');

//Select the following elements from the DOM://
const button = document.querySelectorAll('.btn');
const image = document.querySelectorAll('img-content');
const text = document.querySelectorAll('text-content');
const nav = document.querySelector('.nav');

//Using the mousepad you can zoom in and out on the Fun Bus//
/* Using wheel*/
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    logoHeading.style.transform = `scale(${scale})`;
}
let scale = 1;
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('wheel', zoom);


// Navigation Links- when you mouse over each link it turns red and within second it resets to default color//
/* Using mouseover */

nav.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "";
    },500);
}, false);

//When you refresh the page and it is fully loaded it will display 'You Have Arrived!'//
/* Using load */
window.addEventListener('load', (event) =>{console.log('You Have Arrived!')
});

// When you click on the first Sign Me Up! It will alert a box at the top saying This page says "Sign Me Up!"//
/* Using click */

// function signMeUp(event){
//    console.log('What is happening?');
// }
// button.addEventListener('click', function(event){
//     alert('Sign Me Up!');
// })

window.addEventListener('resize', function(){
    document.querySelector('destination');
});

const buttons = document.querySelectorAll('.btn')

//Change Color of bottom buttons upon mouseover

function buttonHover(event) {
    event.target.style.backgroundColor = "black"
}

buttons.forEach(element => element.addEventListener('mouseover', buttonHover));

document.addEventListener('')




// * `mouseover` ^
// * `keydown`
// * `wheel` ^
// * `load` ^
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`
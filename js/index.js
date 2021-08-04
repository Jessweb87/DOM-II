// Your code goes here
console.log('This Project is difficult!!!');

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
const nav = document.querySelector('.nav');
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

const button = document.querySelector('.btn');
button.addEventListener('click', function(event){
    alert('Sign Me Up!');
})






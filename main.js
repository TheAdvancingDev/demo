
// Logo Glow Effect
const logoGlow = document.getElementById('logo-glow');
const glow1 = document.getElementById('glow-1');
const glow2 = document.getElementById('glow-2');

// glow1.style.backgroundColor = 'red';
// glow2.style.backgroundColor = 'blue';

window.setInterval(() => {
    // logoGlow.style.background = 'url("./images/di-logo-4-glow.svg")'
    // glow2.classList.add('display-none');
    window.setTimeout(() => {
        // logoGlow.style.background = 'url("./images/di-logo-4.svg")';
        // glow2.classList.remove('display-none');
    }, 2500)
}, 5000);



/////////////
// typing function
////////////
/* The speed/duration of the effect in milliseconds */
// var txt = 'Lorem ipsum typing effect!'; /* The text */


var i = 0;
var speed = 125;

var txt = [
    'great digital platforms inspire user engagement',
    'effective UI design often goes unnoticed',
    'could you stop clicking that? ...it\'s hard to come up with stuff',
    'ok umm....\"less is more\"... how\'s that one?',
    'now you\'re just being a dick.',
    'just kidding, it\'s cool. thanks for stopping by my site',
    'why not shoot me an email? hey@email.com'
];

////////////////
// count clicks
////////////////
let clicks = -1;  // counter
let btn = document.getElementById('click-typing'); // button element
btn.onclick = function () { // onclick not onClick
    if (clicks > 5) { clicks = -1 }
    clicks++
    i = 0;
    document.getElementById('typing-display').innerHTML = '';
    typeWriter();
}
//////////////////////
// document.getElementById('typing-display').innerHTML = ' ';
function typeWriter() {
    // console.log(txt[clicks]);

    if (i < txt[clicks].length) {
        document.getElementById("typing-display").innerHTML += txt[clicks].charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    // console.log(clicks)
}

// clicks++

// btn.addEventListener('click', typeWriter);

// http://quotes.stormconsultancy.co.uk/random.json
const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
let container = document.getElementById("container");
let btn = document.getElementById("btn");

let color = ["LightSalmon", "LightCyan", "LightYellow", "palegreen", "peachpuff", "pink"];
var colors = ["Red", "Blue", "orange", "purple", "chocolate", "MediumVioletRed", "black"];
var i = 0;

function getQuote() {
  fetch("http://quotes.stormconsultancy.co.uk/random.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      Quote.innerText = `"  ${data.quote} "`;
      Author.innerText = `- By ${data.author}`;
    });

  let randomcolor = color[Math.floor(Math.random() * color.length)];
  var randomcolors = colors[Math.floor(Math.random() * colors.length)];

  container.style.background = randomcolor;

  document.body.style.background = randomcolors;

  btn.style.color = randomcolors;

  container.style.color = randomcolors;

}
getQuote();


var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Lets start our morning with a new quote';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Lets start our After noon with a new quote';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Lets start our Evening with a new quote';
else if (hrs > 12)
  greet = 'Lets start our night with a new quote';


document.getElementById('greetings').innerHTML = '<b>' + greet + '</b>';

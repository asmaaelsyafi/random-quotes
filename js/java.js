var qoute = {
  newQoute: [
    `“So many books, so little time.”`,
    `“A friend is someone who knows all about you and still loves you.”`,
    `“Always forgive your enemies; nothing annoys them so much.”`,
    `“We accept the love we think we deserve.”`,
    `“To live is the rarest thing in the world. Most people exist, that is all.”`,
    `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
    `“It is better to be hated for what you are than to be loved for what you are not.”`,
    `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
    `“In three words I can sum up everything I've learned about life: it goes on.”`,
    `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
  ],

  auther: [
    `― Frank Zappa`,
    `― Elbert Hubbard`,
    `― Oscar Wilde`,
    `― Stephen Chbosky, The Perks of Being a Wallflower`,
    `― Oscar Wilde`,
    `― Mahatma Gandhi`,
    `― Andre Gide, Autumn Leaves`,
    `― Narcotics Anonymous`,
    `― Robert Frost`,
    `― Martin Luther King Jr., A Testament of Hope: The Essential Writings`,
],
};

var previousValue;
function randomQuote(){
var x = Math.floor(Math.random() * 10);
var currentValue = x;
if (previousValue == currentValue) {
x++;
}
previousValue = x;
document.getElementById("newQuote").innerHTML = qoute.newQoute[x];
document.getElementById("auther").innerHTML = qoute.auther[x];
}

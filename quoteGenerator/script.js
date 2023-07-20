var button = document.getElementById('quoteButton');
var output = document.getElementById('output');
var quotes = [
    '"It is during our darkest moments that we must focus to see the light. -Aristotle"' ,
    '"The only thing that feels better than winning is winning when nobody thought you could." - Hank Aaron' ,
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill' ,
    '"We may encounter many defeats but we must not be defeated." - Maya Angelou' , 
    '"Your time is limited, do not waste it living someone elses life." - Steve Jobs' , 
    '"The way to get started is to quit talking and begin doing." - Walt Disney' , 
    '"A journey of a thousand miles begins with a single step." - Lao Tzu' ,
    '"Do not judge each day by the harvest you reap but by the seeds that you plant." - Robert Louis Stevenson' , 
    '“Do not think about the start of the race, think about the ending.” — Usain Bolt' ,
    '"Speak softly and carry a big stick." — Theodore Roosevelt' , 
    ' "Success seems to be connected with action. Successful people keep moving. They make mistakes but they do not quit." — Conrad Hilton' ,
    '“You have to get up every morning with determination if you are going to go to bed with satisfaction.” — George Lorimer' ,
    'Try not. Do, or do not. There is no try.” — Yoda' , 
    '“You may not control all the events that happen to you, but you can decide not to be reduced by them.” — Maya Angelou' ,
    '“Even if you’re on the right track, you’ll get run over if you just sit there.” — Will Rogers' ,
    '“Never confuse a single defeat with a final defeat.” — F. Scott Fitzgerald' , 
]

quoteButton.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})
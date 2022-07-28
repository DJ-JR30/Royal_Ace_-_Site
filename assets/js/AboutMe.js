const QUOTES = {
    1: "“Whether you think you can or think you can't, your right.” — Henry Ford",
    2: "“He who dares not offend, cannot be honest” — Thomas Paine",
    3: "“If the truth shall kill them, let them die” — Immanuel Kant",
    4: "“A salary is the drug they give you to forget your dreams.” — Kevin O'Leary",
    5: "“No one is more hated than he who speaks the truth.” — Plato",
    6: "“The way to get started is to quit talking and begin doing.” — Walt Disney",
    7: "“If you set your goals ridiculously high and it's a failure, you will fall above everyone else's success.” — James Cameron",
    8: "“The only impossible journey is the one you never begin.” — Tony Robbins",
    9: "“Life is really simple, but we insist on making it complicated.” — Confucius",
    10: "“Life itself is the most wonderful fairy tale.” — Hans Christian Andersen",
    11: "“Life is a long lesson in humility.” — James M. Barrie",
    12: "“The road to success and the road to failure are almost exactly the same.” — Colin R. Davis",
    13: "“You miss 100% if the shots you don't take.” — Wayne Gretzky",
    14: "“The question isn't who is going to let me; it's is who going to stop me.” — Ayn Rand",
    15: "“Everything you've ever wanted is on the other side of fear.” — George Addair",
    16: "“Dream big and dare to fail.” — Norman Vaughan",
    17: "“Nothing is impossible, the word itself says, ‘I'm possible!’” — Audrey Hepburn",
    18: "“I would rather die of passion than of boredom.” — Vincent van Gogh",
    19: "“Dreaming, after all, is a form of planning.” — Gloria Steinem",
    20: "”I have not yet begun to fight!“ — John Paul Jones, U.S. Navy",
    21: "”The people who are crazy enough to think they can change the world, are the ones who do.“ — Steve Jobs",
    22: "”Train yourself to let go of everything you fear to lose“ — Yoda",
    23: "”Always forgive your enemies; nothing annoys them so much.“ — Oscar Wilde",
    24: "”Obsessed is just a word the lazy use to describe the dedicated.“ — Russell Warren",
    25: "”Either write something worth reading or do something worth writing.“ — Benjamin Franklin",
    26: "”The best revenge is massive success“ — Frank Sinatra",
    27: "”If you aren't going all fhe way, why go at all?“ — Joe Namath",
    28: "”Build your own dreams, or someone else will hire you to build theirs.“ — Farrah Grey",
    29: "”Tough times never last, but tough people do“ — Dr.Robert Schuller",
    30: "”That which does not kill us makes us stronger“ — Friedrich Nietzshe",
    31: "”Don't count the days, make the days count.“ — Muhammad Ali",
    32: "”Someday is not a day of the week.“ — Denise Brennan-Nelson",
    33: "”If you can't outplay them, outwork them.“ — Ben Hogan",
    34: "”Tis better to keep quiet and be thot a fool than to speak and remove all doubt“ — Dr.Author Burns",
    35: "”Bravery is not a quality of the body. It is of the soul.“ — Mahatma Gandhi",
    36: "”Don't sweat the pretty things and don't pet the sweaty things.“ — George Carlin",
    37: "”I got my own back.“ — Maya Angelou",
    38: "”Either I will find a way, or I will make one.“ — Philp Sidney",
    39: "”When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.“ — Henry Ford",
    40: "”Life isn't about finding yourself. Life is about creating yourself.“ — George Bernard Shaw",
    41: "”It's kind of fun to do the impossible.“ — Walt Disney"
};

  
  

let Back_Url = 'http://192.168.1.82:12345/';
  
const Quote_Txt = document.getElementById('Quotes');
  

  
  
START();
  




function START() {
    Quote();
}
  
  
function JSON_Length(Arr) {
    return Object.keys(Arr).length;
}
  
  
function Quote() {
    let ranNum = randomInt(1, JSON_Length(QUOTES));
    let txt = QUOTES[ranNum];
  
    Quote_Txt.innerText = txt;
}
  
  

  
function Back() {
    window.location = Back_Url;
}
  
  
  
  
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

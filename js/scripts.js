// Name: Name, dunkass

/* Soul Type: Skills
Domination - tactics
Endless - persuasion
Enlightened - magic
Tormented - history
Blank - medicine
Caressing - mechanics
Chaotic - leadership
Changeling - occultism
Decrepit - thievery
Heartless - being wealthy
Latent - a little bit of everything
Radiating - instincts
Shadowed - botany
Solitary - weapons
Suffocated - cooking
Tainted - brawling
*/

// Ability + Weakness: Useful power, and how your weakness keeps you from taking full advantage of it

/* DoB: Lifelong Struggle
Aries March 21 - April 19 - unnecessary suffering
Taurus April 20 – May 20 - vacant directionlessness
Gemini May 21- June 21 - bitter nihilism
Cancer June 22- July 22 - overwhelming self-doubt
Leo July 23 – August 22 - unhealthy attachments
Virgo August 23 – September 22 - lonely isolation 
Libra September 23 – October 23 - genuine expression
Scorpio October 24 – November 21 - ambition and hubris
Sagittarius November 22 – December 21 - impotent irrelevance 
Capricorn December 22 – January 19 - excessive inhibitions
Aquarius January 20 – February 18 - unwavering stubbornness
Pisces February 19 – March 20 - blinding idolization
*/

/* Color: Personality
XX - any non 00 value
xx - any non 00 value < XX

XX0000 - mysterious and composed
XXxx00 - earnest and humble
XXXX00 - acerbic and cynical
xxXX00 - playful and impish
00XX00 - outspoken and radical
00XXxx - gentle and dependable 
00XXXX - zealous and principled
00xxXX - performative and dramatic
0000XX - rigid and deferential 
xx00XX - whimsical and relaxed
XX00XX - imperious and arrogant
XX00xx - exuberant and rollicking
*/

const thresholds = [85, 170, 255];

function getRange(value) {
  if (value <= thresholds[0]) return "low";
  if (value <= thresholds[1]) return "med";
  if (value <= thresholds[2]) return "high";
}

function getColorBucket(RGB) {
  const [r, g, b] = RGB;
  const rRange = getRange(r);
  const gRange = getRange(g);
  const bRange = getRange(b);

  return rRange + "-" + gRange + "-" + bRange;
}

function hexToRGB(hex) {
  hex = hex.slice(1);
  const parsedHex = parseInt(hex, 16);
  const r = (parsedHex >> 16) & 255;
  const g = (parsedHex >> 8) & 255;
  const b = parsedHex & 255;
  
  return [r, g, b];
}

function colorSubmissionHandler(colorHEX) {
  const colorRGB = hexToRGB(colorHEX);
  const colorBucket = getColorBucket(colorRGB);
  console.log(colorBucket);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const colorInput = document.querySelector("#color").value;

    colorSubmissionHandler(colorInput);
  });
});
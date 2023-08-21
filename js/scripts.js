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
Tainted - brawling */

// Ability + Weakness: Useful power, and how your weakness keeps you from taking full advantage of it

/* DoB: Lifelong Struggle
Aries March 21 - April 19 - unnecessary suffering
Taurus April 20 – May 20 - vacant directionlessness
Gemini May 21- June 21 - bitter nihilism
Cancer June 22- July 22 - overwhelming self-doubt
Leo July 23 – August 22 - unhealthy attachments
Virgo August 23 – September 22 - positive connection
Libra September 23 – October 23 - being seen
Scorpio October 24 – November 21 - ambition and hubris
Sagittarius November 22 – December 21 - impotent irrelevance 
Capricorn December 22 – January 19 - excessive limitations
Aquarius January 20 – February 18 - unwavering stubbornness
Pisces February 19 – March 20 - blinding idolization

Color: Personality
XX - any non 00 value
xx - any non 00 value < XX

2-0-0 2-1-1 x
2-1-0 2-2-1 x
2-2-0 1-1-0 1-1-1 x
1-2-0 0-1-0 x
0-2-0 1-2-1 x
0-2-1 1-2-2 x
0-2-2 0-1-1 2-2-2 x
0-1-2 0-0-1 x
0-0-2 1-1-2 x
1-0-2 2-1-2 0-0-0 x
2-0-2 1-0-1
2-0-1 1-0-0




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

const assignment = {
  "0-0-1": "XX0000",
  "0-0-2": "XX0000",
*/

const thresholds = [85, 170, 255];

function getRange(value) {
  if (value <= thresholds[0]) return "low";
  if (value <= thresholds[1]) return "med";
  if (value <= thresholds[2]) return "high";
}

function getColorBucket(RGB) {
  //turn RGB into one of 27 buckets
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
  const bucketPersonalityPairs = {
      "high-low-low": "mysterious and composed",
      "high-med-med": "mysterious and composed",
      "high-med-low": "earnest and humble",
      "high-high-med": "earnest and humble",
      "high-high-low": "acerbic and cynical",
      "med-med-low": "acerbic and cynical",
      "med-med-med": "acerbic and cynical",
      "med-high-low": "playful and impish",
      "low-med-low": "playful and impish",
      "low-high-low": "outspoken and radical",
      "med-high-med": "outspoken and radical",
      "low-high-med": "gentle and dependable",
      "med-high-high": "gentle and dependable",
      "low-high-high": "zealous and principled",
      "low-med-med": "zealous and principled",
      "high-high-high": "zealous and principled",
      "low-med-high": "performative and dramatic",
      "low-low-med": "performative and dramatic",
      "low-low-high": "rigid and deferential",
      "med-med-high": "rigid and deferential",
      "med-low-high": "whimsical and relaxed",
      "high-med-high": "whimsical and relaxed",
      "low-low-low": "whimsical and relaxed",
      "high-low-high": "imperious and arrogant",
      "med-low-med": "imperious and arrogant",
      "high-low-med": "exuberant and rollicking",
      "med-low-low": "exuberant and rollicking"
    };

  console.log(bucketPersonalityPairs[colorBucket]);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const colorInput = document.querySelector("#color").value;

    colorSubmissionHandler(colorInput);
  });
});
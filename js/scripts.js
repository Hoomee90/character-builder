// Name: Name, dunkass

// Ability + Weakness: Useful power, and how your weakness keeps you from taking full advantage of it

/* DoB: Lifelong Struggle DONE
Aries March 21":"April 19":"unnecessary suffering
Taurus April 20 – May 20":"vacant directionlessness
Gemini May 21- June 21":"bitter nihilism
Cancer June 22- July 22":"overwhelming self-doubt
Leo July 23 – August 22":"unhealthy attachment
Virgo August 23 – September 22":"lonely isolation
Libra September 23 – October 23":"compulsive insincerity
Scorpio October 24 – November 21":"hubristic ambition
Sagittarius November 22 – December 21":"ineffective irrelevance
Capricorn December 22 – January 19":"excessive restrictions
Aquarius January 20 – February 18":"unwavering stubbornness
Pisces February 19 – March 20":"blinding idolization

*/

function soulSubmissionHandler(soulType) {
  const soulSkill = {
    "dom":"leadership",
    "end":"persuasion",
    "enl":"magic",
    "tor":"history",
    "bla":"medicine",
    "car":"mechanics",
    "cho":"athletics",
    "cha":"occultism",
    "dec":"thievery",
    "hea":"being filthy rich",
    "lat":"a little bit of everything",
    "rad":"reading people",
    "sha":"botany",
    "sol":"weapons",
    "suf":"cooking",
    "tai":"brawling"
  };
  console.log(soulSkill[soulType]);
}

function dateSubmissionHandler(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getUTCMonth() + 1;
  //dictionary for how zodiacs relate to lifelong struggles
  const zodiacStruggle = {
    "excessive restrictions": () => (month == 12 && day >= 22) || (month == 1 && day <= 19),
    "unwavering stubbornness": () => (month == 1 && day >= 20) || (month == 2 && day <= 18),
    "blinding idolization": () => (month == 2 && day >= 19) || (month == 3 && day <= 20),
    "unnecessary suffering": () => (month == 3 && day >= 21) || (month == 4 && day <= 19),
    "vacant directionlessness": () => (month == 4 && day >= 20) || (month == 5 && day <= 20),
    "bitter nihilism": () => (month == 5 && day >= 21) || (month == 6 && day <= 20),
    "overwhelming self-doubt": () => (month == 6 && day >= 21) || (month == 7 && day <= 22),
    "unhealthy attachment": () => (month == 7 && day >= 23) || (month == 8 && day <= 22),
    "lonely isolation": () => (month == 8 && day >= 23) || (month == 9 && day <= 22),
    "compulsive insincerity": () => (month == 9 && day >= 23) || (month == 10 && day <= 22),
    "hubristic ambition": () => (month == 10 && day >= 23) || (month == 11 && day <= 21),
    "ineffective irrelevance": () => (month == 11 && day >= 22) || (month == 12 && day <= 21),
  };

  for (let sign in zodiacStruggle) {
    if (zodiacStruggle[sign]()) console.log(sign);
  }
}

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
  //convert hexadecimal color form output into RGB
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
  //dictionary for how RGB relate to personality
  const bucketPersona = {
    "high-low-low": "mysterious and composed",
    "high-med-med": "mysterious and composed",
    "high-med-low": "earnest and humble",
    "high-high-med": "earnest and humble",
    "high-high-low": "acerbic and cynical",
    "med-med-low": "acerbic and cynical",
    "high-high-high": "acerbic and cynical",
    "med-high-low": "playful and impish",
    "low-med-low": "playful and impish",
    "low-high-low": "outspoken and radical",
    "med-high-med": "outspoken and radical",
    "low-high-med": "gentle and dependable",
    "med-high-high": "gentle and dependable",
    "low-high-high": "zealous and principled",
    "low-med-med": "zealous and principled",
    "low-low-low": "zealous and principled",
    "low-med-high": "performative and dramatic",
    "low-low-med": "performative and dramatic",
    "low-low-high": "rigid and deferential",
    "med-med-high": "rigid and deferential",
    "med-low-high": "whimsical and relaxed",
    "high-med-high": "whimsical and relaxed",
    "med-med-med": "whimsical and relaxed",
    "high-low-high": "imperious and arrogant",
    "med-low-med": "imperious and arrogant",
    "high-low-med": "exuberant and rollicking",
    "med-low-low": "exuberant and rollicking"
  };
  
  console.log(bucketPersona[colorBucket]);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const colorInput = document.querySelector("#color").value;
    const dateInput = document.querySelector("#born").value;
    const soulInput = document.querySelector("#soul").value;
    
    dateSubmissionHandler(dateInput);
    colorSubmissionHandler(colorInput);
    soulSubmissionHandler(soulInput);
  });
});
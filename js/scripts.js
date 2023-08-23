function nameSubmissionHandler(name) {
  const nameCaps = name.toUpperCase();
  document.querySelector("#charName").innerText = "Your name is " + nameCaps;
}

function strengthWeakSubmissionHandler(strength, weakness) {
  const strengthText = {
    "power":"You possess the power to enact your will on the world. Whether it be through brute strength, equipment, or connections you have a leg up compared to other people in simply getting things done.",
    "wits":"You possess the wits to discover, deconstruct and outsmart the world. Your quick-acting mind and extensive knowledge combine to make a formidable mental force.",
    "personality":"You possess the self-assuredness to gather people around you, speak with power, and stand strong against any words thrown your way. You know who you are, what you stand for, and what you want, and nothing and nobody will shake your foundations."
  };

  const weaknessText = {
    "sickly": "you suffer from ailments or difficulties of the body or mind. These things limit your options in life and can knock you down at the worst possible times. They drain you, which can make utilizing your strengths a difficult thing.",
    "naive": "you lack understanding in how the world works. You often feel you are out of your depth, easy to mislead, and struggle to make decisions with all the limited information you have. Or perhaps you are completely oblivious to any of these things, unaware of how they may bar you from utilizing your strengths in ways that effectively support your goals.",
    "impetuous": "you are impulsive, spontaneous and perhaps even bullheaded. You tend to make and run with your own plans, no matter how incomplete they are. Your quick emotions and hasty decisions often mean your strengths are put to poorly thought-out or perhaps even destructive ways."
  };
  document.querySelector("#charStrength").innerText = strengthText[strength];
  document.querySelector("#charWeakness").innerText = weaknessText[weakness];
}

function soulSubmissionHandler(soulType) {
  const soulSkill = {
    "dom":"leadership",
    "end":"persuasion",
    "enl":"history",
    "tor":"survival skills",
    "bla":"medicine",
    "car":"mechanics",
    "cho":"athletics",
    "cha":"religion and occultism",
    "dec":"thievery",
    "hea":"being filthy rich",
    "lat":"a little bit of everything",
    "rad":"reading people",
    "sha":"botany",
    "sol":"weapons",
    "suf":"cooking",
    "tai":"brawling"
  };
  document.querySelector("#charTalent").innerText = soulSkill[soulType];
}

function dateSubmissionHandler(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  //dictionary for how zodiacs relate to lifelong struggles
  const zodiacStruggle = {
    //values are no-parameter arrow function expressions returning true based on the inputted date
    "excessive restrictions": () => (month == 12 && day >= 22) || (month == 1 && day <= 19),
    "unwavering stubbornness": () => (month == 1 && day >= 20) || (month == 2 && day <= 18),
    "blinding idolization": () => (month == 2 && day >= 19) || (month == 3 && day <= 20),
    "unnecessary suffering": () => (month == 3 && day >= 21) || (month == 4 && day <= 19),
    "vacant directionlessness": () => (month == 4 && day >= 20) || (month == 5 && day <= 20),
    "bitter nihilism": () => (month == 5 && day >= 21) || (month == 6 && day <= 20),
    "overwhelming self-doubt": () => (month == 6 && day >= 21) || (month == 7 && day <= 22),
    "codependent attachments": () => (month == 7 && day >= 23) || (month == 8 && day <= 22),
    "lonely isolation": () => (month == 8 && day >= 23) || (month == 9 && day <= 22),
    "compulsive insincerity": () => (month == 9 && day >= 23) || (month == 10 && day <= 22),
    "hubristic ambition": () => (month == 10 && day >= 23) || (month == 11 && day <= 21),
    "ineffective irrelevance": () => (month == 11 && day >= 22) || (month == 12 && day <= 21),
  };

  //procedurally finds the key associated with the value equal to 'true'
  for (let sign in zodiacStruggle) {
    if (zodiacStruggle[sign]()) document.querySelector("#charStruggle").innerText = sign;
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
  
  document.querySelector("#charPersona").innerText = bucketPersona[colorBucket];
}

function allFieldsFilledCheck() {
  if (document.querySelector("#born").value && document.querySelector("#name").value) {
    return true;
  }
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const colorInput = document.querySelector("#color").value;
    const dateInput = document.querySelector("#born").value;
    const soulInput = document.querySelector("#soul").value;
    const strengthInput = document.querySelector("input[name=ability]:checked").value;
    const weaknessInput = document.querySelector("input[name=weakness]:checked").value;
    const nameInput = document.querySelector("#name").value;
    const errorMsg = document.querySelector("#errorMsg")

    if (allFieldsFilledCheck()) {
      nameSubmissionHandler(nameInput);
      strengthWeakSubmissionHandler(strengthInput, weaknessInput);
      dateSubmissionHandler(dateInput);
      colorSubmissionHandler(colorInput);
      soulSubmissionHandler(soulInput);

      document.querySelector("#charSheet").classList.remove("hidden");
      errorMsg.classList.add("hidden");
    } 
    else {
      errorMsg.classList.remove("hidden");
    }  
  });
});
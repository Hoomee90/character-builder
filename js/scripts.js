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
    "sickly": "you suffer from ailments or difficulties of the body or mind. These things limit your options in life and can knock you down at the worst possible times. They drain you, which can make utilizing your strengths effectively a difficult thing.",
    "naive": "you lack understanding in how the world works. You are easy to mislead, often feel out of your depth, and struggle to make decisions with the limited information you have. Or perhaps you are completely oblivious to any of these things, unaware of how they may bar you from utilizing your strengths to accurately work towards your goals.",
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
    "rad":"observation",
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
    "excessive inhibition": () => (month == 12 && day >= 22) || (month == 1 && day <= 19),
    "unwavering stubbornness": () => (month == 1 && day >= 20) || (month == 2 && day <= 18),
    "unthinking obedience": () => (month == 2 && day >= 19) || (month == 3 && day <= 20),
    "perpetual self-sacrifice": () => (month == 3 && day >= 21) || (month == 4 && day <= 19),
    "vacant directionlessness": () => (month == 4 && day >= 20) || (month == 5 && day <= 20),
    "bitter nihilism": () => (month == 5 && day >= 21) || (month == 6 && day <= 20),
    "overwhelming self-doubt": () => (month == 6 && day >= 21) || (month == 7 && day <= 22),
    "unhealthy relationships": () => (month == 7 && day >= 23) || (month == 8 && day <= 22),
    "oppressive isolation": () => (month == 8 && day >= 23) || (month == 9 && day <= 22),
    "incessant cageyness": () => (month == 9 && day >= 23) || (month == 10 && day <= 22),
    "hubristic ambition": () => (month == 10 && day >= 23) || (month == 11 && day <= 21),
    "effete irrelevance": () => (month == 11 && day >= 22) || (month == 12 && day <= 21),
  };

  //procedurally finds the key associated with the value equal to 'true'
  for (let sign in zodiacStruggle) {
    if (zodiacStruggle[sign]()) document.querySelector("#charStruggle").innerText = sign;
  }
}

const baseColors = [
  [98, 98, 98],   // Gray
  [161, 0, 0],    // Red
  [161, 80, 0],   // Orange
  [161, 161, 0],  // Yellow
  [65, 102, 0],   // Green
  [0, 129, 65],   // Dark Green
  [0, 130, 130],  // Teal
  [0, 86, 130],   // Blue
  [0, 0, 86],     // Dark Blue
  [43, 0, 87],    // Purple
  [106, 0, 106],  // Dark Purple
  [119, 0, 60]    // Magenta
];

function calculateDistance(color1, color2) {
  const [r1, g1, b1] = color1;
  const [r2, g2, b2] = color2;
  return Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2));
}

function categorizeColor(color) {
  
  let minDistance = Infinity;
  let closestColorIndex = -1;
  
  for (let i = 0; i < baseColors.length; i++) {
    const distance = calculateDistance(color, baseColors[i]);
    if (distance < minDistance) {
      minDistance = distance;
      closestColorIndex = i;
    }
  }
  
  return closestColorIndex;
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
  const colorIndex = categorizeColor(colorRGB);
  //array for personality to be used with RGB array
  const colorPersona = [
    "outspoken and loyal",
    "mysterious and composed",
    "earnest and humble",
    "acerbic and cynical",
    "playful and mischievous",
    "gentle and dependable",
    "zealous and principled",
    "performative and dramatic",
    "rigid and deferential",
    "whimsical and relaxed",
    "imperious and arrogant",
    "exuberant and rollicking"
  ];
  
  document.querySelector("#charPersona").innerText = colorPersona[colorIndex];
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
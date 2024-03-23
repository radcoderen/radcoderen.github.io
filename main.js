// La logique utilisant alpine.js

document.addEventListener('alpine:init', () => {
    Alpine.data('rcode', () => RCode);
})

function normalize(precode) {
  // première lettre du précode en majuscule
  precode = precode.toUpperCase();
  // lettre et 3 chiffres, mais pas de la forme A0XX
  if (!/^[A-Z]\d{3}$/.test(precode) || precode.startsWith("A0")) {
    return "";
  }
  return precode;
}

RCode = {
  precode: '',
  get code() {
    // normalisation et vrification du précode
    precode = normalize(this.precode);
    if (precode == "") {
      return "";
    }
    // varaible temporaire
    x = precode.charCodeAt(1) + precode.charCodeAt(0) * 10 - 698;
    y = precode.charCodeAt(3) + precode.charCodeAt(2) * 10 + x - 528;
    z = (y*7) % 100;
    // le code comme entier
    code = Math.floor(z / 10) + (z % 10) * 10 + ((259 % x) % 100) * 100;
    // le code comme chaîne avec 4 chiffres
    return code.toString().padStart(4, '0')
  },
  get test(){
    // retourne vrai si le precode est conforme
    return normalize(this.precode) != "";
  }
}

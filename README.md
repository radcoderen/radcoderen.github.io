# Generateur de code de sécurité pour autoradio Renault

## Page web

- En français : **[radcoderen.github.io](https://radcoderen.github.io)**
- In english : **[radcoderen.github.io/en.html](https://radcoderen.github.io/en.html)**

## L'origine

Le code qui transforme le precode en code a été empreinté à [@lucasg](https://lucasg.github.io/2019/08/03/Compute-renault-radio-code/).

## code javascript

```js
function code(precode) {
    // première lettre du précode en majuscule
    precode = precode.toUpperCase();
    // vrification du précode
    if (!/^[A-Z]\d{3}$/.test(precode) || precode.startsWith("A0")) {
      return '';
    }
    // varaible temporaire
    x = precode.charCodeAt(1) + precode.charCodeAt(0) * 10 - 698;
    y = precode.charCodeAt(3) + precode.charCodeAt(2) * 10 + x - 528;
    z = (y*7) % 100;
    // le code comme entier
    code = Math.floor(z / 10) + (z % 10) * 10 + ((259 % x) % 100) * 100;
    // le code comme chaîne avec 4 chiffres
    return code.toString().padStart(4, '0')
  }
```

## Licence

[MIT](LICENSE)

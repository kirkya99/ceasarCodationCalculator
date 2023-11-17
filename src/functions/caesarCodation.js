const { app } = require('@azure/functions');
const { only } = require('node:test');

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

app.http('caesarCodation', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const p = (request.body && request.body.p) || request.query.get('p');
        const k =  (request.body && request.body.k) || request.query.get('k');
        
        let responseMessage;

        const pIsNumber = isAlphabetic(p);
        const kIsNumber = isNumber(k);

        if (pIsNumber && kIsNumber) {
            let number = getNumber(k);
            let textAsNum = [];
            for (let i = 0; i < p.length; i++) {
                textAsNum.push(getNumericValue(p.charAt(i).toLowerCase()))
            }

            responseMessage = calculateCodation(textAsNum, number)

        }
        else {
            if (!pIsNumber) {
                responseMessage = "Wrong input: p must only contain alphabetic letters!"
                    + "\np: " + p;
            }
            else if (!kIsNumber) {
                responseMessage = "Wrong input: k must be a number! "
                    + "\nk: " + k + "; type of k: " + typeof k;
            }
            else {
                responseMessage = "Wrong input: p must only contain alphabetic letters and k must be a number!"
                    + "\np: " + p + "; k: " + k;
            }
        }

        return { body: responseMessage };
    }
});

// Get the numeric index for a letter
function getNumericValue(letter) {
    letter_index = NaN
    for (let i = 0; i < alphabet.length; i++) {
        if (letter === alphabet[i]) {
            letter_index = i;
        }
    }
    return letter_index
}

// Checks if input is a number
function isNumber(input) {
    for (const char of input) {
        if(!(char >= "0" && char <= "9"))
        {
            return false
        }
    }
    return true;
}

// Cast string input to a number
function getNumber(input)
{
    return Number(input);
}

// Checks if input contains only letters
function isAlphabetic(input) {
    for (const char of input) {
        if (!(char >= "a" && char <= "z") &&
            !(char >= "A" && char <= "Z")) {
            return false;
        }
    }
    return true;
}

// Calculate encoded text
function calculateCodation(p, k) {
    let encodedText = []
    for (let i = 0; i < p.length; i++) {
        encodedText.push((p[i] + k) % 26);
    }
    let text = "";
    for(let i = 0; i < encodedText.length; i++)
    {
        text += alphabet[encodedText[i]]
    }
    text[0].toUpperCase();
    return text
}

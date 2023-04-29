/**
 * Sample tests
 * Hola como esta usted informacion
 * Hoberlai cobermober enterstai ufatstenterd imesnfoberrmaicimesobern
 */

function encrypt() {
    // Regular expression to look for vocals
    const regex = /[aeiou]/gm;
    // This dictionary have all the crypted vocals equivalents
    const coincidence = { "a" : "ai", "e" : "enter", "i" : "imes", "o" : "ober", "u" : "ufat", }
    const textbox = document.getElementById("text");
    const text = textbox.value;
    // We get each vocal in the text, replace it using the dictionary, 
    // and building a new final crypted string
    let finalText = text.replace(regex, (vocal) => {
        return coincidence[vocal]
    });

    console.log(finalText)
}

function decrypt() {
    // Regular expression to look for crypted vocals
    const regex = /(ai)|(enter)|(imes)|(ober)|(ufat)/gm;
    // This dictionary have all the normal vocals vocals equivalents
    const coincidence = {"ai" : "a", "enter" : "e", "imes" : "i", "ober" : "o", "ufat" : "u", }
    const textbox = document.getElementById("text");
    const text = textbox.value;
    // We get each crypted vocal in the text, replace it using the dictionary, 
    // and building a new final decrypted string
    let finalText = text.replace(regex, (cryptedVocal) => {
        return coincidence[cryptedVocal];
    })

    console.log(finalText);


}

// Button calls
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");

encryptButton.addEventListener( "click", () => encrypt() );
decryptButton.addEventListener( "click", () => decrypt() );
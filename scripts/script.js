/**
 * Sample tests
 * Hola como esta usted informacion
 * Hoberlai cobermober enterstai ufatstenterd imesnfoberrmaicimesobern
*/

function validText(text) {

}

function clean(text) {
    // If there isn't an input return and do nothing
    if(text.length<=0){
        return false;
    }
    // Hide all elements inside final box message
    const elements = document.getElementsByClassName("visibility");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add("noExist");
    }
    return true
}

function showFinalText(text) {
    const output = document.getElementById("finalTextBox");
    output.classList.remove("finalBoxElements");
    // To avoid overflow in x, because previous is fit-content
    output.style.minWidth = "170px";
    output.innerText = text;
    const copyButton = document.getElementById("copy");
    copyButton.classList.remove("noExist");
    copyButton.classList.add("existAgain");
}

async function copyText() {
    const output = document.getElementById("finalTextBox");
    await navigator.clipboard.writeText(output.innerText);
    alert("Mensaje copiado");
}

function encrypt() {
    // Check if it is a valid text
    validText();
    // Regular expression to look for vocals
    const regex = /[aeiou]/gm;
    // This dictionary have all the crypted vocals equivalents
    const coincidence = { "a" : "ai", "e" : "enter", "i" : "imes", "o" : "ober", "u" : "ufat", }
    const textbox = document.getElementById("text");
    const text = textbox.value;
    // Hide elements
    if(!clean(text)) {
        return;
    }
    // We get each vocal in the text, replace it using the dictionary, 
    // and building a new final crypted string
    let finalText = text.replace(regex, (vocal) => {
        return coincidence[vocal]
    });
    // Show final text
    showFinalText(finalText);
}

function decrypt() {
    // Check if it is a valid text
    validText();
    // Regular expression to look for crypted vocals
    const regex = /(ai)|(enter)|(imes)|(ober)|(ufat)/gm;
    // This dictionary have all the normal vocals vocals equivalents
    const coincidence = {"ai" : "a", "enter" : "e", "imes" : "i", "ober" : "o", "ufat" : "u", }
    const textbox = document.getElementById("text");
    const text = textbox.value;
    // Hide elements
    if(!clean(text)) {
        return;
    }
    // We get each crypted vocal in the text, replace it using the dictionary, 
    // and building a new final decrypted string
    let finalText = text.replace(regex, (cryptedVocal) => {
        return coincidence[cryptedVocal];
    })
    // Show final text
    showFinalText(finalText);
}

// Button calls
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const copyButton = document.querySelector("#copy");

encryptButton.addEventListener( "click", () => encrypt() );
decryptButton.addEventListener( "click", () => decrypt() );
copyButton.addEventListener( "click", () => copyText() )
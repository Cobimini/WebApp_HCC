//import { pipeline } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.1';
import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers";

const longTextInput = document.getElementById('long-text-input');
const generateButton = document.getElementById('generate-button');
const generateButtonlong = document.getElementById('long-btn');
const generateButtonshort = document.getElementById('short-btn');
const output = document.getElementById('output-div');
const outputlong = document.getElementById('output-div-long');
const outputshort = document.getElementById('output-div-short');
const spinner = document.getElementById('spinner');
const status = document.getElementById("status");
const saveButton = document.getElementById('btn-id');
const copyButton = document.getElementById('copy-btn');
const saveButtonlong = document.getElementById('save-long-btn');
const copyButtonlong = document.getElementById('copy-long-btn');
const saveButtonshort = document.getElementById('save-short-btn');
const copyButtonshort = document.getElementById('copy-short-btn');
const abfrage = document.getElementById('abfrage');
const longer = document.getElementById('longer');
const longButton = document.getElementById('long-btn');
const shortButton = document.getElementById('short-btn');

status.textContent = "Loading model...";
saveButton.setAttribute("disabled", true);
copyButton.setAttribute("disabled", true);
saveButtonlong.setAttribute("disabled", true);
copyButtonlong.setAttribute("disabled", true);
saveButtonshort.setAttribute("disabled", true);
copyButtonshort.setAttribute("disabled", true);
abfrage.setAttribute("disabled", true);
longer.setAttribute("disabled", true);
longButton.setAttribute("disabled", true);
shortButton.setAttribute("disabled", true);

let currentMilliseconds = Date.now();

const summarization = await pipeline(
    //'summarization', 'Xenova/bart-large-cnn'
    'summarization', 'Xenova/distilbart-cnn-6-6'
   //'summarization', 'Xenova/distilbart-xsum-6-6'
   //'summarization', 'Xenova/distilbart-xsum-12-3'
   //'summarization', 'Xenova/distilbart-xsum-9-6'
   //'summarization', 'Xenova/distilbart-xsum-12-6'
   //'summarization', 'Xenova/distilbart-cnn-12-3'
   //'summarization', 'Xenova/distilbart-cnn-12-6'
   //'summarization', 'Xenova/bart-large-xsum'
   //"summarization", model="Falconsai/medical_summarization"
);

status.textContent = "Summarizer is ready";
let currentMillisecondsend = Date.now();

console.log((currentMillisecondsend-currentMilliseconds)/1000);

generateButton.removeAttribute('disabled');

generateButton.addEventListener('click', async () => {
    spinner.classList.add('show');
    generateButton.setAttribute("disabled", true);
    const input = longTextInput.value;
    let timeagen = Date.now();
    const result = await summarization(input, {
        min_length: 50, max_length: 150, //Länge von dem Summary anpassen
    });
    status.textContent = "";
    let timebgen = Date.now();
    console.log((timebgen-timeagen)/1000);
    output.innerHTML = result[0].summary_text;
    spinner.classList.remove('show');
    generateButton.removeAttribute("disabled");
    output.style.display = 'block';
    abfrage.removeAttribute('disabled');
    saveButton.removeAttribute('disabled');
    copyButton.removeAttribute('disabled');
    longer.removeAttribute('disabled');
    longButton.removeAttribute("disabled");
    shortButton.removeAttribute("disabled");
    abfrage.style.display = '';
    saveButton.style.display = '';
    copyButton.style.display = '';
    longer.style.display = '';
    shortButton.style.display = '';
    longButton.style.display = '';
});

let butto = document.querySelector("#btn-id");
// eventListener "click" on button
butto.addEventListener("click", () => {
    let valueinput = output.innerHTML
    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME);
    let anele = document.createElement("a");
    anele.setAttribute("download", "Medical_Summary");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME);
})

let butto2 = document.querySelector("#copy-btn");
// eventListener "click" on button
butto2.addEventListener("click", () => {
    var copyText = output.innerHTML;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copied-message").innerText = "Copied";
})

const copybtn = document.getElementById('copy-btn');
  // define the function to change the HTML content
  function changeContent() {
    copybtn.innerText = 'Copied';
  }
  // add event listener to the button
  copybtn.addEventListener('click', changeContent);
  copybtn.addEventListener('click', changebacklong)
  copybtn.addEventListener('click', changebackshort)


//longer buttons
    generateButtonlong.addEventListener('click', async () => {
    spinner.classList.add('show');
    generateButtonlong.setAttribute("disabled", true);
    const input = longTextInput.value;
    let timeagen = Date.now();
    const result = await summarization(input, {
        min_length: 150, max_length: 250, //Länge von dem Summary anpassen
    });
    status.textContent = "";
    let timebgen = Date.now();
    console.log((timebgen-timeagen)/1000);
    outputlong.innerHTML = result[0].summary_text;
    spinner.classList.remove('show');
    generateButtonlong.removeAttribute("disabled");
    outputlong.style.display = 'block';
    abfrage.removeAttribute('disabled');
    saveButtonlong.removeAttribute('disabled');
    copyButtonlong.removeAttribute('disabled');
    longer.removeAttribute('disabled');
    longButton.removeAttribute("disabled");
    shortButton.removeAttribute("disabled");
    abfrage.style.display = '';
    saveButtonlong.style.display = '';
    copyButtonlong.style.display = '';
    longer.style.display = '';
    shortButton.style.display = '';
    longButton.style.display = '';
});

let buttolong = document.querySelector("#save-long-btn");
// eventListener "click" on button
buttolong.addEventListener("click", () => {
    let valueinput = outputlong.innerHTML
    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME);
    let anele = document.createElement("a");
    anele.setAttribute("download", "Medical_Summary");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME);
})

let buttolong2 = document.querySelector("#copy-long-btn");
// eventListener "click" on button
buttolong2.addEventListener("click", () => {
    var copyTextlong = outputlong.innerHTML;
    navigator.clipboard.writeText(copyTextlong);
    document.getElementById("copied-message").innerText = "Copied";
})

const copybtnlong = document.getElementById('copy-long-btn');
  // define the function to change the HTML content
  function changeContentlong() {
    copybtnlong.innerText = 'Copied';
  }

  // add event listener to the button
  copybtnlong.addEventListener('click', changeContentlong);
  copybtnlong.addEventListener('click', changeback)
  copybtnlong.addEventListener('click', changebackshort)

//shorter button
generateButtonshort.addEventListener('click', async () => {
    spinner.classList.add('show');
    generateButtonshort.setAttribute("disabled", true);
    const input = longTextInput.value;
    let timeagen = Date.now();
    const result = await summarization(input, {
        min_length: 20, max_length: 40, //Länge von dem Summary anpassen
    });
    status.textContent = "";
    let timebgen = Date.now();
    console.log((timebgen-timeagen)/1000);
    outputshort.innerHTML = result[0].summary_text;
    spinner.classList.remove('show');
    generateButtonshort.removeAttribute("disabled");
    outputshort.style.display = 'block';
    abfrage.removeAttribute('disabled');
    saveButtonshort.removeAttribute('disabled');
    copyButtonshort.removeAttribute('disabled');
    longer.removeAttribute('disabled');
    longButton.removeAttribute("disabled");
    shortButton.removeAttribute("disabled");
    abfrage.style.display = '';
    saveButtonshort.style.display = '';
    copyButtonshort.style.display = '';
    longer.style.display = '';
    shortButton.style.display = '';
    longButton.style.display = '';
});

//shorterbuttons
let buttoshort = document.querySelector("#save-short-btn");
// eventListener "click" on button
buttoshort.addEventListener("click", () => {
    let valueinput = outputshort.innerHTML
    let blobdtMIME =
        new Blob([valueinput], { type: "text/plain" })
    let url = URL.createObjectURL(blobdtMIME);
    let anele = document.createElement("a");
    anele.setAttribute("download", "Medical_Summary");
    anele.href = url;
    anele.click();
    console.log(blobdtMIME);
})

let buttoshort2 = document.querySelector("#copy-short-btn");
// eventListener "click" on button
buttoshort2.addEventListener("click", () => {
    var copyTextshort = outputshort.innerHTML;
    navigator.clipboard.writeText(copyTextshort);
    document.getElementById("copied-message").innerText = "Copied";
})

const copybtnshort = document.getElementById('copy-short-btn');
  // define the function to change the HTML content
  function changeContentshort() {
    copybtnshort.innerText = 'Copied';
  }
  // add event listener to the button
  copybtnshort.addEventListener('click', changeContentshort);
  copybtnshort.addEventListener('click', changebacklong);
  copybtnshort.addEventListener('click', changeback);

  function changeback() {
    copybtn.innerText = 'Click here to copy';
  }
  function changebacklong() {
    copybtnlong.innerText = 'Click here to copy';
  }
  function changebackshort() {
    copybtnshort.innerText = 'Click here to copy';
  }
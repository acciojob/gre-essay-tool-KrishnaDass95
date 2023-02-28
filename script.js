// lets get both the text field and the output
let inputField = document.getElementById('evaluatedText');
const outputH3 = document.getElementById('wordCount');


function countWords(e){
	let sentence = e.target.value;
	let count = sentence.match(/\S+/gi).length;
	outputH3.textContent = count;
}

inputField.addEventListener('input', countWords)

// lets get both the text field and the output
let inputField = document.getElementById('evaluatedText');
const outputH3 = document.getElementById('wordCount');


function countWords(e){
	let sentence = e.target.value;
	let words = sentence.split(' ');
	let n = words.length - 1;
	outputH3.textContent = n;
}

inputField.addEventListener('input', countWords)

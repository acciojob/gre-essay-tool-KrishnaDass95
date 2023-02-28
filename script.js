// lets get both the text field and the output
let inputField = document.getElementById('evaluatedText').value;
const outputH3 = document.getElementById('wordCount');


function countWords(e){
	alert(e.target.value);
	// string s = inputField.split(' ');
	// return s.length;
}

inputField.addEventListener('input', countWords)

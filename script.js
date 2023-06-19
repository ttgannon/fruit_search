const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
let list = document.querySelector('ul');

//function to search through array of fruit based on what is typed into the search box
function search(str) {
	let results = [];
	if (str.target.value === '') {
		let display = showSuggestions(results);
		return display;
	}
	results = fruit.filter(type => (type.toLowerCase().includes(str.target.value)))
	let inputVal = str.target.value;
	showSuggestions(results, inputVal);
}


//function to show suggestions based on what is typed into the box
function showSuggestions(results, inputVal) {
	list.innerHTML = '';
	for (let fruit of results) {
		let newListItem = document.createElement("li");
		newListItem.innerText = fruit;
		let index = newListItem.innerText.toLowerCase().indexOf(inputVal.toLowerCase());
    	if (index !== -1) {
			let matchingText = newListItem.innerText.substring(index, index + inputVal.length);
			let boldText = document.createElement("b");
			boldText.textContent = matchingText;
			newListItem.innerHTML = newListItem.innerText.replace(matchingText, boldText.outerHTML);
    }
    list.append(newListItem);	
	}	
}

function useSuggestion(e) {
	let suggestion = e.target.innerText;
	input.value = suggestion;
	results = [];
	showSuggestions(results);
}

input.addEventListener('keyup', search);
suggestions.addEventListener('click', useSuggestion);




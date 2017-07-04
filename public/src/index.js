import _ from 'lodash';

function component() {
	let element = document.createElement('div');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack', 'from the src folder'], ' ');
	return element;
}	

document.body.appendChild(component());
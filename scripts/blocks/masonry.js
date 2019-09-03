import Colcade from "colcade";

const block = 'b-masonry';

export class Masonry {
	constructor(element) {
		if (element instanceof Element) {
			this.init();
		} else {
			return null;
		}

		let result = null;

		if (typeof element === 'string') {
			result = [...document.querySelectorAll(element)];
		}

		if (Array.isArray(element)) {

		}
		const grid = document.querySelector('.grid');
		const colc = new Colcade( grid, {
			columns: '.grid-col',
			items: '.grid-item'
		});
	}

	init() {

	}
}

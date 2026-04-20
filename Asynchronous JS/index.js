class Rectangle {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	area() {
		const area = this.width * this.height;
		return area;
	}
	paint() {
		console.log(`Painting with ${this.color}`);
	}
}

const rect = new Rectangle(2, 3, "red");
const ans = rect.area();
rect.paint();
console.log(ans);

const now = new Date();
console.log(now.getDate());

const map = new Map();
map.set("Name", "Aniket");
map.set("Age", "20");

console.log(map.get("Name"));

function callback() {
	console.log("Some time has passed");
}

setTimeout(callback, 3000);

// ********************************** Promise *********************************//

function random(resolve) {
	setTimeout(resolve, 3000);
}

let p = new Promise(random);

function callback() {
	console.log("Promise Succeded");
}

p.then(callback);

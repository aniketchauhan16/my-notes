const { log } = require("console");
const fs = require("fs");

function readthefile(sendtheFileValueHere) {
	fs.readFile("a.txt", "utf-8", function (err, data) {
		sendtheFileValueHere(data);
	});
}

function readFile(fileName) {
	return new Promise(readthefile);
}

function callback(contents) {
	console.log(contents);
}

const p = readFile();
p.then(callback);

//****************************************** Promise Class *****************************************//

class Promise2 {
	constructor(fn) {
		function afterDone() {
			this.resolve();
		}
		fn(afterDone);
	}
	then(callback) {
		this.resolve = callback;
	}
}
function readthefile(resolve) {
	setTimeout(function () {
		console.log("Callback Based setTimeout Completed");
		resolve();
	}, 3000);
}
//********************************SETTIMEOUT PROMISIFED*********************************************//

function setTimeoutPromisified(time) {
	return new Promise(function (resolve) {
		setTimeout(resolve, time);
	});
}

function callback() {
	console.log("Time Has Passed..");
}

const x = setTimeoutPromisified(5000);
x.then(callback);

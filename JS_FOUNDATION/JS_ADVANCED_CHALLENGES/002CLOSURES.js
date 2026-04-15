//task 1
function createCounter() {
	let count = 0;
	return function () {
		return ++count;
	};
}

const Counter = createCounter();

console.log(Counter());
console.log(Counter());
console.log(Counter());

// task 2

function rateLimiter(fn,limit) {
    return 
}
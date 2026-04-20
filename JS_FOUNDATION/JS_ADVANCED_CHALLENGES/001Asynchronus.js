// task 1

function simulateAsyncTask() {
	console.log("Task Started");

	setTimeout(() => {
		console.log("Task Finished");
	}, 2000);
}

// simulateAsyncTask();

//task 2

function simulateMultipleTasks() {
	setTimeout(() => {
		console.log("TASK 1 FINISHED");
	}, 1000);

	setTimeout(() => {
		console.log("TASK 2 finsihed");
	}, 2000);

	setTimeout(() => {
		console.log("TASK 3 FINISHED");
	}, 3000);
}

// simulateMultipleTasks();

// task 3

function fetchDataWithCallback(callback) {
	setTimeout(() => {
		const data = "Fetched data";
		callback(data);
	}, 2000);
}
fetchDataWithCallback((receivedData) => {
	console.log("Data received:", receivedData);
});

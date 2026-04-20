function fetchdata() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = true;
			if (success) {
				resolve("Data Fetched Successfully");
			} else {
				reject("Failed Fetching Data");
			}
		}, 3000);
	});
}

fetchdata()
	.then((data) => {
		console.log(data);
		return data.toLowerCase();
	})
	.then((value) => {
		console.log(value);
	})
	.catch((error) => console.log(error));

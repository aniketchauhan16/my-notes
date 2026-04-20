function fetchuserData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({ name: "Anike", url: "https://anike.com" });
		}, 3000);
	});
}
async function getuserData() {
	try {
		console.log("Fetching User Data...");
		const userdata = await fetchuserData();
		console.log("Data Fetched Succesfully");

		console.log("UserData :", userdata);
	} catch (error) {
		"ERROR Fetching data : ", error;
	}
}
getuserData();

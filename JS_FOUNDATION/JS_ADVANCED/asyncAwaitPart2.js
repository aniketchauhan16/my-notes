function fetchPostData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("post Data Fetched...");
		}, 3000);
	});
}

function fetchcommentdata() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Comment Data Fetched...");
		}, 2000);
	});
}

async function getBlogData() {
	try {
		console.log("Fetching blog data");
		const [postdata, commentdata] = await Promise.all([
			fetchPostData(),
			fetchcommentdata(),
		]);
		console.log(postdata);
		console.log(commentdata);
		console.log("Fectching COmpleted");
	} catch (error) {
		console.error("Error,fetching blog data", error);
	}
}

getBlogData();

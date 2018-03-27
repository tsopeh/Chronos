console.log("Content radi");
console.log("Content radi");
console.log("Content radi");
console.log("Content radi");
console.log("Content radi");

// let mediaElements = fetchAllMediaContent();

// console.log(mediaElements);

((mediaElements) => {
	let timestamp = new URL(this.location.href).searchParams.get("chronosTimestamp");
	if (timestamp != null) {
		mediaElements.forEach((element) => element.currentTime = parseInt(timestamp));
		//console.log(timestamp,element.currentTime);
	}
})(fetchAllMediaContent())

function fetchAllMediaContent() {
	let tmpMediaElements = [];
	tmpMediaElements.push(document.querySelectorAll("audio"));
	tmpMediaElements.push(document.querySelectorAll("video"));
	tmpMediaElements = tmpMediaElements.filter((elementType) => elementType.length > 0).reduce((acc, elementType) => {
		return acc.concat(...elementType);
	}, []);
	return tmpMediaElements;
}

// function recsan(){
// 	mediaElements = fetchAllMediaContent();
// 	console.log(mediaElements);
// }

function displayMsg(msg) {
	const flashMsg = document.createElement("div");
	document.body.appendChild(flashMsg);
	flashMsg.style.position = "fixed";
	// flashMsg.style.width = "50px";
	// flashMsg.style.height = "25px";
	flashMsg.style.top = "20px";
	flashMsg.style.fontWeight = "bolder";
	flashMsg.style.fontSize = "3vw";
	flashMsg.style.right = "20px";
	flashMsg.style.padding = "10px";
	flashMsg.style.backgroundColor = "rgba(0, 0, 0, 0.900)";
	flashMsg.style.zIndex = "100000000000000000"; //better solution
	flashMsg.style.color = "teal";
	flashMsg.innerHTML = `${msg}`;
	setTimeout(() => document.body.removeChild(flashMsg), 1000);
}


function incrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate += 0.25);
	displayMsg(`>> ${mediaElements[0].playbackRate || "1"}`);
}

function decrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate -= 0.25);
	displayMsg(`<< ${mediaElements[0].playbackRate || "1"}`);
}

function resetPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate = 1);
	displayMsg(`Reset to: 1`);
}

function setMarker(mediaElements) {
	fetch("http://localhost:3000/markers", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({
				"url": `${this.location.href.replace("chronosTimestamp=","")}`,
				"currentPlayTime": `${Math.floor(mediaElements[0].currentTime)}`,
				"dateCreated": `${(new Date().toLocaleDateString('en-GB'))}`,
				"note": `${document.title}`
			})
		})
		.then((resolve) => displayMsg(`Saved`))
		.catch((err) => {
			console.log(err)
		});
}



chrome.runtime.onMessage.addListener(function (msg) {
	this[msg.cmd](fetchAllMediaContent().reverse());
	console.log(msg.cmd);
});
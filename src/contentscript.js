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

function incrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate += 0.25);
}

function decrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate -= 0.25);
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
	}).catch((err) => {
		console.log(err)
	});
}

chrome.runtime.onMessage.addListener(function (msg) {
	this[msg.cmd](fetchAllMediaContent().reverse());
	console.log(msg.cmd);
});


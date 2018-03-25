console.log("Content radi");

function scanForMediaContent() {
	tmpMediaElements = [];
	tmpMediaElements.push(document.querySelectorAll("audio"));
	tmpMediaElements.push(document.querySelectorAll("video"));

	tmpMediaElements = tmpMediaElements.filter((elementType) => elementType.length > 0).reduce((acc, elementType) => {
		return acc.concat(...elementType);
	}, []);
	return tmpMediaElements;
}

let mediaElements = scanForMediaContent();

console.log(mediaElements);

function incrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate += 0.25);
}

function decrementPlaybackRate(mediaElements) {
	mediaElements.forEach((element) => element.playbackRate -= 0.25);
}

function setMarker(mediaElements) {
	console.log("setMarker");
	fetch("http://localhost:3000/markers", {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({
			"url": `${this.location.href.replace("chronosTimestamp=","")}`,
			"currentPlayTime": `${Math.floor(mediaElements[0].currentTime)}`,
			"dateCreated": `${(new Date())}`,
			"note": `${document.title}`
		})
	}).catch((err)=>{console.log(err)});
}

chrome.runtime.onMessage.addListener(function (msg) {
	this[msg.cmd](mediaElements);
});



// this.addEventListener('readystatechange', function() {
// 	console.log("radiiiiiiiii");
// }, false);

let timestamp = new URL(this.location.href).searchParams.get("chronosTimestamp");
if (timestamp != null) {
	mediaElements.forEach((element) => element.currentTime = parseInt(timestamp));
}
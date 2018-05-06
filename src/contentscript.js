function fetchAllMediaContent() {
	let tmpMediaElements = [];
	tmpMediaElements.push(document.querySelectorAll("audio"));
	tmpMediaElements.push(document.querySelectorAll("video"));
	tmpMediaElements = [...tmpMediaElements[0], ...tmpMediaElements[1]];
	console.log(`Chronos found: ${tmpMediaElements}`);
	return tmpMediaElements;
}

function displayMsg(msg) {
	const flashMsg = document.createElement("div");
	document.body.appendChild(flashMsg);
	flashMsg.style.position = "fixed";
	flashMsg.style.top = "2vw";
	flashMsg.style.fontWeight = "bolder";
	flashMsg.style.fontSize = "2vw";
	flashMsg.style.right = "2vw";
	flashMsg.style.padding = "1.5vw";
	flashMsg.style.backgroundColor = "rgba(0, 0, 0, 0.900)";
	flashMsg.style.zIndex = "99999999999999999999999999999"; //better solution
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
	if (mediaElements[0] != null && mediaElements[0] != undefined) {
		displayMsg(`Reset to: 1`);
	}
}

function forward10sec(mediaElements) {
	mediaElements.forEach((element) => {
		element.currentTime += 10
	});
	displayMsg(`+10`);
}

function backward10sec(mediaElements) {
	mediaElements.forEach((element) => {
		element.currentTime -= 10
	});
	displayMsg(`-10`);
}

// chrome.runtime.onMessage.addListener(function (msg) {
// 	this[msg.cmd](fetchAllMediaContent().reverse());
// 	console.log(msg.cmd);
// });

window.addEventListener("keyup", e => {
	if (e.altKey) {
		switch (e.key) {
			case "g":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					decrementPlaybackRate(mediaElements);
					break;
				}
			case "k":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					setMarker(mediaElements);
					break;
				}
			case "h":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					incrementPlaybackRate(mediaElements);
					break;
				}
			case "j":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					backward10sec(mediaElements);
					break;
				}
			case "l":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					forward10sec(mediaElements);
					break;
				}
			case "r":
				{
					const mediaElements = fetchAllMediaContent().reverse();
					resetPlaybackRate(mediaElements);
					break;
				}

		}
	}
})
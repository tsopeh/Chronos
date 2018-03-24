//import { Timestamp } from "./timestamp.js";

console.log("Content radi");

let mediaElements = [];
mediaElements.push(document.querySelectorAll("audio"));
mediaElements.push(document.querySelectorAll("video"));

mediaElements = mediaElements.filter((elementType) => elementType.length > 0).reduce((acc, elementType) => {
	return acc.concat(...elementType);
}, []);

function incrementPlaybackRate() {
	mediaElements.forEach((element) => element.playbackRate += 0.25);
}

function decrementPlaybackRate() {
	mediaElements.forEach((element) => element.playbackRate -= 0.25);
}

chrome.runtime.onMessage.addListener(function (msg) {
	this[msg.cmd]();
});
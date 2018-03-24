//import { Timestamp } from "./timestamp.js";
console.log("Content radi");

let test = new Timestamp("kek",1,2,"msg");
console.log(test);

let mediaElements = [];
mediaElements.push(document.querySelectorAll("audio"));
mediaElements.push(document.querySelectorAll("video"));


mediaElements = mediaElements.filter((elementType) => elementType.length > 0).reduce((acc, elementType) => {
        return acc.concat(...elementType);
}, []);

//mediaElements.forEach((element) => element.playbackRate += 2);

function incrementPlaybackRate() {
        mediaElements.forEach((element) => element.playbackRate += 0.25);
}

function setPlaybackRate(playbackRate) {
        mediaElements.forEach((element) => element.playbackRate = playbackRate);
}

chrome.runtime.onMessage.addListener(function(msg) {
        if (msg.cmd == "incrementPlaybackRate") {
                console.log("povećano");
                incrementPlaybackRate();
        }
});
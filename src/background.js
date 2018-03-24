//const browser = window.browser || window.chrome;

console.log("Background radi");


// chrome.chromeAction.onClicked.addListener((tab) => {
//         console.log("Clicked on: ",tab);
//         let msg = {
//                 txt: "hello",
//                 cmd: "incrementPlaybackRate"
//         }
//         chrome.tabs.sendMessage(tab.id, msg)
// });

chrome.commands.onCommand.addListener((command) => {
	//console.log('Command:', command);
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, (tabs) => {
		let msg = {
			cmd: command.toString()
		}
		chrome.tabs.sendMessage(tabs[0].id, msg)
	});
});



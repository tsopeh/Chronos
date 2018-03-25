console.log("Background radi");


chrome.commands.onCommand.addListener((command) => {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, (tabs) => {
		const msg = {
			cmd: command.toString()
		}
		console.log(command);
		chrome.tabs.sendMessage(tabs[0].id, msg)
	});
});

// chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
// 	chrome.tabs.executeScript(null, {
// 		file: "./src/contentscript.js"
// 	});
// 	console.log("Promena");
// });
console.log("Background radi");
let test2 = new Timestamp("kektus",4,5,"msg");
console.log(test2);

// chrome.browserAction.onClicked.addListener((tab) => {
//         console.log("Clicked on: ",tab);
//         let msg = {
//                 txt: "hello",
//                 cmd: "incrementPlaybackRate"
//         }
//         chrome.tabs.sendMessage(tab.id, msg)
// });

chrome.commands.onCommand.addListener((command,id) => {
        console.log('Command:', command,id);
        let msg = {
                txt: "Increment playback rate.",
                cmd: "incrementPlaybackRate"
        }
        chrome.tabs.sendMessage(msg)
});
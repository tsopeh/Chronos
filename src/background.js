console.log("Background radi");

chrome.browserAction.onClicked.addListener((tab)=>{console.log(tab,this)});
chrome.browserAction.onClicked.addListener(function(tab){console.log(tab,this)});
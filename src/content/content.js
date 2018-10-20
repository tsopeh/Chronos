const N_A_MSG = "N/A";
const PLAY_SYMBOL = "⏯";
const PLAYBACK_RATE_INCREMENT = 0.25;
const DEFAULT_PLAYBACK_VALUE = 1;
const PLAYBACK_SEEK_INCREMENT = 10;
const TEXTBOX_TIMEOUT = 1000;
const DECREMENT_PLAYBACK_RATE_KEY = "KeyG";
const INCREMENT_PLAYBACK_RATE_KEY = "KeyH";
const SEEK_BACKWARD_KEY = "KeyJ";
const TOGGLE_PLAY_PAUSE_KEY = "KeyK";
const SEEK_FORWARD_KEY = "KeyL";
const RESET_PLAYBACK_RATE_KEY = "KeyR";

initEventListeners(document);

function initEventListeners(doc) {
  const innerDocs = [];
  switch (doc.readyState) {
    case "complete":
      innerDocs.push(...getAllDocuments(doc));
      innerDocs.forEach(innerDoc => {
        initEventListeners(innerDoc);
      });
      bindEventListenerToDocument(doc);
      break;
    default:
      doc.addEventListener("readystatechange", () => {
        if (doc.readyState == "complete") {
          innerDocs.push(...getAllDocuments(doc));
          innerDocs.forEach(innerDoc => {
            initEventListeners(innerDoc);
          });
          bindEventListenerToDocument(doc);
        }
      });
      break;
  }
}

function getAllDocuments(doc) {
  const innerDocs = [];
  const iframes = [...doc.getElementsByTagName("iframe")];
  console.log("Found iframes: ", iframes);
  const contentDocuments = extractContentDocumentsFromIframes(iframes);
  console.log("Extracted documents: ", contentDocuments);
  innerDocs.push(...contentDocuments);
  return innerDocs;
}

function extractContentDocumentsFromIframes(iframes) {
  const contentDocuments = [];
  iframes.forEach(iframe => {
    try {
      if (!!iframe.contentDocument) {
        contentDocuments.push(iframe.contentDocument);
      }
    } catch {
      console.log("Error accessing iframe's contentDocument.");
    }
  });
  return contentDocuments;
}

function fetchAllMediaContentFromDocument(doc) {
  const mediaElements = [];
  mediaElements.push(
    ...doc.getElementsByTagName("video"),
    ...doc.getElementsByTagName("audio")
  );
  return mediaElements;
}

function executeCommandOnDocumentElements(doc, command) {
  const mediaElements = fetchAllMediaContentFromDocument(doc).reverse();
  command(mediaElements);
}

function incrementPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate += PLAYBACK_RATE_INCREMENT)
  );
  displayMsgBox(
    `>> ${(mediaElements[0] && mediaElements[0].playbackRate) || N_A_MSG}`
  );
}

function decrementPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate -= PLAYBACK_RATE_INCREMENT)
  );
  displayMsgBox(
    `<< ${(mediaElements[0] && mediaElements[0].playbackRate) || N_A_MSG}`
  );
}

function resetPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate = DEFAULT_PLAYBACK_VALUE)
  );
  displayMsgBox(`Reset to: ${DEFAULT_PLAYBACK_VALUE}`);
}

function seekForward(mediaElements) {
  mediaElements.forEach(element => {
    element.currentTime += PLAYBACK_SEEK_INCREMENT;
  });
  displayMsgBox(`+${PLAYBACK_SEEK_INCREMENT}`);
}

function seekBackward(mediaElements) {
  mediaElements.forEach(element => {
    element.currentTime -= PLAYBACK_SEEK_INCREMENT;
  });
  displayMsgBox(`-${PLAYBACK_SEEK_INCREMENT}`);
}

function togglePlayPause(mediaElements) {
  mediaElements.forEach(element => {
    element.paused ? element.play() : element.pause();
  });
  displayMsgBox(`${PLAY_SYMBOL}`);
}

function displayMsgBox(msg) {
  const msgBox = createMessageBox(msg);
  document.body.appendChild(msgBox);
  removeMsgBox(msgBox, TEXTBOX_TIMEOUT);
}

function createMessageBox(msgText) {
  const msgBox = document.createElement("div");
  msgBox.style.position = "fixed";
  msgBox.style.top = "2vw";
  msgBox.style.fontWeight = "bolder";
  msgBox.style.fontSize = "2vw";
  msgBox.style.right = "2vw";
  msgBox.style.padding = "0.5vw";
  msgBox.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  msgBox.style.zIndex = "99999999999999999999999999999"; // TODO: Better solution
  msgBox.style.color = "teal";
  msgBox.innerHTML = `${msgText}`;
  return msgBox;
}

function removeMsgBox(msgBox, timeout) {
  setTimeout(() => document.body.removeChild(msgBox), timeout);
}

function bindEventListenerToDocument(doc) {
  doc.addEventListener("keydown", event => {
    const isInputElementFocused = doc.activeElement instanceof HTMLInputElement;
    if (event.altKey && !isInputElementFocused) {
      switch (event.code) {
        case DECREMENT_PLAYBACK_RATE_KEY: {
          executeCommandOnDocumentElements(doc, decrementPlaybackRate);
          break;
        }
        case INCREMENT_PLAYBACK_RATE_KEY: {
          executeCommandOnDocumentElements(doc, incrementPlaybackRate);
          break;
        }
        case TOGGLE_PLAY_PAUSE_KEY: {
          executeCommandOnDocumentElements(doc, togglePlayPause);
          break;
        }
        case SEEK_BACKWARD_KEY: {
          executeCommandOnDocumentElements(doc, seekBackward);
          break;
        }
        case SEEK_FORWARD_KEY: {
          executeCommandOnDocumentElements(doc, seekForward);
          break;
        }
        case RESET_PLAYBACK_RATE_KEY: {
          executeCommandOnDocumentElements(doc, resetPlaybackRate);
          break;
        }
      }
    }
  });
}

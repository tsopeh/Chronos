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

bindEventListenerToDocument(document);

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

function bindEventListenerToDocument(doc) {
  doc.addEventListener("keydown", event => {
    if (event.altKey) {
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

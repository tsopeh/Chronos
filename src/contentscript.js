const N_A_MSG = "N/A";
const PLAY_SYMBOL = "⏯";
const PLAYBACK_RATE_INCREMENT = 0.25;
const DEFAULT_PLAYBACK_VALUE = 1;
const PLAYBACK_SEEK_INCREMENT = 10;
const TEXTBOX_TIMEOUT = 1000;
const DECREMENT_PLAYBACK_RATE_KEY = "BracketLeft";
const INCREMENT_PLAYBACK_RATE_KEY = "BracketRight";
const SEEK_BACKWARD_KEY = "KeyU";
const TOGGLE_PLAY_PAUSE_KEY = "KeyI";
const SEEK_FORWARD_KEY = "KeyO";
const RESET_PLAYBACK_RATE_KEY = "KeyR";

function fetchAllMediaContent() {
  const mediaElements = [];
  mediaElements.push(...document.body.querySelectorAll("video"), ...document.body.querySelectorAll("audio"));
  console.log(`Chronos found: `, mediaElements);
  return mediaElements;
}

function displayMsgBox(msg) {
  const msgBox = createMessageBox(msg);
  document.body.appendChild(msgBox);
  removeMsgBox(msgBox, TEXTBOX_TIMEOUT);
}

function removeMsgBox(msgBox, timeout) {
  setTimeout(() => document.body.removeChild(msgBox), timeout);
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

function incrementPlaybackRate(mediaElements) {
  mediaElements.forEach(element => (element.playbackRate += PLAYBACK_RATE_INCREMENT));
  displayMsgBox(`>> ${mediaElements[0].playbackRate || N_A_MSG}`);
}

function decrementPlaybackRate(mediaElements) {
  mediaElements.forEach(element => (element.playbackRate -= PLAYBACK_RATE_INCREMENT));
  displayMsgBox(`<< ${mediaElements[0].playbackRate || N_A_MSG}`);
}

function resetPlaybackRate(mediaElements) {
  mediaElements.forEach(element => (element.playbackRate = DEFAULT_PLAYBACK_VALUE));
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

function executeCommandOnAllMediaElements(command){
  const mediaElements = fetchAllMediaContent().reverse();
  command(mediaElements);
}

document.addEventListener("keydown", event => {
  const isInputElementFocused = document.activeElement instanceof HTMLInputElement;
  if (!isInputElementFocused) {
    switch (event.code) {
      case DECREMENT_PLAYBACK_RATE_KEY: {
        executeCommandOnAllMediaElements(decrementPlaybackRate)
        break;
      }
      case INCREMENT_PLAYBACK_RATE_KEY: {
        executeCommandOnAllMediaElements(incrementPlaybackRate)
        break;
      }
      case TOGGLE_PLAY_PAUSE_KEY: {
        executeCommandOnAllMediaElements(togglePlayPause)
        break;
      }
      case SEEK_BACKWARD_KEY: {
        executeCommandOnAllMediaElements(seekBackward)
        break;
      }
      case SEEK_FORWARD_KEY: {
        executeCommandOnAllMediaElements(seekForward)
        break;
      }
      case RESET_PLAYBACK_RATE_KEY: {
        executeCommandOnAllMediaElements(resetPlaybackRate)
        break;
      }
    }
  }
});

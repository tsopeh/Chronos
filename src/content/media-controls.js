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

function incrementPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate += PLAYBACK_RATE_INCREMENT)
  );
  const msg = `>> ${(mediaElements[0] && mediaElements[0].playbackRate) ||
    N_A_MSG}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

function decrementPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate -= PLAYBACK_RATE_INCREMENT)
  );
  const msg = `<< ${(mediaElements[0] && mediaElements[0].playbackRate) ||
    N_A_MSG}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

function resetPlaybackRate(mediaElements) {
  mediaElements.forEach(
    element => (element.playbackRate = DEFAULT_PLAYBACK_VALUE)
  );
  const msg = `Reset to: ${DEFAULT_PLAYBACK_VALUE}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

function seekForward(mediaElements) {
  mediaElements.forEach(element => {
    element.currentTime += PLAYBACK_SEEK_INCREMENT;
  });
  const msg = `+${PLAYBACK_SEEK_INCREMENT}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

function seekBackward(mediaElements) {
  mediaElements.forEach(element => {
    element.currentTime -= PLAYBACK_SEEK_INCREMENT;
  });
  const msg = `-${PLAYBACK_SEEK_INCREMENT}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

function togglePlayPause(mediaElements) {
  mediaElements.forEach(element => {
    element.paused ? element.play() : element.pause();
  });
  const msg = `${PLAY_SYMBOL}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

import { N_A_MSG, NOTIFICATION_TIMEOUT, PLAY_SYMBOL, PLAYBACK_RATE_INCREMENT, DEFAULT_PLAYBACK_VALUE, PLAYBACK_SEEK_INCREMENT } from "./content";
import { displayNotification } from "./notification";

export const incrementPlaybackRate=(mediaElements) =>{
  mediaElements.forEach(
    element => (element.playbackRate += PLAYBACK_RATE_INCREMENT)
  );
  const msg = `>> ${(mediaElements[0] && mediaElements[0].playbackRate) ||
    N_A_MSG}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

export const decrementPlaybackRate=(mediaElements) =>{
  mediaElements.forEach(
    element => (element.playbackRate -= PLAYBACK_RATE_INCREMENT)
  );
  const msg = `<< ${(mediaElements[0] && mediaElements[0].playbackRate) ||
    N_A_MSG}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

export const resetPlaybackRate=(mediaElements) =>{
  mediaElements.forEach(
    element => (element.playbackRate = DEFAULT_PLAYBACK_VALUE)
  );
  const msg = `Reset to: ${DEFAULT_PLAYBACK_VALUE}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

export const seekForward=(mediaElements) =>{
  mediaElements.forEach(element => {
    element.currentTime += PLAYBACK_SEEK_INCREMENT;
  });
  const msg = `+${PLAYBACK_SEEK_INCREMENT}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

export const seekBackward=(mediaElements) =>{
  mediaElements.forEach(element => {
    element.currentTime -= PLAYBACK_SEEK_INCREMENT;
  });
  const msg = `-${PLAYBACK_SEEK_INCREMENT}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

export const togglePlayPause=(mediaElements) =>{
  mediaElements.forEach(element => {
    element.paused ? element.play() : element.pause();
  });
  const msg = `${PLAY_SYMBOL}`;
  displayNotification(msg, NOTIFICATION_TIMEOUT);
}

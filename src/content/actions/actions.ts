import { ChronosAction } from "./chronos-action.model";
import { MediaElement } from "../media-elemets/media-element";

export const N_A_MSG = "N/A";
export const PLAY_SYMBOL = "⏯";
export const PLAYBACK_RATE_INCREMENT = 0.25;
export const DEFAULT_PLAYBACK_VALUE = 1;
export const PLAYBACK_SEEK_INCREMENT = 5;
export const NOTIFICATION_TIMEOUT = 500;

export const incrementPlaybackRate: ChronosAction = (mediaElements: MediaElement[]) => {
    const msg = `>> ${(mediaElements[0] && mediaElements[0].playbackRate) || N_A_MSG}`;
    mediaElements.forEach((element) => {
        element.playbackRate += PLAYBACK_RATE_INCREMENT;
    });
};

export const decrementPlaybackRate: ChronosAction = (mediaElements: MediaElement[]) => {
    const msg = `<< ${(mediaElements[0] && mediaElements[0].playbackRate) || N_A_MSG}`;
    mediaElements.forEach((element) => {
        element.playbackRate -= PLAYBACK_RATE_INCREMENT;
    });
};

export const resetPlaybackRate: ChronosAction = (mediaElements: MediaElement[]) => {
    const msg = `Reset to: ${DEFAULT_PLAYBACK_VALUE}`;
    mediaElements.forEach((element) => {
        element.playbackRate = DEFAULT_PLAYBACK_VALUE;
    });
};

export const seekForward: ChronosAction = (mediaElements: MediaElement[]) => {
    mediaElements.forEach((element) => {
        element.currentTime += PLAYBACK_SEEK_INCREMENT;
        const msg = `+${PLAYBACK_SEEK_INCREMENT}`;
    });
};

export const seekBackward: ChronosAction = (mediaElements: MediaElement[]) => {
    mediaElements.forEach((element) => {
        element.currentTime -= PLAYBACK_SEEK_INCREMENT;
        const msg = `-${PLAYBACK_SEEK_INCREMENT}`;
    });
};

export const togglePlayPause: ChronosAction = (mediaElements: MediaElement[]) => {
    mediaElements.forEach((element) => {
        element.paused ? element.play() : element.pause();
        const msg = `${PLAY_SYMBOL}`;
    });
};

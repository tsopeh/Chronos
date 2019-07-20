import {
    DECREMENT_PLAYBACK_RATE_KEY,
    INCREMENT_PLAYBACK_RATE_KEY,
    TOGGLE_PLAY_PAUSE_KEY,
    SEEK_BACKWARD_KEY,
    SEEK_FORWARD_KEY,
    RESET_PLAYBACK_RATE_KEY
} from "../common/keyboard-shortcuts";
import {
    decrementPlaybackRate,
    incrementPlaybackRate,
    togglePlayPause,
    seekBackward,
    seekForward,
    resetPlaybackRate
} from "./media-controls";

export const N_A_MSG = "N/A";
export const PLAY_SYMBOL = "⏯";
export const PLAYBACK_RATE_INCREMENT = 0.25;
export const DEFAULT_PLAYBACK_VALUE = 1;
export const PLAYBACK_SEEK_INCREMENT = 10;
export const NOTIFICATION_TIMEOUT = 1000;

const fetchAllMediaContentFromDocument = doc => {
    const mediaElements = [];
    mediaElements.push(...doc.getElementsByTagName("video"), ...doc.getElementsByTagName("audio"));
    return mediaElements;
};

const executeCommandOnDocumentElements = (doc, command) => {
    const mediaElements = fetchAllMediaContentFromDocument(doc).reverse();
    command(mediaElements);
};

const bindEventListenerToDocument = doc => {
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
};

bindEventListenerToDocument(document);

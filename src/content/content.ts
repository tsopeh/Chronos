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

export type MediaElement = HTMLVideoElement | HTMLAudioElement;

const fetchAllMediaContentFromDocument = (doc: Document) => {
    const mediaElements: MediaElement[] = [];
    mediaElements.push(...doc.getElementsByTagName("video"), ...doc.getElementsByTagName("audio"));
    return mediaElements;
};

const executeActionOnDocumentElements = (doc: Document, action) => {
    const mediaElements = fetchAllMediaContentFromDocument(doc).reverse();
    action(mediaElements);
};

const bindEventListenerToDocument = (doc: Document) => {
    doc.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.altKey) {
            switch (event.code) {
                case DECREMENT_PLAYBACK_RATE_KEY: {
                    executeActionOnDocumentElements(doc, decrementPlaybackRate);
                    break;
                }
                case INCREMENT_PLAYBACK_RATE_KEY: {
                    executeActionOnDocumentElements(doc, incrementPlaybackRate);
                    break;
                }
                case TOGGLE_PLAY_PAUSE_KEY: {
                    executeActionOnDocumentElements(doc, togglePlayPause);
                    break;
                }
                case SEEK_BACKWARD_KEY: {
                    executeActionOnDocumentElements(doc, seekBackward);
                    break;
                }
                case SEEK_FORWARD_KEY: {
                    executeActionOnDocumentElements(doc, seekForward);
                    break;
                }
                case RESET_PLAYBACK_RATE_KEY: {
                    executeActionOnDocumentElements(doc, resetPlaybackRate);
                    break;
                }
            }
        }
    });
};

bindEventListenerToDocument(document);

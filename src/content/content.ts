import {
    DECREMENT_PLAYBACK_RATE_KEY,
    INCREMENT_PLAYBACK_RATE_KEY,
    RESET_PLAYBACK_RATE_KEY,
    SEEK_BACKWARD_KEY,
    SEEK_FORWARD_KEY,
    TOGGLE_PLAY_PAUSE_KEY,
    isActivationKeyPressed
} from "../common/keyboard-shortcuts";
import {
    decrementPlaybackRate,
    incrementPlaybackRate,
    resetPlaybackRate,
    seekBackward,
    seekForward,
    togglePlayPause
} from "./actions/actions";
import { ChronosAction } from "./actions/chronos-action.model";
import { MediaElement } from "./media-elemets/media-element.model";
import { fetchAllMediaContentFromDocument, isElementInView } from "./media-elemets/media-elements.util";
import { initMenu } from "./menu/menu";

const executeActionOnDocumentElements = (mediaElements: MediaElement[]) => (action: ChronosAction): void => action(mediaElements);

const bindEventListenerToDocument = (doc: Document) => {
    doc.addEventListener("keydown", (event: KeyboardEvent) => {
        const mediaElements: MediaElement[] = fetchAllMediaContentFromDocument(doc).filter(isElementInView);
        const executeAction = executeActionOnDocumentElements(mediaElements);
        const shouldExecuteAction = !(event.target as HTMLElement).tagName.toLocaleLowerCase().includes("input");
        if (isActivationKeyPressed(event) && shouldExecuteAction) {
            const key = keyCodeToKey(event.code);
            switch (key) {
                case DECREMENT_PLAYBACK_RATE_KEY: {
                    executeAction(decrementPlaybackRate);
                    break;
                }
                case INCREMENT_PLAYBACK_RATE_KEY: {
                    executeAction(incrementPlaybackRate);
                    break;
                }
                case TOGGLE_PLAY_PAUSE_KEY: {
                    executeAction(togglePlayPause);
                    break;
                }
                case SEEK_BACKWARD_KEY: {
                    executeAction(seekBackward);
                    break;
                }
                case SEEK_FORWARD_KEY: {
                    executeAction(seekForward);
                    break;
                }
                case RESET_PLAYBACK_RATE_KEY: {
                    executeAction(resetPlaybackRate);
                    break;
                }
            }
        }
    });
};

const keyCodeToKey = (code: string): string => code.replace(/Key/, "");

bindEventListenerToDocument(document);
const countTreshold = 2;
const timeoutInMs = 500;

initMenu(document)(countTreshold)(timeoutInMs)(() => {
    console.log("Double tapped Action key");
});



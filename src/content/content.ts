import { documentCreateElement } from "../common/ts-utils";
import { observeDomMutations } from "./dom-observers/new-media-element-observer";
import { getAllMediaElements, MediaElement } from "./media-elemets/media-element";
import { ChronosAction, ChronosActions } from "./actions/actions";

export const createElement = documentCreateElement(document);

const registerGlobalShortcuts = (doc: Document) => {
    const isActivationKeyPressed = (event: KeyboardEvent): boolean => event.altKey;
    const keyCodeToKey = (code: string): string => code.replace(/Key/, "");
    const executeActionOnElements = (mediaElements: MediaElement[]) => (action: ChronosAction) => {
        mediaElements.forEach(action);
    };

    const INCREASE_PLAYBACK_RATE_KEY = "Period";
    const DECREASE_PLAYBACK_RATE_KEY = "Comma";

    doc.addEventListener("keydown", (event: KeyboardEvent) => {
        const mediaElements: MediaElement[] = getAllMediaElements(doc.body);
        const executeAction = executeActionOnElements(mediaElements);
        const shouldExecuteAction = !(event.target as HTMLElement).tagName
            .toLocaleLowerCase()
            .includes("input");
        if (isActivationKeyPressed(event) && shouldExecuteAction) {
            const key = keyCodeToKey(event.code);
            switch (key) {
                case INCREASE_PLAYBACK_RATE_KEY: {
                    executeAction(ChronosActions.increasePlaybackRate);
                    break;
                }
                case DECREASE_PLAYBACK_RATE_KEY: {
                    executeAction(ChronosActions.decreasePlaybackRate);
                    break;
                }
                default: {
                    break;
                }
            }
        }
    });
};

const initChronos = () => {
    const rootElement: HTMLElement = document.body;
    observeDomMutations(rootElement);
    registerGlobalShortcuts(document);
};

initChronos();

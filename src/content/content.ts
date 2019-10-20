import { documentCreateElement } from "../common/ts-utils";
import { initControlStrip, removeControlStrip } from "./control-strip/control-strip";
import {
    MediaElement,
    MediaElementNodeName,
    getAllMediaElementsFromDocument,
    getMediaElementsFromNodeList
} from "./media-elemets/media-element";

export const createElement = documentCreateElement(document);

const initChronos = (mediaElement: MediaElement) => {
    initControlStrip(mediaElement);
};

const onDomMutation: MutationCallback = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
        if (mutation.type === "childList") {
            const addedMediaElements = getMediaElementsFromNodeList(mutation.addedNodes);
            addedMediaElements.forEach(initChronos);

            const removedMediaElements = getMediaElementsFromNodeList(mutation.removedNodes);
            removedMediaElements.map((element) => element.dataset.chronosId).forEach(removeControlStrip);
        }
    });
};

const alreadyLoadedMediaElements = getAllMediaElementsFromDocument(document);
alreadyLoadedMediaElements.forEach(initChronos);

const domMutationObserver = new MutationObserver(onDomMutation);
const rootElement = document.body;
domMutationObserver.observe(rootElement, { childList: true, subtree: true });

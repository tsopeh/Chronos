import { getMediaElementsFromNodeList } from "./media-elemets/media-element";
import { removeControlStrip, createControlStrip } from "./control-strip/control-strip";

// DOM Mutation Observer

const onDomMutation: MutationCallback = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
        if (mutation.type === "childList") {
            const addedMediaElements = getMediaElementsFromNodeList(mutation.addedNodes);
            addedMediaElements.forEach(createControlStrip);

            const removedMediaElements = getMediaElementsFromNodeList(mutation.removedNodes);
            removedMediaElements.map((element) => element.dataset.chronosId).forEach(removeControlStrip);
        }
    });
};

export const observeDom = (rootElement: HTMLElement) => {
    const domMutationObserver = new MutationObserver(onDomMutation);
    domMutationObserver.observe(rootElement, { childList: true, subtree: true });
};

// Interserction Observer


import { removeControlStrip } from "../control-strip/control-strip";
import { getAllMediaElements, getMediaElementsFromNodes, MediaElement } from "../media-elemets/media-element";
import { getMediaElementInViewObserver } from "./in-view-observer";
import { observeMediaElementMutation } from "./media-element-mutation-observer";

const onDomMutation = (elementInViewObserver: IntersectionObserver): MutationCallback => (mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
        if (mutation.type === "childList") {
            const addedMediaElements: MediaElement[] = getMediaElementsFromNodes([...mutation.addedNodes]);
            addedMediaElements.forEach((mediaElement: MediaElement) => {
                observeMediaElementMutation(mediaElement);
                elementInViewObserver.observe(mediaElement);
            });

            const removedMediaElements: MediaElement[] = getMediaElementsFromNodes([...mutation.removedNodes]);
            removedMediaElements.map((element) => element.dataset.chronosId).forEach(removeControlStrip);
            removedMediaElements.forEach((element: MediaElement) => {
                elementInViewObserver.unobserve(element);
            });
        }
    });
};

const processAlereadyExistingMediaElements = (elementInViewObserver: IntersectionObserver) => (rootElement: HTMLElement) => {
    const existingMediaElements = getAllMediaElements(rootElement);
    existingMediaElements.forEach((mediaElement: MediaElement) => {
        observeMediaElementMutation(mediaElement);
        elementInViewObserver.observe(mediaElement);
    });
};

export const observeDom = (rootElement: HTMLElement) => {
    const mediaElementInViewObserver = getMediaElementInViewObserver(rootElement);
    processAlereadyExistingMediaElements(mediaElementInViewObserver)(rootElement);
    const domMutationObserver = new MutationObserver(onDomMutation(mediaElementInViewObserver));
    domMutationObserver.observe(rootElement, { childList: true, subtree: true });
};

import { removeControlStrip } from "../control-strip/control-strip";
import { getAllMediaElements, getMediaElementsFromNodes, MediaElement } from "../media-elemets/media-element";
import { getObservrOfMediaElementInView as getObserverOfMediaElementsInView } from "./in-view-observer";
import { observeMediaElementStyleChange } from "./media-element-style-change-observer";

const onDomMutation = (observerOfElementsInView: IntersectionObserver): MutationCallback => (mutations: MutationRecord[]) => {
    mutations.forEach((mutation: MutationRecord) => {
        if (mutation.type === "childList") {
            const addedMediaElements: MediaElement[] = getMediaElementsFromNodes([...mutation.addedNodes]);
            addedMediaElements.forEach((mediaElement: MediaElement) => {
                observeMediaElementStyleChange(mediaElement);
                observerOfElementsInView.observe(mediaElement);
            });

            const removedMediaElements: MediaElement[] = getMediaElementsFromNodes([...mutation.removedNodes]);
            removedMediaElements.map((element) => element.dataset.chronosId).forEach(removeControlStrip);
            removedMediaElements.forEach((element: MediaElement) => {
                observerOfElementsInView.unobserve(element);
            });
        }
    });
};

const processAlereadyExistingMediaElements = (elementInViewObserver: IntersectionObserver) => (rootElement: HTMLElement) => {
    const existingMediaElements = getAllMediaElements(rootElement);
    existingMediaElements.forEach((mediaElement: MediaElement) => {
        observeMediaElementStyleChange(mediaElement);
        elementInViewObserver.observe(mediaElement);
    });
};

export const observeDomMutations = (rootElement: HTMLElement) => {
    const observerOfMediaElementsInView = getObserverOfMediaElementsInView(rootElement);
    processAlereadyExistingMediaElements(observerOfMediaElementsInView)(rootElement);
    const domMutationObserver = new MutationObserver(onDomMutation(observerOfMediaElementsInView));
    domMutationObserver.observe(rootElement, { childList: true, subtree: true });
};

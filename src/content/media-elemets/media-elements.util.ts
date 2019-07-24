import { MediaElement } from "./media-element.model";

export const fetchAllMediaContentFromDocument = (doc: Document): MediaElement[] => {
    return [...doc.getElementsByTagName("video"), ...doc.getElementsByTagName("audio")];
};

export const isElementInView = (element: HTMLElement) => {
    const { top, bottom, left, right } = element.getBoundingClientRect();
    const isTopInView = top < window.innerHeight && top > 0;
    const isBottomInView = bottom < window.innerHeight && bottom > 0;
    const isLeftInView = left < window.innerWidth && left > 0;
    const isRightInView = right < window.innerWidth && right > 0;
    const isInView = (isTopInView || isBottomInView) && (isLeftInView || isRightInView);
    return isInView
};

import { MediaElement } from "./media-element.model";

export const fetchAllMediaContentFromDocument = (doc: Document): MediaElement[] => {
    return [...doc.getElementsByTagName("video"), ...doc.getElementsByTagName("audio")];
};
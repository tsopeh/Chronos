import { documentCreateElement } from "../common/ts-utils";
import { observeDomMutations } from "./dom-observers/new-media-element-observer";

export const createElement = documentCreateElement(document);

const initChronos = () => {
    const rootElement: HTMLElement = document.body;
    observeDomMutations(rootElement);
};

initChronos();

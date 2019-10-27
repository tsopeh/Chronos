import { documentCreateElement } from "../common/ts-utils";
import { observeDom } from "./dom-observers/dom-mutation-observer";

export const createElement = documentCreateElement(document);

const initChronos = () => {
    const rootElement: HTMLElement = document.body;
    observeDom(rootElement);
};

initChronos();

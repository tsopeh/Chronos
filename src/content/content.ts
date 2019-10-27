import { documentCreateElement } from "../common/ts-utils";
import { observeDom } from "./dom-observers/dom-mutation-observer";
import { getAllMediaElements } from "./media-elemets/media-element";

export const createElement = documentCreateElement(document);

const initChronos = () => {
    const rootElement:HTMLElement = document.body;
    observeDom(rootElement);
};

initChronos();

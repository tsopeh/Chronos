import { applyCssToElement, PartialCSS, uuid } from "../../common/ts-utils";
import { createElement } from "../content";
import { MediaElement } from "../media-elemets/media-element";

export const initControlStrip = (mediaElement: MediaElement) => {
    const controlStrip: HTMLSpanElement = createControlStrip(mediaElement);
    bindControlStripToMediaElement(controlStrip, mediaElement, uuid());
    document.body.appendChild(controlStrip);
};

const bindControlStripToMediaElement = (controlStrip: HTMLSpanElement, mediaElement: MediaElement, chronosId: string): void => {
    controlStrip.dataset.chronosId = chronosId;
    mediaElement.dataset.chronosId = chronosId;
};

const appendControlButtons = (controlStrip: HTMLSpanElement) => {
    Array({ length: 4 }).forEach(() => controlStrip.appendChild(createElement<HTMLButtonElement>("button")));
};

const createControlStrip = (mediaElement: MediaElement): HTMLSpanElement => {
    const controlStrip = createElement<HTMLSpanElement>("chronosStrip");
    appendControlButtons(controlStrip);
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = mediaElement;
    const controlStripCSS: PartialCSS = {
        top: `${offsetTop}px`,
        left: `${offsetLeft}px`,
        position: "absolute",
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
        border: `3px solid red`
    };
    console.log(controlStripCSS);
    applyCssToElement(controlStripCSS)(controlStrip);
    return controlStrip;
};

export const removeControlStrip = (chronosId: string) => {
    document.querySelectorAll(`[data-chronos-id="${chronosId}"]`).forEach((e) => e.remove());
};

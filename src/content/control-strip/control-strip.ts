import { applyCssToElement, PartialCSS, uuid } from "../../common/ts-utils";
import { createElement } from "../content";
import { MediaElement } from "../media-elemets/media-element";
import { onDragStart } from "./control-strip-drag";
import "./control-strip.scss";

export const chronosControlStripTagName = "chronos-control-strip";
export const chronosButtonTagName = "chronos-button";

export const createControlStrip = (mediaElement: MediaElement) => {
    const controlStrip: HTMLSpanElement = createControlStripElement(mediaElement);
    bindControlStripToMediaElement(controlStrip, mediaElement, uuid());
    document.body.appendChild(controlStrip);
};

const bindControlStripToMediaElement = (controlStrip: HTMLSpanElement, mediaElement: MediaElement, chronosId: string): void => {
    controlStrip.dataset.chronosId = chronosId;
    mediaElement.dataset.chronosId = chronosId;
};

const appendControlButtons = (controlStrip: HTMLSpanElement) => {
    Array.from({ length: 7 }).forEach((_, index) => {
        const button = createElement<HTMLButtonElement>(chronosButtonTagName);
        button.innerText = `${index}.0`;
        button.title = String(`(alt+${index})`);
        controlStrip.appendChild(button);
    });
};

const createControlStripElement = (mediaElement: MediaElement): HTMLSpanElement => {
    const controlStrip = createElement<HTMLSpanElement>(chronosControlStripTagName);
    appendControlButtons(controlStrip);
    const { top, left } = mediaElement.getBoundingClientRect();
    const controlStripCSS: PartialCSS = {
        top: `${top > 0 ? top : 0}px`,
        left: `${left > 0 ? left : 0}px`
    };
    applyCssToElement(controlStripCSS)(controlStrip);
    controlStrip.addEventListener("pointerdown", onDragStart);
    return controlStrip;
};

export const removeControlStrip = (chronosId: string) => {
    document.querySelectorAll(`[data-chronos-id="${chronosId}"]`).forEach((e) => e.remove());
};

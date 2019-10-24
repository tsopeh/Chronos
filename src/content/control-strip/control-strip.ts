import { applyCssToElement, PartialCSS, uuid } from "../../common/ts-utils";
import { createElement } from "../content";
import { MediaElement } from "../media-elemets/media-element";
import "./control-strip.scss";

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
    const buttonTagName = "chronos-button";
    Array.from({ length: 7 }).forEach((_, index) => {
        const button = createElement<HTMLButtonElement>(buttonTagName);
        button.innerText = String(index);
        controlStrip.appendChild(button);
    });
};

const createControlStrip = (mediaElement: MediaElement): HTMLSpanElement => {
    const controlStripTagName = "chronos-control-strip";
    const controlStrip = createElement<HTMLSpanElement>(controlStripTagName);
    appendControlButtons(controlStrip);
    const { offsetTop, offsetLeft } = mediaElement;
    const controlStripCSS: PartialCSS = {
        top: `${offsetTop > 0 ? offsetTop : 0}px`,
        left: `${offsetLeft > 0 ? offsetLeft : 0}px`
    };
    applyCssToElement(controlStripCSS)(controlStrip);
    return controlStrip;
};

export const removeControlStrip = (chronosId: string) => {
    document.querySelectorAll(`[data-chronos-id="${chronosId}"]`).forEach((e) => e.remove());
};

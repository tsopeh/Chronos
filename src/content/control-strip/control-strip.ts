import { applyCssToElement, isDefined, PartialCSS, uuid } from "../../common/ts-utils";
import { createElement } from "../content";
import { MediaElement } from "../media-elemets/media-element";
import { controlStripButtonConfigs } from "./control-strip-buttons/button-configs";
import {
    ControlStripButtonConfig,
    createControlStripButton
} from "./control-strip-buttons/control-strip-button";
import { onDragStart } from "./control-strip-drag";
import "./control-strip.scss";

export const chronosControlStripTagName = "chronos-control-strip";

export const recreateControlStrip = (mediaElement: MediaElement) => {
    const maybeChronosId = mediaElement.dataset.chronosId;
    if (isDefined(maybeChronosId)) {
        removeControlStrip(maybeChronosId as string);
    }
    createControlStrip(mediaElement);
};

const createControlStrip = (mediaElement: MediaElement) => {
    const controlStrip: HTMLSpanElement = createControlStripElement(mediaElement);
    bindControlStripToMediaElement(controlStrip, mediaElement, uuid());
    document.body.appendChild(controlStrip);
};

const bindControlStripToMediaElement = (
    controlStrip: HTMLSpanElement,
    mediaElement: MediaElement,
    chronosId: string
): void => {
    controlStrip.dataset.chronosId = chronosId;
    mediaElement.dataset.chronosId = chronosId;
};

const appendControlButtons = (mediaElement: MediaElement, controlStrip: HTMLSpanElement) => {
    controlStripButtonConfigs.forEach((buttonConfig: ControlStripButtonConfig) => {
        const buttonElement = createControlStripButton(mediaElement, buttonConfig);
        controlStrip.appendChild(buttonElement);
    });
};

const createControlStripElement = (mediaElement: MediaElement): HTMLSpanElement => {
    const controlStrip = createElement<HTMLSpanElement>(chronosControlStripTagName);
    appendControlButtons(mediaElement, controlStrip);
    const { top, left } = mediaElement.getBoundingClientRect();
    const controlStripCSS: PartialCSS = {
        top: `${window.scrollY + top}px`,
        left: `${window.scrollX + left}px`
    };
    applyCssToElement(controlStripCSS)(controlStrip);
    controlStrip.addEventListener("pointerdown", onDragStart);
    return controlStrip;
};

export const removeControlStrip = (chronosId: string) => {
    document
        .querySelectorAll(`${chronosControlStripTagName}[data-chronos-id="${chronosId}"]`)
        .forEach((e) => e.remove());
};

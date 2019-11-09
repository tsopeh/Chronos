import { MediaElement } from "../../media-elemets/media-element";
import { createElement } from "../../content";
import { ChronosAction } from "../../actions/actions";

export const chronosButtonTagName = "chronos-button";

export type ChronosEventHandler = (buttonElement: HTMLElement, mediaElement: MediaElement) => void;

export interface ControlStripButtonConfig {
    text: string;
    shortcut: string;
    eventHandlers: ChronosEventHandler[];
}

export const createControlStripButton = (
    mediaElement: MediaElement,
    buttonConfig: ControlStripButtonConfig
) => {
    const button = createElement(chronosButtonTagName);
    button.innerText = buttonConfig.text;
    button.title = buttonConfig.shortcut;
    buttonConfig.eventHandlers.forEach((eventHandler: ChronosEventHandler) => {
        eventHandler(button, mediaElement);
    });
    return button;
};

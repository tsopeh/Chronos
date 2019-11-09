import { MediaElement } from "../../media-elemets/media-element";
import { createElement } from "../../content";
import { ChronosAction } from "../../actions/actions";

export const chronosButtonTagName = "chronos-button";

export type ChronosEventHandler = (buttonElement: HTMLElement, mediaElement: MediaElement) => void;

export interface ControlStripButtonConfig {
    initialText: (mediaElement?: MediaElement) => string;
    description: string;
    eventHandlers: ChronosEventHandler[];
}

export const createControlStripButton = (
    mediaElement: MediaElement,
    buttonConfig: ControlStripButtonConfig
) => {
    const button = createElement(chronosButtonTagName);
    button.innerHTML = buttonConfig.initialText(mediaElement);
    button.title = buttonConfig.description;
    buttonConfig.eventHandlers.forEach((eventHandler: ChronosEventHandler) => {
        eventHandler(button, mediaElement);
    });
    return button;
};

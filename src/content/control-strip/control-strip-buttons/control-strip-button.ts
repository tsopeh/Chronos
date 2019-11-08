import { MediaElement } from "../../media-elemets/media-element";
import { createElement } from "../../content";
import { ChronosAction } from "../../actions/actions";

export const chronosButtonTagName = "chronos-button";

export interface ControlStripButtonConfig {
    action: ChronosAction;
    text: string;
    shortcut: string;
}

export const createControlStripButton = (
    mediaElement: MediaElement,
    buttonConfig: ControlStripButtonConfig
) => {
    const button = createElement(chronosButtonTagName);
    button.innerText = buttonConfig.text;
    button.title = buttonConfig.shortcut;
    button.addEventListener("click", () => {
        buttonConfig.action(mediaElement);
    });
    return button;
};

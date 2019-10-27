import {
    DECREMENT_PLAYBACK_RATE_KEY,
    INCREMENT_PLAYBACK_RATE_KEY,
    RESET_PLAYBACK_RATE_KEY,
    SEEK_BACKWARD_KEY,
    SEEK_FORWARD_KEY,
    TOGGLE_PLAY_PAUSE_KEY
} from "../common/keyboard-shortcuts";
import { DEFAULT_PLAYBACK_VALUE, PLAYBACK_RATE_INCREMENT, PLAYBACK_SEEK_INCREMENT } from "../content/actions/actions";
import "./popup.scss";

const actionKey = "shift";

const definePopupStyle = (popup: HTMLElement) => {
    popup.style.width = `${screen.width * 0.3}px`;
    popup.style.height = `${screen.height * 0.3}px`;
};

const defineControlsDescription = (container: HTMLUListElement) => {
    container.innerHTML = `
		<li>${actionKey}+${DECREMENT_PLAYBACK_RATE_KEY} - Reduce playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${actionKey}+${INCREMENT_PLAYBACK_RATE_KEY} - Incease playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${actionKey}+${SEEK_BACKWARD_KEY} - Seek backward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${actionKey}+${TOGGLE_PLAY_PAUSE_KEY} - Toggle play/pause</li>
		<li>${actionKey}+${SEEK_FORWARD_KEY} - Seek forward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${actionKey}+${RESET_PLAYBACK_RATE_KEY} - Reset to default playback rate (${DEFAULT_PLAYBACK_VALUE})</li>
	`;
};

const popup = document.body;

((popup: HTMLElement) => {
    definePopupStyle(popup);
    const controlsDescription: HTMLUListElement | null = popup.querySelector("#controlsDescription");
    !!controlsDescription ? defineControlsDescription(controlsDescription) : null;
})(popup);

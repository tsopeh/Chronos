import {
    DECREMENT_PLAYBACK_RATE_KEY,
    INCREMENT_PLAYBACK_RATE_KEY,
    SEEK_BACKWARD_KEY,
    TOGGLE_PLAY_PAUSE_KEY,
    SEEK_FORWARD_KEY,
    RESET_PLAYBACK_RATE_KEY
} from "../common/keyboard-shortcuts";

const PLAYBACK_RATE_INCREMENT = 0.25;
const DEFAULT_PLAYBACK_VALUE = 1;
const PLAYBACK_SEEK_INCREMENT = 10;

const definePopupStyle = (popup: HTMLElement) => {
    popup.style.width = `${screen.width * 0.3}px`;
    popup.style.height = `${screen.height * 0.3}px`;
};

const defineControlsDescription = (container: HTMLUListElement) => {
    container.innerHTML = `
		<li>${DECREMENT_PLAYBACK_RATE_KEY} - Reduce playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${INCREMENT_PLAYBACK_RATE_KEY} - Incease playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${SEEK_BACKWARD_KEY} - Seek backward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${TOGGLE_PLAY_PAUSE_KEY} - Toggle play/pause</li>
		<li>${SEEK_FORWARD_KEY} - Seek forward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${RESET_PLAYBACK_RATE_KEY} - Reset to default playback rate (${DEFAULT_PLAYBACK_VALUE})</li>
	`;
};

const popup = document.body;

((popup: HTMLElement) => {
    definePopupStyle(popup);
    const controlsDescription: HTMLUListElement | null = popup.querySelector("#controlsDescription");
    !!controlsDescription ? defineControlsDescription(controlsDescription) : null;
})(popup);

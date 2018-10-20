// TODO: Find a way to access consts from contentscript

const PLAYBACK_RATE_INCREMENT = 0.25;
const DEFAULT_PLAYBACK_VALUE = 1;
const PLAYBACK_SEEK_INCREMENT = 10;
const DECREMENT_PLAYBACK_RATE_KEY = "ALT+G";
const INCREMENT_PLAYBACK_RATE_KEY = "ALT+H";
const SEEK_BACKWARD_KEY = "ALT+J";
const TOGGLE_PLAY_PAUSE_KEY = "ALT+K";
const SEEK_FORWARD_KEY = "ALT+L";
const RESET_PLAYBACK_RATE_KEY = "ALT+R";

const popup = document.body;

((popup) => {
	definePopupStyle(popup);
	const controlsDescription = popup.querySelector("#controlsDescription");
	defineControlsDescription(controlsDescription);
})(popup);

function definePopupStyle(popup){
	popup.style.width = `${screen.width * 0.3}px`;
	popup.style.height = `${screen.height * 0.3}px`;
}

function defineControlsDescription(container){
	container.innerHTML = `
		<li>${DECREMENT_PLAYBACK_RATE_KEY} - Reduce playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${INCREMENT_PLAYBACK_RATE_KEY} - Incease playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${SEEK_BACKWARD_KEY} - Seek backward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${TOGGLE_PLAY_PAUSE_KEY} - Toggle play/pause</li>
		<li>${SEEK_FORWARD_KEY} - Seek forward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${RESET_PLAYBACK_RATE_KEY} - Reset to default playback rate (${DEFAULT_PLAYBACK_VALUE})</li>
	`;
}
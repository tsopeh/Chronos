// TODO: Find a way to access consts from contentscript

const PLAYBACK_RATE_INCREMENT = 0.25;
const PLAYBACK_SEEK_INCREMENT = 10;
const DECREMENT_PLAYBACK_RATE_KEY = "[";
const INCREMENT_PLAYBACK_RATE_KEY = "]";
const SEEK_BACKWARD_KEY = "U";
const TOGGLE_PLAY_PAUSE_KEY = "I";
const SEEK_FORWARD_KEY = "O";
const RESET_PLAYBACK_RATE_KEY = "R";

((body) => {
	body.style.width = `${screen.width * 0.3}px`;
	body.style.height = `${screen.height * 0.3}px`;

	const controlsDescription = document.getElementById("controlsDescription");
	controlsDescription.innerHTML = `
		<li>${DECREMENT_PLAYBACK_RATE_KEY} - Reduce playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${INCREMENT_PLAYBACK_RATE_KEY} - Incease playback rate by ${PLAYBACK_RATE_INCREMENT}</li>
		<li>${SEEK_BACKWARD_KEY} - Seek backward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${TOGGLE_PLAY_PAUSE_KEY} - Toggle play/pause</li>
		<li>${SEEK_FORWARD_KEY} - Seek forward by ${PLAYBACK_SEEK_INCREMENT} sec</li>
		<li>${RESET_PLAYBACK_RATE_KEY} - Reset playback rate</li>
	`;
})(document.body);
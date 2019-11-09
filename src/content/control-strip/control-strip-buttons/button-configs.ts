import { ChronosActions } from "../../actions/actions";
import { MediaElement } from "../../media-elemets/media-element";
import { ControlStripButtonConfig } from "./control-strip-button";

export const controlStripButtonConfigs: ControlStripButtonConfig[] = [
    {
        shortcut: "",
        text: "1",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("ratechange", () => {
                    buttonElement.innerText = `${mediaElement.playbackRate}x`;
                });
            }
        ]
    },
    {
        shortcut: "",
        text: "<<",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.decreasePlaybackRate(mediaElement);
                });
            }
        ]
    },
    {
        shortcut: "",
        text: ">>",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.increasePlaybackRate(mediaElement);
                });
            }
        ]
    },
    {
        shortcut: "",
        text: "R",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.resetPlaybackRate(mediaElement);
                });
            }
        ]
    },
    {
        shortcut: "",
        text: "T",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.toggleNavigation(mediaElement);
                });
            }
        ]
    },
    {
        shortcut: "",
        text: "play/pause",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.togglePlayPause(mediaElement);
                });
            },
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("play", () => {
                    buttonElement.innerText = "pause";
                });
            },
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("pause", () => {
                    buttonElement.innerText = "play";
                });
            }
        ]
    }
];

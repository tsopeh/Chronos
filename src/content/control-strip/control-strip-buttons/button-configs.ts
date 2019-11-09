import { ChronosActions } from "../../actions/actions";
import { MediaElement } from "../../media-elemets/media-element";
import { ControlStripButtonConfig } from "./control-strip-button";

export const controlStripButtonConfigs: ControlStripButtonConfig[] = [
    {
        description: "Current playback rate.",
        initialText: (mediaElement: MediaElement) => `${mediaElement.playbackRate}x`,
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("ratechange", () => {
                    buttonElement.innerText = `${mediaElement.playbackRate}x`;
                });
            }
        ]
    },
    {
        description: "Decrease playback rate by 0.25.",
        initialText: () => "<<",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.decreasePlaybackRate(mediaElement);
                });
            }
        ]
    },
    {
        description: "Increase playback rate by 0.25.",
        initialText: () => ">>",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.increasePlaybackRate(mediaElement);
                });
            }
        ]
    },
    {
        description: "Toggle native contols.",
        initialText: (mediaElement: MediaElement) => (mediaElement.controls ? "⊶".strike() : "⊶"),
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.toggleNativeControls(mediaElement);
                    if (mediaElement.controls) {
                        buttonElement.innerHTML = "⊶".strike();
                    } else {
                        buttonElement.innerText = "⊶";
                    }
                });
            }
        ]
    },
    {
        description: "Toggle loop.",
        initialText: (mediaElement: MediaElement) => (mediaElement.loop ? "∞".strike() : "∞"),
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.toggleLoop(mediaElement);
                    if (mediaElement.loop) {
                        buttonElement.innerHTML = "∞".strike();
                    } else {
                        buttonElement.innerText = "∞";
                    }
                });
            }
        ]
    },
    {
        description: "Toggle play/pause",
        initialText: (mediaElement: MediaElement) => (mediaElement.paused ? "►" : "⏸"),
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.togglePlayPause(mediaElement);
                });
            },
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("play", () => {
                    buttonElement.innerText = "⏸";
                });
            },
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                mediaElement.addEventListener("pause", () => {
                    buttonElement.innerText = "►";
                });
            }
        ]
    },
    {
        description: "Seek backward by 10 seconds.",
        initialText: () => "⏪",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.seekBackward(mediaElement);
                });
            }
        ]
    },
    {
        description: "Seek forward by 10 seconds.",
        initialText: () => "⏩",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.seekForward(mediaElement);
                });
            }
        ]
    }
];

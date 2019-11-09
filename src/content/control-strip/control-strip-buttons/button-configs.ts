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
    // {
    //     shortcut: "",
    //     text: "R",
    //     eventHandlers: [
    //         (buttonElement: HTMLElement, mediaElement: MediaElement) => {
    //             buttonElement.addEventListener("click", () => {
    //                 ChronosActions.resetPlaybackRate(mediaElement);
    //             });
    //         }
    //     ]
    // },
    {
        shortcut: "",
        text: "⊶",
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
        text: "∞",
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
        shortcut: "",
        text: "⏯",
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
        shortcut: "",
        text: "⏪",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.seekBackward(mediaElement);
                });
            }
        ]
    },
    {
        shortcut: "",
        text: "⏩",
        eventHandlers: [
            (buttonElement: HTMLElement, mediaElement: MediaElement) => {
                buttonElement.addEventListener("click", () => {
                    ChronosActions.seekForward(mediaElement);
                });
            }
        ]
    }
];

import { MediaElement } from "../media-elemets/media-element";

const PLAYBACK_RATE_INCREMENT = 0.25;

export type ChronosAction = (mediaElement: MediaElement) => void;

interface IChronosActions {
    increasePlaybackRate: ChronosAction;
    decreasePlaybackRate: ChronosAction;
    resetPlaybackRate: ChronosAction;
    toggleNavigation: ChronosAction;
    togglePlayPause: ChronosAction;
}

const setPlaybackRate = (mediaElement: MediaElement, plabackRate: number) => {
    mediaElement.playbackRate = plabackRate;
};

export const ChronosActions: IChronosActions = {
    increasePlaybackRate: (mediaElement: MediaElement) => {
        setPlaybackRate(mediaElement, mediaElement.playbackRate + PLAYBACK_RATE_INCREMENT);
    },

    decreasePlaybackRate: (mediaElement: MediaElement) => {
        setPlaybackRate(mediaElement, mediaElement.playbackRate + PLAYBACK_RATE_INCREMENT);
    },

    resetPlaybackRate: (mediaElement: MediaElement) => {
        mediaElement.playbackRate = 1;
    },

    toggleNavigation: (mediaElement: MediaElement) => {
        mediaElement.controls = !mediaElement.controls;
    },

    togglePlayPause: (mediaElement: MediaElement) => {
        if (mediaElement.paused) {
            mediaElement.play();
        } else {
            mediaElement.pause();
        }
    }
};

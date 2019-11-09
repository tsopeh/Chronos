import { MediaElement } from "../media-elemets/media-element";

const PLAYBACK_RATE_INCREMENT = 0.25;
const SEEK_INCREMENT = 10;

export type ChronosAction = (mediaElement: MediaElement) => void;

interface IChronosActions {
    increasePlaybackRate: ChronosAction;
    decreasePlaybackRate: ChronosAction;
    resetPlaybackRate: ChronosAction;
    toggleNativeControls: ChronosAction;
    toggleLoop: ChronosAction;
    togglePlayPause: ChronosAction;
    seekForward: ChronosAction;
    seekBackward: ChronosAction;
}

const setPlaybackRate = (mediaElement: MediaElement, plabackRate: number) => {
    mediaElement.playbackRate = plabackRate;
};

const setCurrentTime = (mediaElement: MediaElement, seekTime: number) => {
    mediaElement.currentTime = seekTime;
};

export const ChronosActions: IChronosActions = {
    increasePlaybackRate: (mediaElement: MediaElement) => {
        setPlaybackRate(mediaElement, mediaElement.playbackRate + PLAYBACK_RATE_INCREMENT);
    },

    decreasePlaybackRate: (mediaElement: MediaElement) => {
        setPlaybackRate(mediaElement, mediaElement.playbackRate - PLAYBACK_RATE_INCREMENT);
    },

    resetPlaybackRate: (mediaElement: MediaElement) => {
        mediaElement.playbackRate = 1;
    },

    toggleNativeControls: (mediaElement: MediaElement) => {
        mediaElement.controls = !mediaElement.controls;
    },

    togglePlayPause: (mediaElement: MediaElement) => {
        if (mediaElement.paused) {
            mediaElement.play();
        } else {
            mediaElement.pause();
        }
    },
    toggleLoop: (mediaElement: MediaElement) => {
        mediaElement.loop = !mediaElement.loop;
    },
    seekForward: (mediaElement: MediaElement) => {
        setCurrentTime(mediaElement, mediaElement.currentTime + SEEK_INCREMENT);
    },
    seekBackward: (mediaElement: MediaElement) => {
        setCurrentTime(mediaElement, mediaElement.currentTime - SEEK_INCREMENT);
    }
};

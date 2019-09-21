import { MediaElement } from "../media-elemets/media-element";

export interface ChronosAction {
    (mediaElements: MediaElement[]): void;
}

import { MediaElement } from "../media-elemets/media-element.model";

export interface ChronosAction {
    (mediaElements: MediaElement[]): void;
}
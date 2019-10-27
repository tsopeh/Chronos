import { MediaElement } from "../media-elemets/media-element";

const onMediaElementDomMutation: MutationCallback = (mutations: MutationRecord[]) => {
    console.log(mutations);
};

export const observeMediaElementMutation = (mediaElement: MediaElement) => {
    const mediaElementMutationObserver = new MutationObserver(onMediaElementDomMutation);
    mediaElementMutationObserver.observe(mediaElement, {
        childList: false,
        attributes: true,
        attributeFilter: ["top", "left", "bottom", "right", "width", "height"]
    });
};

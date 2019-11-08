import { recreateControlStrip } from "../control-strip/control-strip";
import { MediaElement } from "../media-elemets/media-element";

const processMediaElements: MutationCallback = (mutations: MutationRecord[]) => {
    const mutatedMediaElements = mutations.reduce(
        (acc, record: MutationRecord): MediaElement[] => {
            const mediaElement = record.target as MediaElement;
            const isNotInAcc = !acc.includes(mediaElement);
            if (isNotInAcc) {
                acc.push(mediaElement);
            }
            return acc;
        },
        [] as MediaElement[]
    );
    mutatedMediaElements.forEach(recreateControlStrip);
};

export const observeMediaElementStyleChange = (mediaElement: MediaElement) => {
    const mediaElementMutationObserver = new MutationObserver(processMediaElements);
    mediaElementMutationObserver.observe(mediaElement, {
        childList: false,
        attributes: true,
        attributeFilter: ["style"]
    });
};

import { recreateControlStrip, removeControlStrip } from "../control-strip/control-strip";
import { MediaElement } from "../media-elemets/media-element";
import { isDefined } from "../../common/ts-utils";

const onElementInView: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        const element = entry.target as MediaElement;
        if (entry.isIntersecting) {
            recreateControlStrip(element);
        } else {
            const maybeChronosId = element.dataset.chronosId;
            if (isDefined(maybeChronosId)) {
                removeControlStrip(maybeChronosId as string);
            }
        }
        // console.log(element);
    });
};

export const getObservrOfMediaElementInView = (rootElement: HTMLElement): IntersectionObserver => {
    const options: IntersectionObserverInit = {
        /* Note: root = null means viewport */
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    const inViewObserver: IntersectionObserver = new IntersectionObserver(onElementInView, options);
    return inViewObserver;
};

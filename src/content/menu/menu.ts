import { isActivationKeyPressed } from "../../common/keyboard-shortcuts";

export const initMenu = (doc: Document) => (treshhold: number) => (timeoutInMs: number) => (callback: () => void) => {
    let count = 0;
    let timeoutRef: NodeJS.Timeout | null = null;
    doc.addEventListener("keydown", (event: KeyboardEvent) => {
        if (isActivationKeyPressed(event)) {
            count++;
            if (!!timeoutRef) {
                clearTimeout(timeoutRef as NodeJS.Timeout);
            }
            if (count % treshhold === 0) {
                callback();
            }
            timeoutRef = setTimeout(() => {
                count = 0;
            }, timeoutInMs);
        }
    });
};

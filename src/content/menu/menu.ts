export const initMenu = (doc: Document) => (treshhold: number) => (timeoutInMs: number) => (callback: () => void) => {
    let count = 0;
    let timeoutRef: number | null = null;
    doc.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.altKey) {
            count++;
            if (!isNaN(timeoutRef as number)) {
                clearTimeout(timeoutRef as number);
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

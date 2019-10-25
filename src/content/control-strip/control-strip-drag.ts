import { isDefined, PartialCSS, applyCssToElement } from "../../common/ts-utils";

export const onDragStart = (e: PointerEvent) => {
    const maybeTarget = e.target;
    if (isDefined(maybeTarget)) {
        const maybeElement = (maybeTarget as HTMLElement).parentElement;
        if (isDefined(maybeElement)) {
            const element = maybeElement as HTMLElement;
            const originalRect = element.getBoundingClientRect();
            const elementOriginalTop = originalRect.top;
            const elementOriginalLeft = originalRect.left;

            const dragStartX = e.clientX;
            const dragStartY = e.clientY;

            const onDrag = (e: PointerEvent) => {
                const diffY = e.clientY - dragStartY;
                const diffX = e.clientX - dragStartX;
                const css: PartialCSS = {
                    top: `${elementOriginalTop + diffY}px`,
                    left: `${elementOriginalLeft + diffX}px`
                };
                applyCssToElement(css)(element);
            };

            const onDragFinish = () => {
                document.removeEventListener("pointermove", onDrag);
                document.removeEventListener("pointerup", onDragFinish);
            };

            document.addEventListener("pointermove", onDrag);
            document.addEventListener("pointerup", onDragFinish);
        }
    }
};

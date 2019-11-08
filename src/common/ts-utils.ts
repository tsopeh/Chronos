export const isDefined = <T>(something: T): boolean =>
    something !== undefined && something !== null;

export const isNotDefined = <T>(something: T): boolean => !isDefined(something);

export const documentCreateElement = (doc: Document) => <T extends HTMLElement>(
    tagName: string
): T => doc.createElement(tagName) as T;

export const keyCodeToKey = (code: string): string => code.replace(/Key/, "");

export type PartialCSS = Partial<CSSStyleDeclaration>;

export const applyCssToElement = (css: PartialCSS) => (element: HTMLElement) => {
    Object.keys(css).forEach((cssKey: string) => {
        // @ts-ignore
        (element.style[cssKey] as unknown) = css[cssKey];
    });
};

export const uuid = () => {
    return `${1e7}${-1e3}${-4e3}${-8e3}${-1e11}`.replace(/[018]/g, (c) =>
        (
            Number(c) ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
        ).toString(16)
    );
};

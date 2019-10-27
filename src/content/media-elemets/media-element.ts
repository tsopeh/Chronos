export type MediaElement = HTMLVideoElement | HTMLAudioElement;

export enum MediaElementNodeName {
    video = "video",
    audio = "audio"
}

export const getAllMediaElements = (element: Element): MediaElement[] => {
    return [...element.getElementsByTagName("video"), ...element.getElementsByTagName("audio")];
};

export const getMediaElementsFromNodes = (nodes: Node[]): MediaElement[] => {
    const topLevelMediaElements: MediaElement[] = nodes.filter((node: Node) => {
        const nodeName = node.nodeName.toLowerCase();
        return nodeName === MediaElementNodeName.video || nodeName === MediaElementNodeName.audio;
    }) as MediaElement[];

    const nestedMediaElements: MediaElement[] = nodes
        .filter((node: Node) => node.hasChildNodes())
        .reduce(
            (acc: MediaElement[], node: Node): MediaElement[] => {
                const element = node as HTMLElement;
                acc.push(...getAllMediaElements(element));
                return acc;
            },
            [] as MediaElement[]
        );

    return [...topLevelMediaElements, ...nestedMediaElements];
};

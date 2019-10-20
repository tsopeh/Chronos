export type MediaElement = HTMLVideoElement | HTMLAudioElement;

export enum MediaElementNodeName {
    video = "video",
    audio = "audio"
}

export const getAllMediaElementsFromDocument = (doc: Document): MediaElement[] => {
    return [...doc.getElementsByTagName("video"), ...doc.getElementsByTagName("audio")];
};

export const getMediaElementsFromNodeList = (list: NodeList): MediaElement[] => {
    const mediaElements: MediaElement[] = [...list].filter((node: Node) => {
        const nodeName = node.nodeName.toLowerCase();
        return nodeName === MediaElementNodeName.video || nodeName === MediaElementNodeName.audio;
    }) as MediaElement[];

    return mediaElements;
};

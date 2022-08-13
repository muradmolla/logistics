import { useImageUrl } from "../hooks/useImage";
import { SectionController } from "../hooks/useSections";


export function formatNodes(content: SectionController, nodeCount: number) {
    const nodes = [];

    for (let i = 1; i <= nodeCount; i++) {
        nodes.push({
            img: content.isPartExist(`node${i}Img`) ? useImageUrl(content.contentFromPart(`node${i}Img`)) : '',
            content: content.contentFromPart(`node${i}`)
        });
    }
    return nodes;
}
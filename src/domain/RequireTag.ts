import * as RequireTagsDescription from '../json/RequireTagDescription.json';

export default class RequireTag {
    public contentRating!: string;
    public orientations!: string;
    public contentWarning!: string;
    public status!: string;

    constructor(ulElement: HTMLUListElement) {
        for (let listItem = 0, children = ulElement.children; listItem < ulElement.children.length; listItem++) {
            const tagName = children[listItem]
                .children[0] //a tag
                .children[0].getAttribute('title') as string //span tag with the actual tag name

            if (tagName in RequireTagsDescription['content']) {
                this.contentRating = tagName;
            } else if (tagName in RequireTagsDescription['orientation']) {
                this.orientations = tagName;
            } else if (tagName in RequireTagsDescription['status']) {
                this.status = tagName;
            } else if (tagName in RequireTagsDescription['warning']) {
                this.contentWarning = tagName;
            } else {
                alert('fokin shit tag no espesificado');
            }
        }
    }
}
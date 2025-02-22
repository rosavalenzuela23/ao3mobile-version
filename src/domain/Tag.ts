enum TagType {
    WARNINGS = "warnings",
    RELATIONTIOP = "relationships",
    CHARACTERS = "characters",
    FREEFORMS = "freeforms"
}

export default class Tag {
    public name!: string;
    public type!: string;
    public url!: string; 

    constructor(element: HTMLLIElement) {
        this.type = element.classList[0];
        const anchoreElement = this.getAnchoreElement(element);
        this.name = anchoreElement.innerHTML;
        this.url = anchoreElement.getAttribute('href') as string;
    }

    private getAnchoreElement(baseElement: HTMLLIElement): HTMLAnchorElement {
        let anchoreElement: HTMLAnchorElement = baseElement.children[0] as HTMLAnchorElement;
        if (this.type === TagType.WARNINGS) {
            //this is because in Warning tags, there is a span element before the anchore one
            anchoreElement = anchoreElement.children[0] as HTMLAnchorElement;
        }
        return anchoreElement;
    }

}
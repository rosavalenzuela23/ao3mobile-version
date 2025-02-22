import RequireTag from "./RequireTag";
import Fandom from "./Fandom";
import Tag from "./Tag";
import Stats from "./Stats";
import WorkSummary from "./WorkSummary";

export default class Work {

    constructor(element: HTMLLIElement) {
        this.liElement = element;
        this.fandoms = [];
        this.tags = [];
        this.setAllElements();
    }

    private setAllElements() {
        this.setAuthor();
        this.setWorkUrl();
        this.setTitle();
        this.setAllTags();
        this.setStats();
        this.setWorkSummary();
    }

    private setWorkSummary() {
        const element = this.getElementWithQuery('blockquote.userstuff.summary') as HTMLQuoteElement;
        this.workSummary = new WorkSummary(element);
    }

    private setStats() {
        const statsElement = this.getElementWithQuery('dl.stats') as HTMLDListElement;
        this.stats = new Stats(statsElement);
    }

    private setAllTags() {
        const requireTagsElement = this.getElementWithQuery('div.header.module ul.required-tags') as HTMLUListElement //gets the ul list;
        this.requireTag = new RequireTag(requireTagsElement);

        //Now with the normal tags
        const fandomTagsElement = this.getElementWithQuery('h5.fandoms.heading');

        for (let fandomTag = 0, children = fandomTagsElement.children; fandomTag < children.length; fandomTag++) {
            if (children[fandomTag].tagName === "SPAN") {
                continue;
            }

            //from here all items are suppose to be "a" item element
            const fandom = new Fandom();
            fandom.link = children[fandomTag].getAttribute('href') as string;
            fandom.name = children[fandomTag].innerHTML;
            this.fandoms.push(fandom);
        }

        const normalTags = this.getElementWithQuery('ul.tags.commas');

        for (let tag = 0, children = normalTags.children; tag < children.length; tag++) {
            this.tags.push(
                new Tag(children[tag] as HTMLLIElement)
            )
        }

    }

    private setAuthor() {
        const element = this.getElementWithQuery('div.header.module h4.heading a[rel="author"]');
        this.authorName = element.innerHTML; // refers to the actual name of the author
        this.authorLink = element.attributes[1].value; // refers to the href attribute
    }

    private setTitle() {
        this.title = this.getElementWithQuery('h4.heading a')
            .innerHTML;
    }

    private setWorkUrl() {
        this.workUrl = this.getElementWithQuery('h4.heading a')
            .attributes[0] //The first one
            .value;
    }

    private getElementWithQuery(query: string) {
        const element = this.liElement.querySelector(query);
        if (!element) {
            console.log(query);
            throw new Error("El elemento no existe");
        }

        return element;
    }

    public get summary() {
        return this.workSummary.text;
    }

    public title!: string;
    public authorLink!: string;
    public authorName!: string;
    public workUrl!: string;
    public lastChapterUrl!: string;
    public stats!: Stats;
    public fandoms!: Fandom[];
    public requireTag!: RequireTag;
    public tags!: Tag[];

    private workSummary!: WorkSummary;
    private liElement;
}
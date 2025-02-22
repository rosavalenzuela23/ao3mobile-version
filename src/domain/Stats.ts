export default class Stats {
    language!: string;
    words!: string;
    chapters!: string;
    comments!: string;
    kudos!: string;
    bookmarks!: string;
    hits!: string;

    constructor(element: HTMLDListElement) {
        this.language = element.querySelector('dd.language')!.innerHTML;
        this.words = element.querySelector('dd.words')!.innerHTML;
        this.chapters = element.querySelector('dd.chapters')?.textContent || "?/?";
        this.comments = element.querySelector('dd.comments')?.textContent || "0";
        this.kudos = element.querySelector('dd.kudos')?.textContent || "0";
        this.bookmarks = element.querySelector('dd.bookmarks')?.textContent || "0";
        this.hits = element.querySelector('dd.hits')!.innerHTML;
    }

}
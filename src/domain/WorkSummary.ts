export default class WorkSummary {
    public text!: string;
    constructor(element: HTMLQuoteElement) {
        this.text = element!.textContent || "NO SUMMARIES";
    }
}
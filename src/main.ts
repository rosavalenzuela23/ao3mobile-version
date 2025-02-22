// import Work from "./domain/Work";

import HttpProxy from "./classes/HttpProxy";
import Work from "./domain/Work";
import { HttpRequest } from "./types/HttpRequest";

const main = async () => {
    const proxy = HttpProxy.instance;

    const request: HttpRequest = {
        url: "https://archiveofourown.org/works/search",
        parameters: [
            {name: "work_search[query]", value: "re+zero"},
            {name: "adult", value: "true"}
        ]
    }

    const text = await (await proxy.doGet(request)).text();

    const worksText = text.substring(
        text.indexOf('<ol class="work index group">'),
        text.indexOf('<!--/content-->')
    )

    const div = document.createElement('div');
    div.innerHTML = worksText;

    const work = div.children[0].children[0] as HTMLLIElement;
    console.log(work);
    const workObject = new Work(work);

    debugger;

}

document.addEventListener('DOMContentLoaded', main);
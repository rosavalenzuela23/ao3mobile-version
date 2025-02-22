import HttpClient from "../interfaces/HttpClient";
import { HttpRequest } from "../types/HttpRequest";
import { Parameter } from "../types/Parameter";

export default class FetchService implements HttpClient {

    private addParameters(baseUrl: string, parameters: Parameter[]): string {
        let finalUrl = baseUrl + "?";

        for (let parameter of parameters) {
            finalUrl += `${parameter.name}=${parameter.value}&`;
        }

        return finalUrl;
    }

    async doGet(options: HttpRequest): Promise<Response> {
        let finalUrl = options.url;

        if (options.parameters) {
            finalUrl = this.addParameters(finalUrl, options.parameters);
        }

        return await fetch(
            encodeURI(finalUrl),
            {
                headers: options.headers,
            }
        );
    }

    doPatch(): void {
        throw new Error("Method not implemented.");
    }
    doPut(): void {
        throw new Error("Method not implemented.");
    }



}
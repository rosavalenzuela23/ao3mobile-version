import HttpClient from "../interfaces/HttpClient";
import FetchService from "../services/FetchService";
import { HttpRequest } from "../types/HttpRequest";

export default class HttpProxy {

    private static INSTANCE ?: HttpProxy;

    private httpClient: HttpClient;

    private constructor() {
        //get the web version with capacitor
        //for now is only goint to show FetchService
        this.httpClient = new FetchService();
    }

    async doGet(options: HttpRequest): Promise<Response> {
        return await this.httpClient.doGet(options);
    }

    static get instance(): HttpProxy {
        if (!HttpProxy.INSTANCE) {
            HttpProxy.INSTANCE = new HttpProxy();
        }
        return HttpProxy.INSTANCE;
    }


}
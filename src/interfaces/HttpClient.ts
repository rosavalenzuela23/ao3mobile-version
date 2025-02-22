import { HttpRequest } from "../types/HttpRequest";

export default interface HttpClient {
    doGet(options: HttpRequest): Promise<Response>;
    doPatch(): void;
    doPut(): void;
}
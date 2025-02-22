import { Parameter } from "./Parameter";

export type HttpRequest = {
    url: string;
    headers?: any;
    parameters?: Parameter[];
}
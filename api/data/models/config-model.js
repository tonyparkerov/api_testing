export default class Config {
    constructor(method, url, headers, data = undefined){
        this.method = method;
        this.url = url;
        this.headers = headers;
        this.data = data
    }
}
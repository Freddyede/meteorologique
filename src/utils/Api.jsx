import Config from "../config/index.jsx";

export class Api {
    constructor(name) {this.name = name;}
    search() {
        return fetch(Config.resource + '&q=' + this.name).then(r => r.json());
    }

    static searchByInput = e => {
        return fetch(Config.resource + '&q=' + e).then(r => r.json())
    };
}
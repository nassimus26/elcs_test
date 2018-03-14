import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SearchResponse } from "elasticsearch";

@Injectable()
export class ElasticSearchService {
    private _client: Client;

    constructor() {
        if (!this._client) this._connect();
    }

    private _connect() {
        this._client = new Client({
            host: 'http://elastic:changeme@localhost:9200',
            log: 'trace'
        });
    }
    indexName():string{
        return "click_events";
    }
    search(value): any {
        if (value) {
            console.log(value)
            return this._client.search({
                index: this.indexName(),
                q: `userAgent:*${value}*`,
                size: 20
            })
        } else {
            return Promise.resolve({})
        }
    }

    addToIndex(value): any {
        return this._client.create(value)
    }

    isAvailable(): any {
        return this._client.ping({
            requestTimeout: 1000
        });
    }
}


import { IStoreAdapter, IDictionary } from "./IStoreAdapter"; 

export class MemoryProvider implements IStoreAdapter {

    private _store: IDictionary<IDictionary<any>> = {};

    async read(sessionId: string) {
        return this._store[sessionId] || {};
    }

    async write(sessionId: string, data: IDictionary<any>) {
        this._store[sessionId] = data;
    }

    async destroy(sessionId: string) {
        delete this._store[sessionId];
    }
}
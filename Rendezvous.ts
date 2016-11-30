
import * as crypto from 'crypto';
import { IStoreAdapter } from './IStoreAdapter';
import { MemoryProvider } from './MemoryProvider';

export interface RendezvousConfig {
    algorithm?: string
    storeAdapter: IStoreAdapter
}

let defaultConfig: RendezvousConfig = {
    algorithm: 'aes-256-ctr',
    storeAdapter: new MemoryProvider()
};

export class Rendezvous {

    private config: RendezvousConfig;

    constructor(config: RendezvousConfig = defaultConfig) {
        this.config = config;
    }



}


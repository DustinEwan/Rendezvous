
export type IDictionary<ValueType> = { [key: string]: ValueType }

export interface IStoreAdapter {
    read(sessionId: string): Promise<any>
    write(sessionId: string, data: any): Promise<void>
    destroy(sessionId: string): Promise<void>
}
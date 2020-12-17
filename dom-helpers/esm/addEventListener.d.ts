export declare let optionsSupported: boolean;
export declare let onceSupported: boolean;
export declare type EventHandler<K extends keyof HTMLElementEventMap> = (this: HTMLElement, event: HTMLElementEventMap[K]) => any;
export declare type TaggedEventHandler<K extends keyof HTMLElementEventMap> = EventHandler<K> & {
    __once?: EventHandler<K>;
};
/**
 * An `addEventListener` ponyfill, supports the `once` option
 */
declare function addEventListener<K extends keyof HTMLElementEventMap>(node: HTMLElement, eventName: K, handler: TaggedEventHandler<K>, options?: boolean | AddEventListenerOptions): void;
export default addEventListener;

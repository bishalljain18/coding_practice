type DoublyLinkedListNode<T> = {
    value: T,
    prev?: DoublyLinkedListNode<T>
    next?: DoublyLinkedListNode<T>
}


export default class DoublyLinkedList<T> {
    public length: number | undefined;
    private head?: DoublyLinkedListNode<T>

    constructor() {
        this.length = 0
    }

    prepend(item: T): void {
        const node = {value: item} as DoublyLinkedListNode<T>

        this.length++;
        if(!this.head) {
            this.head = node;
            return
        }
    }

    insertAt(item: T, idx: number): void {

    }

    append(item: T): void {

    }

    remove(item: T): T | undefined {

    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for(let i=0;i < idx && curr; ++i) {
            curr = curr.next;
        }
        return curr?.value
    }
    removeAt(idx: number): T | undefined {

    }
 }
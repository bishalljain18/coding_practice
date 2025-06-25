type queueNode<T> = {
    next?: queueNode<T>
    value: T
}

class Queue<T> {
    public length: number
    private head?: queueNode<T>
    private tail?: queueNode<T>

    constructor() {
        this.head = this.tail = undefined
        this.length = 0
    }

    enqueue(item: T): void {
        const node = {value: item} as queueNode<T>
        if(!this.tail) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(): (T | undefined) {
        if(!this.head) return undefined

        this.length--;
        let node = this.head
        this.head = this.head.next
        node.next = undefined
        return node.value
        
    }

    peek(): (T | undefined) {
        return this.head?.value
    }
}
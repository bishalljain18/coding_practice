type stackNode<T> {
    prev?: stackNode<T>
    value: T
}

class Stack<T> {
    // let length = 0
    public length: number
    private head?: stackNode<T>
    constructor() {
        this.head = undefined
        this.length = 0
    }

    push(item: T): void {
        const node = { value: item } as stackNode<T>
        node.prev = this.head
        this.head = node
        this.length++

    }

    pop(): T | undefined {
        if (!this.head) return undefined
        let returnItem = this.head?.value
        this.head = this.head?.prev
        this.length--
        return returnItem
    }
    peek(): T | undefined {
        return this.head?.value
    }
    

}
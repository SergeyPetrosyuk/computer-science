export interface ListType extends Object { [key: number] : any}

class List {

    private store: ListType = {};

    // O(n) = 1
    add<T>(value: T, index: number = Object.keys(this.store).length): ListType {
        this.store[index] = value;
        return this.store;
    }

    // O(n) = 1
    get(index: number): number {
        return this.store[index];
    }

    // O(n) = n
    remove(deleteAtIndex: number): ListType {
        delete this.store[deleteAtIndex];

        const list: ListType = {};
        const keys = Object.keys(this.store);

        for(let i = 0; i < (keys.length); i++) {
            const storeKey: number = keys[i] as unknown as number;
            const key = storeKey < deleteAtIndex ? storeKey : storeKey - 1
            list[key] = this.store[storeKey];
        }

        this.store = list;

        return this.store;
    }

    // O(n) = n
    print(): string {
        const printString = Object.keys(this.store)
            .map(i => this.store[i as unknown as number])
            .join(' ');
        console.log(printString);
        return printString;
    }

    // O(n) = 1
    clear(): ListType {
        this.store = {};
        return this.store;
    }

    // O(n) = n
    reverse(): string {
        // fix task 1
        const length = Object.keys(this.store).length;
        let reverseString = ''
        for(let i = length - 1; i >= 0; i--) {
            const separator = reverseString.length === 0 ? '' : ' ';
            reverseString = reverseString + separator + this.store[i]
        }
        return reverseString;
    }

    // O(n) = 1
    length(): number {
        return Object.keys(this.store).length;
    }

}

export default List;
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

    // O(n) = 1
    remove(index: number): ListType {
        delete this.store[index];
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
        return '';
    }

    // O(n) = 1
    length(): number {
        // fix task 2
        return 0;
    }

}

export default List;
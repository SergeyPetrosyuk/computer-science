import 'jasmine';
import List, {ListType} from '../list';

describe("List", () => {
    
    it("should add an item", () => {
        const list = new List();
        expect(list.add(1)).toEqual({0:1});
    });

    it("should read an item", () => {
        const list = new List();
        list.add(1);
        expect(list.get(0)).toEqual(1);
    });

    it("should remove an item", () => {
        const list = new List();
        list.add(1);
        expect(list.remove(0)).toEqual({});
    });

    it("should add an element a type of 'string' and print", () => {
        const stringList = new List();
        stringList.add('hi');
        stringList.add('there');
        expect(stringList.print()).toEqual('hi there');
    });

    it("should clear a list", () => {
        const stringList = new List();
        stringList.add('hi');
        stringList.add('there');
        expect(stringList.clear()).toEqual({});
    });

    describe('Task 1: ', () => {

        it('should print the list in reverse order', () => {
            /** TODO: Додати метод reverse для класу List, 
             * який друкує елементи списку у зворотному порядку не змінюючи сам список
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            list.add('4');
            list.add('5');
            expect(list.reverse()).toBe('5 4 3 2 1');
            expect(list.print()).toBe('1 2 3 4 5');
        });

    });

    describe('Task 2: ', () => {

        it('should keep correct index', () => {
            /** TODO: Виправити метод remove для класу List таким чином,
            * щоб при видаленні елемента з будь-якої позиції індекс йшов за порядком
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            expect(list.remove(1)).toEqual({
                0: '1',
                1: '3'
            } as ListType);
        });

    });

    describe('Task 3: ', () => {

        it('should provide length of the list', () => {
            /** TODO: Додати метод length для класу List, 
             * який вертає кількість елеметів у списку
            **/
            const list = new List();
            list.add('1');
            list.add('2');
            list.add('3');
            expect(list.length()).toBe(3);
        });

    });

});
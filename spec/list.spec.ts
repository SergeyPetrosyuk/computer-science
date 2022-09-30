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

});
const { LinkedList, Node, zipLists } = require('../code-challenges/linked-list-zip');


describe('LinkedList', () => {
  describe('append', () => {
    it('should append nodes to the list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });

  describe('printList', () => {
    it('should print the list in the expected format', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      list.printList();

      expect(consoleSpy).toHaveBeenCalledWith('{1} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('{2} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('{3} -> ');
      expect(consoleSpy).toHaveBeenCalledWith('null');

      consoleSpy.mockRestore();
    });
  });
});

describe('zipLists', () => {
  it('should zip two linked lists correctly', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    // Test the zipped list
    const values = [];
    let current = zippedList.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    expect(values).toEqual([1, 2, 3, 4]);
  });

  it('should zip two linked lists when one is longer', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(5);

    const zippedList = zipLists(list1, list2);

    // Test the zipped list
    const values = [];
    let current = zippedList.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    expect(values).toEqual([1, 2, 3, 4, 5]);
  });

  it('should zip two linked lists when one is empty', () => {
    const list1 = new LinkedList();

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);

    const zippedList = zipLists(list1, list2);

    // Test the zipped list
    const values = [];
    let current = zippedList.head;
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    expect(values).toEqual([2, 4]);
  });
});

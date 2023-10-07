const LinkedList = require('./index'); // Adjust the import path as needed

describe('LinkedList', () => {
  describe('append', () => {
    it('should append a new node to an empty list', () => {
      const list = new LinkedList();
      list.append(1);

      expect(list.head.value).toBe(1);
      expect(list.head.next).toBeNull();
    });

    it('should append a new node to the end of a non-empty list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(3);
    });
  });

  describe('insertBefore', () => {
    it('should insert a new node before the first occurrence of a value', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      list.insertBefore(2, 4);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(4);
      expect(list.head.next.next.value).toBe(2);
      expect(list.head.next.next.next.value).toBe(3);
    });

    it('should insert a new node at the beginning of the list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);

      list.insertBefore(1, 0);

      expect(list.head.value).toBe(0);
      expect(list.head.next.value).toBe(1);
      expect(list.head.next.next.value).toBe(2);
    });

    it('should do nothing if the list is empty', () => {
      const list = new LinkedList();

      list.insertBefore(1, 0);

      expect(list.head).toBeNull();
    });
  });

  describe('insertAfter', () => {
    it('should insert a new node after the first occurrence of a value', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);

      list.insertAfter(2, 4);

      expect(list.head.value).toBe(1);
      expect(list.head.next.value).toBe(2);
      expect(list.head.next.next.value).toBe(4);
      expect(list.head.next.next.next.value).toBe(3);
    });

    it('should do nothing if the list is empty', () => {
      const list = new LinkedList();

      list.insertAfter(1, 0);

      expect(list.head).toBeNull();
    });
  });
});

const LinkedList = require('./linked-list');

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    it('should return null for k <= 0', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);

      expect(list.kthFromEnd(0)).toBeNull();
      expect(list.kthFromEnd(-1)).toBeNull();
    });

    it('should return the correct value for valid k', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);
      list.insert(4);
      list.insert(5);

      expect(list.kthFromEnd(1)).toBe(4);
      expect(list.kthFromEnd(3)).toBe(2);
      expect(list.kthFromEnd(5)).toBe(1);
    });

    it('should return null for k out of bounds', () => {
      const list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.insert(3);

      expect(list.kthFromEnd(4)).toBeNull();
      expect(list.kthFromEnd(10)).toBeNull();
    });

    it('should return null for an empty list', () => {
      const list = new LinkedList();
      expect(list.kthFromEnd(0)).toBeNull();
    });
  });
});

const {
  genCursor,
  appendSiblingsToContext,
} = require('../pagination');

describe('pagination', () => {
  describe('"genCursor"', () => {
    const stub = ['foo', 'bar', 'quuz', 'garply'];
    const cursor = genCursor(stub, 2);
    // current index targets "quuz"

    it('should identify first item', () => {
      expect(cursor.first).toMatch('foo');
    });

    it('should identify last item', () => {
      expect(cursor.last).toMatch('garply');
    });

    it('should identify next item', () => {
      expect(cursor.next).toMatch('garply');
    });

    it('should identify previous item', () => {
      expect(cursor.prev).toMatch('bar');
    });

    it('should identify first position', () => {
      expect(cursor.isFirst).toBeFalsy();
      expect(genCursor(stub, 0).isFirst).toBeTruthy();
    });

    it('should identify last position', () => {
      expect(cursor.isLast).toBeFalsy();
      expect(genCursor(stub, 3).isLast).toBeTruthy();
    });
  });

  describe('"appendSiblingsToContext"', () => {
    const mockContentfulEntry = (id) => ({
      contentful_id: id,
    });

    const stubWithContentful = [
      mockContentfulEntry(1),
      mockContentfulEntry(2),
      mockContentfulEntry(3),
    ];

    it('should map contentful entries using cursor', () => {
      const entries = appendSiblingsToContext(
        stubWithContentful,
      );
      expect(entries[0]).toMatchObject({
        prev: 3,
        next: 2,
      });
      expect(entries[2]).toMatchObject({
        prev: 2,
        next: 1,
      });
    });
  });
});

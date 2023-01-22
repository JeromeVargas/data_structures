import LinkedList from "./singlyLinkedList";

describe("#insertedAtHead", () => {
  it("adds the element at the beginning of the list", () => {
    // inputs
    const ll = new LinkedList();
    ll.insertAtHead(100);
    const oldHead = ll.head;
    ll.insertAtHead(200);

    // assertions
    expect(ll.head.value).toBe(200);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#removeHead", () => {
  describe("with values", () => {
    it("should remove the head", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200, 300);
      ll.removeHead();

      // assertions
      expect(ll.head.value).toBe(200);
      expect(ll.length).toBe(2);
    });
  });
  describe("without values", () => {
    it("should return null", () => {
      // inputs
      const ll = LinkedList.fromValues();
      ll.removeHead();

      // assertions
      expect(ll.head).toBe(null);
      expect(ll.length).toBe(0);
    });
  });
});

describe("#getByIndex", () => {
  describe("with index less than 0", () => {
    it("should return null", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);

      // assertions
      expect(ll.getByIndex(-1)).toBeNull();
    });
  });
  describe("with index greater than list length", () => {
    it("should return null", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);

      // assertions
      expect(ll.getByIndex(3)).toBeNull();
    });
  });
  describe("with index 0", () => {
    it("should return the head", () => {
      // inputs
      const ll = LinkedList.fromValues(10, 20);

      // assertions
      expect(ll.getByIndex(0).value).toBe(10);
    });
  });
  describe("with index in the middle", () => {
    it("should return the element at the index", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200, 300, 400);

      // assertions
      expect(ll.getByIndex(2).value).toBe(300);
    });
  });
});

describe("#insertAtIndex", () => {
  describe("with index less than 0", () => {
    it("should not insert anything", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);
      ll.insertAtIndex(-1, 300);

      // assertions
      expect(ll.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    it("should not insert anything", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);
      ll.insertAtIndex(3, 300);

      // assertions
      expect(ll.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    it("should insert at the head", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);
      ll.insertAtIndex(0, 300);

      // assertions
      expect(ll.head.value).toBe(300);
      expect(ll.head.next.value).toBe(100);
      expect(ll.length).toBe(3);
    });
  });
  describe("with index in the middle", () => {
    it("should insert at the given index", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200, 400, 500);
      ll.insertAtIndex(2, 300);
      const node = ll.getByIndex(2);

      // assertions
      expect(node.value).toBe(300);
      expect(node.next.value).toBe(400);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removeAtIndex", () => {
  describe("with index less than 0", () => {
    it("should not remove anything", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);
      ll.removeAtIndex(-1);

      // assertions
      expect(ll.length).toBe(2);
    });
  });
  describe("with index greater than list length", () => {
    it("should not remove anything", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200);
      ll.removeAtIndex(2);

      // assertions
      expect(ll.length).toBe(2);
    });
  });
  describe("with index 0", () => {
    it("should remove at the head", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200, 300);
      ll.removeAtIndex(0);

      // assertions
      expect(ll.head.value).toBe(200);
      expect(ll.head.next.value).toBe(300);
      expect(ll.length).toBe(2);
    });
  });
  describe("with index in the middle", () => {
    it("should remove at the given index", () => {
      // inputs
      const ll = LinkedList.fromValues(100, 200, 400, 500);
      ll.removeAtIndex(1);
      const node = ll.getByIndex(1);

      // assertions
      expect(node.value).toBe(400);
      expect(node.next.value).toBe(500);
      expect(ll.length).toBe(3);
    });
  });
});

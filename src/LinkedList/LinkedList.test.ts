import { describe, test, expect } from "vitest";
import { LinkedList } from "./LinkedList.ts";

describe("#insertAtHead", () => {
  test("it adds the element to the beginning of the list", () => {
    const ll = new LinkedList<number>();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head?.value).toBe(20);
    expect(ll.head?.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe("#getByIndex", () => {
  describe("when index is less than 0", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe("when index is greater than list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe("when index is 0", () => {
    test("it returns the head", () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0)?.value).toBe(10);
    });
  });

  describe("when index is in the middle", () => {
    test("it returns the value in the middle", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2)?.value).toBe(30);
    });
  });
});

describe("insertAtIndex", () => {
  describe("when index is less than 0", () => {
    test("it does not return anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe("with the index is greater than the list length", () => {
    test("it returns null", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe("when index is 0", () => {
    test("it inserts at the head", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);

      expect(ll.head?.value).toBe(30);
      expect(ll.head?.next?.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe("when index is in the middle", () => {
    test("it inserts the value at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node?.value).toBe(50);
      expect(node?.next?.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe("#removesHead", () => {
  test("it removes the element to the beginning of the list", () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head?.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe("removesAtIndex", () => {
  describe("when index is less than 0", () => {
    test("it does not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe("with the index is greater than the list length", () => {
    test("it does not remove anything", () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe("when index is 0", () => {
    test("it removes the head", () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);

      expect(ll.head?.value).toBe(20);
      expect(ll.head?.next?.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe("when index is in the middle", () => {
    test("it removes the value at the given index", () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node?.value).toBe(20);
      expect(node?.next?.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});

/**
 * 迭代器模式
 */

namespace Iterator{
  interface Iterator<T> {
    hasNext(): Boolean
    next(): void
    currentItem(): T
  }
  class ArrayIterator<T> implements Iterator<T> {
    private cursor: number;
    private array: Array<T> ;
    constructor(array: Array<T> ) {
      this.cursor = 0
      this.array = array
    }
    hasNext() {
      return this.cursor < this.array.length // cursor 指向最后一个元素时，依旧为 true
    }
    next() {
      this.cursor++;
    }
    currentItem() {
      return this.array[this.cursor]
    }
  }


  interface List<T> {
    iterator(): Iterator<T>;
    // ...
  }
  class ArrayList<T> implements List<T>{
    private array: Array<T>;
    constructor(a: Array<T>) {
      this.array = a
    }
    iterator() {
      return new ArrayIterator<T>(this.array);
    }
  }

  const a = new ArrayList(['a', 'b', 'c']);
  const iterator = a.iterator();
  while(iterator.hasNext()) {
    console.log(iterator.currentItem());
    iterator.next()
  }
}
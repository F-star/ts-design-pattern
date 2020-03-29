/**
 * 模板模式
 * 
 */


namespace templateMethod {
  abstract class abstractClass {
    // @final 该方法不能被实现类重写
    templateMethod(): void {
      // ...
      this.method1();
      //...
      this.method2();
      // ...
    }
    abstract method1(): void
    abstract method2(): void
  }

  class concreteClassA extends abstractClass {
    method1() {
      console.log('实现类A：执行方法1');
    }
    method2() {
      console.log('实现类A：执行方法2');
    }
  }

  class concreteClassB extends abstractClass {
    method1() {
      console.log('实现类B：执行方法1');
    }
    method2() {
      console.log('实现类B：执行方法2');
    }
  }

  new concreteClassA().templateMethod();
  new concreteClassB().templateMethod();
}

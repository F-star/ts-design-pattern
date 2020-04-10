/**
 * 代理模式
 */
namespace proxy {
  interface Subject {
    methodA(): void;
    methodB(): void;
  }

  class RealSubject implements Subject {
    methodA(): void {
      console.log('被代理对象：执行方法A');
    }
    methodB(): void {
      console.log('被代理对象：执行方法B');
    }
  }

  class Proxy implements Subject {
    private realSubject: RealSubject;
    constructor(realSubject: RealSubject) {
      this.realSubject = realSubject; // 依赖注入
    }
    methodA(): void {
      console.log('代理：执行方法A对应的代理操作');
      // 委托
      this.realSubject.methodA();
    }
    methodB(): void {
      console.log('代理：执行方法A对应的代理操作');
      // 委托
      this.realSubject.methodB();
    }
  }

  // 测试
  const proxy = new Proxy(new RealSubject());
  proxy.methodA();
  proxy.methodB();
}
/**
 * 职责链模式（链表存储处理器）
 * 
 */

namespace chainOfResponsibilityByArray {
  /** 
   * 处理器抽象类
   */
  interface IHandler {
    handle(content: number): Boolean
  }

  class HandlerA implements IHandler {
    public handle(content: number): Boolean {
      let handled: Boolean = false;
      if (content < 9) {
        console.log('小于9，处理器 A 处理对象');
        // 数据处理代码
        handled = true;
      }
      return handled;
    }
  }
  class HandlerB implements IHandler {
    public handle(content: number): Boolean {
      let handled: Boolean = false;
      if (content < 100 && content >= 9) {
        console.log('大于等于9，小于100，处理器 B 处理对象');
        // 数据处理代码
        handled = true
      }
      return handled;
    }
  }
  // 处理器链
  class HandlerChain {
    private handlers: IHandler[] = [];
    public addHandler(handler: IHandler) {
      this.handlers.push(handler);
    }
    public handle(content: number): void {
      for (let i = 0; i < this.handlers.length; i++) {
        const handled = this.handlers[i].handle(content);
        if (handled) return;
      }
    }
  }
  // 使用举例
  class Application {
    constructor() {
      const handlerChain: HandlerChain = new HandlerChain();
      handlerChain.addHandler(new HandlerA());
      handlerChain.addHandler(new HandlerB());
      handlerChain.handle(18)
    }
  }

  new Application()
}

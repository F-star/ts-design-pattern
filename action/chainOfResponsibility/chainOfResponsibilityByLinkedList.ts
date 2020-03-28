/**
 * 职责链模式（基于链表存储处理器）
 * 
 */


namespace ChainOfResponsibilityByLinkedList{
  /** 
   * 处理器抽象类
   */
  abstract class Handler {
    private successor: Handler = null;
    setSuccessor(successor: Handler): void {
      this.successor = successor;
    }
    // 该方法不允许被重写，因为 ts 不支持 final 关键字，只能靠程序员的自觉
    // @final
    public handle(content: number) {
      const handled: Boolean = this.doHandle(content);
      if (!handled && this.successor) {
        this.successor.handle(content)
      }
    }
    public abstract doHandle(content: number): Boolean
  }
  
  class HandlerA extends Handler{
    public doHandle(content: number): Boolean {
      let handled: Boolean = false;
      if (content < 9) {
        console.log('小于9，处理器 A 处理对象');
        // 数据处理代码
        handled = true
      } 
      return handled;
    }
  }
  class HandlerB extends Handler{
    public doHandle(content: number): Boolean {
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
    private head: Handler = null;
    private tail: Handler = null;
    public addHandler(handler: Handler): void {
      if (this.tail === null) {
        this.head = this.tail = handler;
        return;
      }
      this.tail.setSuccessor(handler);
      this.tail = handler;
    }
    public handle(content: number): void {
      if (this.head !== null) {
        this.head.handle(content)
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
  // 将请求的发送和接收解耦，依次传递给一个处理对象链的多个对象进行处理，知道找到能能处理该请求的对象，处理后结束停止传递
}

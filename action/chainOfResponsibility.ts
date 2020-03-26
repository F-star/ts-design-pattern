/**
 * 职责链模式
 * 
 */

/** 
 * 处理器抽象类
 */
abstract class Handle {
  private successor: Handle = null;
  setSuccessor(Handle successor) {
    this.successor = successor;
  }
}
// 处理器链
class HandlerChain {

}

// 使用举例
class Application {

}
/**
 * 状态模式
 */
/**
 * 需要实现的状态转换表如下
 * （举例：在状态 A 时，触发 actionA 时。状态变为 stateB，并且分数加 100。/ 表示无事发生）
 *              stateA           stateB        stateC
 * steateA        /          actionA(+100)  actionB(+200)
 * steateB    actionC(-100)       /             /
 * steateC    actionC(-200)  actionA(+0)        /
 */

namespace state {
  abstract class AbstractState {
    abstract getState(): string
    actionA(): void {}
    actionB(): void {}
    actionC(): void {}
  }
}
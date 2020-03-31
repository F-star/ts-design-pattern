/**
 * 状态模式
 */
/**
 * 需要实现的状态转换表如下
 * 举例：在状态 A （纵向为当前状态）时，触发 actionA 时。状态变为 stateB，并且分数加 100。/ 表示无事发生
 *              stateA           stateB        stateC
 * steateA        /          actionA(+100)  actionB(+200)
 * steateB    actionC(-100)       /             /
 * steateC    actionC(-200)  actionA(+0)        /
 */

namespace state {
  enum EnumState{
    A,
    B,
    C
  }
  // 状态抽象类
  abstract class State {
    abstract getState(): EnumState
    actionA(): void {}
    actionB(): void {}
    actionC(): void {}
  }
  class StateA extends State{
    private stateMachine: StateMachine = null;
    constructor(stateMachine: StateMachine) {
      super()
      this.stateMachine = stateMachine
    }
    getState(): EnumState {
      return EnumState.A
    }
    actionA() {
      const stateMachine = this.stateMachine;
      stateMachine.setState(new StateB(stateMachine));
      stateMachine.setScore(stateMachine.getScore() + 100);
    }
    actionB() {
      const stateMachine = this.stateMachine;
      stateMachine.setState(new StateC(stateMachine));
      stateMachine.setScore(stateMachine.getScore() + 200);
    }
  }
  class StateB extends State{
    private stateMachine: StateMachine = null;
    constructor(stateMachine: StateMachine) {
      super()
      this.stateMachine = stateMachine
    }
    getState(): EnumState {
      return EnumState.B;
    }
    actionC() {
      const stateMachine = this.stateMachine;
      stateMachine.setState(new StateA(stateMachine));
      stateMachine.setScore(stateMachine.getScore() - 100);
    }
  }
  class StateC extends State{
    private stateMachine: StateMachine = null;
    constructor(stateMachine: StateMachine) {
      super()
      this.stateMachine = stateMachine
    }
    getState(): EnumState {
      return EnumState.A
    }
    actionA() {
      const stateMachine = this.stateMachine;
      stateMachine.setState(new StateB(this.stateMachine))
    }
    actionC() {
      const stateMachine = this.stateMachine;
      stateMachine.setState(new StateB(stateMachine))
      stateMachine.setScore(stateMachine.getScore() - 200);
    }
  }
  /**
   * 状态机
   */
  class StateMachine {
    private currentState: State = null;
    private score = 0;
    constructor() {
      this.currentState = new StateA(this)
    }
    actionA() {
      this.currentState.actionA()
    }
    actionB() {
      this.currentState.actionB()
    }
    actionC() {
      this.currentState.actionC()
    }
    getState() {
      return this.currentState.getState()
    }
    setState(state: State) {
      this.currentState = state;
    }
    getScore(): number {
      return this.score;
    }
    setScore(score: number): void {
      this.score = score
    }
  }

  const s = new StateMachine();
  s.actionB()
  console.log('currentState:', EnumState[s.getState()]);
  console.log('score:', s.getScore());
}
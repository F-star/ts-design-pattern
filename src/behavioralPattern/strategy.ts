/**
 * 策略模式
 */

namespace strategy {
  interface Strategy {
    algorithmInterface(): void;
  }

  class ConcreteStrategyA implements Strategy {
    algorithmInterface() {
      console.log('使用了策略A');
    }
  }

  class StrategyFactory {
    private static readonly strategies = {
      A: new ConcreteStrategyA()
    }
    static getStrategy(type: string): Strategy {
      if (type == null || type === '') throw Error('type should not be empty.');
      return this.strategies[type]
    }
  }

  // 使用示例
  // 文件解析类：FileResolver，解析完文件后，会返回文件名的后缀字符串。
  // const type: String = FileResolver.resolver(fileName);
  // const strategy: Strategy = StrategyFactory.getStrategy(type);
}
/**
 * 观察者模式
 */

namespace observer {
  class Message {
    constructor(public data: string) {}
  }
  interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(message: Message): void;
  }
  interface Observer {
    update(message: Message): void;
  }

  class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    registerObserver(observer: Observer) {
      this.observers.push(observer);
    }
    removeObserver(observer: Observer) {
      this.observers = this.observers.filter(item => item !== observer);
    }
    notifyObservers(message: Message) {
      this.observers.forEach(observer => {
        observer.update(message);
      })
    }
  }

  class ConcreteObserverA implements Observer {
    update(message: Message) {
      console.log('A 接收消息：', message.data)
    }
  }

  // 测试
  const subject = new ConcreteSubject();
  subject.registerObserver(new ConcreteObserverA());
  subject.notifyObservers(new Message('消息内容'))
}
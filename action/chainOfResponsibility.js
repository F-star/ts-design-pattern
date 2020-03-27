/**
 * 职责链模式（链表存储处理器）
 *
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 处理器抽象类
 */
var Handler = /** @class */ (function () {
    function Handler() {
        this.successor = null;
    }
    Handler.prototype.setSuccessor = function (successor) {
        this.successor = successor;
    };
    // 该方法不允许被重写，因为 ts 不支持 final 关键字，只能靠程序员的自觉
    Handler.prototype.handle = function (content) {
        var handled = this.doHandle(content);
        if (!handled && this.successor) {
            this.successor.handle(content);
        }
    };
    return Handler;
}());
var HandlerA = /** @class */ (function (_super) {
    __extends(HandlerA, _super);
    function HandlerA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandlerA.prototype.doHandle = function (content) {
        if (content < 9) {
            console.log('小于9，处理器 A 处理对象');
            // 数据处理代码
            return true;
        }
        else {
            return false;
        }
    };
    return HandlerA;
}(Handler));
var HandlerB = /** @class */ (function (_super) {
    __extends(HandlerB, _super);
    function HandlerB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HandlerB.prototype.doHandle = function (content) {
        if (content < 100 && content >= 9) {
            console.log('大于等于9，小于100，处理器 B 处理对象');
            // 数据处理代码
            return true;
        }
        else {
            return false;
        }
    };
    return HandlerB;
}(Handler));
// 处理器链
var HandlerChain = /** @class */ (function () {
    function HandlerChain() {
        this.head = null;
        this.tail = null;
    }
    HandlerChain.prototype.addHandler = function (handler) {
        if (this.tail === null) {
            this.head = this.tail = handler;
            return;
        }
        this.tail.setSuccessor(handler);
        this.tail = handler;
    };
    HandlerChain.prototype.handle = function (content) {
        if (this.head !== null) {
            this.head.handle(content);
        }
    };
    return HandlerChain;
}());
// 使用举例
var Application = /** @class */ (function () {
    function Application() {
        var handlerChain = new HandlerChain();
        handlerChain.addHandler(new HandlerA());
        handlerChain.addHandler(new HandlerB());
        handlerChain.handle(18);
    }
    return Application;
}());
new Application();
// 将请求的发送和接收解耦，依次传递给一个处理对象链的多个对象进行处理，知道找到能能处理该请求的对象，处理后结束停止传递

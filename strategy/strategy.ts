// định nghĩa một họ các thuật toán, đóng gói mỗi thuật toán đó và làm cho chúng có khả năng thay đổi dễ dàng.
// Strategy cho phép giả thuật tùy biến một cách độc lập tại các Client sử dụng nó


//code dễ thay đổi  --> tách ra 
// tránh thực hiện 1 chức năng nào đó qua quá nhiều lớp con


//Context được tạo bởi Strategy. Phần Context có thể có bất cứ thứ gì khi nó yêu cầu thay đổi hành vi. Strategy đơn giản là interface,
// vì thế chúng ta có thể hoán đổi các thuật toán ConreteStrategy 
//mà không ảnh hưởng tới Context.
namespace StrategyPattern {
    export interface Strategy {
        execute(): void;
    }

    export class ConcreteStrategy1 implements Strategy {
        public execute(): void {
            console.log("`execute` method of ConcreteStrategy1 is being called");
        }
    }

    export class ConcreteStrategy2 implements Strategy {
        public execute(): void {
            console.log("`execute` method of ConcreteStrategy2 is being called");
        }
    }

    export class ConcreteStrategy3 implements Strategy {
        public execute(): void {
            console.log("`execute` method of ConcreteStrategy3 is being called");
        }
    }

    export class Context {
        private strategy: Strategy;

        constructor(strategy: Strategy) {
            this.strategy = strategy;
        }

        public executeStrategy(): void {
            this.strategy.execute();
        }
    }
}

namespace StrategyPattern {
	export namespace Demo {

		export function show() : void {
		    var context: StrategyPattern.Context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy1());

			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2());
			context.executeStrategy();

			context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy3());
			context.executeStrategy();


		}
    }
    Demo.show();
}

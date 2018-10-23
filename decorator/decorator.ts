//giúp mở rộng tốt hơn : gọi operation class 1--> 2-->3
//https://viblo.asia/p/hieu-biet-co-ban-ve-decorator-pattern-pVYRPjbVG4ng
namespace DecoratorPattern {

    export interface Component {
        operation(): void;
    }

    export class ConcreteComponent implements Component {
        private s: String;

        constructor(s: String) {
            this.s = s;
        }

        public operation(): void {
            console.log("`operation` of ConcreteComponent", this.s, " is being called!");
        }
    }

    export class Decorator implements Component {
        private component: Component;
        private id: Number;

        constructor(id: Number, component: Component) {
            this.id = id;
            this.component = component;
        }

        public get Id(): Number {
            return this.id;
        }

        public operation(): void {
            console.log("`operation` of Decorator", this.id, " is being called!");
            this.component.operation();
        }
    }

    export class ConcreteDecorator extends Decorator {
        constructor(id: Number, component: Component) {
            super(id, component);
        }

        public operation(): void {
            super.operation();
            console.log("`operation` of ConcreteDecorator", this.Id, " is being called!");
        }
    }
}



namespace DecoratorPattern {
	export namespace Demo {

		export function show() : void {
			var decorator1: DecoratorPattern.Decorator = new DecoratorPattern.ConcreteDecorator(1, new DecoratorPattern.ConcreteComponent("Comp1"));

			decorator1.operation();
		}
    }
    Demo.show();
}
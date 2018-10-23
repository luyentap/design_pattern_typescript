//dữ liệu lớn, tốn nhìu bộ nhớ

//factory: map : nếu key == null mới khởi tạo

namespace FlyweightPattern {

    export interface Flyweight {
        operation(s: String): void;
    }

    export class ConcreteFlyweight implements Flyweight {
        private instrinsicState: String;

        constructor(instrinsicState: String) {
            this.instrinsicState = instrinsicState;
        }

        public operation(s: String): void {
            console.log("`operation` of ConcreteFlyweight", s, " is being called!");
        }
    }

    export class UnsharedConcreteFlyweight implements Flyweight {
        private allState: number;

        constructor(allState: number) {
            this.allState = allState;
        }

        public operation(s: String): void {
            console.log("`operation` of UnsharedConcreteFlyweight", s, " is being called!");
        }
    }

    export class FlyweightFactory {

        private fliesMap: { [s: string]: Flyweight; } = <any>{};

        constructor() { }

        public getFlyweight(key: string): Flyweight {

            if (this.fliesMap[key] === undefined || null) {
                this.fliesMap[key] = new ConcreteFlyweight(key);
            }
            return this.fliesMap[key];
        }
    }
}


namespace FlyweightPattern {
	export namespace Demo {
		export function show() : void {
		    var factory: FlyweightPattern.FlyweightFactory   = new FlyweightPattern.FlyweightFactory(),

			conc1: FlyweightPattern.ConcreteFlyweight    = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc1"),
			conc2: FlyweightPattern.ConcreteFlyweight    = <FlyweightPattern.ConcreteFlyweight>factory.getFlyweight("conc2");

			conc1.operation("1");
			conc2.operation("2");
		}
    }
    Demo.show();
}


//https://stackjava.com/design-pattern/composite-pattern.html
//Nó là kỹ thuật được thiết kế cho phép bạn xử lý nhiều đối tượng khác chủng loại trong cùng một tập hợp theo cùng một cách.
//component, composite, leaf


namespace CompositePattern {
    export interface Component {
        operation(): void;
    }

    export class Composite implements Component {

        private list: Component[];
        private s: String;

        constructor(s: String) {
            this.list = [];
            this.s = s;
        }

        public operation(): void {
            console.log("`operation of `", this.s)
            for (var i = 0; i < this.list.length; i += 1) {
                this.list[i].operation();
            }
        }

        public add(c: Component): void {
            this.list.push(c);
        }

        public remove(i: number): void {
            if (this.list.length <= i) {
                throw new Error("index out of bound!");
            }
            this.list.splice(i, 1);
        }
    }

    export class Leaf implements Component {
        private s: String;
        constructor(s: String) {
            this.s = s;
        }
        public operation(): void {
            console.log("`operation` of Leaf", this.s, " is called.");
        }
    }
}

namespace CompositePattern {
	export namespace Demo {
		export function show() : void {
		    var leaf1 = new CompositePattern.Leaf("1"),
				leaf2 = new CompositePattern.Leaf("2"),
				leaf3 = new CompositePattern.Leaf("3"),

			composite1 = new CompositePattern.Composite("Comp1"),
			composite2 = new CompositePattern.Composite("Comp2");

			composite1.add(leaf1);
			composite1.add(leaf2);
			composite1.add(leaf3);

			composite1.remove(2);

			composite2.add(leaf1);
			composite2.add(leaf3);

			composite1.operation();
			composite2.operation();
		}
    }
    Demo.show();
}

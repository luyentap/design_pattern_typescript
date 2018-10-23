//cho phép định nghĩa các thao tác(operations) trên một tập hợp các đối tượng (objects) không đồng nhất (về kiểu) mà không làm thay đổi định nghĩa về lớp(classes) của các đối tượng đó. 
//Để đạt được điều này, trong mẩu thiết kế visitor ta định nghĩa các thao tác trên các lớp tách biệt gọi các lớp visitors, 
//các lớp này cho phép tách rời các thao tác với các đối tượng mà nó tác động đến. 
//Với mỗi thao tác được thêm vào,
// một lớp visitor tương ứng được tạo ra.

namespace VisitorPattern {
    export interface Visitor {
        visitConcreteElement1(concreteElement1: ConcreteElement1): void;
        visitConcreteElement2(concreteElement2: ConcreteElement2): void;
    }

    export class ConcreteVisitor1 implements Visitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("`visitConcreteElement1` of ConcreteVisitor1 is being called!");
        }

        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("`visitConcreteElement2` of ConcreteVisitor1 is being called!");
        }
    }

    export class ConcreteVisitor2 implements Visitor {
        public visitConcreteElement1(concreteElement1: ConcreteElement1): void {
            console.log("`visitConcreteElement1` of ConcreteVisitor2 is being called!");
        }

        public visitConcreteElement2(concreteElement2: ConcreteElement2): void {
            console.log("`visitConcreteElement2` of ConcreteVisitor2 is being called!");
        }
    }


    export interface Element {
        operate(visitor: Visitor): void;
    }

    export class ConcreteElement1 implements Element {
        public operate(visitor: Visitor): void {
            console.log("`operate` of ConcreteElement1 is being called!");
            visitor.visitConcreteElement1(this);
        }
    }

    export class ConcreteElement2 implements Element {
        public operate(visitor: Visitor): void {
            console.log("`operate` of ConcreteElement2 is being called!");
            visitor.visitConcreteElement2(this);
        }
    }

    export class Objs {
        private elements: Element[] = [];

        public attach(e: Element): void {
            this.elements.push(e);
        }

        public detach(e: Element): void {
            var index = this.elements.indexOf(e);
            this.elements.splice(index, 1);
        }

        public operate(visitor: Visitor): void {
            var i = 0,
                max = this.elements.length;

            for(; i < max; i += 1) {
                this.elements[i].operate(visitor);
            }
        }
    }

}

namespace VisitorPattern {
	export namespace Demo {

		export function show() : void {
		    var objs: VisitorPattern.Objs = new VisitorPattern.Objs();

			objs.attach(new VisitorPattern.ConcreteElement1());
			objs.attach(new VisitorPattern.ConcreteElement2());

			var v1: VisitorPattern.ConcreteVisitor1 = new VisitorPattern.ConcreteVisitor1(),
				v2: VisitorPattern.ConcreteVisitor2 = new VisitorPattern.ConcreteVisitor2();

			objs.operate(v1);
			objs.operate(v2);

		}
    }
    Demo.show();
}

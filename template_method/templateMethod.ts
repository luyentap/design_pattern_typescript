//Mãu Template method định nghĩa một bộ khung của một thuật toán trong một chức năng, chuyển giao việc thực hiện nó cho các lớp con.
// Mẫu Template Method cho phép lớp con định nghĩa lại cách thực hiện của một thuật toán, mà không phải thay đổi cấu trúc thuật toán
namespace TemplateMethodPattern {
    export class AbstractClass {
        public method1(): void {
            throw new Error("Abstract Method");
        }

        public method2(): void {
            throw new Error("Abstract Method");
        }

        public method3(): void {
            throw new Error("Abstract Method");
        }

        public templateMethod(): void {
            console.log("templateMethod is being called");
            this.method1();
            this.method2();
            this.method3();
        }
    }

    export class ConcreteClass1 extends AbstractClass {
        public method1(): void {
            console.log("method1 of ConcreteClass1");
        }

        public method2(): void {
            console.log("method2 of ConcreteClass1");
        }

        public method3(): void {
            console.log("method3 of ConcreteClass1");
        }
    }

    export class ConcreteClass2 extends AbstractClass {
        public method1(): void {
            console.log("method1 of ConcreteClass2");
        }

        public method2(): void {
            console.log("method2 of ConcreteClass2");
        }

        public method3(): void {
            console.log("method3 of ConcreteClass2");
        }
    }
}


namespace TemplateMethodPattern {
	export namespace Demo {

		export function show() : void {
			var c1: TemplateMethodPattern.ConcreteClass1 = new TemplateMethodPattern.ConcreteClass1(),
				c2: TemplateMethodPattern.ConcreteClass2 = new TemplateMethodPattern.ConcreteClass2();

			c1.templateMethod();
			c2.templateMethod();

		}
    }
    Demo.show();
}

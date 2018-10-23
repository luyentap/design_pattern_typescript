//Định nghĩa một giao diện (interface) cho việc tạo một đối tượng, nhưng để các lớp con quyết định lớp nào sẽ được tạo. 
//"Factory method" giao việc khởi tạo một đối tượng cụ thể cho lớp con

namespace FactoryMethodPattern {

    export interface AbstractProduct {
        method(param?: any) : void;
    }

    export class ConcreteProductA implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductA";
        }
    }

    export class ConcreteProductB implements AbstractProduct {
        method = (param?: any) => {
            return "Method of ConcreteProductB";
        }
    }


    export namespace ProductFactory {
        export function createProduct(type: string) : AbstractProduct {
            if (type === "A") {
                return new ConcreteProductA();
            } else if (type === "B") {
                return new ConcreteProductB();
            }

            return null;
        }
    }
}

namespace FactoryMethodPattern {
	export namespace Demo {
		export function show() : void {
		    var a: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("A");
		    var b: FactoryMethodPattern.AbstractProduct = FactoryMethodPattern.ProductFactory.createProduct("B");

		    console.log(a.method());
		    console.log(b.method());
		};
    }
    Demo.show();
}


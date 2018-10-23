// duyệt mảng(iterator): list, map,...
//hasNext()
// nó cung cấp một cách để truy cập những phần tử của một tập các đối tượng một cách tuần tự mà không làm lộ các cách thức thể hiện của chúng.

//Cũng có thể hiểu là: Iterator được thiết kế để giúp bạn xử lý nhiều loại tập hợp khác nhau bằng cách truy cập những phần tử của tập hợp theo cùng một phương pháp, cùng một cách thức định sẵn, mà không cần phải hiểu rõ về những chi tiết bên trong của những tập hợp này



namespace IteratorPattern {
    export interface Iterator {

        next(): any;
        hasNext(): boolean;
    }

    export interface Aggregator {
        createIterator(): Iterator;
    }

    export class ConcreteIterator implements Iterator {
        private collection: any[] = [];
        private position: number = 0;

        constructor(collection: any[]) {
            this.collection = collection;
        }

        public next(): any {
            // Error handling is left out
            var result = this.collection[this.position];
            this.position += 1;
            return result;
        }

        public hasNext(): boolean {
            return this.position < this.collection.length;
        }
    }

    export class Numbers implements Aggregator {
        private collection: number[] = [];

        constructor(collection: number[]) {
            this.collection = collection;
        }
        public createIterator(): Iterator {
            return new ConcreteIterator(this.collection);
        }
    }
}

namespace IteratorPattern {
	export namespace Demo {

		export function show() : void {
		    var nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65],
				numbers: IteratorPattern.Numbers = new IteratorPattern.Numbers(nArray),
				it: IteratorPattern.ConcreteIterator = <IteratorPattern.ConcreteIterator>numbers.createIterator();

			while (it.hasNext()) {
				console.log(it.next());
			}

		}
    }
    Demo.show();
}

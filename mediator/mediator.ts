//(mô hình trung gian) được sử dụng để giảm sự phức tạp trong "giao tiếp" giữa các lớp và các đối tượng.
// Mô hình này cung cấp một lớp trung gian có nhiệm vụ xử lý thông tin liên lạc giữa các tầng lớp,
// hỗ trợ bảo trì mã code dễ dàng bằng cách khớp nối lỏng lẻo.
namespace MediatorPattern {
    //Mediator để xác định các interface giao tiếp giữa các đối tượng tương đồng.
    export interface Mediator {
        send(msg: string, colleague: Colleague): void;
    }

    //Thông qua Mediator để giao tiếp với các đối tượng khác.
    export class Colleague {
        public mediator: Mediator;

        constructor(mediator: Mediator) {
            this.mediator = mediator;
        }

        public send(msg: string): void {
            throw new Error("Abstract Method!");
        }

        public receive(msg: string): void {
            throw new Error("Abstract Method!");
        }
    }

    export class ConcreteColleagueA extends Colleague {
        constructor(mediator: Mediator) {
            super(mediator);
        }

        public send(msg: string): void {
            this.mediator.send(msg, this);
        }

        public receive(msg: string): void {
            console.log(msg, "`receive` of ConcreteColleagueA is being called!");
        }
    }

    export class ConcreteColleagueB extends Colleague {
        constructor(mediator: Mediator) {
            super(mediator);
        }

        public send(msg: string): void {
            this.mediator.send(msg, this);
        }

        public receive(msg: string): void {
            console.log(msg, "`receive` of ConcreteColleagueB is being called!");
        }
    }
//hực hiện interface giao tiếp từ Mediator, để điều chỉnh các thông tin liên lạc giữa các đối tượng . Thông báo cho các đối tượng tương đồng đang tồn tại, biết về mục đích giao tiếp.
    export class ConcreteMediator implements Mediator {
        public concreteColleagueA: ConcreteColleagueA;
        public concreteColleagueB: ConcreteColleagueB;

        public send(msg: string, colleague: Colleague): void {
            if (this.concreteColleagueA === colleague) {
                this.concreteColleagueB.receive(msg);
            } else {
                this.concreteColleagueA.receive(msg);
            }
        }
    }
}



namespace MediatorPattern {
	export namespace Demo {

		export function show() : void {
			var cm: MediatorPattern.ConcreteMediator = new MediatorPattern.ConcreteMediator(),
				c1: MediatorPattern.ConcreteColleagueA = new MediatorPattern.ConcreteColleagueA(cm),
				c2: MediatorPattern.ConcreteColleagueB = new MediatorPattern.ConcreteColleagueB(cm);

			cm.concreteColleagueA = c1;
			cm.concreteColleagueB = c2;

			c1.send("`send` of ConcreteColleagueA is being called!");
			c2.send("`send` of ConcreteColleagueB is being called!");

		}
    }
    
    Demo.show();
}

//che đi mã phức tạp bên trong --> chỉ quan tâm nó trả về, chức năng gì
//(Bao bọc một hệ thống con phức tạp với một giao diện đơn giản)


//một dạng thức ngoài mặt là một đối tượng mà đối tượng này cung cấp một giao diện (interface) đơn giản để che đi phần mã phức tạp bên trong, ví dụ như là một thư viện lớp (class library ). Một dạng thức ngoài mặt có thể:
// Giúp cho một thư viện phần mềm trở nên đơn giản hơn trong việc sử dụng và trong việc hiểu nó, vì dạng thức ngoài mặt có các phương thức tiện lợi cho các tác vụ chung;
// Giúp cho các đoạn mã có sử dụng thư viện trở nên dễ đọc hơn, cũng lý do như trên;
// Giảm sự phụ thuộc của các khối mã bên ngoài với hiện thực bên trong của thư viện, vì hầu hết các khối mã đều dùng dạng thức ngoài mặt, vì thế cho phép sự linh động trong phát triển các hệ thống;
// Đóng gói tập các hàm API được thiết kế không tốt bằng một hàm API đơn có thiết kế tốt.

namespace FacadePattern {

    export class Part1 {
        public method1(): void {
            console.log("`method1` of Part1");
        }
    }

    export class Part2 {
        public method2(): void {
            console.log("`method2` of Part2");
        }
    }

    export class Part3 {
        public method3(): void {
            console.log("`method3` of Part3");
        }
    }

    export class Facade {
        private part1: Part1 = new Part1();
        private part2: Part2 = new Part2();
        private part3: Part3 = new Part3();

        public operation1(): void {
            console.log("`operation1` is called ===");
            this.part1.method1();
            this.part2.method2();
            console.log("==========================");
        }

        public operation2(): void {
            console.log("`operation2` is called ===");
            this.part1.method1();
            this.part3.method3();
            console.log("==========================");
        }
    }
}
namespace FacadePattern {
	export namespace Demo {
		export function show() : void {
		    var facade: FacadePattern.Facade = new FacadePattern.Facade();

			facade.operation1();

			facade.operation2();
		}
    }
    
    Demo.show();
}
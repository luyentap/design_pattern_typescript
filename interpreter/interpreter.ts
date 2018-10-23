// thông dịch
//Xây dựng một kiến trúc ngữ pháp cho một ngôn ngữ.
//– Dựa vào kiến trúc này, một chương trình thông dịch có thể hiểu được ý nghĩa của những câu lệnh được viết bằng ngôn ngữ đó.

// dòng lệnh (command) theo một cấu trúc xác định do ta quy định sẵn, chương trình sẽ nhận dạng Command dựa vào cấu trúc của nó và trả về kết quả phù hợp.



namespace InterpreterPattern {
    export class Context {
    }

    export interface AbstractExpression {
        interpret(context: Context): void;
    }

    export class TerminalExpression implements AbstractExpression {
        public interpret(context: Context): void {
            console.log("`interpret` method of TerminalExpression is being called!");
        }
    }

    export class NonterminalExpression implements AbstractExpression {

        public interpret(context: Context): void {
            console.log("`interpret` method of NonterminalExpression is being called!");
        }
    }
}


namespace InterpreterPattern {
	export namespace Demo {

		export function show() : void {
			var context: InterpreterPattern.Context = new InterpreterPattern.Context(),
				list = [],
				i = 0,
				max;

			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.NonterminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());
			list.push(new InterpreterPattern.TerminalExpression());

			for (i = 0, max = list.length; i < max; i += 1) {
				list[i].interpret(context);
			}


		}
    }
    Demo.show();
}

namespace AdapterPattern {

    export class Adaptee {
        public method(): void {
            console.log("`method` of Adaptee is being called");
        }
    }

    export interface Target {
        call(): void;
    }

    export class Adapter implements Target {
        public call(): void {
            console.log("Adapter's `call` method is being called");
            var adaptee: Adaptee = new Adaptee();
            adaptee.method();
        }
    }
    export namespace Demo {

        export function show() : void {
            var adapter: AdapterPattern.Adapter = new AdapterPattern.Adapter();
            adapter.call();
        }

        show();
    }


}

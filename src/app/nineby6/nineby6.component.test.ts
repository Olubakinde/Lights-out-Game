import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby6Component } from "./nineby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby6Component>(Nineby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby6Component);
        });
    });
});

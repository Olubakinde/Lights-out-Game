import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby7Component } from "./nineby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby7Component>(Nineby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby7Component);
        });
    });
});

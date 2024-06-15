import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby7Component } from "./fiveby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby7Component>(Fiveby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby7Component);
        });
    });
});

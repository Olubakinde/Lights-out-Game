import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby7Component } from "./threeby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby7Component>(Threeby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby7Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby8Component } from "./threeby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby8Component>(Threeby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby8Component);
        });
    });
});

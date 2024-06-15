import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby8Component } from "./fiveby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby8Component>(Fiveby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby8Component);
        });
    });
});

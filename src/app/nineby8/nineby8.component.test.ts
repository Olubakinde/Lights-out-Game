import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby8Component } from "./nineby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby8Component>(Nineby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby8Component);
        });
    });
});

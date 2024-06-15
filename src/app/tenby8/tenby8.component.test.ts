import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby8Component } from "./tenby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby8Component>(Tenby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby8Component);
        });
    });
});

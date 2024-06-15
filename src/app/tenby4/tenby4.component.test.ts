import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby4Component } from "./tenby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby4Component>(Tenby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby4Component);
        });
    });
});

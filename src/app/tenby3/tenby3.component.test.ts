import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby3Component } from "./tenby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby3Component>(Tenby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby3Component);
        });
    });
});

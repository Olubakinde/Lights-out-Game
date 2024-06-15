import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby10Component } from "./tenby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby10Component>(Tenby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby10Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby7Component } from "./tenby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby7Component>(Tenby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby7Component);
        });
    });
});

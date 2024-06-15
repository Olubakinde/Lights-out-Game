import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby9Component } from "./tenby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby9Component>(Tenby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby9Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby6Component } from "./tenby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby6Component>(Tenby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby6Component);
        });
    });
});

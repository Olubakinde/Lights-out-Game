import { describe, expect, test, beforeAll } from "@jest/globals";
import { Tenby5Component } from "./tenby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Tenby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Tenby5Component>(Tenby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Tenby5Component);
        });
    });
});

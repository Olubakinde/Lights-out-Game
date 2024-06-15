import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby10Component } from "./threeby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby10Component>(Threeby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby10Component);
        });
    });
});

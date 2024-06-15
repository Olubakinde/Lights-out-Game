import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby10Component } from "./fiveby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby10Component>(Fiveby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby10Component);
        });
    });
});

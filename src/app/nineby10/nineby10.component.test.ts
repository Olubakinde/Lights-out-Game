import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby10Component } from "./nineby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby10Component>(Nineby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby10Component);
        });
    });
});

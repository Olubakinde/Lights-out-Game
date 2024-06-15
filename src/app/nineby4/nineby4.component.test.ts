import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby4Component } from "./nineby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby4Component>(Nineby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby4Component);
        });
    });
});

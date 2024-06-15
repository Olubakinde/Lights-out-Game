import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby4Component } from "./sevenby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby4Component>(Sevenby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby4Component);
        });
    });
});

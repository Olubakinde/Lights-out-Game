import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby4Component } from "./eightby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby4Component>(Eightby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby4Component);
        });
    });
});

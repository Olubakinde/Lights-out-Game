import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby4Component } from "./fourby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby4Component>(Fourby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby4Component);
        });
    });
});

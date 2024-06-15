import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby4Component } from "./sixby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby4Component>(Sixby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby4Component);
        });
    });
});

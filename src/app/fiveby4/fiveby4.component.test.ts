import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby4Component } from "./fiveby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby4Component>(Fiveby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby4Component);
        });
    });
});

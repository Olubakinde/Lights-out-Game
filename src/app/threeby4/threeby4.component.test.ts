import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby4Component } from "./threeby4.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby4Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby4Component>(Threeby4Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby4Component);
        });
    });
});

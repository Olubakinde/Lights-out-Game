import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby3Component } from "./sevenby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby3Component>(Sevenby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby3Component);
        });
    });
});

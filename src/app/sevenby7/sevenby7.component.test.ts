import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby7Component } from "./sevenby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby7Component>(Sevenby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby7Component);
        });
    });
});

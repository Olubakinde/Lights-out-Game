import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby8Component } from "./sevenby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby8Component>(Sevenby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby8Component);
        });
    });
});

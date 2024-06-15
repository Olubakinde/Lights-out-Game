import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby5Component } from "./sevenby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby5Component>(Sevenby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby5Component);
        });
    });
});

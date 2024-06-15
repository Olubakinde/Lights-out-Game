import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby9Component } from "./sevenby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby9Component>(Sevenby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby9Component);
        });
    });
});

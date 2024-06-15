import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sevenby6Component } from "./sevenby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Sevenby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sevenby6Component>(Sevenby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sevenby6Component);
        });
    });
});

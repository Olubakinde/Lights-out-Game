import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby6Component } from "./threeby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby6Component>(Threeby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby6Component);
        });
    });
});

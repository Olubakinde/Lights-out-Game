import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby6Component } from "./fiveby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby6Component>(Fiveby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby6Component);
        });
    });
});

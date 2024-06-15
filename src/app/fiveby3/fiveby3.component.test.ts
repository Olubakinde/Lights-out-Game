import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby3Component } from "./fiveby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby3Component>(Fiveby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby3Component);
        });
    });
});

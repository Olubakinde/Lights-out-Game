import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby3Component } from "./nineby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby3Component>(Nineby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby3Component);
        });
    });
});

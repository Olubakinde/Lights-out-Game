import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby7Component } from "./sixby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby7Component>(Sixby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby7Component);
        });
    });
});

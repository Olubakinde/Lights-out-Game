import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby3Component } from "./sixby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby3Component>(Sixby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby3Component);
        });
    });
});

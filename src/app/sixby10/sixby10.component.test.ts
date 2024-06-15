import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby10Component } from "./sixby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby10Component>(Sixby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby10Component);
        });
    });
});

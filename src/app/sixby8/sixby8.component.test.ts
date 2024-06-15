import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby8Component } from "./sixby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby8Component>(Sixby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby8Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby9Component } from "./sixby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby9Component>(Sixby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby9Component);
        });
    });
});

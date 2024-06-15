import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby10Component } from "./eightby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby10Component>(Eightby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby10Component);
        });
    });
});

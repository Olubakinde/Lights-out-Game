import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby3Component } from "./eightby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby3Component>(Eightby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby3Component);
        });
    });
});

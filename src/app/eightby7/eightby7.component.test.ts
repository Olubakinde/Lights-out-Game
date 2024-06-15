import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby7Component } from "./eightby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby7Component>(Eightby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby7Component);
        });
    });
});

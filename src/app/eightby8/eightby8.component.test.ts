import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby8Component } from "./eightby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby8Component>(Eightby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby8Component);
        });
    });
});

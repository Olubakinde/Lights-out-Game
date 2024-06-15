import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby9Component } from "./eightby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby9Component>(Eightby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby9Component);
        });
    });
});

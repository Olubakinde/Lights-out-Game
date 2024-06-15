import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby6Component } from "./eightby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby6Component>(Eightby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby6Component);
        });
    });
});

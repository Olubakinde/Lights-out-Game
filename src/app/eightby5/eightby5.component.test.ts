import { describe, expect, test, beforeAll } from "@jest/globals";
import { Eightby5Component } from "./eightby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Eightby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Eightby5Component>(Eightby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Eightby5Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby5Component } from "./nineby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby5Component>(Nineby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby5Component);
        });
    });
});

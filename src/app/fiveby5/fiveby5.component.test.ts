import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby5Component } from "./fiveby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby5Component>(Fiveby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby5Component);
        });
    });
});

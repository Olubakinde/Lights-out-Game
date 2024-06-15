import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby5Component } from "./threeby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby5Component>(Threeby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby5Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby5Component } from "./sixby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby5Component>(Sixby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby5Component);
        });
    });
});

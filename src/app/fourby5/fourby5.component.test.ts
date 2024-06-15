import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby5Component } from "./fourby5.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby5Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby5Component>(Fourby5Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby5Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby8Component } from "./fourby8.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby8Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby8Component>(Fourby8Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby8Component);
        });
    });
});

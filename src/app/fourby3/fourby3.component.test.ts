import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby3Component } from "./fourby3.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby3Component>(Fourby3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby3Component);
        });
    });
});

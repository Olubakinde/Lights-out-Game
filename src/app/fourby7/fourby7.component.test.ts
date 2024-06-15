import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby7Component } from "./fourby7.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby7Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby7Component>(Fourby7Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby7Component);
        });
    });
});

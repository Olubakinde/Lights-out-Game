import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby9Component } from "./fourby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby9Component>(Fourby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby9Component);
        });
    });
});

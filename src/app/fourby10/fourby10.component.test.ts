import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby10Component } from "./fourby10.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby10Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby10Component>(Fourby10Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby10Component);
        });
    });
});

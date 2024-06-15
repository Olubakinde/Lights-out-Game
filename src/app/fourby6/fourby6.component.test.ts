import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fourby6Component } from "./fourby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Fourby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fourby6Component>(Fourby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fourby6Component);
        });
    });
});

import { describe, expect, test, beforeAll } from "@jest/globals";
import { Sixby6Component } from "./sixby6.component";
import { bootstrap } from "@gsilber/webez";

describe("Sixby6Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Sixby6Component>(Sixby6Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Sixby6Component);
        });
    });
});

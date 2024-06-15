import { describe, expect, test, beforeAll } from "@jest/globals";
import { Fiveby9Component } from "./fiveby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Fiveby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Fiveby9Component>(Fiveby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Fiveby9Component);
        });
    });
});

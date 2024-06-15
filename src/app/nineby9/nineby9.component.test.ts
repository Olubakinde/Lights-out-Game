import { describe, expect, test, beforeAll } from "@jest/globals";
import { Nineby9Component } from "./nineby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Nineby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Nineby9Component>(Nineby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Nineby9Component);
        });
    });
});

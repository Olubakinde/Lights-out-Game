import { describe, expect, test, beforeAll } from "@jest/globals";
import { Threeby9Component } from "./threeby9.component";
import { bootstrap } from "@gsilber/webez";

describe("Threeby9Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Threeby9Component>(Threeby9Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Threeby9Component);
        });
    });
});

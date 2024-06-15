import { describe, expect, test, beforeAll } from "@jest/globals";
import { DefDisComponent } from "./Def-Dis.component";
import { bootstrap } from "@gsilber/webez";

describe("DefDisComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<DefDisComponent>(DefDisComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(DefDisComponent);
        });
    });
});

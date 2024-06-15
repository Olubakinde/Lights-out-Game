import { BindStyle, Click, EzComponent, EzDialog } from "@gsilber/webez";
import html from "./threebythree.component.html";
import css from "./threebythree.component.css";

export class ThreebythreeComponent extends EzComponent {
    @BindStyle("cell-1", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor1: boolean = true;
    @BindStyle("cell-2", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor2: boolean = true;
    @BindStyle("cell-3", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor3: boolean = true;
    @BindStyle("cell-4", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor4: boolean = true;
    @BindStyle("cell-5", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor5: boolean = true;
    @BindStyle("cell-6", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor6: boolean = true;
    @BindStyle("cell-7", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor7: boolean = true;
    @BindStyle("cell-8", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor8: boolean = true;
    @BindStyle("cell-9", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor9: boolean = true;

    constructor() {
        super(html, css);
        const randomCell = Math.floor(Math.random() * 25) + 1;
        const randomCell1 = Math.floor(Math.random() * 25) + 1;
        const randomCell2 = Math.floor(Math.random() * 25) + 1;
        const randomCell3 = Math.floor(Math.random() * 25) + 1;
        const randomCell4 = Math.floor(Math.random() * 25) + 1;
        this.toggleCell(randomCell);
        this.toggleCell(randomCell1);
        this.toggleCell(randomCell2);
        this.toggleCell(randomCell3);
        this.toggleCell(randomCell4);
    }

    private toggleCell(cellNumber: number) {
        switch (cellNumber) {
            case 1:
                this.backgroundColor1 = !this.backgroundColor1;
                break;
            case 2:
                this.backgroundColor2 = !this.backgroundColor2;
                break;
            case 3:
                this.backgroundColor3 = !this.backgroundColor3;
                break;
            case 4:
                this.backgroundColor4 = !this.backgroundColor4;
                break;
            case 5:
                this.backgroundColor5 = !this.backgroundColor5;
                break;
            case 6:
                this.backgroundColor6 = !this.backgroundColor6;
                break;
            case 7:
                this.backgroundColor7 = !this.backgroundColor7;
                break;
            case 8:
                this.backgroundColor8 = !this.backgroundColor8;
                break;
            case 9:
                this.backgroundColor9 = !this.backgroundColor9;
                break;
        }
    }

    private toggleNeighbors(cellNumber: number) {
        const neighbors: { [key: number]: number[] } = {
            1: [2, 4],
            2: [1, 3, 5],
            3: [2, 6],
            4: [1, 5, 7],
            5: [2, 4, 6, 8],
            6: [3, 5, 9],
            7: [4, 8],
            8: [5, 7, 9],
            9: [6, 8],
        };

        neighbors[cellNumber].forEach((neighbor) => {
            this.toggleCell(neighbor);
        });

        if (
            !this.backgroundColor1 &&
            !this.backgroundColor2 &&
            !this.backgroundColor3 &&
            !this.backgroundColor4 &&
            !this.backgroundColor5 &&
            !this.backgroundColor6 &&
            !this.backgroundColor7 &&
            !this.backgroundColor8 &&
            !this.backgroundColor9
        ) {
            EzDialog.popup(
                this,
                `You've won the game!`,
                "Congratulations",
                ["Ok"],
                "btn btn-primary",
            );
            return;
        }
    }

    @Click("cell-1")
    click1() {
        this.toggleCell(1);
        this.toggleNeighbors(1);
    }
    @Click("cell-2")
    click2() {
        this.toggleCell(2);
        this.toggleNeighbors(2);
    }
    @Click("cell-3")
    click3() {
        this.toggleCell(3);
        this.toggleNeighbors(3);
    }
    @Click("cell-4")
    click4() {
        this.toggleCell(4);
        this.toggleNeighbors(4);
    }
    @Click("cell-5")
    click5() {
        this.toggleCell(5);
        this.toggleNeighbors(5);
    }
    @Click("cell-6")
    click6() {
        this.toggleCell(6);
        this.toggleNeighbors(6);
    }
    @Click("cell-7")
    click7() {
        this.toggleCell(7);
        this.toggleNeighbors(7);
    }
    @Click("cell-8")
    click8() {
        this.toggleCell(8);
        this.toggleNeighbors(8);
    }
    @Click("cell-9")
    click9() {
        this.toggleCell(9);
        this.toggleNeighbors(9);
    }
}

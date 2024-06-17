import { BindStyle, Click, EzComponent, EzDialog } from "@gsilber/webez";
import html from "./fourby4.component.html";
import css from "./fourby4.component.css";

export class Fourby4Component extends EzComponent {
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
    @BindStyle("cell-10", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor10: boolean = true;
    @BindStyle("cell-11", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor11: boolean = true;
    @BindStyle("cell-12", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor12: boolean = true;
    @BindStyle("cell-13", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor13: boolean = true;
    @BindStyle("cell-14", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor14: boolean = true;
    @BindStyle("cell-15", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor15: boolean = true;
    @BindStyle("cell-16", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor16: boolean = true;

    constructor() {
        super(html, css);
        const randomCell = Math.floor(Math.random() * 25) + 1;
        const randomCell2 = Math.floor(Math.random() * 25) + 1;
        const randomCell3 = Math.floor(Math.random() * 25) + 1;
        const randomCell4 = Math.floor(Math.random() * 25) + 1;
        const randomCell5 = Math.floor(Math.random() * 25) + 1;
        const randomCell6 = Math.floor(Math.random() * 25) + 1;
        const randomCell7 = Math.floor(Math.random() * 25) + 1;
        this.toggleCell(randomCell);
        this.toggleCell(randomCell2);
        this.toggleCell(randomCell3);
        this.toggleCell(randomCell4);
        this.toggleCell(randomCell5);
        this.toggleCell(randomCell6);
        this.toggleCell(randomCell7);
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
            case 10:
                this.backgroundColor10 = !this.backgroundColor10;
                break;
            case 11:
                this.backgroundColor11 = !this.backgroundColor11;
                break;
            case 12:
                this.backgroundColor12 = !this.backgroundColor12;
                break;
            case 13:
                this.backgroundColor13 = !this.backgroundColor13;
                break;
            case 14:
                this.backgroundColor14 = !this.backgroundColor14;
                break;
            case 15:
                this.backgroundColor15 = !this.backgroundColor15;
                break;
            case 16:
                this.backgroundColor16 = !this.backgroundColor16;
                break;
        }
    }

    private toggleNeighbors(cellNumber: number) {
        const neighbors: { [key: number]: number[] } = {
            1: [2, 5],
            2: [1, 3, 6],
            3: [2, 4, 7],
            4: [3, 8],
            5: [1, 6, 9],
            6: [2, 5, 7, 10],
            7: [3, 6, 8, 11],
            8: [4, 7, 12],
            9: [5, 10, 13],
            10: [6, 9, 11, 14],
            11: [7, 10, 12, 15],
            12: [8, 11, 16],
            13: [9, 14],
            14: [10, 13, 15],
            15: [11, 14, 16],
            16: [12, 15],
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
            !this.backgroundColor9 &&
            !this.backgroundColor10 &&
            !this.backgroundColor11 &&
            !this.backgroundColor12 &&
            !this.backgroundColor13 &&
            !this.backgroundColor14 &&
            !this.backgroundColor15 &&
            !this.backgroundColor16
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
    @Click("cell-10")
    click10() {
        this.toggleCell(10);
        this.toggleNeighbors(10);
    }
    @Click("cell-11")
    click11() {
        this.toggleCell(11);
        this.toggleNeighbors(11);
    }
    @Click("cell-12")
    click12() {
        this.toggleCell(12);
        this.toggleNeighbors(12);
    }
    @Click("cell-13")
    click13() {
        this.toggleCell(13);
        this.toggleNeighbors(13);
    }
    @Click("cell-14")
    click14() {
        this.toggleCell(14);
        this.toggleNeighbors(14);
    }
    @Click("cell-15")
    click15() {
        this.toggleCell(15);
        this.toggleNeighbors(15);
    }
    @Click("cell-16")
    click16() {
        this.toggleCell(16);
        this.toggleNeighbors(16);
    }
}

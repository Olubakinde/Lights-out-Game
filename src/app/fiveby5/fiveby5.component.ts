import { BindStyle, Click, EzComponent } from "@gsilber/webez";
import html from "./fiveby5.component.html";
import css from "./fiveby5.component.css";

export class Fiveby5Component extends EzComponent {
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
    @BindStyle("cell-17", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor17: boolean = true;
    @BindStyle("cell-18", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor18: boolean = true;
    @BindStyle("cell-19", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor19: boolean = true;
    @BindStyle("cell-20", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor20: boolean = true;
    @BindStyle("cell-21", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor21: boolean = true;
    @BindStyle("cell-22", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor22: boolean = true;
    @BindStyle("cell-23", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor23: boolean = true;
    @BindStyle("cell-24", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor24: boolean = true;
    @BindStyle("cell-25", "backgroundColor", (value: boolean) =>
        value ? "grey" : "red",
    )
    public backgroundColor25: boolean = true;
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
            case 17:
                this.backgroundColor17 = !this.backgroundColor17;
                break;
            case 18:
                this.backgroundColor18 = !this.backgroundColor18;
                break;
            case 19:
                this.backgroundColor19 = !this.backgroundColor19;
                break;
            case 20:
                this.backgroundColor20 = !this.backgroundColor20;
                break;
            case 21:
                this.backgroundColor21 = !this.backgroundColor21;
                break;
            case 22:
                this.backgroundColor22 = !this.backgroundColor22;
                break;
            case 23:
                this.backgroundColor23 = !this.backgroundColor23;
                break;
            case 24:
                this.backgroundColor24 = !this.backgroundColor24;
                break;
            case 25:
                this.backgroundColor25 = !this.backgroundColor25;
                break;
        }
    }

    private toggleNeighbors(cellNumber: number) {
        const neighbors: { [key: number]: number[] } = {
            1: [2, 6],
            2: [1, 3, 7],
            3: [2, 4, 8],
            4: [3, 5, 9],
            5: [4, 10],
            6: [1, 7, 11],
            7: [2, 6, 8, 12],
            8: [3, 7, 9, 13],
            9: [4, 8, 10, 14],
            10: [5, 9, 15],
            11: [6, 12, 16],
            12: [7, 11, 13, 17],
            13: [8, 12, 14, 18],
            14: [9, 13, 15, 19],
            15: [10, 14, 20],
            16: [11, 17, 21],
            17: [12, 16, 18, 22],
            18: [13, 17, 19, 23],
            19: [14, 18, 20, 24],
            20: [15, 19, 25],
            21: [16, 22],
            22: [17, 21, 23],
            23: [18, 22, 24],
            24: [19, 23, 25],
            25: [20, 24],
        };

        neighbors[cellNumber].forEach((neighbor) => {
            this.toggleCell(neighbor);
        });
    }

    // Click handlers for each cell
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
    @Click("cell-17")
    click17() {
        this.toggleCell(17);
        this.toggleNeighbors(17);
    }
    @Click("cell-18")
    click18() {
        this.toggleCell(18);
        this.toggleNeighbors(18);
    }
    @Click("cell-19")
    click19() {
        this.toggleCell(19);
        this.toggleNeighbors(19);
    }
    @Click("cell-20")
    click20() {
        this.toggleCell(20);
        this.toggleNeighbors(20);
    }
    @Click("cell-21")
    click21() {
        this.toggleCell(21);
        this.toggleNeighbors(21);
    }
    @Click("cell-22")
    click22() {
        this.toggleCell(22);
        this.toggleNeighbors(22);
    }
    @Click("cell-23")
    click23() {
        this.toggleCell(23);
        this.toggleNeighbors(23);
    }
    @Click("cell-24")
    click24() {
        this.toggleCell(24);
        this.toggleNeighbors(24);
    }
    @Click("cell-25")
    click25() {
        this.toggleCell(25);
        this.toggleNeighbors(25);
    }
}

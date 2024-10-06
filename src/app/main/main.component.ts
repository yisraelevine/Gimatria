import { Component } from "@angular/core";
import { data } from "./services/main.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class mainComponent {
    data = data;
    sum: string[] = [];

    constructor() {
        for (let i = 0; i < this.data.length; i++) {
            this.sum.push('');
        }
    }

    setSum(inputIndex: number, inputValue: string) {
        const x:number = Number(inputValue) / data[inputIndex][0];
        for (let i = 0; i < this.data.length; i++) {
            if (i !== inputIndex) {
                this.sum[i] = (x * data[i][0]).toFixed(2);
            }
        }
    }
}
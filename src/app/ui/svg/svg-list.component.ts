import { Component } from "@angular/core";

@Component({
    selector: 'svg-list',
    template: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 455 455"
        style="enable-background:new 0 0 455 455;" xml:space="preserve">
        <polygon class="st_0" points="285.8,111.7 285.8,0 227.5,0 227.5,455 397.5,455 397.5,111.7 " />
        <rect x="57.5" class="st_0" width="203.5" height="455" />
        <polygon class="st_1" points="397.5,111.7 285.8,0 285.8,111.7 " />
    </svg>

    `,
    styles: [
        `
        .st_0 {
            fill: #e7fbfa;
        }

        .st_1 {
            fill: #29b6f6;
        }

        .st2 {
            fill: #fff;
        }

        svg {
            width: 34px;
            height: 40px;
            margin-right: 20px;
        }`
    ]
})
export class SvgListComponent { }
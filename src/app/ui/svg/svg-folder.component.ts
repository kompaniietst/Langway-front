import { Component } from "@angular/core";

@Component({
    selector: 'svg-folder',
    template: `
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 288 227.6"
        style="enable-background:new 0 0 288 227.6;" xml:space="preserve">
        <style type="text/css">
            .st0{
                fill: #D3CB2B;
            }
        </style>
        <path class="st0" d="M232.3,19.4H103.6v-8.5c0-6-4.9-10.9-10.9-10.9H30.4c-6,0-10.9,4.9-10.9,10.9v8.5h-3.3C7.3,19.4,0,26.7,0,35.7
    v174.8c0,9,7.3,16.3,16.3,16.3h216c9,0,16.3-7.3,16.3-16.3V35.7C248.5,26.7,241.2,19.4,232.3,19.4z" />
    </svg>
    `,
    styles: [
        `
        svg {
            width: 35px;
            height: 35px;
            margin-right: 20px;
        }`
    ]
})
export class SvgFolderComponent { }
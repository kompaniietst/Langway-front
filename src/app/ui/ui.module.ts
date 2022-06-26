import { NgModule } from "@angular/core";
import { SvgEmptyFolderComponent } from "./svg/svg-empty-folder.component";
import { SvgEmptyOpenedFolderComponent } from "./svg/svg-empty-opened-folder.component";
import { SvgFolderComponent } from "./svg/svg-folder.component";
import { SvgListComponent } from "./svg/svg-list.component";
import { SvgOpenedFolderComponent } from "./svg/svg-opened-folder.component";

@NgModule({
    imports: [],
    declarations: [
        SvgFolderComponent,
        SvgOpenedFolderComponent,
        SvgEmptyFolderComponent,
        SvgEmptyOpenedFolderComponent,
        SvgListComponent
    ],
    exports: [
        SvgFolderComponent,
        SvgOpenedFolderComponent,
        SvgEmptyFolderComponent,
        SvgEmptyOpenedFolderComponent,
        SvgListComponent
    ]
})
export class UIModule { }
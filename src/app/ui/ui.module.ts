import { NgModule } from "@angular/core";
import { SvgEmptyFolderComponent } from "./svg/svg-empty-folder.component";
import { SvgEmptyOpenedFolderComponent } from "./svg/svg-empty-opened-folder.component";
import { SvgFolderComponent } from "./svg/svg-folder.component";
import { SvgListComponent } from "./svg/svg-list.component";
import { SvgOpenedFolderComponent } from "./svg/svg-opened-folder.component";
import { FormComponent } from './form/form.component';
import { TwoColumnsSectionComponent } from './two-columns-section/two-columns-section.component';

@NgModule({
    imports: [],
    declarations: [
        SvgFolderComponent,
        SvgOpenedFolderComponent,
        SvgEmptyFolderComponent,
        SvgEmptyOpenedFolderComponent,
        SvgListComponent,
        FormComponent,
        TwoColumnsSectionComponent
    ],
    exports: [
        SvgFolderComponent,
        SvgOpenedFolderComponent,
        SvgEmptyFolderComponent,
        SvgEmptyOpenedFolderComponent,
        SvgListComponent,
        FormComponent,
        TwoColumnsSectionComponent
    ]
})
export class UIModule { }
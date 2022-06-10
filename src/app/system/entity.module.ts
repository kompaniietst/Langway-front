import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/reducers';
import { EntityEffect } from './store/effects/entity.effect';
import { AddEntityComponent } from './components/add-entity/add-entity.component';
import { SingleEntityComponent } from './components/single-entity/single-entity.component';
import { EntityTreeComponent } from './components/entity-tree/entity-tree.component';
import { RouterModule, Routes } from '@angular/router';
import { EntityService } from './services/entity.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
  { path: "entities", component: ContainerComponent },
  { path: "add-entity", component: AddEntityComponent },
]

@NgModule({
  declarations: [
    ContainerComponent,
    EntityTreeComponent,
    SingleEntityComponent,
    AddEntityComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('entity', reducers),
    EffectsModule.forFeature([EntityEffect]),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    EntityService
  ]
})
export class EntityModule { }

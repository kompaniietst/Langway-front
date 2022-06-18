import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer as entityReducer } from './store/reducers/entity-reducer';
import { reducer as entitiesReduser } from './store/reducers/entities-reducer';
import { EntityEffect } from './store/effects/entity.effect';
import { AddEntityComponent } from './components/add-entity/add-entity.component';
import { SingleEntityComponent } from './components/single-entity/single-entity.component';
import { EntityTreeComponent } from './components/entity-tree/entity-tree.component';
import { RouterModule, Routes } from '@angular/router';
import { EntityService } from './services/entity.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { EntitiesEffect } from './store/effects/entities.effect';
import { EntityComponent } from './components/entity-tree/entity/entity.component';

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
    EntityComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('entity', entityReducer),
    StoreModule.forFeature('entities', entitiesReduser),
    EffectsModule.forFeature([EntityEffect, EntitiesEffect]),
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    EntityService
  ]
})
export class EntityModule { }

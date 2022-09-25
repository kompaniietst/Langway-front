import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer as removeEntityReducer } from './store/reducers/remove-entity-reducer';
import { reducer as createEntityReducer } from './store/reducers/create-entity-reducer';
import { reducer as entitiesReduser } from './store/reducers/entities-reducer';
import { EntityEffect } from './store/effects/entity.effect';
import { AddEntityComponent } from './components/add-entity/add-entity.component';
import { EntityTreeComponent } from './components/entity-tree/entity-tree.component';
import { RouterModule, Routes } from '@angular/router';
import { EntityService } from './services/entity.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './components/container/container.component';
import { EntitiesEffect } from './store/effects/entities.effect';
import { UIModule } from '../ui/ui.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/components/shared.module';
import { ContainerModule } from '../words/components/container/container.module';
import { SingleEntityComponent } from './components/entity-tree/single-entity/single-entity.component';

const routes: Routes = [
  { path: "entities", component: ContainerComponent },
  { path: "entities/list/:id", component: ListComponent },
  { path: "add-entity", component: AddEntityComponent },
]

@NgModule({
  declarations: [
    ContainerComponent,
    EntityTreeComponent,
    AddEntityComponent,
    ListComponent,
    SingleEntityComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('remove entity', removeEntityReducer),
    StoreModule.forFeature('entity', createEntityReducer),
    StoreModule.forFeature('entities', entitiesReduser),
    EffectsModule.forFeature([EntityEffect, EntitiesEffect]),
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    UIModule,
    ContainerModule
  ],
  providers: [
    EntityService
  ]
})
export class EntityModule { }

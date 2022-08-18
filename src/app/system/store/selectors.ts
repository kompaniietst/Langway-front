import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SystemStateInterface } from "../types/system-state.interface";
import { TreeStateInterface } from "../types/tree-state.interface";

export const entityFeatureSelector = createFeatureSelector<SystemStateInterface>('entity');

export const isSubmittingSelector = createSelector
    (entityFeatureSelector, (entityState: SystemStateInterface) => entityState.isSubmitting);

export const errorSelector = createSelector
    (entityFeatureSelector, (entityState: SystemStateInterface) => entityState?.error);

export const currentEntitySelector = createSelector
    (entityFeatureSelector, (entityState: SystemStateInterface) => entityState.currentEntity);


export const entitiesSelector = createSelector
    (createFeatureSelector<TreeStateInterface>('entities'),
        (entitiesState: TreeStateInterface) => entitiesState.entities)


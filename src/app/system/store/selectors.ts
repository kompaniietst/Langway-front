import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SystemStateInterface } from "../types/system-state.interface";

export const entityFeatureSelector = createFeatureSelector<SystemStateInterface>('entity');

export const isSubmittingSelector = createSelector
    (entityFeatureSelector, (authState: SystemStateInterface) => authState.isSubmitting);

export const errorSelector = createSelector
    (entityFeatureSelector, (authState: SystemStateInterface) => authState.error);

export const currentEntitySelector = createSelector
    (entityFeatureSelector, (authState: SystemStateInterface) => authState.currentEntity);


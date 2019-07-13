import { createSelector } from "reselect";

const getState = (state: IRootState) => state.lookbook;

const bags = (state: IRootState) => getState(state).bags;
const bagsKeys = (state: IRootState) => getState(state).bagsKeys;

export const bagsSelector = createSelector(
  bags,
  value => value,
);

export const bagsKeysSelector = createSelector(
  bagsKeys,
  value => value,
);

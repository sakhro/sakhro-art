import { createActionsStructure } from "@services/reduxHelpers";

/* ------------- Action Creators ------------- */

export const { globalTypes, globalActions } = createActionsStructure("global", [
  { name: "HIDE_NAV", async: false },
  { name: "HIDE_NAV", async: false },
]);

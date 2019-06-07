export const createReducer = (initialState: any, handlers: { [x: string]: any; }, finalizer = (x: any) => x) =>
  (state = initialState, action: { type: string | number; }) => {
    if (action.type) {
      const handler = handlers[action.type];

      if (handler) {
        const result = handler(state, action);
        if (result === null && typeof result === "object") {
          return state;
        }
        return finalizer({ ...state, ...result });
      }
    }
    return state;
  };

export const createActionsStructure = (prefix: any, protoArray: { reduce: (arg0: ({ types, actions }: any, { name, async }: any) => { types: any; actions: any; }, arg1: { types: {}; actions: {}; }) => { types: any; actions: any; }; }) => {
  // eslint-disable-next-line
  const { types, actions } = protoArray.reduce(({ types, actions }, { name, async }) => {
    const nameSplitted = name.split("_");
    const upperName = name.toUpperCase();

    // types creator
    const actionTypesNames = [`${upperName}_INIT`, `${upperName}_SUCCESS`, `${upperName}_FAILURE`];
    const actionTypesValues = [
      `${prefix}.${upperName}_INIT`,
      `${prefix}.${upperName}_SUCCESS`,
      `${prefix}.${upperName}_FAILURE`,
    ];
    const actionTypes = async
      ? {
        [actionTypesNames[0]]: actionTypesValues[0],
        [actionTypesNames[1]]: actionTypesValues[1],
        [actionTypesNames[2]]: actionTypesValues[2],
      }
      : {
        [actionTypesNames[0]]: actionTypesValues[0],
      };
    // actions creator
    const actionPrimaryName = nameSplitted.slice(1).reduce((actionName: any, word: { charAt: (arg0: number) => { toUpperCase: () => void; }; slice: (arg0: number) => { toLowerCase: () => void; }; }) =>
      `${actionName}${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`, nameSplitted[0].toLowerCase());
    const actionCreators = async
      ? {
        [actionPrimaryName]: (payload: any) => ({
          type: actionTypesValues[0],
          responseSuccess: (dataSuccess: any) => ({ type: actionTypesValues[1], payload: dataSuccess }),
          responseFailure: (dataFailure: any) => ({ type: actionTypesValues[2], payload: dataFailure }),
          payload,
        }),
      }
      : {
        [actionPrimaryName]: (payload: any) => ({
          type: actionTypesValues[0],
          payload,
        }),
      };
    return {
      types: {
        ...types,
        ...actionTypes,
      },
      actions: {
        ...actions,
        ...actionCreators,
      },
    };
  }, { types: {}, actions: {} });
  return {
    [`${prefix}Types`]: types,
    [`${prefix}Actions`]: actions,
  };
};

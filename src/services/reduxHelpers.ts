export const createActionType = (prefix: string, name: string, async: boolean): any => {
  const nameSplitted = name.split("_");
  const upperName = name.toUpperCase();

  const attemptActionName = `${upperName}_ATTEMPT`;
  const successActionName = `${upperName}_SUCCESS`;
  const failureActionName = `${upperName}_FAILURE`;

  const attemptActionValue = `${prefix}.${upperName}_ATTEMPT`;
  const successActionValue = `${prefix}.${upperName}_SUCCESS`;
  const failureActionValue = `${prefix}.${upperName}_FAILURE`;

  // CREATE TYPES
  const types = async ?
    {
      [attemptActionName]: attemptActionValue,
      [successActionName]: successActionValue,
      [failureActionName]: failureActionValue,
    } : {
      [upperName]: `${prefix}.${upperName}`,
    };

  // CREATE ACTIONS
  const actionPrimaryName = nameSplitted.slice(1).reduce((name: string, word: string) =>
    `${name}${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`, nameSplitted[0].toLowerCase());

  const action = async ?
    (data: any) => ({
      data,
      responseFailure: (dataFailure: any) => ({ type: failureActionValue, data: dataFailure }),
      responseSuccess: (dataSuccess: any) => ({ type: successActionValue, data: dataSuccess }),
      type: attemptActionValue,
    }) : (data: any) => ({
      data,
      type: `${prefix}.${upperName}`,
    });

  return {
    [`${actionPrimaryName}Types`]: types,
    [`${actionPrimaryName}Action`]: action,
  };
};

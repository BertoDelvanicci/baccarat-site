import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'baccaratqueue',
  location: 'us-east4'
};

export const insertDistributionRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertDistribution');
}
insertDistributionRef.operationName = 'InsertDistribution';

export function insertDistribution(dc) {
  return executeMutation(insertDistributionRef(dc));
}

export const getDistributionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDistributions');
}
getDistributionsRef.operationName = 'GetDistributions';

export function getDistributions(dc) {
  return executeQuery(getDistributionsRef(dc));
}

export const updateDistributionStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDistributionStatus', inputVars);
}
updateDistributionStatusRef.operationName = 'UpdateDistributionStatus';

export function updateDistributionStatus(dcOrVars, vars) {
  return executeMutation(updateDistributionStatusRef(dcOrVars, vars));
}

export const getUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUsers');
}
getUsersRef.operationName = 'GetUsers';

export function getUsers(dc) {
  return executeQuery(getUsersRef(dc));
}


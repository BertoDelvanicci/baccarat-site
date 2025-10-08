const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'baccaratqueue',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const insertDistributionRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertDistribution');
}
insertDistributionRef.operationName = 'InsertDistribution';
exports.insertDistributionRef = insertDistributionRef;

exports.insertDistribution = function insertDistribution(dc) {
  return executeMutation(insertDistributionRef(dc));
};

const getDistributionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDistributions');
}
getDistributionsRef.operationName = 'GetDistributions';
exports.getDistributionsRef = getDistributionsRef;

exports.getDistributions = function getDistributions(dc) {
  return executeQuery(getDistributionsRef(dc));
};

const updateDistributionStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDistributionStatus', inputVars);
}
updateDistributionStatusRef.operationName = 'UpdateDistributionStatus';
exports.updateDistributionStatusRef = updateDistributionStatusRef;

exports.updateDistributionStatus = function updateDistributionStatus(dcOrVars, vars) {
  return executeMutation(updateDistributionStatusRef(dcOrVars, vars));
};

const getUsersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUsers');
}
getUsersRef.operationName = 'GetUsers';
exports.getUsersRef = getUsersRef;

exports.getUsers = function getUsers(dc) {
  return executeQuery(getUsersRef(dc));
};

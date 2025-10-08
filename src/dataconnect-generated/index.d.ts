import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Customer_Key {
  id: UUIDString;
  __typename?: 'Customer_Key';
}

export interface Distribution_Key {
  id: UUIDString;
  __typename?: 'Distribution_Key';
}

export interface GetDistributionsData {
  distributions: ({
    id: UUIDString;
    deliveryAddress: string;
    distributionNumber: string;
    status: string;
  } & Distribution_Key)[];
}

export interface GetUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
  } & User_Key)[];
}

export interface InsertDistributionData {
  distribution_insert: Distribution_Key;
}

export interface Item_Key {
  id: UUIDString;
  __typename?: 'Item_Key';
}

export interface StatusUpdate_Key {
  id: UUIDString;
  __typename?: 'StatusUpdate_Key';
}

export interface UpdateDistributionStatusData {
  distribution_update?: Distribution_Key | null;
}

export interface UpdateDistributionStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertDistributionRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertDistributionData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertDistributionData, undefined>;
  operationName: string;
}
export const insertDistributionRef: InsertDistributionRef;

export function insertDistribution(): MutationPromise<InsertDistributionData, undefined>;
export function insertDistribution(dc: DataConnect): MutationPromise<InsertDistributionData, undefined>;

interface GetDistributionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDistributionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDistributionsData, undefined>;
  operationName: string;
}
export const getDistributionsRef: GetDistributionsRef;

export function getDistributions(): QueryPromise<GetDistributionsData, undefined>;
export function getDistributions(dc: DataConnect): QueryPromise<GetDistributionsData, undefined>;

interface UpdateDistributionStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDistributionStatusVariables): MutationRef<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDistributionStatusVariables): MutationRef<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
  operationName: string;
}
export const updateDistributionStatusRef: UpdateDistributionStatusRef;

export function updateDistributionStatus(vars: UpdateDistributionStatusVariables): MutationPromise<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
export function updateDistributionStatus(dc: DataConnect, vars: UpdateDistributionStatusVariables): MutationPromise<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;

interface GetUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUsersData, undefined>;
  operationName: string;
}
export const getUsersRef: GetUsersRef;

export function getUsers(): QueryPromise<GetUsersData, undefined>;
export function getUsers(dc: DataConnect): QueryPromise<GetUsersData, undefined>;


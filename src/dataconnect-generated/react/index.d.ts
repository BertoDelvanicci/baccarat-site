import { InsertDistributionData, GetDistributionsData, UpdateDistributionStatusData, UpdateDistributionStatusVariables, GetUsersData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertDistribution(options?: useDataConnectMutationOptions<InsertDistributionData, FirebaseError, void>): UseDataConnectMutationResult<InsertDistributionData, undefined>;
export function useInsertDistribution(dc: DataConnect, options?: useDataConnectMutationOptions<InsertDistributionData, FirebaseError, void>): UseDataConnectMutationResult<InsertDistributionData, undefined>;

export function useGetDistributions(options?: useDataConnectQueryOptions<GetDistributionsData>): UseDataConnectQueryResult<GetDistributionsData, undefined>;
export function useGetDistributions(dc: DataConnect, options?: useDataConnectQueryOptions<GetDistributionsData>): UseDataConnectQueryResult<GetDistributionsData, undefined>;

export function useUpdateDistributionStatus(options?: useDataConnectMutationOptions<UpdateDistributionStatusData, FirebaseError, UpdateDistributionStatusVariables>): UseDataConnectMutationResult<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
export function useUpdateDistributionStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDistributionStatusData, FirebaseError, UpdateDistributionStatusVariables>): UseDataConnectMutationResult<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;

export function useGetUsers(options?: useDataConnectQueryOptions<GetUsersData>): UseDataConnectQueryResult<GetUsersData, undefined>;
export function useGetUsers(dc: DataConnect, options?: useDataConnectQueryOptions<GetUsersData>): UseDataConnectQueryResult<GetUsersData, undefined>;

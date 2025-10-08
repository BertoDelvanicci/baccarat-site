# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetDistributions*](#getdistributions)
  - [*GetUsers*](#getusers)
- [**Mutations**](#mutations)
  - [*InsertDistribution*](#insertdistribution)
  - [*UpdateDistributionStatus*](#updatedistributionstatus)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetDistributions
You can execute the `GetDistributions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDistributions(): QueryPromise<GetDistributionsData, undefined>;

interface GetDistributionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDistributionsData, undefined>;
}
export const getDistributionsRef: GetDistributionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDistributions(dc: DataConnect): QueryPromise<GetDistributionsData, undefined>;

interface GetDistributionsRef {
  ...
  (dc: DataConnect): QueryRef<GetDistributionsData, undefined>;
}
export const getDistributionsRef: GetDistributionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDistributionsRef:
```typescript
const name = getDistributionsRef.operationName;
console.log(name);
```

### Variables
The `GetDistributions` query has no variables.
### Return Type
Recall that executing the `GetDistributions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDistributionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDistributionsData {
  distributions: ({
    id: UUIDString;
    deliveryAddress: string;
    distributionNumber: string;
    status: string;
  } & Distribution_Key)[];
}
```
### Using `GetDistributions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDistributions } from '@dataconnect/generated';


// Call the `getDistributions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDistributions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDistributions(dataConnect);

console.log(data.distributions);

// Or, you can use the `Promise` API.
getDistributions().then((response) => {
  const data = response.data;
  console.log(data.distributions);
});
```

### Using `GetDistributions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDistributionsRef } from '@dataconnect/generated';


// Call the `getDistributionsRef()` function to get a reference to the query.
const ref = getDistributionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDistributionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.distributions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.distributions);
});
```

## GetUsers
You can execute the `GetUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUsers(): QueryPromise<GetUsersData, undefined>;

interface GetUsersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUsersData, undefined>;
}
export const getUsersRef: GetUsersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUsers(dc: DataConnect): QueryPromise<GetUsersData, undefined>;

interface GetUsersRef {
  ...
  (dc: DataConnect): QueryRef<GetUsersData, undefined>;
}
export const getUsersRef: GetUsersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUsersRef:
```typescript
const name = getUsersRef.operationName;
console.log(name);
```

### Variables
The `GetUsers` query has no variables.
### Return Type
Recall that executing the `GetUsers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUsersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUsersData {
  users: ({
    id: UUIDString;
    displayName: string;
    email: string;
  } & User_Key)[];
}
```
### Using `GetUsers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUsers } from '@dataconnect/generated';


// Call the `getUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUsers(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
getUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `GetUsers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUsersRef } from '@dataconnect/generated';


// Call the `getUsersRef()` function to get a reference to the query.
const ref = getUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUsersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertDistribution
You can execute the `InsertDistribution` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertDistribution(): MutationPromise<InsertDistributionData, undefined>;

interface InsertDistributionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertDistributionData, undefined>;
}
export const insertDistributionRef: InsertDistributionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertDistribution(dc: DataConnect): MutationPromise<InsertDistributionData, undefined>;

interface InsertDistributionRef {
  ...
  (dc: DataConnect): MutationRef<InsertDistributionData, undefined>;
}
export const insertDistributionRef: InsertDistributionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertDistributionRef:
```typescript
const name = insertDistributionRef.operationName;
console.log(name);
```

### Variables
The `InsertDistribution` mutation has no variables.
### Return Type
Recall that executing the `InsertDistribution` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertDistributionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertDistributionData {
  distribution_insert: Distribution_Key;
}
```
### Using `InsertDistribution`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertDistribution } from '@dataconnect/generated';


// Call the `insertDistribution()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertDistribution();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertDistribution(dataConnect);

console.log(data.distribution_insert);

// Or, you can use the `Promise` API.
insertDistribution().then((response) => {
  const data = response.data;
  console.log(data.distribution_insert);
});
```

### Using `InsertDistribution`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertDistributionRef } from '@dataconnect/generated';


// Call the `insertDistributionRef()` function to get a reference to the mutation.
const ref = insertDistributionRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertDistributionRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.distribution_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.distribution_insert);
});
```

## UpdateDistributionStatus
You can execute the `UpdateDistributionStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDistributionStatus(vars: UpdateDistributionStatusVariables): MutationPromise<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;

interface UpdateDistributionStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDistributionStatusVariables): MutationRef<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
}
export const updateDistributionStatusRef: UpdateDistributionStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDistributionStatus(dc: DataConnect, vars: UpdateDistributionStatusVariables): MutationPromise<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;

interface UpdateDistributionStatusRef {
  ...
  (dc: DataConnect, vars: UpdateDistributionStatusVariables): MutationRef<UpdateDistributionStatusData, UpdateDistributionStatusVariables>;
}
export const updateDistributionStatusRef: UpdateDistributionStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDistributionStatusRef:
```typescript
const name = updateDistributionStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateDistributionStatus` mutation requires an argument of type `UpdateDistributionStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDistributionStatusVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateDistributionStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDistributionStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDistributionStatusData {
  distribution_update?: Distribution_Key | null;
}
```
### Using `UpdateDistributionStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDistributionStatus, UpdateDistributionStatusVariables } from '@dataconnect/generated';

// The `UpdateDistributionStatus` mutation requires an argument of type `UpdateDistributionStatusVariables`:
const updateDistributionStatusVars: UpdateDistributionStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateDistributionStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDistributionStatus(updateDistributionStatusVars);
// Variables can be defined inline as well.
const { data } = await updateDistributionStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDistributionStatus(dataConnect, updateDistributionStatusVars);

console.log(data.distribution_update);

// Or, you can use the `Promise` API.
updateDistributionStatus(updateDistributionStatusVars).then((response) => {
  const data = response.data;
  console.log(data.distribution_update);
});
```

### Using `UpdateDistributionStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDistributionStatusRef, UpdateDistributionStatusVariables } from '@dataconnect/generated';

// The `UpdateDistributionStatus` mutation requires an argument of type `UpdateDistributionStatusVariables`:
const updateDistributionStatusVars: UpdateDistributionStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateDistributionStatusRef()` function to get a reference to the mutation.
const ref = updateDistributionStatusRef(updateDistributionStatusVars);
// Variables can be defined inline as well.
const ref = updateDistributionStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDistributionStatusRef(dataConnect, updateDistributionStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.distribution_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.distribution_update);
});
```


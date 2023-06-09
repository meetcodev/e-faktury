import React from 'react';
import { useGetOne, RecordContextProvider, SimpleShowLayout } from 'react-admin';
import {USER_DATA_PROVIDER_CONFIG as GCC}  from '../config/GLOBAL_CONFIG_CONST';

// *see UserRecordFetcher
// Ver sprawdzić ten zapis  12-13 <SimpleShowLayout record={data}></SimpleShowLayout>
const UserRecordFetcher = ({ id, resource, children }) => {
    const { data, isLoading, error } = useGetOne(resource, { id });
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <RecordContextProvider value={data}>

                {children}
        </RecordContextProvider>
    );
};
// Global Configuration Constans  GCC

// *see UserRecordWithGCC
export const UserRecordWithGCC =  ({children}) =>  (
        <UserRecordFetcher id={GCC.USER_ID} resource={GCC.USER_RESOURCE}  >
            {children}
        </UserRecordFetcher>
); 


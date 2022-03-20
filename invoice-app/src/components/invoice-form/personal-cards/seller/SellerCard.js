import React from 'react';
import { SimpleShowLayout } from 'react-admin';
import { PersonalDataCard } from '../../../../custom/PersonalDataCard';
import { UserRecordWithGCC } from '../../../../contexts/UserRecordContext';
import { SellerDataShowLayout } from './SellerDataShowLayout';
import {   Box   } from '@mui/material';


import SellerIcon from '@mui/icons-material/ManageAccounts';


// *see SellerCard
export const SellerCard = (props) => (
    <PersonalDataCard  variant="outlined" headerIcon={<SellerIcon />} headerTitle="Sprzedawca">
        <UserRecordWithGCC>
        {/* <Box  
        component="div"
        sx={{ display: 'flex',  justifyContent:"center", alignContent:"center",
        transform: 'scale(1.1)' }}
    > */}
            <SellerDataShowLayout />
            {/* </Box> */}
        </UserRecordWithGCC>
    </PersonalDataCard>
);
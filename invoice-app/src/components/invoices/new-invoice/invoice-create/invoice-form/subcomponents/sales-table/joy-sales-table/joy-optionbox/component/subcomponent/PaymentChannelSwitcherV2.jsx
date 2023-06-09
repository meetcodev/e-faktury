import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListDivider from '@mui/joy/ListDivider';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';
import Switch, { switchClasses } from '@mui/joy/Switch';
import { useTranslate } from 'react-admin';
import Apartment from "@mui/icons-material/Apartment";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import PaymentIcon from "@mui/icons-material/Payments";
import ListItemDecorator from "@mui/joy/ListItemDecorator";


    export default function PaymentChannelSwitcherV2({register}) {
    const [form, setForm] = React.useState({payment_form: 'transfer'});
    const translate = useTranslate();
    const { onChange, onBlur, name, ref } = register('payment_form'); 
    return (
        <Box sx={{ minWidth: 150, pb: 1 }}>
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            }}
        >

        </Box>
        <RadioGroup
            aria-labelledby="example-payment-channel-label"
            overlay
            name="example-payment-channel"
            defaultValue="Paypal"
        >
        <List
            component="div"
            variant="solid"
            //orientation="horizontal"
            row={form}
            sx={{ mb: -.5,
            borderRadius: 'sm',
            boxShadow: 'sm',
            bgcolor: 'background.body', border: 'none'
            }}
        >
            {[
                {id: 'transfer', value: 'transfer', label: translate('myroot.form.label.checkbox.transfer') }, 
                {id: 'cash', value: 'cash', label: translate('myroot.form.label.checkbox.cash') }
            ].map((item, index) => (
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between',  borderRadius: "sm", m: 0, py: 0, pt: 0,  mt: -1, mb: (index === 1) ? -1 : ''  }} >
                <React.Fragment key={item.id}>
                {index !== 0 && <ListDivider />}
                    <Radio color="primary" //color="neutral"
                        sx={{ display: 'flex', ml: 0, mr: 'auto',   }} 
                        // size="sm" 
                        variant="outlined" 
                        id={item.id} 
                        value={item.value} 
                        label={item.label } 
 
                        {...register('payment_form')}
                    />
                </React.Fragment>
            <ListItemDecorator ExamplePaymentChannels
                sx={{
                    // p: 1
                }}
            >
                <Typography    color="neutral" 
                //color={checked ? "primary" : "neutral"} 
            sx={{ ml: "auto", mb: -0.5, pb: 0, alignItems: "flex-end" }}
            // sx={cssIcon}
            >
                {/* {checked ? (  iconChecked ) : (   defaultIcon  )} */}
                {[<PaymentIcon />, <AccountBalanceWallet />][index]}
            </Typography>
            </ListItemDecorator>
                </ListItem>
            ))}
            </List>
        </RadioGroup>
        </Box>
    );
}

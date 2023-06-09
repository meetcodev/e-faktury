import * as React from "react";
import JoySwitch from "@mui/joy/Switch";
import JoyTypography from "@mui/joy/Typography";
import JoyFormControl from "@mui/joy/FormControl";
import JoyFormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Box from "@mui/joy/Box";
import JoyTooltip from "@mui/joy/Tooltip";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import { blue, lightBlue, grey } from '@mui/material/colors';

// import PriceChangeIcon from '@mui/icons-material/PriceChange';

export default function PriceSwitchJoyButton() {
const [checked, setChecked] = React.useState(false);
console.log(checked, "checked demo 3");

return (
    <CssVarsProvider >

    <JoyFormControl
    orientation="horizontal"
    sx={{ width: 300, justifyContent: "space-between" }}
    >
    {/* <Box>
        <FormLabel>Show captions</FormLabel>
        <FormHelperText sx={{ mt: 0 }}>All languages available.</FormHelperText>
    </Box> */}
    {/* <Tooltip title={{{checked? "Przełącz na brutto" : "Przełącz na netto" }}} > */}


    <JoyTooltip arrow placement="top" title={checked ? "Przełącz na brutto" : "Przełącz na netto"}>
        <JoySwitch
        // variant="solid"
        // color='white'
        // color={blue[400]}
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        variant="outlined"
        startDecorator={checked ? "BRUTTO" : "NETTO"}
        slotProps={{
          startDecorator: {
            sx: {
              minWidth: 24
            }
          }
        }}

       
        sx={{
            // '--Switch-thumb-size': '27px',
            // '--Switch-track-width': '64px',
            "--Switch-track-height": "31px",

            "--Switch-track-radius": "2px",
            "--Switch-track-width": "50px",
            "--Switch-track-height": "20px",
            "--Switch-gap": "5px",
            "--Switch-thumb-size": "18px",
            "--Switch-thumb-radius": "2px",
            "--Switch-thumb-width": "7px",
            "--Switch-thumb-offset": "1px",
            color: '#fff'
        }}
        />
    </JoyTooltip>
    </JoyFormControl>
</CssVarsProvider>
);
}

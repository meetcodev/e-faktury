import React from "react";
import {Box, Card, CardActions, CardHeader, CardContent, Typography, TextField, Button, Avatar, IconButton} from "@mui/material";
import { blue, white } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BuyerIcon from '@mui/icons-material/Contacts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonSearchSharpIcon from '@mui/icons-material/PersonSearchSharp';


export const  PersonalDataCard = ({variant, headerTitle, headerIcon, children}) => (

    <Card variant={variant} sx={{ maxWidth: 345 }}>
        <CardHeader  
            sx={{fontWeight: 'bold', 
                    borderBottom: `2.5px solid ${blue[800]}`,
                    mx: 0,  p: '2px', pl: '10px', pb: 0, pr: '5px', color: blue[600]}
            }
            avatar={headerIcon ? headerIcon : null} 
            action={
                <IconButton aria-label="changeSeller">
                    <MoreVertIcon />
                </IconButton>
                }
            title={headerTitle}
        />
            <CardContent>
                {children}
            </CardContent>
            <CardActions>
                <Button size="small">v more</Button>
            </CardActions>
        </Card>
);



// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px',
//          transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );


// export default function PersonalDataCard() {
//     return (
//         <Box sx={{ minWidth: 275 }}>
//              {card}
//         </Box>
//     );
//}


// export function PersonalDataCard(props) {
//     return(
//     <Card variant="outlined">{props.children}</Card>
//     );
// }
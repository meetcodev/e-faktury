import * as React from "react";
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Button, SvgIcon } from '@mui/material';
import { CardOverflow } from '@mui/joy';
import { useRecordContext, useReferenceInputController, useResourceContext } from "react-admin";








export const BuyerCompanyCardHeader = (props) => { 
        const {   cardIcon, suptitle, cardHeader, subtitle,   } = props;
        const record = useRecordContext();
        const {  org_nr, id } = record;

    return (
            <CardHeader sx={{ py:0, my: 0, mb: -1}}
                avatar={ 
                    <Box display="flex" sx={{ ml: -2, mr: 0,  my: -2, }} >
                            <Avatar
                                sx={{ bgcolor: 'primary.50', 
                                            p: {xs: 2.5, md: 3.5},
                                            pt: {xs: 3 , md: 4},
                                            mt: { md: 1},
                                            opacity: .9,
                                            borderBottomRightRadius: '42px',
                                            borderTopLeftRadius: '0',
                            }} aria-label="recipe">
                        <>
                            <Box  ml={-1} className="icon">
                                <SvgIcon viewBox="-4 2 44 37" //shapeRendering 
                                    sx={{ color: 'primary.900', fontSize: {xs: '35px', md: '45px'} }}
                                >
                                    {cardIcon? cardIcon : ""}
                                </SvgIcon>
                            </Box>
                        </>
                    </Avatar>
                        </Box>
                    }
                    action={  
                        <CardOverflow
                            variant="soft"
                            // color="neutral"
                            sx={{
                                mx: 0,
                                px: 0.1,
                                py: 0.1,
                                pl: 1,
                                pr: 1,
                                pb: 0,
                                mr: -1,
                                ml: -2,
                                // writingMode: "vertical-rl",
                                // textAlign: "left",
                                // fontSize: "xs3",
                                // fontWeight: "xl2",
                                // letterSpacing: "2px",
                                textTransform: "uppercase",
                                borderBottomLeftRadius: '10px',
                                bgcolor: "neutral.50",
                                border: '1px solid',
                                borderColor: "neutral.100"
                            }}
                        >
                    <Typography level="body3"  sx={{ color: 'neutral.700', pl: 0, pr: 'auto', display: 'flex',    mb: -0.25, mt: 0.25, }}     //width="15em"
                    >
                        { !id ? (suptitle ? (<small>{suptitle} </small>): "" )
                            : (org_nr ? <small><small>MVA: </small> {org_nr} </small> : "" )
                        }
                    </Typography>
                        </CardOverflow>

                    }
                    title={
                        <Typography variant="h6" color="text.secondary" component="div"
                            sx={{   ml: -1, color: 'primary.900', textTransform: 'uppercase', 
                                    fontWeight: "500", 
                                    fontSize: {xs: '1.05rem', md: '1.25rem'},
                                    letterSpacing: '-.25px',
                                    opacity: .95,
                                }}
                                    
                        >
                            {cardHeader ? cardHeader : "Title"}
                        </Typography>
                    }
                    subheader={subtitle && (
                            <Box sx={{ my: -1, ml: -1.1 }}>
                                {subtitle  ? subtitle : "Subtitle"}
                            </Box>
                        )
                    }
            />)
 
                };
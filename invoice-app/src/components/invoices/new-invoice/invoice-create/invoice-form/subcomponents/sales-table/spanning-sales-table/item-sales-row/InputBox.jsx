import { useState, useEffect, useMemo} from "react";
import {InputAdornment, IconButton,   Chip, Stack, TextField,  } from "@mui/material";
import Box from "@mui/material/Box";
import {   useController, useFormContext, useWatch } from "react-hook-form";
import {  useRecordContext, useTranslate } from "react-admin";
import { PriceInput } from "./input-box-component/PriceInput";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import AutoItemCategoryInput from "./input-box-component/subcomponent/AutoItemCategoryInput";
import SelectItemOption from "./input-box-component/subcomponent/SelectItemOption";
import { TextInputItem } from "./input-box-component/subcomponent/TextInputItem";
import { productOptions, taxOptions, typeOptions }  from './options_select_input';
import SelectOrInputText from "./input-box-component/select-combo-input/bin/MySelectOrInput";
import SelectListButton from "./input-box-component/SelectListButton";
// import JoyComboInputSelect from "./input-box-component/subcomponent/JoyComboInputSelect";


// Obcaaj https://codesandbox.io/s/react-hook-form-mui-forked-0xkhyk

function setGrossPriceItem(netPriceItem, taxValue){
    // if(!isNaN(!parseFloat(taxValue))) return "";
    if(netPriceItem)
    return (+netPriceItem*taxValue)/100;
}
function setNetPriceItem(grossPriceInput, taxValue){
    // if(!isNaN(!parseFloat(taxValue))) return "";
    if(+grossPriceInput)
    return (+grossPriceInput / (+taxValue)) * 100 ;
}

export default function InputBox ({ 
    // addItemOnFocusin, 
    ButtonAddItem, setCellGridTemplateRowItem, setValue,
    eventsOnItem, salesListLength, salesItemIndex, children, update, control, arrayItemIdx, idx, entryPriceIsGross, myField}) {

    const translate = useTranslate();
   
    const salesItemName = useController({ name: `${arrayItemIdx}._${idx}_product_name`, control, defaultValue: "",  });
    const qtyItem = useController({ name: `${arrayItemIdx}._${idx}_product_count`, control, defaultValue: "", });
    const taxItem = useController({ name: `${arrayItemIdx}._${idx}_product_vat`, control, defaultValue: "", });
    const netItem = useController({ name: `${arrayItemIdx}._${idx}_product_price_netto`, control, defaultValue: "", });
    const grossItem = useController({ name: `${arrayItemIdx}._${idx}_product_price_brutto`, control, defaultValue: "", });
    const typeItem = useController({ name: `${arrayItemIdx}._${idx}_product_type`, control, defaultValue: "", });
    // const categoryItem = useController({ name: `${arrayItemIdx}._${idx}_product_name_selected`, control, defaultValue: "", });

    // const netPriceInput = useWatch({ control, name: `${arrayItemIdx}._${idx}_product_price_netto` });
    // const grossPriceInput = useWatch({ control, name: `${arrayItemIdx}._${idx}_product_price_brutto` });
    const fieldNameProduct= `${salesItemName.field.name}`;

    const enteryValue = entryPriceIsGross ? grossItem.field.value : netItem.field.value;

    const newDependentValue = useMemo(() => {
        // if (!enteryValue) return "";
        if (!entryPriceIsGross  ) //setGrossPriceItem
            return ((!isNaN(enteryValue)) ? (parseFloat(enteryValue)  * (+taxItem.field.value)) : "0.00" ) / 100;
        if (entryPriceIsGross) //setNetPriceItem
            return (parseFloat(+enteryValue) / (+taxItem.field.value)) * 100 ;
        }, [enteryValue, taxItem.field.value, entryPriceIsGross]);


    // React Hook useEffect has missing dependencies: 'grossItem.field.name', 'netItem.field.name', 'newDependentValue', and 'setValue'. Either include them or remove the dependency array. If 'setValue' changes too often, find the parent component that defines it and wrap that definition in useCallback.eslintreact-hooks/exhaustive-deps
    //  Chyba umyślnie to tak tutaj było 🙈
    useEffect(() => {
                if ( !isNaN(!parseFloat(newDependentValue)) && entryPriceIsGross ) {
                    setValue(`${netItem.field.name}`, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }`);
                    // setValue( netPriceInput, `${newDependentValue.toFixed(6)}`);
                }
                if ( !isNaN(!parseFloat(newDependentValue)) && !entryPriceIsGross ){
                    setValue( `${grossItem.field.name}`, `${newDependentValue.toFixed(2) ? newDependentValue.toFixed(2) : "0.00"  }` );
                    // setValue( grossPriceInput, `${newDependentValue.toFixed(6)}` );

                }
                // }, [ grossPriceInput, taxValueInput]);
            }, [enteryValue, taxItem.field.value, entryPriceIsGross]);

     // addItemOnFocusin ##############################
            function addItemOnFocusin(event) {
                // console.log("create");
                // console.log("inItemOnFocusin");
                if ( salesListLength === salesItemIndex + 1 &&
                !event.currentTarget.contains(event.relatedTarget)
                ) { return eventsOnItem();}
            }

        //   const { formState: { errors } } = useFormContext();




        const record = useRecordContext(); 







        return (
            <>
            <Box  
                // onFocus={(event) => addItemOnFocusin(event)}
                className="App"
                sx={{
                    mt: 0,
                    mb: "-3px",
                    pt: 0,
                    pb: 0,
                    display: "grid",
                    gridTemplateColumns: setCellGridTemplateRowItem,
                    gridGap: 10,
                    alignItems: "baseline"
                }}
            >
                <Stack direction="row" 
                    alignItems="right" component='span' sx={{ display: "flex", taxtAlign: "right", width: "100%" }} >
                    {(salesListLength === salesItemIndex + 1) ? 
                        <IconButton color="primary"  sx={ {ml: 1, mr: -1,} } // aria-label="upload picture" component="label"
                            onClick={() => eventsOnItem()}
                        >  {/* <ButtonAddItem />  */}
                            <AddCircleRoundedIcon sx={ {ml: 1, mr: -1,} }   />
                        </IconButton>
                        :
                        <Chip label={` ${++idx}. `} size="normal" color="primary" variant="outlined" 
                            sx={{ ml: 2, mr: -2, border: "none", fontSize: '1em', fontWeight: 500, textAlign: 'right'  }}
                        />
                    }   
                </Stack>
                <Stack direction="row" spacing={0} alignItems="flex-start" sx={{ paddingTop: 0, marginTop: '-25px', width: '100%' }} >
                    <SelectListButton nameProdcutNameInput={fieldNameProduct} options={record.choice_product_list}  />
                    <TextInputItem 
                        // variant={ salesItemName.field.value ? "standard" : "outlined"}
                        fieldNameProduct={fieldNameProduct} objController={salesItemName} fieldName={salesItemName.field} {...salesItemName.field}  onFocus={(event) => addItemOnFocusin(event)}  options={record.choice_product_list}
                        // sx={{ width: '92%'}} 
                        // iconStart={<AccountCircle sx={{ color: "#0089ff", fontSize: 18 }} /> } 
                        isError={salesItemName.field.value}
                        label="myroot.form.label.inputbox_itemrow.itemNameField" 
                        />
                    {/* <p>{ errors.salesItemName && <span>This field is required</span>}</p> */}
                </Stack>
                <SelectItemOption {...typeItem.field} field={typeItem.field} 
                // variant={ typeItem.field.value ? "standard" : "outlined"}
                isError={typeItem.field.value}
                    // label="myroot.form.label.inputbox_itemrow.typeItem" 
                    label={ typeItem.field.value ? "myroot.form.label.inputbox_itemrow.typeItem" : "Wprowadź typ"} 
                    sx={{ minWidth: 100 }} defaultValue="placeholder" options={typeOptions}  
                />
                <SelectItemOption {...taxItem.field} field={taxItem.field} variant={ taxItem.field.value ? "standard" : "outlined"}
                    isError={taxItem.field.value}
                    label="myroot.form.label.inputbox_itemrow.taxItem" 
                    sx={{ minWidth: 25 }} defaultValue="placeholder" options={taxOptions}  
                />
                <IconTextNumber   {...qtyItem.field} objController={qtyItem}
                    label={translate('myroot.form.label.inputbox_itemrow.qtyItem')} 
                />
                <PriceInput objController={netItem} sx={{ display: entryPriceIsGross ? "none" : "block" }}
                    label={translate('myroot.form.label.inputbox_itemrow.netItem')}
                />
                <PriceInput objController={grossItem} sx={{ display: entryPriceIsGross ? "block" : "none" }}
                    label={translate('myroot.form.label.inputbox_itemrow.grossItem')}
                />
{/* {netSum} */}
                <div align="right" style={{   // marginTop: "auto", marginBottom: 0    // borderBottom: '1px', border: "1px solid black"
                    }}
                >{ 
                    (entryPriceIsGross ) ? (setNetPriceItem(+grossItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2)
                                            : (( +netItem.field.value ) ?  (+netItem.field.value * +qtyItem.field.value).toFixed(2)
                                                : "")
                                        }</div>
{/* {grossSum} */}
                <div align="right">{ (entryPriceIsGross) ? ( +grossItem.field.value * +qtyItem.field.value).toFixed(2) 
                                            : ( +netItem.field.value ? ((setGrossPriceItem(+netItem.field.value, taxItem.field.value) * +qtyItem.field.value).toFixed(2))  
                                                : "" )
                                        }</div>
                <div align="center">
                    {children ? children : null}
                </div>
            </Box>
            </>
        );
    }

const IconTextNumber = ({ iconStart, iconEnd, InputProps, objController, ...props }) => {
        return (
            <TextField 
                {...props}
                variant="standard"
                type="number"
                // size="small"
                // helperText={false}

                InputProps={{
                    inputMode: 'numeric',
                    pattern: '[0-9]',
                    ...InputProps,
                    startAdornment: iconStart ? (
                        <InputAdornment    position="start">{iconStart}</InputAdornment>
                    ) : null,
                    endAdornment: iconEnd ? (
                        <InputAdornment    position="end">{iconEnd}</InputAdornment>
                    ) : null
                }}
                onChange={ event => {
                    var value = event.target.value.replace(/[^0-9\,\.]/ig,'');
                    value = value.replace(/[,]/gi,'.');
                    objController.field.onChange(value);
                    // console.log('valuePrice', value);
                    }
                } // send value to hook form 
            
            />
        );
    };
    // *see SelectInput 
    // ->     https://codesandbox.io/s/react-hook-form-mui-forked-9ohh3s
 
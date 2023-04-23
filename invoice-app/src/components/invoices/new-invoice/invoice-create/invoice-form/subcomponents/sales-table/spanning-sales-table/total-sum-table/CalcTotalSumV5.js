import React from "react";
import { useWatch } from "react-hook-form";
import TableCell from '@mui/material/TableCell';

//Om TRZEBA BY TO JAKOŚ SPRAWDZIĆ 
//ToDo usunąłem te prefixy ale nie wiem czy nie działam tym na szkode z optymalizacji i w sumie nie wiem jak to obczaić 
//ToDo ogónie ot powinnno być bez subscribe  /register 

export function setTotalSumNetValue(results){
    let totalSum = 0;

    for(const key in results) {
        if(results[key][`product_count`] && results[key][`product_price_netto`])
            totalSum += (results[key][`product_price_netto`] * results[key][`product_count`]);
    }
    return totalSum;
}

export function setTotalSum(results){
    let totalSum = 0;

    for(const key in results) {
        // statingGrossPrice?
        if(results[key][`product_count`] && results[key][`product_price_brutto`])
            totalSum += (results[key][`product_price_brutto`] * results[key][`product_count`]);
    }

    return (totalSum);
}
// *see DOPRACOWAĆ Z OLKIEM - total tax total sum total net  |!!!!

export const SalesTotalSum = ({ control, nameSalesList }) => {
    const results = useWatch({ control, name: `${nameSalesList}` });

    let totalSumNet = setTotalSumNetValue(results);
    let totalSum = setTotalSum(results)
    // {/* <TableCell align="right" >{(totalSum && totalSumNet) ? `${(totalSum-totalSumNet).toFixed(2)} PLN` : ""}</TableCell> */}
    return (
        <>
            <TableCell align="right" >{`${!isNaN(totalSumNet.toFixed(2)) ? totalSumNet.toFixed(2) : ""} PLN`}</TableCell>
            <TableCell align="right" >{`${!isNaN((totalSum-totalSumNet).toFixed(2)) ? (totalSum-totalSumNet).toFixed(2) : "" } PLN`}</TableCell>
            <TableCell align="right" >{`${!isNaN(totalSum.toFixed(2))? totalSum.toFixed(2) : "" } PLN`}</TableCell>
        </>
    );
};

// { a ? <dsad> :  </dsad> }
//OLD

function totalCal(results) {
        let totalValue = 0;
        // console.log("allkey", results)
        for (const key in results) {
            // console.log("key", key);
            for (const value in results[key]) {
                if (typeof results[key][value] === "string") {
                    const output = parseInt(results[key][value], 10);
                    totalValue = totalValue + (Number.isNaN(output) ? 0 : output);
                } else {
                    totalValue = totalValue + totalCal(results[key][value], totalValue);
                }
            }
        }
    
        return totalValue;
    }
    
export const CalcMultiplication = ({control, nameInput}) => {
        const results = useWatch({ control, name: `${nameInput}` });
        const output = [];
        // console.log('CalMLP', results);
        return(<p>sum cost: {output}</p>)
    }
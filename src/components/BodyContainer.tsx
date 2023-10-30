import { useState } from "react";
import { Box, List, ListItemButton } from "@mui/material";

interface Props {
    heading: string;
}

function BodyContainer() {

    function Palindromo({valor}: any) {

        var num = 999;
        var invertido;
        var digito;

        num = digito;
        invertido = 0;

        while(num != 0){
            digito = num % 10;
            invertido = (invertido * 10) + digito;
            num = num % 10;
        }

        if (valor == invertido) 
            return 1;
        else 
            return 0;

    }

    return (
        <>
        <Box       
            sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f2f2f2',
            borderRadius: "12px",
            padding: "10px"
        }}>
            <h1></h1>
            

            
            
        </Box>
        </>
    )
}

export default BodyContainer;
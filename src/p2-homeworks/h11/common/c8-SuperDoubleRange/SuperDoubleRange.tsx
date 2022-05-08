import React from 'react'
import {Slider, Box} from "@mui/material";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Box sx={{ width: 300 }}>
                <Slider
                    // getAriaLabel={() => 'Temperature range'}
                    value={[15,60]}
                    onChange={() => {}}
                    // valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                />
            </Box>


        </>
    )
}

export default SuperDoubleRange

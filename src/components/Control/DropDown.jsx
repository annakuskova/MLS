import React, { useState } from "react";
import './DropDown.sass';

const options = [{
    value: 'apparatus',
    label: 'Аппарат'
}, {
    value: 'days',
    label: 'День'
},{
    value: 'hours',
    label: 'Час'
},]


export const DropDown = () => {
    const [currentLabel, setCurrentLabel] = useState('apparatus');
    
    const getValue = () => {
        return currentLabel ? options.find(l => l.value === currentLabel) : ""
    }

    const onChange = (newValue) => {
        setCurrentLabel(newValue.value)
    }

    return(
        <Select onChange={onChange} value={getValue()} options={options} />
    )
}
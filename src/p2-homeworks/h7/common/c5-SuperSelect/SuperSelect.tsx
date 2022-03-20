import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    className?: string
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        className,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options
        ? options.map((el, index) => <option key={`${index} ${el}`}>{el}</option>)
        : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const finalClassName = s.select + (className ? ' ' + className : '')
    return (
        <select
            onChange={onChangeCallback}
            {...restProps}
            className={finalClassName}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect

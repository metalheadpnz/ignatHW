import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from "../h3/Greeting.module.css";
import s2 from "../h2/Affairs.module.css"

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', 'enter text...'))
    }

    return (
        <div>
            <hr/>
            <div className='center'>
                homeworks 6

                {/*should work (должно работать)*/}
                <div>
                    <SuperEditableSpan
                        value={value}
                        onChangeText={setValue}
                        spanProps={{children: value ? undefined : 'enter text...'}}
                        className={s.normal}

                    />
                </div>
                <SuperButton onClick={save} className={s2.button}>save</SuperButton>
                <SuperButton onClick={restore} className={s2.button}>restore</SuperButton>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6

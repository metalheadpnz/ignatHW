import React, {ChangeEvent, KeyboardEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    onBlurInputHandler: (e: FocusEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    onFocusHandler: (e: FocusEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        error,
        totalUsers,
        onBlurInputHandler,
        onKeyPressHandler,
        onFocusHandler
    } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.normal // need to fix with (?:)


    return (
        <div>
            {/*<input value={name}*/}
            {/*       onChange={setNameCallback}*/}
            {/*       className={inputClass}*/}
            {/*       onKeyPress={onKeyPressHandler}*/}
            {/*       onBlur={onBlurInputHandler}*/}
            {/*       onFocus={onFocusHandler}*/}
            {/*/>*/}

            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyPress={onKeyPressHandler}
                onBlur={onBlurInputHandler}
                onFocus={onFocusHandler}/>

            {/*<button*/}
            {/*    onClick={addUser}*/}
            {/*    disabled={error}*/}
            {/*    className={s.addButton}*/}
            {/*>*/}
            {/*    add*/}
            {/*</button>*/}

            <SuperButton
                onClick={addUser}
                disabled={error}
                className={s.addButton}
                children={'add'}/>

            <span>{totalUsers}</span>
            <div className={s.redText}>{error && 'ошибка: обязтельное поле'}</div>
        </div>
    )
}

export default Greeting

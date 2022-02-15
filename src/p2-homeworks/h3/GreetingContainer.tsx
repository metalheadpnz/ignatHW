import React, {useState, ChangeEvent, FocusEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        setError(false)
    }

    const trimmedName = name.trim()

    const addUser = () => {

        if (trimmedName) {
            addUserCallback(trimmedName)
            alert(`Hello  ${trimmedName}`)
            setName('')
        } else {
            setError(true)
        }
        // need to fix
    }

    const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
        setError(false)
    }

    const onBlurInputHandler = (e: FocusEvent<HTMLInputElement>) => {
        trimmedName || setError(true)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        (e.key === 'Enter' && name)
            ? addUser()
            : setError(true)
    }


    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onBlurInputHandler={onBlurInputHandler}
            onKeyPressHandler={onKeyPressHandler}
            onFocusHandler={onFocusHandler}
        />
    )
}

export default GreetingContainer

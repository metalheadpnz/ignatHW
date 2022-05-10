import React, {ChangeEvent, useState} from 'react';
import s from './stylesH13.module.css'
import {requestsAPI} from "./RequestsAPI";

type PropsType = {
    setBlockText: (test: string) => void
    setError: (error: boolean) => void
}
const Request = ({setBlockText, setError}: PropsType) => {

    const [accessToServer, setAccessToServer] = useState(true)
    const [isFetching, setFetching] = useState(false)

    const accessRequest = () => {
        setFetching(true)
        requestsAPI.postValue(accessToServer)
            .then(resp => {
                setBlockText(`${resp.data.errorText} ${resp.data.info}`)
                setError(false)
            })
            .catch(resp => {
                setBlockText(`${resp.response.data.errorText} ${resp.response.data.info}`)
                setError(true)
            })
            .finally(() => {
                setFetching(false)
            })

    }

    const changeAccess = (e: ChangeEvent<HTMLInputElement>) => {
        setAccessToServer(e.currentTarget.checked)
    }

    return (
        <div>

            <div className={s.center}>
                <button disabled={isFetching}
                        onClick={accessRequest}>click
                </button>
            </div>

            <div className={s.center}>
                <input checked={accessToServer}
                       onChange={changeAccess}
                       type="checkbox"/>
            </div>

        </div>
    );
};

export default Request;
import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from "../h8/HW8.module.css";
import btnStl from "../h2/Affairs.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {

            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString() // fix with date
    const stringDate = date.toLocaleDateString()// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ?
                <div>
                    {stringDate}
                </div>
                : <br/>
            }
            <div className={styles.buttonsBlock}>
                <SuperButton onClick={start} className={btnStl.button}>start</SuperButton>
                <SuperButton onClick={stop} className={btnStl.button}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock

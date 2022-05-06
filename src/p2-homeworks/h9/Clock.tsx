import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)
    const [systemDate, setSystemDate] = useState<Date>(new Date())

    const stop = () => {
        // stop
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            // setDate

        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setSystemDate(new Date())
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = 'Time' // fix with date
    const stringDate = systemDate.toLocaleDateString()// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock

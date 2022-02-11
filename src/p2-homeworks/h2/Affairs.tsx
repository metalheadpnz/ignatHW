import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair  // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    const classNames = {
        all: props.filter === "all" ? styles.activeFilter : styles.button,
        high: props.filter === "high" ? styles.activeFilter : styles.button,
        middle: props.filter === "middle" ? styles.activeFilter : styles.button,
        low: props.filter === "low" ? styles.activeFilter : styles.button
    }


    return (

        <div>

            {mappedAffairs}

            <button className={classNames.all} onClick={setAll}>All</button>
            <button className={classNames.high} onClick={setHigh}>High</button>
            <button className={classNames.middle} onClick={setMiddle}>Middle</button>
            <button className={classNames.low} onClick={setLow}>Low</button>

        </div>
    )
}

export default Affairs

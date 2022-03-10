import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const {name, _id, priority} = props.affair
    const deleteCallback = (id: number): void => {
        props.deleteAffairCallback(id)
    }

    return (
        <div className={styles.flex}>
            <span className={styles.item}>{name}</span>
            <span className={`${styles[props.affair.priority]} ${styles.item}`}>[{priority}]</span>
            {/*<button className={styles.button} onClick={() => deleteCallback(_id)}>X</button>*/}
            <SuperButton
                className={`${styles.item} ${styles.button}`} onClick={() => deleteCallback(_id)}>X</SuperButton>
            {/*<button onClick={() => props.deleteAffairCallback(_id)}>X</button>*/}
        </div>
    )
}

export default Affair

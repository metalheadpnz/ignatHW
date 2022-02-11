import React from 'react'
import {AffairType} from "./HW2";

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
        <div>
            {name} {priority}

            <button onClick={() => deleteCallback(_id)}>X</button>
            {/*<button onClick={() => props.deleteAffairCallback(_id)}>X</button>*/}
        </div>
    )
}

export default Affair

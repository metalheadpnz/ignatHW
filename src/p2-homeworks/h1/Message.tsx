import React from 'react'
import s from './Message.module.css'

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}

// function Message(props: propsType) {
//     return (
//         <>
//             <div className={s.message}>
//                 <img src={props.avatar} alt=""/>
//                 <div className={s.messageBody}>
//                     <div className={s.name}>{props.name}</div>
//                     <div className={s.message1}>{props.message}</div>
//                     <div className={s.time}>{props.time}</div>
//                 </div>
//             </div>
//         </>
//     )
// }

function Message(props: propsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar" className={s.avatar}/>
            <div className={s.angle}/>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )

}

export default Message

import React from "react";
import s from "./HW12.module.css";
import {changeThemeAC, ThemeType} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";


const themes: ThemeType[] = ['dark', 'red', 'some', 'transparent'];

function HW12() {

    const theme: ThemeType = useSelector((state: AppStoreType) => state.theme.theme)

    const dispatch = useDispatch()
    const onRadioChange = (e: ThemeType) => {
        dispatch(changeThemeAC(e))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio onChangeOption={onRadioChange}
                        value={theme}
                        options={themes}/>
            <hr/>
        </div>
    );
}

export default HW12;

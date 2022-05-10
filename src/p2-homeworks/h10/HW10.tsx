import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import pacmanLoader from '../../img/pacmanLoader.svg'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {

    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>((state: AppStoreType) => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}


            <div>
                <SuperButton
                    className={'greenBtn'}
                    disabled={loading}
                    onClick={setLoading}>set loading...</SuperButton>
            </div>

            {loading && <div><img src={pacmanLoader} alt="PacManLoader"/></div>}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10

export type initStateType = {
    loading: boolean
}

export type loadingActionType = ReturnType<typeof loadingAC>

const initState: initStateType = {
    loading: false
}


export const loadingReducer = (state = initState, action: loadingActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {loading: action.loading}
        }
        default:
            return state
    }
}

export const loadingAC = (loading: boolean) => (
    {type: "SET-LOADING", loading} as const
)
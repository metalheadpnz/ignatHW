import {UserType} from "../HW8";

export type sortByNameActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}
export type checkActionType = {
    type: 'check'
    payload: number
}

type combineActionTypes = sortByNameActionType | checkActionType

export const homeWorkReducer = (state: UserType[], action: combineActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const filter: 1 | -1 = action.payload === 'up' ? 1 : -1
            return (
                [...state].sort((a, b) => {
                    if (a.name > b.name) return filter
                    if (a.name < b.name) return filter * (-1)
                    else return 0
                })
            )
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}
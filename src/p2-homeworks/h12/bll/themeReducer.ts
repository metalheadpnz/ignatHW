export type ThemeType = 'dark' | 'red' | 'some' | 'transparent'

export type ThemeStateType = {
    theme: ThemeType
}
export type changeThemeActionType = ReturnType<typeof changeThemeAC>
type themeActionTypes = changeThemeActionType

const initState: ThemeStateType = {
    theme: "dark"
};

export const themeReducer = (state: ThemeStateType = initState, action: themeActionTypes): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme}
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemeType) => (
    {
        type: 'CHANGE-THEME',
        theme
    } as const
)
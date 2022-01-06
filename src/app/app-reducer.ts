export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

// status = 'loading' - крутилку показываем
// status = 'idle' | 'succeeded' | 'failed' - крутилку прячем

const initialState = {
    status: 'idle' as RequestStatusType,
    isError: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}

export const setAppErrorAC = (isError: string | null) => {
    return {type: 'APP/SET-ERROR', isError} as const
}

export type SetStatusActionType = ReturnType<typeof setAppStatusAC>

export type SetErrorActionType = ReturnType<typeof setAppErrorAC>

type ActionsType = SetStatusActionType | SetErrorActionType
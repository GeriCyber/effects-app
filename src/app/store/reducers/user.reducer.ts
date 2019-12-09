import { User } from 'src/app/models/user.model';
import * as fromUser from '../actions';

export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function userReducer(state = initState, action: fromUser.userAcciones): UserState {
    switch (action.type) {
        case fromUser.CARGAR_USUARIO:
            return  {
                ...state,
                loading: true,
                error: null
            };
        case fromUser.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ...action.user }
            };
            case fromUser.CARGAR_USUARIO_FAIL:
                return {
                    ...state,
                    loaded: false,
                    loading: false,
                    error: {
                        status: action.payload.status,
                        message: action.payload.message,
                        url: action.payload.url
                    }
                };
        default:
            return state;
    }
}

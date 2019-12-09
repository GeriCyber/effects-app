import { User } from 'src/app/models/user.model';
import * as fromUsers from '../actions';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

export function usersReducer(state = initState, action: fromUsers.usuarioAcciones): UsersState {
    switch (action.type) {
        case fromUsers.CARGAR_USUARIOS:
            return  {
                ...state,
                loading: true,
                error: null
            };
        case fromUsers.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [... action.users]
            };
            case fromUsers.CARGAR_USUARIOS_FAIL:
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

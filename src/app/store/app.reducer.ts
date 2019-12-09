import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: reducers.UsersState;
    user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user: reducers.userReducer
};

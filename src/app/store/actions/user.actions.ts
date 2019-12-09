import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const CARGAR_USUARIO = '[Users] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Users] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Users] Cargar usuario SUCCESS';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string) {}
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;

    constructor(public payload: any) {}
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public user: User) {}
}

export type userAcciones = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess;

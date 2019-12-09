import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const CARGAR_USUARIOS = '[Users] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Users] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Users] Cargar usuarios SUCCESS';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor(public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor(public users: User[]) {}
}

export type usuarioAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;

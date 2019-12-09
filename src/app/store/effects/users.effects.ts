import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CARGAR_USUARIOS, CargarUsuariosSuccess, CargarUsuariosFail } from '../actions/users.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
    constructor(private actions$: Actions, private userService: UsersService) {}

    @Effect()
    loadUsers$ = this.actions$
    .pipe(
        ofType(CARGAR_USUARIOS),
        switchMap(() => {
            return this.userService.getUsers()
            .pipe(
                map((users) => new CargarUsuariosSuccess(users)),
                catchError((error) => of(new CargarUsuariosFail(error)))
            );
        })
    );
}

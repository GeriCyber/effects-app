import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsersService } from '../../services/users.service';
import { of } from 'rxjs';
import { CARGAR_USUARIO, CargarUsuarioSuccess, CargarUsuarioFail } from '../actions';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UsersService) {}

    @Effect()
    loadUsers$ = this.actions$
    .pipe(
        ofType(CARGAR_USUARIO),
        switchMap((action: any) => {
            const id = action.id;
            return this.userService.getUserByID(id)
            .pipe(
                map((user) => new CargarUsuarioSuccess(user)),
                catchError((error) => of(new CargarUsuarioFail(error)))
            );
        })
    );
}

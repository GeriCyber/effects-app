import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuarios } from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('users')
    .subscribe((users) => {
      this.users = users.users;
      this.loading = users.loading;
      this.error = users.error;
    });

    this.store.dispatch(new CargarUsuarios());
  }

}

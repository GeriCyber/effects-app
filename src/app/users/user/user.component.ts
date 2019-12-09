import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuario } from 'src/app/store/actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user: User;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params
    .subscribe((params) => {
      const id = params.id;
      this.store.dispatch(new CargarUsuario(id));
    });

    this.store.select('user')
    .subscribe((user) => {
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    });
  }

}

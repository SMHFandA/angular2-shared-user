import { Component } from '@angular/core';

import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {

  private _user: UserModel;

  constructor(
    private _userService: UserService
  ) {
    this.user = this._userService.getUser();
  }

  set user(val: UserModel) {
    this._user = val;
  }

  get user() {
    return this._user;
  }

}

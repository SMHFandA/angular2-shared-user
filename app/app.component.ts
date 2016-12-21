import { Component } from '@angular/core';

import { UserModel } from './models/user.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent {

  private _user: UserModel = new UserModel('', '', 0);

  constructor(
    private _userService: UserService
  ) {
    this._userService
      .getUser()
      .subscribe(
        res => this.user = res
      )
    ;
  }

  set user(val: UserModel) {
    this._user = val;
  }

  get user() {
    return this._user;
  }

}

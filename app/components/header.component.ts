import { Component, Input } from '@angular/core';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'header-component',
  template: `
              <div class="header" style="padding: 20px; margin: 20px; border: 1px solid blue;">
                Header component user is:
                {{ user | json }}
              </div>
            `
})
export class HeaderComponent {

  private _user: UserModel;

  @Input()
  set user(val: UserModel) {
    this._user = val;
  }

  get user() {
    return this._user;
  }

}

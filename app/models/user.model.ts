export class UserModel {

  private _username: string = '';

  private _email: string = '';

  private _balance: number = 0;

  constructor(username: string, email: string, balance: number) {
    this.username = username;
    this.email = email;
    this.balance = balance;
  }

  set username(val: string) {
    this._username = val;
  }

  get username() {
    return this._username;
  }

  set email(val: string) {
    this._email = val;
  }

  get email() {
    return this._email;
  }

  set balance(val: number) {
    this._balance = val;
  }

  get balance() {
    return this._balance;
  }

}

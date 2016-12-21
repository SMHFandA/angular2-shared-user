import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';

import { UserService } from './services/user.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent
    , HeaderComponent
    , ContentComponent
  ],
  providers: [
    UserService
  ]
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

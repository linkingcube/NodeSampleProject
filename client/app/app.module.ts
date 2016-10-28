import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule  } from '@angular/http';

import { ApiClient } from './service/api-client.service';
import { PollsResolver } from './service/polls.resolver';
import { routing } from './app.routing';
import { PollsComponent } from './polls/polls.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, Ng2BootstrapModule, routing],
  declarations: [ AppComponent, PollsComponent ],
  bootstrap:    [ AppComponent ],
  providers: 	[ ApiClient, PollsResolver]
})
export class AppModule { }
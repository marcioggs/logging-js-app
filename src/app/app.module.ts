import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoggerModule } from 'ngx-logger';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot(environment.loggerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    environmentConfig: string;

  constructor(private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.setLoggerHttpHeaders();
    
    this.environmentConfig = JSON.stringify(environment, null, "   ");

    this.logger.log('This is a LOG level log message.');
    this.logger.debug('This is a DEBUG level log message.');
    this.logger.info('This is an INFO level log message.');
    this.logger.warn('This is a WARN level log message.');    
    this.logger.error('This is an ERROR level log message.');
    this.logger.fatal('This is a FATAL level log message.');
    this.logger.trace('This is a TRACE level log message.');
  }

  private setLoggerHttpHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'username': 'john.doe',
      'password': 'surprise'
    });

    this.logger.setCustomHttpHeaders(headers);
  }

}

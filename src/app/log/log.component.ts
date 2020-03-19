import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  environmentConfig: string;

  constructor(private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.environmentConfig = JSON.stringify(environment, null, "   ");

    this.logger.log('This is a LOG level log message.');
    this.logger.debug('This is a DEBUG level log message.');
    this.logger.info('This is an INFO level log message.');
    this.logger.warn('This is a WARN level log message.');    
    this.logger.error('This is an ERROR level log message.');
    this.logger.fatal('This is a FATAL level log message.');
    this.logger.trace('This is a TRACE level log message.');
  }

}

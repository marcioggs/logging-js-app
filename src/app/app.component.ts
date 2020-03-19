import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private logger: NGXLogger) {
  }

  ngOnInit(): void {
    this.initilizeLoggerHttpHeaders();
  }

  private initilizeLoggerHttpHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'username': 'john.doe',
      'password': 'surprise'
    });

    this.logger.setCustomHttpHeaders(headers);
  }
  
}

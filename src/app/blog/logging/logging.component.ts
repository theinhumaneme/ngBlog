import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/common/models/log.model';
import { LoggingService } from 'src/app/common/services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  logs: Log[];
  displayedColumns: string[] = ['user', 'date', 'operation', 'object'];
  constructor(private ls: LoggingService) { }

  ngOnInit(): void {
    this.logs = this.ls.getLogs()
  }

}

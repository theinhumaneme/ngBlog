import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../../common/services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {
  logs: any;
  displayedColumns: string[] = ['user', 'date', 'operation', 'object'];
  // constructor(private ls: LoggingService) {}

  ngOnInit(): void {
    // this.logs = this.ls.getLogs();
  }
}

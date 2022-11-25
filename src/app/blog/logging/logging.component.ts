import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Log } from 'src/app/common/models/log.model';
import { LoggingService } from '../../common/services/logging.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent {
  logs: Log[];
  logSub: Subscription;
  displayedColumns: string[] = ['user', 'date', 'operation', 'object'];
  constructor(private ls: LoggingService) {}

  ngOnInit(): void {
    this.logs = this.ls.getLogs();
    this.logSub = this.ls.logsChanges.subscribe((logs) => {
      this.logs = logs;
      console.log(this.logs);
    });
  }
  ngOnDestroy() {
    this.logSub.unsubscribe();
  }
}

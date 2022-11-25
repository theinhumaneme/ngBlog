import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Log } from '../models/log.model';

@Injectable()
export class LoggingService {
  logsChanges = new Subject<Log[]>();
  private logs: Log[] = [];
  constructor() {}

  addLog(operation: string, object: string) {
    this.logs.push(new Log(operation, object));
  }
  setLogs(logs: Log[]) {
    this.logs = logs;
    this.logsChanges.next(this.logs.slice());
  }
  getLogs() {
    return this.logs.slice();
  }
}

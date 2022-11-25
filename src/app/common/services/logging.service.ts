import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Log } from "../models/log.model";
import { dataStorageService } from "./data-storage.service";

@Injectable()
export class LoggingService{
    logsChanges = new Subject<Log[]>();
    logs: Log[] = [];
    constructor(){}

    addLog(operation: string, object: string){
        this.logs.push( new Log(operation, object))
    }
    setLogs(logs){
        this.logs =logs;
        this.logsChanges.next(this.logs.slice())
    }
    getLogs(){
        return this.logs.slice()
    }

}
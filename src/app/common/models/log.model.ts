export class Log{
    user: string
    date: Date;
    operation: string;
    object: string;

    constructor(operation, object){
        this.user = "Kalyan Mudumby";
        this.operation = operation;
        this.object = object;
        this.date = new Date()
    }

}
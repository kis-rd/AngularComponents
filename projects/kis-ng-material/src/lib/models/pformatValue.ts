import { Column } from './column';

export class PFormatValue {
  row: any;
  column: Column;
  date: Date;

  constructor(param1?: any, param2?: any, param3?: any) {
    if (param1 && !param2 && !param3) {
      this.date = param1;
      this.row = null;
      this.column = null;
    } else if (param1 && param2 && !param3) {
      this.row = param1;
      this.column = param2;
      this.date = null;
    } else if ( !param1 && param2 && !param3) {
      this.row = null;
      this.column = param2;
      this.date = null;
    }
  }
}

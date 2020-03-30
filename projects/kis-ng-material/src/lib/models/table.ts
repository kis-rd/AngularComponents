import { UtilsService } from '../services/utils.service';
import { Subscription } from 'rxjs';
import { Column } from './column';
import { Input, Output, EventEmitter } from '@angular/core';


import { ApiBuildTable  } from './api-build-table';
// import { HistoryTableService } from '../services/history-table/history-table.service';

export abstract class Table {
  constructor(
    public utils: UtilsService
  ) {}
  /**
   * data that binding table data
   */
  data: any[];
  /**
   * Columns of table
   */
 @Input() cols: Column[];
  /**
   * title of table
   */
  @Input() title: any;
  /**
   * copy of data that comes to server data
   */
  dataTable: any;
  /**
   * it uses when the table can filtre dates
   */
  input1: string;
  /**
   * it uses when the table can filtre dates
   */
  input2: string;

  /**
   * datesValues if table need dates objet to instanciate
   */
  datesValues: any;
  /**
   * subscription which allows unsubscription of the observable
   */
  subscription: Subscription;
  paramPage: number;

  /**
   * it use when the wrapper requires to display complete search date barre in table
   */
  @Input() displaySearchDate: boolean;
  /**
   * Abstration for alls tables it use in application
   */
  @Input() apitable: ApiBuildTable ;
  /**
   * true if is HistoricalService
   */
  // isHistorical = this.apitable instanceof HistoryTableService;
  /**
   * Event send by table when user select row
   */
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelected = new EventEmitter<any>();
  /**
   * call back function for if row is selected in the table
   * @param row row data
   */
  abstract selectionActions(row: any): void;
  /**
   * filter date in table
   */
  filtreDate() {
    if (this.input1 && this.input2) {
      const d1 = this.input1.split('/');
      const d2 = this.input2.split('/');
      // tslint:disable-next-line:radix
      const from = new Date(parseInt(d1[2]), parseInt(d1[1]), parseInt(d1[0]));
      // tslint:disable-next-line:radix
      const to = new Date(parseInt(d2[2]), parseInt(d2[1]), parseInt(d2[0]));
      let c;
      let check;
      this.cols.forEach(column => {
        if (column.type === 'date') {
          this.dataTable.forEach(row => {
            c = row[column.field].split('T')[0].split('-');
            // tslint:disable-next-line:radix
            check = new Date(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]));
            if (check >= from && check <= to) {
            } else {
              this.data = this.data.filter(rowcompare => {
                return rowcompare[column.field] !== row[column.field];
              });
            }
          });
        }
      });
    }
  }

  /**
   * reset input date value
   */
  reset() {
    this.data = this.dataTable;
    this.input1 = '';
    this.input2 = '';
  }

  /**
   * define correct number of row per ligne according to device
   */
  pagination() {
    if (screen.width < 769) {
      this.paramPage = 10;
    } else {
      this.paramPage = 15;
    }
  }
  /**
   * format table according to type of table
   */
//   formatTable(): boolean {
//     const value = !this.isHistorical;
//     return value;
//   }
}

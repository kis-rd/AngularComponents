import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'formatData'
})
export class FormatDataPipe implements PipeTransform {
  /**
   * method transform
   * @param value value to transform parameters: row, column, date (FormatDataPipeValue)
   * @param args dateFormat objet
   */
  transform(value: any, args?: any): any {

    let lvalue: any;
    // format the columns of a table
    if (value && value.row && value.column) {
      switch (value.column.type) {

        case 'boolean':
          if (value.row[value.column.field]) {
            lvalue = 'success';
          } else {
            lvalue = 'failure';
          }
          break;
        case 'image':
          const img = value.row[value.column.field];
          !img || ''
            ? (lvalue = '')
            : (lvalue =
              'data:image/jpeg;base64,' + value.row[value.column.field]);
          break;
        default:
          lvalue = value.row[value.column.field];
      }
      return lvalue;
    }
  }

}

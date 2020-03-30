import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { UtilsService } from '../../services/utils.service';
import { Table } from '../../models/table';

@Component({
  selector: 'kis-mat-table',
  templateUrl: './kis-mat-table.component.html',
  styleUrls: ['./kis-mat-table.component.css']
})

export class KisMatTableComponent extends Table implements OnInit {
  /**
    * MatTableDataSource instance allows to give data for table
    */
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  /**
  * SelectionModel instance to handler selection row in the table
  */
  selection = new SelectionModel<any>(false, []);
  /**
   * tableDatas can be use to create table only pass datas
   */
  @Input() set tableDatas(data: any) {
    this.data = data;
    this.dataTable = data;
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
  }

  @Input() set options(options: any) {
    const properties = Object.keys(options);
    console.log(properties);

    // hover color
    if (options[properties[0]] !== null) {
      const sheet = this.renderer.createElement('style');
      sheet.innerHTML  = `.mat-row.hovered {
        background: ${options[properties[0]]};
      }`;
      this.renderer.appendChild(this.el.nativeElement, sheet);
      // actions
    }

    // rowTextColor
    if (options[properties[1]] !== null) {

      const sheet = this.renderer.createElement('style');

      sheet.innerHTML  = `.mat-row.row-text-color .mat-cell {
      color: ${options[properties[1]]};
    }`;
    this.renderer.appendChild(this.el.nativeElement, sheet);
    }

    // rowHighLightedColor
    if (options[properties[2]] !== null) {

      const sheet = this.renderer.createElement('style');
      sheet.innerHTML  = `  .mat-row.highlighted {
      background: ${options[properties[2]]};
      outline: none;
    }`;
    this.renderer.appendChild(this.el.nativeElement, sheet);
    }

    // checkboxSelection
    if (properties[3] !== null) {

      // actions
    }
    // ratioButtonSelection
    if (properties[4] !== null) {

      // actions
    }

    // columnContainImage
    if (properties[5] !== null) {

      // actions
    }

  }

  @Output() tableSelection = new EventEmitter<any>();
  /**
   * set tab
   */

  /**
 * returns columns to display
 */
  get columnsToDisplay(): string[] {
    const columns = [];
    if (this.cols) {
      this.cols.forEach(column => columns.push(column.field));
    }
    return columns;
  }

  constructor(
    public utils: UtilsService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    super(utils);
  }

  ngOnInit() {
  }
  selectionActions(row: any): void {
    // don't forget in here selection.isselected() is true, you can use SelectionModel api to get informations
    this.tableSelection.emit(row);
    this.onSelected.emit(row);
  }
  /**
   * call back function for if user put letter in filter search barre
   * @param filterValue value to search
   */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

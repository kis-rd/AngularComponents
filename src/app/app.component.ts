import { Component, OnInit } from '@angular/core';
import { TestTabledataService } from './services/test-tabledata.service';
import { KisMatTableOptions } from 'kisNgMaterial';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tabledatas: any[];
  cols: any;
  title: string;
  options: KisMatTableOptions = new KisMatTableOptions() ;

  constructor(public table: TestTabledataService) {
  }
  ngOnInit(): void {
    this.table.getData().subscribe(
      tableDatas => {
        console.log(tableDatas);
        this.options.hoverColor = 'red';
        this.options.rowHighLightedColor = 'blue';
        this.options.rowTextColor = '#FCF6F9';
        this.tabledatas = tableDatas;
        this.cols = this.table.getColumns();
        this.title = this.table.getTitle();
      }
    );
  }
}

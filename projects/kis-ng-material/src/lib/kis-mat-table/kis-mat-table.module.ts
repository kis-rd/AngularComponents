import { NgModule } from '@angular/core';
import { KisNgMaterialModule } from '../kis-ng-material.module';
import { KisMatTableComponent } from './kis-mat-table/kis-mat-table.component';

@NgModule({
  declarations: [KisMatTableComponent],
  imports: [
    KisNgMaterialModule
  ],
  exports: [ KisMatTableComponent ]
})
export class KisMatTableModule { }

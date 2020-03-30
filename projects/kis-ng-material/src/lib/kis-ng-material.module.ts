import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [FormatDataPipe],
  exports: [FormatDataPipe, MatTableModule, MatPaginatorModule, MatFormFieldModule, CommonModule, MatInputModule ]
})
export class KisNgMaterialModule { }

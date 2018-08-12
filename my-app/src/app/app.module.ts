import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExampleComponent,
  ],

  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

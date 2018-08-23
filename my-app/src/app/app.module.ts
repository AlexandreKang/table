import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatToolbarModule, MatButtonModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableOverviewExampleComponent } from './table-overview-example/table-overview-example.component';
import { ProgressSpinnerConfigurableExampleComponent } from './progress-spinner-configurable-example/progress-spinner-configurable-example.component';
@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExampleComponent,
    ProgressSpinnerConfigurableExampleComponent
  ],

  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatToolbarModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

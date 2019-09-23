import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatSidenavModule, 
        MatToolbarModule, 
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatInputModule}      
        from '@angular/material';

@NgModule({

  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatMenuModule,
      MatDividerModule,
      MatInputModule
      
  ],

  exports:[
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: []
})
export class MaterialModule { }

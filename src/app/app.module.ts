import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NotfoundComponent } from './_pages/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './_pages/login/login.component';
import { CalificarComponent } from './_pages/Calificar/calificar.component';
import { ComentarComponent } from './_pages/comentar/comentar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    LoginComponent,
    CalificarComponent,
    ComentarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

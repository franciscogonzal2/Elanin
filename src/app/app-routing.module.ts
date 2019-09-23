import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './_pages/notfound/notfound.component';
import { LoginComponent } from './_pages/login/login.component';
import { CalificarComponent } from './_pages/Calificar/calificar.component';
import { ComentarComponent } from './_pages/comentar/comentar.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'calificar', component: CalificarComponent},
  {path: 'comentar', component:ComentarComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

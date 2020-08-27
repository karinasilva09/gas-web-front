import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAssociadosComponent } from './modules/cad-associativos/lista-associados/lista-associados.component';

const routes: Routes = [
  { path: 'associados', component: ListaAssociadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

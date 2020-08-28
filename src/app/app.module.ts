import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAssociadosComponent } from './modules/cad-associativos/lista-associados/lista-associados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AssociadosService} from './core/services/associados.service';

import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { DetalhesAssociadoComponent } from './modules/cad-associativos/detalhes-associado/detalhes-associado.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask'
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    ListaAssociadosComponent,
    DetalhesAssociadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),

    HttpClientModule,

    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    AssociadosService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DetalhesAssociadoComponent
  ]
})
export class AppModule { }

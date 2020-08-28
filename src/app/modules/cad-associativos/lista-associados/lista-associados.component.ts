import { Component, OnInit, ViewChild } from '@angular/core';

import {AssociadosService} from '../../../core/services/associados.service';
import { Associados } from 'src/app/shared/models/associados.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetalhesAssociadoComponent } from '../detalhes-associado/detalhes-associado.component';

@Component({
  selector: 'app-lista-associados',
  templateUrl: './lista-associados.component.html',
  styleUrls: ['./lista-associados.component.css']
})
export class ListaAssociadosComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  displayedColumns: string[] = ['siape', 'nome', 'cpf', 'telefone', 'celular', 'email'];

  listaAssociados: Associados[] = [];
  associado: Associados = new Associados();
  dataSource = new MatTableDataSource<Associados>(this.listaAssociados);
  

  constructor(private api: AssociadosService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAssociados();
  }

  getAssociados() {
    this.api.getAssociados()
    .subscribe(res => {
        this.listaAssociados = res;
        this.dataSource = new MatTableDataSource<Associados>(this.listaAssociados);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, (err) => {
        console.log(err);
      }
    );
  }

  detalhesAssociado(element): void {
    const dialogRef = this.dialog.open(DetalhesAssociadoComponent, {
      width: '90%',
      data: {id: element.id}
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssociadosService } from 'src/app/core/services/associados.service';
import { Associados } from 'src/app/shared/models/associados.model';

@Component({
  selector: 'app-detalhes-associado',
  templateUrl: './detalhes-associado.component.html',
  styleUrls: ['./detalhes-associado.component.css']
})
export class DetalhesAssociadoComponent implements OnInit {

  formNovoUsuario: FormGroup;
  id: number = 0;
  associado: Associados = new Associados();

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetalhesAssociadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Associados,
    private api: AssociadosService) {
      this.id = data.id;
    }

  ngOnInit(): void {
    this.createNovoAssociado();
    this.detalhesAssociado(this.id);
    this.populaSituacoes();
  }

  private createNovoAssociado(): void {
    this.formNovoUsuario = this.formBuilder.group({
      cpf: [''],
      nome: [''],
      matricula: ['']
    });
  }

  detalhesAssociado(id): void {
     this.api.getAssociadoById(id)
     .subscribe(res => {
         this.associado = res;
         this.formNovoUsuario.get('cpf').setValue(this.associado.docCPF);
         this.formNovoUsuario.get('matricula').setValue(this.associado.matriculaAssociado);
         this.formNovoUsuario.get('nome').setValue(this.associado.nome);
       }, (err) => {
         console.log(err);
       }
     );
  }

  populaSituacoes(): void {
    this.api.getSituacoes()
     .subscribe(res => {
         this.associado = res;
       }, (err) => {
         console.log(err);
       }
     );
  }

}

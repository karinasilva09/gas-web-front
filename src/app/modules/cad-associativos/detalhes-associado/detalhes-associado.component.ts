import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssociadosService } from 'src/app/core/services/associados.service';
import { Associados, Situacoes } from 'src/app/shared/models/associados.model';

@Component({
  selector: 'app-detalhes-associado',
  templateUrl: './detalhes-associado.component.html',
  styleUrls: ['./detalhes-associado.component.css']
})
export class DetalhesAssociadoComponent implements OnInit {

  formNovoUsuario: FormGroup;
  id: number = 0;
  associado: Associados = new Associados();
  situacoes: Situacoes[] = [];
  situacao: Situacoes = new Situacoes();

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
      matricula: [''],
      situacao: ['']
    });
  }

  detalhesAssociado(id): void {
     this.api.getAssociadoById(id)
     .subscribe(res => {
         this.associado = res;
         this.formNovoUsuario.get('cpf').setValue(this.associado.docCPF);
         this.formNovoUsuario.get('matricula').setValue(this.associado.matriculaEmpresaAssociada);
         this.formNovoUsuario.get('nome').setValue(this.associado.nome);
         this.buscaSituacaoPorId();
       }, (err) => {
         console.log(err);
       }
     );
  }

  populaSituacoes(): void {
    this.api.getSituacoes()
     .subscribe(res => {
         this.situacoes = res;
       }, (err) => {
         console.log(err);
       }
     );
  }

  buscaSituacaoPorId(): void {
    const id = Number(this.associado.situacao);
    this.api.getSituacaoById(id)
    .subscribe(res => {
      this.situacao = res;
      this.formNovoUsuario.get('situacao').setValue(this.situacao.descricao);
    }, (err) => {
      console.log(err);
    }
  );
  }

}

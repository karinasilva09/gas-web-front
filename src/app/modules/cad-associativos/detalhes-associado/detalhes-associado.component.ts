import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssociadosService } from 'src/app/core/services/associados.service';
import { Associados, Situacoes, Grupos } from 'src/app/shared/models/associados.model';

@Component({
  selector: 'app-detalhes-associado',
  templateUrl: './detalhes-associado.component.html',
  styleUrls: ['./detalhes-associado.component.css']
})
export class DetalhesAssociadoComponent implements OnInit {

  formNovoAssociado: FormGroup;
  formEndereco: FormGroup;
  formContato: FormGroup;
  id: number = 0;
  associado: Associados = new Associados();
  situacoes: Situacoes[] = [];
  situacao: Situacoes = new Situacoes();
  grupos: Grupos[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DetalhesAssociadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Associados,
    private api: AssociadosService) {
      this.id = data.id;
    }

  ngOnInit(): void {
    this.createNovoAssociado();
    this.createEndereco();
    this.createContato();
    this.detalhesAssociado(this.id);
    this.populaSituacoes();
    this.populaGrupos();
  }

  private createNovoAssociado(): void {
    this.formNovoAssociado = this.formBuilder.group({
      cpf: [''],
      nome: [''],
      matricula: [''],
      situacao: [''],
      dataCadastro: [''],
      grupo: ['']
    });
  }

  private createEndereco(): void {
    this.formEndereco = this.formBuilder.group({
      cep: [''],
      endereco: [''],
      cidade: [''],
      bairro: [''],
      estado: ['']
    });
  }

  private createContato(): void {
    this.formContato = this.formBuilder.group({
      tel1: [''],
      ramal1: [''],
      recado1: [''],
      tel2: [''],
      ramal2: [''],
      recado2: [''],
      tel3: [''],
      ramal3: [''],
      recado3: [''],
      celular: [''],
      email: [''],
      receberEmail: ['']
    });
  }

  detalhesAssociado(id): void {
     this.api.getAssociadoById(id)
     .subscribe(res => {
         this.associado = res;
         this.formNovoAssociado.get('cpf').setValue(this.associado.docCPF);
         this.formNovoAssociado.get('matricula').setValue(this.associado.matriculaEmpresaAssociada);
         this.formNovoAssociado.get('nome').setValue(this.associado.nome);
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

  populaGrupos(): void {
    this.api.getGrupos()
     .subscribe(res => {
         this.grupos = res;
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
      this.formNovoAssociado.get('situacao').setValue(this.situacao.descricao);
    }, (err) => {
      console.log(err);
    }
  );
  }

}

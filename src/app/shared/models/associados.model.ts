export class Associados {
    id: number;
    idSituacoes: number;
    idEmpresaControlada:number;
    idGrupos: number;
    idAssociadoPrincipal: number;
    idEmpresaAssociada: number;
    matriculaAssociado: string;
    matriculaEmpresaAssociada: string;
    dataAdmissaoAssociacao: Date;
    dataAdmissaoEmpresa: Date;
    nome: string;
    situacao: string;
    motivo: string;
    docCPF: string;
    tel1: string;
    celular: string;
    eMail: string;
}

export class Situacoes {
    id: number;
    idEmpresaControlada: number;
    descricao: string;
    dataCadastro: Date;
    dataAlteracao: Date;
    idUsuarioCad: number;
}

export class Grupos {
  id: number;
  idEmpresaControlada: number;
  nomeGrupo: string;
  dataCadastro: string;
  dataAlteracao: string;
}

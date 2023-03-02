
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.6.1
 * Query Engine version: 694eea289a8462c80264df36757e4fdc129b1b32
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "694eea289a8462c80264df36757e4fdc129b1b32"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ACGrupoScalarFieldEnum = makeEnum({
  idgrupo: 'idgrupo',
  idacesso: 'idacesso',
  tipo: 'tipo'
});

exports.Prisma.ACGruposScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  QtdeAssinaturasBordero: 'QtdeAssinaturasBordero',
  ValorMaximoAssinaturaBordero: 'ValorMaximoAssinaturaBordero',
  QtdeAlteracoesVencimentoTitulo: 'QtdeAlteracoesVencimentoTitulo'
});

exports.Prisma.ACHEIRECHEQUECHEQUESScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  AGENCIA: 'AGENCIA',
  BANCO: 'BANCO',
  CGC: 'CGC',
  CHEQUEINICIAL: 'CHEQUEINICIAL',
  CHEQUEFINAL: 'CHEQUEFINAL',
  CODIGOFONTE: 'CODIGOFONTE',
  CONTA: 'CONTA',
  DATA: 'DATA',
  MOTIVO: 'MOTIVO',
  PESSOAJURIDICA: 'PESSOAJURIDICA',
  TIPO: 'TIPO'
});

exports.Prisma.ACHEIRECHEQUELOCALIZACAOScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  CIDADE: 'CIDADE',
  DATA: 'DATA',
  NOME: 'NOME',
  UF: 'UF',
  BAIRRO: 'BAIRRO',
  CEP: 'CEP',
  ENDERECO: 'ENDERECO',
  DDDFAX: 'DDDFAX',
  DDDTELEFONE: 'DDDTELEFONE',
  FAX: 'FAX',
  TELEFONE: 'TELEFONE',
  TIPO: 'TIPO'
});

exports.Prisma.ACHEIRECHEQUEMENSAGEMScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  MENSAGEM: 'MENSAGEM',
  CODIGOMENSAGEM: 'CODIGOMENSAGEM',
  NOME: 'NOME',
  DATA: 'DATA',
  BANCO: 'BANCO',
  PARTICIPANTE: 'PARTICIPANTE',
  CODIGOINDICADOR: 'CODIGOINDICADOR',
  INDICADOR: 'INDICADOR',
  TIPO: 'TIPO'
});

exports.Prisma.ACHEIRECHEQUEOCORRENCIASScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  AGENCIA: 'AGENCIA',
  BANCO: 'BANCO',
  DATAPRIMEIRAOCORRENCIA: 'DATAPRIMEIRAOCORRENCIA',
  DATAULTIMAOCORRENCIA: 'DATAULTIMAOCORRENCIA',
  NOME: 'NOME',
  QUANTIDADE: 'QUANTIDADE',
  CODIGOEMBRATEL: 'CODIGOEMBRATEL',
  DATA: 'DATA',
  FILIAL: 'FILIAL',
  ORIGEM: 'ORIGEM',
  TIPO: 'TIPO'
});

exports.Prisma.ACHEIRECHEQUEPENDENCIASScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  AVALISTA: 'AVALISTA',
  CODIGOEMBRATEL: 'CODIGOEMBRATEL',
  CODIGOMOEDA: 'CODIGOMOEDA',
  CONTRATO: 'CONTRATO',
  DATA: 'DATA',
  MODALIDADE: 'MODALIDADE',
  MOEDA: 'MOEDA',
  ORIGEM: 'ORIGEM',
  VALOR: 'VALOR'
});

exports.Prisma.ACHEIRECHEQUEPESSOATIPOScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  CLASSE: 'CLASSE',
  CODIGOCLASSE: 'CODIGOCLASSE',
  CODIGOTIPOPESSOA: 'CODIGOTIPOPESSOA',
  CONFERE: 'CONFERE',
  DATA: 'DATA',
  NOME: 'NOME',
  TIPOPESSOA: 'TIPOPESSOA',
  CGC: 'CGC',
  MENSAGEM: 'MENSAGEM',
  TIPO: 'TIPO'
});

exports.Prisma.ACHEIRECHEQUEREGCONSULTAScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  DATAEMISSAOPRIMEIROCHEQUE: 'DATAEMISSAOPRIMEIROCHEQUE',
  DATAEMISSAOULTIMOCHEQUE: 'DATAEMISSAOULTIMOCHEQUE',
  QUANTIDADEAPRAZO: 'QUANTIDADEAPRAZO',
  QUANTIDADEAPRAZO30DIAS: 'QUANTIDADEAPRAZO30DIAS',
  QUANTIDADEAPRAZOENTRE31E60DIAS: 'QUANTIDADEAPRAZOENTRE31E60DIAS',
  QUANTIDADEAPRAZOENTRE61E90DIAS: 'QUANTIDADEAPRAZOENTRE61E90DIAS',
  QUANTIDADEAVISTA15DIAS: 'QUANTIDADEAVISTA15DIAS'
});

exports.Prisma.ACHEIRECHEQUERGScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  DATA: 'DATA',
  NUMERO: 'NUMERO',
  RG: 'RG',
  ORGAOEMISSOR: 'ORGAOEMISSOR',
  UF: 'UF'
});

exports.Prisma.ACHEIRECHEQUESITUACAOScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  LINHA: 'LINHA',
  CODIGOSITUACAO: 'CODIGOSITUACAO',
  DATA: 'DATA',
  DATASITUACAO: 'DATASITUACAO',
  NOME: 'NOME',
  SITUACAO: 'SITUACAO'
});

exports.Prisma.ACHEIRECHEQUETELSANTERIORESScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  TELEFONE: 'TELEFONE',
  ORDEM: 'ORDEM'
});

exports.Prisma.ADAssinaturaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Participante: 'Participante',
  Assinante: 'Assinante',
  Qualificacao: 'Qualificacao',
  DtAssinatura: 'DtAssinatura'
});

exports.Prisma.ADDocumentoScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  ORIGINAL: 'ORIGINAL',
  PKCS7: 'PKCS7',
  NomeArquivo: 'NomeArquivo',
  Descricao: 'Descricao',
  TipoDocumento: 'TipoDocumento',
  Data: 'Data'
});

exports.Prisma.ADQualificacaoAssinanteScalarFieldEnum = makeEnum({
  ID: 'ID',
  Descricao: 'Descricao'
});

exports.Prisma.ADTipoDocumentoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Descricao: 'Descricao'
});

exports.Prisma.AcessoScalarFieldEnum = makeEnum({
  IdAcesso: 'IdAcesso',
  Tipo: 'Tipo',
  Padrao: 'Padrao',
  Permitidos: 'Permitidos',
  Descricao: 'Descricao',
  IdPai: 'IdPai'
});

exports.Prisma.AcheiRechequeLinhaScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  Linha: 'Linha',
  LinhaEditada: 'LinhaEditada'
});

exports.Prisma.AcheiRechequeScalarFieldEnum = makeEnum({
  CMC7: 'CMC7',
  Em: 'Em',
  cnpj: 'cnpj'
});

exports.Prisma.AditivoOperacaoProducaoScalarFieldEnum = makeEnum({
  aditivo: 'aditivo',
  numero: 'numero',
  aditivocliente: 'aditivocliente',
  grupoassinaturacliente: 'grupoassinaturacliente',
  grupoassinaturaempresa: 'grupoassinaturaempresa'
});

exports.Prisma.AgenciasScalarFieldEnum = makeEnum({
  Banco: 'Banco',
  Agencia: 'Agencia',
  Codigo: 'Codigo',
  Endereco: 'Endereco',
  Bairro: 'Bairro',
  Cidade: 'Cidade',
  Estado: 'Estado',
  CepCompleto: 'CepCompleto',
  TipoComparacao: 'TipoComparacao'
});

exports.Prisma.AgendaAgendadorasScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome'
});

exports.Prisma.AgendaRecebiveisCERCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Codigo: 'Codigo',
  Documento: 'Documento',
  Carteira: 'Carteira',
  DataAssinatura: 'DataAssinatura',
  DataInicio: 'DataInicio',
  DataFim: 'DataFim',
  QualquerCredenciadora: 'QualquerCredenciadora',
  ProtocoloOptIn: 'ProtocoloOptIn',
  DataCriacaoOptIn: 'DataCriacaoOptIn'
});

exports.Prisma.AgendaRecebiveisEstadoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.AgendaRecebiveisScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  AgendadoraID: 'AgendadoraID',
  AgendaID: 'AgendaID',
  SigflsID: 'SigflsID',
  Bordero: 'Bordero',
  EstadoID: 'EstadoID',
  CedenteCodigo: 'CedenteCodigo',
  CedenteDocumento: 'CedenteDocumento',
  CredenciadoraDocumento: 'CredenciadoraDocumento',
  Bandeira: 'Bandeira',
  Carteira: 'Carteira',
  DataVctoLiquidacao: 'DataVctoLiquidacao',
  Constituicao: 'Constituicao',
  ValorConstituidoTotal: 'ValorConstituidoTotal',
  ValorPreAntecipado: 'ValorPreAntecipado',
  ValorBloqueado: 'ValorBloqueado',
  ValorOnerado: 'ValorOnerado',
  ReferenciaExterna: 'ReferenciaExterna',
  RegrasDivisao: 'RegrasDivisao',
  DtInclusao: 'DtInclusao',
  QuemCriouID: 'QuemCriouID',
  DtAtualizacao: 'DtAtualizacao',
  QuemAtualizouID: 'QuemAtualizouID',
  MensagemErro: 'MensagemErro'
});

exports.Prisma.AgendamentoScalarFieldEnum = makeEnum({
  id: 'id',
  Ctrl_id: 'Ctrl_id',
  Clifor: 'Clifor',
  Data: 'Data',
  Horario: 'Horario',
  Descricao: 'Descricao',
  Status: 'Status',
  OldStatus: 'OldStatus',
  Tipo: 'Tipo',
  Efetuada: 'Efetuada',
  Fone: 'Fone',
  Owner: 'Owner'
});

exports.Prisma.AgendamentoTitulosScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Agendamento_ID: 'Agendamento_ID',
  Dcto: 'Dcto'
});

exports.Prisma.AlertaBorderoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigbors_ID: 'Sigbors_ID',
  TipoAlerta: 'TipoAlerta',
  Resumo: 'Resumo',
  Detalhe: 'Detalhe',
  Ordem: 'Ordem',
  Dt_Criacao: 'Dt_Criacao'
});

exports.Prisma.AlertaTituloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigfls_ID: 'Sigfls_ID',
  TipoAlerta: 'TipoAlerta',
  Resumo: 'Resumo',
  Detalhe: 'Detalhe',
  Ordem: 'Ordem',
  Dt_Criacao: 'Dt_Criacao'
});

exports.Prisma.AlineaScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  motivo: 'motivo',
  reapresentar: 'reapresentar',
  DevolucaoProvisoria: 'DevolucaoProvisoria'
});

exports.Prisma.AltCadImpScalarFieldEnum = makeEnum({
  id: 'id',
  TpAltCadImp: 'TpAltCadImp',
  Codigo: 'Codigo',
  CGC: 'CGC',
  dt_atualizacao: 'dt_atualizacao',
  bordero: 'bordero',
  usuario: 'usuario',
  Nome: 'Nome',
  Ender: 'Ender',
  Cidade: 'Cidade',
  Estado: 'Estado',
  CEP: 'CEP',
  Compl: 'Compl',
  Fone: 'Fone',
  Fax: 'Fax',
  Contato: 'Contato',
  Tipo: 'Tipo',
  Bairro: 'Bairro',
  Email: 'Email',
  Nome_old: 'Nome_old',
  Ender_old: 'Ender_old',
  Cidade_old: 'Cidade_old',
  Estado_old: 'Estado_old',
  CEP_old: 'CEP_old',
  Compl_old: 'Compl_old',
  Fone_old: 'Fone_old',
  Fax_old: 'Fax_old',
  Contato_old: 'Contato_old',
  Tipo_old: 'Tipo_old',
  Bairro_old: 'Bairro_old',
  Email_old: 'Email_old',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Logradouro_old: 'Logradouro_old',
  NumeroEndereco_old: 'NumeroEndereco_old',
  Ramal: 'Ramal',
  Celular: 'Celular',
  Ramal_old: 'Ramal_old',
  Celular_old: 'Celular_old',
  codibgecidade: 'codibgecidade',
  codibgecidade_old: 'codibgecidade_old',
  IE: 'IE',
  IE_old: 'IE_old'
});

exports.Prisma.ArquivoRetornoBancoDetalheScalarFieldEnum = makeEnum({
  ID: 'ID',
  ArquivoRetornoBanco_ID: 'ArquivoRetornoBanco_ID',
  Detalhe: 'Detalhe',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.ArquivoRetornoBancoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Banco: 'Banco',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou',
  TipoArquivo: 'TipoArquivo'
});

exports.Prisma.ArquivoRetornoClienteCadastroScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Ativo: 'Ativo',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID'
});

exports.Prisma.ArquivoRetornoClienteCadastroXLayoutXCarteiraScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Cadastro_ID: 'Cadastro_ID',
  Layout_ID: 'Layout_ID',
  Carteira_ID: 'Carteira_ID',
  Ativo: 'Ativo',
  Parametros: 'Parametros',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID'
});

exports.Prisma.ArquivoRetornoClienteLayoutScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome'
});

exports.Prisma.ArquivoRetornoClienteLayoutXCarteiraScalarFieldEnum = makeEnum({
  Layout_ID: 'Layout_ID',
  Carteira_ID: 'Carteira_ID'
});

exports.Prisma.ArquivoRetornoClientePublicacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Layout_ID: 'Layout_ID',
  Carteira_ID: 'Carteira_ID',
  Data: 'Data',
  NomeArquivo: 'NomeArquivo',
  Arquivo: 'Arquivo',
  QuantidadeOcorrencias: 'QuantidadeOcorrencias',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID'
});

exports.Prisma.ArquivoRetornoProcessadoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  HashArquivo: 'HashArquivo',
  QtdeExecutado: 'QtdeExecutado',
  QtdeRejeitado: 'QtdeRejeitado',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID'
});

exports.Prisma.AssinaturaBorderoScalarFieldEnum = makeEnum({
  Id: 'Id',
  Bordero: 'Bordero',
  Data: 'Data',
  Owner: 'Owner',
  Grupo: 'Grupo',
  EstadoBordero: 'EstadoBordero',
  TipoOcorrencia: 'TipoOcorrencia',
  Observacao: 'Observacao'
});

exports.Prisma.AssinaturaborderofaixadevaloresScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  qtdeassinaturas: 'qtdeassinaturas',
  valoroperacao: 'valoroperacao'
});

exports.Prisma.BIConsolidacaoSaldosScalarFieldEnum = makeEnum({
  Sigcad_ID: 'Sigcad_ID',
  Cedente: 'Cedente',
  CadGrupoEmpresarial_ID: 'CadGrupoEmpresarial_ID',
  SaldoConsolidado: 'SaldoConsolidado',
  VencidosConsolidado: 'VencidosConsolidado'
});

exports.Prisma.BacenCaracteristicaEspecialScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Dominio: 'Dominio',
  Descricao: 'Descricao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.BacenModalidadeOperacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Dominio: 'Dominio',
  Descricao: 'Descricao',
  Subdominio: 'Subdominio',
  DescricaoSubdominio: 'DescricaoSubdominio',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.BacenNaturezaOperacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Dominio: 'Dominio',
  Descricao: 'Descricao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.BancosScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Tamanho: 'Tamanho',
  ValidaCMC7: 'ValidaCMC7',
  Descricao: 'Descricao'
});

exports.Prisma.BemEmpenhadoOperacaoProducaoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  valor: 'valor',
  documento: 'documento',
  descricao: 'descricao'
});

exports.Prisma.BensScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Descricao: 'Descricao',
  Onus: 'Onus',
  ValorOnus: 'ValorOnus',
  Seguro: 'Seguro',
  Seguradora: 'Seguradora',
  ValorSeguro: 'ValorSeguro',
  Hipotecado: 'Hipotecado',
  Hipoteca: 'Hipoteca'
});

exports.Prisma.BordTarFIDC2ScalarFieldEnum = makeEnum({
  id: 'id',
  bordero: 'bordero',
  nome: 'nome',
  valor: 'valor',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.BordTarFIDCScalarFieldEnum = makeEnum({
  id: 'id',
  bordero: 'bordero',
  nome: 'nome',
  valor: 'valor',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.BordTar_ImportacaoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Bordero: 'Bordero',
  Nome: 'Nome',
  Valor: 'Valor',
  Codigo: 'Codigo',
  FormulaTarifaEsporadica: 'FormulaTarifaEsporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.BordtarScalarFieldEnum = makeEnum({
  id: 'id',
  bordero: 'bordero',
  nome: 'nome',
  valor: 'valor',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.BordtarcpScalarFieldEnum = makeEnum({
  id: 'id',
  bordero: 'bordero',
  nome: 'nome',
  valor: 'valor',
  codigo: 'codigo'
});

exports.Prisma.CADINDICEMONETARIOScalarFieldEnum = makeEnum({
  ID: 'ID',
  NOME: 'NOME',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.CBAssociacaoContaCorrenteScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  CtrlIDAssociacao: 'CtrlIDAssociacao',
  CarteiraCCLancamento: 'CarteiraCCLancamento',
  CtrlIDCCLancamento: 'CtrlIDCCLancamento'
});

exports.Prisma.CBAssociacaoExtratoBancarioScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  CtrlIDAssociacao: 'CtrlIDAssociacao',
  CtrlIDEBLancamento: 'CtrlIDEBLancamento'
});

exports.Prisma.CBAssociacaoScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  CtrlIDConciliacaoBancaria: 'CtrlIDConciliacaoBancaria'
});

exports.Prisma.CBConciliacaoBancariaScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  Carteira: 'Carteira',
  Banco: 'Banco',
  Data: 'Data',
  Control: 'Control',
  IncData: 'IncData',
  IncUsuario: 'IncUsuario'
});

exports.Prisma.CEPComplementarScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CEP: 'CEP',
  Logradouro: 'Logradouro',
  Endereco: 'Endereco',
  Bairro: 'Bairro',
  Cidade: 'Cidade',
  Estado: 'Estado',
  CodIBGECidade: 'CodIBGECidade',
  Observacao: 'Observacao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.CEPRestritoScalarFieldEnum = makeEnum({
  cepde: 'cepde',
  cepate: 'cepate',
  motivo: 'motivo'
});

exports.Prisma.CHEQUESScalarFieldEnum = makeEnum({
  id: 'id',
  BANCO: 'BANCO',
  AGENCIA: 'AGENCIA',
  CONTA: 'CONTA',
  CHEQUE: 'CHEQUE',
  DATA: 'DATA',
  DATABOA: 'DATABOA',
  VALOR: 'VALOR',
  CLIFOR: 'CLIFOR',
  DCTO: 'DCTO',
  SACADO: 'SACADO',
  FAVORECIDO: 'FAVORECIDO',
  CMC7: 'CMC7',
  CPFCGC: 'CPFCGC',
  CONSULTADO: 'CONSULTADO',
  IMPRESSO: 'IMPRESSO',
  ENVIADO: 'ENVIADO'
});

exports.Prisma.CTRL_IDScalarFieldEnum = makeEnum({
  NOME: 'NOME',
  NUMERO: 'NUMERO',
  STATUS: 'STATUS',
  verificado: 'verificado',
  validacao: 'validacao'
});

exports.Prisma.CadAlertasScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  tipoalerta: 'tipoalerta',
  alerta: 'alerta',
  valor: 'valor'
});

exports.Prisma.CadBalancoPatrimonialScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CliFor: 'CliFor',
  AnoExercicio: 'AnoExercicio',
  Clientes: 'Clientes',
  AtivoCirculante: 'AtivoCirculante',
  AtivoTotal: 'AtivoTotal',
  Fornecedores: 'Fornecedores',
  EmprestimosEFinanciamentosCP: 'EmprestimosEFinanciamentosCP',
  PassivoCirculante: 'PassivoCirculante',
  EmprestimosEFinanciamentosLP: 'EmprestimosEFinanciamentosLP',
  PassivoNaoCirculante: 'PassivoNaoCirculante',
  CapitalSocial: 'CapitalSocial',
  PL: 'PL',
  PassivoTotal: 'PassivoTotal',
  ReceitaBruta: 'ReceitaBruta',
  CMV: 'CMV',
  ReceitaLiquida: 'ReceitaLiquida',
  LucroOperacional: 'LucroOperacional',
  LucroLiquido: 'LucroLiquido',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.CadConfiguracoesScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  secao: 'secao',
  nome: 'nome',
  valor: 'valor'
});

exports.Prisma.CadContratoSocialScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CliFor: 'CliFor',
  Data: 'Data',
  Descricao: 'Descricao',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.CadEndividamentoScalarFieldEnum = makeEnum({
  ID: 'ID',
  CliFor: 'CliFor',
  Descricao: 'Descricao',
  Valor: 'Valor',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou',
  Data: 'Data'
});

exports.Prisma.CadFaturamentoContabilScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CliFor: 'CliFor',
  Data: 'Data',
  Valor: 'Valor',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou',
  Validade: 'Validade'
});

exports.Prisma.CadFoneScalarFieldEnum = makeEnum({
  id: 'id',
  ctrl_id: 'ctrl_id',
  codigo: 'codigo',
  Fone: 'Fone',
  Contato: 'Contato',
  Tipo: 'Tipo',
  ramal: 'ramal'
});

exports.Prisma.CadGrupoEmpresarialScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  Limite: 'Limite',
  LimPercCedFIDC: 'LimPercCedFIDC',
  LimPercCedFIDC2: 'LimPercCedFIDC2',
  LimPercSacFIDC: 'LimPercSacFIDC',
  LimPercSacFIDC2: 'LimPercSacFIDC2',
  ConsLimCedFIDC: 'ConsLimCedFIDC',
  ConsLimCedFIDC2: 'ConsLimCedFIDC2',
  ConsLimSacFIDC: 'ConsLimSacFIDC',
  ConsLimSacFIDC2: 'ConsLimSacFIDC2',
  PEPLimPercCedFIDC: 'PEPLimPercCedFIDC',
  PEPLimPercCedFIDC2: 'PEPLimPercCedFIDC2',
  PEPLimPercSacFIDC: 'PEPLimPercSacFIDC',
  PEPLimPercSacFIDC2: 'PEPLimPercSacFIDC2',
  PEPConsLimCedFIDC: 'PEPConsLimCedFIDC',
  PEPConsLimCedFIDC2: 'PEPConsLimCedFIDC2',
  PEPConsLimSacFIDC: 'PEPConsLimSacFIDC',
  PEPConsLimSacFIDC2: 'PEPConsLimSacFIDC2'
});

exports.Prisma.CadVisitaItemScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CadVisita_ID: 'CadVisita_ID',
  ConfCadVisitaSubTopico_ID: 'ConfCadVisitaSubTopico_ID',
  RespostaTexto: 'RespostaTexto',
  RespostaNumero: 'RespostaNumero',
  RespostaData: 'RespostaData',
  RespostaSelecaoValor: 'RespostaSelecaoValor',
  Dt_Exclusao: 'Dt_Exclusao'
});

exports.Prisma.CadVisitaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ConfCadVisitaModelo_ID: 'ConfCadVisitaModelo_ID',
  Sigcad_ID: 'Sigcad_ID',
  Dt_Visita: 'Dt_Visita',
  GerenteQueVistoriou_ID: 'GerenteQueVistoriou_ID',
  Dt_Aprovacao: 'Dt_Aprovacao',
  QuemAprovou_ID: 'QuemAprovou_ID',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID'
});

exports.Prisma.CadanotacaoScalarFieldEnum = makeEnum({
  id: 'id',
  ctrl_id: 'ctrl_id',
  codigo: 'codigo',
  data: 'data',
  usuario: 'usuario',
  tipoanotacao: 'tipoanotacao',
  anotacao: 'anotacao'
});

exports.Prisma.CadastroEmailScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Email: 'Email',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID'
});

exports.Prisma.CadastroItensComplementaresScalarFieldEnum = makeEnum({
  ID: 'ID',
  Nome: 'Nome',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.CadcontabilidadeScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  ContabilDPs: 'ContabilDPs',
  HisContabilDPs: 'HisContabilDPs',
  ContabilCHs: 'ContabilCHs',
  HisContabilCHs: 'HisContabilCHs',
  ContabilRNs: 'ContabilRNs',
  HisContabilRNs: 'HisContabilRNs',
  ContabilNPs: 'ContabilNPs',
  HisContabilNPs: 'HisContabilNPs',
  ContabilDPsTr: 'ContabilDPsTr',
  HisContabilDPsTr: 'HisContabilDPsTr',
  ContabilCHsTr: 'ContabilCHsTr',
  HisContabilCHsTr: 'HisContabilCHsTr',
  ContabilRNsTr: 'ContabilRNsTr',
  HisContabilRNsTr: 'HisContabilRNsTr',
  ContabilNPsTr: 'ContabilNPsTr',
  HisContabilNPsTr: 'HisContabilNPsTr',
  ContabilCPTr: 'ContabilCPTr',
  ContabilCPHTr: 'ContabilCPHTr',
  contabildpsds: 'contabildpsds',
  hiscontabildpsds: 'hiscontabildpsds',
  contabilchsds: 'contabilchsds',
  hiscontabilchsds: 'hiscontabilchsds',
  contabilrnsds: 'contabilrnsds',
  hiscontabilrnsds: 'hiscontabilrnsds',
  contabilnpsds: 'contabilnpsds',
  hiscontabilnpsds: 'hiscontabilnpsds',
  contabiloriginadode: 'contabiloriginadode',
  contabilhoriginadode: 'contabilhoriginadode',
  ContabilFPs: 'ContabilFPs',
  HisContabilFPs: 'HisContabilFPs',
  contabilestornotitulofidc: 'contabilestornotitulofidc',
  contabilhestornotitulofidc: 'contabilhestornotitulofidc',
  contabilestornotitulo: 'contabilestornotitulo',
  contabilhestornotitulo: 'contabilhestornotitulo',
  contabiloutrosdireitoscred: 'contabiloutrosdireitoscred',
  contabilhoutrosdireitoscred: 'contabilhoutrosdireitoscred',
  contabilp: 'contabilp',
  hiscontabilp: 'hiscontabilp',
  contabilx: 'contabilx',
  hiscontabilx: 'hiscontabilx',
  contabilpx: 'contabilpx',
  hiscontabilpx: 'hiscontabilpx'
});

exports.Prisma.CadcredScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  metodocalculo: 'metodocalculo',
  gerenteconta: 'gerenteconta',
  floatminimo: 'floatminimo',
  taxainadimplencia: 'taxainadimplencia',
  servico: 'servico',
  tarifatitulo: 'tarifatitulo',
  tarifacheque: 'tarifacheque',
  cklimite: 'cklimite',
  ckprazo: 'ckprazo',
  limcheque: 'limcheque',
  limtitulo: 'limtitulo',
  rigcheque: 'rigcheque',
  rigtitulo: 'rigtitulo',
  rigprazo: 'rigprazo',
  pzmaximo: 'pzmaximo',
  pzminimo: 'pzminimo',
  comissao: 'comissao',
  FatorBancario: 'FatorBancario',
  tarabatimento: 'tarabatimento',
  tarcbrabt: 'tarcbrabt',
  tarpgtoparcial: 'tarpgtoparcial',
  ckprazoCP: 'ckprazoCP',
  pzmaximoCP: 'pzmaximoCP',
  pzminimoCP: 'pzminimoCP',
  floatrepasse: 'floatrepasse',
  pzmaximoCR: 'pzmaximoCR',
  pzminimoCR: 'pzminimoCR',
  Sacador: 'Sacador',
  pzvencCR: 'pzvencCR',
  ckprazoCR: 'ckprazoCR',
  floatrepassecomp: 'floatrepassecomp',
  floatrepassebanco: 'floatrepassebanco',
  taxapendencia: 'taxapendencia',
  ServicoTr: 'ServicoTr',
  ServicoCP: 'ServicoCP',
  PagarRetencoes: 'PagarRetencoes',
  FatorSImp: 'FatorSImp',
  LimiteFatorBancario: 'LimiteFatorBancario',
  FatorBancarioSuperior: 'FatorBancarioSuperior',
  TrancheLimite: 'TrancheLimite',
  MultaVencimento: 'MultaVencimento',
  metodocalculofidc: 'metodocalculofidc',
  servicofidc: 'servicofidc',
  tarifatitulofidc: 'tarifatitulofidc',
  tarifachequefidc: 'tarifachequefidc',
  pzmaximofidc: 'pzmaximofidc',
  pzminimofidc: 'pzminimofidc',
  PercLimSacCed: 'PercLimSacCed',
  fatorvalorpresente: 'fatorvalorpresente',
  FatorProducao: 'FatorProducao',
  juroscobrancatr: 'juroscobrancatr',
  FatorCP: 'FatorCP',
  limitefp: 'limitefp',
  riglimitefp: 'riglimitefp',
  limitependencias: 'limitependencias',
  riglimitependencias: 'riglimitependencias',
  indicante: 'indicante',
  comissaoindicante: 'comissaoindicante',
  juroscobranca: 'juroscobranca',
  diasprotesto: 'diasprotesto',
  dt_atualizacao: 'dt_atualizacao',
  indiceliqalvo: 'indiceliqalvo',
  TipoPercLimSacCed: 'TipoPercLimSacCed',
  honadvocaticios: 'honadvocaticios',
  cklimitefidc: 'cklimitefidc',
  limchequefidc: 'limchequefidc',
  limtitulofidc: 'limtitulofidc',
  rigchequefidc: 'rigchequefidc',
  rigtitulofidc: 'rigtitulofidc',
  limitediariofidc: 'limitediariofidc',
  taxainadimplenciaregresso: 'taxainadimplenciaregresso',
  taxapendenciaregresso: 'taxapendenciaregresso',
  metodocalculofidc2: 'metodocalculofidc2',
  servicofidc2: 'servicofidc2',
  tarifatitulofidc2: 'tarifatitulofidc2',
  tarifachequefidc2: 'tarifachequefidc2',
  pzmaximofidc2: 'pzmaximofidc2',
  pzminimofidc2: 'pzminimofidc2',
  cklimitefidc2: 'cklimitefidc2',
  limchequefidc2: 'limchequefidc2',
  limtitulofidc2: 'limtitulofidc2',
  rigchequefidc2: 'rigchequefidc2',
  rigtitulofidc2: 'rigtitulofidc2',
  limitediariofidc2: 'limitediariofidc2',
  LimSacadoOutrosLimite: 'LimSacadoOutrosLimite',
  LimSacadoOutrosLimiteFIDC: 'LimSacadoOutrosLimiteFIDC',
  LimSacadoOutrosLimiteFIDC2: 'LimSacadoOutrosLimiteFIDC2',
  tarbxcobrreg: 'tarbxcobrreg',
  tarfomproducao: 'tarfomproducao',
  ReceberComunicadoSacado: 'ReceberComunicadoSacado',
  MultaRegresso: 'MultaRegresso',
  juroscobrancafidc: 'juroscobrancafidc',
  juroscobrancafidc2: 'juroscobrancafidc2',
  tarcartaanuencia: 'tarcartaanuencia',
  TarProrrogacao: 'TarProrrogacao',
  tarifacartorio: 'tarifacartorio',
  TarSustacaoProtesto: 'TarSustacaoProtesto',
  TarTitulosVencidos: 'TarTitulosVencidos',
  PzTarTitulosVencidos: 'PzTarTitulosVencidos',
  taxaconfirmacao: 'taxaconfirmacao',
  pzminimoconfirmacao: 'pzminimoconfirmacao',
  pzretornoaditivo: 'pzretornoaditivo',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  ApresentacaoDocumentoFIDC: 'ApresentacaoDocumentoFIDC',
  ApresentacaoDocumentoFIDC2: 'ApresentacaoDocumentoFIDC2',
  MultaCobranca: 'MultaCobranca',
  MultaCobrancaTr: 'MultaCobrancaTr',
  MultaCobrancaFidc: 'MultaCobrancaFidc',
  MultaCobrancaFidc2: 'MultaCobrancaFidc2',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  LimPercCedFIDC: 'LimPercCedFIDC',
  LimPercSacPFFIDC: 'LimPercSacPFFIDC',
  LimPercSacPJFIDC: 'LimPercSacPJFIDC',
  LimPercCedFIDC2: 'LimPercCedFIDC2',
  LimPercSacPFFIDC2: 'LimPercSacPFFIDC2',
  LimPercSacPJFIDC2: 'LimPercSacPJFIDC2',
  ConsLimCedFIDC: 'ConsLimCedFIDC',
  ConsLimCedFIDC2: 'ConsLimCedFIDC2',
  ConsLimSacFIDC: 'ConsLimSacFIDC',
  ConsLimSacFIDC2: 'ConsLimSacFIDC2',
  PEPLimPercCedFIDC: 'PEPLimPercCedFIDC',
  PEPLimPercSacPFFIDC: 'PEPLimPercSacPFFIDC',
  PEPLimPercSacPJFIDC: 'PEPLimPercSacPJFIDC',
  PEPLimPercCedFIDC2: 'PEPLimPercCedFIDC2',
  PEPLimPercSacPFFIDC2: 'PEPLimPercSacPFFIDC2',
  PEPLimPercSacPJFIDC2: 'PEPLimPercSacPJFIDC2',
  PEPConsLimCedFIDC: 'PEPConsLimCedFIDC',
  PEPConsLimCedFIDC2: 'PEPConsLimCedFIDC2',
  PEPConsLimSacFIDC: 'PEPConsLimSacFIDC',
  PEPConsLimSacFIDC2: 'PEPConsLimSacFIDC2',
  TarBxCustodiaChequeReg: 'TarBxCustodiaChequeReg',
  LimPercTitAConfirmar: 'LimPercTitAConfirmar',
  LimPercTitAPreConfirmar: 'LimPercTitAPreConfirmar',
  LimPercTitAConfirmarFIDC: 'LimPercTitAConfirmarFIDC',
  LimPercTitAPreConfirmarFIDC: 'LimPercTitAPreConfirmarFIDC',
  LimPercTitAConfirmarFIDC2: 'LimPercTitAConfirmarFIDC2',
  LimPercTitAPreConfirmarFIDC2: 'LimPercTitAPreConfirmarFIDC2',
  TipoPercTitAConfirmar: 'TipoPercTitAConfirmar',
  TipoPercTitAPreConfirmar: 'TipoPercTitAPreConfirmar',
  TipoPercTitAConfirmarFIDC: 'TipoPercTitAConfirmarFIDC',
  TipoPercTitAPreConfirmarFIDC: 'TipoPercTitAPreConfirmarFIDC',
  TipoPercTitAConfirmarFIDC2: 'TipoPercTitAConfirmarFIDC2',
  TipoPercTitAPreConfirmarFIDC2: 'TipoPercTitAPreConfirmarFIDC2',
  PercLimSacCedFIDC: 'PercLimSacCedFIDC',
  TipoPercLimSacCedFIDC: 'TipoPercLimSacCedFIDC',
  PercLimSacCedFIDC2: 'PercLimSacCedFIDC2',
  TipoPercLimSacCedFIDC2: 'TipoPercLimSacCedFIDC2',
  limitediario: 'limitediario',
  DescComercialAposLimite: 'DescComercialAposLimite',
  DescComercialAposLimiteFIDC: 'DescComercialAposLimiteFIDC',
  DescComercialAposLimiteFIDC2: 'DescComercialAposLimiteFIDC2',
  TrancheLimiteFIDC: 'TrancheLimiteFIDC',
  TrancheLimiteFIDC2: 'TrancheLimiteFIDC2',
  ControlaCartaDeCessao: 'ControlaCartaDeCessao',
  AtualizaLimiteSacado: 'AtualizaLimiteSacado',
  ModoDeCobrancaSacado_ID: 'ModoDeCobrancaSacado_ID',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  FatorProducaoMinimo: 'FatorProducaoMinimo',
  FatorValorPresenteMinimo: 'FatorValorPresenteMinimo',
  TaxaInadimplenciaRegressoMinimo: 'TaxaInadimplenciaRegressoMinimo',
  TaxaPendenciaRegressoMinimo: 'TaxaPendenciaRegressoMinimo',
  MultaRegressoMinimo: 'MultaRegressoMinimo',
  LocalPgtoBoleto: 'LocalPgtoBoleto',
  TaxaInadimplenciaRetorno: 'TaxaInadimplenciaRetorno',
  TaxaInadimplenciaRetornoTr: 'TaxaInadimplenciaRetornoTr',
  TaxaInadimplenciaRetornoFIDC: 'TaxaInadimplenciaRetornoFIDC',
  TaxaInadimplenciaRetornoFIDC2: 'TaxaInadimplenciaRetornoFIDC2',
  EnviaMsgBoletoNaRemessa: 'EnviaMsgBoletoNaRemessa',
  EnviaMsgBoletoNaRemessa2: 'EnviaMsgBoletoNaRemessa2',
  EnviaMsgBoletoNaRemessa3: 'EnviaMsgBoletoNaRemessa3',
  EnviaMsgBoletoNaRemessa4: 'EnviaMsgBoletoNaRemessa4',
  EnviaMsgBoletoNaRemessa5: 'EnviaMsgBoletoNaRemessa5',
  ImportarNumeroBancario: 'ImportarNumeroBancario',
  FloatCliente: 'FloatCliente',
  IncFloatNaoUtil: 'IncFloatNaoUtil',
  FloatDiaUtil: 'FloatDiaUtil',
  PrazoIncluiNaoUtil: 'PrazoIncluiNaoUtil',
  FloatCorrido: 'FloatCorrido',
  naoimportarnumerobancario: 'naoimportarnumerobancario',
  EstabelecimentoFIDC: 'EstabelecimentoFIDC',
  EstabelecimentoFIDC2: 'EstabelecimentoFIDC2',
  LimiteCanhoto: 'LimiteCanhoto',
  LimiteCanhotoFIDC: 'LimiteCanhotoFIDC',
  LimiteCanhotoFIDC2: 'LimiteCanhotoFIDC2',
  PrazoLimiteConfirmacaoDeTitulos: 'PrazoLimiteConfirmacaoDeTitulos',
  NaoControlaCanhoto: 'NaoControlaCanhoto',
  EnviaAgenciaEContaNaRemessa: 'EnviaAgenciaEContaNaRemessa',
  AgenciaCobranca: 'AgenciaCobranca',
  ContaCorrenteCobranca: 'ContaCorrenteCobranca'
});

exports.Prisma.CaddctosScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  data: 'data',
  owner: 'owner',
  critico: 'critico'
});

exports.Prisma.CademailScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  email: 'email',
  contato: 'contato'
});

exports.Prisma.CadfavorScalarFieldEnum = makeEnum({
  id: 'id',
  ctrl_id: 'ctrl_id',
  codigo: 'codigo',
  favorecido: 'favorecido',
  banco: 'banco',
  agencia: 'agencia',
  conta: 'conta',
  NomeAgencia: 'NomeAgencia',
  CGC: 'CGC',
  DesconsiderarPraca: 'DesconsiderarPraca',
  DVAGENCIA: 'DVAGENCIA',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.CadpfScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  naturalidade: 'naturalidade',
  sexo: 'sexo',
  orgaoemissor: 'orgaoemissor',
  dataexpedicao: 'dataexpedicao',
  pai: 'pai',
  mae: 'mae',
  nacionalidade: 'nacionalidade',
  estadocivil: 'estadocivil',
  profissao: 'profissao',
  renda: 'renda',
  conjuge: 'conjuge',
  dependentes: 'dependentes',
  outrasrendas: 'outrasrendas',
  regime: 'regime',
  dt_atualizacao: 'dt_atualizacao',
  Assinatura: 'Assinatura',
  Fotografia: 'Fotografia',
  pessoapolitica: 'pessoapolitica',
  temparentepessoapolitica: 'temparentepessoapolitica',
  parentepessoapolitica: 'parentepessoapolitica',
  parentesco: 'parentesco',
  datainiciomandato: 'datainiciomandato',
  datafimmandato: 'datafimmandato',
  iepf: 'iepf',
  eCPFPossui: 'eCPFPossui'
});

exports.Prisma.CadpjScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  im: 'im',
  datafundacao: 'datafundacao',
  juntacomercial: 'juntacomercial',
  ramoatividade: 'ramoatividade',
  grupoeconomico: 'grupoeconomico',
  alteracaocontr: 'alteracaocontr',
  filiais: 'filiais',
  dtalteracao: 'dtalteracao',
  matriz: 'matriz',
  dt_atualizacao: 'dt_atualizacao',
  faturamentocontabil: 'faturamentocontabil',
  datafaturamento: 'datafaturamento',
  Assinatura: 'Assinatura',
  CNAE: 'CNAE',
  IsentoIOFAdicional: 'IsentoIOFAdicional',
  eCNPJPossui: 'eCNPJPossui',
  CNPJAtivo: 'CNPJAtivo',
  OptanteSimplesNacional: 'OptanteSimplesNacional'
});

exports.Prisma.CadprodScalarFieldEnum = makeEnum({
  id: 'id',
  ctrl_id: 'ctrl_id',
  clifor: 'clifor',
  produto: 'produto',
  carrochefe: 'carrochefe'
});

exports.Prisma.CadprofScalarFieldEnum = makeEnum({
  id: 'id',
  codigopj: 'codigopj',
  tipo: 'tipo',
  codigopf: 'codigopf',
  temposervico: 'temposervico',
  ramal: 'ramal',
  cargo: 'cargo',
  departamento: 'departamento',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.CadsocioScalarFieldEnum = makeEnum({
  id: 'id',
  codigopj: 'codigopj',
  codigopf: 'codigopf',
  participacao: 'participacao',
  grupo: 'grupo',
  procurador: 'procurador',
  vlprocuracao: 'vlprocuracao',
  cartorio: 'cartorio',
  ultconsulta: 'ultconsulta',
  notaconsulta: 'notaconsulta',
  Departamento: 'Departamento',
  EmpresaProcurador: 'EmpresaProcurador'
});

exports.Prisma.CadtarScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  nome: 'nome',
  valor: 'valor',
  titulos: 'titulos',
  cpagar: 'cpagar',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.Cadtarfidc2ScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  nome: 'nome',
  valor: 'valor',
  titulos: 'titulos',
  cpagar: 'cpagar',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.CadtarfidcScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  nome: 'nome',
  valor: 'valor',
  titulos: 'titulos',
  cpagar: 'cpagar',
  codigo: 'codigo',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.CartaOperacaoProducaoScalarFieldEnum = makeEnum({
  carta: 'carta',
  numero: 'numero'
});

exports.Prisma.CartaoDeCreditoBandeiraScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.CarteiraScalarFieldEnum = makeEnum({
  NumeroCarteira: 'NumeroCarteira',
  Nome: 'Nome',
  NomeAbreviado: 'NomeAbreviado',
  GeraArquivoWBACentralDeRisco: 'GeraArquivoWBACentralDeRisco',
  Compra: 'Compra',
  Hash: 'Hash',
  ativo: 'ativo'
});

exports.Prisma.CartoesScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Operadora: 'Operadora',
  Numero: 'Numero',
  Limite: 'Limite',
  Vcto: 'Vcto'
});

exports.Prisma.CepbairroScalarFieldEnum = makeEnum({
  cidade: 'cidade',
  codigo: 'codigo',
  descricao: 'descricao'
});

exports.Prisma.CeplocalScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  descricao: 'descricao',
  estado: 'estado',
  cep: 'cep',
  codibgecidade: 'codibgecidade'
});

exports.Prisma.CepnumeroScalarFieldEnum = makeEnum({
  cep: 'cep',
  endereco: 'endereco',
  bairro: 'bairro',
  cidade: 'cidade',
  Logradouro: 'Logradouro'
});

exports.Prisma.ChequesCustodiante2ScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  conferido: 'conferido',
  est_port: 'est_port',
  est_port_old: 'est_port_old',
  portador: 'portador',
  bord_port: 'bord_port',
  dtportador: 'dtportador',
  cart_port: 'cart_port',
  float_port: 'float_port',
  direta: 'direta',
  dtbaixa: 'dtbaixa'
});

exports.Prisma.ChequesCustodianteScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  conferido: 'conferido',
  est_port: 'est_port',
  est_port_old: 'est_port_old',
  portador: 'portador',
  bord_port: 'bord_port',
  dtportador: 'dtportador',
  cart_port: 'cart_port',
  float_port: 'float_port',
  direta: 'direta',
  dtbaixa: 'dtbaixa'
});

exports.Prisma.CkdctosScalarFieldEnum = makeEnum({
  id: 'id',
  clifor: 'clifor',
  nome: 'nome',
  conferido: 'conferido',
  data: 'data',
  owner: 'owner'
});

exports.Prisma.ClassificacaoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  variacao: 'variacao',
  vinicial: 'vinicial',
  vfinal: 'vfinal',
  data: 'data',
  owner: 'owner',
  vinicialtitulos: 'vinicialtitulos'
});

exports.Prisma.CobConfiguracoesScalarFieldEnum = makeEnum({
  banco: 'banco',
  carteira: 'carteira',
  nome: 'nome',
  valor: 'valor'
});

exports.Prisma.CobEstScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Texto: 'Texto',
  Abreviado: 'Abreviado'
});

exports.Prisma.CobInstrucoesScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  carteira: 'carteira',
  instrucao: 'instrucao'
});

exports.Prisma.CobTarifaScalarFieldEnum = makeEnum({
  banco: 'banco',
  servico: 'servico',
  tarifa: 'tarifa',
  Ctrl_ID: 'Ctrl_ID',
  TipoCobTarifa_ID: 'TipoCobTarifa_ID'
});

exports.Prisma.CobrancaScalarFieldEnum = makeEnum({
  Data: 'Data',
  Estado: 'Estado',
  Ctrl_id: 'Ctrl_id',
  Ocorrencia: 'Ocorrencia',
  Carteira: 'Carteira',
  envio: 'envio',
  bancoliq: 'bancoliq',
  agencialiq: 'agencialiq',
  desconto: 'desconto',
  acrescimo: 'acrescimo',
  ocorbco: 'ocorbco'
});

exports.Prisma.ComissaoScalarFieldEnum = makeEnum({
  fatorate: 'fatorate',
  comissao: 'comissao'
});

exports.Prisma.ConcentreDScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  sequencia: 'sequencia',
  tipo: 'tipo',
  DataOcorrencia: 'DataOcorrencia',
  Moeda: 'Moeda',
  Valor: 'Valor',
  Cdd_DcmntCrdr: 'Cdd_DcmntCrdr',
  Prc_Dstrt: 'Prc_Dstrt',
  Avlst_Aln: 'Avlst_Aln',
  Ntrz_NmBnc_Crtr: 'Ntrz_NmBnc_Crtr',
  UF: 'UF',
  Prtcpnt_Vr_Bnc_Cnvn_CNPJ: 'Prtcpnt_Vr_Bnc_Cnvn_CNPJ',
  Emp_Agnc_Cntrt: 'Emp_Agnc_Cntrt',
  Chq: 'Chq',
  CCF: 'CCF'
});

exports.Prisma.ConcentreRScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  sequencia: 'sequencia',
  tipo: 'tipo',
  Descricao: 'Descricao',
  DataInicio: 'DataInicio',
  DataFinal: 'DataFinal',
  QtdOcorrencias: 'QtdOcorrencias',
  Moeda: 'Moeda',
  Valor: 'Valor'
});

exports.Prisma.ConcentreScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  Em: 'Em'
});

exports.Prisma.ConfCadVisitaModeloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Modelo: 'Modelo',
  Ativo: 'Ativo',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ConfCadVisitaSelecaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Tipo: 'Tipo',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ConfCadVisitaSelecaoValorScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ConfCadVisitaSelecao_ID: 'ConfCadVisitaSelecao_ID',
  Ordem: 'Ordem',
  Valor: 'Valor',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ConfCadVisitaSubTopicoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ConfCadVisitaTopico_ID: 'ConfCadVisitaTopico_ID',
  Ordem: 'Ordem',
  SubTopico: 'SubTopico',
  Dominio: 'Dominio',
  UnidadeDeMedida: 'UnidadeDeMedida',
  CopiarDoUltimo: 'CopiarDoUltimo',
  ConfCadVisitaSelecao_ID: 'ConfCadVisitaSelecao_ID',
  Obrigatorio: 'Obrigatorio',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ConfCadVisitaTopicoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ConfCadVisitaModelo_ID: 'ConfCadVisitaModelo_ID',
  Ordem: 'Ordem',
  Topico: 'Topico',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ConfigUserCarteiraScalarFieldEnum = makeEnum({
  Usuario: 'Usuario',
  Item: 'Item',
  Carteira: 'Carteira',
  Valor: 'Valor'
});

exports.Prisma.ConfigUserScalarFieldEnum = makeEnum({
  Usuario: 'Usuario',
  Item: 'Item',
  Valor: 'Valor'
});

exports.Prisma.ConsultaCadastroItemScalarFieldEnum = makeEnum({
  data: 'data',
  cadastro: 'cadastro',
  nomeitem: 'nomeitem',
  valoritem: 'valoritem'
});

exports.Prisma.ConsultaParametroScalarFieldEnum = makeEnum({
  data: 'data',
  nomeparametro: 'nomeparametro',
  valorparametro: 'valorparametro'
});

exports.Prisma.ConsultaScalarFieldEnum = makeEnum({
  data: 'data',
  usuario: 'usuario'
});

exports.Prisma.ContasLancamentoComissaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Carteira_ID: 'Carteira_ID',
  ContasLancamento_ID: 'ContasLancamento_ID',
  Sigven_ID: 'Sigven_ID',
  ValorBase: 'ValorBase',
  PercentualComissao: 'PercentualComissao',
  ValorComissao: 'ValorComissao',
  TipoDeComissao: 'TipoDeComissao',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou: 'QuemEliminou',
  DtLiberacaoPagamentoDaComissao: 'DtLiberacaoPagamentoDaComissao'
});

exports.Prisma.ContratoFIDC2ScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  numero: 'numero',
  data: 'data',
  cartorio: 'cartorio',
  cartnumero: 'cartnumero',
  cartdata: 'cartdata',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  prazo: 'prazo',
  assinatura: 'assinatura',
  owner: 'owner',
  sequencia: 'sequencia',
  penhorbens: 'penhorbens',
  vlcontrato: 'vlcontrato',
  ValidadeIndeterminada: 'ValidadeIndeterminada',
  LimiteContrato: 'LimiteContrato',
  idWeb: 'idWeb'
});

exports.Prisma.ContratoFIDCScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  numero: 'numero',
  data: 'data',
  cartorio: 'cartorio',
  cartnumero: 'cartnumero',
  cartdata: 'cartdata',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  prazo: 'prazo',
  assinatura: 'assinatura',
  owner: 'owner',
  sequencia: 'sequencia',
  penhorbens: 'penhorbens',
  vlcontrato: 'vlcontrato',
  ValidadeIndeterminada: 'ValidadeIndeterminada',
  LimiteContrato: 'LimiteContrato',
  idWeb: 'idWeb'
});

exports.Prisma.ContratoProducaoScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  numero: 'numero',
  data: 'data',
  cartorio: 'cartorio',
  cartnumero: 'cartnumero',
  cartdata: 'cartdata',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  prazo: 'prazo',
  assinatura: 'assinatura',
  owner: 'owner',
  sequencia: 'sequencia',
  penhorbens: 'penhorbens',
  vlcontrato: 'vlcontrato',
  ValidadeIndeterminada: 'ValidadeIndeterminada',
  LimiteContrato: 'LimiteContrato'
});

exports.Prisma.ContratoScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  numero: 'numero',
  data: 'data',
  cartorio: 'cartorio',
  cartnumero: 'cartnumero',
  cartdata: 'cartdata',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  prazo: 'prazo',
  assinatura: 'assinatura',
  owner: 'owner',
  sequencia: 'sequencia',
  penhorbens: 'penhorbens',
  vlcontrato: 'vlcontrato',
  ValidadeIndeterminada: 'ValidadeIndeterminada',
  LimiteContrato: 'LimiteContrato',
  idWeb: 'idWeb'
});

exports.Prisma.ContratotScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  numero: 'numero',
  data: 'data',
  cartorio: 'cartorio',
  cartnumero: 'cartnumero',
  cartdata: 'cartdata',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  prazo: 'prazo',
  assinatura: 'assinatura',
  owner: 'owner',
  vlcontrato: 'vlcontrato',
  sequencia: 'sequencia',
  penhorbens: 'penhorbens',
  ValidadeIndeterminada: 'ValidadeIndeterminada',
  LimiteContrato: 'LimiteContrato'
});

exports.Prisma.ControlScalarFieldEnum = makeEnum({
  control: 'control',
  tipo: 'tipo',
  numero: 'numero',
  texto: 'texto'
});

exports.Prisma.ControleProtestoScalarFieldEnum = makeEnum({
  ID: 'ID',
  RegBB: 'RegBB',
  Ctrl_id: 'Ctrl_id',
  Carteira: 'Carteira',
  PagoPor: 'PagoPor',
  ProtestoDevido: 'ProtestoDevido',
  ReconfTipoCanhoto: 'ReconfTipoCanhoto',
  ReconfTemNotaFiscal: 'ReconfTemNotaFiscal',
  TarifaProtesto: 'TarifaProtesto',
  DtProtesto: 'DtProtesto',
  DtChecagemDcto: 'DtChecagemDcto',
  DtInformativoProtesto: 'DtInformativoProtesto',
  DtInstrumentoProtesto: 'DtInstrumentoProtesto',
  DtCobrancaAmigavel: 'DtCobrancaAmigavel',
  DtInformacaoPagamento: 'DtInformacaoPagamento',
  DtEntregaDocumentacao: 'DtEntregaDocumentacao',
  DtRecebProtocoloEntrega: 'DtRecebProtocoloEntrega',
  DtEnvioJuridico: 'DtEnvioJuridico',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Observacao: 'Observacao',
  ReconfEmissaoCarta: 'ReconfEmissaoCarta',
  ComunicadoSacado: 'ComunicadoSacado',
  ComunicadoCedente: 'ComunicadoCedente',
  DtRegistroCobranca: 'DtRegistroCobranca',
  DtEntregaDocumentacaoSacado: 'DtEntregaDocumentacaoSacado',
  DtInformativoProtestoSacado: 'DtInformativoProtestoSacado'
});

exports.Prisma.ControleReciboCPScalarFieldEnum = makeEnum({
  id: 'id',
  numero: 'numero',
  dataEmissao: 'dataEmissao',
  dataRecebimento: 'dataRecebimento',
  owner: 'owner',
  observacao: 'observacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.ConverteScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  De: 'De',
  Ate: 'Ate'
});

exports.Prisma.CredenciadorasCERCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Agenda_ID: 'Agenda_ID',
  CNPJ: 'CNPJ',
  RazaoSocial: 'RazaoSocial'
});

exports.Prisma.CreditBureauLinhaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  LinhaEditada: 'LinhaEditada',
  TipLinha: 'TipLinha'
});

exports.Prisma.CreditBureauScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Em: 'Em'
});

exports.Prisma.CreditHubScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Cadastro: 'Cadastro',
  Chave: 'Chave',
  Em: 'Em',
  Arquivo: 'Arquivo'
});

exports.Prisma.CreditbureaulinhaspcScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  linha: 'linha',
  linhaeditada: 'linhaeditada',
  tiplinha: 'tiplinha',
  codigomensagem: 'codigomensagem',
  subtipo: 'subtipo',
  datainclusao: 'datainclusao',
  datavencimento: 'datavencimento',
  tipooperacao: 'tipooperacao',
  numerocontrato: 'numerocontrato',
  valordebito: 'valordebito',
  nomedoassociado: 'nomedoassociado',
  cidadedoassociado: 'cidadedoassociado',
  uf: 'uf',
  nomedoconsumidor: 'nomedoconsumidor',
  entidadeorigem: 'entidadeorigem'
});

exports.Prisma.CrvClassificacaoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  nomecs: 'nomecs',
  senhacs: 'senhacs',
  nometit: 'nometit',
  senhatit: 'senhatit',
  nomech: 'nomech',
  senhach: 'senhach'
});

exports.Prisma.CrvRespDetalheScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  politica: 'politica',
  resposta: 'resposta',
  finalizador: 'finalizador',
  ordem: 'ordem'
});

exports.Prisma.CrvRespostaScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  clifor: 'clifor',
  sigfls: 'sigfls',
  data: 'data'
});

exports.Prisma.CsimScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  data: 'data',
  afinanciar: 'afinanciar',
  avista: 'avista',
  iof: 'iof',
  viof: 'viof',
  financiamento: 'financiamento',
  cliente: 'cliente',
  travado: 'travado',
  FinanciarIOF: 'FinanciarIOF'
});

exports.Prisma.CsimparcScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  datapgto: 'datapgto',
  dc: 'dc',
  du: 'du',
  valorpgto: 'valorpgto',
  encargo: 'encargo',
  amortizacao: 'amortizacao',
  juros: 'juros',
  saldodevedor: 'saldodevedor'
});

exports.Prisma.DadosNFItensScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Ctrl_IDNF: 'Ctrl_IDNF',
  Campo1: 'Campo1',
  qtde: 'qtde',
  valor: 'valor',
  valortotal: 'valortotal'
});

exports.Prisma.DadosnfScalarFieldEnum = makeEnum({
  id: 'id',
  numnf: 'numnf',
  codoperacao: 'codoperacao',
  natureza: 'natureza',
  emissao: 'emissao',
  clifor: 'clifor',
  qtde: 'qtde',
  campo1: 'campo1',
  campo2: 'campo2',
  campo3: 'campo3',
  valor: 'valor',
  valortotal: 'valortotal',
  totalnota: 'totalnota',
  baseiss: 'baseiss',
  aliqiss: 'aliqiss',
  iss: 'iss',
  baseirf: 'baseirf',
  aliqirf: 'aliqirf',
  irf: 'irf',
  condicoes: 'condicoes',
  impressa: 'impressa',
  filial: 'filial',
  obs: 'obs',
  complemento: 'complemento',
  codservico: 'codservico',
  valoroutrosimpostos: 'valoroutrosimpostos',
  descricaooutrosimpostos: 'descricaooutrosimpostos',
  recibo: 'recibo',
  CTRL_ID: 'CTRL_ID',
  NumeroNFE: 'NumeroNFE',
  ChaveNFE: 'ChaveNFE',
  SituacaoNFE: 'SituacaoNFE',
  lotenfe: 'lotenfe',
  irrf: 'irrf',
  csll: 'csll',
  cofins: 'cofins',
  pis: 'pis',
  SerieNF: 'SerieNF',
  aliqirrf: 'aliqirrf',
  aliqcsll: 'aliqcsll',
  aliqcofins: 'aliqcofins',
  aliqpis: 'aliqpis',
  baseirrf: 'baseirrf',
  baseimpostos: 'baseimpostos',
  ProtocoloNFE: 'ProtocoloNFE',
  DataProtocoloNFE: 'DataProtocoloNFE',
  leitransparencia: 'leitransparencia'
});

exports.Prisma.DatasSQLScalarFieldEnum = makeEnum({
  data: 'data',
  dia: 'dia',
  mes: 'mes',
  ano: 'ano',
  diadasemana: 'diadasemana',
  feriado: 'feriado',
  dianaoutil: 'dianaoutil',
  diautilpos: 'diautilpos'
});

exports.Prisma.DebentureAlteracaoEscrituraScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Escritura: 'Escritura',
  Data_Alteracao: 'Data_Alteracao',
  Descricao: 'Descricao',
  Data_Assembleia: 'Data_Assembleia',
  Jucesp_Lavrado: 'Jucesp_Lavrado',
  Jucesp_Data_Sociedade: 'Jucesp_Data_Sociedade',
  Jucesp_Numero: 'Jucesp_Numero',
  Cartorio: 'Cartorio',
  QuemAtualizou: 'QuemAtualizou',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DebentureAlteracaoSerieScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Escritura: 'Escritura',
  Serie: 'Serie',
  Data_Alteracao: 'Data_Alteracao',
  Indice: 'Indice',
  Descricao: 'Descricao',
  QuemAtualizou: 'QuemAtualizou',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DebentureCautelaScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Debenture: 'Debenture',
  Quantidade: 'Quantidade',
  Valor: 'Valor',
  Resgate: 'Resgate',
  Bruto: 'Bruto',
  IR: 'IR',
  Liquido: 'Liquido',
  Data_Resgate: 'Data_Resgate',
  Banco: 'Banco',
  Control: 'Control',
  PU: 'PU',
  Prazo: 'Prazo',
  Total_PU: 'Total_PU',
  dt_atualizacao: 'dt_atualizacao',
  Numero_Resgate: 'Numero_Resgate',
  Rendimento: 'Rendimento',
  IOF: 'IOF',
  ControlBx: 'ControlBx',
  Prazo_IOF: 'Prazo_IOF',
  Multa_Resgate_Antecipado: 'Multa_Resgate_Antecipado',
  Rendimento_Resgatado: 'Rendimento_Resgatado',
  IR_Resgatado: 'IR_Resgatado',
  Liquido_Resgatado: 'Liquido_Resgatado',
  IOF_Resgatado: 'IOF_Resgatado',
  Serie: 'Serie',
  DebentureSerie: 'DebentureSerie',
  ValorParcial: 'ValorParcial',
  ValorParcial_Resgatado: 'ValorParcial_Resgatado',
  RendimentoTaxaFixa: 'RendimentoTaxaFixa',
  Prazo_atual: 'Prazo_atual',
  Quantidade_: 'Quantidade_'
});

exports.Prisma.DebentureEscrituraScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Nome: 'Nome',
  Grupo: 'Grupo',
  Data_Emissao: 'Data_Emissao',
  Data_Assembleia: 'Data_Assembleia',
  Data_Integralizacao: 'Data_Integralizacao',
  Data_Subscricao: 'Data_Subscricao',
  Diario_Publicacao: 'Diario_Publicacao',
  Data_Publicacao_Diario: 'Data_Publicacao_Diario',
  Cartorio: 'Cartorio',
  Jornal_Publicacao: 'Jornal_Publicacao',
  Data_Publicacao_Jornal: 'Data_Publicacao_Jornal',
  Valor: 'Valor',
  Travamento: 'Travamento',
  dt_atualizacao: 'dt_atualizacao',
  Quantidade: 'Quantidade',
  Jucesp_Data_Sociedade: 'Jucesp_Data_Sociedade',
  Jucesp_Numero: 'Jucesp_Numero',
  Jucesp_Lavrado: 'Jucesp_Lavrado',
  Data_Alteracao: 'Data_Alteracao'
});

exports.Prisma.DebentureRendimentoCautelaScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Debenture: 'Debenture',
  Cautela: 'Cautela',
  Serie: 'Serie',
  Indice: 'Indice',
  Quantidade: 'Quantidade',
  Valor: 'Valor',
  Bruto: 'Bruto',
  IR: 'IR',
  Liquido: 'Liquido',
  PU: 'PU',
  Prazo: 'Prazo',
  Total_PU: 'Total_PU',
  Rendimento: 'Rendimento',
  IOF: 'IOF',
  Prazo_IOF: 'Prazo_IOF',
  Multa_Resgate_Antecipado: 'Multa_Resgate_Antecipado',
  DebentureSerie: 'DebentureSerie',
  Data_Correcao: 'Data_Correcao',
  Rendimento_PU: 'Rendimento_PU',
  Rendimento_Cautela: 'Rendimento_Cautela',
  Numero_Resgate: 'Numero_Resgate',
  Resgate: 'Resgate',
  Data_Resgate: 'Data_Resgate',
  Banco: 'Banco',
  Control: 'Control',
  ControlBx: 'ControlBx',
  Rendimento_Resgatado: 'Rendimento_Resgatado',
  IR_Resgatado: 'IR_Resgatado',
  Liquido_Resgatado: 'Liquido_Resgatado',
  IOF_Resgatado: 'IOF_Resgatado',
  dt_atualizacao: 'dt_atualizacao',
  ValorParcial_Resgatado: 'ValorParcial_Resgatado',
  RendimentoTaxaFixa: 'RendimentoTaxaFixa',
  Prazo_atual: 'Prazo_atual',
  Quantidade_: 'Quantidade_'
});

exports.Prisma.DebentureResgateScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Data_Emissao: 'Data_Emissao',
  Clifor: 'Clifor',
  Valor: 'Valor',
  Liberado: 'Liberado',
  Data_Resgate: 'Data_Resgate',
  Banco: 'Banco',
  Control: 'Control',
  dt_atualizacao: 'dt_atualizacao',
  Data_Liberacao: 'Data_Liberacao',
  Bruto: 'Bruto',
  Rendimento: 'Rendimento',
  IR: 'IR',
  IOF: 'IOF',
  Liquido: 'Liquido',
  Multa_Resgate_Antecipado: 'Multa_Resgate_Antecipado',
  Resgate_Rendimento: 'Resgate_Rendimento',
  ReciboEnviado: 'ReciboEnviado',
  Resgate_Parcial: 'Resgate_Parcial',
  SomenteDestacarIR: 'SomenteDestacarIR'
});

exports.Prisma.DebentureScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Serie: 'Serie',
  Clifor: 'Clifor',
  Data_Emissao: 'Data_Emissao',
  Descricao: 'Descricao',
  Quantidade: 'Quantidade',
  Valor: 'Valor',
  Valor_Total: 'Valor_Total',
  Observacao: 'Observacao',
  Liberado: 'Liberado',
  Data_Liberacao: 'Data_Liberacao',
  Banco: 'Banco',
  Control: 'Control',
  dt_atualizacao: 'dt_atualizacao',
  Valor_Securitizado: 'Valor_Securitizado',
  Valor_Descoberto: 'Valor_Descoberto',
  Valor_Resgatado: 'Valor_Resgatado',
  Valor_Liquidado: 'Valor_Liquidado',
  Valor_Vencido: 'Valor_Vencido',
  DebentureSerie: 'DebentureSerie',
  dt_vencimento: 'dt_vencimento',
  Rendimento_Proporcional: 'Rendimento_Proporcional'
});

exports.Prisma.DebentureSerieScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Escritura: 'Escritura',
  Nome: 'Nome',
  Quantidade: 'Quantidade',
  Emitida: 'Emitida',
  Valor: 'Valor',
  Indice: 'Indice',
  Periodo_pagamento: 'Periodo_pagamento',
  Multa_Mora: 'Multa_Mora',
  Juros_Mora: 'Juros_Mora',
  Periodo_Multa_Resgate: 'Periodo_Multa_Resgate',
  Multa_Resgate_Antecipado1: 'Multa_Resgate_Antecipado1',
  Multa_Resgate_Antecipado2: 'Multa_Resgate_Antecipado2',
  Metodo_Correcao: 'Metodo_Correcao',
  Periodicidade_Correcao: 'Periodicidade_Correcao',
  Inicio_Correcao: 'Inicio_Correcao',
  dt_atualizacao: 'dt_atualizacao',
  Emissao: 'Emissao',
  Serie: 'Serie',
  Tipo_Vencimento: 'Tipo_Vencimento',
  Vencimento: 'Vencimento',
  Valor_Atual: 'Valor_Atual',
  AtualizaPU: 'AtualizaPU',
  Periodo_Multa_Resgate2: 'Periodo_Multa_Resgate2',
  Periodo_Multa_Resgate3: 'Periodo_Multa_Resgate3',
  Multa_Resgate_Antecipado3: 'Multa_Resgate_Antecipado3',
  Resgate: 'Resgate',
  Permite_Resgate_Rendimento: 'Permite_Resgate_Rendimento',
  DebentureInicial: 'DebentureInicial',
  DebentureFinal: 'DebentureFinal',
  DebentureAtual: 'DebentureAtual'
});

exports.Prisma.DebentureSerieTransferenciaItensScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Debenture: 'Debenture',
  Cautela: 'Cautela',
  SerieAnterior: 'SerieAnterior',
  SerieAtual: 'SerieAtual',
  Transferencia: 'Transferencia',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DebentureSerieTransferenciaScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Data_Emissao: 'Data_Emissao',
  Debenture: 'Debenture',
  Debenturista: 'Debenturista',
  SerieAnterior: 'SerieAnterior',
  SerieAtual: 'SerieAtual',
  Liberado: 'Liberado',
  Data_Liberacao: 'Data_Liberacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DebentureTransferenciaItensScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Debenture: 'Debenture',
  Transferencia: 'Transferencia',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DebentureTransferenciaScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Data_Emissao: 'Data_Emissao',
  DebenturistaAnterior: 'DebenturistaAnterior',
  DebenturistaAtual: 'DebenturistaAtual',
  Liberado: 'Liberado',
  Data_Liberacao: 'Data_Liberacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.DocumentoPublicacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  DocumentoTipo_ID: 'DocumentoTipo_ID',
  NomeArquivo: 'NomeArquivo',
  Tamanho: 'Tamanho',
  Arquivo: 'Arquivo',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  Sigbors_ID: 'Sigbors_ID',
  Carteira_ID: 'Carteira_ID',
  Observacao: 'Observacao',
  Sigcad_ID: 'Sigcad_ID'
});

exports.Prisma.DocumentoSacadoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigfls_ID: 'Sigfls_ID',
  TipoDocumentoSacado_ID: 'TipoDocumentoSacado_ID',
  RecebidoEm: 'RecebidoEm',
  QuemConfirmouRecebidoEm: 'QuemConfirmouRecebidoEm',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.DolarScalarFieldEnum = makeEnum({
  data: 'data',
  valor: 'valor'
});

exports.Prisma.EBExtratoBancarioScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  IncData: 'IncData',
  IncUsuario: 'IncUsuario'
});

exports.Prisma.EBLancamentoScalarFieldEnum = makeEnum({
  CtrlID: 'CtrlID',
  CtrlIDExtratoBancario: 'CtrlIDExtratoBancario',
  Banco: 'Banco',
  Data: 'Data',
  Documento: 'Documento',
  Valor: 'Valor',
  Debito: 'Debito',
  Historico: 'Historico',
  DestinoCodBanco: 'DestinoCodBanco',
  DestinoAgencia: 'DestinoAgencia',
  DestinoConta: 'DestinoConta',
  DestinoContaDV: 'DestinoContaDV',
  OrigemCodBanco: 'OrigemCodBanco',
  OrigemAgencia: 'OrigemAgencia',
  OrigemConta: 'OrigemConta',
  OrigemContaDV: 'OrigemContaDV'
});

exports.Prisma.EMClientesScalarFieldEnum = makeEnum({
  Clifor: 'Clifor',
  EMail: 'EMail',
  Usuario: 'Usuario'
});

exports.Prisma.EMRelatoriosScalarFieldEnum = makeEnum({
  Clifor: 'Clifor',
  Relatorio: 'Relatorio',
  Usuario: 'Usuario'
});

exports.Prisma.EmailAnexoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Email_ID: 'Email_ID',
  NomeArquivo: 'NomeArquivo',
  Tamanho: 'Tamanho',
  Arquivo: 'Arquivo'
});

exports.Prisma.EmailClienteGrupoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  EmailSmtp_ID: 'EmailSmtp_ID',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  ConfiguracaoDo_ID: 'ConfiguracaoDo_ID'
});

exports.Prisma.EmailClientePerfilScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EmailClienteGrupo_ID: 'EmailClienteGrupo_ID',
  Ordem: 'Ordem',
  Ativo: 'Ativo',
  Sigcad_ID: 'Sigcad_ID',
  Departamento: 'Departamento',
  EnderecoEmail: 'EnderecoEmail',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  SelecaoPadrao: 'SelecaoPadrao'
});

exports.Prisma.EmailClientePerfilXRelatorioScalarFieldEnum = makeEnum({
  EmailClientePerfil_ID: 'EmailClientePerfil_ID',
  EmailClienteRelatorio_ID: 'EmailClienteRelatorio_ID'
});

exports.Prisma.EmailClienteRelatorioScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EmailClienteGrupo_ID: 'EmailClienteGrupo_ID',
  Ordem: 'Ordem',
  Descricao: 'Descricao',
  NomeOriginal: 'NomeOriginal',
  ArquivoEDWS: 'ArquivoEDWS',
  Parametros: 'Parametros',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  SelecaoPadrao: 'SelecaoPadrao'
});

exports.Prisma.EmailRotuloAssociadoScalarFieldEnum = makeEnum({
  Email_ID: 'Email_ID',
  EmailRotulo_ID: 'EmailRotulo_ID'
});

exports.Prisma.EmailRotuloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  CorFundo: 'CorFundo',
  CorTexto: 'CorTexto',
  DeSistema: 'DeSistema',
  Dt_Exclusao: 'Dt_Exclusao'
});

exports.Prisma.EmailScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Tipo: 'Tipo',
  ParametrosDoTipo: 'ParametrosDoTipo',
  Destinatario_ID: 'Destinatario_ID',
  DestinatarioNome: 'DestinatarioNome',
  DestinatarioEmail: 'DestinatarioEmail',
  Assunto: 'Assunto',
  Corpo: 'Corpo',
  EnviandoEm: 'EnviandoEm',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  EmailSmtp_ID: 'EmailSmtp_ID'
});

exports.Prisma.EmailSmtpScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  EmailParaAuditoria: 'EmailParaAuditoria',
  NomeDoRemetente: 'NomeDoRemetente',
  EnderecoDoRemetente: 'EnderecoDoRemetente',
  ChaveDeIdentificacao: 'ChaveDeIdentificacao',
  TemplateClienteDWS: 'TemplateClienteDWS',
  ConfiguracaoDo_ID: 'ConfiguracaoDo_ID',
  PadraoEndereco: 'PadraoEndereco',
  PadraoLogin: 'PadraoLogin',
  PadraoSenha: 'PadraoSenha',
  PadraoPorta: 'PadraoPorta',
  PadraoTipoConexaoSegura: 'PadraoTipoConexaoSegura',
  ComprovaEndereco: 'ComprovaEndereco',
  ComprovaLogin: 'ComprovaLogin',
  ComprovaSenha: 'ComprovaSenha',
  ComprovaPorta: 'ComprovaPorta',
  ComprovaTipoConexaoSegura: 'ComprovaTipoConexaoSegura',
  HoraCertaEndereco: 'HoraCertaEndereco',
  HoraCertaLogin: 'HoraCertaLogin',
  HoraCertaSenha: 'HoraCertaSenha',
  HoraCertaPorta: 'HoraCertaPorta',
  HoraCertaTipoConexaoSegura: 'HoraCertaTipoConexaoSegura',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID'
});

exports.Prisma.EmprestimoParcelaScalarFieldEnum = makeEnum({
  ID: 'ID',
  Emprestimo_ID: 'Emprestimo_ID',
  Data: 'Data',
  DC: 'DC',
  DU: 'DU',
  Valor: 'Valor',
  Encargo: 'Encargo',
  Amortizacao: 'Amortizacao',
  Juros: 'Juros',
  Saldodevedor: 'Saldodevedor',
  IOF: 'IOF',
  IOFAdicional: 'IOFAdicional',
  TotalIOF: 'TotalIOF',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Bordero_ID: 'Bordero_ID',
  Dcto: 'Dcto',
  Historico: 'Historico',
  Parcela: 'Parcela'
});

exports.Prisma.EmprestimoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Data: 'Data',
  Valor: 'Valor',
  Parcelas: 'Parcelas',
  TaxaEfetiva: 'TaxaEfetiva',
  TaxaIOF: 'TaxaIOF',
  IOF: 'IOF',
  TaxaIOFAdicional: 'TaxaIOFAdicional',
  IOFAdicional: 'IOFAdicional',
  TotalIOF: 'TotalIOF',
  Juros: 'Juros',
  Total: 'Total',
  Liberado: 'Liberado',
  Control: 'Control',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou',
  TipoIOF: 'TipoIOF',
  ValorFinanciado: 'ValorFinanciado',
  ParcelasDiasUteis: 'ParcelasDiasUteis',
  ParcelasDataInicial: 'ParcelasDataInicial',
  ParcelasPeriodo: 'ParcelasPeriodo',
  ParcelasTipoPeriodo: 'ParcelasTipoPeriodo',
  TaxaEfetivaPeriodo: 'TaxaEfetivaPeriodo',
  VTarifa: 'VTarifa',
  TipoCalculo: 'TipoCalculo',
  ValorFuturo: 'ValorFuturo',
  ParcelasValor: 'ParcelasValor',
  DataSubsequenteDecendio: 'DataSubsequenteDecendio',
  Sigven_ID: 'Sigven_ID',
  Sigven_Comissao: 'Sigven_Comissao'
});

exports.Prisma.EntidadeScalarFieldEnum = makeEnum({
  NumeroEntidade: 'NumeroEntidade',
  NomeAmigavel: 'NomeAmigavel'
});

exports.Prisma.EqChequeMaisCSFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqChequeMais_ID: 'EqChequeMais_ID',
  NomeDoBanco: 'NomeDoBanco',
  NumeroDoBanco: 'NumeroDoBanco',
  NumeroDaAgencia: 'NumeroDaAgencia',
  CodigoMotivoDevolucao: 'CodigoMotivoDevolucao',
  QtdDevolucoes: 'QtdDevolucoes',
  DtUltimaOcorrencia: 'DtUltimaOcorrencia'
});

exports.Prisma.EqChequeMaisConsultadoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqChequeMais_ID: 'EqChequeMais_ID',
  TipoDePessoa: 'TipoDePessoa',
  Documento: 'Documento',
  NumeroDoBanco: 'NumeroDoBanco',
  NumeroDaAgencia: 'NumeroDaAgencia',
  NumeroContaCorrente: 'NumeroContaCorrente',
  NumeroCheque: 'NumeroCheque',
  CodigoMotivoDevolucao: 'CodigoMotivoDevolucao',
  Motivo: 'Motivo',
  DtOcorrencia: 'DtOcorrencia',
  Informante: 'Informante',
  Mensagem: 'Mensagem'
});

exports.Prisma.EqChequeMaisScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Em: 'Em',
  EntTipoDeConsulta: 'EntTipoDeConsulta',
  EntDocumento: 'EntDocumento',
  EntBanco: 'EntBanco',
  EntAgencia: 'EntAgencia',
  EntNumeroCCorrente: 'EntNumeroCCorrente',
  EntDigitoCCorrente: 'EntDigitoCCorrente',
  EntChqInicial: 'EntChqInicial',
  EntDigChqInicial: 'EntDigChqInicial',
  EntChqFinal: 'EntChqFinal',
  EntDigChqFinal: 'EntDigChqFinal',
  Identificacao: 'Identificacao',
  DataConsulta: 'DataConsulta',
  HoraConsulta: 'HoraConsulta',
  EmpresaSolicitante: 'EmpresaSolicitante',
  CodigoDoCliente: 'CodigoDoCliente',
  TipoDePessoa: 'TipoDePessoa',
  Documento: 'Documento',
  Nome: 'Nome',
  CSFMensagem: 'CSFMensagem'
});

exports.Prisma.EqEmprGoldAdministradorScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Marcador: 'Marcador',
  Cpf: 'Cpf',
  Nome: 'Nome',
  EstadoCivil: 'EstadoCivil',
  Nacionalidade: 'Nacionalidade',
  Cnpj: 'Cnpj',
  RazaoSocial: 'RazaoSocial',
  Cargo: 'Cargo',
  DataEntrada: 'DataEntrada',
  DataSaida: 'DataSaida'
});

exports.Prisma.EqEmprGoldChequDetCheqScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Quantidade: 'Quantidade',
  Data: 'Data',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Motivo: 'Motivo'
});

exports.Prisma.EqEmprGoldChsusDetCheqScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Cheques: 'Cheques',
  DataOcorrencia: 'DataOcorrencia'
});

exports.Prisma.EqEmprGoldConsultasNoMesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  Quantidade: 'Quantidade'
});

exports.Prisma.EqEmprGoldDIAcontecimentosScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Indicador: 'Indicador',
  Periodo: 'Periodo',
  Pontuacao: 'Pontuacao'
});

exports.Prisma.EqEmprGoldDIRelacionamentoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Periodo: 'Periodo',
  Valor: 'Valor'
});

exports.Prisma.EqEmprGoldExtProtestoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Valor: 'Valor',
  CartorioNumeroCartorio: 'CartorioNumeroCartorio',
  CartorioCidade: 'CartorioCidade',
  CartorioEstado: 'CartorioEstado'
});

exports.Prisma.EqEmprGoldHistCedScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  TituloMaiorValor: 'TituloMaiorValor',
  TituloMaiorValorAtraso: 'TituloMaiorValorAtraso',
  ValorMedioTitulos: 'ValorMedioTitulos',
  ValorMedioTitulosAtrasados: 'ValorMedioTitulosAtrasados',
  DesvioPadraoTitulos: 'DesvioPadraoTitulos',
  DesvioPadraoTitulosAtrasados: 'DesvioPadraoTitulosAtrasados',
  NumeroMedioPapeis: 'NumeroMedioPapeis',
  NumeroMedioPapeisAtrasados: 'NumeroMedioPapeisAtrasados',
  RespMediaGlobal: 'RespMediaGlobal',
  RespMediaGlobalAtrasada: 'RespMediaGlobalAtrasada',
  MaiorPrazoContratadoTitulos: 'MaiorPrazoContratadoTitulos',
  MaiorAtrasoTitulosVencidos: 'MaiorAtrasoTitulosVencidos',
  PrazoMedioTitulosSer: 'PrazoMedioTitulosSer',
  AtrasoMedioTitulosVencidos: 'AtrasoMedioTitulosVencidos',
  NumeroFactorings: 'NumeroFactorings',
  PrazoMedioPonderado: 'PrazoMedioPonderado',
  AtrasoMedioPonderado: 'AtrasoMedioPonderado'
});

exports.Prisma.EqEmprGoldHistSacScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  TituloMaiorValor: 'TituloMaiorValor',
  TituloMaiorValorAtraso: 'TituloMaiorValorAtraso',
  ValorMedioTitulos: 'ValorMedioTitulos',
  ValorMedioTitulosAtrasados: 'ValorMedioTitulosAtrasados',
  DesvioPadraoTitulos: 'DesvioPadraoTitulos',
  DesvioPadraoTitulosAtrasados: 'DesvioPadraoTitulosAtrasados',
  NumeroMedioPapeis: 'NumeroMedioPapeis',
  NumeroMedioPapeisAtrasados: 'NumeroMedioPapeisAtrasados',
  RespMediaGlobal: 'RespMediaGlobal',
  RespMediaGlobalAtrasada: 'RespMediaGlobalAtrasada',
  MaiorPrazoContratadoTitulos: 'MaiorPrazoContratadoTitulos',
  MaiorAtrasoTitulosVencidos: 'MaiorAtrasoTitulosVencidos',
  PrazoMedioTitulosSer: 'PrazoMedioTitulosSer',
  AtrasoMedioTitulosVencidos: 'AtrasoMedioTitulosVencidos',
  NumeroFactorings: 'NumeroFactorings',
  PrazoMedioPonderado: 'PrazoMedioPonderado',
  AtrasoMedioPonderado: 'AtrasoMedioPonderado'
});

exports.Prisma.EqEmprGoldHistoricoPagamentoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Total: 'Total',
  Fornecedores: 'Fornecedores',
  Titulos: 'Titulos',
  ValorTotal: 'ValorTotal',
  AVista: 'AVista',
  Pontual: 'Pontual',
  DiasAtraso1: 'DiasAtraso1',
  DiasAtraso2: 'DiasAtraso2',
  DiasAtraso3: 'DiasAtraso3',
  DiasAtraso4: 'DiasAtraso4',
  AtrasoMedio: 'AtrasoMedio'
});

exports.Prisma.EqEmprGoldInadimplenciaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Mensagem: 'Mensagem',
  Cpf: 'Cpf',
  RazaoSocial: 'RazaoSocial',
  Cnpj: 'Cnpj',
  TipoPessoa: 'TipoPessoa',
  Nome: 'Nome'
});

exports.Prisma.EqEmprGoldInfMaisRecenteScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  TipoInformacao: 'TipoInformacao'
});

exports.Prisma.EqEmprGoldPainelControleScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Descricao: 'Descricao',
  Quantidade: 'Quantidade',
  Ultima: 'Ultima',
  Valor: 'Valor'
});

exports.Prisma.EqEmprGoldParticipacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Marcador: 'Marcador',
  CnpjParticipada: 'CnpjParticipada',
  RazaoSocialParticipada: 'RazaoSocialParticipada',
  DataEntrada: 'DataEntrada',
  Capital: 'Capital',
  CpfParticipante: 'CpfParticipante',
  CnpjParticipante: 'CnpjParticipante'
});

exports.Prisma.EqEmprGoldPendenciaRestricaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Credor: 'Credor',
  Valor: 'Valor'
});

exports.Prisma.EqEmprGoldPendenciaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Credor: 'Credor',
  Valor: 'Valor'
});

exports.Prisma.EqEmprGoldPrincipaisFornecScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Cnpj: 'Cnpj',
  RazaoSocial: 'RazaoSocial',
  CnaeDescricao: 'CnaeDescricao',
  CnaeCodigo: 'CnaeCodigo'
});

exports.Prisma.EqEmprGoldProtestoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Valor: 'Valor',
  CartorioNumeroCartorio: 'CartorioNumeroCartorio',
  CartorioCidade: 'CartorioCidade',
  CartorioEstado: 'CartorioEstado'
});

exports.Prisma.EqEmprGoldRecuperacaoFalenciaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Quantidade: 'Quantidade',
  TipoAcao: 'TipoAcao',
  DataUltimaOcorrencia: 'DataUltimaOcorrencia',
  VaraNumero: 'VaraNumero',
  VaraUf: 'VaraUf',
  VaraCidade: 'VaraCidade'
});

exports.Prisma.EqEmprGoldScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Em: 'Em',
  EntTipoDeConsulta: 'EntTipoDeConsulta',
  EntCNPJ: 'EntCNPJ',
  EntScoreEmpresarial: 'EntScoreEmpresarial',
  EntScoreAtacadista: 'EntScoreAtacadista',
  EntFaturamentoPresumido: 'EntFaturamentoPresumido',
  EntExtraPendencias: 'EntExtraPendencias',
  EntExtraProtestos: 'EntExtraProtestos',
  Cnpj: 'Cnpj',
  RazaoSocial: 'RazaoSocial',
  RazaoSocialAnterior: 'RazaoSocialAnterior',
  DataRazaoAnterior: 'DataRazaoAnterior',
  NomeFantasia: 'NomeFantasia',
  DataFundacao: 'DataFundacao',
  DataEncerramento: 'DataEncerramento',
  SituacaoCnpj: 'SituacaoCnpj',
  DataSituacaoCnpj: 'DataSituacaoCnpj',
  DataConsultaCnpj: 'DataConsultaCnpj',
  NaturezaJuridica: 'NaturezaJuridica',
  FaixaFuncionarios: 'FaixaFuncionarios',
  Mensagem: 'Mensagem',
  NireNumero: 'NireNumero',
  NireUf: 'NireUf',
  RamoAtividadeAtividade: 'RamoAtividadeAtividade',
  RamoAtividadeCnae: 'RamoAtividadeCnae',
  RamoAtividadeSecundarioAtivida: 'RamoAtividadeSecundarioAtivida',
  RamoAtividadeSecundarioCnae: 'RamoAtividadeSecundarioCnae',
  SintegraSituacao: 'SintegraSituacao',
  SintegraData: 'SintegraData',
  SintegraDataConsulta: 'SintegraDataConsulta',
  InscricaoEstadualUf: 'InscricaoEstadualUf',
  InscricaoEstadualCadastro: 'InscricaoEstadualCadastro',
  FiliaisQuantidade: 'FiliaisQuantidade',
  FiliaisCidades: 'FiliaisCidades',
  MatrizEndereco: 'MatrizEndereco',
  MatrizBairro: 'MatrizBairro',
  MatrizCidade: 'MatrizCidade',
  MatrizUf: 'MatrizUf',
  MatrizCep: 'MatrizCep',
  ScoreAtacadistaValor: 'ScoreAtacadistaValor',
  ScoreAtacadistaProbabilidade: 'ScoreAtacadistaProbabilidade',
  ScoreAtacadistaRisco: 'ScoreAtacadistaRisco',
  ScoreAtacadistaMensagem: 'ScoreAtacadistaMensagem',
  FaturamentoPresumidoFaixa: 'FaturamentoPresumidoFaixa',
  FaturamentoPresumidoFaturament: 'FaturamentoPresumidoFaturament',
  FaturamentoPresumidoMensagem: 'FaturamentoPresumidoMensagem',
  PainelControleMensagem: 'PainelControleMensagem',
  ComportamentoComSuaEmpresaMens: 'ComportamentoComSuaEmpresaMens',
  SociosCapitalSocial: 'SociosCapitalSocial',
  SociosAtuJuntaComl: 'SociosAtuJuntaComl',
  SociosQtdOutrosSocios: 'SociosQtdOutrosSocios',
  SociosMensagem: 'SociosMensagem',
  ConsultasQuantidadeTotal: 'ConsultasQuantidadeTotal',
  ConsultasMensagem: 'ConsultasMensagem',
  AteDataAnteriorDataAnterior: 'AteDataAnteriorDataAnterior',
  AteDataAnteriorQuantidade: 'AteDataAnteriorQuantidade',
  TitulosAVencerMensagem: 'TitulosAVencerMensagem',
  TmpRelForQtdFontesConsultadas: 'TmpRelForQtdFontesConsultadas',
  TmpRelForQtdAte6Meses: 'TmpRelForQtdAte6Meses',
  TmpRelForQtdDe7A12Meses: 'TmpRelForQtdDe7A12Meses',
  TmpRelForQtdDe1A2Anos: 'TmpRelForQtdDe1A2Anos',
  TmpRelForQtdDe3A5Anos: 'TmpRelForQtdDe3A5Anos',
  TmpRelForQtdDe6A10Anos: 'TmpRelForQtdDe6A10Anos',
  TmpRelForQtdMaisDe10Anos: 'TmpRelForQtdMaisDe10Anos',
  TmpRelForMensagem: 'TmpRelForMensagem',
  HisPagMensagem: 'HisPagMensagem',
  RefNegMensagem: 'RefNegMensagem',
  RefNegUltimaCompraData: 'RefNegUltimaCompraData',
  RefNegUltimaCompraValor: 'RefNegUltimaCompraValor',
  RefNegUltimaCompraMedia: 'RefNegUltimaCompraMedia',
  RefNegMaiorFaturaData: 'RefNegMaiorFaturaData',
  RefNegMaiorFaturaValor: 'RefNegMaiorFaturaValor',
  RefNegMaiorFaturaMedia: 'RefNegMaiorFaturaMedia',
  RefNegMaiorCreditoData: 'RefNegMaiorCreditoData',
  RefNegMaiorCreditoValor: 'RefNegMaiorCreditoValor',
  RefNegMaiorCreditoMedia: 'RefNegMaiorCreditoMedia',
  PrincipaisFornecedoresData: 'PrincipaisFornecedoresData',
  PrincipaisFornecedoresMensagem: 'PrincipaisFornecedoresMensagem',
  PendRestrMensagem: 'PendRestrMensagem',
  PendRestrTotalPendenciasQtdPen: 'PendRestrTotalPendenciasQtdPen',
  PendRestrTotalPendenciasQtdCre: 'PendRestrTotalPendenciasQtdCre',
  PendRestrTotalPendenciasValor: 'PendRestrTotalPendenciasValor',
  PendRestrPrimeiraPendenciaData: 'PendRestrPrimeiraPendenciaData',
  PendRestrPrimeiraPendenciaValo: 'PendRestrPrimeiraPendenciaValo',
  PendRestrMaiorPendenciaData: 'PendRestrMaiorPendenciaData',
  PendRestrMaiorPendenciaValor: 'PendRestrMaiorPendenciaValor',
  ExPendTotalPendenciasQtdPenden: 'ExPendTotalPendenciasQtdPenden',
  ExPendTotalPendenciasQtdCredor: 'ExPendTotalPendenciasQtdCredor',
  ExPendTotalPendenciasValor: 'ExPendTotalPendenciasValor',
  ExPendPrimeiraPendenciaData: 'ExPendPrimeiraPendenciaData',
  ExPendPrimeiraPendenciaValor: 'ExPendPrimeiraPendenciaValor',
  ExPendMaiorPendenciaData: 'ExPendMaiorPendenciaData',
  ExPendMaiorPendenciaValor: 'ExPendMaiorPendenciaValor',
  ChequesSemFundoTotalCheques: 'ChequesSemFundoTotalCheques',
  ChequesSemFundoMensagem: 'ChequesSemFundoMensagem',
  ProtestosMensagem: 'ProtestosMensagem',
  ProtestosTotalQuantidade: 'ProtestosTotalQuantidade',
  ProtestosTotalValor: 'ProtestosTotalValor',
  ProtestosPrimeiroProtestoData: 'ProtestosPrimeiroProtestoData',
  ProtestosPrimeiroProtestoValor: 'ProtestosPrimeiroProtestoValor',
  ProtestosMaiorProtestoData: 'ProtestosMaiorProtestoData',
  ProtestosMaiorProtestoValor: 'ProtestosMaiorProtestoValor',
  ExtProCnpj: 'ExtProCnpj',
  ExtProRazaoSocial: 'ExtProRazaoSocial',
  ExtProMensagem: 'ExtProMensagem',
  ExtProTotalQuantidade: 'ExtProTotalQuantidade',
  ExtProTotalValor: 'ExtProTotalValor',
  ExtProPrimeiroProtestoData: 'ExtProPrimeiroProtestoData',
  ExtProPrimeiroProtestoValor: 'ExtProPrimeiroProtestoValor',
  ExtProMaiorProtestoData: 'ExtProMaiorProtestoData',
  ExtProMaiorProtestoValor: 'ExtProMaiorProtestoValor',
  RFAMensagem: 'RFAMensagem',
  IncParMensagem: 'IncParMensagem',
  InaParMensagem: 'InaParMensagem',
  InfComMensagem: 'InfComMensagem',
  InfMaisRecenteMensagem: 'InfMaisRecenteMensagem',
  SegEmpMensagem: 'SegEmpMensagem',
  ParticipacoesQuantidade: 'ParticipacoesQuantidade',
  ParticipacoesMensagem: 'ParticipacoesMensagem',
  AdministradoresAtuJuntaComl: 'AdministradoresAtuJuntaComl',
  AdministradoresQuantidade: 'AdministradoresQuantidade',
  AdministradoresMensagem: 'AdministradoresMensagem',
  ExPendCnpj: 'ExPendCnpj',
  ExPendRazaoSocial: 'ExPendRazaoSocial',
  ExPendMensagem: 'ExPendMensagem',
  CedCasaNumeroTitulosTotal: 'CedCasaNumeroTitulosTotal',
  CedCasaValorTotal: 'CedCasaValorTotal',
  CedCasaNumeroTitulosAVencer: 'CedCasaNumeroTitulosAVencer',
  CedCasaValorAVencer: 'CedCasaValorAVencer',
  CedCasaNumeroTitulosAte10Dias_: 'CedCasaNumeroTitulosAte10Dias_',
  CedCasaValorAte10Dias: 'CedCasaValorAte10Dias',
  CedCasaNumeroTitulosAte30Dias_: 'CedCasaNumeroTitulosAte30Dias_',
  CedCasaValorAte30Dias: 'CedCasaValorAte30Dias',
  CedCasaNumeroTitulosMais30Dias: 'CedCasaNumeroTitulosMais30Dias',
  CedCasaValorMais30Dias: 'CedCasaValorMais30Dias',
  CedOutrosNumeroFactoringsTotal: 'CedOutrosNumeroFactoringsTotal',
  CedOutrosNumeroTitulosTotal: 'CedOutrosNumeroTitulosTotal',
  CedOutrosValorTotal: 'CedOutrosValorTotal',
  CedOutrosTotalCedenteTotal: 'CedOutrosTotalCedenteTotal',
  CedOutrosNumeroFactoringsAVencer: 'CedOutrosNumeroFactoringsAVencer',
  CedOutrosNumeroTitulosAVencer: 'CedOutrosNumeroTitulosAVencer',
  CedOutrosValorAVencer: 'CedOutrosValorAVencer',
  CedOutrosTotalCedenteAVencer: 'CedOutrosTotalCedenteAVencer',
  CedOutrosNumeroFactoringsAte10Dias_: 'CedOutrosNumeroFactoringsAte10Dias_',
  CedOutrosNumeroTitulosAte10Dias_: 'CedOutrosNumeroTitulosAte10Dias_',
  CedOutrosValorAte10Dias: 'CedOutrosValorAte10Dias',
  CedOutrosTotalCedenteAte10Dias: 'CedOutrosTotalCedenteAte10Dias',
  CedOutrosNumeroFactoringsAte30Dias_: 'CedOutrosNumeroFactoringsAte30Dias_',
  CedOutrosNumeroTitulosAte30Dias_: 'CedOutrosNumeroTitulosAte30Dias_',
  CedOutrosValorAte30Dias: 'CedOutrosValorAte30Dias',
  CedOutrosTotalCedenteAte30Dias: 'CedOutrosTotalCedenteAte30Dias',
  CedOutrosNumeroFactoringsMais30Dias_: 'CedOutrosNumeroFactoringsMais30Dias_',
  CedOutrosValorMais30Dias: 'CedOutrosValorMais30Dias',
  CedOutrosTotalCedenteMais30Dias: 'CedOutrosTotalCedenteMais30Dias',
  SacCasaNumeroTitulosTotal: 'SacCasaNumeroTitulosTotal',
  SacCasaValorTotal: 'SacCasaValorTotal',
  SacCasaNumeroTitulosAVencer: 'SacCasaNumeroTitulosAVencer',
  SacCasaValorAVencer: 'SacCasaValorAVencer',
  SacCasaNumeroTitulosAte10Dias_: 'SacCasaNumeroTitulosAte10Dias_',
  SacCasaValorAte10Dias: 'SacCasaValorAte10Dias',
  SacCasaNumeroTitulosAte30Dias_: 'SacCasaNumeroTitulosAte30Dias_',
  SacCasaValorAte30Dias: 'SacCasaValorAte30Dias',
  SacCasaNumeroTitulosMais30Dias: 'SacCasaNumeroTitulosMais30Dias',
  SacCasaValorMais30Dias: 'SacCasaValorMais30Dias',
  SacOutrosNumeroFactoringsTotal: 'SacOutrosNumeroFactoringsTotal',
  SacOutrosNumeroTitulosTotal: 'SacOutrosNumeroTitulosTotal',
  SacOutrosValorTotal: 'SacOutrosValorTotal',
  SacOutrosTotalSacadoTotal: 'SacOutrosTotalSacadoTotal',
  SacOutrosNumeroFactoringsAVencer: 'SacOutrosNumeroFactoringsAVencer',
  SacOutrosNumeroTitulosAVencer: 'SacOutrosNumeroTitulosAVencer',
  SacOutrosValorAVencer: 'SacOutrosValorAVencer',
  SacOutrosTotalSacadoAVencer: 'SacOutrosTotalSacadoAVencer',
  SacOutrosNumeroFactoringsAte10Dias_: 'SacOutrosNumeroFactoringsAte10Dias_',
  SacOutrosNumeroTitulosAte10Dias_: 'SacOutrosNumeroTitulosAte10Dias_',
  SacOutrosValorAte10Dias: 'SacOutrosValorAte10Dias',
  SacOutrosTotalSacadoAte10Dias: 'SacOutrosTotalSacadoAte10Dias',
  SacOutrosNumeroFactoringsAte30Dias_: 'SacOutrosNumeroFactoringsAte30Dias_',
  SacOutrosNumeroTitulosAte30Dias_: 'SacOutrosNumeroTitulosAte30Dias_',
  SacOutrosValorAte30Dias: 'SacOutrosValorAte30Dias',
  SacOutrosTotalSacadoAte30Dias: 'SacOutrosTotalSacadoAte30Dias',
  SacOutrosNumeroFactoringsMais30Dias_: 'SacOutrosNumeroFactoringsMais30Dias_',
  SacOutrosNumeroTitulosMais30Dias_: 'SacOutrosNumeroTitulosMais30Dias_',
  SacOutrosValorMais30Dias: 'SacOutrosValorMais30Dias',
  SacOutrosTotalSacadoMais30Dias: 'SacOutrosTotalSacadoMais30Dias',
  ChequesSustadoTotalCheques: 'ChequesSustadoTotalCheques',
  ChequesSustadoMensagem: 'ChequesSustadoMensagem',
  ScoreEmpresarialValor: 'ScoreEmpresarialValor',
  ScoreEmpresarialProbabilidade: 'ScoreEmpresarialProbabilidade',
  ScoreEmpresarialRisco: 'ScoreEmpresarialRisco',
  ScoreEmpresarialMensagem: 'ScoreEmpresarialMensagem',
  CreditoObtidoPontuacao: 'CreditoObtidoPontuacao',
  CompromissosPontuacao: 'CompromissosPontuacao',
  PagamentoPontualPontuacao: 'PagamentoPontualPontuacao',
  PagamentoAVistaPontuacao: 'PagamentoAVistaPontuacao'
});

exports.Prisma.EqEmprGoldSocioAcionistaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Marcador: 'Marcador',
  Cpf: 'Cpf',
  Nome: 'Nome',
  Cnpj: 'Cnpj',
  RazaoSocial: 'RazaoSocial',
  Participacao: 'Participacao',
  Entrada: 'Entrada'
});

exports.Prisma.EqEmprGoldTelefoneScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Telefone: 'Telefone'
});

exports.Prisma.EqEmprGoldTitulosAVencerScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Periodo: 'Periodo',
  QtdFornecedores: 'QtdFornecedores',
  QtdTitulos: 'QtdTitulos',
  Valor: 'Valor'
});

exports.Prisma.EqEmprGoldUltimasConsultasScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Data: 'Data',
  Empresa: 'Empresa',
  Quantidade: 'Quantidade'
});

exports.Prisma.EqEmprGoldcfutCompromissoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Periodo: 'Periodo',
  Pontuacao: 'Pontuacao'
});

exports.Prisma.EqEmprGoldcfutCreditoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Periodo: 'Periodo',
  Pontuacao: 'Pontuacao'
});

exports.Prisma.EqEmprGoldcomproIndScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldcredobtIndScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtatra16a30ScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Pontuacao: 'Pontuacao',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtatra31a60ScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Pontuacao: 'Pontuacao',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtatra6a15ScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Pontuacao: 'Pontuacao',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtatraMaisDe60ScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Pontuacao: 'Pontuacao',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtatraMedioScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  Pontuacao: 'Pontuacao',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtpontIndScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmprGoldpgtvistaIndScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmprGold_ID: 'EqEmprGold_ID',
  MesAno: 'MesAno',
  PontuacaoMensal: 'PontuacaoMensal'
});

exports.Prisma.EqEmpresarialCSFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Data: 'Data',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Motivo: 'Motivo',
  Quantidade: 'Quantidade'
});

exports.Prisma.EqEmpresarialClickScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  CodMens: 'CodMens',
  STexto: 'STexto'
});

exports.Prisma.EqEmpresarialCompScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Texto: 'Texto'
});

exports.Prisma.EqEmpresarialConsultScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  DtConsulta: 'DtConsulta',
  RazaoSocial: 'RazaoSocial'
});

exports.Prisma.EqEmpresarialFcHistCdScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  MesAno: 'MesAno',
  MaiorVlr: 'MaiorVlr',
  MaiorVlrAtraso: 'MaiorVlrAtraso',
  VlrMedio: 'VlrMedio',
  VlrMedioAtrasados: 'VlrMedioAtrasados',
  DesvioPadraoMedio: 'DesvioPadraoMedio',
  DesvioPadraoMedioAtrasados: 'DesvioPadraoMedioAtrasados',
  QtdMedia: 'QtdMedia',
  QtdMediaAtrasados: 'QtdMediaAtrasados',
  ResponsabilidadeMedia: 'ResponsabilidadeMedia',
  ResponsabilidadeMediaAtrasados: 'ResponsabilidadeMediaAtrasados',
  MaiorPrazoContratado: 'MaiorPrazoContratado',
  MaiorAtraso: 'MaiorAtraso',
  PrazoMedio: 'PrazoMedio',
  AtrasoMedio: 'AtrasoMedio',
  QtdFactorings: 'QtdFactorings',
  PrazoMedioPonderado: 'PrazoMedioPonderado',
  AtrasoMedioPonderado: 'AtrasoMedioPonderado'
});

exports.Prisma.EqEmpresarialFcHistScScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  MesAno: 'MesAno',
  MaiorVlr: 'MaiorVlr',
  MaiorVlrAtraso: 'MaiorVlrAtraso',
  VlrMedio: 'VlrMedio',
  VlrMedioAtrasados: 'VlrMedioAtrasados',
  DesvioPadraoMedio: 'DesvioPadraoMedio',
  DesvioPadraoMedioAtrasados: 'DesvioPadraoMedioAtrasados',
  QtdMedia: 'QtdMedia',
  QtdMediaAtrasados: 'QtdMediaAtrasados',
  ResponsabilidadeMedia: 'ResponsabilidadeMedia',
  ResponsabilidadeMediaAtrasados: 'ResponsabilidadeMediaAtrasados',
  MaiorPrazoContratado: 'MaiorPrazoContratado',
  MaiorAtraso: 'MaiorAtraso',
  PrazoMedio: 'PrazoMedio',
  AtrasoMedio: 'AtrasoMedio',
  QtdFactorings: 'QtdFactorings',
  PrazoMedioPonderado: 'PrazoMedioPonderado',
  AtrasoMedioPonderado: 'AtrasoMedioPonderado'
});

exports.Prisma.EqEmpresarialPagScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  MesPagamento: 'MesPagamento',
  QtdFornecedores: 'QtdFornecedores',
  QtdTitulos: 'QtdTitulos',
  VlPagamentos: 'VlPagamentos',
  PercPontual: 'PercPontual',
  PercAtraso6_15: 'PercAtraso6_15',
  PercAtraso16_30: 'PercAtraso16_30',
  PercAtraso31_60: 'PercAtraso31_60',
  PercAtraso61_: 'PercAtraso61_',
  DiasMedioAtraso: 'DiasMedioAtraso',
  ArrobaVX: 'ArrobaVX'
});

exports.Prisma.EqEmpresarialParticScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  CNPJ: 'CNPJ',
  RazaoSocial: 'RazaoSocial',
  TipoRelacionamento: 'TipoRelacionamento',
  Participacao: 'Participacao',
  Cargo: 'Cargo',
  DtEntrada: 'DtEntrada',
  DtSaida: 'DtSaida',
  TemApontamento: 'TemApontamento'
});

exports.Prisma.EqEmpresarialPrtstScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Data: 'Data',
  Moeda: 'Moeda',
  Valor: 'Valor',
  CidadeCartorio: 'CidadeCartorio',
  CidadeCartorioRF: 'CidadeCartorioRF',
  EstadoCartorio: 'EstadoCartorio',
  NumeroCartorio: 'NumeroCartorio'
});

exports.Prisma.EqEmpresarialScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Em: 'Em',
  Identificacao: 'Identificacao',
  CNPJ: 'CNPJ',
  DataConsulta: 'DataConsulta',
  HoraConsulta: 'HoraConsulta',
  RazaoSocial: 'RazaoSocial',
  QtdFiliais: 'QtdFiliais',
  DataFundacao: 'DataFundacao',
  FiliadoDesde: 'FiliadoDesde',
  UltInformacaoEm: 'UltInformacaoEm',
  RazaoSocialAnt: 'RazaoSocialAnt',
  CNAE: 'CNAE',
  DescricaoCNAE: 'DescricaoCNAE',
  CNAEFiscal: 'CNAEFiscal',
  TipoLogradouro: 'TipoLogradouro',
  Logradouro: 'Logradouro',
  NumeroLogradouro: 'NumeroLogradouro',
  Complemento: 'Complemento',
  CEP: 'CEP',
  Cidade: 'Cidade',
  CidadeRF: 'CidadeRF',
  UF: 'UF',
  MatrizTipoLogradouro: 'MatrizTipoLogradouro',
  MatrizLogradouro: 'MatrizLogradouro',
  MatrizNumeroLogradouro: 'MatrizNumeroLogradouro',
  MatrizComplemento: 'MatrizComplemento',
  MatrizCEP: 'MatrizCEP',
  MatrizCidade: 'MatrizCidade',
  MatrizCidadeRF: 'MatrizCidadeRF',
  MatrizUF: 'MatrizUF',
  Score: 'Score',
  Risco: 'Risco',
  Probabilidade: 'Probabilidade',
  DataInfImportante: 'DataInfImportante',
  QtdSocios: 'QtdSocios',
  QtdParticipacoes: 'QtdParticipacoes',
  QtdConsultasMes: 'QtdConsultasMes',
  QtdConsultas1MesAtras: 'QtdConsultas1MesAtras',
  QtdConsultas2MesAtras: 'QtdConsultas2MesAtras',
  QtdConsultas3MesAtras: 'QtdConsultas3MesAtras',
  QtdConsultas4MesAtras: 'QtdConsultas4MesAtras',
  QtdConsultas5MesAtras: 'QtdConsultas5MesAtras',
  QtdConsultas6MesAtras: 'QtdConsultas6MesAtras',
  QtdConsultas7MesAtras: 'QtdConsultas7MesAtras',
  QtdConsultas8MesAtras: 'QtdConsultas8MesAtras',
  QtdConsultas9MesAtras: 'QtdConsultas9MesAtras',
  QtdConsultas10MesAtras: 'QtdConsultas10MesAtras',
  QtdConsultas11MesAtras: 'QtdConsultas11MesAtras',
  Fornecedores0_6meses: 'Fornecedores0_6meses',
  Fornecedores7_12meses: 'Fornecedores7_12meses',
  Fornecedores1_2anos: 'Fornecedores1_2anos',
  Fornecedores3_5anos: 'Fornecedores3_5anos',
  Fornecedores6_10anos: 'Fornecedores6_10anos',
  Fornecedores11_anos: 'Fornecedores11_anos',
  TitVencMoeda: 'TitVencMoeda',
  TitVencForn0_30dias: 'TitVencForn0_30dias',
  TitVencQtd0_30dias: 'TitVencQtd0_30dias',
  TitVencVlr0_30dias: 'TitVencVlr0_30dias',
  TitVencForn31_60dias: 'TitVencForn31_60dias',
  TitVencQtd31_60dias: 'TitVencQtd31_60dias',
  TitVencVlr31_60dias: 'TitVencVlr31_60dias',
  TitVencForn61_90dias: 'TitVencForn61_90dias',
  TitVencQtd61_90dias: 'TitVencQtd61_90dias',
  TitVencVlr61_90dias: 'TitVencVlr61_90dias',
  TitVencForn91_dias: 'TitVencForn91_dias',
  TitVencQtd91_dias: 'TitVencQtd91_dias',
  TitVencVlr91_dias: 'TitVencVlr91_dias',
  TitVencFornTotal: 'TitVencFornTotal',
  TitVencQtdTotal: 'TitVencQtdTotal',
  TitVencVlrTotal: 'TitVencVlrTotal',
  MaiorFatura: 'MaiorFatura',
  DtMaiorFatura: 'DtMaiorFatura',
  MediaMaioresFaturas: 'MediaMaioresFaturas',
  MaiorAcumulo: 'MaiorAcumulo',
  DtMaiorAcumulo: 'DtMaiorAcumulo',
  MediaMaioresAcumulos: 'MediaMaioresAcumulos',
  VencQuantidade: 'VencQuantidade',
  VencMoeda: 'VencMoeda',
  VencTotal: 'VencTotal',
  NumeroCredores: 'NumeroCredores',
  VencDtPrimeiro: 'VencDtPrimeiro',
  VencVlPrimeiro: 'VencVlPrimeiro',
  VencDtMaior: 'VencDtMaior',
  VencVlMaior: 'VencVlMaior',
  PrtstQuantidade: 'PrtstQuantidade',
  PrtstMoeda: 'PrtstMoeda',
  PrtstTotal: 'PrtstTotal',
  PrtstDtPrimeiro: 'PrtstDtPrimeiro',
  PrtstVlPrimeiro: 'PrtstVlPrimeiro',
  PrtstDtMaior: 'PrtstDtMaior',
  PrtstVlMaior: 'PrtstVlMaior',
  FalenciaQtd: 'FalenciaQtd',
  FalenciaDtUltima: 'FalenciaDtUltima',
  FalenciaCidadeUltima: 'FalenciaCidadeUltima',
  FalenciaCidadeUltimaRF: 'FalenciaCidadeUltimaRF',
  FalenciaEstadoUltima: 'FalenciaEstadoUltima',
  FalenciaVaraUltima: 'FalenciaVaraUltima',
  FalenciaDecretadaDt: 'FalenciaDecretadaDt',
  FalenciaDecretadaCidade: 'FalenciaDecretadaCidade',
  FalenciaDecretadaCidadeRF: 'FalenciaDecretadaCidadeRF',
  FalenciaDecretadaEstado: 'FalenciaDecretadaEstado',
  FalenciaDecretadaVara: 'FalenciaDecretadaVara',
  AcaoExecutivaQtd: 'AcaoExecutivaQtd',
  AcaoExecutivaDt: 'AcaoExecutivaDt',
  AcaoExecutivaCidade: 'AcaoExecutivaCidade',
  AcaoExecutivaCidadeRF: 'AcaoExecutivaCidadeRF',
  AcaoExecutivaEstado: 'AcaoExecutivaEstado',
  AcaoExecutivaVara: 'AcaoExecutivaVara',
  AcaoDespejoQtd: 'AcaoDespejoQtd',
  AcaoDespejoDt: 'AcaoDespejoDt',
  AcaoDespejoCidade: 'AcaoDespejoCidade',
  AcaoDespejoCidadeRF: 'AcaoDespejoCidadeRF',
  AcaoDespejoEstado: 'AcaoDespejoEstado',
  AcaoDespejoVara: 'AcaoDespejoVara',
  LiquidacaoDt: 'LiquidacaoDt',
  LiquidacaoCidade: 'LiquidacaoCidade',
  LiquidacaoCidadeRF: 'LiquidacaoCidadeRF',
  LiquidacaoEstado: 'LiquidacaoEstado',
  LiquidacaoVara: 'LiquidacaoVara',
  PddCncrdtDt: 'PddCncrdtDt',
  PddCncrdtCidade: 'PddCncrdtCidade',
  PddCncrdtCidadeRF: 'PddCncrdtCidadeRF',
  PddCncrdtEstado: 'PddCncrdtEstado',
  PddCncrdtVara: 'PddCncrdtVara',
  CncrdtDfrdDt: 'CncrdtDfrdDt',
  CncrdtDfrdCidade: 'CncrdtDfrdCidade',
  CncrdtDfrdCidadeRF: 'CncrdtDfrdCidadeRF',
  CncrdtDfrdEstado: 'CncrdtDfrdEstado',
  CncrdtDfrdVara: 'CncrdtDfrdVara',
  CncrdtSspnsvDt: 'CncrdtSspnsvDt',
  CncrdtSspnsvCidade: 'CncrdtSspnsvCidade',
  CncrdtSspnsvCidadeRF: 'CncrdtSspnsvCidadeRF',
  CncrdtSspnsvEstado: 'CncrdtSspnsvEstado',
  CncrdtSspnsvVara: 'CncrdtSspnsvVara',
  AutofalenciaDt: 'AutofalenciaDt',
  AutofalenciaCidade: 'AutofalenciaCidade',
  AutofalenciaCidadeRF: 'AutofalenciaCidadeRF',
  AutofalenciaEstado: 'AutofalenciaEstado',
  AutofalenciaVara: 'AutofalenciaVara',
  AcaoExecutivaFMQtd: 'AcaoExecutivaFMQtd',
  AcaoExecutivaFMDt: 'AcaoExecutivaFMDt',
  AcaoExecutivaFMCidade: 'AcaoExecutivaFMCidade',
  AcaoExecutivaFMCidadeRF: 'AcaoExecutivaFMCidadeRF',
  AcaoExecutivaFMEstado: 'AcaoExecutivaFMEstado',
  AcaoExecutivaFMVara: 'AcaoExecutivaFMVara',
  AcaoExecutivaFEQtd: 'AcaoExecutivaFEQtd',
  AcaoExecutivaFEDt: 'AcaoExecutivaFEDt',
  AcaoExecutivaFECidade: 'AcaoExecutivaFECidade',
  AcaoExecutivaFECidadeRF: 'AcaoExecutivaFECidadeRF',
  AcaoExecutivaFEEstado: 'AcaoExecutivaFEEstado',
  AcaoExecutivaFEVara: 'AcaoExecutivaFEVara',
  AcaoExecutivaFFQtd: 'AcaoExecutivaFFQtd',
  AcaoExecutivaFFDt: 'AcaoExecutivaFFDt',
  AcaoExecutivaFFCidade: 'AcaoExecutivaFFCidade',
  AcaoExecutivaFFCidadeRF: 'AcaoExecutivaFFCidadeRF',
  AcaoExecutivaFFEstado: 'AcaoExecutivaFFEstado',
  AcaoExecutivaFFVara: 'AcaoExecutivaFFVara',
  CSFDtAtualizacao: 'CSFDtAtualizacao',
  CSFQtd: 'CSFQtd',
  UIR1Codigo: 'UIR1Codigo',
  UIR1Dt: 'UIR1Dt',
  UIR2Codigo: 'UIR2Codigo',
  UIR2Dt: 'UIR2Dt',
  UIR3Codigo: 'UIR3Codigo',
  UIR3Dt: 'UIR3Dt',
  UIR4Codigo: 'UIR4Codigo',
  UIR4Dt: 'UIR4Dt',
  UIR5Codigo: 'UIR5Codigo',
  UIR5Dt: 'UIR5Dt',
  NomeFanstasia: 'NomeFanstasia',
  SituacaoRF: 'SituacaoRF',
  SituacaoRFDt: 'SituacaoRFDt',
  SituacaoRFDtConsulta: 'SituacaoRFDtConsulta',
  NaturezaJuridica: 'NaturezaJuridica',
  InscricaoEstadual: 'InscricaoEstadual',
  InscricaoEstadualUF: 'InscricaoEstadualUF',
  SituacaoSintegra: 'SituacaoSintegra',
  SituacaoSintegraDt: 'SituacaoSintegraDt',
  SituacaoSintegraDtConsulta: 'SituacaoSintegraDtConsulta',
  EmpTitulosAVencerQtd: 'EmpTitulosAVencerQtd',
  EmpTitulosAVencerVlr: 'EmpTitulosAVencerVlr',
  EmpTitulosPagosQtd: 'EmpTitulosPagosQtd',
  EmpTitulosPagosVlr: 'EmpTitulosPagosVlr',
  EmpTitulosPontualPerc: 'EmpTitulosPontualPerc',
  EmpTitulosAVistaPerc: 'EmpTitulosAVistaPerc',
  EmpTitulosDiasAtraso6_15: 'EmpTitulosDiasAtraso6_15',
  EmpTitulosDiasAtraso16_30: 'EmpTitulosDiasAtraso16_30',
  EmpTitulosDiasAtraso31_60: 'EmpTitulosDiasAtraso31_60',
  EmpTitulosDiasAtraso61_: 'EmpTitulosDiasAtraso61_',
  EmpTitulosMediaAtraso: 'EmpTitulosMediaAtraso',
  EmpPefinQtd: 'EmpPefinQtd',
  EmpPefinVlr: 'EmpPefinVlr',
  CapitalSocial: 'CapitalSocial',
  SocioUltimaAlteracaoJunta: 'SocioUltimaAlteracaoJunta',
  SocioNIRE: 'SocioNIRE',
  SocioUF: 'SocioUF',
  ParticUltimaAlteracaoJunta: 'ParticUltimaAlteracaoJunta',
  ParticNIRE: 'ParticNIRE',
  ParticUF: 'ParticUF',
  AcaoBuscaApreensaoQtd: 'AcaoBuscaApreensaoQtd',
  AcaoBuscaApreensaoDt: 'AcaoBuscaApreensaoDt',
  AcaoBuscaApreensaoCidade: 'AcaoBuscaApreensaoCidade',
  AcaoBuscaApreensaoCidadeRF: 'AcaoBuscaApreensaoCidadeRF',
  AcaoBuscaApreensaoEstado: 'AcaoBuscaApreensaoEstado',
  AcaoBuscaApreensaoVara: 'AcaoBuscaApreensaoVara',
  PedidoRecupJudicialDt: 'PedidoRecupJudicialDt',
  PedidoRecupJudicialCidade: 'PedidoRecupJudicialCidade',
  PedidoRecupJudicialCidadeRF: 'PedidoRecupJudicialCidadeRF',
  PedidoRecupJudicialEstado: 'PedidoRecupJudicialEstado',
  PedidoRecupJudicialVara: 'PedidoRecupJudicialVara',
  RecuperacaoJudicialDt: 'RecuperacaoJudicialDt',
  RecuperacaoJudicialCidade: 'RecuperacaoJudicialCidade',
  RecuperacaoJudicialCidadeRF: 'RecuperacaoJudicialCidadeRF',
  RecuperacaoJudicialEstado: 'RecuperacaoJudicialEstado',
  RecuperacaoJudicialVara: 'RecuperacaoJudicialVara',
  PedidoRecupExtraJudDt: 'PedidoRecupExtraJudDt',
  PedidoRecupExtraJudCidade: 'PedidoRecupExtraJudCidade',
  PedidoRecupExtraJudCidadeRF: 'PedidoRecupExtraJudCidadeRF',
  PedidoRecupExtraJudEstado: 'PedidoRecupExtraJudEstado',
  PedidoRecupExtraJudVara: 'PedidoRecupExtraJudVara',
  RecuperacaoExtraJudDt: 'RecuperacaoExtraJudDt',
  RecuperacaoExtraJudCidade: 'RecuperacaoExtraJudCidade',
  RecuperacaoExtraJudCidadeRF: 'RecuperacaoExtraJudCidadeRF',
  RecuperacaoExtraJudEstado: 'RecuperacaoExtraJudEstado',
  RecuperacaoExtraJudVara: 'RecuperacaoExtraJudVara',
  EntTipoDeConsulta: 'EntTipoDeConsulta',
  EntCNPJ: 'EntCNPJ',
  FactorCdCsQtdTotal: 'FactorCdCsQtdTotal',
  FactorCdCsVlrTotal: 'FactorCdCsVlrTotal',
  FactorCdCsQtdAVencer: 'FactorCdCsQtdAVencer',
  FactorCdCsVlrAVencer: 'FactorCdCsVlrAVencer',
  FactorCdCsQtdAte10d: 'FactorCdCsQtdAte10d',
  FactorCdCsVlrAte10d: 'FactorCdCsVlrAte10d',
  FactorCdCsQtdAte30d: 'FactorCdCsQtdAte30d',
  FactorCdCsVlrAte30d: 'FactorCdCsVlrAte30d',
  FactorCdCsQtdMais30d: 'FactorCdCsQtdMais30d',
  FactorCdCsVlrMais30d: 'FactorCdCsVlrMais30d',
  FactorCdOtQtdFactorings: 'FactorCdOtQtdFactorings',
  FactorCdOtQtdTotal: 'FactorCdOtQtdTotal',
  FactorCdOtVlrTotal: 'FactorCdOtVlrTotal',
  FactorCdOtVlrTotalCd: 'FactorCdOtVlrTotalCd',
  FactorCdOtQtdAVencerFactor: 'FactorCdOtQtdAVencerFactor',
  FactorCdOtQtdAVencer: 'FactorCdOtQtdAVencer',
  FactorCdOtVlrAVencer: 'FactorCdOtVlrAVencer',
  FactorCdOtVlrAVencerCd: 'FactorCdOtVlrAVencerCd',
  FactorCdOtQtdAte10dFactor: 'FactorCdOtQtdAte10dFactor',
  FactorCdOtQtdAte10d: 'FactorCdOtQtdAte10d',
  FactorCdOtVlrAte10d: 'FactorCdOtVlrAte10d',
  FactorCdOtVlrAte10dCd: 'FactorCdOtVlrAte10dCd',
  FactorCdOtQtdAte30dFactor: 'FactorCdOtQtdAte30dFactor',
  FactorCdOtQtdAte30d: 'FactorCdOtQtdAte30d',
  FactorCdOtVlrAte30d: 'FactorCdOtVlrAte30d',
  FactorCdOtVlrAte30dCd: 'FactorCdOtVlrAte30dCd',
  FactorCdOtQtdMais30dFactor: 'FactorCdOtQtdMais30dFactor',
  FactorCdOtQtdMais30d: 'FactorCdOtQtdMais30d',
  FactorCdOtVlrMais30d: 'FactorCdOtVlrMais30d',
  FactorCdOtVlrMais30dCd: 'FactorCdOtVlrMais30dCd',
  FactorScCsQtdTotal: 'FactorScCsQtdTotal',
  FactorScCsVlrTotal: 'FactorScCsVlrTotal',
  FactorScCsQtdAVencer: 'FactorScCsQtdAVencer',
  FactorScCsVlrAVencer: 'FactorScCsVlrAVencer',
  FactorScCsQtdAte10d: 'FactorScCsQtdAte10d',
  FactorScCsVlrAte10d: 'FactorScCsVlrAte10d',
  FactorScCsQtdAte30d: 'FactorScCsQtdAte30d',
  FactorScCsVlrAte30d: 'FactorScCsVlrAte30d',
  FactorScCsQtdMais30d: 'FactorScCsQtdMais30d',
  FactorScCsVlrMais30d: 'FactorScCsVlrMais30d',
  FactorScOtQtdFactorings: 'FactorScOtQtdFactorings',
  FactorScOtQtdTotal: 'FactorScOtQtdTotal',
  FactorScOtVlrTotal: 'FactorScOtVlrTotal',
  FactorScOtVlrTotalSc: 'FactorScOtVlrTotalSc',
  FactorScOtQtdAVencerFactor: 'FactorScOtQtdAVencerFactor',
  FactorScOtQtdAVencer: 'FactorScOtQtdAVencer',
  FactorScOtVlrAVencer: 'FactorScOtVlrAVencer',
  FactorScOtVlrAVencerSc: 'FactorScOtVlrAVencerSc',
  FactorScOtQtdAte10dFactor: 'FactorScOtQtdAte10dFactor',
  FactorScOtQtdAte10d: 'FactorScOtQtdAte10d',
  FactorScOtVlrAte10d: 'FactorScOtVlrAte10d',
  FactorScOtVlrAte10dSc: 'FactorScOtVlrAte10dSc',
  FactorScOtQtdAte30dFactor: 'FactorScOtQtdAte30dFactor',
  FactorScOtQtdAte30d: 'FactorScOtQtdAte30d',
  FactorScOtVlrAte30d: 'FactorScOtVlrAte30d',
  FactorScOtVlrAte30dSc: 'FactorScOtVlrAte30dSc',
  FactorScOtQtdMais30dFactor: 'FactorScOtQtdMais30dFactor',
  FactorScOtQtdMais30d: 'FactorScOtQtdMais30d',
  FactorScOtVlrMais30d: 'FactorScOtVlrMais30d',
  FactorScOtVlrMais30dSc: 'FactorScOtVlrMais30dSc',
  Arroba06: 'Arroba06',
  Arroba07: 'Arroba07',
  Arroba08: 'Arroba08',
  Arroba0X: 'Arroba0X',
  ArrobaRF: 'ArrobaRF',
  ArrobaRG: 'ArrobaRG',
  ClickTemRestricao: 'ClickTemRestricao',
  Arroba41: 'Arroba41',
  Arroba42: 'Arroba42',
  Arroba43: 'Arroba43',
  Arroba50: 'Arroba50',
  Arroba51: 'Arroba51',
  Arroba64: 'Arroba64',
  Arroba65: 'Arroba65',
  Arroba66: 'Arroba66',
  Arroba67: 'Arroba67',
  Arroba68: 'Arroba68',
  Arroba69: 'Arroba69',
  Arroba6A: 'Arroba6A',
  Arroba6B: 'Arroba6B',
  Arroba6C: 'Arroba6C',
  Arroba6D: 'Arroba6D',
  Arroba6E: 'Arroba6E',
  Arroba6F: 'Arroba6F',
  Arroba70: 'Arroba70'
});

exports.Prisma.EqEmpresarialSocioScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Tipo: 'Tipo',
  Socio: 'Socio',
  CNPJ: 'CNPJ',
  Nome: 'Nome',
  TipoRelacionamento: 'TipoRelacionamento',
  Participacao: 'Participacao',
  Cargo: 'Cargo',
  DtEntrada: 'DtEntrada',
  DtSaida: 'DtSaida',
  TemApontamento: 'TemApontamento'
});

exports.Prisma.EqEmpresarialTelefoneScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Telefone: 'Telefone'
});

exports.Prisma.EqEmpresarialVencScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqEmpresarial_ID: 'EqEmpresarial_ID',
  Data: 'Data',
  RazaoSocial: 'RazaoSocial',
  Moeda: 'Moeda',
  Valor: 'Valor',
  ArrobaEX: 'ArrobaEX'
});

exports.Prisma.EqPessoalAcCvScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  Tipo: 'Tipo',
  Data: 'Data',
  Cidade: 'Cidade',
  CidadeRF: 'CidadeRF',
  UF: 'UF',
  Vara: 'Vara',
  CodigoProcesso: 'CodigoProcesso',
  Autor: 'Autor',
  NomeAcionado: 'NomeAcionado',
  TipoAcao: 'TipoAcao',
  TipoAcaoQtd: 'TipoAcaoQtd',
  TipoAcaoValorTotal: 'TipoAcaoValorTotal',
  IdentificacaoVara: 'IdentificacaoVara',
  Valor: 'Valor'
});

exports.Prisma.EqPessoalAcCvTpScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  Quantidade: 'Quantidade',
  TipoAcao: 'TipoAcao'
});

exports.Prisma.EqPessoalCSFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  Data: 'Data',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Motivo: 'Motivo',
  Quantidade: 'Quantidade',
  Nome: 'Nome'
});

exports.Prisma.EqPessoalClickScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  STextoAspect: 'STextoAspect',
  CodMens: 'CodMens'
});

exports.Prisma.EqPessoalCompScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  Texto: 'Texto'
});

exports.Prisma.EqPessoalConsultScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  DtConsulta: 'DtConsulta',
  RazaoSocial: 'RazaoSocial',
  NomeSegmento: 'NomeSegmento',
  Quantidade: 'Quantidade'
});

exports.Prisma.EqPessoalConsultaSegmentoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  QtdConsultaCPFSegmento: 'QtdConsultaCPFSegmento',
  ConsultaCPFNomeSegmento: 'ConsultaCPFNomeSegmento'
});

exports.Prisma.EqPessoalFalenciaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  DtOcorrencia: 'DtOcorrencia',
  CNPJ: 'CNPJ',
  NomeEmpresa: 'NomeEmpresa',
  VaraCivel: 'VaraCivel'
});

exports.Prisma.EqPessoalGrafiaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  IdentGrafia: 'IdentGrafia',
  IdentCPF: 'IdentCPF',
  IdentDtNascimento: 'IdentDtNascimento',
  IdentSituacao: 'IdentSituacao',
  IdentDtAtualiza: 'IdentDtAtualiza',
  IdentDtAtualizacaoSituacao: 'IdentDtAtualizacaoSituacao',
  IdentOrigem: 'IdentOrigem',
  CadastroNomeMae: 'CadastroNomeMae',
  CadastroTipoDoc: 'CadastroTipoDoc',
  CadastroNumDoc: 'CadastroNumDoc',
  CadastroOrgaoEmissor: 'CadastroOrgaoEmissor',
  CadastroSexo: 'CadastroSexo',
  CadastroUfEmissor: 'CadastroUfEmissor',
  CadastroDtEmissao: 'CadastroDtEmissao',
  CadastroInstrucao: 'CadastroInstrucao',
  CadastroDependentes: 'CadastroDependentes',
  CadastroEstadoCivil: 'CadastroEstadoCivil',
  LocalEndereco: 'LocalEndereco',
  LocalBairro: 'LocalBairro',
  LocalCidade: 'LocalCidade',
  LocalUF: 'LocalUF',
  LocalCEP: 'LocalCEP',
  LocalDddRes: 'LocalDddRes',
  LocalFoneRes: 'LocalFoneRes',
  LocalDddCom: 'LocalDddCom',
  LocalFoneCom: 'LocalFoneCom',
  LocalDddCel: 'LocalDddCel',
  LocalFoneCel: 'LocalFoneCel'
});

exports.Prisma.EqPessoalParticScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  CNPJ: 'CNPJ',
  RazaoSocial: 'RazaoSocial',
  TipoRelacionamento: 'TipoRelacionamento',
  Participacao: 'Participacao',
  Cargo: 'Cargo',
  DtEntrada: 'DtEntrada',
  DtSaida: 'DtSaida',
  Nome: 'Nome'
});

exports.Prisma.EqPessoalPrtstScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  Data: 'Data',
  Moeda: 'Moeda',
  Valor: 'Valor',
  CidadeCartorio: 'CidadeCartorio',
  CidadeCartorioRF: 'CidadeCartorioRF',
  EstadoCartorio: 'EstadoCartorio',
  NumeroCartorio: 'NumeroCartorio',
  Nome: 'Nome',
  TipoMoeda: 'TipoMoeda'
});

exports.Prisma.EqPessoalScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Em: 'Em',
  Identificacao: 'Identificacao',
  CPF: 'CPF',
  DataConsulta: 'DataConsulta',
  HoraConsulta: 'HoraConsulta',
  QtdConsultasMes: 'QtdConsultasMes',
  QtdConsultas1MesAtras: 'QtdConsultas1MesAtras',
  QtdConsultas2MesAtras: 'QtdConsultas2MesAtras',
  QtdConsultas3MesAtras: 'QtdConsultas3MesAtras',
  QtdConsultas4MesAtras: 'QtdConsultas4MesAtras',
  QtdConsultas5MesAtras: 'QtdConsultas5MesAtras',
  QtdConsultas6MesAtras: 'QtdConsultas6MesAtras',
  QtdConsultas7MesAtras: 'QtdConsultas7MesAtras',
  QtdConsultas8MesAtras: 'QtdConsultas8MesAtras',
  QtdConsultas9MesAtras: 'QtdConsultas9MesAtras',
  QtdConsultas10MesAtras: 'QtdConsultas10MesAtras',
  QtdConsultas11MesAtras: 'QtdConsultas11MesAtras',
  Moeda: 'Moeda',
  FornecedoresPontuaisQtd: 'FornecedoresPontuaisQtd',
  FornecedoresPontuaisVlr: 'FornecedoresPontuaisVlr',
  AtrasoFx1Qtd: 'AtrasoFx1Qtd',
  AtrasoFx1Vlr: 'AtrasoFx1Vlr',
  AtrasoFx1DiasInicial: 'AtrasoFx1DiasInicial',
  AtrasoFx1DiasFinal: 'AtrasoFx1DiasFinal',
  AtrasoFx2Qtd: 'AtrasoFx2Qtd',
  AtrasoFx2Vlr: 'AtrasoFx2Vlr',
  AtrasoFx2DiasInicial: 'AtrasoFx2DiasInicial',
  AtrasoFx2DiasFinal: 'AtrasoFx2DiasFinal',
  AtrasoFx3Qtd: 'AtrasoFx3Qtd',
  AtrasoFx3Vlr: 'AtrasoFx3Vlr',
  AtrasoFx3DiasInicial: 'AtrasoFx3DiasInicial',
  AtrasoFx3DiasFinal: 'AtrasoFx3DiasFinal',
  AtrasoFx4Qtd: 'AtrasoFx4Qtd',
  AtrasoFx4Vlr: 'AtrasoFx4Vlr',
  AtrasoFx4DiasInicial: 'AtrasoFx4DiasInicial',
  AtrasoFx4DiasFinal: 'AtrasoFx4DiasFinal',
  AtrasoFx5Qtd: 'AtrasoFx5Qtd',
  AtrasoFx5Vlr: 'AtrasoFx5Vlr',
  AtrasoFx5DiasInicial: 'AtrasoFx5DiasInicial',
  AtrasoFx5DiasFinal: 'AtrasoFx5DiasFinal',
  AVistaQtd: 'AVistaQtd',
  AVistaVlr: 'AVistaVlr',
  PrtstQtd: 'PrtstQtd',
  PrtstMoeda: 'PrtstMoeda',
  PrtstVlr: 'PrtstVlr',
  AcoesCiveisQtd: 'AcoesCiveisQtd',
  VencidoQtd: 'VencidoQtd',
  CSFUltimaAtualizacao: 'CSFUltimaAtualizacao',
  CSFQtd: 'CSFQtd',
  QtdParticipacoes: 'QtdParticipacoes',
  EntTipoDeConsulta: 'EntTipoDeConsulta',
  EntCPF: 'EntCPF',
  EntTipoLayout: 'EntTipoLayout',
  EntTipoDocumento: 'EntTipoDocumento',
  EntGrafiasQtd: 'EntGrafiasQtd',
  EntDadosCadastrais: 'EntDadosCadastrais',
  EntLocalizacao: 'EntLocalizacao',
  EntFraude: 'EntFraude',
  EntInfoEleitoral: 'EntInfoEleitoral',
  EntParticipacoesEmpresas: 'EntParticipacoesEmpresas',
  EntResumoConsultasCPF: 'EntResumoConsultasCPF',
  EntDetalheConsultasCPF: 'EntDetalheConsultasCPF',
  EntConsultaCheques: 'EntConsultaCheques',
  EntTitulosVencidosNaoPagos: 'EntTitulosVencidosNaoPagos',
  EntChequesSemFundo: 'EntChequesSemFundo',
  EntProtestos: 'EntProtestos',
  EntParticipacaoFalencias: 'EntParticipacaoFalencias',
  EntResumoAcoesCiveis: 'EntResumoAcoesCiveis',
  EntDetalheAcoesCiveis: 'EntDetalheAcoesCiveis',
  EntScoreConsumer: 'EntScoreConsumer',
  EntInformacoesComplementares: 'EntInformacoesComplementares',
  TipoLayout: 'TipoLayout',
  TipoDocumento: 'TipoDocumento',
  GrafiasQtd: 'GrafiasQtd',
  DadosCadastrais: 'DadosCadastrais',
  Localizacao: 'Localizacao',
  Fraude: 'Fraude',
  InfoEleitoral: 'InfoEleitoral',
  ParticipacoesEmpresas: 'ParticipacoesEmpresas',
  ResumoConsultasCPF: 'ResumoConsultasCPF',
  DetalheConsultasCPF: 'DetalheConsultasCPF',
  ConsultaCheques: 'ConsultaCheques',
  TitulosVencidosNaoPagos: 'TitulosVencidosNaoPagos',
  ChequesSemFundo: 'ChequesSemFundo',
  Protestos: 'Protestos',
  ParticipacaoFalencias: 'ParticipacaoFalencias',
  ResumoAcoesCiveis: 'ResumoAcoesCiveis',
  DetalheAcoesCiveis: 'DetalheAcoesCiveis',
  ScoreConsumer: 'ScoreConsumer',
  InformacoesComplementares: 'InformacoesComplementares',
  EleitoralNumeroTitulo: 'EleitoralNumeroTitulo',
  EleitoralGrafiaEleitor: 'EleitoralGrafiaEleitor',
  EleitoralSituacao: 'EleitoralSituacao',
  EleitoralDtAtualiza: 'EleitoralDtAtualiza',
  EleitoralZona: 'EleitoralZona',
  EleitoralSecao: 'EleitoralSecao',
  EleitoralEnderecoSecao: 'EleitoralEnderecoSecao',
  EleitoralLocalVotacao: 'EleitoralLocalVotacao',
  EleitoralBairroVotacao: 'EleitoralBairroVotacao',
  EleitoralCidadeVotacao: 'EleitoralCidadeVotacao',
  EleitoralUfVotacao: 'EleitoralUfVotacao',
  QtdConsultaCPF: 'QtdConsultaCPF',
  QtdConsultasTotal: 'QtdConsultasTotal',
  QtdConsultasTotalCh: 'QtdConsultasTotalCh',
  QtdConsultasMesCh: 'QtdConsultasMesCh',
  QtdConsultas1MesAtrasCh: 'QtdConsultas1MesAtrasCh',
  QtdConsultas2MesAtrasCh: 'QtdConsultas2MesAtrasCh',
  QtdConsultas3MesAtrasCh: 'QtdConsultas3MesAtrasCh',
  QtdConsultas4MesAtrasCh: 'QtdConsultas4MesAtrasCh',
  QtdConsultas5MesAtrasCh: 'QtdConsultas5MesAtrasCh',
  QtdConsultas6MesAtrasCh: 'QtdConsultas6MesAtrasCh',
  QtdConsultas7MesAtrasCh: 'QtdConsultas7MesAtrasCh',
  QtdConsultas8MesAtrasCh: 'QtdConsultas8MesAtrasCh',
  QtdConsultas9MesAtrasCh: 'QtdConsultas9MesAtrasCh',
  QtdConsultas10MesAtrasCh: 'QtdConsultas10MesAtrasCh',
  QtdConsultas11MesAtrasCh: 'QtdConsultas11MesAtrasCh',
  PrtstTipoMoeda: 'PrtstTipoMoeda',
  PrtstDtPrimeiro: 'PrtstDtPrimeiro',
  PrtstVlrPrimeiro: 'PrtstVlrPrimeiro',
  PrtstDtMaior: 'PrtstDtMaior',
  PrtstVlrMaior: 'PrtstVlrMaior',
  FalenciasQtd: 'FalenciasQtd',
  AcoesCiveisVlr: 'AcoesCiveisVlr',
  AcoesCiveisDtPrimeira: 'AcoesCiveisDtPrimeira',
  AcoesCiveisDtUltima: 'AcoesCiveisDtUltima',
  VencidoTipoMoeda: 'VencidoTipoMoeda',
  VencidoVlrTotal: 'VencidoVlrTotal',
  VencidoDtPrimeiraPendencia: 'VencidoDtPrimeiraPendencia',
  VencidoVlrPrimeiraPendencia: 'VencidoVlrPrimeiraPendencia',
  VencidoDtMaior: 'VencidoDtMaior',
  VencidoVlrMaior: 'VencidoVlrMaior',
  Score: 'Score',
  Risco: 'Risco',
  Probabilidade: 'Probabilidade',
  IndicacaoDeFraude: 'IndicacaoDeFraude',
  ClickTemRestricao: 'ClickTemRestricao',
  MensagemCodigo: 'MensagemCodigo',
  MensagemTexto: 'MensagemTexto',
  FalenciasDataOcorrenciaAntiga: 'FalenciasDataOcorrenciaAntiga',
  CSFDataUltOcorrencia: 'CSFDataUltOcorrencia',
  CSFBancoUltOcorrencia: 'CSFBancoUltOcorrencia',
  CSFAgenciaUltOcorrencia: 'CSFAgenciaUltOcorrencia',
  Nome: 'Nome'
});

exports.Prisma.EqPessoalVencScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  EqPessoal_ID: 'EqPessoal_ID',
  RazaoSocial: 'RazaoSocial',
  Moeda: 'Moeda',
  Valor: 'Valor',
  Contrato: 'Contrato',
  TipoMoeda: 'TipoMoeda',
  ArrobaEX: 'ArrobaEX',
  DataOcorrencia: 'DataOcorrencia'
});

exports.Prisma.EqTipoInformacaoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.EqTipoMoedaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Simbolo: 'Simbolo'
});

exports.Prisma.EqTipoPessoaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.EqTipoRelacionamentoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.EqTipoSituacaoReceitaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.EqTipoSituacaoSintegraScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.EstadoCanhotoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  DeSistema: 'DeSistema',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.EstadoConfirmacaoTituloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Letra: 'Letra',
  Descricao: 'Descricao',
  DeSistema: 'DeSistema',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou',
  PendenteDeConfirmacaoComSacado: 'PendenteDeConfirmacaoComSacado',
  idWeb: 'idWeb'
});

exports.Prisma.EstadoPorSigborsScalarFieldEnum = makeEnum({
  ID: 'ID',
  Bordero: 'Bordero',
  EstadoBordero: 'EstadoBordero',
  Inicio: 'Inicio',
  Fim: 'Fim',
  AtualmenteCom: 'AtualmenteCom',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.EstadoPreConfirmacaoTituloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Letra: 'Letra',
  Descricao: 'Descricao',
  DeSistema: 'DeSistema',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.EstadosBorsScalarFieldEnum = makeEnum({
  IDUnico: 'IDUnico',
  Nome: 'Nome',
  Tipo: 'Tipo',
  Ordem: 'Ordem',
  Agrupamento: 'Agrupamento',
  enviar: 'enviar',
  enviado: 'enviado',
  RequerAssinatura: 'RequerAssinatura',
  id: 'id'
});

exports.Prisma.EventoLancamentoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  TipoEvento: 'TipoEvento',
  CodigoHistoricoContabil: 'CodigoHistoricoContabil',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.EventoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  tipoevento: 'tipoevento',
  numero: 'numero',
  texto: 'texto'
});

exports.Prisma.FACREPRScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  REPRESENTANTE: 'REPRESENTANTE',
  ENDER_REPRES: 'ENDER_REPRES',
  CIDADE_REPRES: 'CIDADE_REPRES',
  ESTADO_REPRES: 'ESTADO_REPRES',
  CEP_REPRES: 'CEP_REPRES',
  FONE_REPRES: 'FONE_REPRES',
  CPF_REPRES: 'CPF_REPRES',
  RG_REPRES: 'RG_REPRES',
  FIADOR1: 'FIADOR1',
  ENDER_FIADOR1: 'ENDER_FIADOR1',
  CIDADE_FIADOR1: 'CIDADE_FIADOR1',
  ESTADO_FIADOR1: 'ESTADO_FIADOR1',
  CEP_FIADOR1: 'CEP_FIADOR1',
  FONE_FIADOR1: 'FONE_FIADOR1',
  CPF_FIADOR1: 'CPF_FIADOR1',
  RG_FIADOR1: 'RG_FIADOR1',
  FIADOR2: 'FIADOR2',
  ENDER_FIADOR2: 'ENDER_FIADOR2',
  CIDADE_FIADOR2: 'CIDADE_FIADOR2',
  ESTADO_FIADOR2: 'ESTADO_FIADOR2',
  CEP_FIADOR2: 'CEP_FIADOR2',
  FONE_FIADOR2: 'FONE_FIADOR2',
  CPF_FIADOR2: 'CPF_FIADOR2',
  RG_FIADOR2: 'RG_FIADOR2',
  NAC_FIADOR1: 'NAC_FIADOR1',
  ESTCIVIL_F1: 'ESTCIVIL_F1',
  PROFS_F1: 'PROFS_F1',
  NAC_FIADOR2: 'NAC_FIADOR2',
  ESTCIVIL_F2: 'ESTCIVIL_F2',
  PROFS_F2: 'PROFS_F2',
  PROS_REPRES: 'PROS_REPRES',
  NAC_REPRES: 'NAC_REPRES',
  CONTMAE: 'CONTMAE',
  REPRES_EST_CIVIL: 'REPRES_EST_CIVIL',
  NUMERO: 'NUMERO',
  TESTEMUNHA1: 'TESTEMUNHA1',
  CPF_TESTEM1: 'CPF_TESTEM1',
  RG_TESTEM1: 'RG_TESTEM1',
  TESTEMUNHA2: 'TESTEMUNHA2',
  CPF_TESTEM2: 'CPF_TESTEM2',
  RG_TESTEM2: 'RG_TESTEM2'
});

exports.Prisma.FatorCFEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  CapitalProprio: 'CapitalProprio',
  CustoCapitalProprio: 'CustoCapitalProprio',
  BCCustoCapitalProprio: 'BCCustoCapitalProprio',
  EqCustoCapitalProprio: 'EqCustoCapitalProprio',
  CapitalTerceiros: 'CapitalTerceiros',
  CustoCapitalTerceiros: 'CustoCapitalTerceiros',
  BCCustoCapitalTerceiros: 'BCCustoCapitalTerceiros',
  EqCustoCapitalTerceiros: 'EqCustoCapitalTerceiros',
  CustoOperacional: 'CustoOperacional',
  TaxaDeRisco: 'TaxaDeRisco',
  CustoDeFundeamentoEfetivo: 'CustoDeFundeamentoEfetivo',
  CustoDeFundeamento: 'CustoDeFundeamento',
  PIS: 'PIS',
  COFINS: 'COFINS',
  IR: 'IR',
  CSSL: 'CSSL',
  LucroMin: 'LucroMin',
  LucroMed: 'LucroMed',
  LucroMax: 'LucroMax',
  DescontoMin: 'DescontoMin',
  DescontoMed: 'DescontoMed',
  DescontoMax: 'DescontoMax',
  BCDescontoMin: 'BCDescontoMin',
  BCDescontoMed: 'BCDescontoMed',
  BCDescontoMax: 'BCDescontoMax',
  EqDescontoMin: 'EqDescontoMin',
  EqDescontoMed: 'EqDescontoMed',
  EqDescontoMax: 'EqDescontoMax',
  AnfacMin: 'AnfacMin',
  AnfacMed: 'AnfacMed',
  AnfacMax: 'AnfacMax',
  BCAnfacMin: 'BCAnfacMin',
  BCAnfacMed: 'BCAnfacMed',
  BCAnfacMax: 'BCAnfacMax',
  EqAnfacMin: 'EqAnfacMin',
  EqAnfacMed: 'EqAnfacMed',
  EqAnfacMax: 'EqAnfacMax',
  OutroMin: 'OutroMin',
  OutroMed: 'OutroMed',
  OutroMax: 'OutroMax',
  FatorMin: 'FatorMin',
  FatorMed: 'FatorMed',
  FatorMax: 'FatorMax',
  BCFatorMin: 'BCFatorMin',
  BCFatorMed: 'BCFatorMed',
  BCFatorMax: 'BCFatorMax',
  EqFatorMin: 'EqFatorMin',
  EqFatorMed: 'EqFatorMed',
  EqFatorMax: 'EqFatorMax',
  FatorMinSImp: 'FatorMinSImp',
  FatorMedSImp: 'FatorMedSImp',
  FatorMaxSImp: 'FatorMaxSImp',
  BCFatorMinSImp: 'BCFatorMinSImp',
  BCFatorMedSImp: 'BCFatorMedSImp',
  BCFatorMaxSImp: 'BCFatorMaxSImp',
  EqFatorMinSImp: 'EqFatorMinSImp',
  EqFatorMedSImp: 'EqFatorMedSImp',
  EqFatorMaxSImp: 'EqFatorMaxSImp',
  CalcMin: 'CalcMin',
  CalcMed: 'CalcMed',
  CalcMax: 'CalcMax',
  CalcMinSImp: 'CalcMinSImp',
  CalcMedSImp: 'CalcMedSImp',
  CalcMaxSImp: 'CalcMaxSImp',
  Formula: 'Formula',
  F1D1: 'F1D1',
  F1D2: 'F1D2',
  F1D3: 'F1D3',
  F1D4: 'F1D4',
  F1D5: 'F1D5',
  F1D6: 'F1D6',
  F1D7: 'F1D7',
  F1D8: 'F1D8',
  F1D8a: 'F1D8a',
  F1D8b: 'F1D8b',
  F1D9: 'F1D9',
  F1D9b: 'F1D9b',
  F1D9a: 'F1D9a',
  F1D10: 'F1D10',
  F2D1: 'F2D1',
  F2D2: 'F2D2',
  F2D3: 'F2D3',
  F2D4: 'F2D4',
  F2D5: 'F2D5',
  F2D6: 'F2D6',
  F2D7: 'F2D7',
  F2D8: 'F2D8',
  F2D8a: 'F2D8a',
  F2D8b: 'F2D8b',
  F2D9: 'F2D9',
  F2D9a: 'F2D9a',
  F2D10: 'F2D10',
  F3D1: 'F3D1',
  F3D2: 'F3D2',
  F3D3: 'F3D3',
  F3D4: 'F3D4',
  F3D5: 'F3D5',
  F3D6: 'F3D6',
  F3D7: 'F3D7',
  F3D8: 'F3D8',
  F3D8a: 'F3D8a',
  F3D8b: 'F3D8b',
  F3D9: 'F3D9',
  F3D9a: 'F3D9a',
  F3D10: 'F3D10',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.FatoresScalarFieldEnum = makeEnum({
  id: 'id',
  factoring: 'factoring',
  fator: 'fator'
});

exports.Prisma.FeedItemScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Feed_ID: 'Feed_ID',
  Link: 'Link',
  PubDate: 'PubDate',
  Title: 'Title',
  Description: 'Description',
  Content: 'Content'
});

exports.Prisma.FeedScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Dt_Criacao: 'Dt_Criacao',
  Link: 'Link',
  Title: 'Title'
});

exports.Prisma.FeriadosScalarFieldEnum = makeEnum({
  dia: 'dia',
  mes: 'mes',
  ano: 'ano',
  Descricao: 'Descricao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.FluxoTagScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Fluxo_ID: 'Fluxo_ID',
  Tag_ID: 'Tag_ID',
  Observacao: 'Observacao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou',
  Sigfls_ID: 'Sigfls_ID'
});

exports.Prisma.FormalizacaoBorderoAssinaturaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBorderoCarteira_ID: 'FormalizacaoBorderoCarteira_ID',
  Parte: 'Parte',
  Sigcad_ID: 'Sigcad_ID',
  CPF: 'CPF',
  Nome: 'Nome',
  EMail: 'EMail',
  EmConjunto: 'EmConjunto',
  Qualificacao: 'Qualificacao',
  FormalizacaoBorderoAssinatura_ID: 'FormalizacaoBorderoAssinatura_ID'
});

exports.Prisma.FormalizacaoBorderoCarteiraScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBordero_ID: 'FormalizacaoBordero_ID',
  Carteira_ID: 'Carteira_ID',
  CnpjEntidadeCompradora: 'CnpjEntidadeCompradora',
  DiferencialCompra: 'DiferencialCompra',
  AdValorem: 'AdValorem',
  ValorNotaFiscal: 'ValorNotaFiscal',
  IRRF: 'IRRF',
  PIS: 'PIS',
  COFINS: 'COFINS',
  CSLL: 'CSLL',
  OutrasTaxas: 'OutrasTaxas',
  IOFRetidoAoDia: 'IOFRetidoAoDia',
  IOFRetido: 'IOFRetido',
  Regresso: 'Regresso',
  Retencao: 'Retencao',
  ValorLiquido: 'ValorLiquido',
  ContratoNumero: 'ContratoNumero',
  ContratoSequencia: 'ContratoSequencia',
  ContratoData: 'ContratoData',
  ContratoAssinatura: 'ContratoAssinatura',
  ContratoAditivo: 'ContratoAditivo',
  EntidadeCompradora_ID: 'EntidadeCompradora_ID',
  EntidadeConsultora_ID: 'EntidadeConsultora_ID',
  CnpjEntidadeConsultora: 'CnpjEntidadeConsultora',
  ContasAPagar: 'ContasAPagar',
  DiferencialCompraComposto: 'DiferencialCompraComposto',
  TarifaTitulos: 'TarifaTitulos',
  TarifaCheques: 'TarifaCheques',
  TarifaBancoServico: 'TarifaBancoServico',
  AliquotaIOFRetidoAoDia: 'AliquotaIOFRetidoAoDia',
  AliquotaIOFRetido: 'AliquotaIOFRetido',
  ISS: 'ISS',
  CPMF: 'CPMF',
  ValorRenegociadoTitulos: 'ValorRenegociadoTitulos',
  ValorRenegociadoOutros: 'ValorRenegociadoOutros',
  Dt_Atualizacao: 'Dt_Atualizacao',
  FormalizadoEm: 'FormalizadoEm',
  MensagemErro: 'MensagemErro',
  IDNoSistemaDeDestino: 'IDNoSistemaDeDestino'
});

exports.Prisma.FormalizacaoBorderoDocumentoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBorderoCarteira_ID: 'FormalizacaoBorderoCarteira_ID',
  DocumentoPublicacao_ID: 'DocumentoPublicacao_ID'
});

exports.Prisma.FormalizacaoBorderoPagamentoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBorderoCarteira_ID: 'FormalizacaoBorderoCarteira_ID',
  Banco: 'Banco',
  NomeBanco: 'NomeBanco',
  Agencia: 'Agencia',
  ContaCorrente: 'ContaCorrente',
  CnpjCorrentista: 'CnpjCorrentista',
  ValorPago: 'ValorPago'
});

exports.Prisma.FormalizacaoBorderoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Bordero: 'Bordero',
  VersaoIntegracao: 'VersaoIntegracao',
  CliFor_ID: 'CliFor_ID',
  CnpjCliFor: 'CnpjCliFor',
  DataOperacao: 'DataOperacao',
  DataLiberacao: 'DataLiberacao',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  FormalizadoEm: 'FormalizadoEm',
  MensagemErro: 'MensagemErro',
  FormalizacaoSistema_ID: 'FormalizacaoSistema_ID'
});

exports.Prisma.FormalizacaoBorderoTarifaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBorderoCarteira_ID: 'FormalizacaoBorderoCarteira_ID',
  Descricao: 'Descricao',
  Valor: 'Valor',
  CodigoDeOperacao: 'CodigoDeOperacao'
});

exports.Prisma.FormalizacaoBorderoTituloScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FormalizacaoBorderoCarteira_ID: 'FormalizacaoBorderoCarteira_ID',
  Sigfls_ID: 'Sigfls_ID',
  Sacado_ID: 'Sacado_ID',
  CnpjCpfSacado: 'CnpjCpfSacado',
  TipoDocumento_ID: 'TipoDocumento_ID',
  Documento: 'Documento',
  Vencimento: 'Vencimento',
  Valor: 'Valor',
  ValorDesconto: 'ValorDesconto',
  DataLimiteDesconto: 'DataLimiteDesconto',
  NomeSacado: 'NomeSacado',
  DataEmissao: 'DataEmissao',
  NumeroNotaFiscal: 'NumeroNotaFiscal',
  ValorLiquido: 'ValorLiquido',
  DocumentoOriginal: 'DocumentoOriginal',
  ChaveNFe: 'ChaveNFe'
});

exports.Prisma.FormalizacaoSistemaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome'
});

exports.Prisma.FornecedorScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Nome: 'Nome',
  Contato: 'Contato',
  Telefone: 'Telefone',
  Cadastro: 'Cadastro',
  Pontual: 'Pontual',
  Compras: 'Compras',
  Prazo: 'Prazo',
  Qualidade: 'Qualidade',
  Obs: 'Obs',
  Limite: 'Limite',
  Conceito: 'Conceito',
  UltimaCompra: 'UltimaCompra',
  MaiorCompra: 'MaiorCompra',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.GerentbcScalarFieldEnum = makeEnum({
  id: 'id',
  banco: 'banco',
  codigo: 'codigo',
  tipo: 'tipo'
});

exports.Prisma.GrpCliLimSacadoScalarFieldEnum = makeEnum({
  CadGrupoEmpresarial_ID: 'CadGrupoEmpresarial_ID',
  Sacado: 'Sacado',
  ConsLimFIDC: 'ConsLimFIDC',
  ConsLimFIDC2: 'ConsLimFIDC2',
  PEPConsLimFIDC: 'PEPConsLimFIDC',
  PEPConsLimFIDC2: 'PEPConsLimFIDC2'
});

exports.Prisma.GrpCliLimiteGrupoCedenteScalarFieldEnum = makeEnum({
  CadGrupoEmpresarial_ID: 'CadGrupoEmpresarial_ID',
  Grupo: 'Grupo',
  ConsLimFIDC: 'ConsLimFIDC',
  ConsLimFIDC2: 'ConsLimFIDC2',
  PEPConsLimFIDC: 'PEPConsLimFIDC',
  PEPConsLimFIDC2: 'PEPConsLimFIDC2'
});

exports.Prisma.GrupoEmpresaScalarFieldEnum = makeEnum({
  id: 'id',
  idgrupo: 'idgrupo',
  clifor: 'clifor'
});

exports.Prisma.GrupoEstadosBorsScalarFieldEnum = makeEnum({
  IDGrupo: 'IDGrupo',
  TipoGrupo: 'TipoGrupo',
  IDUnico: 'IDUnico'
});

exports.Prisma.HistoricoContabilScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Formula: 'Formula',
  TipoHistorico: 'TipoHistorico',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.HistoricoLiquidacoesScalarFieldEnum = makeEnum({
  ID: 'ID',
  Fluxo_ID: 'Fluxo_ID',
  Sigfls_ID: 'Sigfls_ID',
  Valor: 'Valor',
  VlPgto: 'VlPgto',
  DtPgto: 'DtPgto',
  Estado: 'Estado',
  ValorLiquidacao: 'ValorLiquidacao',
  DataLiquidacao: 'DataLiquidacao',
  Evento: 'Evento'
});

exports.Prisma.IChequesHistoricoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  iCheque_ID: 'iCheque_ID',
  Situacao: 'Situacao',
  Historico: 'Historico',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.IChequesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CMC7: 'CMC7',
  Sacado: 'Sacado',
  CCF: 'CCF',
  Protesto: 'Protesto',
  Dt_Eliminado: 'Dt_Eliminado',
  Dcto: 'Dcto'
});

exports.Prisma.INDICESMONETARIOSScalarFieldEnum = makeEnum({
  DATA: 'DATA',
  VALOR: 'VALOR',
  CODINDICE: 'CODINDICE',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.IRec_ConfiguracaoCadastroScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  UtilizaiRec: 'UtilizaiRec',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou',
  UtilizaBoletoPreImpresso: 'UtilizaBoletoPreImpresso'
});

exports.Prisma.IWBA_LGNUSRScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  CD_TPUSR: 'CD_TPUSR',
  DT_ACSSRLCMTSIGCADTPUSR: 'DT_ACSSRLCMTSIGCADTPUSR',
  HR_ACSSRLCMTSIGCADTPUSR: 'HR_ACSSRLCMTSIGCADTPUSR',
  CD_TPOCRR: 'CD_TPOCRR'
});

exports.Prisma.IWBA_LOGSESSAOScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  USUARIO: 'USUARIO',
  SESSAO: 'SESSAO',
  EMPRESA: 'EMPRESA',
  CGC: 'CGC',
  DATA: 'DATA'
});

exports.Prisma.IWBA_PRMTRSScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  CD_TPUSR: 'CD_TPUSR',
  CD_TPPRMTRS: 'CD_TPPRMTRS'
});

exports.Prisma.IWBA_RLCMTSIGCADTPUSRScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  CD_TPUSR: 'CD_TPUSR',
  CD_RLCMTSIGCADTPUSR: 'CD_RLCMTSIGCADTPUSR',
  DS_PRQNT_RLCMTSIGCADTPUSR: 'DS_PRQNT_RLCMTSIGCADTPUSR',
  DS_RSPST_RLCMTSIGCADTPUSR: 'DS_RSPST_RLCMTSIGCADTPUSR',
  DS_LNBRT_RLCMTSIGCADTPUSR: 'DS_LNBRT_RLCMTSIGCADTPUSR',
  CNTDR_ACSS_RLCMTSIGCADTPUSR: 'CNTDR_ACSS_RLCMTSIGCADTPUSR',
  cd_emp: 'cd_emp'
});

exports.Prisma.IWBA_SACADOScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  NOME: 'NOME',
  ENDERECO: 'ENDERECO',
  NEND: 'NEND',
  COMPL: 'COMPL',
  BAIRRO: 'BAIRRO',
  CIDADE: 'CIDADE',
  ESTADO: 'ESTADO',
  CONTATO: 'CONTATO',
  EMAIL: 'EMAIL',
  CGC: 'CGC',
  CEP: 'CEP',
  FONE: 'FONE',
  FAX: 'FAX',
  Data: 'Data',
  Logradouro: 'Logradouro'
});

exports.Prisma.IWBA_TITULOScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  CEDENTE: 'CEDENTE',
  SACADO: 'SACADO',
  TIPO_DOC: 'TIPO_DOC',
  NUMERO: 'NUMERO',
  VALOR: 'VALOR',
  EMISSAO: 'EMISSAO',
  VENCIMENTO: 'VENCIMENTO',
  DTDESC: 'DTDESC',
  VALORDESC: 'VALORDESC',
  PRACA: 'PRACA',
  BANCO: 'BANCO',
  AGENCIA: 'AGENCIA',
  CONTA: 'CONTA',
  Trustee: 'Trustee',
  Data: 'Data',
  CMC7: 'CMC7',
  CHC1: 'CHC1',
  CHC2: 'CHC2',
  CHC3: 'CHC3'
});

exports.Prisma.IWBA_TPOCRRScalarFieldEnum = makeEnum({
  CD_TPOCRR: 'CD_TPOCRR',
  DS_TPOCRR: 'DS_TPOCRR'
});

exports.Prisma.IWBA_TPPRMTRSScalarFieldEnum = makeEnum({
  CD_TPPRMTRS: 'CD_TPPRMTRS',
  DS_TPPRMTRS: 'DS_TPPRMTRS',
  tipoCarteira: 'tipoCarteira',
  NOME_RELATORIO: 'NOME_RELATORIO'
});

exports.Prisma.IWBA_TPUSRScalarFieldEnum = makeEnum({
  CD_TPUSR: 'CD_TPUSR',
  DS_TPUSR: 'DS_TPUSR'
});

exports.Prisma.IdentifDeImportBorderoScalarFieldEnum = makeEnum({
  bordero: 'bordero',
  seunumero: 'seunumero'
});

exports.Prisma.ImobilizadoScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Sede: 'Sede',
  SedePropria: 'SedePropria',
  SedeAlugada: 'SedeAlugada',
  ValorImovel: 'ValorImovel',
  ValorAluguel: 'ValorAluguel',
  Onus: 'Onus',
  ValorOnus: 'ValorOnus',
  Proprietario: 'Proprietario',
  CapitalGiro: 'CapitalGiro',
  CapitalRegis: 'CapitalRegis',
  CapitalInt: 'CapitalInt',
  Empregados: 'Empregados',
  Estoque: 'Estoque',
  Faturamento: 'Faturamento',
  FolhaPagto: 'FolhaPagto',
  Instalacoes: 'Instalacoes',
  Seguro: 'Seguro',
  Seguradora: 'Seguradora',
  ValorSeguro: 'ValorSeguro'
});

exports.Prisma.ImportQuemScalarFieldEnum = makeEnum({
  clifor: 'clifor',
  FingerPrint: 'FingerPrint'
});

exports.Prisma.IndiceAtualizacaoAlteracaoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Indice: 'Indice',
  Nome: 'Nome',
  Descricao: 'Descricao',
  Cotacao: 'Cotacao',
  dt_atualizacao: 'dt_atualizacao',
  Formula: 'Formula',
  Periodicidade: 'Periodicidade',
  Tipo: 'Tipo',
  Garantia: 'Garantia',
  TaxaFixa: 'TaxaFixa',
  DiaUtil: 'DiaUtil',
  Owner: 'Owner'
});

exports.Prisma.IndiceAtualizacaoDesagioScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Indice: 'Indice',
  Operacao: 'Operacao',
  Observacao: 'Observacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.IndiceAtualizacaoParticipativaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Indice: 'Indice',
  Operacao: 'Operacao',
  Observacao: 'Observacao',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.IndiceAtualizacaoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome',
  Descricao: 'Descricao',
  Cotacao: 'Cotacao',
  dt_atualizacao: 'dt_atualizacao',
  Formula: 'Formula',
  Periodicidade: 'Periodicidade',
  Tipo: 'Tipo',
  Garantia: 'Garantia',
  TaxaFixa: 'TaxaFixa',
  DiaUtil: 'DiaUtil'
});

exports.Prisma.IndiceAtualizacaoSelicScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Indice: 'Indice',
  Inicial: 'Inicial',
  Final: 'Final',
  Fator: 'Fator',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.IniFilesScalarFieldEnum = makeEnum({
  Filial: 'Filial',
  Arquivo: 'Arquivo',
  Secao: 'Secao',
  Item: 'Item',
  Valor: 'Valor',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.Irec_tb_controle_inifilesScalarFieldEnum = makeEnum({
  Filial: 'Filial',
  Arquivo: 'Arquivo',
  Secao: 'Secao',
  Item: 'Item',
  Valor: 'Valor',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.ItensComplementaresScalarFieldEnum = makeEnum({
  ID: 'ID',
  Cedente: 'Cedente',
  Item: 'Item',
  Informacao: 'Informacao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou'
});

exports.Prisma.LIMSACADOScalarFieldEnum = makeEnum({
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  LIMITE: 'LIMITE',
  LIMITEFIDC: 'LIMITEFIDC',
  LIMITEFIDC2: 'LIMITEFIDC2',
  COOBRIGACAO: 'COOBRIGACAO',
  COOBRIGACAOFIDC: 'COOBRIGACAOFIDC',
  COOBRIGACAOFIDC2: 'COOBRIGACAOFIDC2',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  ConsLimFIDC: 'ConsLimFIDC',
  ConsLimFIDC2: 'ConsLimFIDC2',
  PEPConsLimFIDC: 'PEPConsLimFIDC',
  PEPConsLimFIDC2: 'PEPConsLimFIDC2'
});

exports.Prisma.LctosPgtoFIDC2ScalarFieldEnum = makeEnum({
  lcto: 'lcto',
  pgtofidc2: 'pgtofidc2'
});

exports.Prisma.LctosPgtoFIDCScalarFieldEnum = makeEnum({
  lcto: 'lcto',
  pgtofidc: 'pgtofidc'
});

exports.Prisma.LimiteGrupoCedenteScalarFieldEnum = makeEnum({
  Clifor: 'Clifor',
  Grupo: 'Grupo',
  Limite: 'Limite',
  LimiteFIDC: 'LimiteFIDC',
  LimiteFIDC2: 'LimiteFIDC2',
  ConsLimFIDC: 'ConsLimFIDC',
  ConsLimFIDC2: 'ConsLimFIDC2',
  PEPConsLimFIDC: 'PEPConsLimFIDC',
  PEPConsLimFIDC2: 'PEPConsLimFIDC2'
});

exports.Prisma.LimitrofesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Municipio: 'Municipio',
  Estado: 'Estado',
  CodIBGECidade: 'CodIBGECidade',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou'
});

exports.Prisma.LogfatoresScalarFieldEnum = makeEnum({
  id: 'id',
  data: 'data',
  owner: 'owner',
  descontomin: 'descontomin',
  descontomed: 'descontomed',
  descontomax: 'descontomax',
  anfacmin: 'anfacmin',
  anfacmed: 'anfacmed',
  anfacmax: 'anfacmax',
  outromin: 'outromin',
  outromed: 'outromed',
  outromax: 'outromax',
  calcmin: 'calcmin',
  calcmed: 'calcmed',
  calcmax: 'calcmax',
  calcminSImp: 'calcminSImp',
  calcmedSImp: 'calcmedSImp',
  calcmaxSImp: 'calcmaxSImp',
  FatorCFE_ID: 'FatorCFE_ID',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou'
});

exports.Prisma.LoginLogoutConexaoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Codigo: 'Codigo',
  Nome: 'Nome',
  Grupo: 'Grupo',
  Data: 'Data',
  Login_Logout: 'Login_Logout',
  Motivo: 'Motivo'
});

exports.Prisma.ModoDeCobrancaBancoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CobrancaBanco: 'CobrancaBanco',
  CobrancaInstrucao1: 'CobrancaInstrucao1',
  CobrancaDescricaoInstrucao1: 'CobrancaDescricaoInstrucao1',
  CobrancaInstrucao2: 'CobrancaInstrucao2',
  CobrancaDescricaoInstrucao2: 'CobrancaDescricaoInstrucao2',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.ModoDeCobrancaConfiguracaoScalarFieldEnum = makeEnum({
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  Configuracao: 'Configuracao',
  Valor: 'Valor',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou'
});

exports.Prisma.ModoDeCobrancaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  Descricao: 'Descricao',
  PermitePortador: 'PermitePortador',
  BoletoComOsDadosDoSacador: 'BoletoComOsDadosDoSacador',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou',
  Tag_ID: 'Tag_ID',
  BoletoComEnderecoDoCedente: 'BoletoComEnderecoDoCedente',
  JurosCobranca: 'JurosCobranca',
  DiasProtesto: 'DiasProtesto',
  MultaCobranca: 'MultaCobranca',
  EstadoConfirmacaoTitulo_ID: 'EstadoConfirmacaoTitulo_ID',
  Confirmado: 'Confirmado',
  RecebeComunicadoSacadoPapel: 'RecebeComunicadoSacadoPapel',
  RecebeComunicadoSacadoEmail: 'RecebeComunicadoSacadoEmail',
  RecebeBoletoPapel: 'RecebeBoletoPapel',
  RecebeBoletoEmail: 'RecebeBoletoEmail',
  CorFundo: 'CorFundo',
  CorFonte: 'CorFonte',
  LimiteModoCobranca: 'LimiteModoCobranca',
  idWeb: 'idWeb'
});

exports.Prisma.MutuoPreScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Seq: 'Seq',
  datapgto: 'datapgto',
  dc: 'dc',
  du: 'du',
  valorpgto: 'valorpgto',
  encargo: 'encargo',
  amortizacao: 'amortizacao',
  juros: 'juros',
  saldodevedor: 'saldodevedor'
});

exports.Prisma.MutuoScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Clifor: 'Clifor',
  Valor: 'Valor',
  TxEfetiva: 'TxEfetiva',
  Tipo: 'Tipo',
  Liberado: 'Liberado',
  Control: 'Control',
  Data: 'Data',
  Banco: 'Banco',
  Indice: 'Indice'
});

exports.Prisma.NFeImportadaItensScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NFeImportada_ID: 'NFeImportada_ID',
  Vencimento: 'Vencimento',
  Valor: 'Valor'
});

exports.Prisma.NFeImportadaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NomeArquivo: 'NomeArquivo',
  Chave: 'Chave',
  Tipo: 'Tipo',
  Dt_Importacao: 'Dt_Importacao',
  Arquivo: 'Arquivo',
  Assinatura: 'Assinatura',
  Certificado: 'Certificado',
  Protocolo: 'Protocolo',
  Status: 'Status',
  Emitente: 'Emitente',
  Numero: 'Numero',
  Serie: 'Serie',
  Valor: 'Valor',
  CGCSacado: 'CGCSacado',
  CGCCedente: 'CGCCedente',
  Sacado: 'Sacado',
  Origem_Importacao: 'Origem_Importacao',
  Data_Emissao: 'Data_Emissao',
  Enviado_monitoramento: 'Enviado_monitoramento',
  Data_envio_monitoramento: 'Data_envio_monitoramento',
  Usuario_envio_monitoramento: 'Usuario_envio_monitoramento',
  Status_monitoramento: 'Status_monitoramento',
  Estado_monitoramento: 'Estado_monitoramento',
  Protocolo_monitoramento: 'Protocolo_monitoramento'
});

exports.Prisma.NFeImportadaXSigborsScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NFeImportada_ID: 'NFeImportada_ID',
  Bordero: 'Bordero'
});

exports.Prisma.NFeImportadaXSigflsMultiplasNFesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NFeImportada_ID: 'NFeImportada_ID',
  Sigfls_ID: 'Sigfls_ID',
  TipoVinculo: 'TipoVinculo'
});

exports.Prisma.NFeImportadaXSigflsScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NFeImportada_ID: 'NFeImportada_ID',
  Sigfls_ID: 'Sigfls_ID',
  TipoVinculo: 'TipoVinculo'
});

exports.Prisma.NotaFiscalEntradaFaturaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NotaFiscalEntrada_ID: 'NotaFiscalEntrada_ID',
  Codigo: 'Codigo',
  Dcto: 'Dcto',
  Data: 'Data',
  Valor: 'Valor',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.NotaFiscalEntradaItemScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NotaFiscalEntrada_ID: 'NotaFiscalEntrada_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  SituacaoTributaria_ID: 'SituacaoTributaria_ID',
  Unidade: 'Unidade',
  Quantidade: 'Quantidade',
  Valor: 'Valor',
  ValorTotal: 'ValorTotal',
  BaseCalculoIcms: 'BaseCalculoIcms',
  Icms: 'Icms',
  IPI: 'IPI',
  PIS: 'PIS',
  COFINS: 'COFINS',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.NotaFiscalEntradaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  NotaFiscal: 'NotaFiscal',
  Serie: 'Serie',
  DtEmissao: 'DtEmissao',
  DtEntrada: 'DtEntrada',
  ClienteFornecedor: 'ClienteFornecedor',
  BaseCalculoIcms: 'BaseCalculoIcms',
  ValorIcms: 'ValorIcms',
  BaseCalculoIcmsSt: 'BaseCalculoIcmsSt',
  IcmsSt: 'IcmsSt',
  TotalProdutos: 'TotalProdutos',
  Frete: 'Frete',
  Seguro: 'Seguro',
  Desconto: 'Desconto',
  Despesas: 'Despesas',
  IPI: 'IPI',
  TotalNota: 'TotalNota',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado',
  Control: 'Control'
});

exports.Prisma.ObservacoesSigcadScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  clifor: 'clifor',
  data: 'data',
  owner: 'owner',
  observacao: 'observacao'
});

exports.Prisma.ObssigcadScalarFieldEnum = makeEnum({
  id: 'id',
  codigo: 'codigo',
  ctrl_id: 'ctrl_id',
  DATA: 'DATA',
  CONTATO: 'CONTATO',
  TIPOCONT: 'TIPOCONT',
  FONE: 'FONE',
  FAX: 'FAX',
  EMAIL: 'EMAIL',
  DTVISITA: 'DTVISITA',
  HISTORICO: 'HISTORICO',
  USUARIO: 'USUARIO'
});

exports.Prisma.OcorrenciaProtestoScalarFieldEnum = makeEnum({
  ID: 'ID',
  RegBB: 'RegBB',
  DtOcorrencia: 'DtOcorrencia',
  TipoOcorrenciaProtesto: 'TipoOcorrenciaProtesto',
  Observacao: 'Observacao',
  Usuario: 'Usuario'
});

exports.Prisma.OcorrenciaretornoScalarFieldEnum = makeEnum({
  banco: 'banco',
  codigo: 'codigo',
  descricao: 'descricao'
});

exports.Prisma.OperacaoProducaoScalarFieldEnum = makeEnum({
  numero: 'numero',
  data: 'data',
  cliente: 'cliente',
  valor: 'valor',
  dataentregaprodutoservico: 'dataentregaprodutoservico',
  usuario: 'usuario',
  estado: 'estado',
  control: 'control',
  totaltitulos: 'totaltitulos',
  dtliberacao: 'dtliberacao',
  tarfomproducao: 'tarfomproducao',
  gerente: 'gerente',
  comissao: 'comissao',
  fator: 'fator',
  dataentregaatualizacaovalor: 'dataentregaatualizacaovalor',
  atualizacaovalor: 'atualizacaovalor',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID'
});

exports.Prisma.OperadoresControleScalarFieldEnum = makeEnum({
  operador: 'operador',
  cliente: 'cliente',
  Titulos: 'Titulos',
  Documentos: 'Documentos',
  Vencidos: 'Vencidos'
});

exports.Prisma.PAGCLIENTEScalarFieldEnum = makeEnum({
  ID: 'ID',
  CLIFOR: 'CLIFOR'
});

exports.Prisma.PagamentoContaCorrenteScalarFieldEnum = makeEnum({
  tipooperacao: 'tipooperacao',
  operacao: 'operacao',
  sequencia: 'sequencia',
  banco: 'banco',
  pgfavorecido: 'pgfavorecido',
  pgvalor: 'pgvalor',
  pgforma: 'pgforma',
  pgbanco: 'pgbanco',
  pgagencia: 'pgagencia',
  pgcontacorrente: 'pgcontacorrente',
  pgcmc7: 'pgcmc7',
  pgcheque: 'pgcheque',
  complemento: 'complemento'
});

exports.Prisma.PagamentoFluxo_FIDC2ScalarFieldEnum = makeEnum({
  BORDERO: 'BORDERO',
  sequencia: 'sequencia',
  Banco: 'Banco',
  VALOR: 'VALOR',
  TipoPgto: 'TipoPgto',
  clifor: 'clifor',
  PgBANCO: 'PgBANCO',
  PgAGENCIA: 'PgAGENCIA',
  PgCONTACORRENTE: 'PgCONTACORRENTE',
  COMPLEMENTO: 'COMPLEMENTO',
  tipooperacao: 'tipooperacao'
});

exports.Prisma.PagamentoFluxo_FIDCScalarFieldEnum = makeEnum({
  BORDERO: 'BORDERO',
  sequencia: 'sequencia',
  Banco: 'Banco',
  VALOR: 'VALOR',
  TipoPgto: 'TipoPgto',
  clifor: 'clifor',
  PgBANCO: 'PgBANCO',
  PgAGENCIA: 'PgAGENCIA',
  PgCONTACORRENTE: 'PgCONTACORRENTE',
  COMPLEMENTO: 'COMPLEMENTO',
  tipooperacao: 'tipooperacao'
});

exports.Prisma.PagamentosScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  TipoDcto: 'TipoDcto',
  TipoPgto: 'TipoPgto',
  Banco: 'Banco',
  Agencia: 'Agencia',
  ContaCorrente: 'ContaCorrente',
  CodigoBarras: 'CodigoBarras'
});

exports.Prisma.PatrimonioLiquidoScalarFieldEnum = makeEnum({
  data: 'data',
  valor: 'valor',
  usuario: 'usuario',
  carteira: 'carteira',
  TipoCapital: 'TipoCapital'
});

exports.Prisma.PesquisaSigcadSetupScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Usuario: 'Usuario',
  NomeServico: 'NomeServico',
  Filtro: 'Filtro',
  Parte: 'Parte'
});

exports.Prisma.PgtoFIDC2ScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  clifor: 'clifor',
  banco: 'banco',
  agencia: 'agencia',
  conta: 'conta',
  cnpj: 'cnpj',
  nome: 'nome',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.PgtoFIDCScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  clifor: 'clifor',
  banco: 'banco',
  agencia: 'agencia',
  conta: 'conta',
  cnpj: 'cnpj',
  nome: 'nome',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.PlanoDeContaFuncaoScalarFieldEnum = makeEnum({
  CodigoFuncao: 'CodigoFuncao',
  Funcao: 'Funcao',
  Planodeconta_id: 'Planodeconta_id'
});

exports.Prisma.PlanoDeContaFuncaoXEntidadeScalarFieldEnum = makeEnum({
  PlanoDeContaFuncao_ID: 'PlanoDeContaFuncao_ID',
  Entidade_ID: 'Entidade_ID',
  PlanoDeConta_ID: 'PlanoDeConta_ID'
});

exports.Prisma.PlanoDeContaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  N1: 'N1',
  N2: 'N2',
  N3: 'N3',
  N4: 'N4',
  N5: 'N5',
  N6: 'N6',
  Classificador: 'Classificador',
  ClassificadorComMargem: 'ClassificadorComMargem',
  Nome: 'Nome',
  Nivel: 'Nivel',
  Destacado: 'Destacado',
  ContaPai: 'ContaPai',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado',
  Entidade_ID: 'Entidade_ID'
});

exports.Prisma.PlanoDeContaVisaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.PlanoDeContaXPlanoDeContaVisaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  PlanoDeConta_ID: 'PlanoDeConta_ID',
  PlanoDeContaVisao_ID: 'PlanoDeContaVisao_ID',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.PlanoDeContaXSig01XCarteiraScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  PlanoDeConta_ID: 'PlanoDeConta_ID',
  Carteira_ID: 'Carteira_ID',
  Sig01_ID: 'Sig01_ID',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.PracacobScalarFieldEnum = makeEnum({
  nome: 'nome'
});

exports.Prisma.PracacomScalarFieldEnum = makeEnum({
  id: 'id',
  banco: 'banco',
  codigo: 'codigo',
  praca: 'praca'
});

exports.Prisma.PromissoriaScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Numero: 'Numero',
  Parcela: 'Parcela',
  Data: 'Data',
  Vcto: 'Vcto',
  Valor: 'Valor',
  carteira: 'carteira'
});

exports.Prisma.ProrataScalarFieldEnum = makeEnum({
  Tipo: 'Tipo',
  Codigo: 'Codigo',
  Data: 'Data',
  Estado: 'Estado',
  Conta: 'Conta',
  ContraPartida: 'ContraPartida',
  DebCre: 'DebCre',
  Valor: 'Valor',
  ContaHistorico: 'ContaHistorico',
  ContraHistorico: 'ContraHistorico',
  PlanoDeConta: 'PlanoDeConta'
});

exports.Prisma.ProrataparcelaScalarFieldEnum = makeEnum({
  ID: 'ID',
  Tipo: 'Tipo',
  Codigo: 'Codigo',
  parcela: 'parcela',
  Data: 'Data',
  Estado: 'Estado',
  Conta: 'Conta',
  ContraPartida: 'ContraPartida',
  DebCre: 'DebCre',
  Valor: 'Valor',
  ContaHistorico: 'ContaHistorico',
  ContraHistorico: 'ContraHistorico',
  PlanoDeConta: 'PlanoDeConta',
  Apropriadoate: 'Apropriadoate',
  DataLiquidacao: 'DataLiquidacao'
});

exports.Prisma.ProvisaoFluxoItemCCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ProvisaoFluxoItem_ID: 'ProvisaoFluxoItem_ID',
  Codigo: 'Codigo',
  Banco: 'Banco',
  Documento: 'Documento',
  Valor: 'Valor',
  Historico: 'Historico',
  ClienteFornecedor: 'ClienteFornecedor',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ProvisaoFluxoItemScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ProvisaoFluxo_ID: 'ProvisaoFluxo_ID',
  Codigo: 'Codigo',
  Documento: 'Documento',
  Valor: 'Valor',
  Historico: 'Historico',
  ClienteFornecedor: 'ClienteFornecedor',
  DiaDoMes: 'DiaDoMes',
  TipoDiaUtil: 'TipoDiaUtil',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado',
  DescontoComercial: 'DescontoComercial',
  DiaDescontoComercial: 'DiaDescontoComercial',
  DtEmissao: 'DtEmissao',
  Observacao: 'Observacao',
  Ativo: 'Ativo',
  AdicionarMesAnoAoHistorico: 'AdicionarMesAnoAoHistorico',
  ControlarParcelamento: 'ControlarParcelamento',
  NumeroParcelaAtual: 'NumeroParcelaAtual',
  TotalParcelas: 'TotalParcelas',
  DtInicioProvisao: 'DtInicioProvisao',
  CadIndiceMonetario_ID: 'CadIndiceMonetario_ID',
  DtProximaCorrecaoMonetaria: 'DtProximaCorrecaoMonetaria'
});

exports.Prisma.ProvisaoFluxoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.PublicacaoProvisaoFluxoItemCCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  PublicacaoProvisaoFluxoItem_ID: 'PublicacaoProvisaoFluxoItem_ID',
  ProvisaoFluxoItemCC_ID: 'ProvisaoFluxoItemCC_ID',
  Codigo: 'Codigo',
  Banco: 'Banco',
  Documento: 'Documento',
  Data: 'Data',
  Valor: 'Valor',
  Historico: 'Historico',
  ClienteFornecedor: 'ClienteFornecedor',
  SigNN_ID: 'SigNN_ID',
  Quando: 'Quando',
  EstornadoEm: 'EstornadoEm'
});

exports.Prisma.PublicacaoProvisaoFluxoItemScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  PublicacaoProvisaoFluxo_ID: 'PublicacaoProvisaoFluxo_ID',
  ProvisaoFluxoItem_ID: 'ProvisaoFluxoItem_ID',
  Codigo: 'Codigo',
  Documento: 'Documento',
  Vencimento: 'Vencimento',
  Valor: 'Valor',
  Historico: 'Historico',
  ClienteFornecedor: 'ClienteFornecedor',
  DescontoComercial: 'DescontoComercial',
  DtDescontoComercial: 'DtDescontoComercial',
  DtEmissao: 'DtEmissao',
  CodigoReduzido: 'CodigoReduzido',
  Quando: 'Quando',
  EstornadoEm: 'EstornadoEm'
});

exports.Prisma.PublicacaoProvisaoFluxoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ProvisaoFluxo_ID: 'ProvisaoFluxo_ID',
  Control: 'Control',
  Quem: 'Quem',
  Quando: 'Quando',
  EstornadoEm: 'EstornadoEm'
});

exports.Prisma.RELATOSEGMENTO20_01_01_06ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NOMEFILIAL: 'NOMEFILIAL',
  CODIGOEMBRATEL: 'CODIGOEMBRATEL',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA'
});

exports.Prisma.RELATOSEGMENTO20_01_01_09ScalarFieldEnum = makeEnum({
  FATAUT_CODIGO: 'FATAUT_CODIGO',
  FATAUT_NUMERO: 'FATAUT_NUMERO',
  CODIGO: 'CODIGO',
  AUXILIAR_TIPOSITUACAO_CODIGO: 'AUXILIAR_TIPOSITUACAO_CODIGO',
  AUXILIAR_TIPODOCUMENTO_CODIGO: 'AUXILIAR_TIPODOCUMENTO_CODIGO',
  PAIS: 'PAIS',
  PERCENTUALCAPITAL: 'PERCENTUALCAPITAL',
  DATAENTRADA: 'DATAENTRADA',
  PERCENTUALCAPITALVOTANTE: 'PERCENTUALCAPITALVOTANTE',
  CODIGOSERASA: 'CODIGOSERASA',
  CGC: 'CGC',
  NOME: 'NOME',
  RESTRITO: 'RESTRITO',
  DATAATUALIZACAO: 'DATAATUALIZACAO',
  BASEJUNTACOMERCIAL: 'BASEJUNTACOMERCIAL',
  CARGO: 'CARGO',
  ESTADOCIVIL: 'ESTADOCIVIL',
  DATAFINALMANDATO: 'DATAFINALMANDATO',
  CODIGOCARGO: 'CODIGOCARGO',
  TIPO: 'TIPO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA'
});

exports.Prisma.RELATOSEGMENTO20_02_01_03ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAO: 'DESCRICAO',
  QUANTIDADE: 'QUANTIDADE'
});

exports.Prisma.RELATOSEGMENTO20_02_01_08ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAO: 'DESCRICAO',
  QUANTIDADE: 'QUANTIDADE',
  PERCENTUAL: 'PERCENTUAL'
});

exports.Prisma.RELATOSEGMENTO20_02_01_14ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAO: 'DESCRICAO',
  QUANTIDADE: 'QUANTIDADE',
  SEGMENTOORIGEMINFORMACAO: 'SEGMENTOORIGEMINFORMACAO'
});

exports.Prisma.RELATOSEGMENTO20_02_01_FONINFScalarFieldEnum = makeEnum({
  QTDFONTES: 'QTDFONTES',
  QTDFONTESPERFILHISTPAG: 'QTDFONTESPERFILHISTPAG',
  QTDFONTESEVCOMPROMISSO: 'QTDFONTESEVCOMPROMISSO',
  QTDFONTESREFNEGOCIOS: 'QTDFONTESREFNEGOCIOS',
  QTDFONTESREFNEGPAG: 'QTDFONTESREFNEGPAG',
  QTDFONTESHISTPAG: 'QTDFONTESHISTPAG',
  TIPO: 'TIPO',
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA'
});

exports.Prisma.RELATOSEGMENTO20_02_01_OCORScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAOMES: 'DESCRICAOMES',
  DESCRICAO: 'DESCRICAO',
  VALOR: 'VALOR',
  PERCENTUAL: 'PERCENTUAL',
  VENCIDOS: 'VENCIDOS',
  AVENCER: 'AVENCER',
  TIPO: 'TIPO',
  SEGMENTOORIGEMINFORMACAO: 'SEGMENTOORIGEMINFORMACAO',
  ANO: 'ANO',
  MES: 'MES'
});

exports.Prisma.RELATOSEGMENTO20_02_01_POTCOMScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAO: 'DESCRICAO',
  VALOR: 'VALOR',
  MEDIA: 'MEDIA',
  DATA: 'DATA',
  TIPO: 'TIPO',
  SEGMENTOORIGEMINFORMACAO: 'SEGMENTOORIGEMINFORMACAO'
});

exports.Prisma.RELATOSEGMENTO20_02_01_PRINFONScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  NOME: 'NOME',
  CNPJ: 'CNPJ',
  DATAATUALIZACAOBLOCO: 'DATAATUALIZACAOBLOCO',
  TIPO: 'TIPO'
});

exports.Prisma.RELATOSEGMENTO20_03_01_01ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DESCRICAOMES: 'DESCRICAOMES',
  CONSULTAEMPRESA: 'CONSULTAEMPRESA',
  CONSULTABANCO: 'CONSULTABANCO',
  ANO: 'ANO',
  MES: 'MES'
});

exports.Prisma.RELATOSEGMENTO20_03_01_02ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  NOME: 'NOME',
  CONSULTASNODIAPORCLIENTE: 'CONSULTASNODIAPORCLIENTE',
  DATA: 'DATA'
});

exports.Prisma.RELATOSEGMENTO20_03_01_03ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  ALERTA: 'ALERTA'
});

exports.Prisma.RELATOSEGMENTO20_04_01_VLRFINScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  QUANTIDADE: 'QUANTIDADE',
  QUANTIDADEULTIMAOCORRENCIA: 'QUANTIDADEULTIMAOCORRENCIA',
  TITULOOCORRENCIA: 'TITULOOCORRENCIA',
  AVALISTA: 'AVALISTA',
  VALOR: 'VALOR',
  CONTRATO: 'CONTRATO',
  ORIGEM: 'ORIGEM',
  FILIAL: 'FILIAL',
  SUBJUDICEPRACA: 'SUBJUDICEPRACA',
  SUBJUDICEDISTRITO: 'SUBJUDICEDISTRITO',
  SUBJUDICEVARA: 'SUBJUDICEVARA',
  SUBJUDICEDATA: 'SUBJUDICEDATA',
  SUBJUDICEPROCESSO: 'SUBJUDICEPROCESSO',
  DATA: 'DATA',
  NATUREZA_CODIGO: 'NATUREZA_CODIGO',
  TIPO: 'TIPO',
  MENSAGEM: 'MENSAGEM'
});

exports.Prisma.RELATOSEGMENTO20_04_02_01ScalarFieldEnum = makeEnum({
  GRAFIAS: 'GRAFIAS',
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA'
});

exports.Prisma.RELATOSEGMENTO20_04_02_02ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  QUANTIDADE: 'QUANTIDADE',
  GRUPO: 'GRUPO',
  DESCRICAOMESINICIAL: 'DESCRICAOMESINICIAL',
  DESCRICAOMESFINAL: 'DESCRICAOMESFINAL',
  MOEDA: 'MOEDA',
  VALOR: 'VALOR',
  ORIGEM: 'ORIGEM',
  AGENCIA: 'AGENCIA',
  TOTALPROTESTO: 'TOTALPROTESTO',
  CODIGONATUREZA: 'CODIGONATUREZA',
  ANOINICIAL: 'ANOINICIAL',
  MESINICIAL: 'MESINICIAL',
  ANOFINAL: 'ANOFINAL',
  MESFINAL: 'MESFINAL'
});

exports.Prisma.RELATOSEGMENTO20_04_03_01ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  QUANTIDADE: 'QUANTIDADE',
  MOEDA: 'MOEDA',
  VALOR: 'VALOR',
  CARTORIO: 'CARTORIO',
  CIDADE: 'CIDADE',
  UF: 'UF',
  SUBJUDICEPRACA: 'SUBJUDICEPRACA',
  SUBJUDICEDISTRITO: 'SUBJUDICEDISTRITO',
  SUBJUDICEVARA: 'SUBJUDICEVARA',
  SUBJUDICEDATA: 'SUBJUDICEDATA',
  SUBJUDICEPROCESSO: 'SUBJUDICEPROCESSO',
  CODIGONATUREZA: 'CODIGONATUREZA',
  DATACARTAANUENCIA: 'DATACARTAANUENCIA',
  AGENCIA: 'AGENCIA',
  DESCRICAO: 'DESCRICAO',
  NATUREZAACAO: 'NATUREZAACAO',
  AVALISTA: 'AVALISTA',
  DISTRITO: 'DISTRITO',
  VARA: 'VARA',
  CNPJ: 'CNPJ',
  NOME: 'NOME',
  ORIGEM: 'ORIGEM',
  TITULOOCORRENCIA: 'TITULOOCORRENCIA',
  INSTITUICAOFINANCEIRA: 'INSTITUICAOFINANCEIRA',
  TIPO: 'TIPO',
  DATA: 'DATA',
  LOCAL: 'LOCAL',
  TIPOCARTAANUENCIA_CODIGO: 'TIPOCARTAANUENCIA_CODIGO'
});

exports.Prisma.RELATOSEGMENTO20_04_08_01ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  QUANTIDADE: 'QUANTIDADE',
  NUMEROCHEQUE: 'NUMEROCHEQUE',
  ALINEA: 'ALINEA',
  QUANTIDADENOBANCO: 'QUANTIDADENOBANCO',
  MOEDA: 'MOEDA',
  VALOR: 'VALOR',
  BANCO: 'BANCO',
  AGENCIA: 'AGENCIA',
  CIDADE: 'CIDADE',
  UF: 'UF',
  CODIGONATUREZA: 'CODIGONATUREZA',
  TIPO: 'TIPO',
  DATA: 'DATA'
});

exports.Prisma.RELATOSEGMENTO20_04_10_01ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  BANCO: 'BANCO',
  AGENCIA: 'AGENCIA',
  CONTA: 'CONTA',
  DIGITOCONTA: 'DIGITOCONTA',
  CHEQUEINICIAL: 'CHEQUEINICIAL',
  CHEQUEFINAL: 'CHEQUEFINAL',
  MOTIVO: 'MOTIVO',
  DATA: 'DATA'
});

exports.Prisma.RELATOSEGMENTO20_07_01_RISKMESScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  DATAHORA: 'DATAHORA',
  FATORRISKSCORING: 'FATORRISKSCORING',
  FATORPRINAD: 'FATORPRINAD',
  TIPO: 'TIPO'
});

exports.Prisma.RELATOSEGMENTO20_07_01_RISKScalarFieldEnum = makeEnum({
  DATAHORA: 'DATAHORA',
  MENSAGEM: 'MENSAGEM',
  TIPO: 'TIPO',
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA'
});

exports.Prisma.RELATOSEGMENTOBASEScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  CNPJ: 'CNPJ',
  TEMFICHA: 'TEMFICHA',
  ULTIMAREMESSARECIPROCIDADE: 'ULTIMAREMESSARECIPROCIDADE',
  TRANSACOESCONTDESMEMBRADAS: 'TRANSACOESCONTDESMEMBRADAS',
  TIPORELATO: 'TIPORELATO',
  MENSAGEMSTATUSEMPRESA: 'MENSAGEMSTATUSEMPRESA',
  CONFIDENCIALPARA: 'CONFIDENCIALPARA',
  DATAHORACONTCONSULTA: 'DATAHORACONTCONSULTA',
  CNPJEDITADO: 'CNPJEDITADO',
  DATAATUALIZACAOBLOCO: 'DATAATUALIZACAOBLOCO',
  NUMULTIMOREGORGAOSOFICIAIS: 'NUMULTIMOREGORGAOSOFICIAIS',
  DATAULTIMOREGORGAOSOFICIAIS: 'DATAULTIMOREGORGAOSOFICIAIS',
  NOME: 'NOME',
  NOMEFANTASIA: 'NOMEFANTASIA',
  ENDERECO: 'ENDERECO',
  CIDADE: 'CIDADE',
  UF: 'UF',
  CEP: 'CEP',
  DDD: 'DDD',
  TELEFONE: 'TELEFONE',
  FAX: 'FAX',
  CODIGOEMBRATEL: 'CODIGOEMBRATEL',
  PAGINAINTERNET: 'PAGINAINTERNET',
  DATAFUNDACAO: 'DATAFUNDACAO',
  DATAINSCRICAOCNPJ: 'DATAINSCRICAOCNPJ',
  RAMOATIVIDADE: 'RAMOATIVIDADE',
  CODIGOSERASACOMPLETO: 'CODIGOSERASACOMPLETO',
  QUANTIDADEEMPREGADOS: 'QUANTIDADEEMPREGADOS',
  PERCENTUALCOMPRA: 'PERCENTUALCOMPRA',
  PRINCIPAISPRODUTOS: 'PRINCIPAISPRODUTOS',
  DATAATUALIZACAO: 'DATAATUALIZACAO',
  CAPITALSOCIAL: 'CAPITALSOCIAL',
  CAPITALREALIZADO: 'CAPITALREALIZADO',
  CAPITALAUTORIZADO: 'CAPITALAUTORIZADO',
  NACIONALIDADE: 'NACIONALIDADE',
  ORIGEM: 'ORIGEM',
  NATUREZA: 'NATUREZA',
  BASEJUNTACOMERCIAL: 'BASEJUNTACOMERCIAL',
  FONTES_DATAATUALIZACAOBLOCO: 'FONTES_DATAATUALIZACAOBLOCO',
  ANTECESSORA_NOME: 'ANTECESSORA_NOME',
  ANTECESSORA_DATAMOTIVO: 'ANTECESSORA_DATAMOTIVO',
  RECHEQUE_QTD: 'RECHEQUE_QTD',
  RECHEQUE_QTDULTIMAOCORRENCIA: 'RECHEQUE_QTDULTIMAOCORRENCIA',
  REGISTRO: 'REGISTRO',
  PERCENTUALVENDA: 'PERCENTUALVENDA',
  QUANTIDADEFILIAIS: 'QUANTIDADEFILIAIS',
  CNAE: 'CNAE',
  NIRE: 'NIRE',
  TIPOSOCIEDADE: 'TIPOSOCIEDADE'
});

exports.Prisma.RELATOSEGMENTO_FORNECEDORESScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NUMERO: 'NUMERO',
  LINHA: 'LINHA',
  MNEMONICO: 'MNEMONICO',
  DATAATUALIZACAO: 'DATAATUALIZACAO',
  SEGMENTOORIGEMINFORMACAO: 'SEGMENTOORIGEMINFORMACAO',
  DATAULTIMACOMPRA: 'DATAULTIMACOMPRA',
  VALORULTIMACOMPRA: 'VALORULTIMACOMPRA',
  DATAMAIORFATURA: 'DATAMAIORFATURA',
  VALORMAIORFATURA: 'VALORMAIORFATURA',
  DATAMAIORACUMULO: 'DATAMAIORACUMULO',
  VALORMAIORACUMULO: 'VALORMAIORACUMULO',
  AVISTA: 'AVISTA',
  VENCIDOS: 'VENCIDOS',
  AVENCER: 'AVENCER',
  DATAMAIORVALOR: 'DATAMAIORVALOR',
  MAIORVALOR: 'MAIORVALOR',
  DATAATRASO: 'DATAATRASO',
  DIASATRASO: 'DIASATRASO',
  DIASPOSITIVO: 'DIASPOSITIVO',
  PAGAMENTOS: 'PAGAMENTOS',
  PAGAMENTOSATRASADOS: 'PAGAMENTOSATRASADOS',
  MEDIADIASATRASO: 'MEDIADIASATRASO',
  CLIENTEDESDE: 'CLIENTEDESDE',
  TIPO: 'TIPO'
});

exports.Prisma.ReciboScalarFieldEnum = makeEnum({
  id: 'id',
  numero: 'numero',
  data: 'data',
  valor: 'valor',
  favorecido: 'favorecido',
  forma: 'forma',
  codigo: 'codigo',
  observacao: 'observacao'
});

exports.Prisma.RectarScalarFieldEnum = makeEnum({
  id: 'id',
  recompra: 'recompra',
  nome: 'nome',
  valor: 'valor',
  codigo: 'codigo'
});

exports.Prisma.RefBancariaScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Banco: 'Banco',
  Agencia: 'Agencia',
  NomeAgencia: 'NomeAgencia',
  Conta: 'Conta',
  Contato: 'Contato',
  Telefone: 'Telefone',
  Tempo: 'Tempo',
  DataConsulta: 'DataConsulta',
  NotaConsulta: 'NotaConsulta'
});

exports.Prisma.RefComercialScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Empresa: 'Empresa',
  Endereco: 'Endereco',
  Contato: 'Contato',
  Telefone: 'Telefone'
});

exports.Prisma.RefPessoaisScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Nome: 'Nome',
  Endereco: 'Endereco',
  Telefone: 'Telefone'
});

exports.Prisma.RegistroEstadoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.RegistroRegistradoraScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome'
});

exports.Prisma.RegistroScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Registradora_ID: 'Registradora_ID',
  ContasLancamento_ID: 'ContasLancamento_ID',
  Estado_ID: 'Estado_ID',
  Protocolo: 'Protocolo',
  MensagemErro: 'MensagemErro',
  EnviadoEm: 'EnviadoEm',
  ConsultadoEm: 'ConsultadoEm',
  RegistradoEm: 'RegistradoEm',
  Dt_Inclusao: 'Dt_Inclusao',
  QuemCriou_ID: 'QuemCriou_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID',
  Dt_Exclusao: 'Dt_Exclusao',
  QuemEliminou_ID: 'QuemEliminou_ID',
  Registro_ID: 'Registro_ID',
  ProtocoloConclusao_ID: 'ProtocoloConclusao_ID',
  Carteira_ID: 'Carteira_ID'
});

exports.Prisma.Relato06ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Sequencia: 'Sequencia',
  QtdPendenciasFinanceiras: 'QtdPendenciasFinanceiras',
  QtdUltimaOcorrencia: 'QtdUltimaOcorrencia',
  DtOcorrencia: 'DtOcorrencia',
  Titulo: 'Titulo',
  Avalista: 'Avalista',
  ValorPendencia: 'ValorPendencia',
  Contrato: 'Contrato',
  OrigemPendencia: 'OrigemPendencia',
  FilialOcorrencia: 'FilialOcorrencia',
  SJPraca: 'SJPraca',
  SJDistrito: 'SJDistrito',
  SJVara: 'SJVara',
  SJData: 'SJData',
  SJProcesso: 'SJProcesso',
  Natureza: 'Natureza'
});

exports.Prisma.Relato07ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Sequencia: 'Sequencia',
  QtdPendenciasFinanceiras: 'QtdPendenciasFinanceiras',
  QtdUltimaOcorrencia: 'QtdUltimaOcorrencia',
  DtOcorrencia: 'DtOcorrencia',
  Titulo: 'Titulo',
  Avalista: 'Avalista',
  ValorPendencia: 'ValorPendencia',
  Contrato: 'Contrato',
  OrigemPendencia: 'OrigemPendencia',
  FilialOcorrencia: 'FilialOcorrencia',
  SJPraca: 'SJPraca',
  SJDistrito: 'SJDistrito',
  SJVara: 'SJVara',
  SJData: 'SJData',
  SJProcesso: 'SJProcesso',
  Natureza: 'Natureza'
});

exports.Prisma.Relato08ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Sequencia: 'Sequencia',
  QtdOcorrencias: 'QtdOcorrencias',
  GrupoOcorrencias: 'GrupoOcorrencias',
  NomeMesInicial: 'NomeMesInicial',
  MesInicial: 'MesInicial',
  AnoInicial: 'AnoInicial',
  NomeMesFinal: 'NomeMesFinal',
  MesFinal: 'MesFinal',
  AnoFinal: 'AnoFinal',
  MoedaOcorrencia: 'MoedaOcorrencia',
  ValorOcorrencia: 'ValorOcorrencia',
  OrigemOcorrencia: 'OrigemOcorrencia',
  AgenciaOcorrencia: 'AgenciaOcorrencia'
});

exports.Prisma.Relato09ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Sequencia: 'Sequencia',
  Data: 'Data',
  Banco: 'Banco',
  Agencia: 'Agencia',
  ContaCorrente: 'ContaCorrente',
  DigitoConta: 'DigitoConta',
  ChequeInicial: 'ChequeInicial',
  ChequeFinal: 'ChequeFinal',
  Motivo: 'Motivo'
});

exports.Prisma.RelatoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Em: 'Em',
  R01RazaoSocial: 'R01RazaoSocial',
  R02Endereco: 'R02Endereco',
  R02DDD: 'R02DDD',
  R02Telefone: 'R02Telefone',
  R03RamoAtividade: 'R03RamoAtividade',
  R03Fundacao: 'R03Fundacao',
  R04_00Ano: 'R04_00Ano',
  R04_00Mes: 'R04_00Mes',
  R04_00NomeMes: 'R04_00NomeMes',
  R04_00QtdEmpresas: 'R04_00QtdEmpresas',
  R04_00QtdFinanceira: 'R04_00QtdFinanceira',
  R04_01Ano: 'R04_01Ano',
  R04_01Mes: 'R04_01Mes',
  R04_01NomeMes: 'R04_01NomeMes',
  R04_01QtdEmpresas: 'R04_01QtdEmpresas',
  R04_01QtdFinanceira: 'R04_01QtdFinanceira',
  R04_02Ano: 'R04_02Ano',
  R04_02Mes: 'R04_02Mes',
  R04_02NomeMes: 'R04_02NomeMes',
  R04_02QtdEmpresas: 'R04_02QtdEmpresas',
  R04_02QtdFinanceira: 'R04_02QtdFinanceira',
  R04_03Ano: 'R04_03Ano',
  R04_03Mes: 'R04_03Mes',
  R04_03NomeMes: 'R04_03NomeMes',
  R04_03QtdEmpresas: 'R04_03QtdEmpresas',
  R04_03QtdFinanceira: 'R04_03QtdFinanceira',
  R04_04Ano: 'R04_04Ano',
  R04_04Mes: 'R04_04Mes',
  R04_04NomeMes: 'R04_04NomeMes',
  R04_04QtdEmpresas: 'R04_04QtdEmpresas',
  R04_04QtdFinanceira: 'R04_04QtdFinanceira',
  R04_05Ano: 'R04_05Ano',
  R04_05Mes: 'R04_05Mes',
  R04_05NomeMes: 'R04_05NomeMes',
  R04_05QtdEmpresas: 'R04_05QtdEmpresas',
  R04_05QtdFinanceira: 'R04_05QtdFinanceira',
  R04_06Ano: 'R04_06Ano',
  R04_06Mes: 'R04_06Mes',
  R04_06NomeMes: 'R04_06NomeMes',
  R04_06QtdEmpresas: 'R04_06QtdEmpresas',
  R04_06QtdFinanceira: 'R04_06QtdFinanceira',
  R04_07Ano: 'R04_07Ano',
  R04_07Mes: 'R04_07Mes',
  R04_07NomeMes: 'R04_07NomeMes',
  R04_07QtdEmpresas: 'R04_07QtdEmpresas',
  R04_07QtdFinanceira: 'R04_07QtdFinanceira',
  R04_08Ano: 'R04_08Ano',
  R04_08Mes: 'R04_08Mes',
  R04_08NomeMes: 'R04_08NomeMes',
  R04_08QtdEmpresas: 'R04_08QtdEmpresas',
  R04_08QtdFinanceira: 'R04_08QtdFinanceira',
  R04_09Ano: 'R04_09Ano',
  R04_09Mes: 'R04_09Mes',
  R04_09NomeMes: 'R04_09NomeMes',
  R04_09QtdEmpresas: 'R04_09QtdEmpresas',
  R04_09QtdFinanceira: 'R04_09QtdFinanceira',
  R05_10Ano: 'R05_10Ano',
  R05_10Mes: 'R05_10Mes',
  R05_10NomeMes: 'R05_10NomeMes',
  R05_10QtdEmpresas: 'R05_10QtdEmpresas',
  R05_10QtdFinanceira: 'R05_10QtdFinanceira',
  R05_11Ano: 'R05_11Ano',
  R05_11Mes: 'R05_11Mes',
  R05_11NomeMes: 'R05_11NomeMes',
  R05_11QtdEmpresas: 'R05_11QtdEmpresas',
  R05_11QtdFinanceira: 'R05_11QtdFinanceira',
  R05_12Ano: 'R05_12Ano',
  R05_12Mes: 'R05_12Mes',
  R05_12NomeMes: 'R05_12NomeMes',
  R05_12QtdEmpresas: 'R05_12QtdEmpresas',
  R05_12QtdFinanceira: 'R05_12QtdFinanceira',
  R05_13Ano: 'R05_13Ano',
  R05_13Mes: 'R05_13Mes',
  R05_13NomeMes: 'R05_13NomeMes',
  R05_13QtdEmpresas: 'R05_13QtdEmpresas',
  R05_13QtdFinanceira: 'R05_13QtdFinanceira',
  R05_14Ano: 'R05_14Ano',
  R05_14Mes: 'R05_14Mes',
  R05_14NomeMes: 'R05_14NomeMes',
  R05_14QtdEmpresas: 'R05_14QtdEmpresas',
  R05_14QtdFinanceira: 'R05_14QtdFinanceira',
  R10_DataHora: 'R10_DataHora',
  R10_Fator: 'R10_Fator',
  R10_Probabilidade: 'R10_Probabilidade'
});

exports.Prisma.RelatoSegmento20_01_01_14ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  VinculoParticipante: 'VinculoParticipante',
  CodigoEmbratel: 'CodigoEmbratel',
  MunicipioEmbratel: 'MunicipioEmbratel',
  UfEmbratel: 'UfEmbratel',
  PercentualParticipacao: 'PercentualParticipacao',
  NomeParticipante: 'NomeParticipante',
  CGCParticipante: 'CGCParticipante'
});

exports.Prisma.RelatoSegmento20_89_00_00ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  CNPJ: 'CNPJ',
  UserId: 'UserId',
  DataHora: 'DataHora',
  Trans: 'Trans'
});

exports.Prisma.RelatoSegmento20_89_01_01ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  DesPer: 'DesPer',
  ValVencCli: 'ValVencCli',
  ValVencOut: 'ValVencOut',
  QtdVencFact: 'QtdVencFact'
});

exports.Prisma.RelatoSegmento20_89_01_02ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  DesPer: 'DesPer',
  ValAVencCli: 'ValAVencCli',
  ValAVencOut: 'ValAVencOut',
  QtdAVencFact: 'QtdAVencFact'
});

exports.Prisma.RelatoSegmento20_89_01_03ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  ValVencCli: 'ValVencCli',
  ValVencOut: 'ValVencOut',
  QtdVencFact: 'QtdVencFact',
  ValAVencCli: 'ValAVencCli',
  ValAVencOut: 'ValAVencOut',
  QtdAVencFact: 'QtdAVencFact',
  TotValAbr: 'TotValAbr'
});

exports.Prisma.RelatoSegmento20_89_02_01ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  QtdCliPont: 'QtdCliPont',
  QtdCli815: 'QtdCli815',
  QtdCli1630: 'QtdCli1630',
  QtdCli3160: 'QtdCli3160',
  QtdCliM60: 'QtdCliM60',
  QtdCliVist: 'QtdCliVist'
});

exports.Prisma.RelatoSegmento20_89_02_02ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  ValCliPont: 'ValCliPont',
  ValCli815: 'ValCli815',
  ValCli1630: 'ValCli1630',
  ValCli3160: 'ValCli3160',
  ValCliM60: 'ValCliM60',
  ValCliVist: 'ValCliVist'
});

exports.Prisma.RelatoSegmento20_89_02_03ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  VlmCliPont: 'VlmCliPont',
  VlmCli815: 'VlmCli815',
  VlmCli1630: 'VlmCli1630',
  VlmCli3160: 'VlmCli3160',
  VlmCliM60: 'VlmCliM60',
  VlmCliVist: 'VlmCliVist'
});

exports.Prisma.RelatoSegmento20_89_02_04ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  TotCliPont: 'TotCliPont',
  TotCli815: 'TotCli815',
  TotCli1630: 'TotCli1630',
  TotCli3160: 'TotCli3160',
  TotCliM60: 'TotCliM60',
  TotCliVist: 'TotCliVist'
});

exports.Prisma.RelatoSegmento20_89_02_05ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  QtdOutPont: 'QtdOutPont',
  QtdOut815: 'QtdOut815',
  QtdOut1630: 'QtdOut1630',
  QtdOut3160: 'QtdOut3160',
  QtdOutM60: 'QtdOutM60',
  QtdOutVist: 'QtdOutVist'
});

exports.Prisma.RelatoSegmento20_89_02_06ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  ValOutPont: 'ValOutPont',
  ValOut815: 'ValOut815',
  ValOut1630: 'ValOut1630',
  ValOut3160: 'ValOut3160',
  ValOutM60: 'ValOutM60',
  ValOutVist: 'ValOutVist'
});

exports.Prisma.RelatoSegmento20_89_02_07ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  VlmOutPont: 'VlmOutPont',
  VlmOut815: 'VlmOut815',
  VlmOut1630: 'VlmOut1630',
  VlmOut3160: 'VlmOut3160',
  VlmOutM60: 'VlmOutM60',
  VlmOutVist: 'VlmOutVist'
});

exports.Prisma.RelatoSegmento20_89_02_08ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  QtdFacPont: 'QtdFacPont',
  QtdFac815: 'QtdFac815',
  QtdFac1630: 'QtdFac1630',
  QtdFac3160: 'QtdFac3160',
  QtdFacM60: 'QtdFacM60',
  QtdFacVist: 'QtdFacVist'
});

exports.Prisma.RelatoSegmento20_89_02_09ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  TotOutPont: 'TotOutPont',
  TotOut815: 'TotOut815',
  TotOut1630: 'TotOut1630',
  TotOut3160: 'TotOut3160',
  TotOutM60: 'TotOutM60',
  TotOutCedVist: 'TotOutCedVist'
});

exports.Prisma.RelatoSegmento20_89_02_10ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  TotFacPont: 'TotFacPont',
  TotFac815: 'TotFac815',
  TotFac1630: 'TotFac1630',
  TotFac3160: 'TotFac3160',
  TotFacM60: 'TotFacM60',
  TotFacVist: 'TotFacVist'
});

exports.Prisma.RelatoSegmento20_89_02_11ScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  Ano1Prf: 'Ano1Prf',
  Mes1Prf: 'Mes1Prf',
  MesDesp: 'MesDesp',
  PercCliQtde: 'PercCliQtde',
  PercCliVal: 'PercCliVal',
  PercOutQtde: 'PercOutQtde',
  PercOutVal: 'PercOutVal',
  QtdOutFact: 'QtdOutFact'
});

exports.Prisma.RelatoSegmentoFatAutorScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Tipo: 'Tipo',
  Linha: 'Linha',
  DataHora: 'DataHora',
  FatorAutorizador: 'FatorAutorizador',
  CodigoCnae: 'CodigoCnae',
  Mensagem: 'Mensagem'
});

exports.Prisma.RelatoSegmentoLinhaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Linha: 'Linha',
  LinhaEditada: 'LinhaEditada',
  TipReg: 'TipReg',
  TipLinha: 'TipLinha',
  Atributo: 'Atributo',
  Conjunto: 'Conjunto',
  NomeBloco: 'NomeBloco'
});

exports.Prisma.RelatoSegmentoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Numero: 'Numero',
  Em: 'Em',
  CNPJ: 'CNPJ',
  RazaoSocial: 'RazaoSocial',
  tipoconsulta: 'tipoconsulta'
});

exports.Prisma.RiscoSacadoEstadoConfirmacaoTituloScalarFieldEnum = makeEnum({
  ID: 'ID',
  RiscoSacado_ID: 'RiscoSacado_ID',
  EstadoConfirmacaoTitulo_ID: 'EstadoConfirmacaoTitulo_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.RiscoSacadoModoDeCobrancaScalarFieldEnum = makeEnum({
  ID: 'ID',
  RiscoSacado_ID: 'RiscoSacado_ID',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.RiscoSacadoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Nome: 'Nome',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.RiscoSacadoTagScalarFieldEnum = makeEnum({
  ID: 'ID',
  RiscoSacado_ID: 'RiscoSacado_ID',
  Tag_ID: 'Tag_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.RocketScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  CnpjCpfAConsultar: 'CnpjCpfAConsultar',
  NomeProcesso: 'NomeProcesso',
  Ticket: 'Ticket',
  Hash: 'Hash',
  Status: 'Status',
  UrlCsj: 'UrlCsj',
  DtUltimaConsulta: 'DtUltimaConsulta',
  DtSolicitacao: 'DtSolicitacao'
});

exports.Prisma.SENHASLOGScalarFieldEnum = makeEnum({
  ID: 'ID',
  CODIGO: 'CODIGO',
  DATA: 'DATA',
  SUCESSO: 'SUCESSO',
  MSG: 'MSG'
});

exports.Prisma.SENHASNOVAScalarFieldEnum = makeEnum({
  ID: 'ID',
  CODIGO: 'CODIGO',
  SENHA: 'SENHA',
  DATA: 'DATA'
});

exports.Prisma.SENHASScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NOME: 'NOME',
  SENHA: 'SENHA',
  gerente: 'gerente',
  codgerente: 'codgerente',
  grupo: 'grupo',
  LogonSerasa: 'LogonSerasa',
  PasswordSerasa: 'PasswordSerasa',
  loginsmtp: 'loginsmtp',
  passwordsmtp: 'passwordsmtp',
  Ativo: 'Ativo',
  Gestor: 'Gestor',
  AlterarSenhaProximoLogon: 'AlterarSenhaProximoLogon',
  PrazoParaTrocarSenha: 'PrazoParaTrocarSenha'
});

exports.Prisma.SIG01ScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NOME: 'NOME',
  CONTABIL: 'CONTABIL',
  iscompet: 'iscompet',
  hiscontabil: 'hiscontabil',
  ispenden: 'ispenden',
  issistema: 'issistema',
  contabilCS: 'contabilCS',
  hiscontabilCS: 'hiscontabilCS',
  codigoCS: 'codigoCS',
  isresultado: 'isresultado',
  saldoant: 'saldoant',
  dtsaldoant: 'dtsaldoant',
  NomeCliente: 'NomeCliente',
  saldoantcontab: 'saldoantcontab',
  isproducao: 'isproducao',
  contabilds: 'contabilds',
  hiscontabilds: 'hiscontabilds',
  dt_atualizacao: 'dt_atualizacao',
  isdespesa: 'isdespesa',
  codigoReg: 'codigoReg',
  isregrdesagio: 'isregrdesagio',
  codigoFIDC: 'codigoFIDC',
  tipodespesa: 'tipodespesa',
  IsVariacaoPatrimonio: 'IsVariacaoPatrimonio',
  IsReceitaAApropriar: 'IsReceitaAApropriar',
  IsSeparaContabilidade: 'IsSeparaContabilidade',
  IsEnviaParaCobranca: 'IsEnviaParaCobranca',
  idWeb: 'idWeb',
  NaoPermitePropria: 'NaoPermitePropria',
  NaoPermiteCobrSimples: 'NaoPermiteCobrSimples',
  NaoPermiteFIDC: 'NaoPermiteFIDC',
  NaoPermiteDescontoCPropria: 'NaoPermiteDescontoCPropria',
  NaoPermiteFIDC2: 'NaoPermiteFIDC2'
});

exports.Prisma.SIG02ScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  BANCO: 'BANCO',
  CLIFOR: 'CLIFOR',
  VALOR_: 'VALOR_',
  DATA_: 'DATA_',
  HIST_: 'HIST_',
  CONTROL: 'CONTROL',
  DIASBLOQ: 'DIASBLOQ',
  sacado: 'sacado',
  dt_Ocorr: 'dt_Ocorr',
  carteira: 'carteira',
  filial: 'filial',
  manual1: 'manual1',
  IdFluxo: 'IdFluxo',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  CTRL_ID: 'CTRL_ID',
  HistoricoContabil: 'HistoricoContabil',
  EventoLancamento: 'EventoLancamento'
});

exports.Prisma.SIG03ScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  BANCO: 'BANCO',
  CLIFOR: 'CLIFOR',
  VALOR_: 'VALOR_',
  DATA_: 'DATA_',
  HIST_: 'HIST_',
  CONTROL: 'CONTROL',
  DIASBLOQ: 'DIASBLOQ',
  sacado: 'sacado',
  dt_Ocorr: 'dt_Ocorr',
  carteira: 'carteira',
  filial: 'filial',
  manual1: 'manual1',
  IdFluxo: 'IdFluxo',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  bcodescontado: 'bcodescontado',
  CTRL_ID: 'CTRL_ID',
  HistoricoContabil: 'HistoricoContabil',
  EventoLancamento: 'EventoLancamento'
});

exports.Prisma.SIG04ScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  BANCO: 'BANCO',
  CLIFOR: 'CLIFOR',
  VALOR_: 'VALOR_',
  DATA_: 'DATA_',
  HIST_: 'HIST_',
  CONTROL: 'CONTROL',
  DIASBLOQ: 'DIASBLOQ',
  sacado: 'sacado',
  dt_Ocorr: 'dt_Ocorr',
  carteira: 'carteira',
  filial: 'filial',
  manual1: 'manual1',
  IdFluxo: 'IdFluxo',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  bcodescontado: 'bcodescontado',
  CTRL_ID: 'CTRL_ID',
  HistoricoContabil: 'HistoricoContabil',
  EventoLancamento: 'EventoLancamento'
});

exports.Prisma.SIGBDCHQScalarFieldEnum = makeEnum({
  ID: 'ID',
  BORDERO: 'BORDERO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  CMC7: 'CMC7',
  BANCO: 'BANCO',
  AGENCIA: 'AGENCIA',
  CONTA: 'CONTA',
  CHEQUE: 'CHEQUE',
  COMPL: 'COMPL',
  forma: 'forma',
  ctrl_id: 'ctrl_id',
  favorecido: 'favorecido',
  tipooperacao: 'tipooperacao'
});

exports.Prisma.SIGBDPAGScalarFieldEnum = makeEnum({
  BORDERO: 'BORDERO',
  sequencia: 'sequencia',
  Banco: 'Banco',
  VALOR: 'VALOR',
  TipoPgto: 'TipoPgto',
  clifor: 'clifor',
  PgBANCO: 'PgBANCO',
  PgAGENCIA: 'PgAGENCIA',
  PgCONTACORRENTE: 'PgCONTACORRENTE',
  COMPLEMENTO: 'COMPLEMENTO',
  tipooperacao: 'tipooperacao',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.SIGBDPAG_FIDC2ScalarFieldEnum = makeEnum({
  SEQUENCIAL: 'SEQUENCIAL',
  BORDERO: 'BORDERO',
  CODBANCO: 'CODBANCO',
  CODFAVOR: 'CODFAVOR',
  VALOR: 'VALOR',
  TIPOOPERACAO: 'TIPOOPERACAO',
  COMPLEMENTO: 'COMPLEMENTO',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.SIGBDPAG_FIDCScalarFieldEnum = makeEnum({
  SEQUENCIAL: 'SEQUENCIAL',
  BORDERO: 'BORDERO',
  CODBANCO: 'CODBANCO',
  CODFAVOR: 'CODFAVOR',
  VALOR: 'VALOR',
  TIPOOPERACAO: 'TIPOOPERACAO',
  COMPLEMENTO: 'COMPLEMENTO',
  EhInstituicaoPagadora: 'EhInstituicaoPagadora'
});

exports.Prisma.SIGBORSCPScalarFieldEnum = makeEnum({
  ID: 'ID',
  BORDERO: 'BORDERO',
  DATA: 'DATA',
  CLIFOR: 'CLIFOR',
  QTITULOS: 'QTITULOS',
  TITULOS: 'TITULOS',
  PRAZO: 'PRAZO',
  FATOR: 'FATOR',
  LIBERADO: 'LIBERADO',
  OPERADOR: 'OPERADOR',
  TXSERVICO: 'TXSERVICO',
  SERVICO: 'SERVICO',
  CONTROL: 'CONTROL',
  VTARIFA: 'VTARIFA',
  TAR_TITULO: 'TAR_TITULO',
  TAR_EXPOR: 'TAR_EXPOR',
  FLOTMEDIO: 'FLOTMEDIO',
  CPMF: 'CPMF',
  TXCPMF: 'TXCPMF',
  OBS: 'OBS',
  OWNER: 'OWNER',
  ADITIVO: 'ADITIVO',
  ADITIVOCLI: 'ADITIVOCLI',
  DTLIBERACAO: 'DTLIBERACAO',
  FILIAL: 'FILIAL',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  txiss: 'txiss',
  iss: 'iss',
  notafiscal: 'notafiscal',
  RetImpostos: 'RetImpostos',
  RetIRRFavtr: 'RetIRRFavtr',
  RetCSLLavtr: 'RetCSLLavtr',
  RetCOFINSavtr: 'RetCOFINSavtr',
  RetPISavtr: 'RetPISavtr',
  PagarRetencoes: 'PagarRetencoes',
  BPagamentoRetencoes: 'BPagamentoRetencoes',
  BPagamentoRetencoesTipo: 'BPagamentoRetencoesTipo',
  RetCSLLav: 'RetCSLLav',
  RetCSLLdes: 'RetCSLLdes',
  RetCOFINSav: 'RetCOFINSav',
  RetCOFINSdes: 'RetCOFINSdes',
  RetPISav: 'RetPISav',
  RetPISdes: 'RetPISdes',
  recdespesastr: 'recdespesastr',
  dt_atualizacao: 'dt_atualizacao',
  RetemISS: 'RetemISS',
  SerieNF: 'SerieNF',
  baseretirrf: 'baseretirrf'
});

exports.Prisma.SIGBORSScalarFieldEnum = makeEnum({
  ID: 'ID',
  BORDERO: 'BORDERO',
  DATA: 'DATA',
  CLIFOR: 'CLIFOR',
  QTITULOS: 'QTITULOS',
  TITULOS: 'TITULOS',
  CUSTO: 'CUSTO',
  COTACAO: 'COTACAO',
  MOEDA: 'MOEDA',
  PRAZO: 'PRAZO',
  TAXA_EF: 'TAXA_EF',
  FATOR: 'FATOR',
  TAXA_PE: 'TAXA_PE',
  TXEFMIN: 'TXEFMIN',
  FLOT: 'FLOT',
  LIBERADO: 'LIBERADO',
  CHEQUE: 'CHEQUE',
  AGENCIA: 'AGENCIA',
  VCHEQUE: 'VCHEQUE',
  OPERADOR: 'OPERADOR',
  CALCULO: 'CALCULO',
  TXSERVICO: 'TXSERVICO',
  TXISS: 'TXISS',
  SERVICO: 'SERVICO',
  ISS: 'ISS',
  CONTROL: 'CONTROL',
  VTARIFA: 'VTARIFA',
  TAR_TITULO: 'TAR_TITULO',
  FLOTMEDIO: 'FLOTMEDIO',
  IOF: 'IOF',
  IPMF: 'IPMF',
  TXIOF: 'TXIOF',
  TXIPMF: 'TXIPMF',
  TAR_EXPOR: 'TAR_EXPOR',
  LIQUIDO: 'LIQUIDO',
  PJURIDICA: 'PJURIDICA',
  ARREDOND: 'ARREDOND',
  ALTERADO: 'ALTERADO',
  CAIXA: 'CAIXA',
  OBS: 'OBS',
  owner: 'owner',
  TAR_CHEQUE: 'TAR_CHEQUE',
  VTARIFACHEQUE: 'VTARIFACHEQUE',
  TAXA_REAL: 'TAXA_REAL',
  nrecompra: 'nrecompra',
  vrecompra: 'vrecompra',
  comissao: 'comissao',
  dtliberacao: 'dtliberacao',
  aditivo: 'aditivo',
  aditivocli: 'aditivocli',
  grcliente: 'grcliente',
  grfactoring: 'grfactoring',
  fatoraa: 'fatoraa',
  INDICANTE: 'INDICANTE',
  loteqtd: 'loteqtd',
  lotesoma: 'lotesoma',
  dtnp: 'dtnp',
  ownernp: 'ownernp',
  dtaditivo: 'dtaditivo',
  owneradt: 'owneradt',
  assinaturanp: 'assinaturanp',
  liberacaonp: 'liberacaonp',
  ownerliberacaonp: 'ownerliberacaonp',
  reter: 'reter',
  assinaturaadt: 'assinaturaadt',
  ownerassinaturaadt: 'ownerassinaturaadt',
  impressaonp: 'impressaonp',
  IndiCom: 'IndiCom',
  GteGeral: 'GteGeral',
  GeralCom: 'GeralCom',
  Superintendente: 'Superintendente',
  SuperCom: 'SuperCom',
  AVCFE: 'AVCFE',
  AVImpostos: 'AVImpostos',
  avcefc: 'avcefc',
  avirr: 'avirr',
  avspreadam: 'avspreadam',
  avspreadaa: 'avspreadaa',
  avvplr: 'avvplr',
  avvplus: 'avvplus',
  avrporus: 'avrporus',
  issdestacado: 'issdestacado',
  avirrcomfloat: 'avirrcomfloat',
  vctoface: 'vctoface',
  prazod0: 'prazod0',
  retornonp: 'retornonp',
  ownerretornonp: 'ownerretornonp',
  ownerassinaturanp: 'ownerassinaturanp',
  notafiscal: 'notafiscal',
  qtitulosCS: 'qtitulosCS',
  titulosCS: 'titulosCS',
  servicoCS: 'servicoCS',
  VTarifaCS: 'VTarifaCS',
  VTarifaChequeCS: 'VTarifaChequeCS',
  filial: 'filial',
  LoteDp: 'LoteDp',
  ISSTr: 'ISSTr',
  txServicoTr: 'txServicoTr',
  RetImpostos: 'RetImpostos',
  RetIRRFav: 'RetIRRFav',
  RetIRRFdes: 'RetIRRFdes',
  RetCSLLav: 'RetCSLLav',
  RetCSLLdes: 'RetCSLLdes',
  RetCOFINSav: 'RetCOFINSav',
  RetCOFINSdes: 'RetCOFINSdes',
  RetPISav: 'RetPISav',
  RetPISdes: 'RetPISdes',
  RetIRRFavtr: 'RetIRRFavtr',
  RetCSLLavtr: 'RetCSLLavtr',
  RetCOFINSavtr: 'RetCOFINSavtr',
  RetPISavtr: 'RetPISavtr',
  PagarRetencoes: 'PagarRetencoes',
  FatorSImpostos: 'FatorSImpostos',
  TxIR: 'TxIR',
  TxCSLL: 'TxCSLL',
  TxCOFINS: 'TxCOFINS',
  TxPIS: 'TxPIS',
  gerenteflot: 'gerenteflot',
  BPagamentoRetencoes: 'BPagamentoRetencoes',
  BPagamentoRetencoesTipo: 'BPagamentoRetencoesTipo',
  FatorVA: 'FatorVA',
  ControlPagImediato: 'ControlPagImediato',
  cobtarifa: 'cobtarifa',
  cobtarifaCS: 'cobtarifaCS',
  EstadoBordero: 'EstadoBordero',
  AtualmenteCom: 'AtualmenteCom',
  calculoFIDC: 'calculoFIDC',
  cobtarifaFIDC: 'cobtarifaFIDC',
  custoFIDC: 'custoFIDC',
  fatorFIDC: 'fatorFIDC',
  fatoraaFIDC: 'fatoraaFIDC',
  fatorvaFIDC: 'fatorvaFIDC',
  flotmedioFIDC: 'flotmedioFIDC',
  liquidoFIDC: 'liquidoFIDC',
  prazoFIDC: 'prazoFIDC',
  prazod0FIDC: 'prazod0FIDC',
  qtitulosFIDC: 'qtitulosFIDC',
  reterFIDC: 'reterFIDC',
  servicoFIDC: 'servicoFIDC',
  tar_chequeFIDC: 'tar_chequeFIDC',
  tar_exporFIDC: 'tar_exporFIDC',
  tar_tituloFIDC: 'tar_tituloFIDC',
  taxa_efFIDC: 'taxa_efFIDC',
  taxa_peFIDC: 'taxa_peFIDC',
  taxa_realFIDC: 'taxa_realFIDC',
  titulosFIDC: 'titulosFIDC',
  txefminFIDC: 'txefminFIDC',
  txservicoFIDC: 'txservicoFIDC',
  vchequeFIDC: 'vchequeFIDC',
  vctofaceFIDC: 'vctofaceFIDC',
  vtarifachequeFIDC: 'vtarifachequeFIDC',
  vtarifaFIDC: 'vtarifaFIDC',
  ValorReservado: 'ValorReservado',
  datarecalculo: 'datarecalculo',
  dtaditivoTr: 'dtaditivoTr',
  owneradtTr: 'owneradtTr',
  assinaturaadtTr: 'assinaturaadtTr',
  ownerassinaturaadtTr: 'ownerassinaturaadtTr',
  dtnpFIDC: 'dtnpFIDC',
  ownernpFIDC: 'ownernpFIDC',
  dtaditivoFIDC: 'dtaditivoFIDC',
  owneradtFIDC: 'owneradtFIDC',
  assinaturanpFIDC: 'assinaturanpFIDC',
  liberacaonpFIDC: 'liberacaonpFIDC',
  ownerliberacaonpFIDC: 'ownerliberacaonpFIDC',
  assinaturaadtFIDC: 'assinaturaadtFIDC',
  ownerassinaturaadtFIDC: 'ownerassinaturaadtFIDC',
  impressaonpFIDC: 'impressaonpFIDC',
  retornonpFIDC: 'retornonpFIDC',
  ownerretornonpFIDC: 'ownerretornonpFIDC',
  ownerassinaturanpFIDC: 'ownerassinaturanpFIDC',
  grclienteTr: 'grclienteTr',
  grfactoringTr: 'grfactoringTr',
  grclienteFIDC: 'grclienteFIDC',
  grfactoringFIDC: 'grfactoringFIDC',
  nrecomprafidc: 'nrecomprafidc',
  vrecomprafidc: 'vrecomprafidc',
  CPMFTr: 'CPMFTr',
  recdespesastr: 'recdespesastr',
  observacao: 'observacao',
  fatorajustado: 'fatorajustado',
  custodinheiro: 'custodinheiro',
  remessapagamento: 'remessapagamento',
  lote: 'lote',
  anolote: 'anolote',
  FormulaUtilizada: 'FormulaUtilizada',
  dt_atualizacao: 'dt_atualizacao',
  vregrdesagio: 'vregrdesagio',
  AVCEFCFIDC: 'AVCEFCFIDC',
  AVIRRFIDC: 'AVIRRFIDC',
  AVSpreadAMFIDC: 'AVSpreadAMFIDC',
  AVSpreadAAFIDC: 'AVSpreadAAFIDC',
  AVVPLRFIDC: 'AVVPLRFIDC',
  AVVPLUSFIDC: 'AVVPLUSFIDC',
  AVIRRComFloatFIDC: 'AVIRRComFloatFIDC',
  AVCFEFIDC: 'AVCFEFIDC',
  AVImpostosFIDC: 'AVImpostosFIDC',
  classificacao: 'classificacao',
  NomeRepasse: 'NomeRepasse',
  ValorRepasse: 'ValorRepasse',
  FavorecidoRepasse: 'FavorecidoRepasse',
  RetemISS: 'RetemISS',
  calculoFIDC2: 'calculoFIDC2',
  cobtarifaFIDC2: 'cobtarifaFIDC2',
  custoFIDC2: 'custoFIDC2',
  fatorFIDC2: 'fatorFIDC2',
  fatoraaFIDC2: 'fatoraaFIDC2',
  fatorvaFIDC2: 'fatorvaFIDC2',
  flotmedioFIDC2: 'flotmedioFIDC2',
  liquidoFIDC2: 'liquidoFIDC2',
  prazoFIDC2: 'prazoFIDC2',
  prazod0FIDC2: 'prazod0FIDC2',
  qtitulosFIDC2: 'qtitulosFIDC2',
  reterFIDC2: 'reterFIDC2',
  servicoFIDC2: 'servicoFIDC2',
  tar_chequeFIDC2: 'tar_chequeFIDC2',
  tar_exporFIDC2: 'tar_exporFIDC2',
  tar_tituloFIDC2: 'tar_tituloFIDC2',
  taxa_efFIDC2: 'taxa_efFIDC2',
  taxa_peFIDC2: 'taxa_peFIDC2',
  taxa_realFIDC2: 'taxa_realFIDC2',
  titulosFIDC2: 'titulosFIDC2',
  txefminFIDC2: 'txefminFIDC2',
  txservicoFIDC2: 'txservicoFIDC2',
  vchequeFIDC2: 'vchequeFIDC2',
  vctofaceFIDC2: 'vctofaceFIDC2',
  vtarifachequeFIDC2: 'vtarifachequeFIDC2',
  vtarifaFIDC2: 'vtarifaFIDC2',
  dtnpFIDC2: 'dtnpFIDC2',
  ownernpFIDC2: 'ownernpFIDC2',
  dtaditivoFIDC2: 'dtaditivoFIDC2',
  owneradtFIDC2: 'owneradtFIDC2',
  assinaturanpFIDC2: 'assinaturanpFIDC2',
  liberacaonpFIDC2: 'liberacaonpFIDC2',
  ownerliberacaonpFIDC2: 'ownerliberacaonpFIDC2',
  assinaturaadtFIDC2: 'assinaturaadtFIDC2',
  ownerassinaturaadtFIDC2: 'ownerassinaturaadtFIDC2',
  impressaonpFIDC2: 'impressaonpFIDC2',
  retornonpFIDC2: 'retornonpFIDC2',
  ownerretornonpFIDC2: 'ownerretornonpFIDC2',
  ownerassinaturanpFIDC2: 'ownerassinaturanpFIDC2',
  grclienteFIDC2: 'grclienteFIDC2',
  grfactoringFIDC2: 'grfactoringFIDC2',
  nrecomprafidc2: 'nrecomprafidc2',
  vrecomprafidc2: 'vrecomprafidc2',
  AVCEFCFIDC2: 'AVCEFCFIDC2',
  AVIRRFIDC2: 'AVIRRFIDC2',
  AVSpreadAMFIDC2: 'AVSpreadAMFIDC2',
  AVSpreadAAFIDC2: 'AVSpreadAAFIDC2',
  AVVPLRFIDC2: 'AVVPLRFIDC2',
  AVVPLUSFIDC2: 'AVVPLUSFIDC2',
  AVIRRComFloatFIDC2: 'AVIRRComFloatFIDC2',
  AVCFEFIDC2: 'AVCFEFIDC2',
  AVImpostosFIDC2: 'AVImpostosFIDC2',
  ContratoSequencia: 'ContratoSequencia',
  ContratoFIDCSequencia: 'ContratoFIDCSequencia',
  ContratoFIDC2Sequencia: 'ContratoFIDC2Sequencia',
  ContratotSequencia: 'ContratotSequencia',
  ContratoNumero: 'ContratoNumero',
  ContratoFIDCNumero: 'ContratoFIDCNumero',
  ContratoFIDC2Numero: 'ContratoFIDC2Numero',
  ContratotNumero: 'ContratotNumero',
  ContratoAditivo: 'ContratoAditivo',
  ContratoFIDCAditivo: 'ContratoFIDCAditivo',
  ContratoFIDC2Aditivo: 'ContratoFIDC2Aditivo',
  ContratotAditivo: 'ContratotAditivo',
  Personalizado0: 'Personalizado0',
  Personalizado1: 'Personalizado1',
  Personalizado2: 'Personalizado2',
  Personalizado3: 'Personalizado3',
  Personalizado4: 'Personalizado4',
  Personalizado5: 'Personalizado5',
  Personalizado6: 'Personalizado6',
  Personalizado7: 'Personalizado7',
  Personalizado8: 'Personalizado8',
  Personalizado9: 'Personalizado9',
  IndiceAtualizacao: 'IndiceAtualizacao',
  PercentualAtualizacao: 'PercentualAtualizacao',
  CotacaoAtualizacao: 'CotacaoAtualizacao',
  custosecurit: 'custosecurit',
  SerieNF: 'SerieNF',
  dtbordero: 'dtbordero',
  ownerbordero: 'ownerbordero',
  assinaturabordero: 'assinaturabordero',
  ownerassinaturabordero: 'ownerassinaturabordero',
  dtborderoTr: 'dtborderoTr',
  ownerborderoTr: 'ownerborderoTr',
  assinaturaborderoTr: 'assinaturaborderoTr',
  ownerassinaturaborderoTr: 'ownerassinaturaborderoTr',
  dtborderoFIDC: 'dtborderoFIDC',
  ownerborderoFIDC: 'ownerborderoFIDC',
  assinaturaborderoFIDC: 'assinaturaborderoFIDC',
  ownerassinaturaborderoFIDC: 'ownerassinaturaborderoFIDC',
  dtborderoFIDC2: 'dtborderoFIDC2',
  ownerborderoFIDC2: 'ownerborderoFIDC2',
  assinaturaborderoFIDC2: 'assinaturaborderoFIDC2',
  ownerassinaturaborderoFIDC2: 'ownerassinaturaborderoFIDC2',
  custodesagiofidc: 'custodesagiofidc',
  custodesagiofidc2: 'custodesagiofidc2',
  vregrdesagiofidc: 'vregrdesagiofidc',
  vregrdesagiofidc2: 'vregrdesagiofidc2',
  NaoCobrarIOF: 'NaoCobrarIOF',
  baseretirrf: 'baseretirrf',
  ValorReservadoFIDC: 'ValorReservadoFIDC',
  ValorReservadoFIDC2: 'ValorReservadoFIDC2',
  taxa_realperiodo: 'taxa_realperiodo',
  taxa_realperiodofidc: 'taxa_realperiodofidc',
  taxa_realperiodofidc2: 'taxa_realperiodofidc2',
  vrecompratitulos: 'vrecompratitulos',
  vrecompraoutros: 'vrecompraoutros',
  vrecompratitulosfidc: 'vrecompratitulosfidc',
  vrecompraoutrosfidc: 'vrecompraoutrosfidc',
  vrecompratitulosfidc2: 'vrecompratitulosfidc2',
  vrecompraoutrosfidc2: 'vrecompraoutrosfidc2',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  BacenNatOp_IDFIDC: 'BacenNatOp_IDFIDC',
  BacenNatOp_IDFIDC2: 'BacenNatOp_IDFIDC2',
  BacenModOp_IDFIDC: 'BacenModOp_IDFIDC',
  BacenModOp_IDFIDC2: 'BacenModOp_IDFIDC2',
  BacenCaracEsp_IDFIDC: 'BacenCaracEsp_IDFIDC',
  BacenCaracEsp_IDFIDC2: 'BacenCaracEsp_IDFIDC2',
  TxIOFAdicional: 'TxIOFAdicional',
  IOFAdicional: 'IOFAdicional',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  ApresentacaoDocumentoFIDC: 'ApresentacaoDocumentoFIDC',
  ApresentacaoDocumentoFIDC2: 'ApresentacaoDocumentoFIDC2',
  DataCriacao: 'DataCriacao',
  DataConclusao: 'DataConclusao',
  FatorMinimo: 'FatorMinimo',
  FatorMinimoFIDC: 'FatorMinimoFIDC',
  FatorMinimoFIDC2: 'FatorMinimoFIDC2',
  vrecompratitulos_: 'vrecompratitulos_',
  vrecompraoutros_: 'vrecompraoutros_',
  vrecompratitulosfidc_: 'vrecompratitulosfidc_',
  vrecompraoutrosfidc_: 'vrecompraoutrosfidc_',
  vrecompratitulosfidc2_: 'vrecompratitulosfidc2_',
  vrecompraoutrosfidc2_: 'vrecompraoutrosfidc2_',
  vrecomprafator: 'vrecomprafator',
  vrecomprafatorfidc: 'vrecomprafatorfidc',
  vrecomprafatorfidc2: 'vrecomprafatorfidc2',
  vrecomprafatoroutros: 'vrecomprafatoroutros',
  vrecomprafatoroutrosfidc: 'vrecomprafatoroutrosfidc',
  vrecomprafatoroutrosfidc2: 'vrecomprafatoroutrosfidc2',
  vrecomprafatortitulos: 'vrecomprafatortitulos',
  vrecomprafatortitulosfidc: 'vrecomprafatortitulosfidc',
  vrecomprafatortitulosfidc2: 'vrecomprafatortitulosfidc2',
  UUID: 'UUID',
  RegistradoFinanfor: 'RegistradoFinanfor',
  OwnerLiberacao: 'OwnerLiberacao',
  SelAditivo: 'SelAditivo',
  SelAditivoTr: 'SelAditivoTr',
  SelAditivoFIDC: 'SelAditivoFIDC',
  SelAditivoFIDC2: 'SelAditivoFIDC2',
  SelNP: 'SelNP',
  SelNPFIDC: 'SelNPFIDC',
  SelNPFIDC2: 'SelNPFIDC2',
  SelBordero: 'SelBordero',
  SelBorderoTr: 'SelBorderoTr',
  SelBorderoFIDC: 'SelBorderoFIDC',
  SelBorderoFIDC2: 'SelBorderoFIDC2',
  TipoOperacao: 'TipoOperacao',
  CustoCS: 'CustoCS',
  CustoDesagioCS: 'CustoDesagioCS',
  PrazoCS: 'PrazoCS',
  FlotMedioCS: 'FlotMedioCS',
  VctoFaceCS: 'VctoFaceCS',
  PrazoD0CS: 'PrazoD0CS',
  IdAnaliseBordero: 'IdAnaliseBordero',
  BorderoAlerta: 'BorderoAlerta',
  BorderoBloqueio: 'BorderoBloqueio',
  AnaliseBorderoCedenteId: 'AnaliseBorderoCedenteId',
  CedenteAlerta: 'CedenteAlerta',
  CedenteBloqueio: 'CedenteBloqueio',
  AnaliseBordero: 'AnaliseBordero',
  DataSubsequenteDecendio: 'DataSubsequenteDecendio',
  NumeroBorderoWEB: 'NumeroBorderoWEB',
  idborderoweb: 'idborderoweb',
  AgenteLiquidacaoFIDC: 'AgenteLiquidacaoFIDC',
  borderoWebRecalculado: 'borderoWebRecalculado'
});

exports.Prisma.SIGCADScalarFieldEnum = makeEnum({
  ID: 'ID',
  CODIGO: 'CODIGO',
  NOME: 'NOME',
  LOGRADOURO: 'LOGRADOURO',
  ENDER: 'ENDER',
  NUMERO: 'NUMERO',
  COMPL: 'COMPL',
  BAIRRO: 'BAIRRO',
  CIDADE: 'CIDADE',
  ESTADO: 'ESTADO',
  CEP: 'CEP',
  FONE: 'FONE',
  FAX: 'FAX',
  RAMO: 'RAMO',
  CONTATO: 'CONTATO',
  TIPO: 'TIPO',
  CGC: 'CGC',
  IE: 'IE',
  DATA: 'DATA',
  REGISTRO: 'REGISTRO',
  LIMITE: 'LIMITE',
  REFER: 'REFER',
  ANIV: 'ANIV',
  CONTMAE: 'CONTMAE',
  CONTABIL: 'CONTABIL',
  RAZAO: 'RAZAO',
  ENDENTR: 'ENDENTR',
  ENDCOBR: 'ENDCOBR',
  VENDEDOR: 'VENDEDOR',
  CEPCOBR: 'CEPCOBR',
  CIDACOBR: 'CIDACOBR',
  ESTACOBR: 'ESTACOBR',
  CELULAR: 'CELULAR',
  EMAIL: 'EMAIL',
  DEBITO: 'DEBITO',
  FAVORECIDO: 'FAVORECIDO',
  DEPOSITAR: 'DEPOSITAR',
  TIPOCONT: 'TIPOCONT',
  CONTROL: 'CONTROL',
  BLOQUEIO: 'BLOQUEIO',
  BLOQUEIOINFO: 'BLOQUEIOINFO',
  USUARIO: 'USUARIO',
  FatorCompra: 'FatorCompra',
  MicroEmpresa: 'MicroEmpresa',
  hiscontabil: 'hiscontabil',
  categoria: 'categoria',
  rapido: 'rapido',
  TIPOCONTATO: 'TIPOCONTATO',
  HOMEPAGE: 'HOMEPAGE',
  bacen: 'bacen',
  ramal: 'ramal',
  contabilCS: 'contabilCS',
  hiscontabilCS: 'hiscontabilCS',
  filial: 'filial',
  bairrocobr: 'bairrocobr',
  senha: 'senha',
  IsentoRetencoes: 'IsentoRetencoes',
  fatorfidc: 'fatorfidc',
  IsentoIOF: 'IsentoIOF',
  contabilds: 'contabilds',
  hiscontabilds: 'hiscontabilds',
  dt_atualizacao: 'dt_atualizacao',
  tipopessoa: 'tipopessoa',
  raizcnpj: 'raizcnpj',
  LIMITEFIDC: 'LIMITEFIDC',
  EquifaxAlerta: 'EquifaxAlerta',
  inicioEquifaxAlerta: 'inicioEquifaxAlerta',
  terminoEquifaxAlerta: 'terminoEquifaxAlerta',
  codsiaficidade: 'codsiaficidade',
  RetemISS: 'RetemISS',
  fatorfidc2: 'fatorfidc2',
  LIMITEFIDC2: 'LIMITEFIDC2',
  Personalizado0: 'Personalizado0',
  Personalizado1: 'Personalizado1',
  Personalizado2: 'Personalizado2',
  Personalizado3: 'Personalizado3',
  Personalizado4: 'Personalizado4',
  Personalizado5: 'Personalizado5',
  Personalizado6: 'Personalizado6',
  Personalizado7: 'Personalizado7',
  Personalizado8: 'Personalizado8',
  Personalizado9: 'Personalizado9',
  DDA: 'DDA',
  codibgecidade: 'codibgecidade',
  DataLimiteCredito: 'DataLimiteCredito',
  DataLimiteCreditoFIDC: 'DataLimiteCreditoFIDC',
  bloqueiodata: 'bloqueiodata',
  bloqueiousuario: 'bloqueiousuario',
  bloqueiocedente: 'bloqueiocedente',
  bloqueiocedenteinfo: 'bloqueiocedenteinfo',
  bloqueiocedentedata: 'bloqueiocedentedata',
  bloqueiocedenteusuario: 'bloqueiocedenteusuario',
  bloqueiosacado: 'bloqueiosacado',
  bloqueiosacadoinfo: 'bloqueiosacadoinfo',
  bloqueiosacadodata: 'bloqueiosacadodata',
  bloqueiosacadousuario: 'bloqueiosacadousuario',
  ObsPropostaOperacao: 'ObsPropostaOperacao',
  PropositoNegocio: 'PropositoNegocio',
  OrgaoPublico: 'OrgaoPublico',
  DataLimiteCreditoFIDC2: 'DataLimiteCreditoFIDC2',
  Imagem: 'Imagem',
  Documento: 'Documento',
  LimiteConfirmacao: 'LimiteConfirmacao',
  PrazoConfirmacao: 'PrazoConfirmacao',
  LIMITETITULOSNAOPERFORMADOS: 'LIMITETITULOSNAOPERFORMADOS',
  LimiteRiscoCedente: 'LimiteRiscoCedente',
  LimiteNotaPromissoria: 'LimiteNotaPromissoria',
  ValidadeNotaPromissoria: 'ValidadeNotaPromissoria',
  BloqueioLiberadoAte: 'BloqueioLiberadoAte',
  BloqueioCedenteLiberadoAte: 'BloqueioCedenteLiberadoAte',
  BloqueioSacadoLiberadoAte: 'BloqueioSacadoLiberadoAte',
  LimiteCreditoSolicitado: 'LimiteCreditoSolicitado',
  idWeb: 'idWeb'
});

exports.Prisma.SIGCREScalarFieldEnum = makeEnum({
  ID: 'ID',
  CODIGO: 'CODIGO',
  ULTINFO: 'ULTINFO',
  REGISTRO: 'REGISTRO',
  FUNDACAO: 'FUNDACAO',
  ULTFAL: 'ULTFAL',
  ULTCH: 'ULTCH',
  OBS: 'OBS',
  AVISTA: 'AVISTA',
  PONTUAIS: 'PONTUAIS',
  ATRASO: 'ATRASO',
  MATRASO: 'MATRASO',
  PROTESTOS: 'PROTESTOS',
  PFALENCIA: 'PFALENCIA',
  CHEQUES: 'CHEQUES',
  CONTROL: 'CONTROL',
  CrvClassificacao: 'CrvClassificacao',
  SeMonitoriEstado: 'SeMonitoriEstado',
  SeMonitoriValidade: 'SeMonitoriValidade',
  valorprotestos: 'valorprotestos',
  ultpro: 'ultpro',
  DtObs: 'DtObs',
  OwnerObs: 'OwnerObs',
  SeMonitoriMensagem: 'SeMonitoriMensagem'
});

exports.Prisma.SIGDESScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  VALORFIXO: 'VALORFIXO',
  MOEDA: 'MOEDA',
  TIPO: 'TIPO',
  BANCO: 'BANCO',
  DTPGTO: 'DTPGTO',
  VLPGTO: 'VLPGTO',
  DIGITACAO: 'DIGITACAO',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  VALOR_: 'VALOR_',
  VCTO_: 'VCTO_',
  HIST_: 'HIST_',
  PORTADOR: 'PORTADOR',
  DTPORTADOR: 'DTPORTADOR',
  BORD_PORT: 'BORD_PORT',
  CTA_PORT: 'CTA_PORT',
  CAIXA: 'CAIXA',
  CCUSTO: 'CCUSTO',
  CART_PORT: 'CART_PORT',
  CONTROL: 'CONTROL',
  CONTROLBX: 'CONTROLBX',
  CTRL_ID: 'CTRL_ID',
  CODHIS: 'CODHIS',
  ESTADO: 'ESTADO',
  recompra: 'recompra',
  float_port: 'float_port',
  est_port: 'est_port',
  numero_port: 'numero_port',
  aceite: 'aceite',
  novadata: 'novadata',
  recibo: 'recibo',
  sigfls: 'sigfls',
  conferido: 'conferido',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  grupocontabil: 'grupocontabil',
  processocontabil: 'processocontabil',
  direta: 'direta',
  cobrpgto: 'cobrpgto',
  cobrdcto: 'cobrdcto',
  cobrresponsavel: 'cobrresponsavel',
  cobrowner: 'cobrowner',
  cobrobs: 'cobrobs',
  tarifacobr: 'tarifacobr',
  tarifaabt: 'tarifaabt',
  formapgto: 'formapgto',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  dt_Ocorr: 'dt_Ocorr',
  Est_Port_Old: 'Est_Port_Old',
  CODCARTEIRA: 'CODCARTEIRA',
  cobrdtpgto: 'cobrdtpgto',
  endossadopor: 'endossadopor',
  insercao: 'insercao',
  manual1: 'manual1',
  sigflscp: 'sigflscp',
  filial: 'filial',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  lote: 'lote',
  anolote: 'anolote',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  controleparticipante: 'controleparticipante',
  dtbaixa: 'dtbaixa',
  PORTADOR_OLD: 'PORTADOR_OLD',
  HistoricoContabil: 'HistoricoContabil',
  originadode: 'originadode',
  recuperacaodespesas: 'recuperacaodespesas',
  termsecurit: 'termsecurit',
  termsecuritanexo: 'termsecuritanexo',
  DtCompensacaoContabil: 'DtCompensacaoContabil',
  DtCompensacaoOcorrencia: 'DtCompensacaoOcorrencia',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  tarifabaixacobranca: 'tarifabaixacobranca',
  reembolsobaixacobranca: 'reembolsobaixacobranca',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CodigoParaCliente: 'CodigoParaCliente',
  HistoricoParaCliente: 'HistoricoParaCliente',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  EventoLancamento: 'EventoLancamento',
  DataDepositoFidc: 'DataDepositoFidc',
  ValorDepositoFidc: 'ValorDepositoFidc',
  ValorPagamentoDepositoFidc: 'ValorPagamentoDepositoFidc',
  IdentificacaoDepositoFidc: 'IdentificacaoDepositoFidc',
  TipoOperacaoDepositoFidc: 'TipoOperacaoDepositoFidc',
  SegundaViaBoletoCodigoMotivo: 'SegundaViaBoletoCodigoMotivo',
  SegundaViaBoletoDescricaoMotivo: 'SegundaViaBoletoDescricaoMotivo',
  SegundaViaBoletoBloqueado: 'SegundaViaBoletoBloqueado',
  DiasProtesto: 'DiasProtesto',
  SigPag_ID: 'SigPag_ID',
  SeTipoDocumentoReciprocidade: 'SeTipoDocumentoReciprocidade',
  Emprestimo_ID: 'Emprestimo_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID',
  numero_port_correspondente: 'numero_port_correspondente',
  Fator: 'Fator',
  FatorPV: 'FatorPV',
  idTitulo: 'idTitulo',
  Perdido: 'Perdido',
  PerdidoRecuperado: 'PerdidoRecuperado',
  TransferenciaEspecial: 'TransferenciaEspecial'
});

exports.Prisma.SIGFCSScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  VALORFIXO: 'VALORFIXO',
  MOEDA: 'MOEDA',
  TIPO: 'TIPO',
  BANCO: 'BANCO',
  DTPGTO: 'DTPGTO',
  VLPGTO: 'VLPGTO',
  DIGITACAO: 'DIGITACAO',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  VALOR_: 'VALOR_',
  VCTO_: 'VCTO_',
  HIST_: 'HIST_',
  PORTADOR: 'PORTADOR',
  DTPORTADOR: 'DTPORTADOR',
  BORD_PORT: 'BORD_PORT',
  CTA_PORT: 'CTA_PORT',
  CAIXA: 'CAIXA',
  CCUSTO: 'CCUSTO',
  CART_PORT: 'CART_PORT',
  CONTROL: 'CONTROL',
  CONTROLBX: 'CONTROLBX',
  CTRL_ID: 'CTRL_ID',
  CODHIS: 'CODHIS',
  ESTADO: 'ESTADO',
  recompra: 'recompra',
  float_port: 'float_port',
  est_port: 'est_port',
  numero_port: 'numero_port',
  aceite: 'aceite',
  novadata: 'novadata',
  recibo: 'recibo',
  sigfls: 'sigfls',
  conferido: 'conferido',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  grupocontabil: 'grupocontabil',
  processocontabil: 'processocontabil',
  direta: 'direta',
  cobrpgto: 'cobrpgto',
  cobrdcto: 'cobrdcto',
  cobrresponsavel: 'cobrresponsavel',
  cobrowner: 'cobrowner',
  cobrobs: 'cobrobs',
  tarifacobr: 'tarifacobr',
  tarifaabt: 'tarifaabt',
  formapgto: 'formapgto',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  dt_Ocorr: 'dt_Ocorr',
  Est_Port_Old: 'Est_Port_Old',
  CODCARTEIRA: 'CODCARTEIRA',
  cobrdtpgto: 'cobrdtpgto',
  endossadopor: 'endossadopor',
  insercao: 'insercao',
  manual1: 'manual1',
  sigflscp: 'sigflscp',
  filial: 'filial',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  lote: 'lote',
  anolote: 'anolote',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  controleparticipante: 'controleparticipante',
  dtbaixa: 'dtbaixa',
  PORTADOR_OLD: 'PORTADOR_OLD',
  HistoricoContabil: 'HistoricoContabil',
  originadode: 'originadode',
  recuperacaodespesas: 'recuperacaodespesas',
  termsecurit: 'termsecurit',
  termsecuritanexo: 'termsecuritanexo',
  DtCompensacaoContabil: 'DtCompensacaoContabil',
  DtCompensacaoOcorrencia: 'DtCompensacaoOcorrencia',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  tarifabaixacobranca: 'tarifabaixacobranca',
  reembolsobaixacobranca: 'reembolsobaixacobranca',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CodigoParaCliente: 'CodigoParaCliente',
  HistoricoParaCliente: 'HistoricoParaCliente',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  EventoLancamento: 'EventoLancamento',
  DataDepositoFidc: 'DataDepositoFidc',
  ValorDepositoFidc: 'ValorDepositoFidc',
  ValorPagamentoDepositoFidc: 'ValorPagamentoDepositoFidc',
  IdentificacaoDepositoFidc: 'IdentificacaoDepositoFidc',
  TipoOperacaoDepositoFidc: 'TipoOperacaoDepositoFidc',
  SegundaViaBoletoCodigoMotivo: 'SegundaViaBoletoCodigoMotivo',
  SegundaViaBoletoDescricaoMotivo: 'SegundaViaBoletoDescricaoMotivo',
  SegundaViaBoletoBloqueado: 'SegundaViaBoletoBloqueado',
  DiasProtesto: 'DiasProtesto',
  SigPag_ID: 'SigPag_ID',
  SeTipoDocumentoReciprocidade: 'SeTipoDocumentoReciprocidade',
  Emprestimo_ID: 'Emprestimo_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID',
  numero_port_correspondente: 'numero_port_correspondente',
  Fator: 'Fator',
  FatorPV: 'FatorPV',
  idTitulo: 'idTitulo',
  Perdido: 'Perdido',
  PerdidoRecuperado: 'PerdidoRecuperado',
  TransferenciaEspecial: 'TransferenciaEspecial'
});

exports.Prisma.SIGFIDC2ScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  VALORFIXO: 'VALORFIXO',
  MOEDA: 'MOEDA',
  TIPO: 'TIPO',
  BANCO: 'BANCO',
  DTPGTO: 'DTPGTO',
  VLPGTO: 'VLPGTO',
  DIGITACAO: 'DIGITACAO',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  VALOR_: 'VALOR_',
  VCTO_: 'VCTO_',
  HIST_: 'HIST_',
  PORTADOR: 'PORTADOR',
  DTPORTADOR: 'DTPORTADOR',
  BORD_PORT: 'BORD_PORT',
  CTA_PORT: 'CTA_PORT',
  CAIXA: 'CAIXA',
  CCUSTO: 'CCUSTO',
  CART_PORT: 'CART_PORT',
  CONTROL: 'CONTROL',
  CONTROLBX: 'CONTROLBX',
  CTRL_ID: 'CTRL_ID',
  CODHIS: 'CODHIS',
  ESTADO: 'ESTADO',
  recompra: 'recompra',
  float_port: 'float_port',
  est_port: 'est_port',
  numero_port: 'numero_port',
  aceite: 'aceite',
  novadata: 'novadata',
  recibo: 'recibo',
  sigfls: 'sigfls',
  conferido: 'conferido',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  grupocontabil: 'grupocontabil',
  processocontabil: 'processocontabil',
  direta: 'direta',
  cobrpgto: 'cobrpgto',
  cobrdcto: 'cobrdcto',
  cobrresponsavel: 'cobrresponsavel',
  cobrowner: 'cobrowner',
  cobrobs: 'cobrobs',
  tarifacobr: 'tarifacobr',
  tarifaabt: 'tarifaabt',
  formapgto: 'formapgto',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  dt_Ocorr: 'dt_Ocorr',
  Est_Port_Old: 'Est_Port_Old',
  CODCARTEIRA: 'CODCARTEIRA',
  cobrdtpgto: 'cobrdtpgto',
  endossadopor: 'endossadopor',
  insercao: 'insercao',
  manual1: 'manual1',
  sigflscp: 'sigflscp',
  filial: 'filial',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  lote: 'lote',
  anolote: 'anolote',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  controleparticipante: 'controleparticipante',
  dtbaixa: 'dtbaixa',
  PORTADOR_OLD: 'PORTADOR_OLD',
  HistoricoContabil: 'HistoricoContabil',
  originadode: 'originadode',
  recuperacaodespesas: 'recuperacaodespesas',
  termsecurit: 'termsecurit',
  termsecuritanexo: 'termsecuritanexo',
  DtCompensacaoContabil: 'DtCompensacaoContabil',
  DtCompensacaoOcorrencia: 'DtCompensacaoOcorrencia',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  tarifabaixacobranca: 'tarifabaixacobranca',
  reembolsobaixacobranca: 'reembolsobaixacobranca',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CodigoParaCliente: 'CodigoParaCliente',
  HistoricoParaCliente: 'HistoricoParaCliente',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  EventoLancamento: 'EventoLancamento',
  DataDepositoFidc: 'DataDepositoFidc',
  ValorDepositoFidc: 'ValorDepositoFidc',
  ValorPagamentoDepositoFidc: 'ValorPagamentoDepositoFidc',
  IdentificacaoDepositoFidc: 'IdentificacaoDepositoFidc',
  TipoOperacaoDepositoFidc: 'TipoOperacaoDepositoFidc',
  SegundaViaBoletoCodigoMotivo: 'SegundaViaBoletoCodigoMotivo',
  SegundaViaBoletoDescricaoMotivo: 'SegundaViaBoletoDescricaoMotivo',
  SegundaViaBoletoBloqueado: 'SegundaViaBoletoBloqueado',
  DiasProtesto: 'DiasProtesto',
  SigPag_ID: 'SigPag_ID',
  SeTipoDocumentoReciprocidade: 'SeTipoDocumentoReciprocidade',
  Emprestimo_ID: 'Emprestimo_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID',
  numero_port_correspondente: 'numero_port_correspondente',
  Fator: 'Fator',
  FatorPV: 'FatorPV',
  idTitulo: 'idTitulo',
  Perdido: 'Perdido',
  PerdidoRecuperado: 'PerdidoRecuperado',
  TransferenciaEspecial: 'TransferenciaEspecial'
});

exports.Prisma.SIGFIDCScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  VALORFIXO: 'VALORFIXO',
  MOEDA: 'MOEDA',
  TIPO: 'TIPO',
  BANCO: 'BANCO',
  DTPGTO: 'DTPGTO',
  VLPGTO: 'VLPGTO',
  DIGITACAO: 'DIGITACAO',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  VALOR_: 'VALOR_',
  VCTO_: 'VCTO_',
  HIST_: 'HIST_',
  PORTADOR: 'PORTADOR',
  DTPORTADOR: 'DTPORTADOR',
  BORD_PORT: 'BORD_PORT',
  CTA_PORT: 'CTA_PORT',
  CAIXA: 'CAIXA',
  CCUSTO: 'CCUSTO',
  CART_PORT: 'CART_PORT',
  CONTROL: 'CONTROL',
  CONTROLBX: 'CONTROLBX',
  CTRL_ID: 'CTRL_ID',
  CODHIS: 'CODHIS',
  ESTADO: 'ESTADO',
  recompra: 'recompra',
  float_port: 'float_port',
  est_port: 'est_port',
  numero_port: 'numero_port',
  aceite: 'aceite',
  novadata: 'novadata',
  recibo: 'recibo',
  sigfls: 'sigfls',
  conferido: 'conferido',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  grupocontabil: 'grupocontabil',
  processocontabil: 'processocontabil',
  direta: 'direta',
  cobrpgto: 'cobrpgto',
  cobrdcto: 'cobrdcto',
  cobrresponsavel: 'cobrresponsavel',
  cobrowner: 'cobrowner',
  cobrobs: 'cobrobs',
  tarifacobr: 'tarifacobr',
  tarifaabt: 'tarifaabt',
  formapgto: 'formapgto',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  dt_Ocorr: 'dt_Ocorr',
  Est_Port_Old: 'Est_Port_Old',
  CODCARTEIRA: 'CODCARTEIRA',
  cobrdtpgto: 'cobrdtpgto',
  endossadopor: 'endossadopor',
  insercao: 'insercao',
  manual1: 'manual1',
  sigflscp: 'sigflscp',
  filial: 'filial',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  lote: 'lote',
  anolote: 'anolote',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  controleparticipante: 'controleparticipante',
  dtbaixa: 'dtbaixa',
  PORTADOR_OLD: 'PORTADOR_OLD',
  HistoricoContabil: 'HistoricoContabil',
  originadode: 'originadode',
  recuperacaodespesas: 'recuperacaodespesas',
  termsecurit: 'termsecurit',
  termsecuritanexo: 'termsecuritanexo',
  DtCompensacaoContabil: 'DtCompensacaoContabil',
  DtCompensacaoOcorrencia: 'DtCompensacaoOcorrencia',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  tarifabaixacobranca: 'tarifabaixacobranca',
  reembolsobaixacobranca: 'reembolsobaixacobranca',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CodigoParaCliente: 'CodigoParaCliente',
  HistoricoParaCliente: 'HistoricoParaCliente',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  EventoLancamento: 'EventoLancamento',
  DataDepositoFidc: 'DataDepositoFidc',
  ValorDepositoFidc: 'ValorDepositoFidc',
  ValorPagamentoDepositoFidc: 'ValorPagamentoDepositoFidc',
  IdentificacaoDepositoFidc: 'IdentificacaoDepositoFidc',
  TipoOperacaoDepositoFidc: 'TipoOperacaoDepositoFidc',
  SegundaViaBoletoCodigoMotivo: 'SegundaViaBoletoCodigoMotivo',
  SegundaViaBoletoDescricaoMotivo: 'SegundaViaBoletoDescricaoMotivo',
  SegundaViaBoletoBloqueado: 'SegundaViaBoletoBloqueado',
  DiasProtesto: 'DiasProtesto',
  SigPag_ID: 'SigPag_ID',
  SeTipoDocumentoReciprocidade: 'SeTipoDocumentoReciprocidade',
  Emprestimo_ID: 'Emprestimo_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID',
  numero_port_correspondente: 'numero_port_correspondente',
  Fator: 'Fator',
  FatorPV: 'FatorPV',
  idTitulo: 'idTitulo',
  Perdido: 'Perdido',
  PerdidoRecuperado: 'PerdidoRecuperado',
  TransferenciaEspecial: 'TransferenciaEspecial'
});

exports.Prisma.SIGFLSCPScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  DTBORDERO: 'DTBORDERO',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  FLOT: 'FLOT',
  PRAZO: 'PRAZO',
  CTRL_ID: 'CTRL_ID',
  TIPODCTO: 'TIPODCTO',
  VALORFACE: 'VALORFACE',
  DESCONTO: 'DESCONTO',
  DESCONTOP: 'DESCONTOP',
  LIMITEDESCONTO: 'LIMITEDESCONTO',
  MULTA: 'MULTA',
  JUROS: 'JUROS',
  REJEITADO: 'REJEITADO',
  FILIAL: 'FILIAL',
  Banco: 'Banco',
  Agencia: 'Agencia',
  ContaCorrente: 'ContaCorrente',
  CodigoBarras: 'CodigoBarras'
});

exports.Prisma.SIGFLSScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  DTBORDERO: 'DTBORDERO',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  FLOT: 'FLOT',
  JUROS: 'JUROS',
  PRAZO: 'PRAZO',
  CMC7: 'CMC7',
  CHBANCO: 'CHBANCO',
  CHAGENCIA: 'CHAGENCIA',
  CHCONTA: 'CHCONTA',
  CHNUMERO: 'CHNUMERO',
  CHPRACA: 'CHPRACA',
  ALTERADO: 'ALTERADO',
  NOTAFISCAL: 'NOTAFISCAL',
  DATANFISCAL: 'DATANFISCAL',
  aceite: 'aceite',
  rejeitado: 'rejeitado',
  ctrl_id: 'ctrl_id',
  temnota: 'temnota',
  temcanhoto: 'temcanhoto',
  dtnotafiscal: 'dtnotafiscal',
  ownernf: 'ownernf',
  dtcanhoto: 'dtcanhoto',
  ownercanhoto: 'ownercanhoto',
  dtduplicata: 'dtduplicata',
  ownerdp: 'ownerdp',
  canhotobom: 'canhotobom',
  ownercanhotobom: 'ownercanhotobom',
  confirmado: 'confirmado',
  ownerconfirmado: 'ownerconfirmado',
  dtconfirmado: 'dtconfirmado',
  temduplicata: 'temduplicata',
  ownerduplicata: 'ownerduplicata',
  ownertemcanhoto: 'ownertemcanhoto',
  ownertemnota: 'ownertemnota',
  dtcanhotobom: 'dtcanhotobom',
  ownerdtcanhotobom: 'ownerdtcanhotobom',
  responsavel: 'responsavel',
  obs: 'obs',
  floatdnu: 'floatdnu',
  fd0: 'fd0',
  valorface: 'valorface',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  tipodcto: 'tipodcto',
  compraCS: 'compraCS',
  endossadopor: 'endossadopor',
  filial: 'filial',
  CHC1: 'CHC1',
  CHC2: 'CHC2',
  CHC3: 'CHC3',
  CHLINHA: 'CHLINHA',
  SeLote: 'SeLote',
  SeEstado: 'SeEstado',
  SeConsulta: 'SeConsulta',
  SeScoring: 'SeScoring',
  IR: 'IR',
  CSLL: 'CSLL',
  COFINS: 'COFINS',
  PIS: 'PIS',
  gerente: 'gerente',
  gerentecomis: 'gerentecomis',
  gerentegeral: 'gerentegeral',
  gerentegeralcomis: 'gerentegeralcomis',
  superintendente: 'superintendente',
  superintendentecomis: 'superintendentecomis',
  gerenteflot: 'gerenteflot',
  basedeterminada: 'basedeterminada',
  numero_port: 'numero_port',
  cobbanco: 'cobbanco',
  cobservico: 'cobservico',
  cobtarifa: 'cobtarifa',
  jurosajustado: 'jurosajustado',
  obscontrole: 'obscontrole',
  dtcontroletransportadora: 'dtcontroletransportadora',
  dtcontrolemarketing: 'dtcontrolemarketing',
  dtcontrolefiscal: 'dtcontrolefiscal',
  dtcontrolerecebimento: 'dtcontrolerecebimento',
  controleparticipante: 'controleparticipante',
  transportadora: 'transportadora',
  conhecimento: 'conhecimento',
  lote: 'lote',
  anolote: 'anolote',
  PrazoDU: 'PrazoDU',
  dt_atualizacao: 'dt_atualizacao',
  termsecurit: 'termsecurit',
  temcheque: 'temcheque',
  dtcheque: 'dtcheque',
  ownerch: 'ownerch',
  trusteeParaFIDC: 'trusteeParaFIDC',
  JurosDesagio: 'JurosDesagio',
  RateioTarifas: 'RateioTarifas',
  controleAR: 'controleAR',
  ownercontroleAR: 'ownercontroleAR',
  dtcontroleAR: 'dtcontroleAR',
  ownerdtcontroleAR: 'ownerdtcontroleAR',
  dtrecebcontroleAR: 'dtrecebcontroleAR',
  ownerdtrecebcontroleAR: 'ownerdtrecebcontroleAR',
  numerocontrato: 'numerocontrato',
  termsecuritanexo: 'termsecuritanexo',
  trusteeParaFIDC2: 'trusteeParaFIDC2',
  performado: 'performado',
  Deducao: 'Deducao',
  Grupo: 'Grupo',
  ValorNota: 'ValorNota',
  departamento: 'departamento',
  desagiosecurit: 'desagiosecurit',
  monitorapreconfirmado: 'monitorapreconfirmado',
  preconfirmado: 'preconfirmado',
  ownerpreconfirmado: 'ownerpreconfirmado',
  dtpreconfirmado: 'dtpreconfirmado',
  responsavelpre: 'responsavelpre',
  obspre: 'obspre',
  transportadorapre: 'transportadorapre',
  pedidopre: 'pedidopre',
  conhecimentopre: 'conhecimentopre',
  consultarcentraisderisco: 'consultarcentraisderisco',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  dctoimport_: 'dctoimport_',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  Tarifa: 'Tarifa',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  SerieNota: 'SerieNota',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  Parcela: 'Parcela',
  QuantidadeParcelas: 'QuantidadeParcelas',
  Carteira_ID: 'Carteira_ID',
  EstadoConfirmacaoTitulo_ID: 'EstadoConfirmacaoTitulo_ID',
  iChequeUltimaSituacao: 'iChequeUltimaSituacao',
  iChequeCCF: 'iChequeCCF',
  iChequeProtesto: 'iChequeProtesto',
  SigPag_ID: 'SigPag_ID',
  SelModoDeCobranca: 'SelModoDeCobranca',
  SelEstadoConfirmacaoTitulo: 'SelEstadoConfirmacaoTitulo',
  CompraCSFezPrimeiraCarga: 'CompraCSFezPrimeiraCarga',
  ControlaCartaDeCessao: 'ControlaCartaDeCessao',
  CartaDeCessao: 'CartaDeCessao',
  DtCartaDeCessao: 'DtCartaDeCessao',
  OwnerCartaDeCessao: 'OwnerCartaDeCessao',
  ResponsavelCartaDeCessao: 'ResponsavelCartaDeCessao',
  ObsCartaDeCessao: 'ObsCartaDeCessao',
  DataPerformado: 'DataPerformado',
  EstadoPreConfirmacaoTitulo_ID: 'EstadoPreConfirmacaoTitulo_ID',
  SelEstadoPreConfirmacaoTitulo: 'SelEstadoPreConfirmacaoTitulo',
  SelDuplicata: 'SelDuplicata',
  SelNotaFiscal: 'SelNotaFiscal',
  SelCanhoto: 'SelCanhoto',
  SelCanhotoBom: 'SelCanhotoBom',
  SelCheque: 'SelCheque',
  SelAR: 'SelAR',
  Ctrl_IDFluxo: 'Ctrl_IDFluxo',
  AnaliseBorderoSacadoId: 'AnaliseBorderoSacadoId',
  SacadoAlerta: 'SacadoAlerta',
  SacadoBloqueio: 'SacadoBloqueio',
  AnaliseBorderoTituloId: 'AnaliseBorderoTituloId',
  TituloAlerta: 'TituloAlerta',
  TituloBloqueio: 'TituloBloqueio',
  AnaliseBorderoChaveId: 'AnaliseBorderoChaveId',
  NFeAlerta: 'NFeAlerta',
  NFeBloqueio: 'NFeBloqueio',
  CartaoDeCreditoBandeira: 'CartaoDeCreditoBandeira',
  CartaoDeCreditoNSU: 'CartaoDeCreditoNSU',
  ValorVenda: 'ValorVenda',
  DocumentoCetip: 'DocumentoCetip',
  idSigflsWeb: 'idSigflsWeb',
  NumeroBorderoWEB: 'NumeroBorderoWEB',
  VerificacaoNFSe: 'VerificacaoNFSe',
  DataLimiteConfirmacaoDeTitulos: 'DataLimiteConfirmacaoDeTitulos',
  EstadoCanhoto_ID: 'EstadoCanhoto_ID',
  ResponsavelEstadoCanhoto: 'ResponsavelEstadoCanhoto',
  DtEstadoCanhoto: 'DtEstadoCanhoto',
  OwnerEstadoCanhoto: 'OwnerEstadoCanhoto'
});

exports.Prisma.SIGFLUScalarFieldEnum = makeEnum({
  ID: 'ID',
  DATA: 'DATA',
  HISTORICO: 'HISTORICO',
  DCTO: 'DCTO',
  CODIGO: 'CODIGO',
  VALOR: 'VALOR',
  VALORFIXO: 'VALORFIXO',
  MOEDA: 'MOEDA',
  TIPO: 'TIPO',
  BANCO: 'BANCO',
  DTPGTO: 'DTPGTO',
  VLPGTO: 'VLPGTO',
  DIGITACAO: 'DIGITACAO',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  BORDERO: 'BORDERO',
  EMISSAO: 'EMISSAO',
  VALOR_: 'VALOR_',
  VCTO_: 'VCTO_',
  HIST_: 'HIST_',
  PORTADOR: 'PORTADOR',
  DTPORTADOR: 'DTPORTADOR',
  BORD_PORT: 'BORD_PORT',
  CTA_PORT: 'CTA_PORT',
  CAIXA: 'CAIXA',
  CCUSTO: 'CCUSTO',
  CART_PORT: 'CART_PORT',
  CONTROL: 'CONTROL',
  CONTROLBX: 'CONTROLBX',
  CTRL_ID: 'CTRL_ID',
  CODHIS: 'CODHIS',
  ESTADO: 'ESTADO',
  recompra: 'recompra',
  float_port: 'float_port',
  est_port: 'est_port',
  numero_port: 'numero_port',
  aceite: 'aceite',
  novadata: 'novadata',
  recibo: 'recibo',
  sigfls: 'sigfls',
  conferido: 'conferido',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  grupocontabil: 'grupocontabil',
  processocontabil: 'processocontabil',
  direta: 'direta',
  cobrpgto: 'cobrpgto',
  cobrdcto: 'cobrdcto',
  cobrresponsavel: 'cobrresponsavel',
  cobrowner: 'cobrowner',
  cobrobs: 'cobrobs',
  tarifacobr: 'tarifacobr',
  tarifaabt: 'tarifaabt',
  formapgto: 'formapgto',
  desconto: 'desconto',
  limitedesconto: 'limitedesconto',
  descontop: 'descontop',
  dt_Ocorr: 'dt_Ocorr',
  Est_Port_Old: 'Est_Port_Old',
  CODCARTEIRA: 'CODCARTEIRA',
  cobrdtpgto: 'cobrdtpgto',
  endossadopor: 'endossadopor',
  insercao: 'insercao',
  manual1: 'manual1',
  sigflscp: 'sigflscp',
  filial: 'filial',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  lote: 'lote',
  anolote: 'anolote',
  bcodescontado: 'bcodescontado',
  evento: 'evento',
  dt_atualizacao: 'dt_atualizacao',
  controleparticipante: 'controleparticipante',
  dtbaixa: 'dtbaixa',
  PORTADOR_OLD: 'PORTADOR_OLD',
  HistoricoContabil: 'HistoricoContabil',
  originadode: 'originadode',
  recuperacaodespesas: 'recuperacaodespesas',
  termsecurit: 'termsecurit',
  termsecuritanexo: 'termsecuritanexo',
  DtCompensacaoContabil: 'DtCompensacaoContabil',
  DtCompensacaoOcorrencia: 'DtCompensacaoOcorrencia',
  dtaceite: 'dtaceite',
  owneraceite: 'owneraceite',
  tarifabaixacobranca: 'tarifabaixacobranca',
  reembolsobaixacobranca: 'reembolsobaixacobranca',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  CodigoParaCliente: 'CodigoParaCliente',
  HistoricoParaCliente: 'HistoricoParaCliente',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  EventoLancamento: 'EventoLancamento',
  DataDepositoFidc: 'DataDepositoFidc',
  ValorDepositoFidc: 'ValorDepositoFidc',
  ValorPagamentoDepositoFidc: 'ValorPagamentoDepositoFidc',
  IdentificacaoDepositoFidc: 'IdentificacaoDepositoFidc',
  TipoOperacaoDepositoFidc: 'TipoOperacaoDepositoFidc',
  SegundaViaBoletoCodigoMotivo: 'SegundaViaBoletoCodigoMotivo',
  SegundaViaBoletoDescricaoMotivo: 'SegundaViaBoletoDescricaoMotivo',
  SegundaViaBoletoBloqueado: 'SegundaViaBoletoBloqueado',
  DiasProtesto: 'DiasProtesto',
  SigPag_ID: 'SigPag_ID',
  SeTipoDocumentoReciprocidade: 'SeTipoDocumentoReciprocidade',
  Emprestimo_ID: 'Emprestimo_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID',
  numero_port_correspondente: 'numero_port_correspondente',
  Fator: 'Fator',
  FatorPV: 'FatorPV',
  idTitulo: 'idTitulo',
  Perdido: 'Perdido',
  PerdidoRecuperado: 'PerdidoRecuperado',
  TransferenciaEspecial: 'TransferenciaEspecial'
});

exports.Prisma.SIGVENScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  NOME: 'NOME',
  COMISSAO: 'COMISSAO',
  FONE: 'FONE',
  superior1: 'superior1',
  superior2: 'superior2',
  TIPO: 'TIPO',
  FAX: 'FAX',
  ANIVER: 'ANIVER',
  email: 'email',
  Favorecido: 'Favorecido',
  Numerobanco: 'Numerobanco',
  Nomebanco: 'Nomebanco',
  NumeroAgencia: 'NumeroAgencia',
  NomeAgencia: 'NomeAgencia',
  Flot: 'Flot',
  FavorecidoRepasse: 'FavorecidoRepasse'
});

exports.Prisma.SPCMaxiACAOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataAcao: 'DataAcao',
  DataInclusao: 'DataInclusao',
  Distrito: 'Distrito',
  NomeAutor: 'NomeAutor',
  ValorAcao: 'ValorAcao',
  Vara: 'Vara',
  TipoAcao: 'TipoAcao'
});

exports.Prisma.SPCMaxiADMIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CargoAdministracao: 'CargoAdministracao',
  CargoDirecao: 'CargoDirecao',
  Condicao: 'Condicao',
  DataEntrada: 'DataEntrada',
  DataSaida: 'DataSaida',
  Documento: 'Documento',
  MunicipioEMBRATEL: 'MunicipioEMBRATEL',
  Nome: 'Nome',
  PorcentualParticipacao: 'PorcentualParticipacao',
  SituacaoDocumento: 'SituacaoDocumento',
  TipoRelacionamento: 'TipoRelacionamento',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao',
  ValorParticipacao: 'ValorParticipacao',
  Nacionalidade: 'Nacionalidade',
  EstadoEMBRATEL: 'EstadoEMBRATEL',
  EstadoCivil: 'EstadoCivil'
});

exports.Prisma.SPCMaxiAESEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.SPCMaxiALDOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  EntidadeOrigem: 'EntidadeOrigem',
  Motivo: 'Motivo',
  Observacao: 'Observacao',
  TipoDocumentoAlerta: 'TipoDocumentoAlerta'
});

exports.Prisma.SPCMaxiALIDEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Mensagem: 'Mensagem'
});

exports.Prisma.SPCMaxiALOBIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  MsgObito: 'MsgObito',
  Mensagem: 'Mensagem'
});

exports.Prisma.SPCMaxiANTEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataMotivo: 'DataMotivo',
  RazaoSocialAnterior: 'RazaoSocialAnterior'
});

exports.Prisma.SPCMaxiATEMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NumeroCNAE: 'NumeroCNAE',
  PercentualCompra: 'PercentualCompra',
  PercentualVendas: 'PercentualVendas',
  QuantidadeEmpregados: 'QuantidadeEmpregados',
  QuantidadeFiliais: 'QuantidadeFiliais',
  RamoAtividadeDescricao: 'RamoAtividadeDescricao',
  AtividadesEconomicasSecundariasDescricao: 'AtividadesEconomicasSecundariasDescricao'
});

exports.Prisma.SPCMaxiBACDDScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Documento: 'Documento',
  Origem: 'Origem',
  DadosBancariosNumeroAgencia: 'DadosBancariosNumeroAgencia',
  DadosBancariosNomeAgencia: 'DadosBancariosNomeAgencia',
  DadosBancariosNumeroContaCorrente: 'DadosBancariosNumeroContaCorrente',
  DadosBancariosDigitoContaCorrente: 'DadosBancariosDigitoContaCorrente',
  DadosBancariosLogradouro: 'DadosBancariosLogradouro',
  DadosBancariosNumero: 'DadosBancariosNumero',
  DadosBancariosComplemento: 'DadosBancariosComplemento',
  DadosBancariosBairro: 'DadosBancariosBairro',
  DadosBancariosCep: 'DadosBancariosCep',
  DadosBancariosCidade: 'DadosBancariosCidade',
  DadosBancariosUF: 'DadosBancariosUF',
  DadosBancariosBanco: 'DadosBancariosBanco',
  DadosBancariosTelefoneDDD: 'DadosBancariosTelefoneDDD',
  DadosBancariosTelefone: 'DadosBancariosTelefone',
  DadosBancariosFaxDDD: 'DadosBancariosFaxDDD',
  DadosBancariosFax: 'DadosBancariosFax'
});

exports.Prisma.SPCMaxiBAINScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  MensagemTexto: 'MensagemTexto'
});

exports.Prisma.SPCMaxiCASOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Nacionalidade: 'Nacionalidade',
  Natureza: 'Natureza',
  Origem: 'Origem',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao',
  ValorCapitalAutorizado: 'ValorCapitalAutorizado',
  ValorCapitalRealizado: 'ValorCapitalRealizado',
  ValorCapitalSocial: 'ValorCapitalSocial'
});

exports.Prisma.SPCMaxiCCOSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataSituacaoContaCorrente: 'DataSituacaoContaCorrente',
  MensagemSituacaoContaCorrente: 'MensagemSituacaoContaCorrente',
  TipoDocumentoIdentificacao: 'TipoDocumentoIdentificacao',
  TipoPessoaRechequeOnline: 'TipoPessoaRechequeOnline',
  BancoParticipacaoRechequeOnline: 'BancoParticipacaoRechequeOnline',
  MensagemIndisponibilidade: 'MensagemIndisponibilidade'
});

exports.Prisma.SPCMaxiCHLOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NomeAssociado: 'NomeAssociado',
  CodigoEntidade: 'CodigoEntidade',
  DataInclusao: 'DataInclusao',
  NomeEntidade: 'NomeEntidade',
  Informante: 'Informante',
  Origem: 'Origem',
  Alinea: 'Alinea',
  ChequeInicialDataEmissao: 'ChequeInicialDataEmissao',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco',
  CidadeAssociado: 'CidadeAssociado',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiCHSFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataUltimoCheque: 'DataUltimoCheque',
  Origem: 'Origem',
  Quantidade: 'Quantidade',
  Motivo: 'Motivo',
  UltimoChequeNumero: 'UltimoChequeNumero',
  UltimoChequeDigito: 'UltimoChequeDigito',
  UltimoChequeValor: 'UltimoChequeValor',
  UltimoChequeDadosBancariosNumeroAgencia: 'UltimoChequeDadosBancariosNumeroAgencia',
  UltimoChequeDadosBancariosNomeAgencia: 'UltimoChequeDadosBancariosNomeAgencia',
  UltimoChequeDadosBancariosNumeroContaCorrente: 'UltimoChequeDadosBancariosNumeroContaCorrente',
  UltimoChequeDadosBancariosDigitoContaCorrente: 'UltimoChequeDadosBancariosDigitoContaCorrente',
  UltimoChequeDadosBancariosEndereco: 'UltimoChequeDadosBancariosEndereco',
  UltimoChequeDadosBancariosLogradouro: 'UltimoChequeDadosBancariosLogradouro',
  UltimoChequeDadosBancariosNumero: 'UltimoChequeDadosBancariosNumero',
  UltimoChequeDadosBancariosComplemento: 'UltimoChequeDadosBancariosComplemento',
  UltimoChequeDadosBancariosBairro: 'UltimoChequeDadosBancariosBairro',
  UltimoChequeDadosBancariosCep: 'UltimoChequeDadosBancariosCep',
  UltimoChequeDadosBancariosCidade: 'UltimoChequeDadosBancariosCidade',
  UltimoChequeDadosBancariosUF: 'UltimoChequeDadosBancariosUF',
  UltimoChequeDadosBancariosBanco: 'UltimoChequeDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCHSFUScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrenciaMaisRecente: 'DataOcorrenciaMaisRecente',
  NumeroLoja: 'NumeroLoja',
  OrigemOcorrenciaMaisRecente: 'OrigemOcorrenciaMaisRecente',
  QuantidadeCheques: 'QuantidadeCheques',
  DadosBancariosNumeroAgencia: 'DadosBancariosNumeroAgencia',
  DadosBancariosNomeAgencia: 'DadosBancariosNomeAgencia',
  DadosBancariosNumeroContaCorrente: 'DadosBancariosNumeroContaCorrente',
  DadosBancariosDigitoContaCorrente: 'DadosBancariosDigitoContaCorrente',
  DadosBancariosEndereco: 'DadosBancariosEndereco',
  DadosBancariosLogradouro: 'DadosBancariosLogradouro',
  DadosBancariosNumero: 'DadosBancariosNumero',
  DadosBancariosComplemento: 'DadosBancariosComplemento',
  DadosBancariosBairro: 'DadosBancariosBairro',
  DadosBancariosCep: 'DadosBancariosCep',
  DadosBancariosCidade: 'DadosBancariosCidade',
  DadosBancariosUF: 'DadosBancariosUF',
  DadosBancariosBanco: 'DadosBancariosBanco',
  DadosBancariosTelefoneDDD: 'DadosBancariosTelefoneDDD',
  DadosBancariosTelefone: 'DadosBancariosTelefone',
  DadosBancariosFaxDDD: 'DadosBancariosFaxDDD',
  DadosBancariosFax: 'DadosBancariosFax',
  Cidade: 'Cidade',
  UF: 'UF'
});

exports.Prisma.SPCMaxiCOACDIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Documento: 'Documento',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  Origem: 'Origem',
  Informante: 'Informante',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCOADIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Documento: 'Documento',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  Origem: 'Origem',
  Informante: 'Informante',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCODDSRSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCODDScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Documento: 'Documento',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  Origem: 'Origem',
  Informante: 'Informante',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCONRGScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  FotoConfirmacaoRG: 'FotoConfirmacaoRG',
  MunicipioConfirmacaoRG: 'MunicipioConfirmacaoRG',
  NomePaiConfirmacaoRG: 'NomePaiConfirmacaoRG',
  NomeMaeConfirmacaoRG: 'NomeMaeConfirmacaoRG',
  DataNascimentoRG: 'DataNascimentoRG',
  NomeConfirmacaoRG: 'NomeConfirmacaoRG',
  UFEmissaoRG: 'UFEmissaoRG',
  NumeroRGConfirmacaoRG: 'NumeroRGConfirmacaoRG'
});

exports.Prisma.SPCMaxiCONTUScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  Origem: 'Origem',
  Informante: 'Informante',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeInicialDadosBancariosTelefoneDDD: 'ChequeInicialDadosBancariosTelefoneDDD',
  ChequeInicialDadosBancariosTelefone: 'ChequeInicialDadosBancariosTelefone',
  ChequeInicialDadosBancariosFaxDDD: 'ChequeInicialDadosBancariosFaxDDD',
  ChequeInicialDadosBancariosFax: 'ChequeInicialDadosBancariosFax',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco',
  ChequeFinalDadosBancariosTelefoneDDD: 'ChequeFinalDadosBancariosTelefoneDDD',
  ChequeFinalDadosBancariosTelefone: 'ChequeFinalDadosBancariosTelefone',
  ChequeFinalDadosBancariosFaxDDD: 'ChequeFinalDadosBancariosFaxDDD',
  ChequeFinalDadosBancariosFax: 'ChequeFinalDadosBancariosFax'
});

exports.Prisma.SPCMaxiCOORScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataInclusao: 'DataInclusao',
  DataOcorrencia: 'DataOcorrencia',
  Origem: 'Origem',
  Informante: 'Informante',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCOOSRSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco'
});

exports.Prisma.SPCMaxiCOOSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeInicialDadosBancariosTelefoneDDD: 'ChequeInicialDadosBancariosTelefoneDDD',
  ChequeInicialDadosBancariosTelefone: 'ChequeInicialDadosBancariosTelefone',
  ChequeInicialDadosBancariosFaxDDD: 'ChequeInicialDadosBancariosFaxDDD',
  ChequeInicialDadosBancariosFax: 'ChequeInicialDadosBancariosFax',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco',
  ChequeFinalDadosBancariosTelefoneDDD: 'ChequeFinalDadosBancariosTelefoneDDD',
  ChequeFinalDadosBancariosTelefone: 'ChequeFinalDadosBancariosTelefone',
  ChequeFinalDadosBancariosFaxDDD: 'ChequeFinalDadosBancariosFaxDDD',
  ChequeFinalDadosBancariosFax: 'ChequeFinalDadosBancariosFax'
});

exports.Prisma.SPCMaxiCOREScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NomeAssociado: 'NomeAssociado',
  DataConsulta: 'DataConsulta',
  NomeEntidadeOrigem: 'NomeEntidadeOrigem',
  OrigemAssociadoCidade: 'OrigemAssociadoCidade',
  OrigemAssociadoUF: 'OrigemAssociadoUF'
});

exports.Prisma.SPCMaxiCOSRSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  Motivo: 'Motivo',
  ChequeInicialNumero: 'ChequeInicialNumero',
  ChequeInicialDigito: 'ChequeInicialDigito',
  ChequeInicialValor: 'ChequeInicialValor',
  ChequeInicialDadosBancariosNumeroAgencia: 'ChequeInicialDadosBancariosNumeroAgencia',
  ChequeInicialDadosBancariosNomeAgencia: 'ChequeInicialDadosBancariosNomeAgencia',
  ChequeInicialDadosBancariosNumeroContaCorrente: 'ChequeInicialDadosBancariosNumeroContaCorrente',
  ChequeInicialDadosBancariosDigitoContaCorrente: 'ChequeInicialDadosBancariosDigitoContaCorrente',
  ChequeInicialDadosBancariosEndereco: 'ChequeInicialDadosBancariosEndereco',
  ChequeInicialDadosBancariosLogradouro: 'ChequeInicialDadosBancariosLogradouro',
  ChequeInicialDadosBancariosNumero: 'ChequeInicialDadosBancariosNumero',
  ChequeInicialDadosBancariosComplemento: 'ChequeInicialDadosBancariosComplemento',
  ChequeInicialDadosBancariosBairro: 'ChequeInicialDadosBancariosBairro',
  ChequeInicialDadosBancariosCep: 'ChequeInicialDadosBancariosCep',
  ChequeInicialDadosBancariosCidade: 'ChequeInicialDadosBancariosCidade',
  ChequeInicialDadosBancariosUF: 'ChequeInicialDadosBancariosUF',
  ChequeInicialDadosBancariosBanco: 'ChequeInicialDadosBancariosBanco',
  ChequeInicialDadosBancariosTelefoneDDD: 'ChequeInicialDadosBancariosTelefoneDDD',
  ChequeInicialDadosBancariosTelefone: 'ChequeInicialDadosBancariosTelefone',
  ChequeInicialDadosBancariosFaxDDD: 'ChequeInicialDadosBancariosFaxDDD',
  ChequeInicialDadosBancariosFax: 'ChequeInicialDadosBancariosFax',
  ChequeFinalNumero: 'ChequeFinalNumero',
  ChequeFinalDigito: 'ChequeFinalDigito',
  ChequeFinalValor: 'ChequeFinalValor',
  ChequeFinalDadosBancariosNumeroAgencia: 'ChequeFinalDadosBancariosNumeroAgencia',
  ChequeFinalDadosBancariosNomeAgencia: 'ChequeFinalDadosBancariosNomeAgencia',
  ChequeFinalDadosBancariosNumeroContaCorrente: 'ChequeFinalDadosBancariosNumeroContaCorrente',
  ChequeFinalDadosBancariosDigitoContaCorrente: 'ChequeFinalDadosBancariosDigitoContaCorrente',
  ChequeFinalDadosBancariosLogradouro: 'ChequeFinalDadosBancariosLogradouro',
  ChequeFinalDadosBancariosNumero: 'ChequeFinalDadosBancariosNumero',
  ChequeFinalDadosBancariosComplemento: 'ChequeFinalDadosBancariosComplemento',
  ChequeFinalDadosBancariosBairro: 'ChequeFinalDadosBancariosBairro',
  ChequeFinalDadosBancariosCep: 'ChequeFinalDadosBancariosCep',
  ChequeFinalDadosBancariosCidade: 'ChequeFinalDadosBancariosCidade',
  ChequeFinalDadosBancariosUF: 'ChequeFinalDadosBancariosUF',
  ChequeFinalDadosBancariosBanco: 'ChequeFinalDadosBancariosBanco',
  ChequeFinalDadosBancariosTelefoneDDD: 'ChequeFinalDadosBancariosTelefoneDDD',
  ChequeFinalDadosBancariosTelefone: 'ChequeFinalDadosBancariosTelefone',
  ChequeFinalDadosBancariosFaxDDD: 'ChequeFinalDadosBancariosFaxDDD',
  ChequeFinalDadosBancariosFax: 'ChequeFinalDadosBancariosFax'
});

exports.Prisma.SPCMaxiCRCHScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataEmissaoPrimeiroCheque: 'DataEmissaoPrimeiroCheque',
  DataEmissaoUltimoCheque: 'DataEmissaoUltimoCheque',
  TotalChequesAPrazoEmitidos: 'TotalChequesAPrazoEmitidos',
  TotalChequesAPrazoEntre31E60Dias: 'TotalChequesAPrazoEntre31E60Dias',
  TotalChequesAPrazoEntre61E90Dias: 'TotalChequesAPrazoEntre61E90Dias',
  TotalChequesAPrazoUltimos30Dias: 'TotalChequesAPrazoUltimos30Dias',
  TotalChequesAVista: 'TotalChequesAVista',
  ReferenciaComercialDataConsultaCheque: 'ReferenciaComercialDataConsultaCheque',
  ReferenciaComercialNomeEmpresaConsultante: 'ReferenciaComercialNomeEmpresaConsultante',
  ReferenciaComercialOrdemConsulta: 'ReferenciaComercialOrdemConsulta'
});

exports.Prisma.SPCMaxiCRCOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  AnoVencimento: 'AnoVencimento',
  MesVencimento: 'MesVencimento',
  QuantidadeCredito: 'QuantidadeCredito',
  Valor: 'Valor'
});

exports.Prisma.SPCMaxiCSFACScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  NumeroCheque: 'NumeroCheque',
  QuantidadeBanco: 'QuantidadeBanco',
  ChequeNumero: 'ChequeNumero',
  ChequeDigito: 'ChequeDigito',
  ChequeValor: 'ChequeValor',
  ChequeDadosBancariosNumeroAgencia: 'ChequeDadosBancariosNumeroAgencia',
  ChequeDadosBancariosNomeAgencia: 'ChequeDadosBancariosNomeAgencia',
  ChequeDadosBancariosNumeroContaCorrente: 'ChequeDadosBancariosNumeroContaCorrente',
  ChequeDadosBancariosDigitoContaCorrente: 'ChequeDadosBancariosDigitoContaCorrente',
  ChequeDadosBancariosEndereco: 'ChequeDadosBancariosEndereco',
  ChequeDadosBancariosLogradouro: 'ChequeDadosBancariosLogradouro',
  ChequeDadosBancariosNumero: 'ChequeDadosBancariosNumero',
  ChequeDadosBancariosComplemento: 'ChequeDadosBancariosComplemento',
  ChequeDadosBancariosBairro: 'ChequeDadosBancariosBairro',
  ChequeDadosBancariosCep: 'ChequeDadosBancariosCep',
  ChequeDadosBancariosCidade: 'ChequeDadosBancariosCidade',
  ChequeDadosBancariosUF: 'ChequeDadosBancariosUF',
  ChequeDadosBancariosBanco: 'ChequeDadosBancariosBanco',
  ChequeDadosBancariosTelefoneDDD: 'ChequeDadosBancariosTelefoneDDD',
  ChequeDadosBancariosTelefone: 'ChequeDadosBancariosTelefone',
  ChequeDadosBancariosFaxDDD: 'ChequeDadosBancariosFaxDDD',
  ChequeDadosBancariosFax: 'ChequeDadosBancariosFax',
  Cidade: 'Cidade',
  UF: 'UF',
  NaturezaAnotacao: 'NaturezaAnotacao',
  ComplementarNaturezaAnotacao: 'ComplementarNaturezaAnotacao'
});

exports.Prisma.SPCMaxiCSFAScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  QuantidadeBanco: 'QuantidadeBanco',
  TitularidadeContaCorrente: 'TitularidadeContaCorrente',
  Cidade: 'Cidade',
  UF: 'UF',
  ChequeNumero: 'ChequeNumero',
  ChequeDigito: 'ChequeDigito',
  ChequeValor: 'ChequeValor',
  ChequeDadosBancariosNumeroAgencia: 'ChequeDadosBancariosNumeroAgencia',
  ChequeDadosBancariosNomeAgencia: 'ChequeDadosBancariosNomeAgencia',
  ChequeDadosBancariosNumeroContaCorrente: 'ChequeDadosBancariosNumeroContaCorrente',
  ChequeDadosBancariosDigitoContaCorrente: 'ChequeDadosBancariosDigitoContaCorrente',
  ChequeDadosBancariosEndereco: 'ChequeDadosBancariosEndereco',
  ChequeDadosBancariosLogradouro: 'ChequeDadosBancariosLogradouro',
  ChequeDadosBancariosNumero: 'ChequeDadosBancariosNumero',
  ChequeDadosBancariosComplemento: 'ChequeDadosBancariosComplemento',
  ChequeDadosBancariosBairro: 'ChequeDadosBancariosBairro',
  ChequeDadosBancariosCep: 'ChequeDadosBancariosCep',
  ChequeDadosBancariosCidade: 'ChequeDadosBancariosCidade',
  ChequeDadosBancariosUF: 'ChequeDadosBancariosUF',
  ChequeDadosBancariosBanco: 'ChequeDadosBancariosBanco',
  ChequeDadosBancariosTelefoneDDD: 'ChequeDadosBancariosTelefoneDDD',
  ChequeDadosBancariosTelefone: 'ChequeDadosBancariosTelefone',
  ChequeDadosBancariosFaxDDD: 'ChequeDadosBancariosFaxDDD',
  ChequeDadosBancariosFax: 'ChequeDadosBancariosFax',
  NaturezaAnotacao: 'NaturezaAnotacao',
  ComplementarNaturezaAnotacao: 'ComplementarNaturezaAnotacao',
  Alinea: 'Alinea',
  Moeda: 'Moeda'
});

exports.Prisma.SPCMaxiDABScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DadosBancariosNumeroAgencia: 'DadosBancariosNumeroAgencia',
  DadosBancariosNomeAgencia: 'DadosBancariosNomeAgencia',
  DadosBancariosNumeroContaCorrente: 'DadosBancariosNumeroContaCorrente',
  DadosBancariosDigitoContaCorrente: 'DadosBancariosDigitoContaCorrente',
  DadosBancariosLogradouro: 'DadosBancariosLogradouro',
  DadosBancariosNumero: 'DadosBancariosNumero',
  DadosBancariosComplemento: 'DadosBancariosComplemento',
  DadosBancariosBairro: 'DadosBancariosBairro',
  DadosBancariosCep: 'DadosBancariosCep',
  DadosBancariosCidade: 'DadosBancariosCidade',
  DadosBancariosUF: 'DadosBancariosUF',
  DadosBancariosBanco: 'DadosBancariosBanco',
  DadosBancariosTelefoneDDD: 'DadosBancariosTelefoneDDD',
  DadosBancariosTelefone: 'DadosBancariosTelefone',
  DadosBancariosFaxDDD: 'DadosBancariosFaxDDD',
  DadosBancariosFax: 'DadosBancariosFax'
});

exports.Prisma.SPCMaxiDIVENScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataOcorrencia: 'DataOcorrencia',
  InstituicaoFinanceira: 'InstituicaoFinanceira',
  Local: 'Local',
  Modalidade: 'Modalidade',
  Titulo: 'Titulo',
  ValorDivida: 'ValorDivida',
  NaturezaAnotacao: 'NaturezaAnotacao',
  Moeda: 'Moeda',
  DataSubjudice: 'DataSubjudice',
  ProcessoSubjudice: 'ProcessoSubjudice',
  MensagemSubjudice: 'MensagemSubjudice'
});

exports.Prisma.SPCMaxiDPVATScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NomeProprietario: 'NomeProprietario',
  Documento: 'Documento',
  Renavam: 'Renavam',
  NumeroDUT: 'NumeroDUT',
  UF: 'UF',
  Placa: 'Placa',
  Exercicio: 'Exercicio',
  DataPagamento: 'DataPagamento',
  DataProcessamento: 'DataProcessamento'
});

exports.Prisma.SPCMaxiECCOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Complemento: 'Complemento',
  Bairro: 'Bairro',
  Cep: 'Cep',
  Cidade: 'Cidade',
  UF: 'UF'
});

exports.Prisma.SPCMaxiFATPRScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  ValorFaturamento: 'ValorFaturamento',
  Mensagem: 'Mensagem'
});

exports.Prisma.SPCMaxiFILIALScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CodigoEmbratel: 'CodigoEmbratel',
  NomeFilial: 'NomeFilial'
});

exports.Prisma.SPCMaxiGEPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Mensagem: 'Mensagem',
  Valor: 'Valor'
});

exports.Prisma.SPCMaxiGRAFIAPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  RazaoSocial: 'RazaoSocial'
});

exports.Prisma.SPCMaxiGRAVScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Chassi: 'Chassi',
  RemarcacaoChassi: 'RemarcacaoChassi',
  Renavam: 'Renavam',
  StatusVeiculo: 'StatusVeiculo',
  UFPlaca: 'UFPlaca',
  Placa: 'Placa',
  UFLicenciamento: 'UFLicenciamento',
  DocumentoFinanciado: 'DocumentoFinanciado',
  NomeFinanciado: 'NomeFinanciado',
  NomeAgente: 'NomeAgente',
  DocumentoAgente: 'DocumentoAgente',
  DataInclusaoGravame: 'DataInclusaoGravame'
});

exports.Prisma.SPCMaxiHICCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataConsultaMaisAntiga: 'DataConsultaMaisAntiga',
  DataConsultaMaisRecente: 'DataConsultaMaisRecente',
  NomeEmpresaUltimaConsulta: 'NomeEmpresaUltimaConsulta',
  QuantidadeConsultas: 'QuantidadeConsultas',
  UltimoChequeNumero: 'UltimoChequeNumero',
  UltimoChequeDigito: 'UltimoChequeDigito',
  UltimoChequeValor: 'UltimoChequeValor',
  UltimoChequeDadosBancariosNumeroAgencia: 'UltimoChequeDadosBancariosNumeroAgencia',
  UltimoChequeDadosBancariosNomeAgencia: 'UltimoChequeDadosBancariosNomeAgencia',
  UltimoChequeDadosBancariosNumeroContaCorrente: 'UltimoChequeDadosBancariosNumeroContaCorrente',
  UltimoChequeDadosBancariosDigitoContaCorrente: 'UltimoChequeDadosBancariosDigitoContaCorrente',
  UltimoChequeDadosBancariosEndereco: 'UltimoChequeDadosBancariosEndereco',
  UltimoChequeDadosBancariosLogradouro: 'UltimoChequeDadosBancariosLogradouro',
  UltimoChequeDadosBancariosNumero: 'UltimoChequeDadosBancariosNumero',
  UltimoChequeDadosBancariosComplemento: 'UltimoChequeDadosBancariosComplemento',
  UltimoChequeDadosBancariosBairro: 'UltimoChequeDadosBancariosBairro',
  UltimoChequeDadosBancariosCep: 'UltimoChequeDadosBancariosCep',
  UltimoChequeDadosBancariosCidade: 'UltimoChequeDadosBancariosCidade',
  UltimoChequeDadosBancariosUF: 'UltimoChequeDadosBancariosUF',
  UltimoChequeDadosBancariosBanco: 'UltimoChequeDadosBancariosBanco'
});

exports.Prisma.SPCMaxiHICHDDScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataConsultaMaisAntiga: 'DataConsultaMaisAntiga',
  DataConsultaMaisRecente: 'DataConsultaMaisRecente',
  NomeEmpresaUltimaConsulta: 'NomeEmpresaUltimaConsulta',
  QuantidadeConsultas: 'QuantidadeConsultas',
  ChequeNumero: 'ChequeNumero',
  ChequeDigito: 'ChequeDigito',
  ChequeValor: 'ChequeValor',
  ChequeDadosBancariosNumeroAgencia: 'ChequeDadosBancariosNumeroAgencia',
  ChequeDadosBancariosNomeAgencia: 'ChequeDadosBancariosNomeAgencia',
  ChequeDadosBancariosNumeroContaCorrente: 'ChequeDadosBancariosNumeroContaCorrente',
  ChequeDadosBancariosDigitoContaCorrente: 'ChequeDadosBancariosDigitoContaCorrente',
  ChequeDadosBancariosEndereco: 'ChequeDadosBancariosEndereco',
  ChequeDadosBancariosLogradouro: 'ChequeDadosBancariosLogradouro',
  ChequeDadosBancariosNumero: 'ChequeDadosBancariosNumero',
  ChequeDadosBancariosComplemento: 'ChequeDadosBancariosComplemento',
  ChequeDadosBancariosBairro: 'ChequeDadosBancariosBairro',
  ChequeDadosBancariosCep: 'ChequeDadosBancariosCep',
  ChequeDadosBancariosCidade: 'ChequeDadosBancariosCidade',
  ChequeDadosBancariosUF: 'ChequeDadosBancariosUF',
  ChequeDadosBancariosBanco: 'ChequeDadosBancariosBanco'
});

exports.Prisma.SPCMaxiHISCHScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataConsultaMaisAntiga: 'DataConsultaMaisAntiga',
  DataConsultaMaisRecente: 'DataConsultaMaisRecente',
  NomeEmpresaUltimaConsulta: 'NomeEmpresaUltimaConsulta',
  QuantidadeConsultas: 'QuantidadeConsultas',
  ChequeNumero: 'ChequeNumero',
  ChequeDigito: 'ChequeDigito',
  ChequeValor: 'ChequeValor',
  ChequeDadosBancariosNumeroAgencia: 'ChequeDadosBancariosNumeroAgencia',
  ChequeDadosBancariosNomeAgencia: 'ChequeDadosBancariosNomeAgencia',
  ChequeDadosBancariosNumeroContaCorrente: 'ChequeDadosBancariosNumeroContaCorrente',
  ChequeDadosBancariosDigitoContaCorrente: 'ChequeDadosBancariosDigitoContaCorrente',
  ChequeDadosBancariosEndereco: 'ChequeDadosBancariosEndereco',
  ChequeDadosBancariosLogradouro: 'ChequeDadosBancariosLogradouro',
  ChequeDadosBancariosNumero: 'ChequeDadosBancariosNumero',
  ChequeDadosBancariosComplemento: 'ChequeDadosBancariosComplemento',
  ChequeDadosBancariosBairro: 'ChequeDadosBancariosBairro',
  ChequeDadosBancariosCep: 'ChequeDadosBancariosCep',
  ChequeDadosBancariosCidade: 'ChequeDadosBancariosCidade',
  ChequeDadosBancariosUF: 'ChequeDadosBancariosUF',
  ChequeDadosBancariosBanco: 'ChequeDadosBancariosBanco'
});

exports.Prisma.SPCMaxiHPNEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DescricaoPeriodo: 'DescricaoPeriodo',
  PercentualPeriodo: 'PercentualPeriodo',
  QuantidadeFontes: 'QuantidadeFontes',
  QuantidadePeriodo: 'QuantidadePeriodo'
});

exports.Prisma.SPCMaxiINADScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  FraseStatusEmpresa: 'FraseStatusEmpresa'
});

exports.Prisma.SPCMaxiINCOMPScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NumeroFuncionarios: 'NumeroFuncionarios',
  PorteEmpresa: 'PorteEmpresa'
});

exports.Prisma.SPCMaxiINFCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataAtualizacao: 'DataAtualizacao',
  MensagemObservacoes: 'MensagemObservacoes'
});

exports.Prisma.SPCMaxiINPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataDocumento: 'DataDocumento',
  DataInclusao: 'DataInclusao',
  DataVencimento: 'DataVencimento',
  EntidadeOrigem: 'EntidadeOrigem',
  NumeroProcesso: 'NumeroProcesso',
  Valor: 'Valor',
  Vara: 'Vara',
  Comarca: 'Comarca',
  UF: 'UF'
});

exports.Prisma.SPCMaxiIRMPFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Mensagem: 'Mensagem',
  Valor: 'Valor'
});

exports.Prisma.SPCMaxiIRMPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Mensagem: 'Mensagem',
  Valor: 'Valor'
});

exports.Prisma.SPCMaxiLICRPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataCalculo: 'DataCalculo',
  ValorLimiteCredito: 'ValorLimiteCredito',
  Mensagem: 'Mensagem'
});

exports.Prisma.SPCMaxiLICRSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  MensagemLimite: 'MensagemLimite',
  LimiteSugerido: 'LimiteSugerido'
});

exports.Prisma.SPCMaxiLOVEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NomeProprietario: 'NomeProprietario',
  Placa: 'Placa',
  Renavam: 'Renavam',
  Chassi: 'Chassi',
  NumeroDUT: 'NumeroDUT',
  AnoExercicio: 'AnoExercicio',
  DataProcessamento: 'DataProcessamento',
  IdPagamentoDUT: 'IdPagamentoDUT',
  NumeroBanco: 'NumeroBanco',
  UFDUT: 'UFDUT',
  Documento: 'Documento',
  DataEmissaoGuia: 'DataEmissaoGuia'
});

exports.Prisma.SPCMaxiMEBEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  MensagemTexto: 'MensagemTexto'
});

exports.Prisma.SPCMaxiMECOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Origem: 'Origem',
  Mensagem: 'Mensagem'
});

exports.Prisma.SPCMaxiOBITOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataObito: 'DataObito',
  MsgObito: 'MsgObito',
  CartorioObito: 'CartorioObito'
});

exports.Prisma.SPCMaxiOCUPScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Escolaridade: 'Escolaridade',
  Profissao: 'Profissao',
  Cargo: 'Cargo'
});

exports.Prisma.SPCMaxiPAEMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CargoAdministracao: 'CargoAdministracao',
  CargoDirecao: 'CargoDirecao',
  Condicao: 'Condicao',
  DataEntrada: 'DataEntrada',
  DataSaida: 'DataSaida',
  Documento: 'Documento',
  MunicipioEMBRATEL: 'MunicipioEMBRATEL',
  Nome: 'Nome',
  PorcentualParticipacao: 'PorcentualParticipacao',
  SituacaoDocumento: 'SituacaoDocumento',
  TipoRelacionamento: 'TipoRelacionamento',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao',
  ValorParticipacao: 'ValorParticipacao',
  Nacionalidade: 'Nacionalidade',
  EstadoEMBRATEL: 'EstadoEMBRATEL'
});

exports.Prisma.SPCMaxiPAFAScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataAcao: 'DataAcao',
  DescricaoTipoParticipacao: 'DescricaoTipoParticipacao',
  EmpresaTipoParticipacao: 'EmpresaTipoParticipacao',
  QualificacaoParticipanteEmpresaFalida: 'QualificacaoParticipanteEmpresaFalida',
  TipoAcao: 'TipoAcao',
  NaturezaAnotacao: 'NaturezaAnotacao',
  ComplementarNaturezaAnotacao: 'ComplementarNaturezaAnotacao',
  Vara: 'Vara',
  Comarca: 'Comarca',
  UF: 'UF'
});

exports.Prisma.SPCMaxiPEFIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Avalista: 'Avalista',
  Contrato: 'Contrato',
  DataOcorrencia: 'DataOcorrencia',
  Filial: 'Filial',
  IndicadorSubjudice: 'IndicadorSubjudice',
  Origem: 'Origem',
  TituloOcorrencia: 'TituloOcorrencia',
  ValorPendencia: 'ValorPendencia',
  Moeda: 'Moeda',
  NaturezaAnotacao: 'NaturezaAnotacao',
  ComplementoNaturezaAnotacao: 'ComplementoNaturezaAnotacao',
  PracaSubjudice: 'PracaSubjudice',
  DistritoSubjudice: 'DistritoSubjudice',
  VaraSubjudice: 'VaraSubjudice',
  DataSubjudice: 'DataSubjudice',
  ProcessoSubjudice: 'ProcessoSubjudice',
  MensagemSubjudice: 'MensagemSubjudice',
  Cidade: 'Cidade',
  UF: 'UF'
});

exports.Prisma.SPCMaxiPROTScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CartaAnuencia: 'CartaAnuencia',
  DataCartaAnuencia: 'DataCartaAnuencia',
  DataInclusao: 'DataInclusao',
  DataProtesto: 'DataProtesto',
  RequerenteCredor: 'RequerenteCredor',
  NumeroProtesto: 'NumeroProtesto',
  Valor: 'Valor',
  Cartorio: 'Cartorio',
  Cidade: 'Cidade',
  UF: 'UF',
  NaturezaAnotacao: 'NaturezaAnotacao',
  PracaSubjudice: 'PracaSubjudice',
  DistritoSubjudice: 'DistritoSubjudice',
  VaraSubjudice: 'VaraSubjudice',
  DataSubjudice: 'DataSubjudice',
  ProcessoSubjudice: 'ProcessoSubjudice',
  MensagemSubjudice: 'MensagemSubjudice',
  Moeda: 'Moeda'
});

exports.Prisma.SPCMaxiPRPRScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DescricaoPrincipaisProdutos: 'DescricaoPrincipaisProdutos'
});

exports.Prisma.SPCMaxiQSMCPJScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  ControleSocietarioDetalhesSocio1DataEntrada: 'ControleSocietarioDetalhesSocio1DataEntrada',
  ControleSocietarioDetalhesSocio1Documento: 'ControleSocietarioDetalhesSocio1Documento',
  ControleSocietarioDetalhesSocio1Nacionalidade: 'ControleSocietarioDetalhesSocio1Nacionalidade',
  ControleSocietarioDetalhesSocio1Nome: 'ControleSocietarioDetalhesSocio1Nome',
  ControleSocietarioDetalhesSocio1Percentual: 'ControleSocietarioDetalhesSocio1Percentual',
  ControleSocietarioDetalhesSocio1TipoPessoa: 'ControleSocietarioDetalhesSocio1TipoPessoa',
  ControleSocietarioDetalhesSocio2PercentualCapitalVotante: 'ControleSocietarioDetalhesSocio2PercentualCapitalVotante',
  AdministrativoCargo: 'AdministrativoCargo',
  AdministrativoDocumento: 'AdministrativoDocumento',
  AdministrativoNacionalidade: 'AdministrativoNacionalidade',
  AdministrativoNome: 'AdministrativoNome',
  AdministrativoTipoPessoa: 'AdministrativoTipoPessoa',
  InformacoesAdicionais1Cidade: 'InformacoesAdicionais1Cidade',
  InformacoesAdicionais1DataNascimento: 'InformacoesAdicionais1DataNascimento',
  InformacoesAdicionais1Documento: 'InformacoesAdicionais1Documento',
  InformacoesAdicionais1Cep: 'InformacoesAdicionais1Cep',
  InformacoesAdicionais1Rg: 'InformacoesAdicionais1Rg',
  InformacoesAdicionais1DDD: 'InformacoesAdicionais1DDD',
  InformacoesAdicionais1UF: 'InformacoesAdicionais1UF',
  InformacoesAdicionais1Vinculo: 'InformacoesAdicionais1Vinculo',
  InformacoesAdicionais2Logradouro: 'InformacoesAdicionais2Logradouro',
  InformacoesAdicionais2Bairro: 'InformacoesAdicionais2Bairro',
  InformacoesAdicionais3Nome: 'InformacoesAdicionais3Nome',
  RestricoesDataUltimaOcorrencia: 'RestricoesDataUltimaOcorrencia',
  RestricoesDescricao: 'RestricoesDescricao',
  RestricoesQuantidadeOcorrencias: 'RestricoesQuantidadeOcorrencias',
  RestricoesValorTotalOcorrencia: 'RestricoesValorTotalOcorrencia',
  SemRestricoes_descricao: 'SemRestricoes_descricao',
  SemRestricoesmensagem: 'SemRestricoesmensagem',
  Mensagem: 'Mensagem',
  QuadroAdministrativoDetalhesSocio1DataEntrada: 'QuadroAdministrativoDetalhesSocio1DataEntrada',
  QuadroAdministrativoDetalhesSocio1Documento: 'QuadroAdministrativoDetalhesSocio1Documento',
  QuadroAdministrativoDetalhesSocio1Nacionalidade: 'QuadroAdministrativoDetalhesSocio1Nacionalidade',
  QuadroAdministrativoDetalhesSocio1Nome: 'QuadroAdministrativoDetalhesSocio1Nome',
  QuadroAdministrativoDetalhesSocio1Percentual: 'QuadroAdministrativoDetalhesSocio1Percentual',
  QuadroAdministrativoDetalhesSocio1TipoPessoa: 'QuadroAdministrativoDetalhesSocio1TipoPessoa',
  QuadroAdministrativoDetalhesSocio2PercentualCapitalVotante: 'QuadroAdministrativoDetalhesSocio2PercentualCapitalVotante'
});

exports.Prisma.SPCMaxiRECOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataConsulta: 'DataConsulta',
  QuantidadeConsultaBanco: 'QuantidadeConsultaBanco',
  QuantidadeConsultaEmpresa: 'QuantidadeConsultaEmpresa'
});

exports.Prisma.SPCMaxiREFIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Avalista: 'Avalista',
  Contrato: 'Contrato',
  DataOcorrencia: 'DataOcorrencia',
  Filial: 'Filial',
  IndicadorSubjudice: 'IndicadorSubjudice',
  Origem: 'Origem',
  TituloOcorrencia: 'TituloOcorrencia',
  ValorPendencia: 'ValorPendencia',
  NaturezaAnotacao: 'NaturezaAnotacao',
  ComplementoNaturezaAnotacao: 'ComplementoNaturezaAnotacao',
  PracaSubjudice: 'PracaSubjudice',
  DistritoSubjudice: 'DistritoSubjudice',
  VaraSubjudice: 'VaraSubjudice',
  DataSubjudice: 'DataSubjudice',
  ProcessoSubjudice: 'ProcessoSubjudice',
  MensagemSubjudice: 'MensagemSubjudice',
  DadosBancariosNumeroAgencia: 'DadosBancariosNumeroAgencia',
  DadosBancariosNomeAgencia: 'DadosBancariosNomeAgencia',
  DadosBancariosNumeroContaCorrente: 'DadosBancariosNumeroContaCorrente',
  DadosBancariosDigitoContaCorrente: 'DadosBancariosDigitoContaCorrente',
  DadosBancariosLogradouro: 'DadosBancariosLogradouro',
  DadosBancariosNumero: 'DadosBancariosNumero',
  DadosBancariosComplemento: 'DadosBancariosComplemento',
  DadosBancariosBairro: 'DadosBancariosBairro',
  DadosBancariosCep: 'DadosBancariosCep',
  DadosBancariosCidade: 'DadosBancariosCidade',
  DadosBancariosUF: 'DadosBancariosUF',
  DadosBancariosBanco: 'DadosBancariosBanco',
  DadosBancariosTelefoneDDD: 'DadosBancariosTelefoneDDD',
  DadosBancariosTelefone: 'DadosBancariosTelefone',
  DadosBancariosFaxDDD: 'DadosBancariosFaxDDD',
  DadosBancariosFax: 'DadosBancariosFax',
  Cidade: 'Cidade',
  UF: 'UF'
});

exports.Prisma.SPCMaxiREFNEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataPotencial: 'DataPotencial',
  DescricaoNegocio: 'DescricaoNegocio',
  MediaPotencial: 'MediaPotencial',
  ValorPotencial: 'ValorPotencial'
});

exports.Prisma.SPCMaxiRENESScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Chassi: 'Chassi',
  Placa: 'Placa',
  UFPlaca: 'UFPlaca',
  Motor: 'Motor',
  CaixaCambio: 'CaixaCambio',
  Renavam: 'Renavam',
  Municipio: 'Municipio',
  SituacaoVeiculo: 'SituacaoVeiculo',
  RemarcacaoChassi: 'RemarcacaoChassi',
  TipoVeiculo: 'TipoVeiculo',
  MarcaModelo: 'MarcaModelo',
  EspecieVeiculo: 'EspecieVeiculo',
  TipoCarroceria: 'TipoCarroceria',
  CorVeiculo: 'CorVeiculo',
  AnoModelo: 'AnoModelo',
  AnoFabricacao: 'AnoFabricacao',
  PotenciaVeiculo: 'PotenciaVeiculo',
  Cilindradas: 'Cilindradas',
  Combustivel: 'Combustivel',
  TracaoVeiculo: 'TracaoVeiculo',
  PesoBrutoVeiculo: 'PesoBrutoVeiculo',
  CapacidadeCarga: 'CapacidadeCarga',
  Procedencia: 'Procedencia',
  DocumentoProprietario: 'DocumentoProprietario',
  NumeroCarroceria: 'NumeroCarroceria',
  QuantidadePassageiros: 'QuantidadePassageiros',
  Restricao1: 'Restricao1',
  Restricao2: 'Restricao2',
  Restricao3: 'Restricao3',
  Restricao4: 'Restricao4',
  NumeroEixo: 'NumeroEixo',
  NumeroEixoTraseiro: 'NumeroEixoTraseiro',
  NumeroEixoAuxiliar: 'NumeroEixoAuxiliar',
  NomeProprietario: 'NomeProprietario',
  DataLimiteRestTrib: 'DataLimiteRestTrib',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao',
  CategoriaVeiculo: 'CategoriaVeiculo',
  DebitoIPVA: 'DebitoIPVA',
  DescricaoDebitoIPVA: 'DescricaoDebitoIPVA',
  DebitoMultas: 'DebitoMultas',
  DescricaoDebitoMultas: 'DescricaoDebitoMultas',
  DebitoDPVAT: 'DebitoDPVAT',
  DebitoLicenciamento: 'DebitoLicenciamento'
});

exports.Prisma.SPCMaxiRENFEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Renavam: 'Renavam',
  AnoModelo: 'AnoModelo',
  AnoFabricacao: 'AnoFabricacao',
  PotenciaVeiculo: 'PotenciaVeiculo',
  Cilindradas: 'Cilindradas',
  QuantidadePassageiros: 'QuantidadePassageiros',
  NumeroEixo: 'NumeroEixo',
  TracaoVeiculo: 'TracaoVeiculo',
  PesoBrutoVeiculo: 'PesoBrutoVeiculo',
  CapacidadeCarga: 'CapacidadeCarga',
  Chassi: 'Chassi',
  Placa: 'Placa',
  UFPlaca: 'UFPlaca',
  Motor: 'Motor',
  CaixaCambio: 'CaixaCambio',
  Municipio: 'Municipio',
  SituacaoVeiculo: 'SituacaoVeiculo',
  RemarcacaoChassi: 'RemarcacaoChassi',
  TipoMontagem: 'TipoMontagem',
  TipoVeiculo: 'TipoVeiculo',
  MarcaModelo: 'MarcaModelo',
  EspecieVeiculo: 'EspecieVeiculo',
  TipoCarroceria: 'TipoCarroceria',
  CorVeiculo: 'CorVeiculo',
  Combustivel: 'Combustivel',
  Procedencia: 'Procedencia',
  DocumentoProprietario: 'DocumentoProprietario',
  NomeProprietario: 'NomeProprietario',
  NumeroCarroceria: 'NumeroCarroceria',
  Restricao1: 'Restricao1',
  Restricao2: 'Restricao2',
  Restricao3: 'Restricao3',
  Restricao4: 'Restricao4',
  NumeroEixoTraseiro: 'NumeroEixoTraseiro',
  NumeroEixoAuxiliar: 'NumeroEixoAuxiliar',
  DocumentoImportador: 'DocumentoImportador',
  NomeImportador: 'NomeImportador',
  LiberadoPeloOrgao: 'LiberadoPeloOrgao',
  NumeroRedaAduaneiro: 'NumeroRedaAduaneiro',
  NumeroDeclarImportacao: 'NumeroDeclarImportacao',
  DataRegistroAduaneira: 'DataRegistroAduaneira',
  NumeroIdFaturado: 'NumeroIdFaturado',
  NomeFaturado: 'NomeFaturado',
  UFDestFaturamento: 'UFDestFaturamento',
  DataLimiteRestTrib: 'DataLimiteRestTrib',
  TipoOperacaoImpVeiculo: 'TipoOperacaoImpVeiculo',
  NumeroProcessoImportacao: 'NumeroProcessoImportacao',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao'
});

exports.Prisma.SPCMaxiREPRSScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  MensagemFornecedor: 'MensagemFornecedor',
  Mediana: 'Mediana',
  FaixaRendaDescricao: 'FaixaRendaDescricao',
  FaixaRendaProbabilidade: 'FaixaRendaProbabilidade',
  FaixaRendaCode: 'FaixaRendaCode',
  FaixaRendaId: 'FaixaRendaId'
});

exports.Prisma.SPCMaxiRICRScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Pontuacao: 'Pontuacao',
  ProbabilidadeInadimplencia: 'ProbabilidadeInadimplencia',
  MensagemRetorno: 'MensagemRetorno'
});

exports.Prisma.SPCMaxiRMAFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataRelacionamentoMaisAntigo: 'DataRelacionamentoMaisAntigo'
});

exports.Prisma.SPCMaxiROFUScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Chassi: 'Chassi',
  Placa: 'Placa',
  UFPlaca: 'UFPlaca',
  MunicipioEmplacamento: 'MunicipioEmplacamento',
  MarcaModelo: 'MarcaModelo',
  CorVeiculo: 'CorVeiculo',
  AnoModelo: 'AnoModelo',
  AnoFabricacao: 'AnoFabricacao',
  Ocorrencia: 'Ocorrencia',
  DataOcorrencia: 'DataOcorrencia',
  BoletimOcorrencia: 'BoletimOcorrencia',
  AnoOcorrencia: 'AnoOcorrencia',
  UFOcorrencia: 'UFOcorrencia'
});

exports.Prisma.SPCMaxiRSDMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataFator: 'DataFator',
  FatorPrinad: 'FatorPrinad',
  FatorRiskscoring: 'FatorRiskscoring',
  HorizonteTempo: 'HorizonteTempo',
  MensagemInterpretacao: 'MensagemInterpretacao',
  MensagemPrinad: 'MensagemPrinad',
  DataMensagemRiskscoring: 'DataMensagemRiskscoring',
  MensagemRiskscoring: 'MensagemRiskscoring'
});

exports.Prisma.SPCMaxiRSSMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataFator: 'DataFator',
  FatorPrinad: 'FatorPrinad',
  FatorRiskscoring: 'FatorRiskscoring',
  HorizonteTempo: 'HorizonteTempo',
  MensagemInterpretacao: 'MensagemInterpretacao',
  MensagemPrinad: 'MensagemPrinad',
  DataMensagemRiskscoring: 'DataMensagemRiskscoring',
  MensagemRiskscoring: 'MensagemRiskscoring'
});

exports.Prisma.SPCMaxiSOCIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CargoAdministracao: 'CargoAdministracao',
  CargoDirecao: 'CargoDirecao',
  Condicao: 'Condicao',
  DataEntrada: 'DataEntrada',
  DataSaida: 'DataSaida',
  Documento: 'Documento',
  MunicipioEMBRATEL: 'MunicipioEMBRATEL',
  Nome: 'Nome',
  PorcentualParticipacao: 'PorcentualParticipacao',
  SituacaoDocumento: 'SituacaoDocumento',
  TipoRelacionamento: 'TipoRelacionamento',
  DataUltimaAtualizacao: 'DataUltimaAtualizacao',
  ValorParticipacao: 'ValorParticipacao',
  Nacionalidade: 'Nacionalidade',
  EstadoEMBRATEL: 'EstadoEMBRATEL'
});

exports.Prisma.SPCMaxiSPCScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  NomeAssociado: 'NomeAssociado',
  CodigoEntidade: 'CodigoEntidade',
  ContaContrato: 'ContaContrato',
  DataInclusao: 'DataInclusao',
  DataVencimento: 'DataVencimento',
  Reservado: 'Reservado',
  NomeEntidade: 'NomeEntidade',
  Contrato: 'Contrato',
  RegistroInstituicaoFinanceira: 'RegistroInstituicaoFinanceira',
  RegistroRelevante: 'RegistroRelevante',
  CompradorFiadorAvalista: 'CompradorFiadorAvalista',
  Valor: 'Valor',
  CidadeAssociado: 'CidadeAssociado',
  UF: 'UF',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiSSDMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Classe: 'Classe',
  Horizonte: 'Horizonte',
  MensagemInterpretativaScore: 'MensagemInterpretativaScore',
  MensagemInterpretativaProbabilidade: 'MensagemInterpretativaProbabilidade',
  MensagemSemaforo: 'MensagemSemaforo',
  Probabilidade: 'Probabilidade',
  Score: 'Score',
  TipoClienteScore: 'TipoClienteScore'
});

exports.Prisma.SPCMaxiSSTMScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Classe: 'Classe',
  Horizonte: 'Horizonte',
  MensagemInterpretativaScore: 'MensagemInterpretativaScore',
  MensagemInterpretativaProbabilidade: 'MensagemInterpretativaProbabilidade',
  MensagemSemaforo: 'MensagemSemaforo',
  Probabilidade: 'Probabilidade',
  Score: 'Score',
  TipoClienteScore: 'TipoClienteScore'
});

exports.Prisma.SPCMaxiScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Em: 'Em',
  EntTipoDeConsulta: 'EntTipoDeConsulta',
  EntCodigoProduto: 'EntCodigoProduto',
  EntCPF: 'EntCPF',
  EntCEP: 'EntCEP',
  EntTelefone: 'EntTelefone',
  EntUtilizaCMC7: 'EntUtilizaCMC7',
  EntBancoCHInicial: 'EntBancoCHInicial',
  EntAgenciaCHInicial: 'EntAgenciaCHInicial',
  EntContaCorrenteCHInicial: 'EntContaCorrenteCHInicial',
  EntDigitoContaCorrenteCHInicial: 'EntDigitoContaCorrenteCHInicial',
  EntNumeroCHInicial: 'EntNumeroCHInicial',
  EntDigitoCHInicial: 'EntDigitoCHInicial',
  EntCMC71CHInicial: 'EntCMC71CHInicial',
  EntCMC72CHInicial: 'EntCMC72CHInicial',
  EntCMC73CHInicial: 'EntCMC73CHInicial',
  EntCHDetalhadoNumero: 'EntCHDetalhadoNumero',
  EntCHDetalhadoDigito: 'EntCHDetalhadoDigito',
  EntCHDetalhadoDataDeposito: 'EntCHDetalhadoDataDeposito',
  EntCHDetalhadoValor: 'EntCHDetalhadoValor',
  EntCEPOrigem: 'EntCEPOrigem',
  EntCodigoEstacaoConsultante: 'EntCodigoEstacaoConsultante',
  EntRG: 'EntRG',
  EntDataNascimentoRG: 'EntDataNascimentoRG',
  EntUFEmissaoRG: 'EntUFEmissaoRG',
  EntChassi: 'EntChassi',
  EntRenavam: 'EntRenavam',
  EntMotor: 'EntMotor',
  EntNumeroCaixaCambio: 'EntNumeroCaixaCambio',
  EntPlaca: 'EntPlaca',
  EntSiglaEstadualAuto: 'EntSiglaEstadualAuto',
  Restricao: 'Restricao',
  DataHoraConsulta: 'DataHoraConsulta',
  Protocolo: 'Protocolo',
  Operador: 'Operador',
  CPF: 'CPF',
  NomePF: 'NomePF',
  DataNascimento: 'DataNascimento',
  NomePai: 'NomePai',
  NomeMae: 'NomeMae',
  Sexo: 'Sexo',
  EstadoCivil: 'EstadoCivil',
  NumeroTituloEleitor: 'NumeroTituloEleitor',
  Email: 'Email',
  NumeroRG: 'NumeroRG',
  EstadoRG: 'EstadoRG',
  Signo: 'Signo',
  SituacaoCPF: 'SituacaoCPF',
  Idade: 'Idade',
  EnderecoPFLogradouro: 'EnderecoPFLogradouro',
  EnderecoPFNumero: 'EnderecoPFNumero',
  EnderecoPFComplemento: 'EnderecoPFComplemento',
  EnderecoPFBairro: 'EnderecoPFBairro',
  EnderecoPFCep: 'EnderecoPFCep',
  EnderecoPFCidade: 'EnderecoPFCidade',
  EnderecoPFUF: 'EnderecoPFUF',
  TelefoneResidencialDDD: 'TelefoneResidencialDDD',
  TelefoneResidencial: 'TelefoneResidencial',
  TelefoneCelularDDD: 'TelefoneCelularDDD',
  TelefoneCelular: 'TelefoneCelular',
  TelefoneComercialDDD: 'TelefoneComercialDDD',
  TelefoneComercial: 'TelefoneComercial',
  FaxPFDDD: 'FaxPFDDD',
  FaxPF: 'FaxPF',
  CNPJ: 'CNPJ',
  NomeComercial: 'NomeComercial',
  RazaoSocial: 'RazaoSocial',
  DataFundacao: 'DataFundacao',
  InscricaoEstadual: 'InscricaoEstadual',
  ValorCapitalSocial: 'ValorCapitalSocial',
  NumeroNIRENIRC: 'NumeroNIRENIRC',
  RazaoSocialAnterior: 'RazaoSocialAnterior',
  SituacaoCNPJ: 'SituacaoCNPJ',
  SituacaoInscricaoEstadual: 'SituacaoInscricaoEstadual',
  NaturezaJuridica: 'NaturezaJuridica',
  AtividadeEconomicaPrincipal: 'AtividadeEconomicaPrincipal',
  EnderecoPJLogradouro: 'EnderecoPJLogradouro',
  EnderecoPJNumero: 'EnderecoPJNumero',
  EnderecoPJComplemento: 'EnderecoPJComplemento',
  EnderecoPJBairro: 'EnderecoPJBairro',
  EnderecoPJCep: 'EnderecoPJCep',
  EnderecoPJCidade: 'EnderecoPJCidade',
  EnderecoPJUF: 'EnderecoPJUF',
  TelefonePJDDD: 'TelefonePJDDD',
  TelefonePJ: 'TelefonePJ',
  FaxPJDDD: 'FaxPJDDD',
  FaxPJ: 'FaxPJ',
  EmailPJ: 'EmailPJ',
  HomePage: 'HomePage'
});

exports.Prisma.SPCMaxiTECOAScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Nome: 'Nome',
  TempoInstalacao: 'TempoInstalacao',
  TipoLogradouro: 'TipoLogradouro',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Complemento: 'Complemento',
  Bairro: 'Bairro',
  Cep: 'Cep',
  Cidade: 'Cidade',
  UF: 'UF',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiTECOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Nome: 'Nome',
  TempoInstalacao: 'TempoInstalacao',
  TipoLogradouro: 'TipoLogradouro',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Complemento: 'Complemento',
  Bairro: 'Bairro',
  Cep: 'Cep',
  Cidade: 'Cidade',
  UF: 'UF',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiTELALScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiTEVIScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Nome: 'Nome',
  TempoInstalacao: 'TempoInstalacao',
  TipoLogradouro: 'TipoLogradouro',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Complemento: 'Complemento',
  Bairro: 'Bairro',
  Cep: 'Cep',
  Cidade: 'Cidade',
  UF: 'UF',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SPCMaxiUCONScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  CNPJCliente: 'CNPJCliente',
  DataConsulta: 'DataConsulta',
  NomeClienteConsultante: 'NomeClienteConsultante',
  QuantidadeConsulta: 'QuantidadeConsulta'
});

exports.Prisma.SPCMaxiUEINScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  Logradouro: 'Logradouro',
  Numero: 'Numero',
  Complemento: 'Complemento',
  Bairro: 'Bairro',
  Cep: 'Cep',
  Cidade: 'Cidade',
  UF: 'UF'
});

exports.Prisma.SPCMaxiUTINScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  SPCMaxi_ID: 'SPCMaxi_ID',
  DataPrimeiraConsulta: 'DataPrimeiraConsulta',
  DataUltimaConsulta: 'DataUltimaConsulta',
  QuantidadeConsulta: 'QuantidadeConsulta',
  TelefoneDDD: 'TelefoneDDD',
  Telefone: 'Telefone'
});

exports.Prisma.SaldoInicialCaixaScalarFieldEnum = makeEnum({
  Carteira: 'Carteira',
  DataSaldo: 'DataSaldo',
  Valor: 'Valor',
  UtilizaNaVisaoFinanceira: 'UtilizaNaVisaoFinanceira'
});

exports.Prisma.SeResultadoScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  seq: 'seq',
  tipo: 'tipo',
  codigo: 'codigo',
  mensagem: 'mensagem'
});

exports.Prisma.SenhasXAcessoScalarFieldEnum = makeEnum({
  Senhas_ID: 'Senhas_ID',
  Acesso_ID: 'Acesso_ID',
  QuantidadeAcessos: 'QuantidadeAcessos',
  Dt_Atualizacao: 'Dt_Atualizacao'
});

exports.Prisma.SerieNFScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome'
});

exports.Prisma.ServicoLocalizacaoCadastroScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  TipoServico: 'TipoServico',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ServicoNFScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  CodTribucaoMunicipio: 'CodTribucaoMunicipio'
});

exports.Prisma.ShAtivacaoMemoriaOpcionalScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ShAtivacaoXProdutoXMaquina_ID: 'ShAtivacaoXProdutoXMaquina_ID',
  ShProdutoXMaquinaXOpcional_ID: 'ShProdutoXMaquinaXOpcional_ID',
  Quando: 'Quando'
});

exports.Prisma.ShAtivacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Quando: 'Quando',
  Quem: 'Quem',
  ValidoAte: 'ValidoAte'
});

exports.Prisma.ShAtivacaoXProdutoXMaquinaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ShProdutoXMaquina_ID: 'ShProdutoXMaquina_ID',
  ShAtivacao_ID: 'ShAtivacao_ID',
  Serial: 'Serial',
  Ativacao: 'Ativacao',
  Quando: 'Quando'
});

exports.Prisma.ShMaquinaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Nome: 'Nome',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ShOpcionalScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  Modulo: 'Modulo',
  CodigoModulo: 'CodigoModulo',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ShProdutoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ShProdutoXMaquinaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  ShProduto_ID: 'ShProduto_ID',
  ShMaquina_ID: 'ShMaquina_ID',
  Sequencia: 'Sequencia',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ShProdutoXMaquinaXOpcionalScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ShProdutoXMaquina_ID: 'ShProdutoXMaquina_ID',
  ShProdutoXOpcional_ID: 'ShProdutoXOpcional_ID',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.ShProdutoXOpcionalScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ShProduto_ID: 'ShProduto_ID',
  ShOpcional_ID: 'ShOpcional_ID',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.SigBorsImportacaoScalarFieldEnum = makeEnum({
  DATA_IMPORTACAO: 'DATA_IMPORTACAO',
  ID_BORDERO: 'ID_BORDERO',
  ATRIBUIDO: 'ATRIBUIDO',
  DATA_ATRIBUICAO: 'DATA_ATRIBUICAO',
  USUARIO_ATRIBUICAO: 'USUARIO_ATRIBUICAO',
  BORDERO: 'BORDERO'
});

exports.Prisma.Sigbdchq_ImportacaoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Bordero: 'Bordero',
  Codigo: 'Codigo',
  Valor: 'Valor',
  CMC7: 'CMC7',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Conta: 'Conta',
  Cheque: 'Cheque',
  Compl: 'Compl',
  Forma: 'Forma',
  Ctrl_ID: 'Ctrl_ID',
  Favorecido: 'Favorecido',
  TipoOperacao: 'TipoOperacao'
});

exports.Prisma.SigborsCarteiraScalarFieldEnum = makeEnum({
  Bordero: 'Bordero',
  Carteira_ID: 'Carteira_ID',
  Calculo: 'Calculo',
  Fator: 'Fator',
  TxEfMin: 'TxEfMin',
  NRecompra: 'NRecompra',
  VRecompra: 'VRecompra',
  VRegrDesagio: 'VRegrDesagio',
  TxServico: 'TxServico',
  Servico: 'Servico',
  Tar_Titulo: 'Tar_Titulo',
  VTarifa: 'VTarifa',
  Tar_Cheque: 'Tar_Cheque',
  VTarifaCheque: 'VTarifaCheque',
  Tar_Expor: 'Tar_Expor',
  ValorReservado: 'ValorReservado',
  GrCliente: 'GrCliente',
  GrFactoring: 'GrFactoring',
  DtNP: 'DtNP',
  OwnerNP: 'OwnerNP',
  DtAditivo: 'DtAditivo',
  OwnerAdt: 'OwnerAdt',
  DtBordero: 'DtBordero',
  OwnerBordero: 'OwnerBordero',
  Reter: 'Reter',
  Titulos: 'Titulos',
  Custo: 'Custo',
  CustoDesagio: 'CustoDesagio',
  CobTarifa: 'CobTarifa',
  Liquido: 'Liquido',
  QTitulos: 'QTitulos',
  Prazo: 'Prazo',
  FlotMedio: 'FlotMedio',
  VctoFace: 'VctoFace',
  PrazoD0: 'PrazoD0',
  FatorVA: 'FatorVA',
  Taxa_Pe: 'Taxa_Pe',
  Taxa_Ef: 'Taxa_Ef',
  FatorAA: 'FatorAA',
  Taxa_Real: 'Taxa_Real',
  Taxa_RealPeriodo: 'Taxa_RealPeriodo',
  AVCEFC: 'AVCEFC',
  AVCFE: 'AVCFE',
  AVIRRComFloat: 'AVIRRComFloat',
  AVIRR: 'AVIRR',
  AVImpostos: 'AVImpostos',
  AVSpreadAA: 'AVSpreadAA',
  AVSpreadAM: 'AVSpreadAM',
  AVVPLR: 'AVVPLR',
  AVVPLUs: 'AVVPLUs',
  AssinaturaAdt: 'AssinaturaAdt',
  OwnerAssinaturaAdt: 'OwnerAssinaturaAdt',
  AssinaturaBordero: 'AssinaturaBordero',
  OwnerAssinaturaBordero: 'OwnerAssinaturaBordero',
  ImpressaoNP: 'ImpressaoNP',
  AssinaturaNP: 'AssinaturaNP',
  OwnerAssinaturaNP: 'OwnerAssinaturaNP',
  RetornoNP: 'RetornoNP',
  OwnerRetornoNP: 'OwnerRetornoNP',
  LiberacaoNP: 'LiberacaoNP',
  OwnerLiberacaoNP: 'OwnerLiberacaoNP',
  VCheque: 'VCheque',
  ContratoNumero: 'ContratoNumero',
  ContratoSequencia: 'ContratoSequencia',
  ContratoAditivo: 'ContratoAditivo',
  Clifor: 'Clifor',
  BacenNatOp_ID: 'BacenNatOp_ID',
  BacenModOp_ID: 'BacenModOp_ID',
  BacenCaracEsp_ID: 'BacenCaracEsp_ID',
  TxIOF: 'TxIOF',
  IOF: 'IOF',
  TxIOFAdicional: 'TxIOFAdicional',
  IOFAdicional: 'IOFAdicional',
  ISS: 'ISS',
  IPMF: 'IPMF',
  RetCOFINSAV: 'RetCOFINSAV',
  RetCOFINSDes: 'RetCOFINSDes',
  RetCSLLAV: 'RetCSLLAV',
  RetCSLLDes: 'RetCSLLDes',
  RetIRRFAV: 'RetIRRFAV',
  RetIRRFDes: 'RetIRRFDes',
  RetPISAV: 'RetPISAV',
  RetPISDes: 'RetPISDes',
  FatorSImpostos: 'FatorSImpostos',
  PagarRetencoes: 'PagarRetencoes',
  RetCOFINSComposto: 'RetCOFINSComposto',
  RetCSLLComposto: 'RetCSLLComposto',
  RetIRRFComposto: 'RetIRRFComposto',
  RetPISComposto: 'RetPISComposto',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  RetImpostos: 'RetImpostos',
  RetemISS: 'RetemISS',
  ValorRepasse: 'ValorRepasse',
  FatorMinimo: 'FatorMinimo',
  VRecompraOutros_: 'VRecompraOutros_',
  VRecompraTitulos_: 'VRecompraTitulos_',
  VRecompraFator: 'VRecompraFator',
  VRecompraFatorOutros: 'VRecompraFatorOutros',
  VRecompraFatorTitulos: 'VRecompraFatorTitulos'
});

exports.Prisma.SigborsCarteiraXCadProfScalarFieldEnum = makeEnum({
  Bordero: 'Bordero',
  Carteira_ID: 'Carteira_ID',
  CadProf_ID: 'CadProf_ID'
});

exports.Prisma.SigborsCarteiraXCadSocioScalarFieldEnum = makeEnum({
  Bordero: 'Bordero',
  Carteira_ID: 'Carteira_ID',
  CadSocio_ID: 'CadSocio_ID'
});

exports.Prisma.SigborsVACarteiraScalarFieldEnum = makeEnum({
  Bordero: 'Bordero',
  Carteira_ID: 'Carteira_ID',
  IPMF: 'IPMF',
  VTarifa: 'VTarifa',
  VTarifaCheque: 'VTarifaCheque',
  CobTarifa: 'CobTarifa'
});

exports.Prisma.SigborsVAScalarFieldEnum = makeEnum({
  bordero: 'bordero',
  vtarifa: 'vtarifa',
  vtarifacheque: 'vtarifacheque',
  ipmf: 'ipmf',
  vtarifacs: 'vtarifacs',
  vtarifachequecs: 'vtarifachequecs',
  cobtarifa: 'cobtarifa',
  cobtarifaCS: 'cobtarifaCS',
  vtarifafidc: 'vtarifafidc',
  vtarifachequefidc: 'vtarifachequefidc',
  cobtarifafidc: 'cobtarifafidc',
  CPMFTr: 'CPMFTr',
  vtarifafidc2: 'vtarifafidc2',
  vtarifachequefidc2: 'vtarifachequefidc2',
  cobtarifafidc2: 'cobtarifafidc2'
});

exports.Prisma.SigborsXConsultaCreditoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Bordero: 'Bordero',
  Carteira_ID: 'Carteira_ID',
  TipoConsultaCredito_ID: 'TipoConsultaCredito_ID',
  Sigcad_ID: 'Sigcad_ID',
  CMC7: 'CMC7',
  CNPJCPF: 'CNPJCPF',
  Data: 'Data',
  Valor: 'Valor',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou'
});

exports.Prisma.SigborsXFatorCFEScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  FatorCFE_ID: 'FatorCFE_ID',
  Bordero: 'Bordero',
  Fator: 'Fator',
  FatorSImp: 'FatorSImp',
  AvCfe: 'AvCfe',
  AvCefc: 'AvCefc',
  AvIrr: 'AvIrr',
  AvIrrComFloat: 'AvIrrComFloat',
  AvSpreadam: 'AvSpreadam',
  AvSpreadaa: 'AvSpreadaa',
  AvVplr: 'AvVplr',
  AvVplUS: 'AvVplUS',
  AvVporUS: 'AvVporUS',
  IssDestacado: 'IssDestacado',
  AvCfeFIDC: 'AvCfeFIDC',
  AvCefcFIDC: 'AvCefcFIDC',
  AvIrrFIDC: 'AvIrrFIDC',
  AvIrrFIDCComFloat: 'AvIrrFIDCComFloat',
  AvSpreadamFIDC: 'AvSpreadamFIDC',
  AvSpreadaaFIDC: 'AvSpreadaaFIDC',
  AvVplrFIDC: 'AvVplrFIDC',
  AvVplUSFIDC: 'AvVplUSFIDC',
  AvVporUSFIDC: 'AvVporUSFIDC',
  AvCfeFIDC2: 'AvCfeFIDC2',
  AvCefcFIDC2: 'AvCefcFIDC2',
  AvIrrFIDC2: 'AvIrrFIDC2',
  AvIrrFIDC2ComFloat: 'AvIrrFIDC2ComFloat',
  AvSpreadamFIDC2: 'AvSpreadamFIDC2',
  AvSpreadaaFIDC2: 'AvSpreadaaFIDC2',
  AvVplrFIDC2: 'AvVplrFIDC2',
  AvVplUSFIDC2: 'AvVplUSFIDC2',
  AvVporUSFIDC2: 'AvVporUSFIDC2',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemEliminou: 'QuemEliminou'
});

exports.Prisma.Sigbors_ImportacaoScalarFieldEnum = makeEnum({
  Id: 'Id',
  Bordero: 'Bordero',
  Control: 'Control',
  Data: 'Data',
  DtLiberacao: 'DtLiberacao',
  DataRecalculo: 'DataRecalculo',
  Dt_Atualizacao: 'Dt_Atualizacao',
  CliFor: 'CliFor',
  PJuridica: 'PJuridica',
  Liberado: 'Liberado',
  EstadoBordero: 'EstadoBordero',
  AtualmenteCom: 'AtualmenteCom',
  Flot: 'Flot',
  Owner: 'Owner',
  Calculo: 'Calculo',
  Classificacao: 'Classificacao',
  FormulaUtilizada: 'FormulaUtilizada',
  Fator: 'Fator',
  TxEfMin: 'TxEfMin',
  FatorSImpostos: 'FatorSImpostos',
  TxCOFINS: 'TxCOFINS',
  TxCSLL: 'TxCSLL',
  TxIR: 'TxIR',
  TxPIS: 'TxPIS',
  FatorAjustado: 'FatorAjustado',
  CalculoFIDC: 'CalculoFIDC',
  FatorFIDC: 'FatorFIDC',
  TxEfMinFIDC: 'TxEfMinFIDC',
  CalculoFIDC2: 'CalculoFIDC2',
  FatorFIDC2: 'FatorFIDC2',
  TxEfMinFIDC2: 'TxEfMinFIDC2',
  NRecompra: 'NRecompra',
  VRecompra: 'VRecompra',
  VRegrDesagio: 'VRegrDesagio',
  TxServico: 'TxServico',
  Servico: 'Servico',
  RecDespesasTr: 'RecDespesasTr',
  Tar_Titulo: 'Tar_Titulo',
  VTarifa: 'VTarifa',
  VTarifaCS: 'VTarifaCS',
  Tar_Cheque: 'Tar_Cheque',
  VTarifaCheque: 'VTarifaCheque',
  VTarifaChequeCS: 'VTarifaChequeCS',
  Tar_Expor: 'Tar_Expor',
  TxServicoTr: 'TxServicoTr',
  ServicoCS: 'ServicoCS',
  ISSDestacado: 'ISSDestacado',
  RetemISS: 'RetemISS',
  TxISS: 'TxISS',
  ISS: 'ISS',
  ISSTr: 'ISSTr',
  TxIPMF: 'TxIPMF',
  IPMF: 'IPMF',
  CPMFTr: 'CPMFTr',
  TxIOF: 'TxIOF',
  IOF: 'IOF',
  NaoCobrarIOF: 'NaoCobrarIOF',
  NRecompraFIDC: 'NRecompraFIDC',
  VRecompraFIDC: 'VRecompraFIDC',
  VRegrDesagioFIDC: 'VRegrDesagioFIDC',
  TxServicoFIDC: 'TxServicoFIDC',
  ServicoFIDC: 'ServicoFIDC',
  Tar_TituloFIDC: 'Tar_TituloFIDC',
  VTarifaFIDC: 'VTarifaFIDC',
  Tar_ChequeFIDC: 'Tar_ChequeFIDC',
  VTarifaChequeFIDC: 'VTarifaChequeFIDC',
  Tar_ExporFIDC: 'Tar_ExporFIDC',
  NRecompraFIDC2: 'NRecompraFIDC2',
  VRecompraFIDC2: 'VRecompraFIDC2',
  VRegrDesagioFIDC2: 'VRegrDesagioFIDC2',
  TxServicoFIDC2: 'TxServicoFIDC2',
  ServicoFIDC2: 'ServicoFIDC2',
  Tar_TituloFIDC2: 'Tar_TituloFIDC2',
  VTarifaFIDC2: 'VTarifaFIDC2',
  Tar_ChequeFIDC2: 'Tar_ChequeFIDC2',
  VTarifaChequeFIDC2: 'VTarifaChequeFIDC2',
  Tar_ExporFIDC2: 'Tar_ExporFIDC2',
  Aditivo: 'Aditivo',
  AditivoCli: 'AditivoCli',
  Indicante: 'Indicante',
  IndiCom: 'IndiCom',
  Operador: 'Operador',
  Comissao: 'Comissao',
  GerenteFlot: 'GerenteFlot',
  CustoDinheiro: 'CustoDinheiro',
  GteGeral: 'GteGeral',
  GeralCom: 'GeralCom',
  Superintendente: 'Superintendente',
  SuperCom: 'SuperCom',
  FavorecidoRepasse: 'FavorecidoRepasse',
  NomeRepasse: 'NomeRepasse',
  ValorRepasse: 'ValorRepasse',
  LoteQtd: 'LoteQtd',
  LoteSoma: 'LoteSoma',
  Lote: 'Lote',
  AnoLote: 'AnoLote',
  SerieNF: 'SerieNF',
  NotaFiscal: 'NotaFiscal',
  Observacao: 'Observacao',
  ValorReservado: 'ValorReservado',
  GrCliente: 'GrCliente',
  GrFactoring: 'GrFactoring',
  DtNP: 'DtNP',
  OwnerNP: 'OwnerNP',
  DtAditivo: 'DtAditivo',
  OwnerAdt: 'OwnerAdt',
  DtBordero: 'DtBordero',
  OwnerBordero: 'OwnerBordero',
  ContratoNumero: 'ContratoNumero',
  ContratoSequencia: 'ContratoSequencia',
  ContratoAditivo: 'ContratoAditivo',
  ValorReservadoFIDC: 'ValorReservadoFIDC',
  GrClienteFIDC: 'GrClienteFIDC',
  GrFactoringFIDC: 'GrFactoringFIDC',
  DtNPFIDC: 'DtNPFIDC',
  OwnerNPFIDC: 'OwnerNPFIDC',
  DtAditivoFIDC: 'DtAditivoFIDC',
  OwnerAdtFIDC: 'OwnerAdtFIDC',
  DtBorderoFIDC: 'DtBorderoFIDC',
  OwnerBorderoFIDC: 'OwnerBorderoFIDC',
  ContratoFIDCNumero: 'ContratoFIDCNumero',
  ContratoFIDCSequencia: 'ContratoFIDCSequencia',
  ContratoFIDCAditivo: 'ContratoFIDCAditivo',
  ValorReservadoFIDC2: 'ValorReservadoFIDC2',
  GrClienteFIDC2: 'GrClienteFIDC2',
  GrFactoringFIDC2: 'GrFactoringFIDC2',
  DtNPFIDC2: 'DtNPFIDC2',
  OwnerNPFIDC2: 'OwnerNPFIDC2',
  DtAditivoFIDC2: 'DtAditivoFIDC2',
  OwnerAdtFIDC2: 'OwnerAdtFIDC2',
  DtBorderoFIDC2: 'DtBorderoFIDC2',
  OwnerBorderoFIDC2: 'OwnerBorderoFIDC2',
  ContratoFIDC2Numero: 'ContratoFIDC2Numero',
  ContratoFIDC2Sequencia: 'ContratoFIDC2Sequencia',
  ContratoFIDC2Aditivo: 'ContratoFIDC2Aditivo',
  GrClienteTr: 'GrClienteTr',
  GrFactoringTr: 'GrFactoringTr',
  DtAditivoTr: 'DtAditivoTr',
  OwnerAdtTr: 'OwnerAdtTr',
  DtBorderoTr: 'DtBorderoTr',
  OwnerBorderoTr: 'OwnerBorderoTr',
  ContratoTNumero: 'ContratoTNumero',
  ContratoTSequencia: 'ContratoTSequencia',
  ContratoTAditivo: 'ContratoTAditivo',
  Reter: 'Reter',
  ControlPagImediato: 'ControlPagImediato',
  ReterFIDC: 'ReterFIDC',
  ReterFIDC2: 'ReterFIDC2',
  Titulos: 'Titulos',
  Custo: 'Custo',
  CustoSecurit: 'CustoSecurit',
  CobTarifa: 'CobTarifa',
  Liquido: 'Liquido',
  VCheque: 'VCheque',
  RetImpostos: 'RetImpostos',
  BPagamentoRetencoes: 'BPagamentoRetencoes',
  BPagamentoRetencoesTipo: 'BPagamentoRetencoesTipo',
  PagarRetencoes: 'PagarRetencoes',
  RetCOFINSAV: 'RetCOFINSAV',
  RetCOFINSAVTr: 'RetCOFINSAVTr',
  RetCOFINSDes: 'RetCOFINSDes',
  RetCSLLAV: 'RetCSLLAV',
  RetCSLLAVTr: 'RetCSLLAVTr',
  RetCSLLDes: 'RetCSLLDes',
  BaseRetIRRF: 'BaseRetIRRF',
  RetIRRFAV: 'RetIRRFAV',
  RetIRRFAVTr: 'RetIRRFAVTr',
  RetIRRFDes: 'RetIRRFDes',
  RetPISAV: 'RetPISAV',
  RetPISAVTr: 'RetPISAVTr',
  RetPISDes: 'RetPISDes',
  QTitulosCS: 'QTitulosCS',
  TitulosCS: 'TitulosCS',
  CobTarifaCS: 'CobTarifaCS',
  QTitulos: 'QTitulos',
  Prazo: 'Prazo',
  FlotMedio: 'FlotMedio',
  VctoFace: 'VctoFace',
  PrazoD0: 'PrazoD0',
  FatorVA: 'FatorVA',
  Taxa_Pe: 'Taxa_Pe',
  Taxa_Ef: 'Taxa_Ef',
  FatorAA: 'FatorAA',
  Taxa_Real: 'Taxa_Real',
  Taxa_RealPeriodo: 'Taxa_RealPeriodo',
  AVCEFC: 'AVCEFC',
  AVCFE: 'AVCFE',
  AVIRRComFloat: 'AVIRRComFloat',
  AVIRR: 'AVIRR',
  AVImpostos: 'AVImpostos',
  AVRPorUs: 'AVRPorUs',
  AVSpreadAA: 'AVSpreadAA',
  AVSpreadAM: 'AVSpreadAM',
  AVVPLR: 'AVVPLR',
  AVVPLUs: 'AVVPLUs',
  TitulosFIDC: 'TitulosFIDC',
  CustoFIDC: 'CustoFIDC',
  CustoDesagioFIDC: 'CustoDesagioFIDC',
  CobTarifaFIDC: 'CobTarifaFIDC',
  LiquidoFIDC: 'LiquidoFIDC',
  QTitulosFIDC: 'QTitulosFIDC',
  PrazoFIDC: 'PrazoFIDC',
  FlotMedioFIDC: 'FlotMedioFIDC',
  VctoFaceFIDC: 'VctoFaceFIDC',
  PrazoD0FIDC: 'PrazoD0FIDC',
  FatorVAFIDC: 'FatorVAFIDC',
  Taxa_PeFIDC: 'Taxa_PeFIDC',
  Taxa_EfFIDC: 'Taxa_EfFIDC',
  FatorAAFIDC: 'FatorAAFIDC',
  Taxa_RealFIDC: 'Taxa_RealFIDC',
  Taxa_RealPeriodoFIDC: 'Taxa_RealPeriodoFIDC',
  AVCEFCFIDC: 'AVCEFCFIDC',
  AVCFEFIDC: 'AVCFEFIDC',
  AVIRRComFloatFIDC: 'AVIRRComFloatFIDC',
  AVIRRFIDC: 'AVIRRFIDC',
  AVImpostosFIDC: 'AVImpostosFIDC',
  AVSpreadAAFIDC: 'AVSpreadAAFIDC',
  AVSpreadAMFIDC: 'AVSpreadAMFIDC',
  AVVPLRFIDC: 'AVVPLRFIDC',
  AVVPLUsFIDC: 'AVVPLUsFIDC',
  TitulosFIDC2: 'TitulosFIDC2',
  CustoFIDC2: 'CustoFIDC2',
  CustoDesagioFIDC2: 'CustoDesagioFIDC2',
  CobTarifaFIDC2: 'CobTarifaFIDC2',
  LiquidoFIDC2: 'LiquidoFIDC2',
  QTitulosFIDC2: 'QTitulosFIDC2',
  PrazoFIDC2: 'PrazoFIDC2',
  FlotMedioFIDC2: 'FlotMedioFIDC2',
  VctoFaceFIDC2: 'VctoFaceFIDC2',
  PrazoD0FIDC2: 'PrazoD0FIDC2',
  FatorVAFIDC2: 'FatorVAFIDC2',
  Taxa_PeFIDC2: 'Taxa_PeFIDC2',
  Taxa_EfFIDC2: 'Taxa_EfFIDC2',
  FatorAAFIDC2: 'FatorAAFIDC2',
  Taxa_RealFIDC2: 'Taxa_RealFIDC2',
  Taxa_RealPeriodoFIDC2: 'Taxa_RealPeriodoFIDC2',
  AVCEFCFIDC2: 'AVCEFCFIDC2',
  AVCFEFIDC2: 'AVCFEFIDC2',
  AVIRRComFloatFIDC2: 'AVIRRComFloatFIDC2',
  AVIRRFIDC2: 'AVIRRFIDC2',
  AVImpostosFIDC2: 'AVImpostosFIDC2',
  AVSpreadAAFIDC2: 'AVSpreadAAFIDC2',
  AVSpreadAMFIDC2: 'AVSpreadAMFIDC2',
  AVVPLRFIDC2: 'AVVPLRFIDC2',
  AVVPLUsFIDC2: 'AVVPLUsFIDC2',
  AssinaturaAdt: 'AssinaturaAdt',
  OwnerAssinaturaAdt: 'OwnerAssinaturaAdt',
  AssinaturaBordero: 'AssinaturaBordero',
  OwnerAssinaturaBordero: 'OwnerAssinaturaBordero',
  ImpressaoNP: 'ImpressaoNP',
  AssinaturaNP: 'AssinaturaNP',
  OwnerAssinaturaNP: 'OwnerAssinaturaNP',
  RetornoNP: 'RetornoNP',
  OwnerRetornoNP: 'OwnerRetornoNP',
  LiberacaoNP: 'LiberacaoNP',
  OwnerLiberacaoNP: 'OwnerLiberacaoNP',
  AssinaturaAdtTr: 'AssinaturaAdtTr',
  OwnerAssinaturaAdtTr: 'OwnerAssinaturaAdtTr',
  AssinaturaBorderoTr: 'AssinaturaBorderoTr',
  OwnerAssinaturaBorderoTr: 'OwnerAssinaturaBorderoTr',
  AssinaturaAdtFIDC: 'AssinaturaAdtFIDC',
  OwnerAssinaturaAdtFIDC: 'OwnerAssinaturaAdtFIDC',
  AssinaturaBorderoFIDC: 'AssinaturaBorderoFIDC',
  OwnerAssinaturaBorderoFIDC: 'OwnerAssinaturaBorderoFIDC',
  ImpressaoNPFIDC: 'ImpressaoNPFIDC',
  AssinaturaNPFIDC: 'AssinaturaNPFIDC',
  OwnerAssinaturaNPFIDC: 'OwnerAssinaturaNPFIDC',
  RetornoNPFIDC: 'RetornoNPFIDC',
  OwnerRetornoNPFIDC: 'OwnerRetornoNPFIDC',
  LiberacaoNPFIDC: 'LiberacaoNPFIDC',
  OwnerLiberacaoNPFIDC: 'OwnerLiberacaoNPFIDC',
  AssinaturaAdtFIDC2: 'AssinaturaAdtFIDC2',
  OwnerAssinaturaAdtFIDC2: 'OwnerAssinaturaAdtFIDC2',
  AssinaturaBorderoFIDC2: 'AssinaturaBorderoFIDC2',
  OwnerAssinaturaBorderoFIDC2: 'OwnerAssinaturaBorderoFIDC2',
  ImpressaoNPFIDC2: 'ImpressaoNPFIDC2',
  AssinaturaNPFIDC2: 'AssinaturaNPFIDC2',
  OwnerAssinaturaNPFIDC2: 'OwnerAssinaturaNPFIDC2',
  RetornoNPFIDC2: 'RetornoNPFIDC2',
  OwnerRetornoNPFIDC2: 'OwnerRetornoNPFIDC2',
  LiberacaoNPFIDC2: 'LiberacaoNPFIDC2',
  OwnerLiberacaoNPFIDC2: 'OwnerLiberacaoNPFIDC2',
  IndiceAtualizacao: 'IndiceAtualizacao',
  Personalizado0: 'Personalizado0',
  Personalizado1: 'Personalizado1',
  Personalizado2: 'Personalizado2',
  Personalizado3: 'Personalizado3',
  Personalizado4: 'Personalizado4',
  Personalizado5: 'Personalizado5',
  Personalizado6: 'Personalizado6',
  Personalizado7: 'Personalizado7',
  Personalizado8: 'Personalizado8',
  Personalizado9: 'Personalizado9',
  LoteDp: 'LoteDp',
  RemessaPagamento: 'RemessaPagamento',
  Agencia: 'Agencia',
  Alterado: 'Alterado',
  Arredond: 'Arredond',
  Caixa: 'Caixa',
  Cheque: 'Cheque',
  Cotacao: 'Cotacao',
  CotacaoAtualizacao: 'CotacaoAtualizacao',
  Filial: 'Filial',
  Moeda: 'Moeda',
  Obs: 'Obs',
  PercentualAtualizacao: 'PercentualAtualizacao',
  VChequeFIDC: 'VChequeFIDC',
  VChequeFIDC2: 'VChequeFIDC2',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  BacenNatOp_IDFIDC: 'BacenNatOp_IDFIDC',
  BacenNatOp_IDFIDC2: 'BacenNatOp_IDFIDC2',
  BacenModOp_IDFIDC: 'BacenModOp_IDFIDC',
  BacenModOp_IDFIDC2: 'BacenModOp_IDFIDC2',
  BacenCaracEsp_IDFIDC: 'BacenCaracEsp_IDFIDC',
  BacenCaracEsp_IDFIDC2: 'BacenCaracEsp_IDFIDC2',
  TxIOFAdicional: 'TxIOFAdicional',
  IOFAdicional: 'IOFAdicional',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  ApresentacaoDocumentoFIDC: 'ApresentacaoDocumentoFIDC',
  ApresentacaoDocumentoFIDC2: 'ApresentacaoDocumentoFIDC2',
  DataCriacao: 'DataCriacao',
  DataConclusao: 'DataConclusao',
  FatorMinimo: 'FatorMinimo',
  FatorMinimoFIDC: 'FatorMinimoFIDC',
  FatorMinimoFIDC2: 'FatorMinimoFIDC2',
  OwnerLiberacao: 'OwnerLiberacao',
  SelAditivo: 'SelAditivo',
  SelAditivoTr: 'SelAditivoTr',
  SelAditivoFIDC: 'SelAditivoFIDC',
  SelAditivoFIDC2: 'SelAditivoFIDC2',
  SelNP: 'SelNP',
  SelNPFIDC: 'SelNPFIDC',
  SelNPFIDC2: 'SelNPFIDC2',
  SelBordero: 'SelBordero',
  SelBorderoTr: 'SelBorderoTr',
  SelBorderoFIDC: 'SelBorderoFIDC',
  SelBorderoFIDC2: 'SelBorderoFIDC2',
  UUID: 'UUID',
  CustoCS: 'CustoCS',
  CustoDesagioCS: 'CustoDesagioCS',
  PrazoCS: 'PrazoCS',
  FlotMedioCS: 'FlotMedioCS',
  VctoFaceCS: 'VctoFaceCS',
  PrazoD0CS: 'PrazoD0CS',
  TipoOperacao: 'TipoOperacao',
  AnaliseBordero: 'AnaliseBordero',
  DataSubsequenteDecendio: 'DataSubsequenteDecendio',
  IdAnaliseBordero: 'IdAnaliseBordero',
  BorderoAlerta: 'BorderoAlerta',
  BorderoBloqueio: 'BorderoBloqueio',
  AnaliseBorderoCedenteId: 'AnaliseBorderoCedenteId',
  CedenteAlerta: 'CedenteAlerta',
  CedenteBloqueio: 'CedenteBloqueio',
  idBorderoWeb: 'idBorderoWeb',
  NumeroBorderoWEB: 'NumeroBorderoWEB',
  AgenteLiquidacaoFIDC: 'AgenteLiquidacaoFIDC'
});

exports.Prisma.SigcadXCarteiraScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Carteira_ID: 'Carteira_ID',
  FatorMinimo: 'FatorMinimo',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.SigcadXCarteiraXFormalizacaoSistemaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigcad_ID: 'Sigcad_ID',
  Carteira_ID: 'Carteira_ID',
  FormalizacaoSistema_ID: 'FormalizacaoSistema_ID',
  FormalizarBorderoAoLiberar: 'FormalizarBorderoAoLiberar',
  Dt_Criacao: 'Dt_Criacao',
  QuemCriou: 'QuemCriou',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou: 'QuemAtualizou',
  Dt_Eliminado: 'Dt_Eliminado',
  QuemApagou: 'QuemApagou'
});

exports.Prisma.Sigcad_ImportacaoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Bordero: 'Bordero',
  CGC: 'CGC',
  Nome: 'Nome',
  Logradouro: 'Logradouro',
  Ender: 'Ender',
  Numero: 'Numero',
  Compl: 'Compl',
  CEP: 'CEP',
  Bairro: 'Bairro',
  CodIBGECidade: 'CodIBGECidade',
  Cidade: 'Cidade',
  Estado: 'Estado',
  Fone: 'Fone',
  Ramal: 'Ramal',
  Fax: 'Fax',
  Celular: 'Celular',
  EMail: 'EMail',
  Contato: 'Contato',
  IE: 'IE',
  EndCobr: 'EndCobr',
  CEPCobr: 'CEPCobr',
  BairroCobr: 'BairroCobr',
  CidaCobr: 'CidaCobr',
  EstaCobr: 'EstaCobr',
  DataInclusao: 'DataInclusao'
});

exports.Prisma.SigflsXEmprestimoParcelaScalarFieldEnum = makeEnum({
  ID: 'ID',
  Sigfls_ID: 'Sigfls_ID',
  EmprestimoParcela_ID: 'EmprestimoParcela_ID'
});

exports.Prisma.Sigfls_ImportacaoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Ctrl_ID: 'Ctrl_ID',
  Bordero: 'Bordero',
  DtBordero: 'DtBordero',
  CliFor: 'CliFor',
  Rejeitado: 'Rejeitado',
  Carteira_ID: 'Carteira_ID',
  ValorFace: 'ValorFace',
  Valor: 'Valor',
  Data: 'Data',
  Flot: 'Flot',
  FloatDNU: 'FloatDNU',
  FD0: 'FD0',
  Prazo: 'Prazo',
  PrazoDU: 'PrazoDU',
  Dcto: 'Dcto',
  TipoDcto: 'TipoDcto',
  Codigo: 'Codigo',
  Sacado: 'Sacado',
  Desconto: 'Desconto',
  DescontoP: 'DescontoP',
  LimiteDesconto: 'LimiteDesconto',
  EndossadoPor: 'EndossadoPor',
  CMC7: 'CMC7',
  ChPraca: 'ChPraca',
  ChBanco: 'ChBanco',
  ChAgencia: 'ChAgencia',
  ChC1: 'ChC1',
  ChConta: 'ChConta',
  ChC2: 'ChC2',
  ChNumero: 'ChNumero',
  ChC3: 'ChC3',
  ChLinha: 'ChLinha',
  Juros: 'Juros',
  JurosAjustado: 'JurosAjustado',
  JurosDesagio: 'JurosDesagio',
  RateioTarifas: 'RateioTarifas',
  IR: 'IR',
  CSLL: 'CSLL',
  COFINS: 'COFINS',
  PIS: 'PIS',
  Historico: 'Historico',
  Aceite: 'Aceite',
  TemNota: 'TemNota',
  OwnerTemNota: 'OwnerTemNota',
  NotaFiscal: 'NotaFiscal',
  DataNFiscal: 'DataNFiscal',
  DtNotaFiscal: 'DtNotaFiscal',
  OwnerNF: 'OwnerNF',
  Confirmado: 'Confirmado',
  DtConfirmado: 'DtConfirmado',
  OwnerConfirmado: 'OwnerConfirmado',
  Responsavel: 'Responsavel',
  Obs: 'Obs',
  Transportadora: 'Transportadora',
  Conhecimento: 'Conhecimento',
  DtControleTransportadora: 'DtControleTransportadora',
  DtControleMarketing: 'DtControleMarketing',
  DtControleFiscal: 'DtControleFiscal',
  DtControleRecebimento: 'DtControleRecebimento',
  TemCanhoto: 'TemCanhoto',
  OwnerTemCanhoto: 'OwnerTemCanhoto',
  DtCanhoto: 'DtCanhoto',
  OwnerCanhoto: 'OwnerCanhoto',
  TemDuplicata: 'TemDuplicata',
  OwnerDuplicata: 'OwnerDuplicata',
  DtDuplicata: 'DtDuplicata',
  OwnerDp: 'OwnerDp',
  CanhotoBom: 'CanhotoBom',
  OwnerCanhotoBom: 'OwnerCanhotoBom',
  DtCanhotoBom: 'DtCanhotoBom',
  OwnerDtCanhotoBom: 'OwnerDtCanhotoBom',
  TemCheque: 'TemCheque',
  DtCheque: 'DtCheque',
  OwnerCh: 'OwnerCh',
  ObsControle: 'ObsControle',
  ControleAR: 'ControleAR',
  OwnerControleAR: 'OwnerControleAR',
  DtControleAR: 'DtControleAR',
  OwnerDtControleAR: 'OwnerDtControleAR',
  DtRecebControleAR: 'DtRecebControleAR',
  OwnerDtRecebControleAR: 'OwnerDtRecebControleAR',
  Gerente: 'Gerente',
  GerenteComis: 'GerenteComis',
  GerenteFlot: 'GerenteFlot',
  BaseDeterminada: 'BaseDeterminada',
  GerenteGeral: 'GerenteGeral',
  GerenteGeralComis: 'GerenteGeralComis',
  Superintendente: 'Superintendente',
  SuperintendenteComis: 'SuperintendenteComis',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  SelModoDeCobranca: 'SelModoDeCobranca',
  CobBanco: 'CobBanco',
  CobServico: 'CobServico',
  CobTarifa: 'CobTarifa',
  Numero_Port: 'Numero_Port',
  ControleParticipante: 'ControleParticipante',
  Lote: 'Lote',
  AnoLote: 'AnoLote',
  NumeroContrato: 'NumeroContrato',
  Performado: 'Performado',
  ValorNota: 'ValorNota',
  Deducao: 'Deducao',
  Grupo: 'Grupo',
  CompraCS: 'CompraCS',
  TrusteeParaFIDC: 'TrusteeParaFIDC',
  TrusteeParaFIDC2: 'TrusteeParaFIDC2',
  TermSecurit: 'TermSecurit',
  TermSecuritAnexo: 'TermSecuritAnexo',
  SeLote: 'SeLote',
  SeEstado: 'SeEstado',
  SeConsulta: 'SeConsulta',
  SeScoring: 'SeScoring',
  DesagioSecurit: 'DesagioSecurit',
  MonitoraPreConfirmado: 'MonitoraPreConfirmado',
  PreConfirmado: 'PreConfirmado',
  OwnerPreConfirmado: 'OwnerPreConfirmado',
  DtPreConfirmado: 'DtPreConfirmado',
  ResponsavelPre: 'ResponsavelPre',
  ObsPre: 'ObsPre',
  TransportadoraPre: 'TransportadoraPre',
  PedidoPre: 'PedidoPre',
  ConhecimentoPre: 'ConhecimentoPre',
  ConsultarCentraisDeRisco: 'ConsultarCentraisDeRisco',
  Emissao: 'Emissao',
  Filial: 'Filial',
  Alterado: 'Alterado',
  Dt_Atualizacao: 'Dt_Atualizacao',
  DtAceite: 'DtAceite',
  OwnerAceite: 'OwnerAceite',
  DctoImport_: 'DctoImport_',
  Tarifa: 'Tarifa',
  Departamento: 'Departamento',
  SerieNota: 'SerieNota',
  MsgBoleto: 'MsgBoleto',
  MsgBoleto2: 'MsgBoleto2',
  MsgBoleto3: 'MsgBoleto3',
  MsgBoleto4: 'MsgBoleto4',
  MsgBoleto5: 'MsgBoleto5',
  MsgBoleto6: 'MsgBoleto6',
  MsgBoleto7: 'MsgBoleto7',
  MsgBoleto8: 'MsgBoleto8',
  ApresentacaoDocumento: 'ApresentacaoDocumento',
  Parcela: 'Parcela',
  QuantidadeParcelas: 'QuantidadeParcelas',
  EstadoConfirmacaoTitulo_ID: 'EstadoConfirmacaoTitulo_ID',
  SelEstadoConfirmacaoTitulo: 'SelEstadoConfirmacaoTitulo',
  iChequeUltimaSituacao: 'iChequeUltimaSituacao',
  iChequeCCF: 'iChequeCCF',
  iChequeProtesto: 'iChequeProtesto',
  CompraCSFezPrimeiraCarga: 'CompraCSFezPrimeiraCarga',
  ControlaCartaDeCessao: 'ControlaCartaDeCessao',
  CartaDeCessao: 'CartaDeCessao',
  DtCartaDeCessao: 'DtCartaDeCessao',
  OwnerCartaDeCessao: 'OwnerCartaDeCessao',
  ResponsavelCartaDeCessao: 'ResponsavelCartaDeCessao',
  ObsCartaDeCessao: 'ObsCartaDeCessao',
  DataPerformado: 'DataPerformado',
  EstadoPreConfirmacaoTitulo_ID: 'EstadoPreConfirmacaoTitulo_ID',
  SelEstadoPreConfirmacaoTitulo: 'SelEstadoPreConfirmacaoTitulo',
  SelDuplicata: 'SelDuplicata',
  SelNotaFiscal: 'SelNotaFiscal',
  SelCanhoto: 'SelCanhoto',
  SelCanhotoBom: 'SelCanhotoBom',
  SelCheque: 'SelCheque',
  SelAR: 'SelAR',
  Ctrl_IDFluxo: 'Ctrl_IDFluxo',
  AnaliseBorderoSacadoId: 'AnaliseBorderoSacadoId',
  SacadoAlerta: 'SacadoAlerta',
  SacadoBloqueio: 'SacadoBloqueio',
  AnaliseBorderoTituloId: 'AnaliseBorderoTituloId',
  TituloAlerta: 'TituloAlerta',
  TituloBloqueio: 'TituloBloqueio',
  AnaliseBorderoChaveId: 'AnaliseBorderoChaveId',
  NFeAlerta: 'NFeAlerta',
  NFeBloqueio: 'NFeBloqueio',
  CartaoDeCreditoBandeira: 'CartaoDeCreditoBandeira',
  CartaoDeCreditoNSU: 'CartaoDeCreditoNSU',
  ValorVenda: 'ValorVenda',
  DocumentoCetip: 'DocumentoCetip',
  VerificacaoNFSe: 'VerificacaoNFSe',
  DataLimiteConfirmacaoDeTitulos: 'DataLimiteConfirmacaoDeTitulos',
  EstadoCanhoto_ID: 'EstadoCanhoto_ID',
  ResponsavelEstadoCanhoto: 'ResponsavelEstadoCanhoto',
  DtEstadoCanhoto: 'DtEstadoCanhoto',
  OwnerEstadoCanhoto: 'OwnerEstadoCanhoto'
});

exports.Prisma.SigpagScalarFieldEnum = makeEnum({
  id: 'id',
  recompra: 'recompra',
  datapgto: 'datapgto',
  dc: 'dc',
  du: 'du',
  valorpgto: 'valorpgto',
  encargo: 'encargo',
  amortizacao: 'amortizacao',
  juros: 'juros',
  saldodevedor: 'saldodevedor',
  Ctrl_ID: 'Ctrl_ID',
  RateioReceitas: 'RateioReceitas'
});

exports.Prisma.SigrecScalarFieldEnum = makeEnum({
  id: 'id',
  numero: 'numero',
  data: 'data',
  avista: 'avista',
  iof: 'iof',
  viof: 'viof',
  cliente: 'cliente',
  fator: 'fator',
  tipo: 'tipo',
  bordero: 'bordero',
  desconta: 'desconta',
  fatorpv: 'fatorpv',
  despesa: 'despesa',
  vtitulos: 'vtitulos',
  vfator: 'vfator',
  banco: 'banco',
  garantia: 'garantia',
  prazototal: 'prazototal',
  aprazo: 'aprazo',
  viofparc: 'viofparc',
  vmulta: 'vmulta',
  vhonorarios: 'vhonorarios',
  vrenegociado: 'vrenegociado',
  honorarios: 'honorarios',
  honorariosjuros: 'honorariosjuros',
  multa: 'multa',
  multajuros: 'multajuros',
  liberado: 'liberado',
  control: 'control',
  carteira: 'carteira',
  filial: 'filial',
  cobraiof: 'cobraiof',
  fatorpenden: 'fatorpenden',
  Operador: 'Operador',
  TipoPgtoCredito: 'TipoPgtoCredito',
  dtliberacao: 'dtliberacao',
  lancaparcelapendencia: 'lancaparcelapendencia',
  FatorProducao: 'FatorProducao',
  FatorCP: 'FatorCP',
  vFatorProducao: 'vFatorProducao',
  vCPAtualizado: 'vCPAtualizado',
  vregrdesagio: 'vregrdesagio',
  VFatorDesagio: 'VFatorDesagio',
  VMULTAdesagio: 'VMULTAdesagio',
  VHonorariosDesagio: 'VHonorariosDesagio',
  PeriodoDias: 'PeriodoDias',
  recuperacaodespesas: 'recuperacaodespesas',
  tipoajustecp: 'tipoajustecp',
  vrenegociadotitulos: 'vrenegociadotitulos',
  vrenegociadooutros: 'vrenegociadooutros',
  lancaparcelacobranca: 'lancaparcelacobranca',
  endossadopor: 'endossadopor',
  CarteiraTransferir: 'CarteiraTransferir',
  RecuperacaoDespesasRegrDesagio: 'RecuperacaoDespesasRegrDesagio',
  ConfissaoDeDivida: 'ConfissaoDeDivida',
  VRenegociadoTitulos_: 'VRenegociadoTitulos_',
  VRenegociadoOutros_: 'VRenegociadoOutros_',
  vfatoroutros: 'vfatoroutros',
  vfatortitulos: 'vfatortitulos',
  ToleranciaMenorCp: 'ToleranciaMenorCp',
  ToleranciaMaiorCp: 'ToleranciaMaiorCp',
  RateioReceitas: 'RateioReceitas',
  ComposicaoDePagamento: 'ComposicaoDePagamento',
  ModoDeCobranca_ID: 'ModoDeCobranca_ID',
  AgenteLiquidacaoFIDC: 'AgenteLiquidacaoFIDC'
});

exports.Prisma.SigrecXFluxoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Sigrec_ID: 'Sigrec_ID',
  Fluxo_ID: 'Fluxo_ID',
  Selecao: 'Selecao'
});

exports.Prisma.SituacaoTributariaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  IsPIS: 'IsPIS',
  IsCOFINS: 'IsCOFINS',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SrvcoLocalizacaoCadastroADOScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ServicoLocalizacaoCadastro_ID: 'ServicoLocalizacaoCadastro_ID',
  ConexaoADO: 'ConexaoADO',
  QueryADO: 'QueryADO',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Atualizacao: 'Dt_Atualizacao'
});

exports.Prisma.SrvcoLocalizacaoCadastroWBAScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  ServicoLocalizacaoCadastro_ID: 'ServicoLocalizacaoCadastro_ID',
  ConexaoADO: 'ConexaoADO',
  Server: 'Server',
  DatabaseWBA: 'DatabaseWBA',
  UserName: 'UserName',
  Password: 'Password',
  Prefixo: 'Prefixo',
  CampoPesquisa: 'CampoPesquisa',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Atualizacao: 'Dt_Atualizacao'
});

exports.Prisma.Sym_channelScalarFieldEnum = makeEnum({
  channel_id: 'channel_id',
  processing_order: 'processing_order',
  max_batch_size: 'max_batch_size',
  max_batch_to_send: 'max_batch_to_send',
  max_data_to_route: 'max_data_to_route',
  extract_period_millis: 'extract_period_millis',
  enabled: 'enabled',
  use_old_data_to_route: 'use_old_data_to_route',
  use_row_data_to_route: 'use_row_data_to_route',
  use_pk_data_to_route: 'use_pk_data_to_route',
  reload_flag: 'reload_flag',
  file_sync_flag: 'file_sync_flag',
  contains_big_lob: 'contains_big_lob',
  batch_algorithm: 'batch_algorithm',
  data_loader_type: 'data_loader_type',
  description: 'description',
  queue: 'queue',
  max_network_kbps: 'max_network_kbps',
  data_event_action: 'data_event_action',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_conflictScalarFieldEnum = makeEnum({
  conflict_id: 'conflict_id',
  source_node_group_id: 'source_node_group_id',
  target_node_group_id: 'target_node_group_id',
  target_channel_id: 'target_channel_id',
  target_catalog_name: 'target_catalog_name',
  target_schema_name: 'target_schema_name',
  target_table_name: 'target_table_name',
  detect_type: 'detect_type',
  detect_expression: 'detect_expression',
  resolve_type: 'resolve_type',
  ping_back: 'ping_back',
  resolve_changes_only: 'resolve_changes_only',
  resolve_row_only: 'resolve_row_only',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_contextScalarFieldEnum = makeEnum({
  name: 'name',
  context_value: 'context_value',
  create_time: 'create_time',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_dataScalarFieldEnum = makeEnum({
  data_id: 'data_id',
  table_name: 'table_name',
  event_type: 'event_type',
  row_data: 'row_data',
  pk_data: 'pk_data',
  old_data: 'old_data',
  trigger_hist_id: 'trigger_hist_id',
  channel_id: 'channel_id',
  transaction_id: 'transaction_id',
  source_node_id: 'source_node_id',
  external_data: 'external_data',
  node_list: 'node_list',
  is_prerouted: 'is_prerouted',
  create_time: 'create_time'
});

exports.Prisma.Sym_data_eventScalarFieldEnum = makeEnum({
  data_id: 'data_id',
  batch_id: 'batch_id',
  create_time: 'create_time'
});

exports.Prisma.Sym_data_gapScalarFieldEnum = makeEnum({
  start_id: 'start_id',
  end_id: 'end_id',
  create_time: 'create_time',
  last_update_hostname: 'last_update_hostname'
});

exports.Prisma.Sym_extensionScalarFieldEnum = makeEnum({
  extension_id: 'extension_id',
  extension_type: 'extension_type',
  interface_name: 'interface_name',
  node_group_id: 'node_group_id',
  enabled: 'enabled',
  extension_order: 'extension_order',
  extension_text: 'extension_text',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_extract_requestScalarFieldEnum = makeEnum({
  request_id: 'request_id',
  node_id: 'node_id',
  queue: 'queue',
  status: 'status',
  start_batch_id: 'start_batch_id',
  end_batch_id: 'end_batch_id',
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  load_id: 'load_id',
  table_name: 'table_name',
  extracted_rows: 'extracted_rows',
  extracted_millis: 'extracted_millis',
  transferred_rows: 'transferred_rows',
  transferred_millis: 'transferred_millis',
  last_transferred_batch_id: 'last_transferred_batch_id',
  loaded_rows: 'loaded_rows',
  loaded_millis: 'loaded_millis',
  last_loaded_batch_id: 'last_loaded_batch_id',
  total_rows: 'total_rows',
  loaded_time: 'loaded_time',
  parent_request_id: 'parent_request_id',
  last_update_time: 'last_update_time',
  create_time: 'create_time'
});

exports.Prisma.Sym_file_incomingScalarFieldEnum = makeEnum({
  relative_dir: 'relative_dir',
  file_name: 'file_name',
  last_event_type: 'last_event_type',
  node_id: 'node_id',
  file_modified_time: 'file_modified_time'
});

exports.Prisma.Sym_file_snapshotScalarFieldEnum = makeEnum({
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  relative_dir: 'relative_dir',
  file_name: 'file_name',
  channel_id: 'channel_id',
  reload_channel_id: 'reload_channel_id',
  last_event_type: 'last_event_type',
  crc32_checksum: 'crc32_checksum',
  file_size: 'file_size',
  file_modified_time: 'file_modified_time',
  last_update_time: 'last_update_time',
  last_update_by: 'last_update_by',
  create_time: 'create_time'
});

exports.Prisma.Sym_file_triggerScalarFieldEnum = makeEnum({
  trigger_id: 'trigger_id',
  channel_id: 'channel_id',
  reload_channel_id: 'reload_channel_id',
  base_dir: 'base_dir',
  recurse: 'recurse',
  includes_files: 'includes_files',
  excludes_files: 'excludes_files',
  sync_on_create: 'sync_on_create',
  sync_on_modified: 'sync_on_modified',
  sync_on_delete: 'sync_on_delete',
  sync_on_ctl_file: 'sync_on_ctl_file',
  delete_after_sync: 'delete_after_sync',
  before_copy_script: 'before_copy_script',
  after_copy_script: 'after_copy_script',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_file_trigger_routerScalarFieldEnum = makeEnum({
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  enabled: 'enabled',
  initial_load_enabled: 'initial_load_enabled',
  target_base_dir: 'target_base_dir',
  conflict_strategy: 'conflict_strategy',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_groupletScalarFieldEnum = makeEnum({
  grouplet_id: 'grouplet_id',
  grouplet_link_policy: 'grouplet_link_policy',
  description: 'description',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_grouplet_linkScalarFieldEnum = makeEnum({
  grouplet_id: 'grouplet_id',
  external_id: 'external_id',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_incoming_batchScalarFieldEnum = makeEnum({
  batch_id: 'batch_id',
  node_id: 'node_id',
  channel_id: 'channel_id',
  status: 'status',
  error_flag: 'error_flag',
  sql_state: 'sql_state',
  sql_code: 'sql_code',
  sql_message: 'sql_message',
  last_update_hostname: 'last_update_hostname',
  last_update_time: 'last_update_time',
  create_time: 'create_time',
  summary: 'summary',
  ignore_count: 'ignore_count',
  byte_count: 'byte_count',
  load_flag: 'load_flag',
  extract_count: 'extract_count',
  sent_count: 'sent_count',
  load_count: 'load_count',
  reload_row_count: 'reload_row_count',
  other_row_count: 'other_row_count',
  data_row_count: 'data_row_count',
  extract_row_count: 'extract_row_count',
  load_row_count: 'load_row_count',
  data_insert_row_count: 'data_insert_row_count',
  data_update_row_count: 'data_update_row_count',
  data_delete_row_count: 'data_delete_row_count',
  extract_insert_row_count: 'extract_insert_row_count',
  extract_update_row_count: 'extract_update_row_count',
  extract_delete_row_count: 'extract_delete_row_count',
  load_insert_row_count: 'load_insert_row_count',
  load_update_row_count: 'load_update_row_count',
  load_delete_row_count: 'load_delete_row_count',
  network_millis: 'network_millis',
  filter_millis: 'filter_millis',
  load_millis: 'load_millis',
  router_millis: 'router_millis',
  extract_millis: 'extract_millis',
  transform_extract_millis: 'transform_extract_millis',
  transform_load_millis: 'transform_load_millis',
  load_id: 'load_id',
  common_flag: 'common_flag',
  fallback_insert_count: 'fallback_insert_count',
  fallback_update_count: 'fallback_update_count',
  ignore_row_count: 'ignore_row_count',
  missing_delete_count: 'missing_delete_count',
  skip_count: 'skip_count',
  failed_row_number: 'failed_row_number',
  failed_line_number: 'failed_line_number',
  failed_data_id: 'failed_data_id'
});

exports.Prisma.Sym_incoming_errorScalarFieldEnum = makeEnum({
  batch_id: 'batch_id',
  node_id: 'node_id',
  failed_row_number: 'failed_row_number',
  failed_line_number: 'failed_line_number',
  target_catalog_name: 'target_catalog_name',
  target_schema_name: 'target_schema_name',
  target_table_name: 'target_table_name',
  event_type: 'event_type',
  binary_encoding: 'binary_encoding',
  column_names: 'column_names',
  pk_column_names: 'pk_column_names',
  row_data: 'row_data',
  old_data: 'old_data',
  cur_data: 'cur_data',
  resolve_data: 'resolve_data',
  resolve_ignore: 'resolve_ignore',
  conflict_id: 'conflict_id',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_jobScalarFieldEnum = makeEnum({
  job_name: 'job_name',
  job_type: 'job_type',
  requires_registration: 'requires_registration',
  job_expression: 'job_expression',
  description: 'description',
  default_schedule: 'default_schedule',
  default_auto_start: 'default_auto_start',
  node_group_id: 'node_group_id',
  create_by: 'create_by',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_load_filterScalarFieldEnum = makeEnum({
  load_filter_id: 'load_filter_id',
  load_filter_type: 'load_filter_type',
  source_node_group_id: 'source_node_group_id',
  target_node_group_id: 'target_node_group_id',
  target_catalog_name: 'target_catalog_name',
  target_schema_name: 'target_schema_name',
  target_table_name: 'target_table_name',
  filter_on_update: 'filter_on_update',
  filter_on_insert: 'filter_on_insert',
  filter_on_delete: 'filter_on_delete',
  before_write_script: 'before_write_script',
  after_write_script: 'after_write_script',
  batch_complete_script: 'batch_complete_script',
  batch_commit_script: 'batch_commit_script',
  batch_rollback_script: 'batch_rollback_script',
  handle_error_script: 'handle_error_script',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  load_filter_order: 'load_filter_order',
  fail_on_error: 'fail_on_error'
});

exports.Prisma.Sym_lockScalarFieldEnum = makeEnum({
  lock_action: 'lock_action',
  lock_type: 'lock_type',
  locking_server_id: 'locking_server_id',
  lock_time: 'lock_time',
  shared_count: 'shared_count',
  shared_enable: 'shared_enable',
  last_lock_time: 'last_lock_time',
  last_locking_server_id: 'last_locking_server_id'
});

exports.Prisma.Sym_monitorScalarFieldEnum = makeEnum({
  monitor_id: 'monitor_id',
  node_group_id: 'node_group_id',
  external_id: 'external_id',
  type: 'type',
  expression: 'expression',
  threshold: 'threshold',
  run_period: 'run_period',
  run_count: 'run_count',
  severity_level: 'severity_level',
  enabled: 'enabled',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_monitor_eventScalarFieldEnum = makeEnum({
  monitor_id: 'monitor_id',
  node_id: 'node_id',
  event_time: 'event_time',
  host_name: 'host_name',
  type: 'type',
  threshold: 'threshold',
  event_value: 'event_value',
  event_count: 'event_count',
  severity_level: 'severity_level',
  is_resolved: 'is_resolved',
  is_notified: 'is_notified',
  details: 'details',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_nodeScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  node_group_id: 'node_group_id',
  external_id: 'external_id',
  sync_enabled: 'sync_enabled',
  sync_url: 'sync_url',
  schema_version: 'schema_version',
  symmetric_version: 'symmetric_version',
  config_version: 'config_version',
  database_type: 'database_type',
  database_version: 'database_version',
  database_name: 'database_name',
  batch_to_send_count: 'batch_to_send_count',
  batch_in_error_count: 'batch_in_error_count',
  created_at_node_id: 'created_at_node_id',
  deployment_type: 'deployment_type',
  deployment_sub_type: 'deployment_sub_type'
});

exports.Prisma.Sym_node_channel_ctlScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  channel_id: 'channel_id',
  suspend_enabled: 'suspend_enabled',
  ignore_enabled: 'ignore_enabled',
  last_extract_time: 'last_extract_time'
});

exports.Prisma.Sym_node_communicationScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  queue: 'queue',
  communication_type: 'communication_type',
  lock_time: 'lock_time',
  locking_server_id: 'locking_server_id',
  last_lock_time: 'last_lock_time',
  last_lock_millis: 'last_lock_millis',
  success_count: 'success_count',
  fail_count: 'fail_count',
  skip_count: 'skip_count',
  total_success_count: 'total_success_count',
  total_fail_count: 'total_fail_count',
  total_success_millis: 'total_success_millis',
  total_fail_millis: 'total_fail_millis',
  batch_to_send_count: 'batch_to_send_count',
  node_priority: 'node_priority'
});

exports.Prisma.Sym_node_groupScalarFieldEnum = makeEnum({
  node_group_id: 'node_group_id',
  description: 'description',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_node_group_channel_wndScalarFieldEnum = makeEnum({
  node_group_id: 'node_group_id',
  channel_id: 'channel_id',
  start_time: 'start_time',
  end_time: 'end_time',
  enabled: 'enabled'
});

exports.Prisma.Sym_node_group_linkScalarFieldEnum = makeEnum({
  source_node_group_id: 'source_node_group_id',
  target_node_group_id: 'target_node_group_id',
  data_event_action: 'data_event_action',
  sync_config_enabled: 'sync_config_enabled',
  is_reversible: 'is_reversible',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_node_hostScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  host_name: 'host_name',
  instance_id: 'instance_id',
  ip_address: 'ip_address',
  os_user: 'os_user',
  os_name: 'os_name',
  os_arch: 'os_arch',
  os_version: 'os_version',
  available_processors: 'available_processors',
  free_memory_bytes: 'free_memory_bytes',
  total_memory_bytes: 'total_memory_bytes',
  max_memory_bytes: 'max_memory_bytes',
  java_version: 'java_version',
  java_vendor: 'java_vendor',
  jdbc_version: 'jdbc_version',
  symmetric_version: 'symmetric_version',
  timezone_offset: 'timezone_offset',
  heartbeat_time: 'heartbeat_time',
  last_restart_time: 'last_restart_time',
  create_time: 'create_time'
});

exports.Prisma.Sym_node_host_channel_statsScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  host_name: 'host_name',
  channel_id: 'channel_id',
  start_time: 'start_time',
  end_time: 'end_time',
  data_routed: 'data_routed',
  data_unrouted: 'data_unrouted',
  data_event_inserted: 'data_event_inserted',
  data_extracted: 'data_extracted',
  data_bytes_extracted: 'data_bytes_extracted',
  data_extracted_errors: 'data_extracted_errors',
  data_bytes_sent: 'data_bytes_sent',
  data_sent: 'data_sent',
  data_sent_errors: 'data_sent_errors',
  data_loaded: 'data_loaded',
  data_bytes_loaded: 'data_bytes_loaded',
  data_loaded_errors: 'data_loaded_errors',
  data_loaded_outgoing: 'data_loaded_outgoing',
  data_bytes_loaded_outgoing: 'data_bytes_loaded_outgoing',
  data_loaded_outgoing_errors: 'data_loaded_outgoing_errors'
});

exports.Prisma.Sym_node_host_job_statsScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  host_name: 'host_name',
  job_name: 'job_name',
  start_time: 'start_time',
  end_time: 'end_time',
  processed_count: 'processed_count',
  target_node_id: 'target_node_id',
  target_node_count: 'target_node_count'
});

exports.Prisma.Sym_node_host_statsScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  host_name: 'host_name',
  start_time: 'start_time',
  end_time: 'end_time',
  restarted: 'restarted',
  nodes_pulled: 'nodes_pulled',
  total_nodes_pull_time: 'total_nodes_pull_time',
  nodes_pushed: 'nodes_pushed',
  total_nodes_push_time: 'total_nodes_push_time',
  nodes_rejected: 'nodes_rejected',
  nodes_registered: 'nodes_registered',
  nodes_loaded: 'nodes_loaded',
  nodes_disabled: 'nodes_disabled',
  purged_data_rows: 'purged_data_rows',
  purged_data_event_rows: 'purged_data_event_rows',
  purged_batch_outgoing_rows: 'purged_batch_outgoing_rows',
  purged_batch_incoming_rows: 'purged_batch_incoming_rows',
  triggers_created_count: 'triggers_created_count',
  triggers_rebuilt_count: 'triggers_rebuilt_count',
  triggers_removed_count: 'triggers_removed_count'
});

exports.Prisma.Sym_node_identityScalarFieldEnum = makeEnum({
  node_id: 'node_id'
});

exports.Prisma.Sym_node_securityScalarFieldEnum = makeEnum({
  node_id: 'node_id',
  node_password: 'node_password',
  registration_enabled: 'registration_enabled',
  registration_time: 'registration_time',
  initial_load_enabled: 'initial_load_enabled',
  initial_load_time: 'initial_load_time',
  initial_load_end_time: 'initial_load_end_time',
  initial_load_id: 'initial_load_id',
  initial_load_create_by: 'initial_load_create_by',
  rev_initial_load_enabled: 'rev_initial_load_enabled',
  rev_initial_load_time: 'rev_initial_load_time',
  rev_initial_load_id: 'rev_initial_load_id',
  rev_initial_load_create_by: 'rev_initial_load_create_by',
  failed_logins: 'failed_logins',
  created_at_node_id: 'created_at_node_id'
});

exports.Prisma.Sym_notificationScalarFieldEnum = makeEnum({
  notification_id: 'notification_id',
  node_group_id: 'node_group_id',
  external_id: 'external_id',
  severity_level: 'severity_level',
  type: 'type',
  expression: 'expression',
  enabled: 'enabled',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_outgoing_batchScalarFieldEnum = makeEnum({
  batch_id: 'batch_id',
  node_id: 'node_id',
  channel_id: 'channel_id',
  status: 'status',
  error_flag: 'error_flag',
  sql_state: 'sql_state',
  sql_code: 'sql_code',
  sql_message: 'sql_message',
  last_update_hostname: 'last_update_hostname',
  last_update_time: 'last_update_time',
  create_time: 'create_time',
  summary: 'summary',
  ignore_count: 'ignore_count',
  byte_count: 'byte_count',
  load_flag: 'load_flag',
  extract_count: 'extract_count',
  sent_count: 'sent_count',
  load_count: 'load_count',
  reload_row_count: 'reload_row_count',
  other_row_count: 'other_row_count',
  data_row_count: 'data_row_count',
  extract_row_count: 'extract_row_count',
  load_row_count: 'load_row_count',
  data_insert_row_count: 'data_insert_row_count',
  data_update_row_count: 'data_update_row_count',
  data_delete_row_count: 'data_delete_row_count',
  extract_insert_row_count: 'extract_insert_row_count',
  extract_update_row_count: 'extract_update_row_count',
  extract_delete_row_count: 'extract_delete_row_count',
  load_insert_row_count: 'load_insert_row_count',
  load_update_row_count: 'load_update_row_count',
  load_delete_row_count: 'load_delete_row_count',
  network_millis: 'network_millis',
  filter_millis: 'filter_millis',
  load_millis: 'load_millis',
  router_millis: 'router_millis',
  extract_millis: 'extract_millis',
  transform_extract_millis: 'transform_extract_millis',
  transform_load_millis: 'transform_load_millis',
  load_id: 'load_id',
  common_flag: 'common_flag',
  fallback_insert_count: 'fallback_insert_count',
  fallback_update_count: 'fallback_update_count',
  ignore_row_count: 'ignore_row_count',
  missing_delete_count: 'missing_delete_count',
  skip_count: 'skip_count',
  total_extract_millis: 'total_extract_millis',
  total_load_millis: 'total_load_millis',
  extract_job_flag: 'extract_job_flag',
  extract_start_time: 'extract_start_time',
  transfer_start_time: 'transfer_start_time',
  load_start_time: 'load_start_time',
  failed_data_id: 'failed_data_id',
  failed_line_number: 'failed_line_number',
  create_by: 'create_by'
});

exports.Prisma.Sym_parameterScalarFieldEnum = makeEnum({
  external_id: 'external_id',
  node_group_id: 'node_group_id',
  param_key: 'param_key',
  param_value: 'param_value',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_registration_redirectScalarFieldEnum = makeEnum({
  registrant_external_id: 'registrant_external_id',
  registration_node_id: 'registration_node_id'
});

exports.Prisma.Sym_registration_requestScalarFieldEnum = makeEnum({
  node_group_id: 'node_group_id',
  external_id: 'external_id',
  status: 'status',
  host_name: 'host_name',
  ip_address: 'ip_address',
  attempt_count: 'attempt_count',
  registered_node_id: 'registered_node_id',
  error_message: 'error_message',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_routerScalarFieldEnum = makeEnum({
  router_id: 'router_id',
  target_catalog_name: 'target_catalog_name',
  target_schema_name: 'target_schema_name',
  target_table_name: 'target_table_name',
  source_node_group_id: 'source_node_group_id',
  target_node_group_id: 'target_node_group_id',
  router_type: 'router_type',
  router_expression: 'router_expression',
  sync_on_update: 'sync_on_update',
  sync_on_insert: 'sync_on_insert',
  sync_on_delete: 'sync_on_delete',
  use_source_catalog_schema: 'use_source_catalog_schema',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_sequenceScalarFieldEnum = makeEnum({
  sequence_name: 'sequence_name',
  current_value: 'current_value',
  increment_by: 'increment_by',
  min_value: 'min_value',
  max_value: 'max_value',
  cycle_flag: 'cycle_flag',
  cache_size: 'cache_size',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_table_reload_requestScalarFieldEnum = makeEnum({
  target_node_id: 'target_node_id',
  source_node_id: 'source_node_id',
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  create_time: 'create_time',
  create_table: 'create_table',
  delete_first: 'delete_first',
  reload_select: 'reload_select',
  before_custom_sql: 'before_custom_sql',
  reload_time: 'reload_time',
  load_id: 'load_id',
  processed: 'processed',
  channel_id: 'channel_id',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_table_reload_statusScalarFieldEnum = makeEnum({
  load_id: 'load_id',
  source_node_id: 'source_node_id',
  target_node_id: 'target_node_id',
  start_time: 'start_time',
  end_time: 'end_time',
  completed: 'completed',
  cancelled: 'cancelled',
  full_load: 'full_load',
  start_data_batch_id: 'start_data_batch_id',
  end_data_batch_id: 'end_data_batch_id',
  setup_batch_count: 'setup_batch_count',
  data_batch_count: 'data_batch_count',
  finalize_batch_count: 'finalize_batch_count',
  setup_batch_loaded: 'setup_batch_loaded',
  data_batch_loaded: 'data_batch_loaded',
  finalize_batch_loaded: 'finalize_batch_loaded',
  table_count: 'table_count',
  rows_loaded: 'rows_loaded',
  rows_count: 'rows_count',
  error_flag: 'error_flag',
  sql_state: 'sql_state',
  sql_code: 'sql_code',
  sql_message: 'sql_message',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.Sym_transform_columnScalarFieldEnum = makeEnum({
  transform_id: 'transform_id',
  include_on: 'include_on',
  target_column_name: 'target_column_name',
  source_column_name: 'source_column_name',
  pk: 'pk',
  transform_type: 'transform_type',
  transform_expression: 'transform_expression',
  transform_order: 'transform_order',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_transform_tableScalarFieldEnum = makeEnum({
  transform_id: 'transform_id',
  source_node_group_id: 'source_node_group_id',
  target_node_group_id: 'target_node_group_id',
  transform_point: 'transform_point',
  source_catalog_name: 'source_catalog_name',
  source_schema_name: 'source_schema_name',
  source_table_name: 'source_table_name',
  target_catalog_name: 'target_catalog_name',
  target_schema_name: 'target_schema_name',
  target_table_name: 'target_table_name',
  update_first: 'update_first',
  update_action: 'update_action',
  delete_action: 'delete_action',
  transform_order: 'transform_order',
  column_policy: 'column_policy',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_triggerScalarFieldEnum = makeEnum({
  trigger_id: 'trigger_id',
  source_catalog_name: 'source_catalog_name',
  source_schema_name: 'source_schema_name',
  source_table_name: 'source_table_name',
  channel_id: 'channel_id',
  reload_channel_id: 'reload_channel_id',
  sync_on_update: 'sync_on_update',
  sync_on_insert: 'sync_on_insert',
  sync_on_delete: 'sync_on_delete',
  sync_on_incoming_batch: 'sync_on_incoming_batch',
  name_for_update_trigger: 'name_for_update_trigger',
  name_for_insert_trigger: 'name_for_insert_trigger',
  name_for_delete_trigger: 'name_for_delete_trigger',
  sync_on_update_condition: 'sync_on_update_condition',
  sync_on_insert_condition: 'sync_on_insert_condition',
  sync_on_delete_condition: 'sync_on_delete_condition',
  custom_before_update_text: 'custom_before_update_text',
  custom_before_insert_text: 'custom_before_insert_text',
  custom_before_delete_text: 'custom_before_delete_text',
  custom_on_update_text: 'custom_on_update_text',
  custom_on_insert_text: 'custom_on_insert_text',
  custom_on_delete_text: 'custom_on_delete_text',
  external_select: 'external_select',
  tx_id_expression: 'tx_id_expression',
  channel_expression: 'channel_expression',
  excluded_column_names: 'excluded_column_names',
  included_column_names: 'included_column_names',
  sync_key_names: 'sync_key_names',
  use_stream_lobs: 'use_stream_lobs',
  use_capture_lobs: 'use_capture_lobs',
  use_capture_old_data: 'use_capture_old_data',
  use_handle_key_updates: 'use_handle_key_updates',
  stream_row: 'stream_row',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_trigger_histScalarFieldEnum = makeEnum({
  trigger_hist_id: 'trigger_hist_id',
  trigger_id: 'trigger_id',
  source_table_name: 'source_table_name',
  source_catalog_name: 'source_catalog_name',
  source_schema_name: 'source_schema_name',
  name_for_update_trigger: 'name_for_update_trigger',
  name_for_insert_trigger: 'name_for_insert_trigger',
  name_for_delete_trigger: 'name_for_delete_trigger',
  table_hash: 'table_hash',
  trigger_row_hash: 'trigger_row_hash',
  trigger_template_hash: 'trigger_template_hash',
  column_names: 'column_names',
  pk_column_names: 'pk_column_names',
  last_trigger_build_reason: 'last_trigger_build_reason',
  error_message: 'error_message',
  create_time: 'create_time',
  inactive_time: 'inactive_time'
});

exports.Prisma.Sym_trigger_routerScalarFieldEnum = makeEnum({
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  enabled: 'enabled',
  initial_load_order: 'initial_load_order',
  initial_load_select: 'initial_load_select',
  initial_load_delete_stmt: 'initial_load_delete_stmt',
  ping_back_enabled: 'ping_back_enabled',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time',
  description: 'description'
});

exports.Prisma.Sym_trigger_router_groupletScalarFieldEnum = makeEnum({
  grouplet_id: 'grouplet_id',
  trigger_id: 'trigger_id',
  router_id: 'router_id',
  applies_when: 'applies_when',
  create_time: 'create_time',
  last_update_by: 'last_update_by',
  last_update_time: 'last_update_time'
});

exports.Prisma.TIPOCONTScalarFieldEnum = makeEnum({
  NOME: 'NOME'
});

exports.Prisma.TIPOCREDScalarFieldEnum = makeEnum({
  NOME: 'NOME',
  VisivelParaOperador: 'VisivelParaOperador'
});

exports.Prisma.TITESTScalarFieldEnum = makeEnum({
  CODIGO: 'CODIGO',
  TEXTO: 'TEXTO',
  ABREVIADO: 'ABREVIADO',
  TipoTitEst_ID: 'TipoTitEst_ID',
  LiquidarCom: 'LiquidarCom',
  CorFundo: 'CorFundo',
  CorFonte: 'CorFonte',
  PermiteCompensarCheque: 'PermiteCompensarCheque',
  idWeb: 'idWeb'
});

exports.Prisma.TITHISScalarFieldEnum = makeEnum({
  ID: 'ID',
  CTRL_ID: 'CTRL_ID',
  DATA: 'DATA',
  DCTO: 'DCTO',
  VCTO: 'VCTO',
  VALOR: 'VALOR',
  CLIFOR: 'CLIFOR',
  SACADO: 'SACADO',
  ESTADO: 'ESTADO',
  HISTORICO: 'HISTORICO',
  historicotitulo: 'historicotitulo',
  cpmodo: 'cpmodo',
  cpnumero: 'cpnumero',
  NR_Alinea: 'NR_Alinea',
  NR_LTSerasa: 'NR_LTSerasa',
  dtocorr: 'dtocorr',
  VlPgto: 'VlPgto',
  Usuario: 'Usuario',
  recompra: 'recompra',
  encargosretorno: 'encargosretorno',
  valorpagamentoretorno: 'valorpagamentoretorno',
  dt_atualizacao: 'dt_atualizacao',
  carteiraocorr: 'carteiraocorr',
  evento: 'evento',
  recuperacaodespesas: 'recuperacaodespesas'
});

exports.Prisma.TITULOSCOBRANCAFIDC2ScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  PORTADOR: 'PORTADOR',
  EST_PORT: 'EST_PORT',
  NUMERO_PORT: 'NUMERO_PORT',
  DTPORTADOR: 'DTPORTADOR',
  CART_PORT: 'CART_PORT',
  DIRETA: 'DIRETA',
  BORD_PORT: 'BORD_PORT',
  CODCARTEIRA: 'CODCARTEIRA',
  FLOAT_PORT: 'FLOAT_PORT',
  PORTADOR_OLD: 'PORTADOR_OLD',
  EST_PORT_OLD: 'EST_PORT_OLD',
  numero_port_correspondente: 'numero_port_correspondente'
});

exports.Prisma.TITULOSCOBRANCAFIDCScalarFieldEnum = makeEnum({
  CTRL_ID: 'CTRL_ID',
  PORTADOR: 'PORTADOR',
  EST_PORT: 'EST_PORT',
  NUMERO_PORT: 'NUMERO_PORT',
  DTPORTADOR: 'DTPORTADOR',
  CART_PORT: 'CART_PORT',
  DIRETA: 'DIRETA',
  BORD_PORT: 'BORD_PORT',
  CODCARTEIRA: 'CODCARTEIRA',
  FLOAT_PORT: 'FLOAT_PORT',
  PORTADOR_OLD: 'PORTADOR_OLD',
  EST_PORT_OLD: 'EST_PORT_OLD',
  numero_port_correspondente: 'numero_port_correspondente'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Nome: 'Nome',
  Descricao: 'Descricao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.TarbancoScalarFieldEnum = makeEnum({
  id: 'id',
  banco: 'banco',
  codigo: 'codigo',
  tarifa: 'tarifa',
  valor: 'valor'
});

exports.Prisma.TarifasScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  valor: 'valor',
  padrao: 'padrao',
  titulos: 'titulos',
  cpagar: 'cpagar',
  codigo: 'codigo',
  recompra: 'recompra',
  padraofidc: 'padraofidc',
  padraofidc2: 'padraofidc2',
  formulatarifaesporadica: 'formulatarifaesporadica',
  AdicionaAoDesagioDaOperacao: 'AdicionaAoDesagioDaOperacao'
});

exports.Prisma.TermoSecuritizacaoTitulosScalarFieldEnum = makeEnum({
  TermSecurit: 'TermSecurit',
  TermSecuritAnexo: 'TermSecuritAnexo',
  Ctrl_ID: 'Ctrl_ID',
  Dt_Atualizacao: 'Dt_Atualizacao'
});

exports.Prisma.TermsecuritanexosScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Sequencia: 'Sequencia',
  Documento: 'Documento',
  Data_Emissao: 'Data_Emissao',
  Quantidade: 'Quantidade',
  Valor: 'Valor',
  Emitido: 'Emitido',
  dt_atualizacao: 'dt_atualizacao'
});

exports.Prisma.TextDBScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  texto: 'texto'
});

exports.Prisma.Thanos_bordero_operacoesScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id_empresa: 'id_empresa',
  id: 'id',
  codigo_cedente_erp: 'codigo_cedente_erp',
  documento_cedente: 'documento_cedente',
  valor_face: 'valor_face',
  valor_liquido: 'valor_liquido',
  prazo_medio: 'prazo_medio',
  data_bordero: 'data_bordero',
  data_liberacao: 'data_liberacao',
  situacao_bordero: 'situacao_bordero',
  numero_bordero_erp: 'numero_bordero_erp',
  fator_operacao: 'fator_operacao'
});

exports.Prisma.Thanos_contratoScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id_empresa: 'id_empresa',
  idWebCadastro: 'idWebCadastro',
  id: 'id',
  data_emissao: 'data_emissao',
  data_recebimento: 'data_recebimento',
  data_validade: 'data_validade',
  numero: 'numero',
  sequencia: 'sequencia',
  validade_indeterminada: 'validade_indeterminada',
  valor_limite: 'valor_limite'
});

exports.Prisma.Thanos_estado_confirmacao_upScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id: 'id',
  descricao: 'descricao'
});

exports.Prisma.Thanos_lancamentoScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id_empresa: 'id_empresa',
  id: 'id',
  valor_original: 'valor_original',
  saldo: 'saldo',
  vencimento: 'vencimento',
  vencimento_original: 'vencimento_original',
  numero_documento: 'numero_documento',
  identificador_erp: 'identificador_erp',
  codigo_erp: 'codigo_erp',
  tipo_erp: 'tipo_erp',
  codigo_cedente_erp: 'codigo_cedente_erp',
  documento_cedente: 'documento_cedente',
  codigo_sacado_erp: 'codigo_sacado_erp',
  documento_sacado: 'documento_sacado',
  data_pagamento: 'data_pagamento',
  valor_pagamento: 'valor_pagamento',
  codigo_estado_erp: 'codigo_estado_erp',
  codigo_status_erp: 'codigo_status_erp',
  status_erp: 'status_erp',
  codigo_banco_erp: 'codigo_banco_erp',
  situacao_pagamento: 'situacao_pagamento',
  cmc7: 'cmc7',
  modo_de_cobranca_id_erp: 'modo_de_cobranca_id_erp',
  estado_confirmacao_titulo_id_erp: 'estado_confirmacao_titulo_id_erp',
  chave_NFe: 'chave_NFe',
  descricao_estado_confirmacao_titulo_erp: 'descricao_estado_confirmacao_titulo_erp',
  modo_de_cobranca_nome_erp: 'modo_de_cobranca_nome_erp',
  data_inclusao: 'data_inclusao',
  excluido: 'excluido',
  insercao: 'insercao',
  status_cobranca: 'status_cobranca',
  numero_bancario: 'numero_bancario',
  bordero: 'bordero',
  id_cedente: 'id_cedente',
  id_sacado: 'id_sacado',
  id_tipo_lancamento: 'id_tipo_lancamento',
  id_modo_cobranca: 'id_modo_cobranca',
  id_estado: 'id_estado',
  id_confirmacao: 'id_confirmacao',
  id_portador: 'id_portador',
  id_banco: 'id_banco',
  codigo_banco: 'codigo_banco',
  agencia: 'agencia',
  conta: 'conta',
  descricao: 'descricao',
  nome_cedente: 'nome_cedente',
  nome_sacado: 'nome_sacado',
  razao_cedente: 'razao_cedente',
  razao_sacado: 'razao_sacado'
});

exports.Prisma.Thanos_modo_de_cobranca_upScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id: 'id',
  descricao: 'descricao',
  permite_portador: 'permite_portador'
});

exports.Prisma.Thanos_pessoa_upScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id: 'id',
  documento: 'documento',
  tipo_pessoa: 'tipo_pessoa',
  tipo_cadastro: 'tipo_cadastro',
  codigo: 'codigo',
  nome_fantasia: 'nome_fantasia',
  razao_social: 'razao_social',
  tipo_sociedade: 'tipo_sociedade',
  porte: 'porte',
  natureza_juridica: 'natureza_juridica',
  data_abertura: 'data_abertura',
  ramo_atividade: 'ramo_atividade',
  cnae_principal: 'cnae_principal',
  situacao_cadastral: 'situacao_cadastral',
  inscricao_estadual: 'inscricao_estadual',
  inscricao_municipal: 'inscricao_municipal',
  registro_junta_comercial: 'registro_junta_comercial',
  cep: 'cep',
  logradouro: 'logradouro',
  endereco: 'endereco',
  numero: 'numero',
  complemento: 'complemento',
  bairro: 'bairro',
  cidade: 'cidade',
  uf: 'uf',
  pais: 'pais',
  codigo_ibge: 'codigo_ibge',
  email: 'email',
  telefone: 'telefone',
  celular: 'celular',
  contato: 'contato',
  celular_contato: 'celular_contato',
  nome: 'nome',
  rg: 'rg',
  emissor: 'emissor',
  data_expedicao: 'data_expedicao',
  genero: 'genero',
  data_nascimento: 'data_nascimento',
  nacionalidade: 'nacionalidade',
  naturalidade: 'naturalidade',
  nome_mae: 'nome_mae',
  nome_pai: 'nome_pai',
  profissao: 'profissao',
  estado_civil: 'estado_civil',
  faturamento_contabil: 'faturamento_contabil',
  data_faturamento_contabil: 'data_faturamento_contabil',
  data_validade_faturamento_contabil: 'data_validade_faturamento_contabil',
  limite_credito_global: 'limite_credito_global',
  configuracoes_cedente: 'configuracoes_cedente',
  floating_minimo: 'floating_minimo'
});

exports.Prisma.Thanos_tipo_de_documento_siglaScalarFieldEnum = makeEnum({
  id: 'id',
  idWeb: 'idWeb',
  codigo: 'codigo',
  tipo: 'tipo',
  descricao: 'descricao',
  descricao_codigo: 'descricao_codigo',
  tipo_bordero: 'tipo_bordero'
});

exports.Prisma.Thanos_tipo_de_documento_upScalarFieldEnum = makeEnum({
  vchecksum: 'vchecksum',
  tenant: 'tenant',
  id: 'id',
  codigo: 'codigo',
  tipo: 'tipo',
  descricao: 'descricao',
  descricao_codigo: 'descricao_codigo'
});

exports.Prisma.TipoCobTarifaScalarFieldEnum = makeEnum({
  Numero: 'Numero',
  Descricao: 'Descricao',
  Servicos: 'Servicos'
});

exports.Prisma.TipoConsultaCreditoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  TipoConsulta: 'TipoConsulta',
  Descricao: 'Descricao',
  ValorTarifaConsultaCredito: 'ValorTarifaConsultaCredito',
  Dt_Atualizacao: 'Dt_Atualizacao',
  QuemAtualizou_ID: 'QuemAtualizou_ID'
});

exports.Prisma.TipoDctoTarifaScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  TipoDcto: 'TipoDcto',
  ValorDe: 'ValorDe',
  Valorate: 'Valorate',
  Tarifa: 'Tarifa'
});

exports.Prisma.TipoDocumentoCedenteScalarFieldEnum = makeEnum({
  NumeroTipoDocumentoCedente: 'NumeroTipoDocumentoCedente',
  Nome: 'Nome',
  Origem: 'Origem'
});

exports.Prisma.TipoDocumentoCedenteXCarteiraScalarFieldEnum = makeEnum({
  TipoDocumentoCedente_ID: 'TipoDocumentoCedente_ID',
  Carteira_ID: 'Carteira_ID',
  IncluirNaOperacao: 'IncluirNaOperacao',
  Dt_Atualizacao: 'Dt_Atualizacao'
});

exports.Prisma.TipoDocumentoSacadoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado',
  IncluirNoBordero: 'IncluirNoBordero'
});

exports.Prisma.TipoOcorrenciaProtestoScalarFieldEnum = makeEnum({
  ID: 'ID',
  Codigo: 'Codigo',
  Texto: 'Texto'
});

exports.Prisma.TipoOperacaoScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Descricao: 'Descricao'
});

exports.Prisma.TipoTitEstScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Descricao: 'Descricao',
  Especial: 'Especial',
  Liquidado: 'Liquidado',
  EmCartorioProtesto: 'EmCartorioProtesto',
  LiquidadoEmProtesto: 'LiquidadoEmProtesto',
  Parcial: 'Parcial',
  RegressoRenegociacao: 'RegressoRenegociacao',
  ChequeComProblema: 'ChequeComProblema',
  Aviso: 'Aviso',
  AvisoAlteracaoVencimento: 'AvisoAlteracaoVencimento',
  AvisoVeioCarteira: 'AvisoVeioCarteira',
  AvisoFoiCarteira: 'AvisoFoiCarteira',
  Historico: 'Historico',
  Perdido: 'Perdido',
  FomentoAProducao: 'FomentoAProducao',
  DeduzidoAbatido: 'DeduzidoAbatido'
});

exports.Prisma.TipocomissaoScalarFieldEnum = makeEnum({
  gerente: 'gerente',
  tipocomissao: 'tipocomissao',
  indicemonetario: 'indicemonetario',
  utilizaflot: 'utilizaflot',
  incluiadvalorem: 'incluiadvalorem',
  desconsideraradvaloremde: 'desconsideraradvaloremde'
});

exports.Prisma.TipodctoCPScalarFieldEnum = makeEnum({
  tipodcto: 'tipodcto',
  codigo: 'codigo',
  descricao: 'descricao',
  corfundo: 'corfundo',
  corletra: 'corletra',
  TipoPGFOR: 'TipoPGFOR'
});

exports.Prisma.TipodctoScalarFieldEnum = makeEnum({
  tipodcto: 'tipodcto',
  codigo: 'codigo',
  descricao: 'descricao',
  corfundo: 'corfundo',
  corletra: 'corletra',
  TipoBAN: 'TipoBAN',
  tipointegracao: 'tipointegracao'
});

exports.Prisma.TipoeventoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  nome: 'nome',
  Exportar: 'Exportar'
});

exports.Prisma.TipoprofScalarFieldEnum = makeEnum({
  tipo: 'tipo'
});

exports.Prisma.TipotarScalarFieldEnum = makeEnum({
  nome: 'nome'
});

exports.Prisma.TithisrecScalarFieldEnum = makeEnum({
  ctrl_id: 'ctrl_id',
  data: 'data',
  valorcalculo: 'valorcalculo',
  valornovo: 'valornovo',
  valorpago: 'valorpago',
  recuperacaodespesas: 'recuperacaodespesas'
});

exports.Prisma.TituloOperacaoProducaoScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  numero: 'numero',
  data: 'data',
  valor: 'valor',
  documento: 'documento',
  vencimento: 'vencimento',
  Pedido: 'Pedido',
  DtPedido: 'DtPedido',
  Sacado: 'Sacado'
});

exports.Prisma.TpAltCadImpScalarFieldEnum = makeEnum({
  codigo: 'codigo',
  descricao: 'descricao'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.UsuarioConsultaBureauCreditoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  QuemCriou: 'QuemCriou',
  Prestadora: 'Prestadora',
  Data: 'Data',
  Produto: 'Produto',
  SubProduto: 'SubProduto',
  QuantidadeProduto: 'QuantidadeProduto',
  QuantidadeSubProduto: 'QuantidadeSubProduto'
});

exports.Prisma.VADUCreditBoxCadastroScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Cadastro: 'Cadastro',
  RelatorioId: 'RelatorioId',
  ArquivoPDF: 'ArquivoPDF',
  Em: 'Em'
});

exports.Prisma.VADUCreditBoxCadastroXFeaturesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Cadastro: 'Cadastro',
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Tipo: 'Tipo',
  Consultar: 'Consultar'
});

exports.Prisma.VADUCreditBoxFeaturesScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Tipo: 'Tipo',
  Cedente: 'Cedente',
  Sacado: 'Sacado'
});

exports.Prisma.VADUGrupoDeAnaliseCamposScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  GrupoId: 'GrupoId',
  Campo: 'Campo'
});

exports.Prisma.VADUGrupoDeAnaliseCamposXTabelasWBACamposScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  CampoVADU: 'CampoVADU',
  CampoWBA: 'CampoWBA',
  TipoCadastro: 'TipoCadastro'
});

exports.Prisma.VADUGrupoDeAnaliseScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  GrupoId: 'GrupoId',
  Descricao: 'Descricao',
  GrupoRating: 'GrupoRating',
  RatingMin: 'RatingMin',
  RatingMax: 'RatingMax',
  QtdeAnalise: 'QtdeAnalise',
  QtdeRegras: 'QtdeRegras',
  QtdeValidacoes: 'QtdeValidacoes'
});

exports.Prisma.VeiculosScalarFieldEnum = makeEnum({
  id: 'id',
  Clifor: 'Clifor',
  Marca: 'Marca',
  Modelo: 'Modelo',
  Ano: 'Ano',
  Placa: 'Placa',
  Seguro: 'Seguro',
  Seguradora: 'Seguradora',
  ValorSeguro: 'ValorSeguro'
});

exports.Prisma.WBACentralDeRiscoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  Carteira_ID: 'Carteira_ID',
  Identificacao: 'Identificacao',
  PrazoClienteInativos: 'PrazoClienteInativos',
  Dt_Atualizacao: 'Dt_Atualizacao',
  Dt_Criacao: 'Dt_Criacao',
  Dt_Eliminado: 'Dt_Eliminado'
});

exports.Prisma.WBACreditoConsultaScalarFieldEnum = makeEnum({
  ID: 'ID',
  Sigcad_ID: 'Sigcad_ID',
  TipoConsulta_ID: 'TipoConsulta_ID',
  Em: 'Em',
  NomeArquivo: 'NomeArquivo',
  ExtensaoArquivo: 'ExtensaoArquivo',
  Tamanho: 'Tamanho',
  Arquivo: 'Arquivo'
});

exports.Prisma.WBACreditoOperacaoCamposScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  idbordero: 'idbordero',
  idcadastro: 'idcadastro',
  tipocadastro: 'tipocadastro',
  campo: 'campo',
  valor: 'valor'
});

exports.Prisma.WBACreditoOperacaoScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  idcedente: 'idcedente',
  cedentedocumento: 'cedentedocumento',
  cedentebairro: 'cedentebairro',
  cedentecep: 'cedentecep',
  cedentecidade: 'cedentecidade',
  cedentecodigoibge: 'cedentecodigoibge',
  cedentecomplemento: 'cedentecomplemento',
  cedentelogradouro: 'cedentelogradouro',
  cedenteuf: 'cedenteuf',
  cedentenome: 'cedentenome',
  codigobordero: 'codigobordero',
  data: 'data',
  documentoempresa: 'documentoempresa',
  grupoid: 'grupoid',
  idbordero: 'idbordero'
});

exports.Prisma.WBACreditoOperacaoTitulosScalarFieldEnum = makeEnum({
  Ctrl_ID: 'Ctrl_ID',
  idbordero: 'idbordero',
  idtitulo: 'idtitulo',
  nossonumero: 'nossonumero',
  numerodocumento: 'numerodocumento',
  tipodcto: 'tipodcto',
  valor: 'valor',
  vencimento: 'vencimento',
  desconto: 'desconto',
  descontolimite: 'descontolimite',
  agenciacheque: 'agenciacheque',
  bancocheque: 'bancocheque',
  cmc7cheque: 'cmc7cheque',
  contacheque: 'contacheque',
  pracacheque: 'pracacheque',
  assinaturanfe: 'assinaturanfe',
  chavenfe: 'chavenfe',
  cnpjemitentenfe: 'cnpjemitentenfe',
  cnpjcpfdestinatarionfe: 'cnpjcpfdestinatarionfe',
  datanfe: 'datanfe',
  tipooperacaonfe: 'tipooperacaonfe',
  idsacado: 'idsacado',
  sacadodocumento: 'sacadodocumento',
  sacadobairro: 'sacadobairro',
  sacadocep: 'sacadocep',
  sacadocidade: 'sacadocidade',
  sacadocodigoIbge: 'sacadocodigoIbge',
  sacadocomplemento: 'sacadocomplemento',
  sacadologradouro: 'sacadologradouro',
  sacadouf: 'sacadouf',
  sacadonome: 'sacadonome',
  arquivonfe: 'arquivonfe'
});

exports.Prisma.WBACreditoTipoConsultaConfiguracaoScalarFieldEnum = makeEnum({
  ID: 'ID',
  TipoConsulta_ID: 'TipoConsulta_ID',
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Tipo: 'Tipo',
  Selecionada: 'Selecionada'
});

exports.Prisma.WBACreditoTipoConsultaScalarFieldEnum = makeEnum({
  Codigo: 'Codigo',
  Nome: 'Nome',
  IsPJ: 'IsPJ'
});

exports.Prisma.Wba_empScalarFieldEnum = makeEnum({
  cd_emp: 'cd_emp',
  nr_rgstr_anfac_emp: 'nr_rgstr_anfac_emp'
});

exports.Prisma.Wba_rclmtemptpprmtrScalarFieldEnum = makeEnum({
  cd_emp: 'cd_emp',
  cd_tpprmtr: 'cd_tpprmtr',
  dt_inc_rclmtemptpprmtr: 'dt_inc_rclmtemptpprmtr',
  dt_fnl_rclmtemptpprmtr: 'dt_fnl_rclmtemptpprmtr',
  perc_rclmtemptpprmtr: 'perc_rclmtemptpprmtr',
  vlr_rdc_rclmtemptpprmtr: 'vlr_rdc_rclmtemptpprmtr',
  st_rlcmtemptpprmtr: 'st_rlcmtemptpprmtr',
  vlr_rlcmtemptpprmtr: 'vlr_rlcmtemptpprmtr',
  ds_rclmtemptpprmtr: 'ds_rclmtemptpprmtr'
});

exports.Prisma.Wba_tpprmtrScalarFieldEnum = makeEnum({
  cd_tpprmtr: 'cd_tpprmtr',
  ds_tpprmtr: 'ds_tpprmtr',
  sgl_tpprmtr: 'sgl_tpprmtr'
});


exports.Prisma.ModelName = makeEnum({
  Acesso: 'Acesso',
  ACGrupo: 'ACGrupo',
  ACGrupos: 'ACGrupos',
  AcheiRecheque: 'AcheiRecheque',
  ACHEIRECHEQUECHEQUES: 'ACHEIRECHEQUECHEQUES',
  AcheiRechequeLinha: 'AcheiRechequeLinha',
  ACHEIRECHEQUELOCALIZACAO: 'ACHEIRECHEQUELOCALIZACAO',
  ACHEIRECHEQUEMENSAGEM: 'ACHEIRECHEQUEMENSAGEM',
  ACHEIRECHEQUEOCORRENCIAS: 'ACHEIRECHEQUEOCORRENCIAS',
  ACHEIRECHEQUEPENDENCIAS: 'ACHEIRECHEQUEPENDENCIAS',
  ACHEIRECHEQUEPESSOATIPO: 'ACHEIRECHEQUEPESSOATIPO',
  ACHEIRECHEQUEREGCONSULTA: 'ACHEIRECHEQUEREGCONSULTA',
  ACHEIRECHEQUERG: 'ACHEIRECHEQUERG',
  ACHEIRECHEQUESITUACAO: 'ACHEIRECHEQUESITUACAO',
  ACHEIRECHEQUETELSANTERIORES: 'ACHEIRECHEQUETELSANTERIORES',
  ADAssinatura: 'ADAssinatura',
  ADDocumento: 'ADDocumento',
  AditivoOperacaoProducao: 'AditivoOperacaoProducao',
  ADQualificacaoAssinante: 'ADQualificacaoAssinante',
  ADTipoDocumento: 'ADTipoDocumento',
  Agencias: 'Agencias',
  AgendaAgendadoras: 'AgendaAgendadoras',
  agendamento: 'agendamento',
  AgendamentoTitulos: 'AgendamentoTitulos',
  AgendaRecebiveis: 'AgendaRecebiveis',
  AgendaRecebiveisCERC: 'AgendaRecebiveisCERC',
  AgendaRecebiveisEstado: 'AgendaRecebiveisEstado',
  AlertaBordero: 'AlertaBordero',
  AlertaTitulo: 'AlertaTitulo',
  alinea: 'alinea',
  AltCadImp: 'AltCadImp',
  ArquivoRetornoBanco: 'ArquivoRetornoBanco',
  ArquivoRetornoBancoDetalhe: 'ArquivoRetornoBancoDetalhe',
  ArquivoRetornoClienteCadastro: 'ArquivoRetornoClienteCadastro',
  ArquivoRetornoClienteCadastroXLayoutXCarteira: 'ArquivoRetornoClienteCadastroXLayoutXCarteira',
  ArquivoRetornoClienteLayout: 'ArquivoRetornoClienteLayout',
  ArquivoRetornoClienteLayoutXCarteira: 'ArquivoRetornoClienteLayoutXCarteira',
  ArquivoRetornoClientePublicacao: 'ArquivoRetornoClientePublicacao',
  ArquivoRetornoProcessado: 'ArquivoRetornoProcessado',
  AssinaturaBordero: 'AssinaturaBordero',
  assinaturaborderofaixadevalores: 'assinaturaborderofaixadevalores',
  BacenCaracteristicaEspecial: 'BacenCaracteristicaEspecial',
  BacenModalidadeOperacao: 'BacenModalidadeOperacao',
  BacenNaturezaOperacao: 'BacenNaturezaOperacao',
  Bancos: 'Bancos',
  BemEmpenhadoOperacaoProducao: 'BemEmpenhadoOperacaoProducao',
  Bens: 'Bens',
  BIConsolidacaoSaldos: 'BIConsolidacaoSaldos',
  bordtar: 'bordtar',
  BordTar_Importacao: 'BordTar_Importacao',
  bordtarcp: 'bordtarcp',
  BordTarFIDC: 'BordTarFIDC',
  BordTarFIDC2: 'BordTarFIDC2',
  CadAlertas: 'CadAlertas',
  cadanotacao: 'cadanotacao',
  CadastroEmail: 'CadastroEmail',
  CadastroItensComplementares: 'CadastroItensComplementares',
  CadBalancoPatrimonial: 'CadBalancoPatrimonial',
  CadConfiguracoes: 'CadConfiguracoes',
  cadcontabilidade: 'cadcontabilidade',
  CadContratoSocial: 'CadContratoSocial',
  cadcred: 'cadcred',
  caddctos: 'caddctos',
  cademail: 'cademail',
  CadEndividamento: 'CadEndividamento',
  CadFaturamentoContabil: 'CadFaturamentoContabil',
  cadfavor: 'cadfavor',
  cadFone: 'cadFone',
  cadGrupoEmpresarial: 'cadGrupoEmpresarial',
  CADINDICEMONETARIO: 'CADINDICEMONETARIO',
  cadpf: 'cadpf',
  cadpj: 'cadpj',
  cadprod: 'cadprod',
  cadprof: 'cadprof',
  cadsocio: 'cadsocio',
  cadtar: 'cadtar',
  cadtarfidc: 'cadtarfidc',
  cadtarfidc2: 'cadtarfidc2',
  CadVisita: 'CadVisita',
  CadVisitaItem: 'CadVisitaItem',
  CartaoDeCreditoBandeira: 'CartaoDeCreditoBandeira',
  CartaOperacaoProducao: 'CartaOperacaoProducao',
  Carteira: 'Carteira',
  Cartoes: 'Cartoes',
  CBAssociacao: 'CBAssociacao',
  CBAssociacaoContaCorrente: 'CBAssociacaoContaCorrente',
  CBAssociacaoExtratoBancario: 'CBAssociacaoExtratoBancario',
  CBConciliacaoBancaria: 'CBConciliacaoBancaria',
  cepbairro: 'cepbairro',
  CEPComplementar: 'CEPComplementar',
  ceplocal: 'ceplocal',
  cepnumero: 'cepnumero',
  CEPRestrito: 'CEPRestrito',
  CHEQUES: 'CHEQUES',
  ChequesCustodiante: 'ChequesCustodiante',
  ChequesCustodiante2: 'ChequesCustodiante2',
  ckdctos: 'ckdctos',
  classificacao: 'classificacao',
  CobConfiguracoes: 'CobConfiguracoes',
  CobEst: 'CobEst',
  CobInstrucoes: 'CobInstrucoes',
  Cobranca: 'Cobranca',
  CobTarifa: 'CobTarifa',
  comissao: 'comissao',
  concentre: 'concentre',
  concentreD: 'concentreD',
  concentreR: 'concentreR',
  ConfCadVisitaModelo: 'ConfCadVisitaModelo',
  ConfCadVisitaSelecao: 'ConfCadVisitaSelecao',
  ConfCadVisitaSelecaoValor: 'ConfCadVisitaSelecaoValor',
  ConfCadVisitaSubTopico: 'ConfCadVisitaSubTopico',
  ConfCadVisitaTopico: 'ConfCadVisitaTopico',
  ConfigUser: 'ConfigUser',
  ConfigUserCarteira: 'ConfigUserCarteira',
  Consulta: 'Consulta',
  ConsultaCadastroItem: 'ConsultaCadastroItem',
  ConsultaParametro: 'ConsultaParametro',
  ContasLancamentoComissao: 'ContasLancamentoComissao',
  contrato: 'contrato',
  ContratoFIDC: 'ContratoFIDC',
  ContratoFIDC2: 'ContratoFIDC2',
  ContratoProducao: 'ContratoProducao',
  contratot: 'contratot',
  control: 'control',
  ControleProtesto: 'ControleProtesto',
  ControleReciboCP: 'ControleReciboCP',
  Converte: 'Converte',
  CredenciadorasCERC: 'CredenciadorasCERC',
  CreditBureau: 'CreditBureau',
  CreditBureauLinha: 'CreditBureauLinha',
  creditbureaulinhaspc: 'creditbureaulinhaspc',
  CreditHub: 'CreditHub',
  CrvClassificacao: 'CrvClassificacao',
  CrvRespDetalhe: 'CrvRespDetalhe',
  CrvResposta: 'CrvResposta',
  csim: 'csim',
  csimparc: 'csimparc',
  CTRL_ID: 'CTRL_ID',
  dadosnf: 'dadosnf',
  DadosNFItens: 'DadosNFItens',
  datasSQL: 'datasSQL',
  Debenture: 'Debenture',
  DebentureAlteracaoEscritura: 'DebentureAlteracaoEscritura',
  DebentureAlteracaoSerie: 'DebentureAlteracaoSerie',
  DebentureCautela: 'DebentureCautela',
  DebentureEscritura: 'DebentureEscritura',
  DebentureRendimentoCautela: 'DebentureRendimentoCautela',
  DebentureResgate: 'DebentureResgate',
  DebentureSerie: 'DebentureSerie',
  DebentureSerieTransferencia: 'DebentureSerieTransferencia',
  DebentureSerieTransferenciaItens: 'DebentureSerieTransferenciaItens',
  DebentureTransferencia: 'DebentureTransferencia',
  DebentureTransferenciaItens: 'DebentureTransferenciaItens',
  DocumentoPublicacao: 'DocumentoPublicacao',
  DocumentoSacado: 'DocumentoSacado',
  dolar: 'dolar',
  EBExtratoBancario: 'EBExtratoBancario',
  EBLancamento: 'EBLancamento',
  Email: 'Email',
  EmailAnexo: 'EmailAnexo',
  EmailClienteGrupo: 'EmailClienteGrupo',
  EmailClientePerfil: 'EmailClientePerfil',
  EmailClientePerfilXRelatorio: 'EmailClientePerfilXRelatorio',
  EmailClienteRelatorio: 'EmailClienteRelatorio',
  EmailRotulo: 'EmailRotulo',
  EmailRotuloAssociado: 'EmailRotuloAssociado',
  EmailSmtp: 'EmailSmtp',
  EMClientes: 'EMClientes',
  Emprestimo: 'Emprestimo',
  EmprestimoParcela: 'EmprestimoParcela',
  EMRelatorios: 'EMRelatorios',
  Entidade: 'Entidade',
  EqChequeMais: 'EqChequeMais',
  EqChequeMaisConsultado: 'EqChequeMaisConsultado',
  EqChequeMaisCSF: 'EqChequeMaisCSF',
  EqEmpresarial: 'EqEmpresarial',
  EqEmpresarialClick: 'EqEmpresarialClick',
  EqEmpresarialComp: 'EqEmpresarialComp',
  EqEmpresarialConsult: 'EqEmpresarialConsult',
  EqEmpresarialCSF: 'EqEmpresarialCSF',
  EqEmpresarialFcHistCd: 'EqEmpresarialFcHistCd',
  EqEmpresarialFcHistSc: 'EqEmpresarialFcHistSc',
  EqEmpresarialPag: 'EqEmpresarialPag',
  EqEmpresarialPartic: 'EqEmpresarialPartic',
  EqEmpresarialPrtst: 'EqEmpresarialPrtst',
  EqEmpresarialSocio: 'EqEmpresarialSocio',
  EqEmpresarialTelefone: 'EqEmpresarialTelefone',
  EqEmpresarialVenc: 'EqEmpresarialVenc',
  EqEmprGold: 'EqEmprGold',
  EqEmprGoldAdministrador: 'EqEmprGoldAdministrador',
  EqEmprGoldcfutCompromisso: 'EqEmprGoldcfutCompromisso',
  EqEmprGoldcfutCredito: 'EqEmprGoldcfutCredito',
  EqEmprGoldChequDetCheq: 'EqEmprGoldChequDetCheq',
  EqEmprGoldChsusDetCheq: 'EqEmprGoldChsusDetCheq',
  EqEmprGoldcomproInd: 'EqEmprGoldcomproInd',
  EqEmprGoldConsultasNoMes: 'EqEmprGoldConsultasNoMes',
  EqEmprGoldcredobtInd: 'EqEmprGoldcredobtInd',
  EqEmprGoldDIAcontecimentos: 'EqEmprGoldDIAcontecimentos',
  EqEmprGoldDIRelacionamento: 'EqEmprGoldDIRelacionamento',
  EqEmprGoldExtProtesto: 'EqEmprGoldExtProtesto',
  EqEmprGoldHistCed: 'EqEmprGoldHistCed',
  EqEmprGoldHistoricoPagamento: 'EqEmprGoldHistoricoPagamento',
  EqEmprGoldHistSac: 'EqEmprGoldHistSac',
  EqEmprGoldInadimplencia: 'EqEmprGoldInadimplencia',
  EqEmprGoldInfMaisRecente: 'EqEmprGoldInfMaisRecente',
  EqEmprGoldPainelControle: 'EqEmprGoldPainelControle',
  EqEmprGoldParticipacao: 'EqEmprGoldParticipacao',
  EqEmprGoldPendencia: 'EqEmprGoldPendencia',
  EqEmprGoldPendenciaRestricao: 'EqEmprGoldPendenciaRestricao',
  EqEmprGoldpgtatra16a30: 'EqEmprGoldpgtatra16a30',
  EqEmprGoldpgtatra31a60: 'EqEmprGoldpgtatra31a60',
  EqEmprGoldpgtatra6a15: 'EqEmprGoldpgtatra6a15',
  EqEmprGoldpgtatraMaisDe60: 'EqEmprGoldpgtatraMaisDe60',
  EqEmprGoldpgtatraMedio: 'EqEmprGoldpgtatraMedio',
  EqEmprGoldpgtpontInd: 'EqEmprGoldpgtpontInd',
  EqEmprGoldpgtvistaInd: 'EqEmprGoldpgtvistaInd',
  EqEmprGoldPrincipaisFornec: 'EqEmprGoldPrincipaisFornec',
  EqEmprGoldProtesto: 'EqEmprGoldProtesto',
  EqEmprGoldRecuperacaoFalencia: 'EqEmprGoldRecuperacaoFalencia',
  EqEmprGoldSocioAcionista: 'EqEmprGoldSocioAcionista',
  EqEmprGoldTelefone: 'EqEmprGoldTelefone',
  EqEmprGoldTitulosAVencer: 'EqEmprGoldTitulosAVencer',
  EqEmprGoldUltimasConsultas: 'EqEmprGoldUltimasConsultas',
  EqPessoal: 'EqPessoal',
  EqPessoalAcCv: 'EqPessoalAcCv',
  EqPessoalAcCvTp: 'EqPessoalAcCvTp',
  EqPessoalClick: 'EqPessoalClick',
  EqPessoalComp: 'EqPessoalComp',
  EqPessoalConsult: 'EqPessoalConsult',
  EqPessoalConsultaSegmento: 'EqPessoalConsultaSegmento',
  EqPessoalCSF: 'EqPessoalCSF',
  EqPessoalFalencia: 'EqPessoalFalencia',
  EqPessoalGrafia: 'EqPessoalGrafia',
  EqPessoalPartic: 'EqPessoalPartic',
  EqPessoalPrtst: 'EqPessoalPrtst',
  EqPessoalVenc: 'EqPessoalVenc',
  EqTipoInformacao: 'EqTipoInformacao',
  EqTipoMoeda: 'EqTipoMoeda',
  EqTipoPessoa: 'EqTipoPessoa',
  EqTipoRelacionamento: 'EqTipoRelacionamento',
  EqTipoSituacaoReceita: 'EqTipoSituacaoReceita',
  EqTipoSituacaoSintegra: 'EqTipoSituacaoSintegra',
  EstadoCanhoto: 'EstadoCanhoto',
  EstadoConfirmacaoTitulo: 'EstadoConfirmacaoTitulo',
  EstadoPorSigbors: 'EstadoPorSigbors',
  EstadoPreConfirmacaoTitulo: 'EstadoPreConfirmacaoTitulo',
  EstadosBors: 'EstadosBors',
  evento: 'evento',
  EventoLancamento: 'EventoLancamento',
  FACREPR: 'FACREPR',
  FatorCFE: 'FatorCFE',
  fatores: 'fatores',
  Feed: 'Feed',
  FeedItem: 'FeedItem',
  Feriados: 'Feriados',
  FluxoTag: 'FluxoTag',
  FormalizacaoBordero: 'FormalizacaoBordero',
  FormalizacaoBorderoAssinatura: 'FormalizacaoBorderoAssinatura',
  FormalizacaoBorderoCarteira: 'FormalizacaoBorderoCarteira',
  FormalizacaoBorderoDocumento: 'FormalizacaoBorderoDocumento',
  FormalizacaoBorderoPagamento: 'FormalizacaoBorderoPagamento',
  FormalizacaoBorderoTarifa: 'FormalizacaoBorderoTarifa',
  FormalizacaoBorderoTitulo: 'FormalizacaoBorderoTitulo',
  FormalizacaoSistema: 'FormalizacaoSistema',
  fornecedor: 'fornecedor',
  gerentbc: 'gerentbc',
  GrpCliLimiteGrupoCedente: 'GrpCliLimiteGrupoCedente',
  GrpCliLimSacado: 'GrpCliLimSacado',
  GrupoEmpresa: 'GrupoEmpresa',
  GrupoEstadosBors: 'GrupoEstadosBors',
  HistoricoContabil: 'HistoricoContabil',
  HistoricoLiquidacoes: 'HistoricoLiquidacoes',
  iCheques: 'iCheques',
  iChequesHistorico: 'iChequesHistorico',
  IdentifDeImportBordero: 'IdentifDeImportBordero',
  Imobilizado: 'Imobilizado',
  ImportQuem: 'ImportQuem',
  IndiceAtualizacao: 'IndiceAtualizacao',
  IndiceAtualizacaoAlteracao: 'IndiceAtualizacaoAlteracao',
  IndiceAtualizacaoDesagio: 'IndiceAtualizacaoDesagio',
  IndiceAtualizacaoParticipativa: 'IndiceAtualizacaoParticipativa',
  IndiceAtualizacaoSelic: 'IndiceAtualizacaoSelic',
  INDICESMONETARIOS: 'INDICESMONETARIOS',
  IniFiles: 'IniFiles',
  iRec_ConfiguracaoCadastro: 'iRec_ConfiguracaoCadastro',
  irec_tb_controle_inifiles: 'irec_tb_controle_inifiles',
  ItensComplementares: 'ItensComplementares',
  IWBA_LGNUSR: 'IWBA_LGNUSR',
  IWBA_LOGSESSAO: 'IWBA_LOGSESSAO',
  IWBA_PRMTRS: 'IWBA_PRMTRS',
  IWBA_RLCMTSIGCADTPUSR: 'IWBA_RLCMTSIGCADTPUSR',
  IWBA_SACADO: 'IWBA_SACADO',
  IWBA_TITULO: 'IWBA_TITULO',
  IWBA_TPOCRR: 'IWBA_TPOCRR',
  IWBA_TPPRMTRS: 'IWBA_TPPRMTRS',
  IWBA_TPUSR: 'IWBA_TPUSR',
  LctosPgtoFIDC: 'LctosPgtoFIDC',
  LctosPgtoFIDC2: 'LctosPgtoFIDC2',
  LimiteGrupoCedente: 'LimiteGrupoCedente',
  Limitrofes: 'Limitrofes',
  LIMSACADO: 'LIMSACADO',
  logfatores: 'logfatores',
  LoginLogoutConexao: 'LoginLogoutConexao',
  ModoDeCobranca: 'ModoDeCobranca',
  ModoDeCobrancaBanco: 'ModoDeCobrancaBanco',
  ModoDeCobrancaConfiguracao: 'ModoDeCobrancaConfiguracao',
  Mutuo: 'Mutuo',
  MutuoPre: 'MutuoPre',
  NFeImportada: 'NFeImportada',
  NFeImportadaItens: 'NFeImportadaItens',
  NFeImportadaXSigbors: 'NFeImportadaXSigbors',
  NFeImportadaXSigfls: 'NFeImportadaXSigfls',
  NFeImportadaXSigflsMultiplasNFes: 'NFeImportadaXSigflsMultiplasNFes',
  NotaFiscalEntrada: 'NotaFiscalEntrada',
  NotaFiscalEntradaFatura: 'NotaFiscalEntradaFatura',
  NotaFiscalEntradaItem: 'NotaFiscalEntradaItem',
  ObservacoesSigcad: 'ObservacoesSigcad',
  obssigcad: 'obssigcad',
  OcorrenciaProtesto: 'OcorrenciaProtesto',
  ocorrenciaretorno: 'ocorrenciaretorno',
  OperacaoProducao: 'OperacaoProducao',
  OperadoresControle: 'OperadoresControle',
  PagamentoContaCorrente: 'PagamentoContaCorrente',
  PagamentoFluxo_FIDC: 'PagamentoFluxo_FIDC',
  PagamentoFluxo_FIDC2: 'PagamentoFluxo_FIDC2',
  pagamentos: 'pagamentos',
  PAGCLIENTE: 'PAGCLIENTE',
  PatrimonioLiquido: 'PatrimonioLiquido',
  PesquisaSigcadSetup: 'PesquisaSigcadSetup',
  PgtoFIDC: 'PgtoFIDC',
  PgtoFIDC2: 'PgtoFIDC2',
  PlanoDeConta: 'PlanoDeConta',
  PlanoDeContaFuncao: 'PlanoDeContaFuncao',
  PlanoDeContaFuncaoXEntidade: 'PlanoDeContaFuncaoXEntidade',
  PlanoDeContaVisao: 'PlanoDeContaVisao',
  PlanoDeContaXPlanoDeContaVisao: 'PlanoDeContaXPlanoDeContaVisao',
  PlanoDeContaXSig01XCarteira: 'PlanoDeContaXSig01XCarteira',
  pracacob: 'pracacob',
  pracacom: 'pracacom',
  promissoria: 'promissoria',
  prorata: 'prorata',
  prorataparcela: 'prorataparcela',
  ProvisaoFluxo: 'ProvisaoFluxo',
  ProvisaoFluxoItem: 'ProvisaoFluxoItem',
  ProvisaoFluxoItemCC: 'ProvisaoFluxoItemCC',
  PublicacaoProvisaoFluxo: 'PublicacaoProvisaoFluxo',
  PublicacaoProvisaoFluxoItem: 'PublicacaoProvisaoFluxoItem',
  PublicacaoProvisaoFluxoItemCC: 'PublicacaoProvisaoFluxoItemCC',
  recibo: 'recibo',
  rectar: 'rectar',
  RefBancaria: 'RefBancaria',
  RefComercial: 'RefComercial',
  RefPessoais: 'RefPessoais',
  Registro: 'Registro',
  RegistroEstado: 'RegistroEstado',
  RegistroRegistradora: 'RegistroRegistradora',
  Relato: 'Relato',
  Relato06: 'Relato06',
  Relato07: 'Relato07',
  Relato08: 'Relato08',
  Relato09: 'Relato09',
  RelatoSegmento: 'RelatoSegmento',
  RELATOSEGMENTO_FORNECEDORES: 'RELATOSEGMENTO_FORNECEDORES',
  RELATOSEGMENTO20_01_01_06: 'RELATOSEGMENTO20_01_01_06',
  RELATOSEGMENTO20_01_01_09: 'RELATOSEGMENTO20_01_01_09',
  RelatoSegmento20_01_01_14: 'RelatoSegmento20_01_01_14',
  RELATOSEGMENTO20_02_01_03: 'RELATOSEGMENTO20_02_01_03',
  RELATOSEGMENTO20_02_01_08: 'RELATOSEGMENTO20_02_01_08',
  RELATOSEGMENTO20_02_01_14: 'RELATOSEGMENTO20_02_01_14',
  RELATOSEGMENTO20_02_01_FONINF: 'RELATOSEGMENTO20_02_01_FONINF',
  RELATOSEGMENTO20_02_01_OCOR: 'RELATOSEGMENTO20_02_01_OCOR',
  RELATOSEGMENTO20_02_01_POTCOM: 'RELATOSEGMENTO20_02_01_POTCOM',
  RELATOSEGMENTO20_02_01_PRINFON: 'RELATOSEGMENTO20_02_01_PRINFON',
  RELATOSEGMENTO20_03_01_01: 'RELATOSEGMENTO20_03_01_01',
  RELATOSEGMENTO20_03_01_02: 'RELATOSEGMENTO20_03_01_02',
  RELATOSEGMENTO20_03_01_03: 'RELATOSEGMENTO20_03_01_03',
  RELATOSEGMENTO20_04_01_VLRFIN: 'RELATOSEGMENTO20_04_01_VLRFIN',
  RELATOSEGMENTO20_04_02_01: 'RELATOSEGMENTO20_04_02_01',
  RELATOSEGMENTO20_04_02_02: 'RELATOSEGMENTO20_04_02_02',
  RELATOSEGMENTO20_04_03_01: 'RELATOSEGMENTO20_04_03_01',
  RELATOSEGMENTO20_04_08_01: 'RELATOSEGMENTO20_04_08_01',
  RELATOSEGMENTO20_04_10_01: 'RELATOSEGMENTO20_04_10_01',
  RELATOSEGMENTO20_07_01_RISK: 'RELATOSEGMENTO20_07_01_RISK',
  RELATOSEGMENTO20_07_01_RISKMES: 'RELATOSEGMENTO20_07_01_RISKMES',
  RelatoSegmento20_89_00_00: 'RelatoSegmento20_89_00_00',
  RelatoSegmento20_89_01_01: 'RelatoSegmento20_89_01_01',
  RelatoSegmento20_89_01_02: 'RelatoSegmento20_89_01_02',
  RelatoSegmento20_89_01_03: 'RelatoSegmento20_89_01_03',
  RelatoSegmento20_89_02_01: 'RelatoSegmento20_89_02_01',
  RelatoSegmento20_89_02_02: 'RelatoSegmento20_89_02_02',
  RelatoSegmento20_89_02_03: 'RelatoSegmento20_89_02_03',
  RelatoSegmento20_89_02_04: 'RelatoSegmento20_89_02_04',
  RelatoSegmento20_89_02_05: 'RelatoSegmento20_89_02_05',
  RelatoSegmento20_89_02_06: 'RelatoSegmento20_89_02_06',
  RelatoSegmento20_89_02_07: 'RelatoSegmento20_89_02_07',
  RelatoSegmento20_89_02_08: 'RelatoSegmento20_89_02_08',
  RelatoSegmento20_89_02_09: 'RelatoSegmento20_89_02_09',
  RelatoSegmento20_89_02_10: 'RelatoSegmento20_89_02_10',
  RelatoSegmento20_89_02_11: 'RelatoSegmento20_89_02_11',
  RELATOSEGMENTOBASE: 'RELATOSEGMENTOBASE',
  RelatoSegmentoFatAutor: 'RelatoSegmentoFatAutor',
  RelatoSegmentoLinha: 'RelatoSegmentoLinha',
  RiscoSacado: 'RiscoSacado',
  RiscoSacadoEstadoConfirmacaoTitulo: 'RiscoSacadoEstadoConfirmacaoTitulo',
  RiscoSacadoModoDeCobranca: 'RiscoSacadoModoDeCobranca',
  RiscoSacadoTag: 'RiscoSacadoTag',
  Rocket: 'Rocket',
  SaldoInicialCaixa: 'SaldoInicialCaixa',
  SENHAS: 'SENHAS',
  SENHASLOG: 'SENHASLOG',
  SENHASNOVA: 'SENHASNOVA',
  SenhasXAcesso: 'SenhasXAcesso',
  SeResultado: 'SeResultado',
  SerieNF: 'SerieNF',
  ServicoLocalizacaoCadastro: 'ServicoLocalizacaoCadastro',
  ServicoNF: 'ServicoNF',
  ShAtivacao: 'ShAtivacao',
  ShAtivacaoMemoriaOpcional: 'ShAtivacaoMemoriaOpcional',
  ShAtivacaoXProdutoXMaquina: 'ShAtivacaoXProdutoXMaquina',
  ShMaquina: 'ShMaquina',
  ShOpcional: 'ShOpcional',
  ShProduto: 'ShProduto',
  ShProdutoXMaquina: 'ShProdutoXMaquina',
  ShProdutoXMaquinaXOpcional: 'ShProdutoXMaquinaXOpcional',
  ShProdutoXOpcional: 'ShProdutoXOpcional',
  SIG01: 'SIG01',
  SIG02: 'SIG02',
  SIG03: 'SIG03',
  SIG04: 'SIG04',
  SIGBDCHQ: 'SIGBDCHQ',
  Sigbdchq_Importacao: 'Sigbdchq_Importacao',
  SIGBDPAG: 'SIGBDPAG',
  SIGBDPAG_FIDC: 'SIGBDPAG_FIDC',
  SIGBDPAG_FIDC2: 'SIGBDPAG_FIDC2',
  SIGBORS: 'SIGBORS',
  Sigbors_Importacao: 'Sigbors_Importacao',
  SigborsCarteira: 'SigborsCarteira',
  SigborsCarteiraXCadProf: 'SigborsCarteiraXCadProf',
  SigborsCarteiraXCadSocio: 'SigborsCarteiraXCadSocio',
  SIGBORSCP: 'SIGBORSCP',
  SigBorsImportacao: 'SigBorsImportacao',
  SigborsVA: 'SigborsVA',
  SigborsVACarteira: 'SigborsVACarteira',
  SigborsXConsultaCredito: 'SigborsXConsultaCredito',
  SigborsXFatorCFE: 'SigborsXFatorCFE',
  SIGCAD: 'SIGCAD',
  Sigcad_Importacao: 'Sigcad_Importacao',
  SigcadXCarteira: 'SigcadXCarteira',
  SigcadXCarteiraXFormalizacaoSistema: 'SigcadXCarteiraXFormalizacaoSistema',
  SIGCRE: 'SIGCRE',
  SIGDES: 'SIGDES',
  SIGFCS: 'SIGFCS',
  SIGFIDC: 'SIGFIDC',
  SIGFIDC2: 'SIGFIDC2',
  SIGFLS: 'SIGFLS',
  Sigfls_Importacao: 'Sigfls_Importacao',
  SIGFLSCP: 'SIGFLSCP',
  SigflsXEmprestimoParcela: 'SigflsXEmprestimoParcela',
  SIGFLU: 'SIGFLU',
  sigpag: 'sigpag',
  sigrec: 'sigrec',
  SigrecXFluxo: 'SigrecXFluxo',
  SIGVEN: 'SIGVEN',
  SituacaoTributaria: 'SituacaoTributaria',
  SPCMaxi: 'SPCMaxi',
  SPCMaxiACAO: 'SPCMaxiACAO',
  SPCMaxiADMI: 'SPCMaxiADMI',
  SPCMaxiAESE: 'SPCMaxiAESE',
  SPCMaxiALDO: 'SPCMaxiALDO',
  SPCMaxiALIDE: 'SPCMaxiALIDE',
  SPCMaxiALOBI: 'SPCMaxiALOBI',
  SPCMaxiANTE: 'SPCMaxiANTE',
  SPCMaxiATEM: 'SPCMaxiATEM',
  SPCMaxiBACDD: 'SPCMaxiBACDD',
  SPCMaxiBAIN: 'SPCMaxiBAIN',
  SPCMaxiCASO: 'SPCMaxiCASO',
  SPCMaxiCCOS: 'SPCMaxiCCOS',
  SPCMaxiCHLO: 'SPCMaxiCHLO',
  SPCMaxiCHSF: 'SPCMaxiCHSF',
  SPCMaxiCHSFU: 'SPCMaxiCHSFU',
  SPCMaxiCOACDI: 'SPCMaxiCOACDI',
  SPCMaxiCOADI: 'SPCMaxiCOADI',
  SPCMaxiCODD: 'SPCMaxiCODD',
  SPCMaxiCODDSRS: 'SPCMaxiCODDSRS',
  SPCMaxiCONRG: 'SPCMaxiCONRG',
  SPCMaxiCONTU: 'SPCMaxiCONTU',
  SPCMaxiCOOR: 'SPCMaxiCOOR',
  SPCMaxiCOOS: 'SPCMaxiCOOS',
  SPCMaxiCOOSRS: 'SPCMaxiCOOSRS',
  SPCMaxiCORE: 'SPCMaxiCORE',
  SPCMaxiCOSRS: 'SPCMaxiCOSRS',
  SPCMaxiCRCH: 'SPCMaxiCRCH',
  SPCMaxiCRCO: 'SPCMaxiCRCO',
  SPCMaxiCSFA: 'SPCMaxiCSFA',
  SPCMaxiCSFAC: 'SPCMaxiCSFAC',
  SPCMaxiDAB: 'SPCMaxiDAB',
  SPCMaxiDIVEN: 'SPCMaxiDIVEN',
  SPCMaxiDPVAT: 'SPCMaxiDPVAT',
  SPCMaxiECCO: 'SPCMaxiECCO',
  SPCMaxiFATPR: 'SPCMaxiFATPR',
  SPCMaxiFILIAL: 'SPCMaxiFILIAL',
  SPCMaxiGEPJ: 'SPCMaxiGEPJ',
  SPCMaxiGRAFIAPJ: 'SPCMaxiGRAFIAPJ',
  SPCMaxiGRAV: 'SPCMaxiGRAV',
  SPCMaxiHICC: 'SPCMaxiHICC',
  SPCMaxiHICHDD: 'SPCMaxiHICHDD',
  SPCMaxiHISCH: 'SPCMaxiHISCH',
  SPCMaxiHPNE: 'SPCMaxiHPNE',
  SPCMaxiINAD: 'SPCMaxiINAD',
  SPCMaxiINCOMP: 'SPCMaxiINCOMP',
  SPCMaxiINFC: 'SPCMaxiINFC',
  SPCMaxiINPJ: 'SPCMaxiINPJ',
  SPCMaxiIRMPF: 'SPCMaxiIRMPF',
  SPCMaxiIRMPJ: 'SPCMaxiIRMPJ',
  SPCMaxiLICRPJ: 'SPCMaxiLICRPJ',
  SPCMaxiLICRS: 'SPCMaxiLICRS',
  SPCMaxiLOVE: 'SPCMaxiLOVE',
  SPCMaxiMEBE: 'SPCMaxiMEBE',
  SPCMaxiMECO: 'SPCMaxiMECO',
  SPCMaxiOBITO: 'SPCMaxiOBITO',
  SPCMaxiOCUP: 'SPCMaxiOCUP',
  SPCMaxiPAEM: 'SPCMaxiPAEM',
  SPCMaxiPAFA: 'SPCMaxiPAFA',
  SPCMaxiPEFI: 'SPCMaxiPEFI',
  SPCMaxiPROT: 'SPCMaxiPROT',
  SPCMaxiPRPR: 'SPCMaxiPRPR',
  SPCMaxiQSMCPJ: 'SPCMaxiQSMCPJ',
  SPCMaxiRECO: 'SPCMaxiRECO',
  SPCMaxiREFI: 'SPCMaxiREFI',
  SPCMaxiREFNE: 'SPCMaxiREFNE',
  SPCMaxiRENES: 'SPCMaxiRENES',
  SPCMaxiRENFE: 'SPCMaxiRENFE',
  SPCMaxiREPRS: 'SPCMaxiREPRS',
  SPCMaxiRICR: 'SPCMaxiRICR',
  SPCMaxiRMAF: 'SPCMaxiRMAF',
  SPCMaxiROFU: 'SPCMaxiROFU',
  SPCMaxiRSDM: 'SPCMaxiRSDM',
  SPCMaxiRSSM: 'SPCMaxiRSSM',
  SPCMaxiSOCI: 'SPCMaxiSOCI',
  SPCMaxiSPC: 'SPCMaxiSPC',
  SPCMaxiSSDM: 'SPCMaxiSSDM',
  SPCMaxiSSTM: 'SPCMaxiSSTM',
  SPCMaxiTECO: 'SPCMaxiTECO',
  SPCMaxiTECOA: 'SPCMaxiTECOA',
  SPCMaxiTELAL: 'SPCMaxiTELAL',
  SPCMaxiTEVI: 'SPCMaxiTEVI',
  SPCMaxiUCON: 'SPCMaxiUCON',
  SPCMaxiUEIN: 'SPCMaxiUEIN',
  SPCMaxiUTIN: 'SPCMaxiUTIN',
  SrvcoLocalizacaoCadastroADO: 'SrvcoLocalizacaoCadastroADO',
  SrvcoLocalizacaoCadastroWBA: 'SrvcoLocalizacaoCadastroWBA',
  sym_channel: 'sym_channel',
  sym_conflict: 'sym_conflict',
  sym_context: 'sym_context',
  sym_data: 'sym_data',
  sym_data_event: 'sym_data_event',
  sym_data_gap: 'sym_data_gap',
  sym_extension: 'sym_extension',
  sym_extract_request: 'sym_extract_request',
  sym_file_incoming: 'sym_file_incoming',
  sym_file_snapshot: 'sym_file_snapshot',
  sym_file_trigger: 'sym_file_trigger',
  sym_file_trigger_router: 'sym_file_trigger_router',
  sym_grouplet: 'sym_grouplet',
  sym_grouplet_link: 'sym_grouplet_link',
  sym_incoming_batch: 'sym_incoming_batch',
  sym_incoming_error: 'sym_incoming_error',
  sym_job: 'sym_job',
  sym_load_filter: 'sym_load_filter',
  sym_lock: 'sym_lock',
  sym_monitor: 'sym_monitor',
  sym_monitor_event: 'sym_monitor_event',
  sym_node: 'sym_node',
  sym_node_channel_ctl: 'sym_node_channel_ctl',
  sym_node_communication: 'sym_node_communication',
  sym_node_group: 'sym_node_group',
  sym_node_group_channel_wnd: 'sym_node_group_channel_wnd',
  sym_node_group_link: 'sym_node_group_link',
  sym_node_host: 'sym_node_host',
  sym_node_host_channel_stats: 'sym_node_host_channel_stats',
  sym_node_host_job_stats: 'sym_node_host_job_stats',
  sym_node_host_stats: 'sym_node_host_stats',
  sym_node_identity: 'sym_node_identity',
  sym_node_security: 'sym_node_security',
  sym_notification: 'sym_notification',
  sym_outgoing_batch: 'sym_outgoing_batch',
  sym_parameter: 'sym_parameter',
  sym_registration_redirect: 'sym_registration_redirect',
  sym_registration_request: 'sym_registration_request',
  sym_router: 'sym_router',
  sym_sequence: 'sym_sequence',
  sym_table_reload_request: 'sym_table_reload_request',
  sym_table_reload_status: 'sym_table_reload_status',
  sym_transform_column: 'sym_transform_column',
  sym_transform_table: 'sym_transform_table',
  sym_trigger: 'sym_trigger',
  sym_trigger_hist: 'sym_trigger_hist',
  sym_trigger_router: 'sym_trigger_router',
  sym_trigger_router_grouplet: 'sym_trigger_router_grouplet',
  Tag: 'Tag',
  tarbanco: 'tarbanco',
  tarifas: 'tarifas',
  TermoSecuritizacaoTitulos: 'TermoSecuritizacaoTitulos',
  termsecuritanexos: 'termsecuritanexos',
  TextDB: 'TextDB',
  thanos_bordero_operacoes: 'thanos_bordero_operacoes',
  thanos_contrato: 'thanos_contrato',
  thanos_estado_confirmacao_up: 'thanos_estado_confirmacao_up',
  thanos_lancamento: 'thanos_lancamento',
  thanos_modo_de_cobranca_up: 'thanos_modo_de_cobranca_up',
  thanos_pessoa_up: 'thanos_pessoa_up',
  thanos_tipo_de_documento_sigla: 'thanos_tipo_de_documento_sigla',
  thanos_tipo_de_documento_up: 'thanos_tipo_de_documento_up',
  TipoCobTarifa: 'TipoCobTarifa',
  tipocomissao: 'tipocomissao',
  TipoConsultaCredito: 'TipoConsultaCredito',
  TIPOCONT: 'TIPOCONT',
  TIPOCRED: 'TIPOCRED',
  tipodcto: 'tipodcto',
  tipodctoCP: 'tipodctoCP',
  TipoDctoTarifa: 'TipoDctoTarifa',
  TipoDocumentoCedente: 'TipoDocumentoCedente',
  TipoDocumentoCedenteXCarteira: 'TipoDocumentoCedenteXCarteira',
  TipoDocumentoSacado: 'TipoDocumentoSacado',
  tipoevento: 'tipoevento',
  TipoOcorrenciaProtesto: 'TipoOcorrenciaProtesto',
  TipoOperacao: 'TipoOperacao',
  tipoprof: 'tipoprof',
  tipotar: 'tipotar',
  TipoTitEst: 'TipoTitEst',
  TITEST: 'TITEST',
  TITHIS: 'TITHIS',
  tithisrec: 'tithisrec',
  TituloOperacaoProducao: 'TituloOperacaoProducao',
  TITULOSCOBRANCAFIDC: 'TITULOSCOBRANCAFIDC',
  TITULOSCOBRANCAFIDC2: 'TITULOSCOBRANCAFIDC2',
  TpAltCadImp: 'TpAltCadImp',
  UsuarioConsultaBureauCredito: 'UsuarioConsultaBureauCredito',
  VADUCreditBoxCadastro: 'VADUCreditBoxCadastro',
  VADUCreditBoxCadastroXFeatures: 'VADUCreditBoxCadastroXFeatures',
  VADUCreditBoxFeatures: 'VADUCreditBoxFeatures',
  VADUGrupoDeAnalise: 'VADUGrupoDeAnalise',
  VADUGrupoDeAnaliseCampos: 'VADUGrupoDeAnaliseCampos',
  VADUGrupoDeAnaliseCamposXTabelasWBACampos: 'VADUGrupoDeAnaliseCamposXTabelasWBACampos',
  Veiculos: 'Veiculos',
  wba_emp: 'wba_emp',
  wba_rclmtemptpprmtr: 'wba_rclmtemptpprmtr',
  wba_tpprmtr: 'wba_tpprmtr',
  WBACentralDeRisco: 'WBACentralDeRisco',
  WBACreditoConsulta: 'WBACreditoConsulta',
  WBACreditoOperacao: 'WBACreditoOperacao',
  WBACreditoOperacaoCampos: 'WBACreditoOperacaoCampos',
  WBACreditoOperacaoTitulos: 'WBACreditoOperacaoTitulos',
  WBACreditoTipoConsulta: 'WBACreditoTipoConsulta',
  WBACreditoTipoConsultaConfiguracao: 'WBACreditoTipoConsultaConfiguracao'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

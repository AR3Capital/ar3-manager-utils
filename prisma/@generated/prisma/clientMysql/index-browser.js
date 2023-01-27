
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

exports.Prisma.AuditoriaScalarFieldEnum = makeEnum({
  action: 'action',
  usuario: 'usuario',
  data: 'data',
  modulo: 'modulo',
  id: 'id'
});

exports.Prisma.BorderoScalarFieldEnum = makeEnum({
  id: 'id',
  carteira_id: 'carteira_id'
});

exports.Prisma.CarteiraScalarFieldEnum = makeEnum({
  id: 'id',
  fiduc_fundo_id: 'fiduc_fundo_id'
});

exports.Prisma.Carteira_n_cedentesScalarFieldEnum = makeEnum({
  id: 'id',
  carteira_id: 'carteira_id',
  cedente_id: 'cedente_id'
});

exports.Prisma.CedenteScalarFieldEnum = makeEnum({
  id: 'id',
  pessoa_id: 'pessoa_id',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  abertura: 'abertura',
  cnpj: 'cnpj',
  endereco: 'endereco',
  numero: 'numero',
  cep: 'cep',
  bairro: 'bairro',
  cidade: 'cidade',
  uf: 'uf',
  telefone: 'telefone'
});

exports.Prisma.Cedente_analiseScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  cedente: 'cedente'
});

exports.Prisma.Cedente_n_sacadosScalarFieldEnum = makeEnum({
  id: 'id',
  cedente: 'cedente',
  sacado: 'sacado'
});

exports.Prisma.ChecagemScalarFieldEnum = makeEnum({
  id: 'id',
  nf: 'nf',
  status: 'status',
  usuario: 'usuario',
  titulos: 'titulos'
});

exports.Prisma.Fidic_fundoScalarFieldEnum = makeEnum({
  id: 'id',
  pessoa_id: 'pessoa_id',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  abertura: 'abertura',
  cnpj: 'cnpj'
});

exports.Prisma.Fidic_fundo_x_usuarioScalarFieldEnum = makeEnum({
  id: 'id',
  usuario: 'usuario',
  fidic: 'fidic'
});

exports.Prisma.OrganogramaScalarFieldEnum = makeEnum({
  id: 'id',
  organograma_id: 'organograma_id'
});

exports.Prisma.Organograma_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.Organograma_x_regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id',
  organograma_id: 'organograma_id',
  regiao_atuacao_id: 'regiao_atuacao_id'
});

exports.Prisma.Organograma_x_usuarioScalarFieldEnum = makeEnum({
  id: 'id',
  organograma_id: 'organograma_id',
  usuario_id: 'usuario_id'
});

exports.Prisma.PessoaScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  sobrenome: 'sobrenome',
  sexo: 'sexo',
  nascimento: 'nascimento',
  cpf: 'cpf',
  rg: 'rg'
});

exports.Prisma.PlataformaScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  plataforma_papel_tipo_id: 'plataforma_papel_tipo_id'
});

exports.Prisma.Plataforma_papel_tipoScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Plataforma_x_regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id',
  plataforma_id: 'plataforma_id',
  regiao_atuacao_id: 'regiao_atuacao_id'
});

exports.Prisma.Plataforma_x_usuarioScalarFieldEnum = makeEnum({
  id: 'id',
  plataforma_id: 'plataforma_id',
  usuario_id: 'usuario_id'
});

exports.Prisma.Regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome',
  regiao_atuacao_tipo_id: 'regiao_atuacao_tipo_id'
});

exports.Prisma.Regiao_atuacao_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.SacadoScalarFieldEnum = makeEnum({
  id: 'id',
  pessoa_id: 'pessoa_id',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  abertura: 'abertura',
  cnpj: 'cnpj'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TituloScalarFieldEnum = makeEnum({
  id: 'id',
  titulo_tipo_id: 'titulo_tipo_id',
  bordero_id: 'bordero_id',
  nf: 'nf',
  valor: 'valor',
  vencimento: 'vencimento',
  numero: 'numero',
  emissao: 'emissao',
  parcela: 'parcela'
});

exports.Prisma.Titulo_itensScalarFieldEnum = makeEnum({
  id: 'id',
  titulo_id: 'titulo_id'
});

exports.Prisma.Titulo_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  senha: 'senha',
  pessoa_id: 'pessoa_id',
  status: 'status',
  primeiro_acesso: 'primeiro_acesso',
  confirmou_cadastro: 'confirmou_cadastro',
  codigo_confirma_cadastro: 'codigo_confirma_cadastro',
  codigo_reset_senha: 'codigo_reset_senha',
  codigo_data_expiracao: 'codigo_data_expiracao',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Usuario_perfilScalarFieldEnum = makeEnum({
  id: 'id',
  senha: 'senha',
  usuario_id: 'usuario_id',
  usuario_perfil_tipo_id: 'usuario_perfil_tipo_id'
});

exports.Prisma.Usuario_perfil_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});


exports.Prisma.ModelName = makeEnum({
  auditoria: 'auditoria',
  bordero: 'bordero',
  carteira: 'carteira',
  cedente: 'cedente',
  cedente_analise: 'cedente_analise',
  cedente_n_sacados: 'cedente_n_sacados',
  checagem: 'checagem',
  fidic_fundo: 'fidic_fundo',
  fidic_fundo_x_usuario: 'fidic_fundo_x_usuario',
  organograma: 'organograma',
  organograma_tipo: 'organograma_tipo',
  organograma_x_regiao_atuacao: 'organograma_x_regiao_atuacao',
  pessoa: 'pessoa',
  plataforma: 'plataforma',
  plataforma_papel_tipo: 'plataforma_papel_tipo',
  plataforma_x_regiao_atuacao: 'plataforma_x_regiao_atuacao',
  regiao_atuacao: 'regiao_atuacao',
  regiao_atuacao_tipo: 'regiao_atuacao_tipo',
  sacado: 'sacado',
  titulo: 'titulo',
  titulo_tipo: 'titulo_tipo',
  usuario: 'usuario',
  usuario_perfil_tipo: 'usuario_perfil_tipo',
  carteira_n_cedentes: 'carteira_n_cedentes',
  organograma_x_usuario: 'organograma_x_usuario',
  plataforma_x_usuario: 'plataforma_x_usuario',
  titulo_itens: 'titulo_itens',
  usuario_perfil: 'usuario_perfil'
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

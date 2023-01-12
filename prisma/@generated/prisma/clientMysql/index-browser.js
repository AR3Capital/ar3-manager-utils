
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
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.6.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
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

exports.Prisma.Fidic_fundo_carteira_n_cedentesScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Fidic_fundo_x_usuarioScalarFieldEnum = makeEnum({
  id: 'id',
  usuario: 'usuario',
  fidic: 'fidic'
});

exports.Prisma.OrganogramaScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Organograma_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.Organograma_x_regiaoScalarFieldEnum = makeEnum({
  id: 'id',
  organograma_id: 'organograma_id',
  regiao_id: 'regiao_id'
});

exports.Prisma.Organograma_x_regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id',
  organograma_id: 'organograma_id',
  regiao_id: 'regiao_id'
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
  nome: 'nome'
});

exports.Prisma.Plataforma_n_borderosScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Plataforma_papel_tipoScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Plataforma_papel_x_pessoaScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Plataforma_x_regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Regiao_atuacaoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
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

exports.Prisma.Titulo_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.Titulo_x_cedenteScalarFieldEnum = makeEnum({
  id: 'id',
  cedente: 'cedente'
});

exports.Prisma.Titulo_x_empresaScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Titulo_x_plataformaScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Titulos_x_usuarioScalarFieldEnum = makeEnum({
  id: 'id',
  usuario: 'usuario',
  bordero: 'bordero',
  status: 'status'
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
  confirmou_email: 'confirmou_email',
  codigo_reset_senha: 'codigo_reset_senha',
  codigo_data_expiracao: 'codigo_data_expiracao',
  created_at: 'created_at',
  updated_at: 'updated_at'
});

exports.Prisma.Usuario__pessoaScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Usuario_n_borderosScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.Usuario_perfil_tipoScalarFieldEnum = makeEnum({
  id: 'id',
  nome: 'nome'
});

exports.Prisma.Usuario_x_perfilScalarFieldEnum = makeEnum({
  id: 'id',
  senha: 'senha',
  usuario_id: 'usuario_id',
  usuario_perfil_id: 'usuario_perfil_id'
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
  fidic_fundo_carteira_n_cedentes: 'fidic_fundo_carteira_n_cedentes',
  fidic_fundo_x_usuario: 'fidic_fundo_x_usuario',
  organograma: 'organograma',
  organograma_tipo: 'organograma_tipo',
  organograma_x_regiao: 'organograma_x_regiao',
  organograma_x_regiao_atuacao: 'organograma_x_regiao_atuacao',
  pessoa: 'pessoa',
  plataforma: 'plataforma',
  plataforma_n_borderos: 'plataforma_n_borderos',
  plataforma_papel_tipo: 'plataforma_papel_tipo',
  plataforma_papel_x_pessoa: 'plataforma_papel_x_pessoa',
  plataforma_x_regiao_atuacao: 'plataforma_x_regiao_atuacao',
  regiao_atuacao: 'regiao_atuacao',
  regiao_atuacao_tipo: 'regiao_atuacao_tipo',
  sacado: 'sacado',
  titulo: 'titulo',
  titulo_tipo: 'titulo_tipo',
  titulo_x_cedente: 'titulo_x_cedente',
  titulo_x_empresa: 'titulo_x_empresa',
  titulo_x_plataforma: 'titulo_x_plataforma',
  titulos_x_usuario: 'titulos_x_usuario',
  usuario: 'usuario',
  usuario__pessoa: 'usuario__pessoa',
  usuario_n_borderos: 'usuario_n_borderos',
  usuario_perfil_tipo: 'usuario_perfil_tipo',
  usuario_x_perfil: 'usuario_x_perfil'
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


Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma\\@generated\\prisma\\clientMysql",
    "@generated\\prisma\\clientMysql",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"auditoria\",\"dbName\":null,\"fields\":[{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"bordero\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira\",\"relationName\":\"borderoTocarteira\",\"relationFromFields\":[\"carteira_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo\",\"relationName\":\"borderoTotitulo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"carteira\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fiduc_fundo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo\",\"relationName\":\"carteiraTofidic_fundo\",\"relationFromFields\":[\"fiduc_fundo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bordero\",\"relationName\":\"borderoTocarteira\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira_n_cedentes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira_n_cedentes\",\"relationName\":\"carteiraTocarteira_n_cedentes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira_n_cedentes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira_n_cedentes\",\"relationName\":\"carteira_n_cedentesTocedente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_analise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_analise\",\"relationName\":\"cedenteTocedente_analise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_n_sacados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_n_sacados\",\"relationName\":\"cedenteTocedente_n_sacados\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente_analise\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_cedenteTocedente_analise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"cedenteTocedente_analise\",\"relationFromFields\":[\"cedente\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente_n_sacados\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sacado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_cedenteTocedente_n_sacados\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"cedenteTocedente_n_sacados\",\"relationFromFields\":[\"cedente\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sacado_cedente_n_sacadosTosacado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sacado\",\"relationName\":\"cedente_n_sacadosTosacado\",\"relationFromFields\":[\"sacado\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"checagem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"fidic_fundo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira\",\"relationName\":\"carteiraTofidic_fundo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo_x_usuario\",\"relationName\":\"fidic_fundoTofidic_fundo_x_usuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"fidic_fundo_x_usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo\",\"relationName\":\"fidic_fundoTofidic_fundo_x_usuario\",\"relationFromFields\":[\"fidic\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma_tipo\",\"relationName\":\"organogramaToorganograma_tipo\",\"relationFromFields\":[\"organograma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_x_regiao_atuacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma_x_regiao_atuacao\",\"relationName\":\"organogramaToorganograma_x_regiao_atuacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma_x_usuario\",\"relationName\":\"organogramaToorganograma_x_usuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma\",\"relationName\":\"organogramaToorganograma_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_x_regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma\",\"relationName\":\"organogramaToorganograma_x_regiao_atuacao\",\"relationFromFields\":[\"organograma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"regiao_atuacao\",\"relationName\":\"organograma_x_regiao_atuacaoToregiao_atuacao\",\"relationFromFields\":[\"regiao_atuacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"pessoa\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sobrenome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"pessoaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_papel_tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_papel_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma_papel_tipo\",\"relationName\":\"plataformaToplataforma_papel_tipo\",\"relationFromFields\":[\"plataforma_papel_tipo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_x_regiao_atuacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma_x_regiao_atuacao\",\"relationName\":\"plataformaToplataforma_x_regiao_atuacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma_x_usuario\",\"relationName\":\"plataformaToplataforma_x_usuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_papel_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma\",\"relationName\":\"plataformaToplataforma_papel_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_x_regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma\",\"relationName\":\"plataformaToplataforma_x_regiao_atuacao\",\"relationFromFields\":[\"plataforma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"regiao_atuacao\",\"relationName\":\"plataforma_x_regiao_atuacaoToregiao_atuacao\",\"relationFromFields\":[\"regiao_atuacao_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao_tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"regiao_atuacao_tipo\",\"relationName\":\"regiao_atuacaoToregiao_atuacao_tipo\",\"relationFromFields\":[\"regiao_atuacao_tipo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_x_regiao_atuacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma_x_regiao_atuacao\",\"relationName\":\"organograma_x_regiao_atuacaoToregiao_atuacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_x_regiao_atuacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma_x_regiao_atuacao\",\"relationName\":\"plataforma_x_regiao_atuacaoToregiao_atuacao\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"regiao_atuacao_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_atuacao\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"regiao_atuacao\",\"relationName\":\"regiao_atuacaoToregiao_atuacao_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"sacado\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_n_sacados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_n_sacados\",\"relationName\":\"cedente_n_sacadosTosacado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vencimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parcela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo_tipo\",\"relationName\":\"tituloTotitulo_tipo\",\"relationFromFields\":[\"titulo_tipo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bordero\",\"relationName\":\"borderoTotitulo\",\"relationFromFields\":[\"bordero_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_itens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo_itens\",\"relationName\":\"tituloTotitulo_itens\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo\",\"relationName\":\"tituloTotitulo_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primeiro_acesso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmou_cadastro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_confirma_cadastro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_reset_senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"codigo_data_expiracao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pessoa\",\"relationName\":\"pessoaTousuario\",\"relationFromFields\":[\"pessoa_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario_perfil_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_perfil\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_perfil\",\"relationName\":\"usuario_perfilTousuario_perfil_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"carteira_n_cedentes\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira\",\"relationName\":\"carteiraTocarteira_n_cedentes\",\"relationFromFields\":[\"carteira_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"carteira_n_cedentesTocedente\",\"relationFromFields\":[\"cedente_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_x_usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"organograma\",\"relationName\":\"organogramaToorganograma_x_usuario\",\"relationFromFields\":[\"organograma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_x_usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"plataforma\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"plataforma\",\"relationName\":\"plataformaToplataforma_x_usuario\",\"relationFromFields\":[\"plataforma_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_itens\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo\",\"relationName\":\"tituloTotitulo_itens\",\"relationFromFields\":[\"titulo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario_perfil\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_perfil_tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_perfil_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_perfil_tipo\",\"relationName\":\"usuario_perfilTousuario_perfil_tipo\",\"relationFromFields\":[\"usuario_perfil_tipo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"auditoria\",\"plural\":\"auditorias\",\"findUnique\":\"findUniqueauditoria\",\"findFirst\":\"findFirstauditoria\",\"findMany\":\"findManyauditoria\",\"create\":\"createOneauditoria\",\"createMany\":\"createManyauditoria\",\"delete\":\"deleteOneauditoria\",\"update\":\"updateOneauditoria\",\"deleteMany\":\"deleteManyauditoria\",\"updateMany\":\"updateManyauditoria\",\"upsert\":\"upsertOneauditoria\",\"aggregate\":\"aggregateauditoria\",\"groupBy\":\"groupByauditoria\"},{\"model\":\"bordero\",\"plural\":\"borderos\",\"findUnique\":\"findUniquebordero\",\"findFirst\":\"findFirstbordero\",\"findMany\":\"findManybordero\",\"create\":\"createOnebordero\",\"createMany\":\"createManybordero\",\"delete\":\"deleteOnebordero\",\"update\":\"updateOnebordero\",\"deleteMany\":\"deleteManybordero\",\"updateMany\":\"updateManybordero\",\"upsert\":\"upsertOnebordero\",\"aggregate\":\"aggregatebordero\",\"groupBy\":\"groupBybordero\"},{\"model\":\"carteira\",\"plural\":\"carteiras\",\"findUnique\":\"findUniquecarteira\",\"findFirst\":\"findFirstcarteira\",\"findMany\":\"findManycarteira\",\"create\":\"createOnecarteira\",\"createMany\":\"createManycarteira\",\"delete\":\"deleteOnecarteira\",\"update\":\"updateOnecarteira\",\"deleteMany\":\"deleteManycarteira\",\"updateMany\":\"updateManycarteira\",\"upsert\":\"upsertOnecarteira\",\"aggregate\":\"aggregatecarteira\",\"groupBy\":\"groupBycarteira\"},{\"model\":\"cedente\",\"plural\":\"cedentes\",\"findUnique\":\"findUniquecedente\",\"findFirst\":\"findFirstcedente\",\"findMany\":\"findManycedente\",\"create\":\"createOnecedente\",\"createMany\":\"createManycedente\",\"delete\":\"deleteOnecedente\",\"update\":\"updateOnecedente\",\"deleteMany\":\"deleteManycedente\",\"updateMany\":\"updateManycedente\",\"upsert\":\"upsertOnecedente\",\"aggregate\":\"aggregatecedente\",\"groupBy\":\"groupBycedente\"},{\"model\":\"cedente_analise\",\"plural\":\"cedente_analises\",\"findUnique\":\"findUniquecedente_analise\",\"findFirst\":\"findFirstcedente_analise\",\"findMany\":\"findManycedente_analise\",\"create\":\"createOnecedente_analise\",\"createMany\":\"createManycedente_analise\",\"delete\":\"deleteOnecedente_analise\",\"update\":\"updateOnecedente_analise\",\"deleteMany\":\"deleteManycedente_analise\",\"updateMany\":\"updateManycedente_analise\",\"upsert\":\"upsertOnecedente_analise\",\"aggregate\":\"aggregatecedente_analise\",\"groupBy\":\"groupBycedente_analise\"},{\"model\":\"cedente_n_sacados\",\"plural\":\"cedente_n_sacados\",\"findUnique\":\"findUniquecedente_n_sacados\",\"findFirst\":\"findFirstcedente_n_sacados\",\"findMany\":\"findManycedente_n_sacados\",\"create\":\"createOnecedente_n_sacados\",\"createMany\":\"createManycedente_n_sacados\",\"delete\":\"deleteOnecedente_n_sacados\",\"update\":\"updateOnecedente_n_sacados\",\"deleteMany\":\"deleteManycedente_n_sacados\",\"updateMany\":\"updateManycedente_n_sacados\",\"upsert\":\"upsertOnecedente_n_sacados\",\"aggregate\":\"aggregatecedente_n_sacados\",\"groupBy\":\"groupBycedente_n_sacados\"},{\"model\":\"checagem\",\"plural\":\"checagems\",\"findUnique\":\"findUniquechecagem\",\"findFirst\":\"findFirstchecagem\",\"findMany\":\"findManychecagem\",\"create\":\"createOnechecagem\",\"createMany\":\"createManychecagem\",\"delete\":\"deleteOnechecagem\",\"update\":\"updateOnechecagem\",\"deleteMany\":\"deleteManychecagem\",\"updateMany\":\"updateManychecagem\",\"upsert\":\"upsertOnechecagem\",\"aggregate\":\"aggregatechecagem\",\"groupBy\":\"groupBychecagem\"},{\"model\":\"fidic_fundo\",\"plural\":\"fidic_fundos\",\"findUnique\":\"findUniquefidic_fundo\",\"findFirst\":\"findFirstfidic_fundo\",\"findMany\":\"findManyfidic_fundo\",\"create\":\"createOnefidic_fundo\",\"createMany\":\"createManyfidic_fundo\",\"delete\":\"deleteOnefidic_fundo\",\"update\":\"updateOnefidic_fundo\",\"deleteMany\":\"deleteManyfidic_fundo\",\"updateMany\":\"updateManyfidic_fundo\",\"upsert\":\"upsertOnefidic_fundo\",\"aggregate\":\"aggregatefidic_fundo\",\"groupBy\":\"groupByfidic_fundo\"},{\"model\":\"fidic_fundo_x_usuario\",\"plural\":\"fidic_fundo_x_usuarios\",\"findUnique\":\"findUniquefidic_fundo_x_usuario\",\"findFirst\":\"findFirstfidic_fundo_x_usuario\",\"findMany\":\"findManyfidic_fundo_x_usuario\",\"create\":\"createOnefidic_fundo_x_usuario\",\"createMany\":\"createManyfidic_fundo_x_usuario\",\"delete\":\"deleteOnefidic_fundo_x_usuario\",\"update\":\"updateOnefidic_fundo_x_usuario\",\"deleteMany\":\"deleteManyfidic_fundo_x_usuario\",\"updateMany\":\"updateManyfidic_fundo_x_usuario\",\"upsert\":\"upsertOnefidic_fundo_x_usuario\",\"aggregate\":\"aggregatefidic_fundo_x_usuario\",\"groupBy\":\"groupByfidic_fundo_x_usuario\"},{\"model\":\"organograma\",\"plural\":\"organogramas\",\"findUnique\":\"findUniqueorganograma\",\"findFirst\":\"findFirstorganograma\",\"findMany\":\"findManyorganograma\",\"create\":\"createOneorganograma\",\"createMany\":\"createManyorganograma\",\"delete\":\"deleteOneorganograma\",\"update\":\"updateOneorganograma\",\"deleteMany\":\"deleteManyorganograma\",\"updateMany\":\"updateManyorganograma\",\"upsert\":\"upsertOneorganograma\",\"aggregate\":\"aggregateorganograma\",\"groupBy\":\"groupByorganograma\"},{\"model\":\"organograma_tipo\",\"plural\":\"organograma_tipos\",\"findUnique\":\"findUniqueorganograma_tipo\",\"findFirst\":\"findFirstorganograma_tipo\",\"findMany\":\"findManyorganograma_tipo\",\"create\":\"createOneorganograma_tipo\",\"createMany\":\"createManyorganograma_tipo\",\"delete\":\"deleteOneorganograma_tipo\",\"update\":\"updateOneorganograma_tipo\",\"deleteMany\":\"deleteManyorganograma_tipo\",\"updateMany\":\"updateManyorganograma_tipo\",\"upsert\":\"upsertOneorganograma_tipo\",\"aggregate\":\"aggregateorganograma_tipo\",\"groupBy\":\"groupByorganograma_tipo\"},{\"model\":\"organograma_x_regiao_atuacao\",\"plural\":\"organograma_x_regiao_atuacaos\",\"findUnique\":\"findUniqueorganograma_x_regiao_atuacao\",\"findFirst\":\"findFirstorganograma_x_regiao_atuacao\",\"findMany\":\"findManyorganograma_x_regiao_atuacao\",\"create\":\"createOneorganograma_x_regiao_atuacao\",\"createMany\":\"createManyorganograma_x_regiao_atuacao\",\"delete\":\"deleteOneorganograma_x_regiao_atuacao\",\"update\":\"updateOneorganograma_x_regiao_atuacao\",\"deleteMany\":\"deleteManyorganograma_x_regiao_atuacao\",\"updateMany\":\"updateManyorganograma_x_regiao_atuacao\",\"upsert\":\"upsertOneorganograma_x_regiao_atuacao\",\"aggregate\":\"aggregateorganograma_x_regiao_atuacao\",\"groupBy\":\"groupByorganograma_x_regiao_atuacao\"},{\"model\":\"pessoa\",\"plural\":\"pessoas\",\"findUnique\":\"findUniquepessoa\",\"findFirst\":\"findFirstpessoa\",\"findMany\":\"findManypessoa\",\"create\":\"createOnepessoa\",\"createMany\":\"createManypessoa\",\"delete\":\"deleteOnepessoa\",\"update\":\"updateOnepessoa\",\"deleteMany\":\"deleteManypessoa\",\"updateMany\":\"updateManypessoa\",\"upsert\":\"upsertOnepessoa\",\"aggregate\":\"aggregatepessoa\",\"groupBy\":\"groupBypessoa\"},{\"model\":\"plataforma\",\"plural\":\"plataformas\",\"findUnique\":\"findUniqueplataforma\",\"findFirst\":\"findFirstplataforma\",\"findMany\":\"findManyplataforma\",\"create\":\"createOneplataforma\",\"createMany\":\"createManyplataforma\",\"delete\":\"deleteOneplataforma\",\"update\":\"updateOneplataforma\",\"deleteMany\":\"deleteManyplataforma\",\"updateMany\":\"updateManyplataforma\",\"upsert\":\"upsertOneplataforma\",\"aggregate\":\"aggregateplataforma\",\"groupBy\":\"groupByplataforma\"},{\"model\":\"plataforma_papel_tipo\",\"plural\":\"plataforma_papel_tipos\",\"findUnique\":\"findUniqueplataforma_papel_tipo\",\"findFirst\":\"findFirstplataforma_papel_tipo\",\"findMany\":\"findManyplataforma_papel_tipo\",\"create\":\"createOneplataforma_papel_tipo\",\"createMany\":\"createManyplataforma_papel_tipo\",\"delete\":\"deleteOneplataforma_papel_tipo\",\"update\":\"updateOneplataforma_papel_tipo\",\"deleteMany\":\"deleteManyplataforma_papel_tipo\",\"updateMany\":\"updateManyplataforma_papel_tipo\",\"upsert\":\"upsertOneplataforma_papel_tipo\",\"aggregate\":\"aggregateplataforma_papel_tipo\",\"groupBy\":\"groupByplataforma_papel_tipo\"},{\"model\":\"plataforma_x_regiao_atuacao\",\"plural\":\"plataforma_x_regiao_atuacaos\",\"findUnique\":\"findUniqueplataforma_x_regiao_atuacao\",\"findFirst\":\"findFirstplataforma_x_regiao_atuacao\",\"findMany\":\"findManyplataforma_x_regiao_atuacao\",\"create\":\"createOneplataforma_x_regiao_atuacao\",\"createMany\":\"createManyplataforma_x_regiao_atuacao\",\"delete\":\"deleteOneplataforma_x_regiao_atuacao\",\"update\":\"updateOneplataforma_x_regiao_atuacao\",\"deleteMany\":\"deleteManyplataforma_x_regiao_atuacao\",\"updateMany\":\"updateManyplataforma_x_regiao_atuacao\",\"upsert\":\"upsertOneplataforma_x_regiao_atuacao\",\"aggregate\":\"aggregateplataforma_x_regiao_atuacao\",\"groupBy\":\"groupByplataforma_x_regiao_atuacao\"},{\"model\":\"regiao_atuacao\",\"plural\":\"regiao_atuacaos\",\"findUnique\":\"findUniqueregiao_atuacao\",\"findFirst\":\"findFirstregiao_atuacao\",\"findMany\":\"findManyregiao_atuacao\",\"create\":\"createOneregiao_atuacao\",\"createMany\":\"createManyregiao_atuacao\",\"delete\":\"deleteOneregiao_atuacao\",\"update\":\"updateOneregiao_atuacao\",\"deleteMany\":\"deleteManyregiao_atuacao\",\"updateMany\":\"updateManyregiao_atuacao\",\"upsert\":\"upsertOneregiao_atuacao\",\"aggregate\":\"aggregateregiao_atuacao\",\"groupBy\":\"groupByregiao_atuacao\"},{\"model\":\"regiao_atuacao_tipo\",\"plural\":\"regiao_atuacao_tipos\",\"findUnique\":\"findUniqueregiao_atuacao_tipo\",\"findFirst\":\"findFirstregiao_atuacao_tipo\",\"findMany\":\"findManyregiao_atuacao_tipo\",\"create\":\"createOneregiao_atuacao_tipo\",\"createMany\":\"createManyregiao_atuacao_tipo\",\"delete\":\"deleteOneregiao_atuacao_tipo\",\"update\":\"updateOneregiao_atuacao_tipo\",\"deleteMany\":\"deleteManyregiao_atuacao_tipo\",\"updateMany\":\"updateManyregiao_atuacao_tipo\",\"upsert\":\"upsertOneregiao_atuacao_tipo\",\"aggregate\":\"aggregateregiao_atuacao_tipo\",\"groupBy\":\"groupByregiao_atuacao_tipo\"},{\"model\":\"sacado\",\"plural\":\"sacados\",\"findUnique\":\"findUniquesacado\",\"findFirst\":\"findFirstsacado\",\"findMany\":\"findManysacado\",\"create\":\"createOnesacado\",\"createMany\":\"createManysacado\",\"delete\":\"deleteOnesacado\",\"update\":\"updateOnesacado\",\"deleteMany\":\"deleteManysacado\",\"updateMany\":\"updateManysacado\",\"upsert\":\"upsertOnesacado\",\"aggregate\":\"aggregatesacado\",\"groupBy\":\"groupBysacado\"},{\"model\":\"titulo\",\"plural\":\"titulos\",\"findUnique\":\"findUniquetitulo\",\"findFirst\":\"findFirsttitulo\",\"findMany\":\"findManytitulo\",\"create\":\"createOnetitulo\",\"createMany\":\"createManytitulo\",\"delete\":\"deleteOnetitulo\",\"update\":\"updateOnetitulo\",\"deleteMany\":\"deleteManytitulo\",\"updateMany\":\"updateManytitulo\",\"upsert\":\"upsertOnetitulo\",\"aggregate\":\"aggregatetitulo\",\"groupBy\":\"groupBytitulo\"},{\"model\":\"titulo_tipo\",\"plural\":\"titulo_tipos\",\"findUnique\":\"findUniquetitulo_tipo\",\"findFirst\":\"findFirsttitulo_tipo\",\"findMany\":\"findManytitulo_tipo\",\"create\":\"createOnetitulo_tipo\",\"createMany\":\"createManytitulo_tipo\",\"delete\":\"deleteOnetitulo_tipo\",\"update\":\"updateOnetitulo_tipo\",\"deleteMany\":\"deleteManytitulo_tipo\",\"updateMany\":\"updateManytitulo_tipo\",\"upsert\":\"upsertOnetitulo_tipo\",\"aggregate\":\"aggregatetitulo_tipo\",\"groupBy\":\"groupBytitulo_tipo\"},{\"model\":\"usuario\",\"plural\":\"usuarios\",\"findUnique\":\"findUniqueusuario\",\"findFirst\":\"findFirstusuario\",\"findMany\":\"findManyusuario\",\"create\":\"createOneusuario\",\"createMany\":\"createManyusuario\",\"delete\":\"deleteOneusuario\",\"update\":\"updateOneusuario\",\"deleteMany\":\"deleteManyusuario\",\"updateMany\":\"updateManyusuario\",\"upsert\":\"upsertOneusuario\",\"aggregate\":\"aggregateusuario\",\"groupBy\":\"groupByusuario\"},{\"model\":\"usuario_perfil_tipo\",\"plural\":\"usuario_perfil_tipos\",\"findUnique\":\"findUniqueusuario_perfil_tipo\",\"findFirst\":\"findFirstusuario_perfil_tipo\",\"findMany\":\"findManyusuario_perfil_tipo\",\"create\":\"createOneusuario_perfil_tipo\",\"createMany\":\"createManyusuario_perfil_tipo\",\"delete\":\"deleteOneusuario_perfil_tipo\",\"update\":\"updateOneusuario_perfil_tipo\",\"deleteMany\":\"deleteManyusuario_perfil_tipo\",\"updateMany\":\"updateManyusuario_perfil_tipo\",\"upsert\":\"upsertOneusuario_perfil_tipo\",\"aggregate\":\"aggregateusuario_perfil_tipo\",\"groupBy\":\"groupByusuario_perfil_tipo\"},{\"model\":\"carteira_n_cedentes\",\"plural\":\"carteira_n_cedentes\",\"findUnique\":\"findUniquecarteira_n_cedentes\",\"findFirst\":\"findFirstcarteira_n_cedentes\",\"findMany\":\"findManycarteira_n_cedentes\",\"create\":\"createOnecarteira_n_cedentes\",\"createMany\":\"createManycarteira_n_cedentes\",\"delete\":\"deleteOnecarteira_n_cedentes\",\"update\":\"updateOnecarteira_n_cedentes\",\"deleteMany\":\"deleteManycarteira_n_cedentes\",\"updateMany\":\"updateManycarteira_n_cedentes\",\"upsert\":\"upsertOnecarteira_n_cedentes\",\"aggregate\":\"aggregatecarteira_n_cedentes\",\"groupBy\":\"groupBycarteira_n_cedentes\"},{\"model\":\"organograma_x_usuario\",\"plural\":\"organograma_x_usuarios\",\"findUnique\":\"findUniqueorganograma_x_usuario\",\"findFirst\":\"findFirstorganograma_x_usuario\",\"findMany\":\"findManyorganograma_x_usuario\",\"create\":\"createOneorganograma_x_usuario\",\"createMany\":\"createManyorganograma_x_usuario\",\"delete\":\"deleteOneorganograma_x_usuario\",\"update\":\"updateOneorganograma_x_usuario\",\"deleteMany\":\"deleteManyorganograma_x_usuario\",\"updateMany\":\"updateManyorganograma_x_usuario\",\"upsert\":\"upsertOneorganograma_x_usuario\",\"aggregate\":\"aggregateorganograma_x_usuario\",\"groupBy\":\"groupByorganograma_x_usuario\"},{\"model\":\"plataforma_x_usuario\",\"plural\":\"plataforma_x_usuarios\",\"findUnique\":\"findUniqueplataforma_x_usuario\",\"findFirst\":\"findFirstplataforma_x_usuario\",\"findMany\":\"findManyplataforma_x_usuario\",\"create\":\"createOneplataforma_x_usuario\",\"createMany\":\"createManyplataforma_x_usuario\",\"delete\":\"deleteOneplataforma_x_usuario\",\"update\":\"updateOneplataforma_x_usuario\",\"deleteMany\":\"deleteManyplataforma_x_usuario\",\"updateMany\":\"updateManyplataforma_x_usuario\",\"upsert\":\"upsertOneplataforma_x_usuario\",\"aggregate\":\"aggregateplataforma_x_usuario\",\"groupBy\":\"groupByplataforma_x_usuario\"},{\"model\":\"titulo_itens\",\"plural\":\"titulo_itens\",\"findUnique\":\"findUniquetitulo_itens\",\"findFirst\":\"findFirsttitulo_itens\",\"findMany\":\"findManytitulo_itens\",\"create\":\"createOnetitulo_itens\",\"createMany\":\"createManytitulo_itens\",\"delete\":\"deleteOnetitulo_itens\",\"update\":\"updateOnetitulo_itens\",\"deleteMany\":\"deleteManytitulo_itens\",\"updateMany\":\"updateManytitulo_itens\",\"upsert\":\"upsertOnetitulo_itens\",\"aggregate\":\"aggregatetitulo_itens\",\"groupBy\":\"groupBytitulo_itens\"},{\"model\":\"usuario_perfil\",\"plural\":\"usuario_perfils\",\"findUnique\":\"findUniqueusuario_perfil\",\"findFirst\":\"findFirstusuario_perfil\",\"findMany\":\"findManyusuario_perfil\",\"create\":\"createOneusuario_perfil\",\"createMany\":\"createManyusuario_perfil\",\"delete\":\"deleteOneusuario_perfil\",\"update\":\"updateOneusuario_perfil\",\"deleteMany\":\"deleteManyusuario_perfil\",\"updateMany\":\"updateManyusuario_perfil\",\"upsert\":\"upsertOneusuario_perfil\",\"aggregate\":\"aggregateusuario_perfil\",\"groupBy\":\"groupByusuario_perfil\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\Trabalho\\AR3\\ar3-manager-utils\\prisma\\@generated\\prisma\\clientMysql",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prismaMysql",
  "clientVersion": "4.6.1",
  "engineVersion": "694eea289a8462c80264df36757e4fdc129b1b32",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma\\@generated\\prisma\\clientMysql\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma\\@generated\\prisma\\clientMysql\\schema.prisma")

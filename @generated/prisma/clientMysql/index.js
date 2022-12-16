
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
 * Prisma Client JS version: 4.7.1
 * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
 */
Prisma.prismaVersion = {
  client: "4.7.1",
  engine: "272861e07ab64f234d3ffc4094e32bd61775599c"
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
    "@generated\\prisma\\clientMysql",
    "prisma\\clientMysql",
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
  status: 'status'
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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"auditoria\",\"dbName\":null,\"fields\":[{\"name\":\"action\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modulo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_auditoriaTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"auditoriaTousuario\",\"relationFromFields\":[\"usuario\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"bordero\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo\",\"relationName\":\"borderoTotitulo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulos_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulos_x_usuario\",\"relationName\":\"borderoTotitulos_x_usuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"carteira\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fiduc_fundo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo\",\"relationName\":\"carteiraTofidic_fundo\",\"relationFromFields\":[\"fiduc_fundo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endereco\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cep\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bairro\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cidade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"uf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"telefone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_analise\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_analise\",\"relationName\":\"cedenteTocedente_analise\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_n_sacados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_n_sacados\",\"relationName\":\"cedenteTocedente_n_sacados\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_x_cedente\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo_x_cedente\",\"relationName\":\"cedenteTotitulo_x_cedente\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente_analise\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_cedenteTocedente_analise\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"cedenteTocedente_analise\",\"relationFromFields\":[\"cedente\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cedente_n_sacados\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sacado\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_cedenteTocedente_n_sacados\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"cedenteTocedente_n_sacados\",\"relationFromFields\":[\"cedente\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sacado_cedente_n_sacadosTosacado\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"sacado\",\"relationName\":\"cedente_n_sacadosTosacado\",\"relationFromFields\":[\"sacado\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"checagem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulos\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_checagemTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"checagemTousuario\",\"relationFromFields\":[\"usuario\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"fidic_fundo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carteira\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"carteira\",\"relationName\":\"carteiraTofidic_fundo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo_x_usuario\",\"relationName\":\"fidic_fundoTofidic_fundo_x_usuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"fidic_fundo_carteira_n_cedentes\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"fidic_fundo_x_usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo\",\"relationName\":\"fidic_fundoTofidic_fundo_x_usuario\",\"relationFromFields\":[\"fidic\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_fidic_fundo_x_usuarioTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"fidic_fundo_x_usuarioTousuario\",\"relationFromFields\":[\"usuario\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_x_regiao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"organograma_x_regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"organograma_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"regiao_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"pessoa\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sexo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nascimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cpf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"pessoaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_n_borderos\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_papel_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_papel_x_pessoa\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"plataforma_x_regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"regiao_atuacao\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"regiao_atuacao_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"sacado\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"razao_social\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_fantasia\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"abertura\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cnpj\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_n_sacados\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente_n_sacados\",\"relationName\":\"cedente_n_sacadosTosacado\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_tipo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nf\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"valor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vencimento\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emissao\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parcela\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo_tipo\",\"relationName\":\"tituloTotitulo_tipo\",\"relationFromFields\":[\"titulo_tipo_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bordero\",\"relationName\":\"borderoTotitulo\",\"relationFromFields\":[\"bordero_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulo\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulo\",\"relationName\":\"tituloTotitulo_tipo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_x_cedente\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cedente_cedenteTotitulo_x_cedente\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cedente\",\"relationName\":\"cedenteTotitulo_x_cedente\",\"relationFromFields\":[\"cedente\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_x_empresa\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulo_x_plataforma\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"titulos_x_usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bordero_borderoTotitulos_x_usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"bordero\",\"relationName\":\"borderoTotitulos_x_usuario\",\"relationFromFields\":[\"bordero\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_titulos_x_usuarioTousuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"titulos_x_usuarioTousuario\",\"relationFromFields\":[\"usuario\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pessoa\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"pessoa\",\"relationName\":\"pessoaTousuario\",\"relationFromFields\":[\"id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"auditoria\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"auditoria\",\"relationName\":\"auditoriaTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checagem\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"checagem\",\"relationName\":\"checagemTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fidic_fundo_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"fidic_fundo_x_usuario\",\"relationName\":\"fidic_fundo_x_usuarioTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"titulos_x_usuario\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"titulos_x_usuario\",\"relationName\":\"titulos_x_usuarioTousuario\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_x_perfil\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_x_perfil\",\"relationName\":\"usuarioTousuario_x_perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario__pessoa\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario_n_borderos\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario_perfil_tipo\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_x_perfil\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_x_perfil\",\"relationName\":\"usuario_perfil_tipoTousuario_x_perfil\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"usuario_x_perfil\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"senha\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_perfil_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario\",\"relationName\":\"usuarioTousuario_x_perfil\",\"relationFromFields\":[\"usuario_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usuario_perfil_tipo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"usuario_perfil_tipo\",\"relationName\":\"usuario_perfil_tipoTousuario_x_perfil\",\"relationFromFields\":[\"usuario_perfil_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"auditoria\",\"plural\":\"auditorias\",\"findUnique\":\"findUniqueauditoria\",\"findUniqueOrThrow\":\"findUniqueauditoriaOrThrow\",\"findFirst\":\"findFirstauditoria\",\"findFirstOrThrow\":\"findFirstauditoriaOrThrow\",\"findMany\":\"findManyauditoria\",\"create\":\"createOneauditoria\",\"createMany\":\"createManyauditoria\",\"delete\":\"deleteOneauditoria\",\"update\":\"updateOneauditoria\",\"deleteMany\":\"deleteManyauditoria\",\"updateMany\":\"updateManyauditoria\",\"upsert\":\"upsertOneauditoria\",\"aggregate\":\"aggregateauditoria\",\"groupBy\":\"groupByauditoria\"},{\"model\":\"bordero\",\"plural\":\"borderos\",\"findUnique\":\"findUniquebordero\",\"findUniqueOrThrow\":\"findUniqueborderoOrThrow\",\"findFirst\":\"findFirstbordero\",\"findFirstOrThrow\":\"findFirstborderoOrThrow\",\"findMany\":\"findManybordero\",\"create\":\"createOnebordero\",\"createMany\":\"createManybordero\",\"delete\":\"deleteOnebordero\",\"update\":\"updateOnebordero\",\"deleteMany\":\"deleteManybordero\",\"updateMany\":\"updateManybordero\",\"upsert\":\"upsertOnebordero\",\"aggregate\":\"aggregatebordero\",\"groupBy\":\"groupBybordero\"},{\"model\":\"carteira\",\"plural\":\"carteiras\",\"findUnique\":\"findUniquecarteira\",\"findUniqueOrThrow\":\"findUniquecarteiraOrThrow\",\"findFirst\":\"findFirstcarteira\",\"findFirstOrThrow\":\"findFirstcarteiraOrThrow\",\"findMany\":\"findManycarteira\",\"create\":\"createOnecarteira\",\"createMany\":\"createManycarteira\",\"delete\":\"deleteOnecarteira\",\"update\":\"updateOnecarteira\",\"deleteMany\":\"deleteManycarteira\",\"updateMany\":\"updateManycarteira\",\"upsert\":\"upsertOnecarteira\",\"aggregate\":\"aggregatecarteira\",\"groupBy\":\"groupBycarteira\"},{\"model\":\"cedente\",\"plural\":\"cedentes\",\"findUnique\":\"findUniquecedente\",\"findUniqueOrThrow\":\"findUniquecedenteOrThrow\",\"findFirst\":\"findFirstcedente\",\"findFirstOrThrow\":\"findFirstcedenteOrThrow\",\"findMany\":\"findManycedente\",\"create\":\"createOnecedente\",\"createMany\":\"createManycedente\",\"delete\":\"deleteOnecedente\",\"update\":\"updateOnecedente\",\"deleteMany\":\"deleteManycedente\",\"updateMany\":\"updateManycedente\",\"upsert\":\"upsertOnecedente\",\"aggregate\":\"aggregatecedente\",\"groupBy\":\"groupBycedente\"},{\"model\":\"cedente_analise\",\"plural\":\"cedente_analises\",\"findUnique\":\"findUniquecedente_analise\",\"findUniqueOrThrow\":\"findUniquecedente_analiseOrThrow\",\"findFirst\":\"findFirstcedente_analise\",\"findFirstOrThrow\":\"findFirstcedente_analiseOrThrow\",\"findMany\":\"findManycedente_analise\",\"create\":\"createOnecedente_analise\",\"createMany\":\"createManycedente_analise\",\"delete\":\"deleteOnecedente_analise\",\"update\":\"updateOnecedente_analise\",\"deleteMany\":\"deleteManycedente_analise\",\"updateMany\":\"updateManycedente_analise\",\"upsert\":\"upsertOnecedente_analise\",\"aggregate\":\"aggregatecedente_analise\",\"groupBy\":\"groupBycedente_analise\"},{\"model\":\"cedente_n_sacados\",\"plural\":\"cedente_n_sacados\",\"findUnique\":\"findUniquecedente_n_sacados\",\"findUniqueOrThrow\":\"findUniquecedente_n_sacadosOrThrow\",\"findFirst\":\"findFirstcedente_n_sacados\",\"findFirstOrThrow\":\"findFirstcedente_n_sacadosOrThrow\",\"findMany\":\"findManycedente_n_sacados\",\"create\":\"createOnecedente_n_sacados\",\"createMany\":\"createManycedente_n_sacados\",\"delete\":\"deleteOnecedente_n_sacados\",\"update\":\"updateOnecedente_n_sacados\",\"deleteMany\":\"deleteManycedente_n_sacados\",\"updateMany\":\"updateManycedente_n_sacados\",\"upsert\":\"upsertOnecedente_n_sacados\",\"aggregate\":\"aggregatecedente_n_sacados\",\"groupBy\":\"groupBycedente_n_sacados\"},{\"model\":\"checagem\",\"plural\":\"checagems\",\"findUnique\":\"findUniquechecagem\",\"findUniqueOrThrow\":\"findUniquechecagemOrThrow\",\"findFirst\":\"findFirstchecagem\",\"findFirstOrThrow\":\"findFirstchecagemOrThrow\",\"findMany\":\"findManychecagem\",\"create\":\"createOnechecagem\",\"createMany\":\"createManychecagem\",\"delete\":\"deleteOnechecagem\",\"update\":\"updateOnechecagem\",\"deleteMany\":\"deleteManychecagem\",\"updateMany\":\"updateManychecagem\",\"upsert\":\"upsertOnechecagem\",\"aggregate\":\"aggregatechecagem\",\"groupBy\":\"groupBychecagem\"},{\"model\":\"fidic_fundo\",\"plural\":\"fidic_fundos\",\"findUnique\":\"findUniquefidic_fundo\",\"findUniqueOrThrow\":\"findUniquefidic_fundoOrThrow\",\"findFirst\":\"findFirstfidic_fundo\",\"findFirstOrThrow\":\"findFirstfidic_fundoOrThrow\",\"findMany\":\"findManyfidic_fundo\",\"create\":\"createOnefidic_fundo\",\"createMany\":\"createManyfidic_fundo\",\"delete\":\"deleteOnefidic_fundo\",\"update\":\"updateOnefidic_fundo\",\"deleteMany\":\"deleteManyfidic_fundo\",\"updateMany\":\"updateManyfidic_fundo\",\"upsert\":\"upsertOnefidic_fundo\",\"aggregate\":\"aggregatefidic_fundo\",\"groupBy\":\"groupByfidic_fundo\"},{\"model\":\"fidic_fundo_carteira_n_cedentes\",\"plural\":\"fidic_fundo_carteira_n_cedentes\",\"findUnique\":\"findUniquefidic_fundo_carteira_n_cedentes\",\"findUniqueOrThrow\":\"findUniquefidic_fundo_carteira_n_cedentesOrThrow\",\"findFirst\":\"findFirstfidic_fundo_carteira_n_cedentes\",\"findFirstOrThrow\":\"findFirstfidic_fundo_carteira_n_cedentesOrThrow\",\"findMany\":\"findManyfidic_fundo_carteira_n_cedentes\",\"create\":\"createOnefidic_fundo_carteira_n_cedentes\",\"createMany\":\"createManyfidic_fundo_carteira_n_cedentes\",\"delete\":\"deleteOnefidic_fundo_carteira_n_cedentes\",\"update\":\"updateOnefidic_fundo_carteira_n_cedentes\",\"deleteMany\":\"deleteManyfidic_fundo_carteira_n_cedentes\",\"updateMany\":\"updateManyfidic_fundo_carteira_n_cedentes\",\"upsert\":\"upsertOnefidic_fundo_carteira_n_cedentes\",\"aggregate\":\"aggregatefidic_fundo_carteira_n_cedentes\",\"groupBy\":\"groupByfidic_fundo_carteira_n_cedentes\"},{\"model\":\"fidic_fundo_x_usuario\",\"plural\":\"fidic_fundo_x_usuarios\",\"findUnique\":\"findUniquefidic_fundo_x_usuario\",\"findUniqueOrThrow\":\"findUniquefidic_fundo_x_usuarioOrThrow\",\"findFirst\":\"findFirstfidic_fundo_x_usuario\",\"findFirstOrThrow\":\"findFirstfidic_fundo_x_usuarioOrThrow\",\"findMany\":\"findManyfidic_fundo_x_usuario\",\"create\":\"createOnefidic_fundo_x_usuario\",\"createMany\":\"createManyfidic_fundo_x_usuario\",\"delete\":\"deleteOnefidic_fundo_x_usuario\",\"update\":\"updateOnefidic_fundo_x_usuario\",\"deleteMany\":\"deleteManyfidic_fundo_x_usuario\",\"updateMany\":\"updateManyfidic_fundo_x_usuario\",\"upsert\":\"upsertOnefidic_fundo_x_usuario\",\"aggregate\":\"aggregatefidic_fundo_x_usuario\",\"groupBy\":\"groupByfidic_fundo_x_usuario\"},{\"model\":\"organograma\",\"plural\":\"organogramas\",\"findUnique\":\"findUniqueorganograma\",\"findUniqueOrThrow\":\"findUniqueorganogramaOrThrow\",\"findFirst\":\"findFirstorganograma\",\"findFirstOrThrow\":\"findFirstorganogramaOrThrow\",\"findMany\":\"findManyorganograma\",\"create\":\"createOneorganograma\",\"createMany\":\"createManyorganograma\",\"delete\":\"deleteOneorganograma\",\"update\":\"updateOneorganograma\",\"deleteMany\":\"deleteManyorganograma\",\"updateMany\":\"updateManyorganograma\",\"upsert\":\"upsertOneorganograma\",\"aggregate\":\"aggregateorganograma\",\"groupBy\":\"groupByorganograma\"},{\"model\":\"organograma_tipo\",\"plural\":\"organograma_tipos\",\"findUnique\":\"findUniqueorganograma_tipo\",\"findUniqueOrThrow\":\"findUniqueorganograma_tipoOrThrow\",\"findFirst\":\"findFirstorganograma_tipo\",\"findFirstOrThrow\":\"findFirstorganograma_tipoOrThrow\",\"findMany\":\"findManyorganograma_tipo\",\"create\":\"createOneorganograma_tipo\",\"createMany\":\"createManyorganograma_tipo\",\"delete\":\"deleteOneorganograma_tipo\",\"update\":\"updateOneorganograma_tipo\",\"deleteMany\":\"deleteManyorganograma_tipo\",\"updateMany\":\"updateManyorganograma_tipo\",\"upsert\":\"upsertOneorganograma_tipo\",\"aggregate\":\"aggregateorganograma_tipo\",\"groupBy\":\"groupByorganograma_tipo\"},{\"model\":\"organograma_x_regiao\",\"plural\":\"organograma_x_regiaos\",\"findUnique\":\"findUniqueorganograma_x_regiao\",\"findUniqueOrThrow\":\"findUniqueorganograma_x_regiaoOrThrow\",\"findFirst\":\"findFirstorganograma_x_regiao\",\"findFirstOrThrow\":\"findFirstorganograma_x_regiaoOrThrow\",\"findMany\":\"findManyorganograma_x_regiao\",\"create\":\"createOneorganograma_x_regiao\",\"createMany\":\"createManyorganograma_x_regiao\",\"delete\":\"deleteOneorganograma_x_regiao\",\"update\":\"updateOneorganograma_x_regiao\",\"deleteMany\":\"deleteManyorganograma_x_regiao\",\"updateMany\":\"updateManyorganograma_x_regiao\",\"upsert\":\"upsertOneorganograma_x_regiao\",\"aggregate\":\"aggregateorganograma_x_regiao\",\"groupBy\":\"groupByorganograma_x_regiao\"},{\"model\":\"organograma_x_regiao_atuacao\",\"plural\":\"organograma_x_regiao_atuacaos\",\"findUnique\":\"findUniqueorganograma_x_regiao_atuacao\",\"findUniqueOrThrow\":\"findUniqueorganograma_x_regiao_atuacaoOrThrow\",\"findFirst\":\"findFirstorganograma_x_regiao_atuacao\",\"findFirstOrThrow\":\"findFirstorganograma_x_regiao_atuacaoOrThrow\",\"findMany\":\"findManyorganograma_x_regiao_atuacao\",\"create\":\"createOneorganograma_x_regiao_atuacao\",\"createMany\":\"createManyorganograma_x_regiao_atuacao\",\"delete\":\"deleteOneorganograma_x_regiao_atuacao\",\"update\":\"updateOneorganograma_x_regiao_atuacao\",\"deleteMany\":\"deleteManyorganograma_x_regiao_atuacao\",\"updateMany\":\"updateManyorganograma_x_regiao_atuacao\",\"upsert\":\"upsertOneorganograma_x_regiao_atuacao\",\"aggregate\":\"aggregateorganograma_x_regiao_atuacao\",\"groupBy\":\"groupByorganograma_x_regiao_atuacao\"},{\"model\":\"pessoa\",\"plural\":\"pessoas\",\"findUnique\":\"findUniquepessoa\",\"findUniqueOrThrow\":\"findUniquepessoaOrThrow\",\"findFirst\":\"findFirstpessoa\",\"findFirstOrThrow\":\"findFirstpessoaOrThrow\",\"findMany\":\"findManypessoa\",\"create\":\"createOnepessoa\",\"createMany\":\"createManypessoa\",\"delete\":\"deleteOnepessoa\",\"update\":\"updateOnepessoa\",\"deleteMany\":\"deleteManypessoa\",\"updateMany\":\"updateManypessoa\",\"upsert\":\"upsertOnepessoa\",\"aggregate\":\"aggregatepessoa\",\"groupBy\":\"groupBypessoa\"},{\"model\":\"plataforma\",\"plural\":\"plataformas\",\"findUnique\":\"findUniqueplataforma\",\"findUniqueOrThrow\":\"findUniqueplataformaOrThrow\",\"findFirst\":\"findFirstplataforma\",\"findFirstOrThrow\":\"findFirstplataformaOrThrow\",\"findMany\":\"findManyplataforma\",\"create\":\"createOneplataforma\",\"createMany\":\"createManyplataforma\",\"delete\":\"deleteOneplataforma\",\"update\":\"updateOneplataforma\",\"deleteMany\":\"deleteManyplataforma\",\"updateMany\":\"updateManyplataforma\",\"upsert\":\"upsertOneplataforma\",\"aggregate\":\"aggregateplataforma\",\"groupBy\":\"groupByplataforma\"},{\"model\":\"plataforma_n_borderos\",\"plural\":\"plataforma_n_borderos\",\"findUnique\":\"findUniqueplataforma_n_borderos\",\"findUniqueOrThrow\":\"findUniqueplataforma_n_borderosOrThrow\",\"findFirst\":\"findFirstplataforma_n_borderos\",\"findFirstOrThrow\":\"findFirstplataforma_n_borderosOrThrow\",\"findMany\":\"findManyplataforma_n_borderos\",\"create\":\"createOneplataforma_n_borderos\",\"createMany\":\"createManyplataforma_n_borderos\",\"delete\":\"deleteOneplataforma_n_borderos\",\"update\":\"updateOneplataforma_n_borderos\",\"deleteMany\":\"deleteManyplataforma_n_borderos\",\"updateMany\":\"updateManyplataforma_n_borderos\",\"upsert\":\"upsertOneplataforma_n_borderos\",\"aggregate\":\"aggregateplataforma_n_borderos\",\"groupBy\":\"groupByplataforma_n_borderos\"},{\"model\":\"plataforma_papel_tipo\",\"plural\":\"plataforma_papel_tipos\",\"findUnique\":\"findUniqueplataforma_papel_tipo\",\"findUniqueOrThrow\":\"findUniqueplataforma_papel_tipoOrThrow\",\"findFirst\":\"findFirstplataforma_papel_tipo\",\"findFirstOrThrow\":\"findFirstplataforma_papel_tipoOrThrow\",\"findMany\":\"findManyplataforma_papel_tipo\",\"create\":\"createOneplataforma_papel_tipo\",\"createMany\":\"createManyplataforma_papel_tipo\",\"delete\":\"deleteOneplataforma_papel_tipo\",\"update\":\"updateOneplataforma_papel_tipo\",\"deleteMany\":\"deleteManyplataforma_papel_tipo\",\"updateMany\":\"updateManyplataforma_papel_tipo\",\"upsert\":\"upsertOneplataforma_papel_tipo\",\"aggregate\":\"aggregateplataforma_papel_tipo\",\"groupBy\":\"groupByplataforma_papel_tipo\"},{\"model\":\"plataforma_papel_x_pessoa\",\"plural\":\"plataforma_papel_x_pessoas\",\"findUnique\":\"findUniqueplataforma_papel_x_pessoa\",\"findUniqueOrThrow\":\"findUniqueplataforma_papel_x_pessoaOrThrow\",\"findFirst\":\"findFirstplataforma_papel_x_pessoa\",\"findFirstOrThrow\":\"findFirstplataforma_papel_x_pessoaOrThrow\",\"findMany\":\"findManyplataforma_papel_x_pessoa\",\"create\":\"createOneplataforma_papel_x_pessoa\",\"createMany\":\"createManyplataforma_papel_x_pessoa\",\"delete\":\"deleteOneplataforma_papel_x_pessoa\",\"update\":\"updateOneplataforma_papel_x_pessoa\",\"deleteMany\":\"deleteManyplataforma_papel_x_pessoa\",\"updateMany\":\"updateManyplataforma_papel_x_pessoa\",\"upsert\":\"upsertOneplataforma_papel_x_pessoa\",\"aggregate\":\"aggregateplataforma_papel_x_pessoa\",\"groupBy\":\"groupByplataforma_papel_x_pessoa\"},{\"model\":\"plataforma_x_regiao_atuacao\",\"plural\":\"plataforma_x_regiao_atuacaos\",\"findUnique\":\"findUniqueplataforma_x_regiao_atuacao\",\"findUniqueOrThrow\":\"findUniqueplataforma_x_regiao_atuacaoOrThrow\",\"findFirst\":\"findFirstplataforma_x_regiao_atuacao\",\"findFirstOrThrow\":\"findFirstplataforma_x_regiao_atuacaoOrThrow\",\"findMany\":\"findManyplataforma_x_regiao_atuacao\",\"create\":\"createOneplataforma_x_regiao_atuacao\",\"createMany\":\"createManyplataforma_x_regiao_atuacao\",\"delete\":\"deleteOneplataforma_x_regiao_atuacao\",\"update\":\"updateOneplataforma_x_regiao_atuacao\",\"deleteMany\":\"deleteManyplataforma_x_regiao_atuacao\",\"updateMany\":\"updateManyplataforma_x_regiao_atuacao\",\"upsert\":\"upsertOneplataforma_x_regiao_atuacao\",\"aggregate\":\"aggregateplataforma_x_regiao_atuacao\",\"groupBy\":\"groupByplataforma_x_regiao_atuacao\"},{\"model\":\"regiao_atuacao\",\"plural\":\"regiao_atuacaos\",\"findUnique\":\"findUniqueregiao_atuacao\",\"findUniqueOrThrow\":\"findUniqueregiao_atuacaoOrThrow\",\"findFirst\":\"findFirstregiao_atuacao\",\"findFirstOrThrow\":\"findFirstregiao_atuacaoOrThrow\",\"findMany\":\"findManyregiao_atuacao\",\"create\":\"createOneregiao_atuacao\",\"createMany\":\"createManyregiao_atuacao\",\"delete\":\"deleteOneregiao_atuacao\",\"update\":\"updateOneregiao_atuacao\",\"deleteMany\":\"deleteManyregiao_atuacao\",\"updateMany\":\"updateManyregiao_atuacao\",\"upsert\":\"upsertOneregiao_atuacao\",\"aggregate\":\"aggregateregiao_atuacao\",\"groupBy\":\"groupByregiao_atuacao\"},{\"model\":\"regiao_atuacao_tipo\",\"plural\":\"regiao_atuacao_tipos\",\"findUnique\":\"findUniqueregiao_atuacao_tipo\",\"findUniqueOrThrow\":\"findUniqueregiao_atuacao_tipoOrThrow\",\"findFirst\":\"findFirstregiao_atuacao_tipo\",\"findFirstOrThrow\":\"findFirstregiao_atuacao_tipoOrThrow\",\"findMany\":\"findManyregiao_atuacao_tipo\",\"create\":\"createOneregiao_atuacao_tipo\",\"createMany\":\"createManyregiao_atuacao_tipo\",\"delete\":\"deleteOneregiao_atuacao_tipo\",\"update\":\"updateOneregiao_atuacao_tipo\",\"deleteMany\":\"deleteManyregiao_atuacao_tipo\",\"updateMany\":\"updateManyregiao_atuacao_tipo\",\"upsert\":\"upsertOneregiao_atuacao_tipo\",\"aggregate\":\"aggregateregiao_atuacao_tipo\",\"groupBy\":\"groupByregiao_atuacao_tipo\"},{\"model\":\"sacado\",\"plural\":\"sacados\",\"findUnique\":\"findUniquesacado\",\"findUniqueOrThrow\":\"findUniquesacadoOrThrow\",\"findFirst\":\"findFirstsacado\",\"findFirstOrThrow\":\"findFirstsacadoOrThrow\",\"findMany\":\"findManysacado\",\"create\":\"createOnesacado\",\"createMany\":\"createManysacado\",\"delete\":\"deleteOnesacado\",\"update\":\"updateOnesacado\",\"deleteMany\":\"deleteManysacado\",\"updateMany\":\"updateManysacado\",\"upsert\":\"upsertOnesacado\",\"aggregate\":\"aggregatesacado\",\"groupBy\":\"groupBysacado\"},{\"model\":\"titulo\",\"plural\":\"titulos\",\"findUnique\":\"findUniquetitulo\",\"findUniqueOrThrow\":\"findUniquetituloOrThrow\",\"findFirst\":\"findFirsttitulo\",\"findFirstOrThrow\":\"findFirsttituloOrThrow\",\"findMany\":\"findManytitulo\",\"create\":\"createOnetitulo\",\"createMany\":\"createManytitulo\",\"delete\":\"deleteOnetitulo\",\"update\":\"updateOnetitulo\",\"deleteMany\":\"deleteManytitulo\",\"updateMany\":\"updateManytitulo\",\"upsert\":\"upsertOnetitulo\",\"aggregate\":\"aggregatetitulo\",\"groupBy\":\"groupBytitulo\"},{\"model\":\"titulo_tipo\",\"plural\":\"titulo_tipos\",\"findUnique\":\"findUniquetitulo_tipo\",\"findUniqueOrThrow\":\"findUniquetitulo_tipoOrThrow\",\"findFirst\":\"findFirsttitulo_tipo\",\"findFirstOrThrow\":\"findFirsttitulo_tipoOrThrow\",\"findMany\":\"findManytitulo_tipo\",\"create\":\"createOnetitulo_tipo\",\"createMany\":\"createManytitulo_tipo\",\"delete\":\"deleteOnetitulo_tipo\",\"update\":\"updateOnetitulo_tipo\",\"deleteMany\":\"deleteManytitulo_tipo\",\"updateMany\":\"updateManytitulo_tipo\",\"upsert\":\"upsertOnetitulo_tipo\",\"aggregate\":\"aggregatetitulo_tipo\",\"groupBy\":\"groupBytitulo_tipo\"},{\"model\":\"titulo_x_cedente\",\"plural\":\"titulo_x_cedentes\",\"findUnique\":\"findUniquetitulo_x_cedente\",\"findUniqueOrThrow\":\"findUniquetitulo_x_cedenteOrThrow\",\"findFirst\":\"findFirsttitulo_x_cedente\",\"findFirstOrThrow\":\"findFirsttitulo_x_cedenteOrThrow\",\"findMany\":\"findManytitulo_x_cedente\",\"create\":\"createOnetitulo_x_cedente\",\"createMany\":\"createManytitulo_x_cedente\",\"delete\":\"deleteOnetitulo_x_cedente\",\"update\":\"updateOnetitulo_x_cedente\",\"deleteMany\":\"deleteManytitulo_x_cedente\",\"updateMany\":\"updateManytitulo_x_cedente\",\"upsert\":\"upsertOnetitulo_x_cedente\",\"aggregate\":\"aggregatetitulo_x_cedente\",\"groupBy\":\"groupBytitulo_x_cedente\"},{\"model\":\"titulo_x_empresa\",\"plural\":\"titulo_x_empresas\",\"findUnique\":\"findUniquetitulo_x_empresa\",\"findUniqueOrThrow\":\"findUniquetitulo_x_empresaOrThrow\",\"findFirst\":\"findFirsttitulo_x_empresa\",\"findFirstOrThrow\":\"findFirsttitulo_x_empresaOrThrow\",\"findMany\":\"findManytitulo_x_empresa\",\"create\":\"createOnetitulo_x_empresa\",\"createMany\":\"createManytitulo_x_empresa\",\"delete\":\"deleteOnetitulo_x_empresa\",\"update\":\"updateOnetitulo_x_empresa\",\"deleteMany\":\"deleteManytitulo_x_empresa\",\"updateMany\":\"updateManytitulo_x_empresa\",\"upsert\":\"upsertOnetitulo_x_empresa\",\"aggregate\":\"aggregatetitulo_x_empresa\",\"groupBy\":\"groupBytitulo_x_empresa\"},{\"model\":\"titulo_x_plataforma\",\"plural\":\"titulo_x_plataformas\",\"findUnique\":\"findUniquetitulo_x_plataforma\",\"findUniqueOrThrow\":\"findUniquetitulo_x_plataformaOrThrow\",\"findFirst\":\"findFirsttitulo_x_plataforma\",\"findFirstOrThrow\":\"findFirsttitulo_x_plataformaOrThrow\",\"findMany\":\"findManytitulo_x_plataforma\",\"create\":\"createOnetitulo_x_plataforma\",\"createMany\":\"createManytitulo_x_plataforma\",\"delete\":\"deleteOnetitulo_x_plataforma\",\"update\":\"updateOnetitulo_x_plataforma\",\"deleteMany\":\"deleteManytitulo_x_plataforma\",\"updateMany\":\"updateManytitulo_x_plataforma\",\"upsert\":\"upsertOnetitulo_x_plataforma\",\"aggregate\":\"aggregatetitulo_x_plataforma\",\"groupBy\":\"groupBytitulo_x_plataforma\"},{\"model\":\"titulos_x_usuario\",\"plural\":\"titulos_x_usuarios\",\"findUnique\":\"findUniquetitulos_x_usuario\",\"findUniqueOrThrow\":\"findUniquetitulos_x_usuarioOrThrow\",\"findFirst\":\"findFirsttitulos_x_usuario\",\"findFirstOrThrow\":\"findFirsttitulos_x_usuarioOrThrow\",\"findMany\":\"findManytitulos_x_usuario\",\"create\":\"createOnetitulos_x_usuario\",\"createMany\":\"createManytitulos_x_usuario\",\"delete\":\"deleteOnetitulos_x_usuario\",\"update\":\"updateOnetitulos_x_usuario\",\"deleteMany\":\"deleteManytitulos_x_usuario\",\"updateMany\":\"updateManytitulos_x_usuario\",\"upsert\":\"upsertOnetitulos_x_usuario\",\"aggregate\":\"aggregatetitulos_x_usuario\",\"groupBy\":\"groupBytitulos_x_usuario\"},{\"model\":\"usuario\",\"plural\":\"usuarios\",\"findUnique\":\"findUniqueusuario\",\"findUniqueOrThrow\":\"findUniqueusuarioOrThrow\",\"findFirst\":\"findFirstusuario\",\"findFirstOrThrow\":\"findFirstusuarioOrThrow\",\"findMany\":\"findManyusuario\",\"create\":\"createOneusuario\",\"createMany\":\"createManyusuario\",\"delete\":\"deleteOneusuario\",\"update\":\"updateOneusuario\",\"deleteMany\":\"deleteManyusuario\",\"updateMany\":\"updateManyusuario\",\"upsert\":\"upsertOneusuario\",\"aggregate\":\"aggregateusuario\",\"groupBy\":\"groupByusuario\"},{\"model\":\"usuario__pessoa\",\"plural\":\"usuario__pessoas\",\"findUnique\":\"findUniqueusuario__pessoa\",\"findUniqueOrThrow\":\"findUniqueusuario__pessoaOrThrow\",\"findFirst\":\"findFirstusuario__pessoa\",\"findFirstOrThrow\":\"findFirstusuario__pessoaOrThrow\",\"findMany\":\"findManyusuario__pessoa\",\"create\":\"createOneusuario__pessoa\",\"createMany\":\"createManyusuario__pessoa\",\"delete\":\"deleteOneusuario__pessoa\",\"update\":\"updateOneusuario__pessoa\",\"deleteMany\":\"deleteManyusuario__pessoa\",\"updateMany\":\"updateManyusuario__pessoa\",\"upsert\":\"upsertOneusuario__pessoa\",\"aggregate\":\"aggregateusuario__pessoa\",\"groupBy\":\"groupByusuario__pessoa\"},{\"model\":\"usuario_n_borderos\",\"plural\":\"usuario_n_borderos\",\"findUnique\":\"findUniqueusuario_n_borderos\",\"findUniqueOrThrow\":\"findUniqueusuario_n_borderosOrThrow\",\"findFirst\":\"findFirstusuario_n_borderos\",\"findFirstOrThrow\":\"findFirstusuario_n_borderosOrThrow\",\"findMany\":\"findManyusuario_n_borderos\",\"create\":\"createOneusuario_n_borderos\",\"createMany\":\"createManyusuario_n_borderos\",\"delete\":\"deleteOneusuario_n_borderos\",\"update\":\"updateOneusuario_n_borderos\",\"deleteMany\":\"deleteManyusuario_n_borderos\",\"updateMany\":\"updateManyusuario_n_borderos\",\"upsert\":\"upsertOneusuario_n_borderos\",\"aggregate\":\"aggregateusuario_n_borderos\",\"groupBy\":\"groupByusuario_n_borderos\"},{\"model\":\"usuario_perfil_tipo\",\"plural\":\"usuario_perfil_tipos\",\"findUnique\":\"findUniqueusuario_perfil_tipo\",\"findUniqueOrThrow\":\"findUniqueusuario_perfil_tipoOrThrow\",\"findFirst\":\"findFirstusuario_perfil_tipo\",\"findFirstOrThrow\":\"findFirstusuario_perfil_tipoOrThrow\",\"findMany\":\"findManyusuario_perfil_tipo\",\"create\":\"createOneusuario_perfil_tipo\",\"createMany\":\"createManyusuario_perfil_tipo\",\"delete\":\"deleteOneusuario_perfil_tipo\",\"update\":\"updateOneusuario_perfil_tipo\",\"deleteMany\":\"deleteManyusuario_perfil_tipo\",\"updateMany\":\"updateManyusuario_perfil_tipo\",\"upsert\":\"upsertOneusuario_perfil_tipo\",\"aggregate\":\"aggregateusuario_perfil_tipo\",\"groupBy\":\"groupByusuario_perfil_tipo\"},{\"model\":\"usuario_x_perfil\",\"plural\":\"usuario_x_perfils\",\"findUnique\":\"findUniqueusuario_x_perfil\",\"findUniqueOrThrow\":\"findUniqueusuario_x_perfilOrThrow\",\"findFirst\":\"findFirstusuario_x_perfil\",\"findFirstOrThrow\":\"findFirstusuario_x_perfilOrThrow\",\"findMany\":\"findManyusuario_x_perfil\",\"create\":\"createOneusuario_x_perfil\",\"createMany\":\"createManyusuario_x_perfil\",\"delete\":\"deleteOneusuario_x_perfil\",\"update\":\"updateOneusuario_x_perfil\",\"deleteMany\":\"deleteManyusuario_x_perfil\",\"updateMany\":\"updateManyusuario_x_perfil\",\"upsert\":\"upsertOneusuario_x_perfil\",\"aggregate\":\"aggregateusuario_x_perfil\",\"groupBy\":\"groupByusuario_x_perfil\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
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
      "value": "E:\\Trabalho\\AR3\\ar3-manager-bd-utils\\@generated\\prisma\\clientMysql",
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
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prismaMysql",
  "clientVersion": "4.7.1",
  "engineVersion": "272861e07ab64f234d3ffc4094e32bd61775599c",
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
path.join(process.cwd(), "@generated\\prisma\\clientMysql\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "@generated\\prisma\\clientMysql\\schema.prisma")

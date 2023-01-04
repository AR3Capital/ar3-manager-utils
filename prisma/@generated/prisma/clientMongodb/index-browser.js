
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


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

exports.Prisma.ProviderClientReminderConfigsScalarFieldEnum = makeEnum({
  id: 'id',
  amountSessions: 'amountSessions',
  clientId: 'clientId',
  dateTimeEnd: 'dateTimeEnd',
  dateTimeStart: 'dateTimeStart',
  isTotalPriceCustom: 'isTotalPriceCustom',
  occurrenceType: 'occurrenceType',
  providerId: 'providerId',
  reminderStatus: 'reminderStatus',
  totalPrice: 'totalPrice',
  totalPricePayed: 'totalPricePayed'
});

exports.Prisma.ProviderClientReminderOrderScalarFieldEnum = makeEnum({
  id: 'id',
  amount: 'amount',
  amountPayed: 'amountPayed',
  clientId: 'clientId',
  dueDate: 'dueDate',
  generateDate: 'generateDate',
  paymentDate: 'paymentDate',
  providerClientReminderId: 'providerClientReminderId',
  providerId: 'providerId',
  statusType: 'statusType'
});

exports.Prisma.ProviderClientRemindersScalarFieldEnum = makeEnum({
  id: 'id',
  providerClientOrder: 'providerClientOrder',
  providerClientReminderConfigId: 'providerClientReminderConfigId'
});

exports.Prisma.ProviderClientsScalarFieldEnum = makeEnum({
  id: 'id',
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  cellphone: 'cellphone',
  email: 'email',
  isWhatsapp: 'isWhatsapp',
  name: 'name',
  providerId: 'providerId'
});

exports.Prisma.ProviderDockScalarFieldEnum = makeEnum({
  id: 'id',
  accountId: 'accountId',
  peopleId: 'peopleId',
  providerId: 'providerId',
  registrationId: 'registrationId',
  statusSPD: 'statusSPD'
});

exports.Prisma.ProviderScalarFieldEnum = makeEnum({
  id: 'id',
  hasOnboarding: 'hasOnboarding'
});

exports.Prisma.ProviderServicesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  priceType: 'priceType',
  providerId: 'providerId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TypesScalarFieldEnum = makeEnum({
  id: 'id',
  Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: 'Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  providerId: 'providerId'
});


exports.Prisma.ModelName = makeEnum({
  Provider: 'Provider',
  ProviderClientReminderConfigs: 'ProviderClientReminderConfigs',
  ProviderClientReminderOrder: 'ProviderClientReminderOrder',
  ProviderClientReminders: 'ProviderClientReminders',
  ProviderClients: 'ProviderClients',
  ProviderDock: 'ProviderDock',
  ProviderServices: 'ProviderServices',
  Types: 'Types',
  User: 'User'
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

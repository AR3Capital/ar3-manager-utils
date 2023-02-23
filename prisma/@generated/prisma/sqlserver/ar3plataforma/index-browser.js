
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

exports.Prisma.CadCreditProposaIindebtednessScalarFieldEnum = makeEnum({
  Id: 'Id',
  BaseDate: 'BaseDate',
  TotalIndebtedness: 'TotalIndebtedness',
  IdProposta: 'IdProposta',
  BatimentoCad: 'BatimentoCad'
});

exports.Prisma.CadCreditProposalBacenScalarFieldEnum = makeEnum({
  Id: 'Id',
  DataBase: 'DataBase',
  Valor: 'Valor',
  Vencer180: 'Vencer180',
  Vencer360: 'Vencer360',
  VencerMais360: 'VencerMais360',
  Vencido60: 'Vencido60',
  VencidoMais60: 'VencidoMais60',
  Renegociacoes: 'Renegociacoes',
  Garantias: 'Garantias',
  Socio: 'Socio',
  Gerou: 'Gerou',
  Garantia: 'Garantia',
  CreditProposalModelId: 'CreditProposalModelId'
});

exports.Prisma.CadCreditProposalIndebtednessListScalarFieldEnum = makeEnum({
  Id: 'Id',
  Institution: 'Institution',
  Limit: 'Limit',
  Bank: 'Bank',
  Modalidade: 'Modalidade',
  Garantia: 'Garantia',
  Avencer: 'Avencer',
  Vencido: 'Vencido',
  Liquidez: 'Liquidez',
  Discount: 'Discount',
  Fomento: 'Fomento',
  Intercompany: 'Intercompany',
  GeneralTotal: 'GeneralTotal',
  CadCreditProposalIndebtednessModelId: 'CadCreditProposalIndebtednessModelId',
  PerGarantia: 'PerGarantia',
  SaldoDevedor: 'SaldoDevedor',
  vlrPMT: 'vlrPMT',
  QtdParcelas: 'QtdParcelas',
  ParcelasVencer: 'ParcelasVencer',
  DiaVencParcelas: 'DiaVencParcelas',
  DtInicioContrato: 'DtInicioContrato',
  BatimentoCadastro: 'BatimentoCadastro',
  Vop: 'Vop'
});

exports.Prisma.CadCreditProposalRestritionScalarFieldEnum = makeEnum({
  Id: 'Id',
  Restricao: 'Restricao',
  ProposalId: 'ProposalId',
  DataBase: 'DataBase'
});

exports.Prisma.CadCreditProposalShareholdingCompositionMainAdministratorScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  CPF: 'CPF',
  Position: 'Position',
  vencprocadministrador: 'vencprocadministrador',
  CreditProposalModelId: 'CreditProposalModelId',
  VencAta: 'VencAta'
});

exports.Prisma.CadCreditProposalShareholdingCompositionPartnerScalarFieldEnum = makeEnum({
  Id: 'Id',
  Partners: 'Partners',
  CpfCnpj: 'CpfCnpj',
  EntryDate: 'EntryDate',
  ExitDate: 'ExitDate',
  Spouse: 'Spouse',
  SpouseCpf: 'SpouseCpf',
  Participation: 'Participation',
  CreditProposalModelId: 'CreditProposalModelId'
});

exports.Prisma.CadCreditProposalShareholdingCompositionRelatedCompaniesScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  Cnpj: 'Cnpj',
  Activity: 'Activity',
  Partner: 'Partner',
  Foundation: 'Foundation',
  Billing: 'Billing',
  BillingAgainst: 'BillingAgainst',
  CreditProposalModelId: 'CreditProposalModelId',
  inactive: 'inactive'
});

exports.Prisma.CadCreditProposalSummaryScalarFieldEnum = makeEnum({
  Id: 'Id',
  Cadastro: 'Cadastro',
  BatimentoCad: 'BatimentoCad',
  ProposalId: 'ProposalId',
  DataBase: 'DataBase'
});

exports.Prisma.CaixaScalarFieldEnum = makeEnum({
  Id: 'Id',
  Fundo: 'Fundo',
  Valor: 'Valor',
  Data: 'Data'
});

exports.Prisma.CanhotoTituloSeguroCreditoScalarFieldEnum = makeEnum({
  Id: 'Id',
  NomeCanhoto: 'NomeCanhoto',
  GuidCanhoto: 'GuidCanhoto',
  NumeroTitulo: 'NumeroTitulo',
  EHID: 'EHID'
});

exports.Prisma.CedentePontuacaoScalarFieldEnum = makeEnum({
  Id: 'Id',
  Data: 'Data',
  DescricaoRetorno: 'DescricaoRetorno',
  Cedente: 'Cedente'
});

exports.Prisma.CedenteScalarFieldEnum = makeEnum({
  Id: 'Id',
  Nome: 'Nome',
  Cnpj: 'Cnpj',
  NumWBA: 'NumWBA',
  Email: 'Email',
  Gerente: 'Gerente',
  NomeBeneA: 'NomeBeneA',
  CPFBeneA: 'CPFBeneA',
  NomeBeneB: 'NomeBeneB',
  CPFBeneB: 'CPFBeneB',
  NomeBeneC: 'NomeBeneC',
  CPFBeneC: 'CPFBeneC',
  Ativo: 'Ativo'
});

exports.Prisma.ClaimScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name'
});

exports.Prisma.CompanyScalarFieldEnum = makeEnum({
  Id: 'Id',
  CompanyName: 'CompanyName',
  Cnpj: 'Cnpj',
  Address: 'Address',
  Complement: 'Complement',
  City: 'City',
  State: 'State',
  Fone: 'Fone',
  ErpId: 'ErpId'
});

exports.Prisma.ConsultaCTEScalarFieldEnum = makeEnum({
  id: 'id',
  chave: 'chave',
  ultimaconsulta: 'ultimaconsulta',
  ntentativa: 'ntentativa',
  ativo: 'ativo'
});

exports.Prisma.CreditProposaIindebtednessScalarFieldEnum = makeEnum({
  Id: 'Id',
  BaseDate: 'BaseDate',
  TotalIndebtedness: 'TotalIndebtedness',
  IdProposta: 'IdProposta'
});

exports.Prisma.CreditProposalAnexoScalarFieldEnum = makeEnum({
  Id: 'Id',
  PropostaCredito: 'PropostaCredito',
  Descricao: 'Descricao',
  FileID: 'FileID'
});

exports.Prisma.CreditProposalBillingMonthScalarFieldEnum = makeEnum({
  Id: 'Id',
  Year: 'Year',
  January: 'January',
  February: 'February',
  May: 'May',
  April: 'April',
  March: 'March',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
  Avarage: 'Avarage',
  Total: 'Total',
  CreditProposalBillingModelId: 'CreditProposalBillingModelId'
});

exports.Prisma.CreditProposalBillingScalarFieldEnum = makeEnum({
  Id: 'Id',
  CashPayment: 'CashPayment',
  Duplicates: 'Duplicates',
  Cheque: 'Cheque',
  AccountCredit: 'AccountCredit',
  Intercompany: 'Intercompany',
  Others: 'Others'
});

exports.Prisma.CreditProposalIndebtednessListScalarFieldEnum = makeEnum({
  Id: 'Id',
  Institution: 'Institution',
  Limit: 'Limit',
  Bank: 'Bank',
  Modalidade: 'Modalidade',
  Garantia: 'Garantia',
  Avencer: 'Avencer',
  Vencido: 'Vencido',
  Comissaria: 'Comissaria',
  Discount: 'Discount',
  Fomento: 'Fomento',
  Intercompany: 'Intercompany',
  GeneralTotal: 'GeneralTotal',
  CreditProposaIindebtednessModelId: 'CreditProposaIindebtednessModelId',
  PerGarantia: 'PerGarantia',
  SaldoDevedor: 'SaldoDevedor',
  vlrPMT: 'vlrPMT',
  QtdParcelas: 'QtdParcelas',
  ParcelasVencer: 'ParcelasVencer',
  DiaVencParcelas: 'DiaVencParcelas',
  DtInicioContrato: 'DtInicioContrato'
});

exports.Prisma.CreditProposalMsgScalarFieldEnum = makeEnum({
  id: 'id',
  data: 'data',
  owner: 'owner',
  usuarioalvo: 'usuarioalvo',
  mensagem: 'mensagem',
  propostaid: 'propostaid'
});

exports.Prisma.CreditProposalOperatingCycleCompetitorsScalarFieldEnum = makeEnum({
  Id: 'Id',
  Competitors: 'Competitors',
  Percent: 'Percent',
  CreditProposalOperatingCycleModelId: 'CreditProposalOperatingCycleModelId'
});

exports.Prisma.CreditProposalOperatingCycleCustomersScalarFieldEnum = makeEnum({
  Id: 'Id',
  Customers: 'Customers',
  Percent: 'Percent',
  CreditProposalOperatingCycleModelId: 'CreditProposalOperatingCycleModelId'
});

exports.Prisma.CreditProposalOperatingCycleExportScalarFieldEnum = makeEnum({
  Id: 'Id',
  MonthlyAverage: 'MonthlyAverage',
  PeriodReceipt: 'PeriodReceipt',
  MainCountries: 'MainCountries'
});

exports.Prisma.CreditProposalOperatingCycleImportScalarFieldEnum = makeEnum({
  Id: 'Id',
  MonthlyAverage: 'MonthlyAverage',
  PeriodReceipt: 'PeriodReceipt',
  MainCountries: 'MainCountries'
});

exports.Prisma.CreditProposalOperatingCycleProductionScalarFieldEnum = makeEnum({
  Id: 'Id',
  Production: 'Production',
  Percent: 'Percent',
  CreditProposalOperatingCycleModelId: 'CreditProposalOperatingCycleModelId'
});

exports.Prisma.CreditProposalOperatingCycleScalarFieldEnum = makeEnum({
  Id: 'Id',
  Cnae: 'Cnae',
  EmployeesNum: 'EmployeesNum',
  CurrentStockValue: 'CurrentStockValue',
  IdleLevel: 'IdleLevel',
  InventoryTurnover: 'InventoryTurnover',
  MainActivity: 'MainActivity',
  PayrollValue: 'PayrollValue',
  ProductionCapacity: 'ProductionCapacity',
  PurchasingLimit: 'PurchasingLimit',
  SalesLimit: 'SalesLimit',
  ExportId: 'ExportId',
  ImportId: 'ImportId'
});

exports.Prisma.CreditProposalOperatingCycleSuppliersScalarFieldEnum = makeEnum({
  Id: 'Id',
  Suppliers: 'Suppliers',
  Percent: 'Percent',
  CreditProposalOperatingCycleModelId: 'CreditProposalOperatingCycleModelId'
});

exports.Prisma.CreditProposalScalarFieldEnum = makeEnum({
  Id: 'Id',
  Company: 'Company',
  Cnpj: 'Cnpj',
  Address: 'Address',
  Phone: 'Phone',
  Status: 'Status',
  Foundation: 'Foundation',
  RegisterDate: 'RegisterDate',
  RjRequired: 'RjRequired',
  RjDefined: 'RjDefined',
  PostalCode: 'PostalCode',
  Contact: 'Contact',
  Number: 'Number',
  District: 'District',
  City: 'City',
  Uf: 'Uf',
  UserId: 'UserId',
  SummaryId: 'SummaryId',
  CadSummaryId: 'CadSummaryId',
  BillingId: 'BillingId',
  OperatingCycleId: 'OperatingCycleId',
  CadCreditProposalBacenId: 'CadCreditProposalBacenId',
  CadRestritionId: 'CadRestritionId',
  LastChange: 'LastChange',
  Pendencias: 'Pendencias',
  Motivos: 'Motivos',
  LimiteComite: 'LimiteComite',
  TrancheComite: 'TrancheComite',
  MesesReavaliar: 'MesesReavaliar',
  Ativo: 'Ativo',
  StatusContrato: 'StatusContrato',
  GrupoEconomico: 'GrupoEconomico',
  Banco: 'Banco',
  Agencia: 'Agencia',
  Conta: 'Conta',
  Email: 'Email'
});

exports.Prisma.CreditProposalShareholdingCompositionMainAdministratorScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  CPF: 'CPF',
  Position: 'Position',
  vencprocadministrador: 'vencprocadministrador',
  CreditProposalModelId: 'CreditProposalModelId',
  VencAta: 'VencAta'
});

exports.Prisma.CreditProposalShareholdingCompositionPartnerScalarFieldEnum = makeEnum({
  Id: 'Id',
  Partners: 'Partners',
  CpfCnpj: 'CpfCnpj',
  EntryDate: 'EntryDate',
  ExitDate: 'ExitDate',
  Spouse: 'Spouse',
  SpouseCpf: 'SpouseCpf',
  Participation: 'Participation',
  CreditProposalModelId: 'CreditProposalModelId'
});

exports.Prisma.CreditProposalShareholdingCompositionRelatedCompaniesScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  Cnpj: 'Cnpj',
  Activity: 'Activity',
  Partner: 'Partner',
  Foundation: 'Foundation',
  Billing: 'Billing',
  BillingAgainst: 'BillingAgainst',
  CreditProposalModelId: 'CreditProposalModelId'
});

exports.Prisma.CreditProposalSummaryScalarFieldEnum = makeEnum({
  Id: 'Id',
  Limit: 'Limit',
  Tranche: 'Tranche',
  Tax: 'Tax',
  AvarageTicket: 'AvarageTicket',
  Indication: 'Indication',
  Manager: 'Manager',
  Superintendent: 'Superintendent',
  Analyze: 'Analyze',
  Proposal_Id: 'Proposal_Id',
  DataBase: 'DataBase'
});

exports.Prisma.EFMigrationsHistoryScalarFieldEnum = makeEnum({
  MigrationId: 'MigrationId',
  ProductVersion: 'ProductVersion'
});

exports.Prisma.EmailTemplatesScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  Template: 'Template'
});

exports.Prisma.EnviosMensaisScalarFieldEnum = makeEnum({
  id: 'id',
  mes: 'mes',
  cedente: 'cedente'
});

exports.Prisma.EscrowScalarFieldEnum = makeEnum({
  Id: 'Id',
  Possui: 'Possui',
  Trava: 'Trava',
  IdCreditProposal: 'IdCreditProposal'
});

exports.Prisma.EstruturaComercialScalarFieldEnum = makeEnum({
  Id: 'Id',
  Superintendente: 'Superintendente',
  Gerente: 'Gerente',
  Assistente: 'Assistente'
});

exports.Prisma.EventLogScalarFieldEnum = makeEnum({
  Id: 'Id',
  LogLevel: 'LogLevel',
  Message: 'Message',
  CreatedTime: 'CreatedTime',
  JsonModel: 'JsonModel'
});

exports.Prisma.FIDC_DiarioScalarFieldEnum = makeEnum({
  Id: 'Id',
  Ano: 'Ano',
  Mes: 'Mes',
  Dia: 'Dia',
  Per_CDI: 'Per_CDI',
  Per_Rentabilidade_Sub: 'Per_Rentabilidade_Sub',
  Vlr_PL_Subordinada: 'Vlr_PL_Subordinada',
  Vlr_Direitos_Creditorios: 'Vlr_Direitos_Creditorios',
  Vlr_PL_Asia: 'Vlr_PL_Asia',
  Vlr_PDD: 'Vlr_PDD',
  Vlr_Vencidos_AMais_60: 'Vlr_Vencidos_AMais_60',
  Vlr_Vencidos_30_60: 'Vlr_Vencidos_30_60',
  Vlr_Vencidos_0_30: 'Vlr_Vencidos_0_30',
  Vlr_AVencer: 'Vlr_AVencer',
  Vlr_AVencer_60: 'Vlr_AVencer_60',
  Vlr_Liquidez_Liquidado: 'Vlr_Liquidez_Liquidado',
  Per_Liquidez_Liquidado: 'Per_Liquidez_Liquidado',
  Vlr_Liquidez_Ate7Dias: 'Vlr_Liquidez_Ate7Dias',
  Per_Liquidez_Ate7Dias: 'Per_Liquidez_Ate7Dias',
  Vlr_Liquidez_Mais8Dias: 'Vlr_Liquidez_Mais8Dias',
  Per_Liquidez_Mais8Dias: 'Per_Liquidez_Mais8Dias',
  Vlr_Liquidez_EmAberto: 'Vlr_Liquidez_EmAberto',
  Per_Liquidez_EmAberto: 'Per_Liquidez_EmAberto',
  Vlr_Liquidez_EmAberto7Dias: 'Vlr_Liquidez_EmAberto7Dias',
  Per_Liquidez_EmAberto7Dias: 'Per_Liquidez_EmAberto7Dias',
  Vlr_Liquidez_EmAbertoMais8Dias: 'Vlr_Liquidez_EmAbertoMais8Dias',
  Per_Liquidez_EmAbertoMais8Dias: 'Per_Liquidez_EmAbertoMais8Dias',
  Vlr_Liquidez_Cartorio: 'Vlr_Liquidez_Cartorio',
  Per_Liquidez_Cartorio: 'Per_Liquidez_Cartorio',
  Vlr_Liquidez_Recompra: 'Vlr_Liquidez_Recompra',
  Per_Liquidez_Recompra: 'Per_Liquidez_Recompra',
  Qtd_Operacoes: 'Qtd_Operacoes',
  Qtd_Cedentes_Ativos: 'Qtd_Cedentes_Ativos',
  Qtd_Sacados_Aberto: 'Qtd_Sacados_Aberto',
  Prz_Medio_Carteira: 'Prz_Medio_Carteira',
  Per_Vencto_Ativos_60_PL: 'Per_Vencto_Ativos_60_PL',
  Vlr_Ativos_Cedidos: 'Vlr_Ativos_Cedidos',
  Per_Taxa_Ponderada: 'Per_Taxa_Ponderada',
  Vlr_Medio_Duplicata: 'Vlr_Medio_Duplicata',
  Vlr_Ticket_Medio: 'Vlr_Ticket_Medio',
  Vlr_Aplicacoes: 'Vlr_Aplicacoes',
  Vlr_10Maiores_Cedentes: 'Vlr_10Maiores_Cedentes',
  Vlr_5Maiores_Cedentes: 'Vlr_5Maiores_Cedentes',
  Vlr_10Maiores_Cedentes_Mes: 'Vlr_10Maiores_Cedentes_Mes',
  Vlr_5Maiores_Cedentes_Mes: 'Vlr_5Maiores_Cedentes_Mes',
  Dat_Cota_Subordinada_Senior: 'Dat_Cota_Subordinada_Senior',
  Vlr_Cota_Subordinada: 'Vlr_Cota_Subordinada',
  Qtd_Cotista_Subordinada: 'Qtd_Cotista_Subordinada',
  Dat_Informacao_Carta: 'Dat_Informacao_Carta',
  Des_Observacao: 'Des_Observacao',
  Vlr_Resgate: 'Vlr_Resgate',
  Vlr_10Maiores_Sacados: 'Vlr_10Maiores_Sacados',
  Vlr_5Maiores_Sacados: 'Vlr_5Maiores_Sacados'
});

exports.Prisma.FIDC_Diario_FalconScalarFieldEnum = makeEnum({
  Id: 'Id',
  Ano: 'Ano',
  Mes: 'Mes',
  Dia: 'Dia',
  Per_CDI: 'Per_CDI',
  Per_Rentabilidade_Sub: 'Per_Rentabilidade_Sub',
  Vlr_PL_Subordinada: 'Vlr_PL_Subordinada',
  Vlr_Direitos_Creditorios: 'Vlr_Direitos_Creditorios',
  Vlr_PL_Asia: 'Vlr_PL_Asia',
  Vlr_PDD: 'Vlr_PDD',
  Vlr_Vencidos_AMais_60: 'Vlr_Vencidos_AMais_60',
  Vlr_Vencidos_30_60: 'Vlr_Vencidos_30_60',
  Vlr_Vencidos_0_30: 'Vlr_Vencidos_0_30',
  Vlr_AVencer: 'Vlr_AVencer',
  Vlr_AVencer_60: 'Vlr_AVencer_60',
  Vlr_Liquidez_Liquidado: 'Vlr_Liquidez_Liquidado',
  Per_Liquidez_Liquidado: 'Per_Liquidez_Liquidado',
  Vlr_Liquidez_Ate7Dias: 'Vlr_Liquidez_Ate7Dias',
  Per_Liquidez_Ate7Dias: 'Per_Liquidez_Ate7Dias',
  Vlr_Liquidez_Mais8Dias: 'Vlr_Liquidez_Mais8Dias',
  Per_Liquidez_Mais8Dias: 'Per_Liquidez_Mais8Dias',
  Vlr_Liquidez_EmAberto: 'Vlr_Liquidez_EmAberto',
  Per_Liquidez_EmAberto: 'Per_Liquidez_EmAberto',
  Vlr_Liquidez_EmAberto7Dias: 'Vlr_Liquidez_EmAberto7Dias',
  Per_Liquidez_EmAberto7Dias: 'Per_Liquidez_EmAberto7Dias',
  Vlr_Liquidez_EmAbertoMais8Dias: 'Vlr_Liquidez_EmAbertoMais8Dias',
  Per_Liquidez_EmAbertoMais8Dias: 'Per_Liquidez_EmAbertoMais8Dias',
  Vlr_Liquidez_Cartorio: 'Vlr_Liquidez_Cartorio',
  Per_Liquidez_Cartorio: 'Per_Liquidez_Cartorio',
  Vlr_Liquidez_Recompra: 'Vlr_Liquidez_Recompra',
  Per_Liquidez_Recompra: 'Per_Liquidez_Recompra',
  Qtd_Operacoes: 'Qtd_Operacoes',
  Qtd_Cedentes_Ativos: 'Qtd_Cedentes_Ativos',
  Qtd_Sacados_Aberto: 'Qtd_Sacados_Aberto',
  Prz_Medio_Carteira: 'Prz_Medio_Carteira',
  Per_Vencto_Ativos_60_PL: 'Per_Vencto_Ativos_60_PL',
  Vlr_Ativos_Cedidos: 'Vlr_Ativos_Cedidos',
  Per_Taxa_Ponderada: 'Per_Taxa_Ponderada',
  Vlr_Medio_Duplicata: 'Vlr_Medio_Duplicata',
  Vlr_Ticket_Medio: 'Vlr_Ticket_Medio',
  Vlr_Aplicacoes: 'Vlr_Aplicacoes',
  Vlr_10Maiores_Cedentes: 'Vlr_10Maiores_Cedentes',
  Vlr_5Maiores_Cedentes: 'Vlr_5Maiores_Cedentes',
  Vlr_10Maiores_Cedentes_Mes: 'Vlr_10Maiores_Cedentes_Mes',
  Vlr_5Maiores_Cedentes_Mes: 'Vlr_5Maiores_Cedentes_Mes',
  Dat_Cota_Subordinada_Senior: 'Dat_Cota_Subordinada_Senior',
  Vlr_Cota_Subordinada: 'Vlr_Cota_Subordinada',
  Qtd_Cotista_Subordinada: 'Qtd_Cotista_Subordinada',
  Dat_Informacao_Carta: 'Dat_Informacao_Carta',
  Des_Observacao: 'Des_Observacao',
  Vlr_Resgate: 'Vlr_Resgate',
  Vlr_10Maiores_Sacados: 'Vlr_10Maiores_Sacados',
  Vlr_5Maiores_Sacados: 'Vlr_5Maiores_Sacados'
});

exports.Prisma.FIDC_Diario_SeniorScalarFieldEnum = makeEnum({
  Id: 'Id',
  Ano: 'Ano',
  Mes: 'Mes',
  Dia: 'Dia',
  Senior: 'Senior',
  Vlr_PL_Senior: 'Vlr_PL_Senior',
  Vlr_Cota_Senior: 'Vlr_Cota_Senior',
  Qtd_Cotista_Senior: 'Qtd_Cotista_Senior',
  Tipo: 'Tipo'
});

exports.Prisma.FileCategoryScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name'
});

exports.Prisma.FileScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  Type: 'Type',
  Extension: 'Extension',
  Identifier: 'Identifier',
  Size: 'Size',
  IdProposta: 'IdProposta',
  Data: 'Data',
  Analise: 'Analise',
  Juridico: 'Juridico',
  CategoryId: 'CategoryId'
});

exports.Prisma.GrupoEconomicoScalarFieldEnum = makeEnum({
  Id: 'Id',
  IdPropostaPai: 'IdPropostaPai',
  IdPropostaFilha: 'IdPropostaFilha',
  Ativo: 'Ativo'
});

exports.Prisma.HistoricoAcessoPortalInvestidorScalarFieldEnum = makeEnum({
  Id: 'Id',
  Registro: 'Registro',
  Acao: 'Acao',
  IdUsuario: 'IdUsuario'
});

exports.Prisma.ItemsAnexoLTDAScalarFieldEnum = makeEnum({
  Id: 'Id',
  CopiaContratoSocial: 'CopiaContratoSocial',
  CopiaUltimaAlteracaoContratual: 'CopiaUltimaAlteracaoContratual',
  CopiaDocumentosSocios: 'CopiaDocumentosSocios',
  CertidaoDeCasamento: 'CertidaoDeCasamento',
  CopiaComprovanteDeResidencia: 'CopiaComprovanteDeResidencia',
  CopiaComprovanteEmpresa: 'CopiaComprovanteEmpresa',
  CopiaDaprocuracao: 'CopiaDaprocuracao',
  IdProposta: 'IdProposta'
});

exports.Prisma.ItemsAnexosSAScalarFieldEnum = makeEnum({
  Id: 'Id',
  CopiaEstatutoSocial: 'CopiaEstatutoSocial',
  CopiaAtaEleicao: 'CopiaAtaEleicao',
  CopiaDocumentos: 'CopiaDocumentos',
  CertidaoDeCasamento: 'CertidaoDeCasamento',
  CopiaComprovanteDeResidencia: 'CopiaComprovanteDeResidencia',
  CopiaComprovanteEmpresa: 'CopiaComprovanteEmpresa',
  CopiaProcuracao: 'CopiaProcuracao',
  IdProposta: 'IdProposta'
});

exports.Prisma.LancamentoLiveloScalarFieldEnum = makeEnum({
  id: 'id',
  data: 'data',
  lancamentoLivelo: 'lancamentoLivelo'
});

exports.Prisma.MaioresCedentesScalarFieldEnum = makeEnum({
  Id: 'Id',
  Ano: 'Ano',
  Mes: 'Mes',
  Nome: 'Nome',
  Valor: 'Valor',
  Pl: 'Pl',
  DataCriacao: 'DataCriacao'
});

exports.Prisma.MaioresSacadosScalarFieldEnum = makeEnum({
  Id: 'Id',
  Ano: 'Ano',
  Mes: 'Mes',
  Nome: 'Nome',
  Valor: 'Valor',
  Pl: 'Pl',
  DataCriacao: 'DataCriacao'
});

exports.Prisma.MovimentacaoDaPropostaScalarFieldEnum = makeEnum({
  Id: 'Id',
  Data: 'Data',
  PropostaId: 'PropostaId',
  UserId: 'UserId',
  De: 'De',
  Para: 'Para'
});

exports.Prisma.OverdueClientDetailScalarFieldEnum = makeEnum({
  Id: 'Id',
  OverdueId: 'OverdueId',
  OverdueClientId: 'OverdueClientId',
  Days: 'Days',
  Status: 'Status'
});

exports.Prisma.OverdueClientScalarFieldEnum = makeEnum({
  Id: 'Id',
  PayerCode: 'PayerCode',
  Total: 'Total',
  Status: 'Status',
  FileId: 'FileId'
});

exports.Prisma.OverdueParecerComercialScalarFieldEnum = makeEnum({
  Id: 'Id',
  Data: 'Data',
  Parecer: 'Parecer',
  OverdueId: 'OverdueId',
  UserId: 'UserId'
});

exports.Prisma.OverdueScalarFieldEnum = makeEnum({
  Id: 'Id',
  ClientCode: 'ClientCode',
  ClientName: 'ClientName',
  PayerCode: 'PayerCode',
  PayerName: 'PayerName',
  Email: 'Email',
  Phone: 'Phone',
  Amount: 'Amount',
  DueDate: 'DueDate',
  Found: 'Found',
  Document: 'Document',
  Status: 'Status',
  Opinion: 'Opinion',
  ForecastDate: 'ForecastDate',
  Contact: 'Contact',
  Commissioner: 'Commissioner',
  EmailManager: 'EmailManager',
  Manager: 'Manager',
  Invoice: 'Invoice',
  Assistant: 'Assistant',
  EmailAssistant: 'EmailAssistant',
  EmailSuper: 'EmailSuper',
  Super: 'Super',
  PrevisaoChecagem: 'PrevisaoChecagem',
  PrevisaoComercial: 'PrevisaoComercial',
  ParecerChecagem: 'ParecerChecagem',
  ParecerComercial: 'ParecerComercial',
  Situacao: 'Situacao',
  EmailEnviado: 'EmailEnviado',
  SituacaoNegociacao: 'SituacaoNegociacao',
  ParecerEmail: 'ParecerEmail',
  RetornoSerasaPefin: 'RetornoSerasaPefin',
  DataInclusaoSerasaPefin: 'DataInclusaoSerasaPefin',
  Historico: 'Historico',
  Estado: 'Estado',
  Bordero: 'Bordero',
  DataEmailEnviado: 'DataEmailEnviado',
  Intercompany: 'Intercompany'
});

exports.Prisma.ParametroRelatoUsuarioScalarFieldEnum = makeEnum({
  Id: 'Id',
  UserId: 'UserId',
  RiskScoring: 'RiskScoring',
  MdRiskscoring: 'MdRiskscoring',
  qdsoc: 'qdsoc',
  indlimitpj: 'indlimitpj',
  IndFaturamentoPresumido: 'IndFaturamentoPresumido',
  MdFaturamnetoPresumido: 'MdFaturamnetoPresumido',
  IquerGastoEstimado: 'IquerGastoEstimado',
  IMDGastoEstimado: 'IMDGastoEstimado',
  IquerIRM: 'IquerIRM',
  IquerIndPagAMX: 'IquerIndPagAMX',
  ImodPagAMX: 'ImodPagAMX',
  IndFeatRGC: 'IndFeatRGC',
  IquerSitFiscal: 'IquerSitFiscal',
  IquerIdentPJ: 'IquerIdentPJ',
  IMdIdentPj: 'IMdIdentPj',
  IquerAlertEMP: 'IquerAlertEMP',
  IquerAlertSoc: 'IquerAlertSoc',
  IquerVendasCart: 'IquerVendasCart',
  IquerIndRCdic: 'IquerIndRCdic',
  IquerEndFone: 'IquerEndFone',
  IquerIdDrcDiv: 'IquerIdDrcDiv',
  QuerAnotacaoSPC: 'QuerAnotacaoSPC',
  Amount: 'Amount',
  Billing: 'Billing',
  MonthlyAmount: 'MonthlyAmount'
});

exports.Prisma.ParametrosScalarFieldEnum = makeEnum({
  Id: 'Id',
  Nome: 'Nome',
  Valor: 'Valor'
});

exports.Prisma.PlanilhaAdministradoraScalarFieldEnum = makeEnum({
  Id: 'Id',
  Situacao: 'Situacao',
  tipoPessoaCedente: 'tipoPessoaCedente',
  CNPJCPF: 'CNPJCPF',
  Cedente: 'Cedente',
  TipoPessoaSacado: 'TipoPessoaSacado',
  CNPJCPFSacado: 'CNPJCPFSacado',
  Sacado: 'Sacado',
  Ativo: 'Ativo',
  DataEmissao: 'DataEmissao',
  DataAquisicao: 'DataAquisicao',
  DataVencimento: 'DataVencimento',
  NumeroBoletoBanco: 'NumeroBoletoBanco',
  NumeroTitulo: 'NumeroTitulo',
  CampoChave: 'CampoChave',
  CMC7: 'CMC7',
  ValorAquisicao: 'ValorAquisicao',
  ValorNominal: 'ValorNominal',
  ValorPresente: 'ValorPresente',
  PddNota: 'PddNota',
  PddVencido: 'PddVencido',
  DataPosicao: 'DataPosicao',
  DataPlanilha: 'DataPlanilha',
  TipoFundo: 'TipoFundo',
  Guid: 'Guid',
  Nota: 'Nota',
  DataProrrogacao: 'DataProrrogacao',
  PddEstorno: 'PddEstorno',
  ValorPagamento: 'ValorPagamento',
  Lancamento: 'Lancamento'
});

exports.Prisma.PlanilhaRecompraScalarFieldEnum = makeEnum({
  Id: 'Id',
  CedenteCnpjCpf: 'CedenteCnpjCpf',
  CedenteNome: 'CedenteNome',
  SacadoCnpjCpf: 'SacadoCnpjCpf',
  SacadoNome: 'SacadoNome',
  IdTituloVx: 'IdTituloVx',
  Ativo: 'Ativo',
  DataEmissao: 'DataEmissao',
  DataAquisicao: 'DataAquisicao',
  DataVencimento: 'DataVencimento',
  NumeroBoletoBanco: 'NumeroBoletoBanco',
  NumeroTitulo: 'NumeroTitulo',
  CampoChave: 'CampoChave',
  CMC7: 'CMC7',
  ValorAquisicao: 'ValorAquisicao',
  ValorNominal: 'ValorNominal',
  ValorPresente: 'ValorPresente',
  PddNota: 'PddNota',
  PddVencido: 'PddVencido',
  ValorPagamento: 'ValorPagamento',
  Lancamento: 'Lancamento',
  DataLancamento: 'DataLancamento',
  Motivo: 'Motivo',
  CodigoDeposito: 'CodigoDeposito',
  DataPlanilha: 'DataPlanilha',
  TipoFundo: 'TipoFundo'
});

exports.Prisma.PropostaCreditoFluxoScalarFieldEnum = makeEnum({
  Id: 'Id',
  IdPropostaCreditoId: 'IdPropostaCreditoId',
  UserEnvioId: 'UserEnvioId',
  Data: 'Data',
  Status: 'Status'
});

exports.Prisma.RecadosScalarFieldEnum = makeEnum({
  Id: 'Id',
  Recado: 'Recado',
  DataInicio: 'DataInicio',
  DataFim: 'DataFim',
  Tipo: 'Tipo',
  UserId: 'UserId'
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

exports.Prisma.RolePortalInvestidorScalarFieldEnum = makeEnum({
  IdRole: 'IdRole',
  DescriptionRole: 'DescriptionRole'
});

exports.Prisma.RoleScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  IconCss: 'IconCss'
});

exports.Prisma.RolesScalarFieldEnum = makeEnum({
  Id: 'Id',
  Role: 'Role'
});

exports.Prisma.SeguroCreditoDiarioScalarFieldEnum = makeEnum({
  ID: 'ID',
  EHID: 'EHID',
  Identificacao: 'Identificacao',
  RazaoSocial: 'RazaoSocial',
  MontantePedido: 'MontantePedido',
  MontanteAprovado: 'MontanteAprovado',
  DataPlanilha: 'DataPlanilha',
  TotalVencido: 'TotalVencido',
  TotalAVencer: 'TotalAVencer',
  MontanteExcedente: 'MontanteExcedente'
});

exports.Prisma.SerproHistoryReturnScalarFieldEnum = makeEnum({
  Id: 'Id',
  IdUser: 'IdUser',
  ChaveNfe: 'ChaveNfe',
  JsonReturn: 'JsonReturn',
  Sistema: 'Sistema',
  Error: 'Error',
  CreatedAt: 'CreatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StatisticsDataScalarFieldEnum = makeEnum({
  Id: 'Id',
  Base64: 'Base64',
  Name: 'Name',
  UserId: 'UserId',
  Tipo: 'Tipo',
  CreatedAt: 'CreatedAt',
  DateFile: 'DateFile'
});

exports.Prisma.StatisticsHistoryScalarFieldEnum = makeEnum({
  Id: 'Id',
  StatisticsDataId: 'StatisticsDataId',
  CreatedAt: 'CreatedAt',
  Erro: 'Erro',
  Status: 'Status'
});

exports.Prisma.StatusStatisticsHistoryScalarFieldEnum = makeEnum({
  Id: 'Id',
  Description: 'Description',
  Value: 'Value'
});

exports.Prisma.SubRoleClaimScalarFieldEnum = makeEnum({
  Id: 'Id',
  SubRoleId: 'SubRoleId',
  ClaimId: 'ClaimId'
});

exports.Prisma.SubRoleScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  IconCss: 'IconCss',
  RoleModelId: 'RoleModelId',
  View: 'View'
});

exports.Prisma.SysdiagramsScalarFieldEnum = makeEnum({
  name: 'name',
  principal_id: 'principal_id',
  diagram_id: 'diagram_id',
  version: 'version',
  definition: 'definition'
});

exports.Prisma.TabelaRelatorioEstatisticaScalarFieldEnum = makeEnum({
  Id: 'Id',
  Data: 'Data',
  Ano: 'Ano',
  Mes: 'Mes',
  SubordinadaAtual: 'SubordinadaAtual',
  VariacaoAtual: 'VariacaoAtual',
  PDD_Pl: 'PDD_Pl',
  TabelaRecompra: 'TabelaRecompra',
  Cvnp: 'Cvnp',
  CincoCedentes: 'CincoCedentes',
  CincoSacados: 'CincoSacados',
  VinteCedentes: 'VinteCedentes',
  VinteSacados: 'VinteSacados'
});

exports.Prisma.TaxaDIDiariaScalarFieldEnum = makeEnum({
  Id: 'Id',
  Data: 'Data',
  Taxa: 'Taxa'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.UserPermissionScalarFieldEnum = makeEnum({
  Id: 'Id',
  UserId: 'UserId',
  SubRoleClaimId: 'SubRoleClaimId'
});

exports.Prisma.UserRolesScalarFieldEnum = makeEnum({
  Id: 'Id',
  UserId: 'UserId',
  RoleId: 'RoleId'
});

exports.Prisma.UserTypeScalarFieldEnum = makeEnum({
  Id: 'Id',
  Code: 'Code',
  Type: 'Type'
});

exports.Prisma.UsersMetaScalarFieldEnum = makeEnum({
  id: 'id',
  idUser: 'idUser',
  meta: 'meta'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  Id: 'Id',
  Login: 'Login',
  Password: 'Password',
  Name: 'Name',
  Email: 'Email',
  CPF: 'CPF',
  UserType: 'UserType',
  CompanyId: 'CompanyId',
  IdAssist: 'IdAssist',
  IdSup: 'IdSup',
  numeroPropostas: 'numeroPropostas',
  codwba: 'codwba',
  AtualizacaoSenha: 'AtualizacaoSenha'
});

exports.Prisma.UsuarioPortalInvestidorScalarFieldEnum = makeEnum({
  Id: 'Id',
  Name: 'Name',
  UserLogin: 'UserLogin',
  Email: 'Email',
  Password: 'Password',
  IdRole: 'IdRole',
  PrimeiroAcesso: 'PrimeiroAcesso',
  UltimaEntrada: 'UltimaEntrada',
  UltimaSaida: 'UltimaSaida'
});


exports.Prisma.ModelName = makeEnum({
  EFMigrationsHistory: 'EFMigrationsHistory',
  CadCreditProposaIindebtedness: 'CadCreditProposaIindebtedness',
  CadCreditProposalBacen: 'CadCreditProposalBacen',
  CadCreditProposalIndebtednessList: 'CadCreditProposalIndebtednessList',
  CadCreditProposalRestrition: 'CadCreditProposalRestrition',
  CadCreditProposalShareholdingCompositionMainAdministrator: 'CadCreditProposalShareholdingCompositionMainAdministrator',
  CadCreditProposalShareholdingCompositionPartner: 'CadCreditProposalShareholdingCompositionPartner',
  CadCreditProposalShareholdingCompositionRelatedCompanies: 'CadCreditProposalShareholdingCompositionRelatedCompanies',
  CadCreditProposalSummary: 'CadCreditProposalSummary',
  Caixa: 'Caixa',
  CanhotoTituloSeguroCredito: 'CanhotoTituloSeguroCredito',
  Cedente: 'Cedente',
  CedentePontuacao: 'CedentePontuacao',
  Claim: 'Claim',
  Company: 'Company',
  ConsultaCTE: 'ConsultaCTE',
  CreditProposaIindebtedness: 'CreditProposaIindebtedness',
  CreditProposal: 'CreditProposal',
  CreditProposalAnexo: 'CreditProposalAnexo',
  CreditProposalBilling: 'CreditProposalBilling',
  CreditProposalBillingMonth: 'CreditProposalBillingMonth',
  CreditProposalIndebtednessList: 'CreditProposalIndebtednessList',
  CreditProposalMsg: 'CreditProposalMsg',
  CreditProposalOperatingCycle: 'CreditProposalOperatingCycle',
  CreditProposalOperatingCycleCompetitors: 'CreditProposalOperatingCycleCompetitors',
  CreditProposalOperatingCycleCustomers: 'CreditProposalOperatingCycleCustomers',
  CreditProposalOperatingCycleExport: 'CreditProposalOperatingCycleExport',
  CreditProposalOperatingCycleImport: 'CreditProposalOperatingCycleImport',
  CreditProposalOperatingCycleProduction: 'CreditProposalOperatingCycleProduction',
  CreditProposalOperatingCycleSuppliers: 'CreditProposalOperatingCycleSuppliers',
  CreditProposalShareholdingCompositionMainAdministrator: 'CreditProposalShareholdingCompositionMainAdministrator',
  CreditProposalShareholdingCompositionPartner: 'CreditProposalShareholdingCompositionPartner',
  CreditProposalShareholdingCompositionRelatedCompanies: 'CreditProposalShareholdingCompositionRelatedCompanies',
  CreditProposalSummary: 'CreditProposalSummary',
  EmailTemplates: 'EmailTemplates',
  EnviosMensais: 'EnviosMensais',
  Escrow: 'Escrow',
  EstruturaComercial: 'EstruturaComercial',
  EventLog: 'EventLog',
  FIDC_Diario: 'FIDC_Diario',
  FIDC_Diario_Falcon: 'FIDC_Diario_Falcon',
  FIDC_Diario_Senior: 'FIDC_Diario_Senior',
  File: 'File',
  FileCategory: 'FileCategory',
  GrupoEconomico: 'GrupoEconomico',
  HistoricoAcessoPortalInvestidor: 'HistoricoAcessoPortalInvestidor',
  ItemsAnexoLTDA: 'ItemsAnexoLTDA',
  ItemsAnexosSA: 'ItemsAnexosSA',
  LancamentoLivelo: 'LancamentoLivelo',
  MaioresCedentes: 'MaioresCedentes',
  MaioresSacados: 'MaioresSacados',
  MovimentacaoDaProposta: 'MovimentacaoDaProposta',
  Overdue: 'Overdue',
  OverdueClient: 'OverdueClient',
  OverdueClientDetail: 'OverdueClientDetail',
  OverdueParecerComercial: 'OverdueParecerComercial',
  ParametroRelatoUsuario: 'ParametroRelatoUsuario',
  Parametros: 'Parametros',
  PlanilhaAdministradora: 'PlanilhaAdministradora',
  PlanilhaRecompra: 'PlanilhaRecompra',
  PropostaCreditoFluxo: 'PropostaCreditoFluxo',
  Recados: 'Recados',
  RelatoSegmento: 'RelatoSegmento',
  RelatoSegmentoLinha: 'RelatoSegmentoLinha',
  Role: 'Role',
  RolePortalInvestidor: 'RolePortalInvestidor',
  Roles: 'Roles',
  SeguroCreditoDiario: 'SeguroCreditoDiario',
  SerproHistoryReturn: 'SerproHistoryReturn',
  StatisticsData: 'StatisticsData',
  StatisticsHistory: 'StatisticsHistory',
  StatusStatisticsHistory: 'StatusStatisticsHistory',
  SubRole: 'SubRole',
  SubRoleClaim: 'SubRoleClaim',
  sysdiagrams: 'sysdiagrams',
  TabelaRelatorioEstatistica: 'TabelaRelatorioEstatistica',
  TaxaDIDiaria: 'TaxaDIDiaria',
  UserPermission: 'UserPermission',
  UserRoles: 'UserRoles',
  Users: 'Users',
  UsersMeta: 'UsersMeta',
  UserType: 'UserType',
  UsuarioPortalInvestidor: 'UsuarioPortalInvestidor'
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

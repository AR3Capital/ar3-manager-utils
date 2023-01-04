
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model ProviderAdresses
 * 
 */
export type ProviderAdresses = {
  city: string
  complement: string
  country: string
  default: Prisma.JsonValue
  federativeUnit: string
  mailingAddress: Prisma.JsonValue
  neighborhood: string
  number: string
  referencePoint: string
  street: string
  type: string
  zipCode: string
}

/**
 * Model ProviderClientReminderConfigsServicesList
 * 
 */
export type ProviderClientReminderConfigsServicesList = {
  idService: string
  nameService: string
  price: string
}

/**
 * Model ProviderClientReminderConfigsTotalReminders
 * 
 */
export type ProviderClientReminderConfigsTotalReminders = {
  generated: string
  sended: string
}

/**
 * Model ProviderClientRemindersClient
 * 
 */
export type ProviderClientRemindersClient = {
  email: string
  id: string
  name: string
  whatsapp: string
}

/**
 * Model ProviderClientRemindersDateTimeSend
 * 
 */
export type ProviderClientRemindersDateTimeSend = {
  firstAttempt: string
  secondAttempt: string
  thirdAttempt: string
}

/**
 * Model ProviderClientRemindersProvider
 * 
 */
export type ProviderClientRemindersProvider = {
  contact: string
  id: string
  name: string
}

/**
 * Model ProviderContacts
 * 
 */
export type ProviderContacts = {
  content: string
  default: Prisma.JsonValue
  type: string
}

/**
 * Model ProviderDockOnboardingRequiredData
 * 
 */
export type ProviderDockOnboardingRequiredData = {
  address: string
  birthDate: string
  companyName: string
  deviceIdentification: string
  document: string
  dueDate: string
  fatherName: string
  federativeUnit: string
  gender: string
  idBusinessSource: string
  idNationality: string
  idNumber: string
  idProduct: string
  idProfession: string
  identityIssuingEntity: string
  incomeValue: string
  isPep: string
  isPepSince: string
  issuingDateIdentity: string
  motherName: string
  name: string
  phone: string
  printedName: string
  termsAndConditionsTokens: string
}

/**
 * Model ProviderLegalPerson
 * 
 */
export type ProviderLegalPerson = {
  CNPJ: string
  companyName: string
  others: ProviderLegalPersonOthers
  tradingName: string
}

/**
 * Model ProviderLegalPersonOthers
 * 
 */
export type ProviderLegalPersonOthers = {
  etc: string | null
  legalStatus: string
  openingCompany: string
}

/**
 * Model ProviderPhysicalPerson
 * 
 */
export type ProviderPhysicalPerson = {
  CPF: string
  fullName: string
  others: ProviderPhysicalPersonOthers
}

/**
 * Model ProviderPhysicalPersonOthers
 * 
 */
export type ProviderPhysicalPersonOthers = {
  birthDate: string
  etc: string | null
  fatherName: string | null
  gender: string
  motherName: string | null
}

/**
 * Model TypesAddress
 * 
 */
export type TypesAddress = {
  code: string
  name: string
}

/**
 * Model TypesContact
 * 
 */
export type TypesContact = {
  code: string
  name: string
}

/**
 * Model TypesOrderStatus
 * 
 */
export type TypesOrderStatus = {
  code: string
  name: string
}

/**
 * Model TypesTipoQuePrecisar
 * 
 */
export type TypesTipoQuePrecisar = {
  code: string
  name: string
}

/**
 * Model UserAccessMethods
 * 
 */
export type UserAccessMethods = {
  campo: string | null
  id: string | null
  password: string | null
  type: string
}

/**
 * Model Provider
 * 
 */
export type Provider = {
  id: string
  adresses: ProviderAdresses[]
  contacts: ProviderContacts[]
  hasOnboarding: boolean
  legalPerson: ProviderLegalPerson | null
  physicalPerson: ProviderPhysicalPerson | null
}

/**
 * Model ProviderClientReminderConfigs
 * 
 */
export type ProviderClientReminderConfigs = {
  id: string
  amountSessions: string
  clientId: string
  dateTimeEnd: string
  dateTimeStart: string
  isTotalPriceCustom: string
  occurrenceType: string
  providerId: string
  reminderStatus: string
  servicesList: ProviderClientReminderConfigsServicesList[]
  totalPrice: string
  totalPricePayed: string
  totalReminders: ProviderClientReminderConfigsTotalReminders
}

/**
 * Model ProviderClientReminderOrder
 * 
 */
export type ProviderClientReminderOrder = {
  id: string
  amount: string
  amountPayed: string
  clientId: string
  dueDate: string
  generateDate: string
  paymentDate: string
  providerClientReminderId: string
  providerId: string
  statusType: string
}

/**
 * Model ProviderClientReminders
 * 
 */
export type ProviderClientReminders = {
  id: string
  client: ProviderClientRemindersClient
  dateTimeSend: ProviderClientRemindersDateTimeSend
  provider: ProviderClientRemindersProvider
  providerClientOrder: string
  providerClientReminderConfigId: string
}

/**
 * Model ProviderClients
 * 
 */
export type ProviderClients = {
  id: string
  CNPJ: string
  CPF: string
  cellphone: string
  email: string
  isWhatsapp: string
  name: string
  providerId: string
}

/**
 * Model ProviderDock
 * 
 */
export type ProviderDock = {
  id: string
  accountId: string
  onboardingRequiredData: ProviderDockOnboardingRequiredData
  peopleId: string
  providerId: string
  registrationId: string
  statusSPD: string
}

/**
 * Model ProviderServices
 * 
 */
export type ProviderServices = {
  id: string
  name: string
  price: number
  priceType: string
  providerId: string
}

/**
 * Model Types
 * 
 */
export type Types = {
  id: string
  Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: string | null
  Tipo_que_precisar: TypesTipoQuePrecisar[]
  address: TypesAddress[]
  contact: TypesContact[]
  orderStatus: TypesOrderStatus[]
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  accessMethods: UserAccessMethods[]
  providerId: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Providers
 * const providers = await prisma.provider.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Providers
   * const providers = await prisma.provider.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number}): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<GlobalReject>;

  /**
   * `prisma.providerClientReminderConfigs`: Exposes CRUD operations for the **ProviderClientReminderConfigs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderClientReminderConfigs
    * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findMany()
    * ```
    */
  get providerClientReminderConfigs(): Prisma.ProviderClientReminderConfigsDelegate<GlobalReject>;

  /**
   * `prisma.providerClientReminderOrder`: Exposes CRUD operations for the **ProviderClientReminderOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderClientReminderOrders
    * const providerClientReminderOrders = await prisma.providerClientReminderOrder.findMany()
    * ```
    */
  get providerClientReminderOrder(): Prisma.ProviderClientReminderOrderDelegate<GlobalReject>;

  /**
   * `prisma.providerClientReminders`: Exposes CRUD operations for the **ProviderClientReminders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderClientReminders
    * const providerClientReminders = await prisma.providerClientReminders.findMany()
    * ```
    */
  get providerClientReminders(): Prisma.ProviderClientRemindersDelegate<GlobalReject>;

  /**
   * `prisma.providerClients`: Exposes CRUD operations for the **ProviderClients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderClients
    * const providerClients = await prisma.providerClients.findMany()
    * ```
    */
  get providerClients(): Prisma.ProviderClientsDelegate<GlobalReject>;

  /**
   * `prisma.providerDock`: Exposes CRUD operations for the **ProviderDock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderDocks
    * const providerDocks = await prisma.providerDock.findMany()
    * ```
    */
  get providerDock(): Prisma.ProviderDockDelegate<GlobalReject>;

  /**
   * `prisma.providerServices`: Exposes CRUD operations for the **ProviderServices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderServices
    * const providerServices = await prisma.providerServices.findMany()
    * ```
    */
  get providerServices(): Prisma.ProviderServicesDelegate<GlobalReject>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **Types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.TypesDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.7.1
   * Query Engine version: 272861e07ab64f234d3ffc4094e32bd61775599c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Provider: 'Provider',
    ProviderClientReminderConfigs: 'ProviderClientReminderConfigs',
    ProviderClientReminderOrder: 'ProviderClientReminderOrder',
    ProviderClientReminders: 'ProviderClientReminders',
    ProviderClients: 'ProviderClients',
    ProviderDock: 'ProviderDock',
    ProviderServices: 'ProviderServices',
    Types: 'Types',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ProviderAdresses
   */





  export type ProviderAdressesSelect = {
    city?: boolean
    complement?: boolean
    country?: boolean
    default?: boolean
    federativeUnit?: boolean
    mailingAddress?: boolean
    neighborhood?: boolean
    number?: boolean
    referencePoint?: boolean
    street?: boolean
    type?: boolean
    zipCode?: boolean
  }


  export type ProviderAdressesGetPayload<S extends boolean | null | undefined | ProviderAdressesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderAdresses :
    S extends undefined ? never :
    S extends { include: any } & (ProviderAdressesArgs)
    ? ProviderAdresses 
    : S extends { select: any } & (ProviderAdressesArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderAdresses ? ProviderAdresses[P] : never
  } 
      : ProviderAdresses



  export interface ProviderAdressesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderAdresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderAdressesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderAdresses without action
   */
  export type ProviderAdressesArgs = {
    /**
     * Select specific fields to fetch from the ProviderAdresses
     * 
    **/
    select?: ProviderAdressesSelect | null
  }



  /**
   * Model ProviderClientReminderConfigsServicesList
   */





  export type ProviderClientReminderConfigsServicesListSelect = {
    idService?: boolean
    nameService?: boolean
    price?: boolean
  }


  export type ProviderClientReminderConfigsServicesListGetPayload<S extends boolean | null | undefined | ProviderClientReminderConfigsServicesListArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientReminderConfigsServicesList :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientReminderConfigsServicesListArgs)
    ? ProviderClientReminderConfigsServicesList 
    : S extends { select: any } & (ProviderClientReminderConfigsServicesListArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientReminderConfigsServicesList ? ProviderClientReminderConfigsServicesList[P] : never
  } 
      : ProviderClientReminderConfigsServicesList



  export interface ProviderClientReminderConfigsServicesListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientReminderConfigsServicesList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientReminderConfigsServicesListClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientReminderConfigsServicesList without action
   */
  export type ProviderClientReminderConfigsServicesListArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigsServicesList
     * 
    **/
    select?: ProviderClientReminderConfigsServicesListSelect | null
  }



  /**
   * Model ProviderClientReminderConfigsTotalReminders
   */





  export type ProviderClientReminderConfigsTotalRemindersSelect = {
    generated?: boolean
    sended?: boolean
  }


  export type ProviderClientReminderConfigsTotalRemindersGetPayload<S extends boolean | null | undefined | ProviderClientReminderConfigsTotalRemindersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientReminderConfigsTotalReminders :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientReminderConfigsTotalRemindersArgs)
    ? ProviderClientReminderConfigsTotalReminders 
    : S extends { select: any } & (ProviderClientReminderConfigsTotalRemindersArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientReminderConfigsTotalReminders ? ProviderClientReminderConfigsTotalReminders[P] : never
  } 
      : ProviderClientReminderConfigsTotalReminders



  export interface ProviderClientReminderConfigsTotalRemindersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientReminderConfigsTotalReminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientReminderConfigsTotalRemindersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientReminderConfigsTotalReminders without action
   */
  export type ProviderClientReminderConfigsTotalRemindersArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigsTotalReminders
     * 
    **/
    select?: ProviderClientReminderConfigsTotalRemindersSelect | null
  }



  /**
   * Model ProviderClientRemindersClient
   */





  export type ProviderClientRemindersClientSelect = {
    email?: boolean
    id?: boolean
    name?: boolean
    whatsapp?: boolean
  }


  export type ProviderClientRemindersClientGetPayload<S extends boolean | null | undefined | ProviderClientRemindersClientArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientRemindersClient :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientRemindersClientArgs)
    ? ProviderClientRemindersClient 
    : S extends { select: any } & (ProviderClientRemindersClientArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientRemindersClient ? ProviderClientRemindersClient[P] : never
  } 
      : ProviderClientRemindersClient



  export interface ProviderClientRemindersClientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientRemindersClient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientRemindersClientClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientRemindersClient without action
   */
  export type ProviderClientRemindersClientArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientRemindersClient
     * 
    **/
    select?: ProviderClientRemindersClientSelect | null
  }



  /**
   * Model ProviderClientRemindersDateTimeSend
   */





  export type ProviderClientRemindersDateTimeSendSelect = {
    firstAttempt?: boolean
    secondAttempt?: boolean
    thirdAttempt?: boolean
  }


  export type ProviderClientRemindersDateTimeSendGetPayload<S extends boolean | null | undefined | ProviderClientRemindersDateTimeSendArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientRemindersDateTimeSend :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientRemindersDateTimeSendArgs)
    ? ProviderClientRemindersDateTimeSend 
    : S extends { select: any } & (ProviderClientRemindersDateTimeSendArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientRemindersDateTimeSend ? ProviderClientRemindersDateTimeSend[P] : never
  } 
      : ProviderClientRemindersDateTimeSend



  export interface ProviderClientRemindersDateTimeSendDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientRemindersDateTimeSend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientRemindersDateTimeSendClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientRemindersDateTimeSend without action
   */
  export type ProviderClientRemindersDateTimeSendArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientRemindersDateTimeSend
     * 
    **/
    select?: ProviderClientRemindersDateTimeSendSelect | null
  }



  /**
   * Model ProviderClientRemindersProvider
   */





  export type ProviderClientRemindersProviderSelect = {
    contact?: boolean
    id?: boolean
    name?: boolean
  }


  export type ProviderClientRemindersProviderGetPayload<S extends boolean | null | undefined | ProviderClientRemindersProviderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientRemindersProvider :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientRemindersProviderArgs)
    ? ProviderClientRemindersProvider 
    : S extends { select: any } & (ProviderClientRemindersProviderArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientRemindersProvider ? ProviderClientRemindersProvider[P] : never
  } 
      : ProviderClientRemindersProvider



  export interface ProviderClientRemindersProviderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientRemindersProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientRemindersProviderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientRemindersProvider without action
   */
  export type ProviderClientRemindersProviderArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientRemindersProvider
     * 
    **/
    select?: ProviderClientRemindersProviderSelect | null
  }



  /**
   * Model ProviderContacts
   */





  export type ProviderContactsSelect = {
    content?: boolean
    default?: boolean
    type?: boolean
  }


  export type ProviderContactsGetPayload<S extends boolean | null | undefined | ProviderContactsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderContacts :
    S extends undefined ? never :
    S extends { include: any } & (ProviderContactsArgs)
    ? ProviderContacts 
    : S extends { select: any } & (ProviderContactsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderContacts ? ProviderContacts[P] : never
  } 
      : ProviderContacts



  export interface ProviderContactsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderContacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderContactsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderContacts without action
   */
  export type ProviderContactsArgs = {
    /**
     * Select specific fields to fetch from the ProviderContacts
     * 
    **/
    select?: ProviderContactsSelect | null
  }



  /**
   * Model ProviderDockOnboardingRequiredData
   */





  export type ProviderDockOnboardingRequiredDataSelect = {
    address?: boolean
    birthDate?: boolean
    companyName?: boolean
    deviceIdentification?: boolean
    document?: boolean
    dueDate?: boolean
    fatherName?: boolean
    federativeUnit?: boolean
    gender?: boolean
    idBusinessSource?: boolean
    idNationality?: boolean
    idNumber?: boolean
    idProduct?: boolean
    idProfession?: boolean
    identityIssuingEntity?: boolean
    incomeValue?: boolean
    isPep?: boolean
    isPepSince?: boolean
    issuingDateIdentity?: boolean
    motherName?: boolean
    name?: boolean
    phone?: boolean
    printedName?: boolean
    termsAndConditionsTokens?: boolean
  }


  export type ProviderDockOnboardingRequiredDataGetPayload<S extends boolean | null | undefined | ProviderDockOnboardingRequiredDataArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderDockOnboardingRequiredData :
    S extends undefined ? never :
    S extends { include: any } & (ProviderDockOnboardingRequiredDataArgs)
    ? ProviderDockOnboardingRequiredData 
    : S extends { select: any } & (ProviderDockOnboardingRequiredDataArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderDockOnboardingRequiredData ? ProviderDockOnboardingRequiredData[P] : never
  } 
      : ProviderDockOnboardingRequiredData



  export interface ProviderDockOnboardingRequiredDataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderDockOnboardingRequiredData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderDockOnboardingRequiredDataClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderDockOnboardingRequiredData without action
   */
  export type ProviderDockOnboardingRequiredDataArgs = {
    /**
     * Select specific fields to fetch from the ProviderDockOnboardingRequiredData
     * 
    **/
    select?: ProviderDockOnboardingRequiredDataSelect | null
  }



  /**
   * Model ProviderLegalPerson
   */





  export type ProviderLegalPersonSelect = {
    CNPJ?: boolean
    companyName?: boolean
    others?: boolean | ProviderLegalPersonOthersArgs
    tradingName?: boolean
  }


  export type ProviderLegalPersonInclude = {

  } 

  export type ProviderLegalPersonGetPayload<S extends boolean | null | undefined | ProviderLegalPersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderLegalPerson :
    S extends undefined ? never :
    S extends { include: any } & (ProviderLegalPersonArgs)
    ? ProviderLegalPerson 
    : S extends { select: any } & (ProviderLegalPersonArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'others' ? ProviderLegalPersonOthersGetPayload<S['select'][P]> :  P extends keyof ProviderLegalPerson ? ProviderLegalPerson[P] : never
  } 
      : ProviderLegalPerson



  export interface ProviderLegalPersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderLegalPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderLegalPersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    others<T extends ProviderLegalPersonOthersArgs= {}>(args?: Subset<T, ProviderLegalPersonOthersArgs>): Prisma__ProviderLegalPersonOthersClient<ProviderLegalPersonOthersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderLegalPerson without action
   */
  export type ProviderLegalPersonArgs = {
    /**
     * Select specific fields to fetch from the ProviderLegalPerson
     * 
    **/
    select?: ProviderLegalPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderLegalPersonInclude | null
  }



  /**
   * Model ProviderLegalPersonOthers
   */





  export type ProviderLegalPersonOthersSelect = {
    etc?: boolean
    legalStatus?: boolean
    openingCompany?: boolean
  }


  export type ProviderLegalPersonOthersGetPayload<S extends boolean | null | undefined | ProviderLegalPersonOthersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderLegalPersonOthers :
    S extends undefined ? never :
    S extends { include: any } & (ProviderLegalPersonOthersArgs)
    ? ProviderLegalPersonOthers 
    : S extends { select: any } & (ProviderLegalPersonOthersArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderLegalPersonOthers ? ProviderLegalPersonOthers[P] : never
  } 
      : ProviderLegalPersonOthers



  export interface ProviderLegalPersonOthersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderLegalPersonOthers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderLegalPersonOthersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderLegalPersonOthers without action
   */
  export type ProviderLegalPersonOthersArgs = {
    /**
     * Select specific fields to fetch from the ProviderLegalPersonOthers
     * 
    **/
    select?: ProviderLegalPersonOthersSelect | null
  }



  /**
   * Model ProviderPhysicalPerson
   */





  export type ProviderPhysicalPersonSelect = {
    CPF?: boolean
    fullName?: boolean
    others?: boolean | ProviderPhysicalPersonOthersArgs
  }


  export type ProviderPhysicalPersonInclude = {

  } 

  export type ProviderPhysicalPersonGetPayload<S extends boolean | null | undefined | ProviderPhysicalPersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderPhysicalPerson :
    S extends undefined ? never :
    S extends { include: any } & (ProviderPhysicalPersonArgs)
    ? ProviderPhysicalPerson 
    : S extends { select: any } & (ProviderPhysicalPersonArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'others' ? ProviderPhysicalPersonOthersGetPayload<S['select'][P]> :  P extends keyof ProviderPhysicalPerson ? ProviderPhysicalPerson[P] : never
  } 
      : ProviderPhysicalPerson



  export interface ProviderPhysicalPersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderPhysicalPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderPhysicalPersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    others<T extends ProviderPhysicalPersonOthersArgs= {}>(args?: Subset<T, ProviderPhysicalPersonOthersArgs>): Prisma__ProviderPhysicalPersonOthersClient<ProviderPhysicalPersonOthersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderPhysicalPerson without action
   */
  export type ProviderPhysicalPersonArgs = {
    /**
     * Select specific fields to fetch from the ProviderPhysicalPerson
     * 
    **/
    select?: ProviderPhysicalPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderPhysicalPersonInclude | null
  }



  /**
   * Model ProviderPhysicalPersonOthers
   */





  export type ProviderPhysicalPersonOthersSelect = {
    birthDate?: boolean
    etc?: boolean
    fatherName?: boolean
    gender?: boolean
    motherName?: boolean
  }


  export type ProviderPhysicalPersonOthersGetPayload<S extends boolean | null | undefined | ProviderPhysicalPersonOthersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderPhysicalPersonOthers :
    S extends undefined ? never :
    S extends { include: any } & (ProviderPhysicalPersonOthersArgs)
    ? ProviderPhysicalPersonOthers 
    : S extends { select: any } & (ProviderPhysicalPersonOthersArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderPhysicalPersonOthers ? ProviderPhysicalPersonOthers[P] : never
  } 
      : ProviderPhysicalPersonOthers



  export interface ProviderPhysicalPersonOthersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderPhysicalPersonOthers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderPhysicalPersonOthersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderPhysicalPersonOthers without action
   */
  export type ProviderPhysicalPersonOthersArgs = {
    /**
     * Select specific fields to fetch from the ProviderPhysicalPersonOthers
     * 
    **/
    select?: ProviderPhysicalPersonOthersSelect | null
  }



  /**
   * Model TypesAddress
   */





  export type TypesAddressSelect = {
    code?: boolean
    name?: boolean
  }


  export type TypesAddressGetPayload<S extends boolean | null | undefined | TypesAddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TypesAddress :
    S extends undefined ? never :
    S extends { include: any } & (TypesAddressArgs)
    ? TypesAddress 
    : S extends { select: any } & (TypesAddressArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TypesAddress ? TypesAddress[P] : never
  } 
      : TypesAddress



  export interface TypesAddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for TypesAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypesAddressClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TypesAddress without action
   */
  export type TypesAddressArgs = {
    /**
     * Select specific fields to fetch from the TypesAddress
     * 
    **/
    select?: TypesAddressSelect | null
  }



  /**
   * Model TypesContact
   */





  export type TypesContactSelect = {
    code?: boolean
    name?: boolean
  }


  export type TypesContactGetPayload<S extends boolean | null | undefined | TypesContactArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TypesContact :
    S extends undefined ? never :
    S extends { include: any } & (TypesContactArgs)
    ? TypesContact 
    : S extends { select: any } & (TypesContactArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TypesContact ? TypesContact[P] : never
  } 
      : TypesContact



  export interface TypesContactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for TypesContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypesContactClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TypesContact without action
   */
  export type TypesContactArgs = {
    /**
     * Select specific fields to fetch from the TypesContact
     * 
    **/
    select?: TypesContactSelect | null
  }



  /**
   * Model TypesOrderStatus
   */





  export type TypesOrderStatusSelect = {
    code?: boolean
    name?: boolean
  }


  export type TypesOrderStatusGetPayload<S extends boolean | null | undefined | TypesOrderStatusArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TypesOrderStatus :
    S extends undefined ? never :
    S extends { include: any } & (TypesOrderStatusArgs)
    ? TypesOrderStatus 
    : S extends { select: any } & (TypesOrderStatusArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TypesOrderStatus ? TypesOrderStatus[P] : never
  } 
      : TypesOrderStatus



  export interface TypesOrderStatusDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for TypesOrderStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypesOrderStatusClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TypesOrderStatus without action
   */
  export type TypesOrderStatusArgs = {
    /**
     * Select specific fields to fetch from the TypesOrderStatus
     * 
    **/
    select?: TypesOrderStatusSelect | null
  }



  /**
   * Model TypesTipoQuePrecisar
   */





  export type TypesTipoQuePrecisarSelect = {
    code?: boolean
    name?: boolean
  }


  export type TypesTipoQuePrecisarGetPayload<S extends boolean | null | undefined | TypesTipoQuePrecisarArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TypesTipoQuePrecisar :
    S extends undefined ? never :
    S extends { include: any } & (TypesTipoQuePrecisarArgs)
    ? TypesTipoQuePrecisar 
    : S extends { select: any } & (TypesTipoQuePrecisarArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TypesTipoQuePrecisar ? TypesTipoQuePrecisar[P] : never
  } 
      : TypesTipoQuePrecisar



  export interface TypesTipoQuePrecisarDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for TypesTipoQuePrecisar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypesTipoQuePrecisarClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TypesTipoQuePrecisar without action
   */
  export type TypesTipoQuePrecisarArgs = {
    /**
     * Select specific fields to fetch from the TypesTipoQuePrecisar
     * 
    **/
    select?: TypesTipoQuePrecisarSelect | null
  }



  /**
   * Model UserAccessMethods
   */





  export type UserAccessMethodsSelect = {
    campo?: boolean
    id?: boolean
    password?: boolean
    type?: boolean
  }


  export type UserAccessMethodsGetPayload<S extends boolean | null | undefined | UserAccessMethodsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserAccessMethods :
    S extends undefined ? never :
    S extends { include: any } & (UserAccessMethodsArgs)
    ? UserAccessMethods 
    : S extends { select: any } & (UserAccessMethodsArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserAccessMethods ? UserAccessMethods[P] : never
  } 
      : UserAccessMethods



  export interface UserAccessMethodsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAccessMethods.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserAccessMethodsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserAccessMethods without action
   */
  export type UserAccessMethodsArgs = {
    /**
     * Select specific fields to fetch from the UserAccessMethods
     * 
    **/
    select?: UserAccessMethodsSelect | null
  }



  /**
   * Model Provider
   */


  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    hasOnboarding: boolean | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    hasOnboarding: boolean | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    hasOnboarding: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    hasOnboarding?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    hasOnboarding?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    hasOnboarding?: true
    _all?: true
  }

  export type ProviderAggregateArgs = {
    /**
     * Filter which Provider to aggregate.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs = {
    where?: ProviderWhereInput
    orderBy?: Enumerable<ProviderOrderByWithAggregationInput>
    by: Array<ProviderScalarFieldEnum>
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }


  export type ProviderGroupByOutputType = {
    id: string
    hasOnboarding: boolean
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect = {
    id?: boolean
    adresses?: boolean | ProviderAdressesArgs
    contacts?: boolean | ProviderContactsArgs
    hasOnboarding?: boolean
    legalPerson?: boolean | ProviderLegalPersonArgs
    physicalPerson?: boolean | ProviderPhysicalPersonArgs
  }


  export type ProviderInclude = {

  } 

  export type ProviderGetPayload<S extends boolean | null | undefined | ProviderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Provider :
    S extends undefined ? never :
    S extends { include: any } & (ProviderArgs | ProviderFindManyArgs)
    ? Provider 
    : S extends { select: any } & (ProviderArgs | ProviderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'adresses' ? Array < ProviderAdressesGetPayload<S['select'][P]>>  :
        P extends 'contacts' ? Array < ProviderContactsGetPayload<S['select'][P]>>  :
        P extends 'legalPerson' ? ProviderLegalPersonGetPayload<S['select'][P]> | null :
        P extends 'physicalPerson' ? ProviderPhysicalPersonGetPayload<S['select'][P]> | null :  P extends keyof Provider ? Provider[P] : never
  } 
      : Provider


  type ProviderCountArgs = Merge<
    Omit<ProviderFindManyArgs, 'select' | 'include'> & {
      select?: ProviderCountAggregateInputType | true
    }
  >

  export interface ProviderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Provider'> extends True ? Prisma__ProviderClient<ProviderGetPayload<T>> : Prisma__ProviderClient<ProviderGetPayload<T> | null, null>

    /**
     * Find one Provider that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderFindUniqueOrThrowArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Provider'> extends True ? Prisma__ProviderClient<ProviderGetPayload<T>> : Prisma__ProviderClient<ProviderGetPayload<T> | null, null>

    /**
     * Find the first Provider that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderFindFirstOrThrowArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderFindManyArgs>(
      args?: SelectSubset<T, ProviderFindManyArgs>
    ): PrismaPromise<Array<ProviderGetPayload<T>>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
    **/
    create<T extends ProviderCreateArgs>(
      args: SelectSubset<T, ProviderCreateArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Create many Providers.
     *     @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     *     @example
     *     // Create many Providers
     *     const provider = await prisma.provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderCreateManyArgs>(
      args?: SelectSubset<T, ProviderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
    **/
    delete<T extends ProviderDeleteArgs>(
      args: SelectSubset<T, ProviderDeleteArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderUpdateArgs>(
      args: SelectSubset<T, ProviderUpdateArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderDeleteManyArgs>(
      args?: SelectSubset<T, ProviderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderUpdateManyArgs>(
      args: SelectSubset<T, ProviderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderUpsertArgs>(
      args: SelectSubset<T, ProviderUpsertArgs>
    ): Prisma__ProviderClient<ProviderGetPayload<T>>

    /**
     * Find zero or more Providers that matches the filter.
     * @param {ProviderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const provider = await prisma.provider.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Provider.
     * @param {ProviderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const provider = await prisma.provider.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    adresses<T extends ProviderAdressesArgs= {}>(args?: Subset<T, ProviderAdressesArgs>): PrismaPromise<Array<ProviderAdressesGetPayload<T>>| Null>;

    contacts<T extends ProviderContactsArgs= {}>(args?: Subset<T, ProviderContactsArgs>): PrismaPromise<Array<ProviderContactsGetPayload<T>>| Null>;

    legalPerson<T extends ProviderLegalPersonArgs= {}>(args?: Subset<T, ProviderLegalPersonArgs>): Prisma__ProviderLegalPersonClient<ProviderLegalPersonGetPayload<T> | Null>;

    physicalPerson<T extends ProviderPhysicalPersonArgs= {}>(args?: Subset<T, ProviderPhysicalPersonArgs>): Prisma__ProviderPhysicalPersonClient<ProviderPhysicalPersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Provider base type for findUnique actions
   */
  export type ProviderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider: findUnique
   */
  export interface ProviderFindUniqueArgs extends ProviderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider base type for findFirst actions
   */
  export type ProviderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     * 
    **/
    distinct?: Enumerable<ProviderScalarFieldEnum>
  }

  /**
   * Provider: findFirst
   */
  export interface ProviderFindFirstArgs extends ProviderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Provider to fetch.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     * 
    **/
    distinct?: Enumerable<ProviderScalarFieldEnum>
  }


  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter, which Providers to fetch.
     * 
    **/
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     * 
    **/
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderScalarFieldEnum>
  }


  /**
   * Provider create
   */
  export type ProviderCreateArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The data needed to create a Provider.
     * 
    **/
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }


  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs = {
    /**
     * The data used to create many Providers.
     * 
    **/
    data: Enumerable<ProviderCreateManyInput>
  }


  /**
   * Provider update
   */
  export type ProviderUpdateArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The data needed to update a Provider.
     * 
    **/
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs = {
    /**
     * The data used to update Providers.
     * 
    **/
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     * 
    **/
    where?: ProviderWhereInput
  }


  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * The filter to search for the Provider to update in case it exists.
     * 
    **/
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     * 
    **/
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }


  /**
   * Provider delete
   */
  export type ProviderDeleteArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
    /**
     * Filter which Provider to delete.
     * 
    **/
    where: ProviderWhereUniqueInput
  }


  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs = {
    /**
     * Filter which Providers to delete
     * 
    **/
    where?: ProviderWhereInput
  }


  /**
   * Provider findRaw
   */
  export type ProviderFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Provider aggregateRaw
   */
  export type ProviderAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Provider without action
   */
  export type ProviderArgs = {
    /**
     * Select specific fields to fetch from the Provider
     * 
    **/
    select?: ProviderSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderInclude | null
  }



  /**
   * Model ProviderClientReminderConfigs
   */


  export type AggregateProviderClientReminderConfigs = {
    _count: ProviderClientReminderConfigsCountAggregateOutputType | null
    _min: ProviderClientReminderConfigsMinAggregateOutputType | null
    _max: ProviderClientReminderConfigsMaxAggregateOutputType | null
  }

  export type ProviderClientReminderConfigsMinAggregateOutputType = {
    id: string | null
    amountSessions: string | null
    clientId: string | null
    dateTimeEnd: string | null
    dateTimeStart: string | null
    isTotalPriceCustom: string | null
    occurrenceType: string | null
    providerId: string | null
    reminderStatus: string | null
    totalPrice: string | null
    totalPricePayed: string | null
  }

  export type ProviderClientReminderConfigsMaxAggregateOutputType = {
    id: string | null
    amountSessions: string | null
    clientId: string | null
    dateTimeEnd: string | null
    dateTimeStart: string | null
    isTotalPriceCustom: string | null
    occurrenceType: string | null
    providerId: string | null
    reminderStatus: string | null
    totalPrice: string | null
    totalPricePayed: string | null
  }

  export type ProviderClientReminderConfigsCountAggregateOutputType = {
    id: number
    amountSessions: number
    clientId: number
    dateTimeEnd: number
    dateTimeStart: number
    isTotalPriceCustom: number
    occurrenceType: number
    providerId: number
    reminderStatus: number
    totalPrice: number
    totalPricePayed: number
    _all: number
  }


  export type ProviderClientReminderConfigsMinAggregateInputType = {
    id?: true
    amountSessions?: true
    clientId?: true
    dateTimeEnd?: true
    dateTimeStart?: true
    isTotalPriceCustom?: true
    occurrenceType?: true
    providerId?: true
    reminderStatus?: true
    totalPrice?: true
    totalPricePayed?: true
  }

  export type ProviderClientReminderConfigsMaxAggregateInputType = {
    id?: true
    amountSessions?: true
    clientId?: true
    dateTimeEnd?: true
    dateTimeStart?: true
    isTotalPriceCustom?: true
    occurrenceType?: true
    providerId?: true
    reminderStatus?: true
    totalPrice?: true
    totalPricePayed?: true
  }

  export type ProviderClientReminderConfigsCountAggregateInputType = {
    id?: true
    amountSessions?: true
    clientId?: true
    dateTimeEnd?: true
    dateTimeStart?: true
    isTotalPriceCustom?: true
    occurrenceType?: true
    providerId?: true
    reminderStatus?: true
    totalPrice?: true
    totalPricePayed?: true
    _all?: true
  }

  export type ProviderClientReminderConfigsAggregateArgs = {
    /**
     * Filter which ProviderClientReminderConfigs to aggregate.
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderConfigs to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderConfigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderClientReminderConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderConfigs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderConfigs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderClientReminderConfigs
    **/
    _count?: true | ProviderClientReminderConfigsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderClientReminderConfigsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderClientReminderConfigsMaxAggregateInputType
  }

  export type GetProviderClientReminderConfigsAggregateType<T extends ProviderClientReminderConfigsAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderClientReminderConfigs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderClientReminderConfigs[P]>
      : GetScalarType<T[P], AggregateProviderClientReminderConfigs[P]>
  }




  export type ProviderClientReminderConfigsGroupByArgs = {
    where?: ProviderClientReminderConfigsWhereInput
    orderBy?: Enumerable<ProviderClientReminderConfigsOrderByWithAggregationInput>
    by: Array<ProviderClientReminderConfigsScalarFieldEnum>
    having?: ProviderClientReminderConfigsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderClientReminderConfigsCountAggregateInputType | true
    _min?: ProviderClientReminderConfigsMinAggregateInputType
    _max?: ProviderClientReminderConfigsMaxAggregateInputType
  }


  export type ProviderClientReminderConfigsGroupByOutputType = {
    id: string
    amountSessions: string
    clientId: string
    dateTimeEnd: string
    dateTimeStart: string
    isTotalPriceCustom: string
    occurrenceType: string
    providerId: string
    reminderStatus: string
    totalPrice: string
    totalPricePayed: string
    _count: ProviderClientReminderConfigsCountAggregateOutputType | null
    _min: ProviderClientReminderConfigsMinAggregateOutputType | null
    _max: ProviderClientReminderConfigsMaxAggregateOutputType | null
  }

  type GetProviderClientReminderConfigsGroupByPayload<T extends ProviderClientReminderConfigsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderClientReminderConfigsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderClientReminderConfigsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderClientReminderConfigsGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderClientReminderConfigsGroupByOutputType[P]>
        }
      >
    >


  export type ProviderClientReminderConfigsSelect = {
    id?: boolean
    amountSessions?: boolean
    clientId?: boolean
    dateTimeEnd?: boolean
    dateTimeStart?: boolean
    isTotalPriceCustom?: boolean
    occurrenceType?: boolean
    providerId?: boolean
    reminderStatus?: boolean
    servicesList?: boolean | ProviderClientReminderConfigsServicesListArgs
    totalPrice?: boolean
    totalPricePayed?: boolean
    totalReminders?: boolean | ProviderClientReminderConfigsTotalRemindersArgs
  }


  export type ProviderClientReminderConfigsInclude = {

  } 

  export type ProviderClientReminderConfigsGetPayload<S extends boolean | null | undefined | ProviderClientReminderConfigsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientReminderConfigs :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientReminderConfigsArgs | ProviderClientReminderConfigsFindManyArgs)
    ? ProviderClientReminderConfigs 
    : S extends { select: any } & (ProviderClientReminderConfigsArgs | ProviderClientReminderConfigsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'servicesList' ? Array < ProviderClientReminderConfigsServicesListGetPayload<S['select'][P]>>  :
        P extends 'totalReminders' ? ProviderClientReminderConfigsTotalRemindersGetPayload<S['select'][P]> :  P extends keyof ProviderClientReminderConfigs ? ProviderClientReminderConfigs[P] : never
  } 
      : ProviderClientReminderConfigs


  type ProviderClientReminderConfigsCountArgs = Merge<
    Omit<ProviderClientReminderConfigsFindManyArgs, 'select' | 'include'> & {
      select?: ProviderClientReminderConfigsCountAggregateInputType | true
    }
  >

  export interface ProviderClientReminderConfigsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderClientReminderConfigs that matches the filter.
     * @param {ProviderClientReminderConfigsFindUniqueArgs} args - Arguments to find a ProviderClientReminderConfigs
     * @example
     * // Get one ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderClientReminderConfigsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderClientReminderConfigsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderClientReminderConfigs'> extends True ? Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>> : Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T> | null, null>

    /**
     * Find one ProviderClientReminderConfigs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderClientReminderConfigsFindUniqueOrThrowArgs} args - Arguments to find a ProviderClientReminderConfigs
     * @example
     * // Get one ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderClientReminderConfigsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientReminderConfigsFindUniqueOrThrowArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Find the first ProviderClientReminderConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsFindFirstArgs} args - Arguments to find a ProviderClientReminderConfigs
     * @example
     * // Get one ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderClientReminderConfigsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderClientReminderConfigsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderClientReminderConfigs'> extends True ? Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>> : Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T> | null, null>

    /**
     * Find the first ProviderClientReminderConfigs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsFindFirstOrThrowArgs} args - Arguments to find a ProviderClientReminderConfigs
     * @example
     * // Get one ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderClientReminderConfigsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientReminderConfigsFindFirstOrThrowArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminderConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findMany()
     * 
     * // Get first 10 ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerClientReminderConfigsWithIdOnly = await prisma.providerClientReminderConfigs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderClientReminderConfigsFindManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderConfigsFindManyArgs>
    ): PrismaPromise<Array<ProviderClientReminderConfigsGetPayload<T>>>

    /**
     * Create a ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsCreateArgs} args - Arguments to create a ProviderClientReminderConfigs.
     * @example
     * // Create one ProviderClientReminderConfigs
     * const ProviderClientReminderConfigs = await prisma.providerClientReminderConfigs.create({
     *   data: {
     *     // ... data to create a ProviderClientReminderConfigs
     *   }
     * })
     * 
    **/
    create<T extends ProviderClientReminderConfigsCreateArgs>(
      args: SelectSubset<T, ProviderClientReminderConfigsCreateArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Create many ProviderClientReminderConfigs.
     *     @param {ProviderClientReminderConfigsCreateManyArgs} args - Arguments to create many ProviderClientReminderConfigs.
     *     @example
     *     // Create many ProviderClientReminderConfigs
     *     const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderClientReminderConfigsCreateManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderConfigsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsDeleteArgs} args - Arguments to delete one ProviderClientReminderConfigs.
     * @example
     * // Delete one ProviderClientReminderConfigs
     * const ProviderClientReminderConfigs = await prisma.providerClientReminderConfigs.delete({
     *   where: {
     *     // ... filter to delete one ProviderClientReminderConfigs
     *   }
     * })
     * 
    **/
    delete<T extends ProviderClientReminderConfigsDeleteArgs>(
      args: SelectSubset<T, ProviderClientReminderConfigsDeleteArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Update one ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsUpdateArgs} args - Arguments to update one ProviderClientReminderConfigs.
     * @example
     * // Update one ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderClientReminderConfigsUpdateArgs>(
      args: SelectSubset<T, ProviderClientReminderConfigsUpdateArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Delete zero or more ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsDeleteManyArgs} args - Arguments to filter ProviderClientReminderConfigs to delete.
     * @example
     * // Delete a few ProviderClientReminderConfigs
     * const { count } = await prisma.providerClientReminderConfigs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderClientReminderConfigsDeleteManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderConfigsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderClientReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderClientReminderConfigsUpdateManyArgs>(
      args: SelectSubset<T, ProviderClientReminderConfigsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsUpsertArgs} args - Arguments to update or create a ProviderClientReminderConfigs.
     * @example
     * // Update or create a ProviderClientReminderConfigs
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.upsert({
     *   create: {
     *     // ... data to create a ProviderClientReminderConfigs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderClientReminderConfigs we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderClientReminderConfigsUpsertArgs>(
      args: SelectSubset<T, ProviderClientReminderConfigsUpsertArgs>
    ): Prisma__ProviderClientReminderConfigsClient<ProviderClientReminderConfigsGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminderConfigs that matches the filter.
     * @param {ProviderClientReminderConfigsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderClientReminderConfigsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderClientReminderConfigs.
     * @param {ProviderClientReminderConfigsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerClientReminderConfigs = await prisma.providerClientReminderConfigs.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderClientReminderConfigsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderClientReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsCountArgs} args - Arguments to filter ProviderClientReminderConfigs to count.
     * @example
     * // Count the number of ProviderClientReminderConfigs
     * const count = await prisma.providerClientReminderConfigs.count({
     *   where: {
     *     // ... the filter for the ProviderClientReminderConfigs we want to count
     *   }
     * })
    **/
    count<T extends ProviderClientReminderConfigsCountArgs>(
      args?: Subset<T, ProviderClientReminderConfigsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderClientReminderConfigsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderClientReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderClientReminderConfigsAggregateArgs>(args: Subset<T, ProviderClientReminderConfigsAggregateArgs>): PrismaPromise<GetProviderClientReminderConfigsAggregateType<T>>

    /**
     * Group by ProviderClientReminderConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderConfigsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderClientReminderConfigsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderClientReminderConfigsGroupByArgs['orderBy'] }
        : { orderBy?: ProviderClientReminderConfigsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderClientReminderConfigsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderClientReminderConfigsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientReminderConfigs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientReminderConfigsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    servicesList<T extends ProviderClientReminderConfigsServicesListArgs= {}>(args?: Subset<T, ProviderClientReminderConfigsServicesListArgs>): PrismaPromise<Array<ProviderClientReminderConfigsServicesListGetPayload<T>>| Null>;

    totalReminders<T extends ProviderClientReminderConfigsTotalRemindersArgs= {}>(args?: Subset<T, ProviderClientReminderConfigsTotalRemindersArgs>): Prisma__ProviderClientReminderConfigsTotalRemindersClient<ProviderClientReminderConfigsTotalRemindersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientReminderConfigs base type for findUnique actions
   */
  export type ProviderClientReminderConfigsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter, which ProviderClientReminderConfigs to fetch.
     * 
    **/
    where: ProviderClientReminderConfigsWhereUniqueInput
  }

  /**
   * ProviderClientReminderConfigs: findUnique
   */
  export interface ProviderClientReminderConfigsFindUniqueArgs extends ProviderClientReminderConfigsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminderConfigs findUniqueOrThrow
   */
  export type ProviderClientReminderConfigsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter, which ProviderClientReminderConfigs to fetch.
     * 
    **/
    where: ProviderClientReminderConfigsWhereUniqueInput
  }


  /**
   * ProviderClientReminderConfigs base type for findFirst actions
   */
  export type ProviderClientReminderConfigsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter, which ProviderClientReminderConfigs to fetch.
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderConfigs to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderConfigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminderConfigs.
     * 
    **/
    cursor?: ProviderClientReminderConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderConfigs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderConfigs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminderConfigs.
     * 
    **/
    distinct?: Enumerable<ProviderClientReminderConfigsScalarFieldEnum>
  }

  /**
   * ProviderClientReminderConfigs: findFirst
   */
  export interface ProviderClientReminderConfigsFindFirstArgs extends ProviderClientReminderConfigsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminderConfigs findFirstOrThrow
   */
  export type ProviderClientReminderConfigsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter, which ProviderClientReminderConfigs to fetch.
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderConfigs to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderConfigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminderConfigs.
     * 
    **/
    cursor?: ProviderClientReminderConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderConfigs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderConfigs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminderConfigs.
     * 
    **/
    distinct?: Enumerable<ProviderClientReminderConfigsScalarFieldEnum>
  }


  /**
   * ProviderClientReminderConfigs findMany
   */
  export type ProviderClientReminderConfigsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter, which ProviderClientReminderConfigs to fetch.
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderConfigs to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderConfigsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderClientReminderConfigs.
     * 
    **/
    cursor?: ProviderClientReminderConfigsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderConfigs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderConfigs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderClientReminderConfigsScalarFieldEnum>
  }


  /**
   * ProviderClientReminderConfigs create
   */
  export type ProviderClientReminderConfigsCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * The data needed to create a ProviderClientReminderConfigs.
     * 
    **/
    data: XOR<ProviderClientReminderConfigsCreateInput, ProviderClientReminderConfigsUncheckedCreateInput>
  }


  /**
   * ProviderClientReminderConfigs createMany
   */
  export type ProviderClientReminderConfigsCreateManyArgs = {
    /**
     * The data used to create many ProviderClientReminderConfigs.
     * 
    **/
    data: Enumerable<ProviderClientReminderConfigsCreateManyInput>
  }


  /**
   * ProviderClientReminderConfigs update
   */
  export type ProviderClientReminderConfigsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * The data needed to update a ProviderClientReminderConfigs.
     * 
    **/
    data: XOR<ProviderClientReminderConfigsUpdateInput, ProviderClientReminderConfigsUncheckedUpdateInput>
    /**
     * Choose, which ProviderClientReminderConfigs to update.
     * 
    **/
    where: ProviderClientReminderConfigsWhereUniqueInput
  }


  /**
   * ProviderClientReminderConfigs updateMany
   */
  export type ProviderClientReminderConfigsUpdateManyArgs = {
    /**
     * The data used to update ProviderClientReminderConfigs.
     * 
    **/
    data: XOR<ProviderClientReminderConfigsUpdateManyMutationInput, ProviderClientReminderConfigsUncheckedUpdateManyInput>
    /**
     * Filter which ProviderClientReminderConfigs to update
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
  }


  /**
   * ProviderClientReminderConfigs upsert
   */
  export type ProviderClientReminderConfigsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * The filter to search for the ProviderClientReminderConfigs to update in case it exists.
     * 
    **/
    where: ProviderClientReminderConfigsWhereUniqueInput
    /**
     * In case the ProviderClientReminderConfigs found by the `where` argument doesn't exist, create a new ProviderClientReminderConfigs with this data.
     * 
    **/
    create: XOR<ProviderClientReminderConfigsCreateInput, ProviderClientReminderConfigsUncheckedCreateInput>
    /**
     * In case the ProviderClientReminderConfigs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderClientReminderConfigsUpdateInput, ProviderClientReminderConfigsUncheckedUpdateInput>
  }


  /**
   * ProviderClientReminderConfigs delete
   */
  export type ProviderClientReminderConfigsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
    /**
     * Filter which ProviderClientReminderConfigs to delete.
     * 
    **/
    where: ProviderClientReminderConfigsWhereUniqueInput
  }


  /**
   * ProviderClientReminderConfigs deleteMany
   */
  export type ProviderClientReminderConfigsDeleteManyArgs = {
    /**
     * Filter which ProviderClientReminderConfigs to delete
     * 
    **/
    where?: ProviderClientReminderConfigsWhereInput
  }


  /**
   * ProviderClientReminderConfigs findRaw
   */
  export type ProviderClientReminderConfigsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminderConfigs aggregateRaw
   */
  export type ProviderClientReminderConfigsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminderConfigs without action
   */
  export type ProviderClientReminderConfigsArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderConfigs
     * 
    **/
    select?: ProviderClientReminderConfigsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientReminderConfigsInclude | null
  }



  /**
   * Model ProviderClientReminderOrder
   */


  export type AggregateProviderClientReminderOrder = {
    _count: ProviderClientReminderOrderCountAggregateOutputType | null
    _min: ProviderClientReminderOrderMinAggregateOutputType | null
    _max: ProviderClientReminderOrderMaxAggregateOutputType | null
  }

  export type ProviderClientReminderOrderMinAggregateOutputType = {
    id: string | null
    amount: string | null
    amountPayed: string | null
    clientId: string | null
    dueDate: string | null
    generateDate: string | null
    paymentDate: string | null
    providerClientReminderId: string | null
    providerId: string | null
    statusType: string | null
  }

  export type ProviderClientReminderOrderMaxAggregateOutputType = {
    id: string | null
    amount: string | null
    amountPayed: string | null
    clientId: string | null
    dueDate: string | null
    generateDate: string | null
    paymentDate: string | null
    providerClientReminderId: string | null
    providerId: string | null
    statusType: string | null
  }

  export type ProviderClientReminderOrderCountAggregateOutputType = {
    id: number
    amount: number
    amountPayed: number
    clientId: number
    dueDate: number
    generateDate: number
    paymentDate: number
    providerClientReminderId: number
    providerId: number
    statusType: number
    _all: number
  }


  export type ProviderClientReminderOrderMinAggregateInputType = {
    id?: true
    amount?: true
    amountPayed?: true
    clientId?: true
    dueDate?: true
    generateDate?: true
    paymentDate?: true
    providerClientReminderId?: true
    providerId?: true
    statusType?: true
  }

  export type ProviderClientReminderOrderMaxAggregateInputType = {
    id?: true
    amount?: true
    amountPayed?: true
    clientId?: true
    dueDate?: true
    generateDate?: true
    paymentDate?: true
    providerClientReminderId?: true
    providerId?: true
    statusType?: true
  }

  export type ProviderClientReminderOrderCountAggregateInputType = {
    id?: true
    amount?: true
    amountPayed?: true
    clientId?: true
    dueDate?: true
    generateDate?: true
    paymentDate?: true
    providerClientReminderId?: true
    providerId?: true
    statusType?: true
    _all?: true
  }

  export type ProviderClientReminderOrderAggregateArgs = {
    /**
     * Filter which ProviderClientReminderOrder to aggregate.
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderOrders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderClientReminderOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderOrders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderOrders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderClientReminderOrders
    **/
    _count?: true | ProviderClientReminderOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderClientReminderOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderClientReminderOrderMaxAggregateInputType
  }

  export type GetProviderClientReminderOrderAggregateType<T extends ProviderClientReminderOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderClientReminderOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderClientReminderOrder[P]>
      : GetScalarType<T[P], AggregateProviderClientReminderOrder[P]>
  }




  export type ProviderClientReminderOrderGroupByArgs = {
    where?: ProviderClientReminderOrderWhereInput
    orderBy?: Enumerable<ProviderClientReminderOrderOrderByWithAggregationInput>
    by: Array<ProviderClientReminderOrderScalarFieldEnum>
    having?: ProviderClientReminderOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderClientReminderOrderCountAggregateInputType | true
    _min?: ProviderClientReminderOrderMinAggregateInputType
    _max?: ProviderClientReminderOrderMaxAggregateInputType
  }


  export type ProviderClientReminderOrderGroupByOutputType = {
    id: string
    amount: string
    amountPayed: string
    clientId: string
    dueDate: string
    generateDate: string
    paymentDate: string
    providerClientReminderId: string
    providerId: string
    statusType: string
    _count: ProviderClientReminderOrderCountAggregateOutputType | null
    _min: ProviderClientReminderOrderMinAggregateOutputType | null
    _max: ProviderClientReminderOrderMaxAggregateOutputType | null
  }

  type GetProviderClientReminderOrderGroupByPayload<T extends ProviderClientReminderOrderGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderClientReminderOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderClientReminderOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderClientReminderOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderClientReminderOrderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderClientReminderOrderSelect = {
    id?: boolean
    amount?: boolean
    amountPayed?: boolean
    clientId?: boolean
    dueDate?: boolean
    generateDate?: boolean
    paymentDate?: boolean
    providerClientReminderId?: boolean
    providerId?: boolean
    statusType?: boolean
  }


  export type ProviderClientReminderOrderGetPayload<S extends boolean | null | undefined | ProviderClientReminderOrderArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientReminderOrder :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientReminderOrderArgs | ProviderClientReminderOrderFindManyArgs)
    ? ProviderClientReminderOrder 
    : S extends { select: any } & (ProviderClientReminderOrderArgs | ProviderClientReminderOrderFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClientReminderOrder ? ProviderClientReminderOrder[P] : never
  } 
      : ProviderClientReminderOrder


  type ProviderClientReminderOrderCountArgs = Merge<
    Omit<ProviderClientReminderOrderFindManyArgs, 'select' | 'include'> & {
      select?: ProviderClientReminderOrderCountAggregateInputType | true
    }
  >

  export interface ProviderClientReminderOrderDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderClientReminderOrder that matches the filter.
     * @param {ProviderClientReminderOrderFindUniqueArgs} args - Arguments to find a ProviderClientReminderOrder
     * @example
     * // Get one ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderClientReminderOrderFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderClientReminderOrderFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderClientReminderOrder'> extends True ? Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>> : Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T> | null, null>

    /**
     * Find one ProviderClientReminderOrder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderClientReminderOrderFindUniqueOrThrowArgs} args - Arguments to find a ProviderClientReminderOrder
     * @example
     * // Get one ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderClientReminderOrderFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientReminderOrderFindUniqueOrThrowArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Find the first ProviderClientReminderOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderFindFirstArgs} args - Arguments to find a ProviderClientReminderOrder
     * @example
     * // Get one ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderClientReminderOrderFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderClientReminderOrderFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderClientReminderOrder'> extends True ? Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>> : Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T> | null, null>

    /**
     * Find the first ProviderClientReminderOrder that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderFindFirstOrThrowArgs} args - Arguments to find a ProviderClientReminderOrder
     * @example
     * // Get one ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderClientReminderOrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientReminderOrderFindFirstOrThrowArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminderOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderClientReminderOrders
     * const providerClientReminderOrders = await prisma.providerClientReminderOrder.findMany()
     * 
     * // Get first 10 ProviderClientReminderOrders
     * const providerClientReminderOrders = await prisma.providerClientReminderOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerClientReminderOrderWithIdOnly = await prisma.providerClientReminderOrder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderClientReminderOrderFindManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderOrderFindManyArgs>
    ): PrismaPromise<Array<ProviderClientReminderOrderGetPayload<T>>>

    /**
     * Create a ProviderClientReminderOrder.
     * @param {ProviderClientReminderOrderCreateArgs} args - Arguments to create a ProviderClientReminderOrder.
     * @example
     * // Create one ProviderClientReminderOrder
     * const ProviderClientReminderOrder = await prisma.providerClientReminderOrder.create({
     *   data: {
     *     // ... data to create a ProviderClientReminderOrder
     *   }
     * })
     * 
    **/
    create<T extends ProviderClientReminderOrderCreateArgs>(
      args: SelectSubset<T, ProviderClientReminderOrderCreateArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Create many ProviderClientReminderOrders.
     *     @param {ProviderClientReminderOrderCreateManyArgs} args - Arguments to create many ProviderClientReminderOrders.
     *     @example
     *     // Create many ProviderClientReminderOrders
     *     const providerClientReminderOrder = await prisma.providerClientReminderOrder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderClientReminderOrderCreateManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderOrderCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderClientReminderOrder.
     * @param {ProviderClientReminderOrderDeleteArgs} args - Arguments to delete one ProviderClientReminderOrder.
     * @example
     * // Delete one ProviderClientReminderOrder
     * const ProviderClientReminderOrder = await prisma.providerClientReminderOrder.delete({
     *   where: {
     *     // ... filter to delete one ProviderClientReminderOrder
     *   }
     * })
     * 
    **/
    delete<T extends ProviderClientReminderOrderDeleteArgs>(
      args: SelectSubset<T, ProviderClientReminderOrderDeleteArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Update one ProviderClientReminderOrder.
     * @param {ProviderClientReminderOrderUpdateArgs} args - Arguments to update one ProviderClientReminderOrder.
     * @example
     * // Update one ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderClientReminderOrderUpdateArgs>(
      args: SelectSubset<T, ProviderClientReminderOrderUpdateArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Delete zero or more ProviderClientReminderOrders.
     * @param {ProviderClientReminderOrderDeleteManyArgs} args - Arguments to filter ProviderClientReminderOrders to delete.
     * @example
     * // Delete a few ProviderClientReminderOrders
     * const { count } = await prisma.providerClientReminderOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderClientReminderOrderDeleteManyArgs>(
      args?: SelectSubset<T, ProviderClientReminderOrderDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderClientReminderOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderClientReminderOrders
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderClientReminderOrderUpdateManyArgs>(
      args: SelectSubset<T, ProviderClientReminderOrderUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderClientReminderOrder.
     * @param {ProviderClientReminderOrderUpsertArgs} args - Arguments to update or create a ProviderClientReminderOrder.
     * @example
     * // Update or create a ProviderClientReminderOrder
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.upsert({
     *   create: {
     *     // ... data to create a ProviderClientReminderOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderClientReminderOrder we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderClientReminderOrderUpsertArgs>(
      args: SelectSubset<T, ProviderClientReminderOrderUpsertArgs>
    ): Prisma__ProviderClientReminderOrderClient<ProviderClientReminderOrderGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminderOrders that matches the filter.
     * @param {ProviderClientReminderOrderFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderClientReminderOrderFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderClientReminderOrder.
     * @param {ProviderClientReminderOrderAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerClientReminderOrder = await prisma.providerClientReminderOrder.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderClientReminderOrderAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderClientReminderOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderCountArgs} args - Arguments to filter ProviderClientReminderOrders to count.
     * @example
     * // Count the number of ProviderClientReminderOrders
     * const count = await prisma.providerClientReminderOrder.count({
     *   where: {
     *     // ... the filter for the ProviderClientReminderOrders we want to count
     *   }
     * })
    **/
    count<T extends ProviderClientReminderOrderCountArgs>(
      args?: Subset<T, ProviderClientReminderOrderCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderClientReminderOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderClientReminderOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderClientReminderOrderAggregateArgs>(args: Subset<T, ProviderClientReminderOrderAggregateArgs>): PrismaPromise<GetProviderClientReminderOrderAggregateType<T>>

    /**
     * Group by ProviderClientReminderOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientReminderOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderClientReminderOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderClientReminderOrderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderClientReminderOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderClientReminderOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderClientReminderOrderGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientReminderOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientReminderOrderClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientReminderOrder base type for findUnique actions
   */
  export type ProviderClientReminderOrderFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter, which ProviderClientReminderOrder to fetch.
     * 
    **/
    where: ProviderClientReminderOrderWhereUniqueInput
  }

  /**
   * ProviderClientReminderOrder: findUnique
   */
  export interface ProviderClientReminderOrderFindUniqueArgs extends ProviderClientReminderOrderFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminderOrder findUniqueOrThrow
   */
  export type ProviderClientReminderOrderFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter, which ProviderClientReminderOrder to fetch.
     * 
    **/
    where: ProviderClientReminderOrderWhereUniqueInput
  }


  /**
   * ProviderClientReminderOrder base type for findFirst actions
   */
  export type ProviderClientReminderOrderFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter, which ProviderClientReminderOrder to fetch.
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderOrders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminderOrders.
     * 
    **/
    cursor?: ProviderClientReminderOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderOrders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderOrders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminderOrders.
     * 
    **/
    distinct?: Enumerable<ProviderClientReminderOrderScalarFieldEnum>
  }

  /**
   * ProviderClientReminderOrder: findFirst
   */
  export interface ProviderClientReminderOrderFindFirstArgs extends ProviderClientReminderOrderFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminderOrder findFirstOrThrow
   */
  export type ProviderClientReminderOrderFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter, which ProviderClientReminderOrder to fetch.
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderOrders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminderOrders.
     * 
    **/
    cursor?: ProviderClientReminderOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderOrders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderOrders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminderOrders.
     * 
    **/
    distinct?: Enumerable<ProviderClientReminderOrderScalarFieldEnum>
  }


  /**
   * ProviderClientReminderOrder findMany
   */
  export type ProviderClientReminderOrderFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter, which ProviderClientReminderOrders to fetch.
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminderOrders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientReminderOrderOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderClientReminderOrders.
     * 
    **/
    cursor?: ProviderClientReminderOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminderOrders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminderOrders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderClientReminderOrderScalarFieldEnum>
  }


  /**
   * ProviderClientReminderOrder create
   */
  export type ProviderClientReminderOrderCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * The data needed to create a ProviderClientReminderOrder.
     * 
    **/
    data: XOR<ProviderClientReminderOrderCreateInput, ProviderClientReminderOrderUncheckedCreateInput>
  }


  /**
   * ProviderClientReminderOrder createMany
   */
  export type ProviderClientReminderOrderCreateManyArgs = {
    /**
     * The data used to create many ProviderClientReminderOrders.
     * 
    **/
    data: Enumerable<ProviderClientReminderOrderCreateManyInput>
  }


  /**
   * ProviderClientReminderOrder update
   */
  export type ProviderClientReminderOrderUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * The data needed to update a ProviderClientReminderOrder.
     * 
    **/
    data: XOR<ProviderClientReminderOrderUpdateInput, ProviderClientReminderOrderUncheckedUpdateInput>
    /**
     * Choose, which ProviderClientReminderOrder to update.
     * 
    **/
    where: ProviderClientReminderOrderWhereUniqueInput
  }


  /**
   * ProviderClientReminderOrder updateMany
   */
  export type ProviderClientReminderOrderUpdateManyArgs = {
    /**
     * The data used to update ProviderClientReminderOrders.
     * 
    **/
    data: XOR<ProviderClientReminderOrderUpdateManyMutationInput, ProviderClientReminderOrderUncheckedUpdateManyInput>
    /**
     * Filter which ProviderClientReminderOrders to update
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
  }


  /**
   * ProviderClientReminderOrder upsert
   */
  export type ProviderClientReminderOrderUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * The filter to search for the ProviderClientReminderOrder to update in case it exists.
     * 
    **/
    where: ProviderClientReminderOrderWhereUniqueInput
    /**
     * In case the ProviderClientReminderOrder found by the `where` argument doesn't exist, create a new ProviderClientReminderOrder with this data.
     * 
    **/
    create: XOR<ProviderClientReminderOrderCreateInput, ProviderClientReminderOrderUncheckedCreateInput>
    /**
     * In case the ProviderClientReminderOrder was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderClientReminderOrderUpdateInput, ProviderClientReminderOrderUncheckedUpdateInput>
  }


  /**
   * ProviderClientReminderOrder delete
   */
  export type ProviderClientReminderOrderDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
    /**
     * Filter which ProviderClientReminderOrder to delete.
     * 
    **/
    where: ProviderClientReminderOrderWhereUniqueInput
  }


  /**
   * ProviderClientReminderOrder deleteMany
   */
  export type ProviderClientReminderOrderDeleteManyArgs = {
    /**
     * Filter which ProviderClientReminderOrders to delete
     * 
    **/
    where?: ProviderClientReminderOrderWhereInput
  }


  /**
   * ProviderClientReminderOrder findRaw
   */
  export type ProviderClientReminderOrderFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminderOrder aggregateRaw
   */
  export type ProviderClientReminderOrderAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminderOrder without action
   */
  export type ProviderClientReminderOrderArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminderOrder
     * 
    **/
    select?: ProviderClientReminderOrderSelect | null
  }



  /**
   * Model ProviderClientReminders
   */


  export type AggregateProviderClientReminders = {
    _count: ProviderClientRemindersCountAggregateOutputType | null
    _min: ProviderClientRemindersMinAggregateOutputType | null
    _max: ProviderClientRemindersMaxAggregateOutputType | null
  }

  export type ProviderClientRemindersMinAggregateOutputType = {
    id: string | null
    providerClientOrder: string | null
    providerClientReminderConfigId: string | null
  }

  export type ProviderClientRemindersMaxAggregateOutputType = {
    id: string | null
    providerClientOrder: string | null
    providerClientReminderConfigId: string | null
  }

  export type ProviderClientRemindersCountAggregateOutputType = {
    id: number
    providerClientOrder: number
    providerClientReminderConfigId: number
    _all: number
  }


  export type ProviderClientRemindersMinAggregateInputType = {
    id?: true
    providerClientOrder?: true
    providerClientReminderConfigId?: true
  }

  export type ProviderClientRemindersMaxAggregateInputType = {
    id?: true
    providerClientOrder?: true
    providerClientReminderConfigId?: true
  }

  export type ProviderClientRemindersCountAggregateInputType = {
    id?: true
    providerClientOrder?: true
    providerClientReminderConfigId?: true
    _all?: true
  }

  export type ProviderClientRemindersAggregateArgs = {
    /**
     * Filter which ProviderClientReminders to aggregate.
     * 
    **/
    where?: ProviderClientRemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientRemindersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderClientRemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderClientReminders
    **/
    _count?: true | ProviderClientRemindersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderClientRemindersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderClientRemindersMaxAggregateInputType
  }

  export type GetProviderClientRemindersAggregateType<T extends ProviderClientRemindersAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderClientReminders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderClientReminders[P]>
      : GetScalarType<T[P], AggregateProviderClientReminders[P]>
  }




  export type ProviderClientRemindersGroupByArgs = {
    where?: ProviderClientRemindersWhereInput
    orderBy?: Enumerable<ProviderClientRemindersOrderByWithAggregationInput>
    by: Array<ProviderClientRemindersScalarFieldEnum>
    having?: ProviderClientRemindersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderClientRemindersCountAggregateInputType | true
    _min?: ProviderClientRemindersMinAggregateInputType
    _max?: ProviderClientRemindersMaxAggregateInputType
  }


  export type ProviderClientRemindersGroupByOutputType = {
    id: string
    providerClientOrder: string
    providerClientReminderConfigId: string
    _count: ProviderClientRemindersCountAggregateOutputType | null
    _min: ProviderClientRemindersMinAggregateOutputType | null
    _max: ProviderClientRemindersMaxAggregateOutputType | null
  }

  type GetProviderClientRemindersGroupByPayload<T extends ProviderClientRemindersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderClientRemindersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderClientRemindersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderClientRemindersGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderClientRemindersGroupByOutputType[P]>
        }
      >
    >


  export type ProviderClientRemindersSelect = {
    id?: boolean
    client?: boolean | ProviderClientRemindersClientArgs
    dateTimeSend?: boolean | ProviderClientRemindersDateTimeSendArgs
    provider?: boolean | ProviderClientRemindersProviderArgs
    providerClientOrder?: boolean
    providerClientReminderConfigId?: boolean
  }


  export type ProviderClientRemindersInclude = {

  } 

  export type ProviderClientRemindersGetPayload<S extends boolean | null | undefined | ProviderClientRemindersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClientReminders :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientRemindersArgs | ProviderClientRemindersFindManyArgs)
    ? ProviderClientReminders 
    : S extends { select: any } & (ProviderClientRemindersArgs | ProviderClientRemindersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'client' ? ProviderClientRemindersClientGetPayload<S['select'][P]> :
        P extends 'dateTimeSend' ? ProviderClientRemindersDateTimeSendGetPayload<S['select'][P]> :
        P extends 'provider' ? ProviderClientRemindersProviderGetPayload<S['select'][P]> :  P extends keyof ProviderClientReminders ? ProviderClientReminders[P] : never
  } 
      : ProviderClientReminders


  type ProviderClientRemindersCountArgs = Merge<
    Omit<ProviderClientRemindersFindManyArgs, 'select' | 'include'> & {
      select?: ProviderClientRemindersCountAggregateInputType | true
    }
  >

  export interface ProviderClientRemindersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderClientReminders that matches the filter.
     * @param {ProviderClientRemindersFindUniqueArgs} args - Arguments to find a ProviderClientReminders
     * @example
     * // Get one ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderClientRemindersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderClientRemindersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderClientReminders'> extends True ? Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>> : Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T> | null, null>

    /**
     * Find one ProviderClientReminders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderClientRemindersFindUniqueOrThrowArgs} args - Arguments to find a ProviderClientReminders
     * @example
     * // Get one ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderClientRemindersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientRemindersFindUniqueOrThrowArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Find the first ProviderClientReminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersFindFirstArgs} args - Arguments to find a ProviderClientReminders
     * @example
     * // Get one ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderClientRemindersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderClientRemindersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderClientReminders'> extends True ? Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>> : Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T> | null, null>

    /**
     * Find the first ProviderClientReminders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersFindFirstOrThrowArgs} args - Arguments to find a ProviderClientReminders
     * @example
     * // Get one ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderClientRemindersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientRemindersFindFirstOrThrowArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findMany()
     * 
     * // Get first 10 ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerClientRemindersWithIdOnly = await prisma.providerClientReminders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderClientRemindersFindManyArgs>(
      args?: SelectSubset<T, ProviderClientRemindersFindManyArgs>
    ): PrismaPromise<Array<ProviderClientRemindersGetPayload<T>>>

    /**
     * Create a ProviderClientReminders.
     * @param {ProviderClientRemindersCreateArgs} args - Arguments to create a ProviderClientReminders.
     * @example
     * // Create one ProviderClientReminders
     * const ProviderClientReminders = await prisma.providerClientReminders.create({
     *   data: {
     *     // ... data to create a ProviderClientReminders
     *   }
     * })
     * 
    **/
    create<T extends ProviderClientRemindersCreateArgs>(
      args: SelectSubset<T, ProviderClientRemindersCreateArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Create many ProviderClientReminders.
     *     @param {ProviderClientRemindersCreateManyArgs} args - Arguments to create many ProviderClientReminders.
     *     @example
     *     // Create many ProviderClientReminders
     *     const providerClientReminders = await prisma.providerClientReminders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderClientRemindersCreateManyArgs>(
      args?: SelectSubset<T, ProviderClientRemindersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderClientReminders.
     * @param {ProviderClientRemindersDeleteArgs} args - Arguments to delete one ProviderClientReminders.
     * @example
     * // Delete one ProviderClientReminders
     * const ProviderClientReminders = await prisma.providerClientReminders.delete({
     *   where: {
     *     // ... filter to delete one ProviderClientReminders
     *   }
     * })
     * 
    **/
    delete<T extends ProviderClientRemindersDeleteArgs>(
      args: SelectSubset<T, ProviderClientRemindersDeleteArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Update one ProviderClientReminders.
     * @param {ProviderClientRemindersUpdateArgs} args - Arguments to update one ProviderClientReminders.
     * @example
     * // Update one ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderClientRemindersUpdateArgs>(
      args: SelectSubset<T, ProviderClientRemindersUpdateArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Delete zero or more ProviderClientReminders.
     * @param {ProviderClientRemindersDeleteManyArgs} args - Arguments to filter ProviderClientReminders to delete.
     * @example
     * // Delete a few ProviderClientReminders
     * const { count } = await prisma.providerClientReminders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderClientRemindersDeleteManyArgs>(
      args?: SelectSubset<T, ProviderClientRemindersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderClientReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderClientRemindersUpdateManyArgs>(
      args: SelectSubset<T, ProviderClientRemindersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderClientReminders.
     * @param {ProviderClientRemindersUpsertArgs} args - Arguments to update or create a ProviderClientReminders.
     * @example
     * // Update or create a ProviderClientReminders
     * const providerClientReminders = await prisma.providerClientReminders.upsert({
     *   create: {
     *     // ... data to create a ProviderClientReminders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderClientReminders we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderClientRemindersUpsertArgs>(
      args: SelectSubset<T, ProviderClientRemindersUpsertArgs>
    ): Prisma__ProviderClientRemindersClient<ProviderClientRemindersGetPayload<T>>

    /**
     * Find zero or more ProviderClientReminders that matches the filter.
     * @param {ProviderClientRemindersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerClientReminders = await prisma.providerClientReminders.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderClientRemindersFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderClientReminders.
     * @param {ProviderClientRemindersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerClientReminders = await prisma.providerClientReminders.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderClientRemindersAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderClientReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersCountArgs} args - Arguments to filter ProviderClientReminders to count.
     * @example
     * // Count the number of ProviderClientReminders
     * const count = await prisma.providerClientReminders.count({
     *   where: {
     *     // ... the filter for the ProviderClientReminders we want to count
     *   }
     * })
    **/
    count<T extends ProviderClientRemindersCountArgs>(
      args?: Subset<T, ProviderClientRemindersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderClientRemindersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderClientReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderClientRemindersAggregateArgs>(args: Subset<T, ProviderClientRemindersAggregateArgs>): PrismaPromise<GetProviderClientRemindersAggregateType<T>>

    /**
     * Group by ProviderClientReminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientRemindersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderClientRemindersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderClientRemindersGroupByArgs['orderBy'] }
        : { orderBy?: ProviderClientRemindersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderClientRemindersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderClientRemindersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClientReminders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientRemindersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    client<T extends ProviderClientRemindersClientArgs= {}>(args?: Subset<T, ProviderClientRemindersClientArgs>): Prisma__ProviderClientRemindersClientClient<ProviderClientRemindersClientGetPayload<T> | Null>;

    dateTimeSend<T extends ProviderClientRemindersDateTimeSendArgs= {}>(args?: Subset<T, ProviderClientRemindersDateTimeSendArgs>): Prisma__ProviderClientRemindersDateTimeSendClient<ProviderClientRemindersDateTimeSendGetPayload<T> | Null>;

    provider<T extends ProviderClientRemindersProviderArgs= {}>(args?: Subset<T, ProviderClientRemindersProviderArgs>): Prisma__ProviderClientRemindersProviderClient<ProviderClientRemindersProviderGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClientReminders base type for findUnique actions
   */
  export type ProviderClientRemindersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter, which ProviderClientReminders to fetch.
     * 
    **/
    where: ProviderClientRemindersWhereUniqueInput
  }

  /**
   * ProviderClientReminders: findUnique
   */
  export interface ProviderClientRemindersFindUniqueArgs extends ProviderClientRemindersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminders findUniqueOrThrow
   */
  export type ProviderClientRemindersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter, which ProviderClientReminders to fetch.
     * 
    **/
    where: ProviderClientRemindersWhereUniqueInput
  }


  /**
   * ProviderClientReminders base type for findFirst actions
   */
  export type ProviderClientRemindersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter, which ProviderClientReminders to fetch.
     * 
    **/
    where?: ProviderClientRemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientRemindersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminders.
     * 
    **/
    cursor?: ProviderClientRemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminders.
     * 
    **/
    distinct?: Enumerable<ProviderClientRemindersScalarFieldEnum>
  }

  /**
   * ProviderClientReminders: findFirst
   */
  export interface ProviderClientRemindersFindFirstArgs extends ProviderClientRemindersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClientReminders findFirstOrThrow
   */
  export type ProviderClientRemindersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter, which ProviderClientReminders to fetch.
     * 
    **/
    where?: ProviderClientRemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientRemindersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClientReminders.
     * 
    **/
    cursor?: ProviderClientRemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClientReminders.
     * 
    **/
    distinct?: Enumerable<ProviderClientRemindersScalarFieldEnum>
  }


  /**
   * ProviderClientReminders findMany
   */
  export type ProviderClientRemindersFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter, which ProviderClientReminders to fetch.
     * 
    **/
    where?: ProviderClientRemindersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClientReminders to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientRemindersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderClientReminders.
     * 
    **/
    cursor?: ProviderClientRemindersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClientReminders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClientReminders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderClientRemindersScalarFieldEnum>
  }


  /**
   * ProviderClientReminders create
   */
  export type ProviderClientRemindersCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * The data needed to create a ProviderClientReminders.
     * 
    **/
    data: XOR<ProviderClientRemindersCreateInput, ProviderClientRemindersUncheckedCreateInput>
  }


  /**
   * ProviderClientReminders createMany
   */
  export type ProviderClientRemindersCreateManyArgs = {
    /**
     * The data used to create many ProviderClientReminders.
     * 
    **/
    data: Enumerable<ProviderClientRemindersCreateManyInput>
  }


  /**
   * ProviderClientReminders update
   */
  export type ProviderClientRemindersUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * The data needed to update a ProviderClientReminders.
     * 
    **/
    data: XOR<ProviderClientRemindersUpdateInput, ProviderClientRemindersUncheckedUpdateInput>
    /**
     * Choose, which ProviderClientReminders to update.
     * 
    **/
    where: ProviderClientRemindersWhereUniqueInput
  }


  /**
   * ProviderClientReminders updateMany
   */
  export type ProviderClientRemindersUpdateManyArgs = {
    /**
     * The data used to update ProviderClientReminders.
     * 
    **/
    data: XOR<ProviderClientRemindersUpdateManyMutationInput, ProviderClientRemindersUncheckedUpdateManyInput>
    /**
     * Filter which ProviderClientReminders to update
     * 
    **/
    where?: ProviderClientRemindersWhereInput
  }


  /**
   * ProviderClientReminders upsert
   */
  export type ProviderClientRemindersUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * The filter to search for the ProviderClientReminders to update in case it exists.
     * 
    **/
    where: ProviderClientRemindersWhereUniqueInput
    /**
     * In case the ProviderClientReminders found by the `where` argument doesn't exist, create a new ProviderClientReminders with this data.
     * 
    **/
    create: XOR<ProviderClientRemindersCreateInput, ProviderClientRemindersUncheckedCreateInput>
    /**
     * In case the ProviderClientReminders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderClientRemindersUpdateInput, ProviderClientRemindersUncheckedUpdateInput>
  }


  /**
   * ProviderClientReminders delete
   */
  export type ProviderClientRemindersDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
    /**
     * Filter which ProviderClientReminders to delete.
     * 
    **/
    where: ProviderClientRemindersWhereUniqueInput
  }


  /**
   * ProviderClientReminders deleteMany
   */
  export type ProviderClientRemindersDeleteManyArgs = {
    /**
     * Filter which ProviderClientReminders to delete
     * 
    **/
    where?: ProviderClientRemindersWhereInput
  }


  /**
   * ProviderClientReminders findRaw
   */
  export type ProviderClientRemindersFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminders aggregateRaw
   */
  export type ProviderClientRemindersAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClientReminders without action
   */
  export type ProviderClientRemindersArgs = {
    /**
     * Select specific fields to fetch from the ProviderClientReminders
     * 
    **/
    select?: ProviderClientRemindersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderClientRemindersInclude | null
  }



  /**
   * Model ProviderClients
   */


  export type AggregateProviderClients = {
    _count: ProviderClientsCountAggregateOutputType | null
    _min: ProviderClientsMinAggregateOutputType | null
    _max: ProviderClientsMaxAggregateOutputType | null
  }

  export type ProviderClientsMinAggregateOutputType = {
    id: string | null
    CNPJ: string | null
    CPF: string | null
    cellphone: string | null
    email: string | null
    isWhatsapp: string | null
    name: string | null
    providerId: string | null
  }

  export type ProviderClientsMaxAggregateOutputType = {
    id: string | null
    CNPJ: string | null
    CPF: string | null
    cellphone: string | null
    email: string | null
    isWhatsapp: string | null
    name: string | null
    providerId: string | null
  }

  export type ProviderClientsCountAggregateOutputType = {
    id: number
    CNPJ: number
    CPF: number
    cellphone: number
    email: number
    isWhatsapp: number
    name: number
    providerId: number
    _all: number
  }


  export type ProviderClientsMinAggregateInputType = {
    id?: true
    CNPJ?: true
    CPF?: true
    cellphone?: true
    email?: true
    isWhatsapp?: true
    name?: true
    providerId?: true
  }

  export type ProviderClientsMaxAggregateInputType = {
    id?: true
    CNPJ?: true
    CPF?: true
    cellphone?: true
    email?: true
    isWhatsapp?: true
    name?: true
    providerId?: true
  }

  export type ProviderClientsCountAggregateInputType = {
    id?: true
    CNPJ?: true
    CPF?: true
    cellphone?: true
    email?: true
    isWhatsapp?: true
    name?: true
    providerId?: true
    _all?: true
  }

  export type ProviderClientsAggregateArgs = {
    /**
     * Filter which ProviderClients to aggregate.
     * 
    **/
    where?: ProviderClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClients to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderClients
    **/
    _count?: true | ProviderClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderClientsMaxAggregateInputType
  }

  export type GetProviderClientsAggregateType<T extends ProviderClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderClients[P]>
      : GetScalarType<T[P], AggregateProviderClients[P]>
  }




  export type ProviderClientsGroupByArgs = {
    where?: ProviderClientsWhereInput
    orderBy?: Enumerable<ProviderClientsOrderByWithAggregationInput>
    by: Array<ProviderClientsScalarFieldEnum>
    having?: ProviderClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderClientsCountAggregateInputType | true
    _min?: ProviderClientsMinAggregateInputType
    _max?: ProviderClientsMaxAggregateInputType
  }


  export type ProviderClientsGroupByOutputType = {
    id: string
    CNPJ: string
    CPF: string
    cellphone: string
    email: string
    isWhatsapp: string
    name: string
    providerId: string
    _count: ProviderClientsCountAggregateOutputType | null
    _min: ProviderClientsMinAggregateOutputType | null
    _max: ProviderClientsMaxAggregateOutputType | null
  }

  type GetProviderClientsGroupByPayload<T extends ProviderClientsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderClientsGroupByOutputType[P]>
        }
      >
    >


  export type ProviderClientsSelect = {
    id?: boolean
    CNPJ?: boolean
    CPF?: boolean
    cellphone?: boolean
    email?: boolean
    isWhatsapp?: boolean
    name?: boolean
    providerId?: boolean
  }


  export type ProviderClientsGetPayload<S extends boolean | null | undefined | ProviderClientsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderClients :
    S extends undefined ? never :
    S extends { include: any } & (ProviderClientsArgs | ProviderClientsFindManyArgs)
    ? ProviderClients 
    : S extends { select: any } & (ProviderClientsArgs | ProviderClientsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderClients ? ProviderClients[P] : never
  } 
      : ProviderClients


  type ProviderClientsCountArgs = Merge<
    Omit<ProviderClientsFindManyArgs, 'select' | 'include'> & {
      select?: ProviderClientsCountAggregateInputType | true
    }
  >

  export interface ProviderClientsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderClients that matches the filter.
     * @param {ProviderClientsFindUniqueArgs} args - Arguments to find a ProviderClients
     * @example
     * // Get one ProviderClients
     * const providerClients = await prisma.providerClients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderClientsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderClientsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderClients'> extends True ? Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>> : Prisma__ProviderClientsClient<ProviderClientsGetPayload<T> | null, null>

    /**
     * Find one ProviderClients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderClientsFindUniqueOrThrowArgs} args - Arguments to find a ProviderClients
     * @example
     * // Get one ProviderClients
     * const providerClients = await prisma.providerClients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderClientsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientsFindUniqueOrThrowArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Find the first ProviderClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsFindFirstArgs} args - Arguments to find a ProviderClients
     * @example
     * // Get one ProviderClients
     * const providerClients = await prisma.providerClients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderClientsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderClientsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderClients'> extends True ? Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>> : Prisma__ProviderClientsClient<ProviderClientsGetPayload<T> | null, null>

    /**
     * Find the first ProviderClients that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsFindFirstOrThrowArgs} args - Arguments to find a ProviderClients
     * @example
     * // Get one ProviderClients
     * const providerClients = await prisma.providerClients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderClientsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderClientsFindFirstOrThrowArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Find zero or more ProviderClients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderClients
     * const providerClients = await prisma.providerClients.findMany()
     * 
     * // Get first 10 ProviderClients
     * const providerClients = await prisma.providerClients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerClientsWithIdOnly = await prisma.providerClients.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderClientsFindManyArgs>(
      args?: SelectSubset<T, ProviderClientsFindManyArgs>
    ): PrismaPromise<Array<ProviderClientsGetPayload<T>>>

    /**
     * Create a ProviderClients.
     * @param {ProviderClientsCreateArgs} args - Arguments to create a ProviderClients.
     * @example
     * // Create one ProviderClients
     * const ProviderClients = await prisma.providerClients.create({
     *   data: {
     *     // ... data to create a ProviderClients
     *   }
     * })
     * 
    **/
    create<T extends ProviderClientsCreateArgs>(
      args: SelectSubset<T, ProviderClientsCreateArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Create many ProviderClients.
     *     @param {ProviderClientsCreateManyArgs} args - Arguments to create many ProviderClients.
     *     @example
     *     // Create many ProviderClients
     *     const providerClients = await prisma.providerClients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderClientsCreateManyArgs>(
      args?: SelectSubset<T, ProviderClientsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderClients.
     * @param {ProviderClientsDeleteArgs} args - Arguments to delete one ProviderClients.
     * @example
     * // Delete one ProviderClients
     * const ProviderClients = await prisma.providerClients.delete({
     *   where: {
     *     // ... filter to delete one ProviderClients
     *   }
     * })
     * 
    **/
    delete<T extends ProviderClientsDeleteArgs>(
      args: SelectSubset<T, ProviderClientsDeleteArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Update one ProviderClients.
     * @param {ProviderClientsUpdateArgs} args - Arguments to update one ProviderClients.
     * @example
     * // Update one ProviderClients
     * const providerClients = await prisma.providerClients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderClientsUpdateArgs>(
      args: SelectSubset<T, ProviderClientsUpdateArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Delete zero or more ProviderClients.
     * @param {ProviderClientsDeleteManyArgs} args - Arguments to filter ProviderClients to delete.
     * @example
     * // Delete a few ProviderClients
     * const { count } = await prisma.providerClients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderClientsDeleteManyArgs>(
      args?: SelectSubset<T, ProviderClientsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderClients
     * const providerClients = await prisma.providerClients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderClientsUpdateManyArgs>(
      args: SelectSubset<T, ProviderClientsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderClients.
     * @param {ProviderClientsUpsertArgs} args - Arguments to update or create a ProviderClients.
     * @example
     * // Update or create a ProviderClients
     * const providerClients = await prisma.providerClients.upsert({
     *   create: {
     *     // ... data to create a ProviderClients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderClients we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderClientsUpsertArgs>(
      args: SelectSubset<T, ProviderClientsUpsertArgs>
    ): Prisma__ProviderClientsClient<ProviderClientsGetPayload<T>>

    /**
     * Find zero or more ProviderClients that matches the filter.
     * @param {ProviderClientsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerClients = await prisma.providerClients.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderClientsFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderClients.
     * @param {ProviderClientsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerClients = await prisma.providerClients.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderClientsAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsCountArgs} args - Arguments to filter ProviderClients to count.
     * @example
     * // Count the number of ProviderClients
     * const count = await prisma.providerClients.count({
     *   where: {
     *     // ... the filter for the ProviderClients we want to count
     *   }
     * })
    **/
    count<T extends ProviderClientsCountArgs>(
      args?: Subset<T, ProviderClientsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderClientsAggregateArgs>(args: Subset<T, ProviderClientsAggregateArgs>): PrismaPromise<GetProviderClientsAggregateType<T>>

    /**
     * Group by ProviderClients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderClientsGroupByArgs['orderBy'] }
        : { orderBy?: ProviderClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderClientsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderClients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderClientsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderClients base type for findUnique actions
   */
  export type ProviderClientsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter, which ProviderClients to fetch.
     * 
    **/
    where: ProviderClientsWhereUniqueInput
  }

  /**
   * ProviderClients: findUnique
   */
  export interface ProviderClientsFindUniqueArgs extends ProviderClientsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClients findUniqueOrThrow
   */
  export type ProviderClientsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter, which ProviderClients to fetch.
     * 
    **/
    where: ProviderClientsWhereUniqueInput
  }


  /**
   * ProviderClients base type for findFirst actions
   */
  export type ProviderClientsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter, which ProviderClients to fetch.
     * 
    **/
    where?: ProviderClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClients to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClients.
     * 
    **/
    cursor?: ProviderClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClients.
     * 
    **/
    distinct?: Enumerable<ProviderClientsScalarFieldEnum>
  }

  /**
   * ProviderClients: findFirst
   */
  export interface ProviderClientsFindFirstArgs extends ProviderClientsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderClients findFirstOrThrow
   */
  export type ProviderClientsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter, which ProviderClients to fetch.
     * 
    **/
    where?: ProviderClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClients to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderClients.
     * 
    **/
    cursor?: ProviderClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderClients.
     * 
    **/
    distinct?: Enumerable<ProviderClientsScalarFieldEnum>
  }


  /**
   * ProviderClients findMany
   */
  export type ProviderClientsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter, which ProviderClients to fetch.
     * 
    **/
    where?: ProviderClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderClients to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderClientsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderClients.
     * 
    **/
    cursor?: ProviderClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderClients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderClients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderClientsScalarFieldEnum>
  }


  /**
   * ProviderClients create
   */
  export type ProviderClientsCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * The data needed to create a ProviderClients.
     * 
    **/
    data: XOR<ProviderClientsCreateInput, ProviderClientsUncheckedCreateInput>
  }


  /**
   * ProviderClients createMany
   */
  export type ProviderClientsCreateManyArgs = {
    /**
     * The data used to create many ProviderClients.
     * 
    **/
    data: Enumerable<ProviderClientsCreateManyInput>
  }


  /**
   * ProviderClients update
   */
  export type ProviderClientsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * The data needed to update a ProviderClients.
     * 
    **/
    data: XOR<ProviderClientsUpdateInput, ProviderClientsUncheckedUpdateInput>
    /**
     * Choose, which ProviderClients to update.
     * 
    **/
    where: ProviderClientsWhereUniqueInput
  }


  /**
   * ProviderClients updateMany
   */
  export type ProviderClientsUpdateManyArgs = {
    /**
     * The data used to update ProviderClients.
     * 
    **/
    data: XOR<ProviderClientsUpdateManyMutationInput, ProviderClientsUncheckedUpdateManyInput>
    /**
     * Filter which ProviderClients to update
     * 
    **/
    where?: ProviderClientsWhereInput
  }


  /**
   * ProviderClients upsert
   */
  export type ProviderClientsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * The filter to search for the ProviderClients to update in case it exists.
     * 
    **/
    where: ProviderClientsWhereUniqueInput
    /**
     * In case the ProviderClients found by the `where` argument doesn't exist, create a new ProviderClients with this data.
     * 
    **/
    create: XOR<ProviderClientsCreateInput, ProviderClientsUncheckedCreateInput>
    /**
     * In case the ProviderClients was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderClientsUpdateInput, ProviderClientsUncheckedUpdateInput>
  }


  /**
   * ProviderClients delete
   */
  export type ProviderClientsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
    /**
     * Filter which ProviderClients to delete.
     * 
    **/
    where: ProviderClientsWhereUniqueInput
  }


  /**
   * ProviderClients deleteMany
   */
  export type ProviderClientsDeleteManyArgs = {
    /**
     * Filter which ProviderClients to delete
     * 
    **/
    where?: ProviderClientsWhereInput
  }


  /**
   * ProviderClients findRaw
   */
  export type ProviderClientsFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClients aggregateRaw
   */
  export type ProviderClientsAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderClients without action
   */
  export type ProviderClientsArgs = {
    /**
     * Select specific fields to fetch from the ProviderClients
     * 
    **/
    select?: ProviderClientsSelect | null
  }



  /**
   * Model ProviderDock
   */


  export type AggregateProviderDock = {
    _count: ProviderDockCountAggregateOutputType | null
    _min: ProviderDockMinAggregateOutputType | null
    _max: ProviderDockMaxAggregateOutputType | null
  }

  export type ProviderDockMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    peopleId: string | null
    providerId: string | null
    registrationId: string | null
    statusSPD: string | null
  }

  export type ProviderDockMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    peopleId: string | null
    providerId: string | null
    registrationId: string | null
    statusSPD: string | null
  }

  export type ProviderDockCountAggregateOutputType = {
    id: number
    accountId: number
    peopleId: number
    providerId: number
    registrationId: number
    statusSPD: number
    _all: number
  }


  export type ProviderDockMinAggregateInputType = {
    id?: true
    accountId?: true
    peopleId?: true
    providerId?: true
    registrationId?: true
    statusSPD?: true
  }

  export type ProviderDockMaxAggregateInputType = {
    id?: true
    accountId?: true
    peopleId?: true
    providerId?: true
    registrationId?: true
    statusSPD?: true
  }

  export type ProviderDockCountAggregateInputType = {
    id?: true
    accountId?: true
    peopleId?: true
    providerId?: true
    registrationId?: true
    statusSPD?: true
    _all?: true
  }

  export type ProviderDockAggregateArgs = {
    /**
     * Filter which ProviderDock to aggregate.
     * 
    **/
    where?: ProviderDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocks to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderDockOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderDocks
    **/
    _count?: true | ProviderDockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderDockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderDockMaxAggregateInputType
  }

  export type GetProviderDockAggregateType<T extends ProviderDockAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderDock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderDock[P]>
      : GetScalarType<T[P], AggregateProviderDock[P]>
  }




  export type ProviderDockGroupByArgs = {
    where?: ProviderDockWhereInput
    orderBy?: Enumerable<ProviderDockOrderByWithAggregationInput>
    by: Array<ProviderDockScalarFieldEnum>
    having?: ProviderDockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderDockCountAggregateInputType | true
    _min?: ProviderDockMinAggregateInputType
    _max?: ProviderDockMaxAggregateInputType
  }


  export type ProviderDockGroupByOutputType = {
    id: string
    accountId: string
    peopleId: string
    providerId: string
    registrationId: string
    statusSPD: string
    _count: ProviderDockCountAggregateOutputType | null
    _min: ProviderDockMinAggregateOutputType | null
    _max: ProviderDockMaxAggregateOutputType | null
  }

  type GetProviderDockGroupByPayload<T extends ProviderDockGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderDockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderDockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderDockGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderDockGroupByOutputType[P]>
        }
      >
    >


  export type ProviderDockSelect = {
    id?: boolean
    accountId?: boolean
    onboardingRequiredData?: boolean | ProviderDockOnboardingRequiredDataArgs
    peopleId?: boolean
    providerId?: boolean
    registrationId?: boolean
    statusSPD?: boolean
  }


  export type ProviderDockInclude = {

  } 

  export type ProviderDockGetPayload<S extends boolean | null | undefined | ProviderDockArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderDock :
    S extends undefined ? never :
    S extends { include: any } & (ProviderDockArgs | ProviderDockFindManyArgs)
    ? ProviderDock 
    : S extends { select: any } & (ProviderDockArgs | ProviderDockFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'onboardingRequiredData' ? ProviderDockOnboardingRequiredDataGetPayload<S['select'][P]> :  P extends keyof ProviderDock ? ProviderDock[P] : never
  } 
      : ProviderDock


  type ProviderDockCountArgs = Merge<
    Omit<ProviderDockFindManyArgs, 'select' | 'include'> & {
      select?: ProviderDockCountAggregateInputType | true
    }
  >

  export interface ProviderDockDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderDock that matches the filter.
     * @param {ProviderDockFindUniqueArgs} args - Arguments to find a ProviderDock
     * @example
     * // Get one ProviderDock
     * const providerDock = await prisma.providerDock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderDockFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderDockFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderDock'> extends True ? Prisma__ProviderDockClient<ProviderDockGetPayload<T>> : Prisma__ProviderDockClient<ProviderDockGetPayload<T> | null, null>

    /**
     * Find one ProviderDock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderDockFindUniqueOrThrowArgs} args - Arguments to find a ProviderDock
     * @example
     * // Get one ProviderDock
     * const providerDock = await prisma.providerDock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderDockFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderDockFindUniqueOrThrowArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Find the first ProviderDock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockFindFirstArgs} args - Arguments to find a ProviderDock
     * @example
     * // Get one ProviderDock
     * const providerDock = await prisma.providerDock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderDockFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderDockFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderDock'> extends True ? Prisma__ProviderDockClient<ProviderDockGetPayload<T>> : Prisma__ProviderDockClient<ProviderDockGetPayload<T> | null, null>

    /**
     * Find the first ProviderDock that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockFindFirstOrThrowArgs} args - Arguments to find a ProviderDock
     * @example
     * // Get one ProviderDock
     * const providerDock = await prisma.providerDock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderDockFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderDockFindFirstOrThrowArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Find zero or more ProviderDocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderDocks
     * const providerDocks = await prisma.providerDock.findMany()
     * 
     * // Get first 10 ProviderDocks
     * const providerDocks = await prisma.providerDock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerDockWithIdOnly = await prisma.providerDock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderDockFindManyArgs>(
      args?: SelectSubset<T, ProviderDockFindManyArgs>
    ): PrismaPromise<Array<ProviderDockGetPayload<T>>>

    /**
     * Create a ProviderDock.
     * @param {ProviderDockCreateArgs} args - Arguments to create a ProviderDock.
     * @example
     * // Create one ProviderDock
     * const ProviderDock = await prisma.providerDock.create({
     *   data: {
     *     // ... data to create a ProviderDock
     *   }
     * })
     * 
    **/
    create<T extends ProviderDockCreateArgs>(
      args: SelectSubset<T, ProviderDockCreateArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Create many ProviderDocks.
     *     @param {ProviderDockCreateManyArgs} args - Arguments to create many ProviderDocks.
     *     @example
     *     // Create many ProviderDocks
     *     const providerDock = await prisma.providerDock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderDockCreateManyArgs>(
      args?: SelectSubset<T, ProviderDockCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderDock.
     * @param {ProviderDockDeleteArgs} args - Arguments to delete one ProviderDock.
     * @example
     * // Delete one ProviderDock
     * const ProviderDock = await prisma.providerDock.delete({
     *   where: {
     *     // ... filter to delete one ProviderDock
     *   }
     * })
     * 
    **/
    delete<T extends ProviderDockDeleteArgs>(
      args: SelectSubset<T, ProviderDockDeleteArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Update one ProviderDock.
     * @param {ProviderDockUpdateArgs} args - Arguments to update one ProviderDock.
     * @example
     * // Update one ProviderDock
     * const providerDock = await prisma.providerDock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderDockUpdateArgs>(
      args: SelectSubset<T, ProviderDockUpdateArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Delete zero or more ProviderDocks.
     * @param {ProviderDockDeleteManyArgs} args - Arguments to filter ProviderDocks to delete.
     * @example
     * // Delete a few ProviderDocks
     * const { count } = await prisma.providerDock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderDockDeleteManyArgs>(
      args?: SelectSubset<T, ProviderDockDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderDocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderDocks
     * const providerDock = await prisma.providerDock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderDockUpdateManyArgs>(
      args: SelectSubset<T, ProviderDockUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderDock.
     * @param {ProviderDockUpsertArgs} args - Arguments to update or create a ProviderDock.
     * @example
     * // Update or create a ProviderDock
     * const providerDock = await prisma.providerDock.upsert({
     *   create: {
     *     // ... data to create a ProviderDock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderDock we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderDockUpsertArgs>(
      args: SelectSubset<T, ProviderDockUpsertArgs>
    ): Prisma__ProviderDockClient<ProviderDockGetPayload<T>>

    /**
     * Find zero or more ProviderDocks that matches the filter.
     * @param {ProviderDockFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerDock = await prisma.providerDock.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderDockFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderDock.
     * @param {ProviderDockAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerDock = await prisma.providerDock.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderDockAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderDocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockCountArgs} args - Arguments to filter ProviderDocks to count.
     * @example
     * // Count the number of ProviderDocks
     * const count = await prisma.providerDock.count({
     *   where: {
     *     // ... the filter for the ProviderDocks we want to count
     *   }
     * })
    **/
    count<T extends ProviderDockCountArgs>(
      args?: Subset<T, ProviderDockCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderDockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderDock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderDockAggregateArgs>(args: Subset<T, ProviderDockAggregateArgs>): PrismaPromise<GetProviderDockAggregateType<T>>

    /**
     * Group by ProviderDock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderDockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderDockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderDockGroupByArgs['orderBy'] }
        : { orderBy?: ProviderDockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderDockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderDockGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderDock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderDockClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    onboardingRequiredData<T extends ProviderDockOnboardingRequiredDataArgs= {}>(args?: Subset<T, ProviderDockOnboardingRequiredDataArgs>): Prisma__ProviderDockOnboardingRequiredDataClient<ProviderDockOnboardingRequiredDataGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderDock base type for findUnique actions
   */
  export type ProviderDockFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter, which ProviderDock to fetch.
     * 
    **/
    where: ProviderDockWhereUniqueInput
  }

  /**
   * ProviderDock: findUnique
   */
  export interface ProviderDockFindUniqueArgs extends ProviderDockFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderDock findUniqueOrThrow
   */
  export type ProviderDockFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter, which ProviderDock to fetch.
     * 
    **/
    where: ProviderDockWhereUniqueInput
  }


  /**
   * ProviderDock base type for findFirst actions
   */
  export type ProviderDockFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter, which ProviderDock to fetch.
     * 
    **/
    where?: ProviderDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocks to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderDockOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDocks.
     * 
    **/
    cursor?: ProviderDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDocks.
     * 
    **/
    distinct?: Enumerable<ProviderDockScalarFieldEnum>
  }

  /**
   * ProviderDock: findFirst
   */
  export interface ProviderDockFindFirstArgs extends ProviderDockFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderDock findFirstOrThrow
   */
  export type ProviderDockFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter, which ProviderDock to fetch.
     * 
    **/
    where?: ProviderDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocks to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderDockOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderDocks.
     * 
    **/
    cursor?: ProviderDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderDocks.
     * 
    **/
    distinct?: Enumerable<ProviderDockScalarFieldEnum>
  }


  /**
   * ProviderDock findMany
   */
  export type ProviderDockFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter, which ProviderDocks to fetch.
     * 
    **/
    where?: ProviderDockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderDocks to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderDockOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderDocks.
     * 
    **/
    cursor?: ProviderDockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderDocks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderDocks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderDockScalarFieldEnum>
  }


  /**
   * ProviderDock create
   */
  export type ProviderDockCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * The data needed to create a ProviderDock.
     * 
    **/
    data: XOR<ProviderDockCreateInput, ProviderDockUncheckedCreateInput>
  }


  /**
   * ProviderDock createMany
   */
  export type ProviderDockCreateManyArgs = {
    /**
     * The data used to create many ProviderDocks.
     * 
    **/
    data: Enumerable<ProviderDockCreateManyInput>
  }


  /**
   * ProviderDock update
   */
  export type ProviderDockUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * The data needed to update a ProviderDock.
     * 
    **/
    data: XOR<ProviderDockUpdateInput, ProviderDockUncheckedUpdateInput>
    /**
     * Choose, which ProviderDock to update.
     * 
    **/
    where: ProviderDockWhereUniqueInput
  }


  /**
   * ProviderDock updateMany
   */
  export type ProviderDockUpdateManyArgs = {
    /**
     * The data used to update ProviderDocks.
     * 
    **/
    data: XOR<ProviderDockUpdateManyMutationInput, ProviderDockUncheckedUpdateManyInput>
    /**
     * Filter which ProviderDocks to update
     * 
    **/
    where?: ProviderDockWhereInput
  }


  /**
   * ProviderDock upsert
   */
  export type ProviderDockUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * The filter to search for the ProviderDock to update in case it exists.
     * 
    **/
    where: ProviderDockWhereUniqueInput
    /**
     * In case the ProviderDock found by the `where` argument doesn't exist, create a new ProviderDock with this data.
     * 
    **/
    create: XOR<ProviderDockCreateInput, ProviderDockUncheckedCreateInput>
    /**
     * In case the ProviderDock was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderDockUpdateInput, ProviderDockUncheckedUpdateInput>
  }


  /**
   * ProviderDock delete
   */
  export type ProviderDockDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
    /**
     * Filter which ProviderDock to delete.
     * 
    **/
    where: ProviderDockWhereUniqueInput
  }


  /**
   * ProviderDock deleteMany
   */
  export type ProviderDockDeleteManyArgs = {
    /**
     * Filter which ProviderDocks to delete
     * 
    **/
    where?: ProviderDockWhereInput
  }


  /**
   * ProviderDock findRaw
   */
  export type ProviderDockFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderDock aggregateRaw
   */
  export type ProviderDockAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderDock without action
   */
  export type ProviderDockArgs = {
    /**
     * Select specific fields to fetch from the ProviderDock
     * 
    **/
    select?: ProviderDockSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProviderDockInclude | null
  }



  /**
   * Model ProviderServices
   */


  export type AggregateProviderServices = {
    _count: ProviderServicesCountAggregateOutputType | null
    _avg: ProviderServicesAvgAggregateOutputType | null
    _sum: ProviderServicesSumAggregateOutputType | null
    _min: ProviderServicesMinAggregateOutputType | null
    _max: ProviderServicesMaxAggregateOutputType | null
  }

  export type ProviderServicesAvgAggregateOutputType = {
    price: number | null
  }

  export type ProviderServicesSumAggregateOutputType = {
    price: number | null
  }

  export type ProviderServicesMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    priceType: string | null
    providerId: string | null
  }

  export type ProviderServicesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    priceType: string | null
    providerId: string | null
  }

  export type ProviderServicesCountAggregateOutputType = {
    id: number
    name: number
    price: number
    priceType: number
    providerId: number
    _all: number
  }


  export type ProviderServicesAvgAggregateInputType = {
    price?: true
  }

  export type ProviderServicesSumAggregateInputType = {
    price?: true
  }

  export type ProviderServicesMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    priceType?: true
    providerId?: true
  }

  export type ProviderServicesMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    priceType?: true
    providerId?: true
  }

  export type ProviderServicesCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    priceType?: true
    providerId?: true
    _all?: true
  }

  export type ProviderServicesAggregateArgs = {
    /**
     * Filter which ProviderServices to aggregate.
     * 
    **/
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderServicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderServices
    **/
    _count?: true | ProviderServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderServicesMaxAggregateInputType
  }

  export type GetProviderServicesAggregateType<T extends ProviderServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderServices[P]>
      : GetScalarType<T[P], AggregateProviderServices[P]>
  }




  export type ProviderServicesGroupByArgs = {
    where?: ProviderServicesWhereInput
    orderBy?: Enumerable<ProviderServicesOrderByWithAggregationInput>
    by: Array<ProviderServicesScalarFieldEnum>
    having?: ProviderServicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderServicesCountAggregateInputType | true
    _avg?: ProviderServicesAvgAggregateInputType
    _sum?: ProviderServicesSumAggregateInputType
    _min?: ProviderServicesMinAggregateInputType
    _max?: ProviderServicesMaxAggregateInputType
  }


  export type ProviderServicesGroupByOutputType = {
    id: string
    name: string
    price: number
    priceType: string
    providerId: string
    _count: ProviderServicesCountAggregateOutputType | null
    _avg: ProviderServicesAvgAggregateOutputType | null
    _sum: ProviderServicesSumAggregateOutputType | null
    _min: ProviderServicesMinAggregateOutputType | null
    _max: ProviderServicesMaxAggregateOutputType | null
  }

  type GetProviderServicesGroupByPayload<T extends ProviderServicesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProviderServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderServicesGroupByOutputType[P]>
        }
      >
    >


  export type ProviderServicesSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    priceType?: boolean
    providerId?: boolean
  }


  export type ProviderServicesGetPayload<S extends boolean | null | undefined | ProviderServicesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProviderServices :
    S extends undefined ? never :
    S extends { include: any } & (ProviderServicesArgs | ProviderServicesFindManyArgs)
    ? ProviderServices 
    : S extends { select: any } & (ProviderServicesArgs | ProviderServicesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProviderServices ? ProviderServices[P] : never
  } 
      : ProviderServices


  type ProviderServicesCountArgs = Merge<
    Omit<ProviderServicesFindManyArgs, 'select' | 'include'> & {
      select?: ProviderServicesCountAggregateInputType | true
    }
  >

  export interface ProviderServicesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProviderServices that matches the filter.
     * @param {ProviderServicesFindUniqueArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProviderServicesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProviderServicesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProviderServices'> extends True ? Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>> : Prisma__ProviderServicesClient<ProviderServicesGetPayload<T> | null, null>

    /**
     * Find one ProviderServices that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProviderServicesFindUniqueOrThrowArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProviderServicesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProviderServicesFindUniqueOrThrowArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Find the first ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindFirstArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProviderServicesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProviderServicesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProviderServices'> extends True ? Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>> : Prisma__ProviderServicesClient<ProviderServicesGetPayload<T> | null, null>

    /**
     * Find the first ProviderServices that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindFirstOrThrowArgs} args - Arguments to find a ProviderServices
     * @example
     * // Get one ProviderServices
     * const providerServices = await prisma.providerServices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProviderServicesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProviderServicesFindFirstOrThrowArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Find zero or more ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderServices
     * const providerServices = await prisma.providerServices.findMany()
     * 
     * // Get first 10 ProviderServices
     * const providerServices = await prisma.providerServices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerServicesWithIdOnly = await prisma.providerServices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProviderServicesFindManyArgs>(
      args?: SelectSubset<T, ProviderServicesFindManyArgs>
    ): PrismaPromise<Array<ProviderServicesGetPayload<T>>>

    /**
     * Create a ProviderServices.
     * @param {ProviderServicesCreateArgs} args - Arguments to create a ProviderServices.
     * @example
     * // Create one ProviderServices
     * const ProviderServices = await prisma.providerServices.create({
     *   data: {
     *     // ... data to create a ProviderServices
     *   }
     * })
     * 
    **/
    create<T extends ProviderServicesCreateArgs>(
      args: SelectSubset<T, ProviderServicesCreateArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Create many ProviderServices.
     *     @param {ProviderServicesCreateManyArgs} args - Arguments to create many ProviderServices.
     *     @example
     *     // Create many ProviderServices
     *     const providerServices = await prisma.providerServices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProviderServicesCreateManyArgs>(
      args?: SelectSubset<T, ProviderServicesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProviderServices.
     * @param {ProviderServicesDeleteArgs} args - Arguments to delete one ProviderServices.
     * @example
     * // Delete one ProviderServices
     * const ProviderServices = await prisma.providerServices.delete({
     *   where: {
     *     // ... filter to delete one ProviderServices
     *   }
     * })
     * 
    **/
    delete<T extends ProviderServicesDeleteArgs>(
      args: SelectSubset<T, ProviderServicesDeleteArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Update one ProviderServices.
     * @param {ProviderServicesUpdateArgs} args - Arguments to update one ProviderServices.
     * @example
     * // Update one ProviderServices
     * const providerServices = await prisma.providerServices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProviderServicesUpdateArgs>(
      args: SelectSubset<T, ProviderServicesUpdateArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Delete zero or more ProviderServices.
     * @param {ProviderServicesDeleteManyArgs} args - Arguments to filter ProviderServices to delete.
     * @example
     * // Delete a few ProviderServices
     * const { count } = await prisma.providerServices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProviderServicesDeleteManyArgs>(
      args?: SelectSubset<T, ProviderServicesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderServices
     * const providerServices = await prisma.providerServices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProviderServicesUpdateManyArgs>(
      args: SelectSubset<T, ProviderServicesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProviderServices.
     * @param {ProviderServicesUpsertArgs} args - Arguments to update or create a ProviderServices.
     * @example
     * // Update or create a ProviderServices
     * const providerServices = await prisma.providerServices.upsert({
     *   create: {
     *     // ... data to create a ProviderServices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderServices we want to update
     *   }
     * })
    **/
    upsert<T extends ProviderServicesUpsertArgs>(
      args: SelectSubset<T, ProviderServicesUpsertArgs>
    ): Prisma__ProviderServicesClient<ProviderServicesGetPayload<T>>

    /**
     * Find zero or more ProviderServices that matches the filter.
     * @param {ProviderServicesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const providerServices = await prisma.providerServices.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ProviderServicesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProviderServices.
     * @param {ProviderServicesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const providerServices = await prisma.providerServices.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ProviderServicesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesCountArgs} args - Arguments to filter ProviderServices to count.
     * @example
     * // Count the number of ProviderServices
     * const count = await prisma.providerServices.count({
     *   where: {
     *     // ... the filter for the ProviderServices we want to count
     *   }
     * })
    **/
    count<T extends ProviderServicesCountArgs>(
      args?: Subset<T, ProviderServicesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderServicesAggregateArgs>(args: Subset<T, ProviderServicesAggregateArgs>): PrismaPromise<GetProviderServicesAggregateType<T>>

    /**
     * Group by ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderServicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderServicesGroupByArgs['orderBy'] }
        : { orderBy?: ProviderServicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderServicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderServicesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderServices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProviderServicesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProviderServices base type for findUnique actions
   */
  export type ProviderServicesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter, which ProviderServices to fetch.
     * 
    **/
    where: ProviderServicesWhereUniqueInput
  }

  /**
   * ProviderServices: findUnique
   */
  export interface ProviderServicesFindUniqueArgs extends ProviderServicesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderServices findUniqueOrThrow
   */
  export type ProviderServicesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter, which ProviderServices to fetch.
     * 
    **/
    where: ProviderServicesWhereUniqueInput
  }


  /**
   * ProviderServices base type for findFirst actions
   */
  export type ProviderServicesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter, which ProviderServices to fetch.
     * 
    **/
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderServicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     * 
    **/
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     * 
    **/
    distinct?: Enumerable<ProviderServicesScalarFieldEnum>
  }

  /**
   * ProviderServices: findFirst
   */
  export interface ProviderServicesFindFirstArgs extends ProviderServicesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProviderServices findFirstOrThrow
   */
  export type ProviderServicesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter, which ProviderServices to fetch.
     * 
    **/
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderServicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     * 
    **/
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     * 
    **/
    distinct?: Enumerable<ProviderServicesScalarFieldEnum>
  }


  /**
   * ProviderServices findMany
   */
  export type ProviderServicesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter, which ProviderServices to fetch.
     * 
    **/
    where?: ProviderServicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     * 
    **/
    orderBy?: Enumerable<ProviderServicesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderServices.
     * 
    **/
    cursor?: ProviderServicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProviderServicesScalarFieldEnum>
  }


  /**
   * ProviderServices create
   */
  export type ProviderServicesCreateArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * The data needed to create a ProviderServices.
     * 
    **/
    data: XOR<ProviderServicesCreateInput, ProviderServicesUncheckedCreateInput>
  }


  /**
   * ProviderServices createMany
   */
  export type ProviderServicesCreateManyArgs = {
    /**
     * The data used to create many ProviderServices.
     * 
    **/
    data: Enumerable<ProviderServicesCreateManyInput>
  }


  /**
   * ProviderServices update
   */
  export type ProviderServicesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * The data needed to update a ProviderServices.
     * 
    **/
    data: XOR<ProviderServicesUpdateInput, ProviderServicesUncheckedUpdateInput>
    /**
     * Choose, which ProviderServices to update.
     * 
    **/
    where: ProviderServicesWhereUniqueInput
  }


  /**
   * ProviderServices updateMany
   */
  export type ProviderServicesUpdateManyArgs = {
    /**
     * The data used to update ProviderServices.
     * 
    **/
    data: XOR<ProviderServicesUpdateManyMutationInput, ProviderServicesUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     * 
    **/
    where?: ProviderServicesWhereInput
  }


  /**
   * ProviderServices upsert
   */
  export type ProviderServicesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * The filter to search for the ProviderServices to update in case it exists.
     * 
    **/
    where: ProviderServicesWhereUniqueInput
    /**
     * In case the ProviderServices found by the `where` argument doesn't exist, create a new ProviderServices with this data.
     * 
    **/
    create: XOR<ProviderServicesCreateInput, ProviderServicesUncheckedCreateInput>
    /**
     * In case the ProviderServices was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProviderServicesUpdateInput, ProviderServicesUncheckedUpdateInput>
  }


  /**
   * ProviderServices delete
   */
  export type ProviderServicesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
    /**
     * Filter which ProviderServices to delete.
     * 
    **/
    where: ProviderServicesWhereUniqueInput
  }


  /**
   * ProviderServices deleteMany
   */
  export type ProviderServicesDeleteManyArgs = {
    /**
     * Filter which ProviderServices to delete
     * 
    **/
    where?: ProviderServicesWhereInput
  }


  /**
   * ProviderServices findRaw
   */
  export type ProviderServicesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderServices aggregateRaw
   */
  export type ProviderServicesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * ProviderServices without action
   */
  export type ProviderServicesArgs = {
    /**
     * Select specific fields to fetch from the ProviderServices
     * 
    **/
    select?: ProviderServicesSelect | null
  }



  /**
   * Model Types
   */


  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesMinAggregateOutputType = {
    id: string | null
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: string | null
  }

  export type TypesMaxAggregateOutputType = {
    id: string | null
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: string | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: number
    _all: number
  }


  export type TypesMinAggregateInputType = {
    id?: true
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: true
    _all?: true
  }

  export type TypesAggregateArgs = {
    /**
     * Filter which Types to aggregate.
     * 
    **/
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     * 
    **/
    orderBy?: Enumerable<TypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type TypesGroupByArgs = {
    where?: TypesWhereInput
    orderBy?: Enumerable<TypesOrderByWithAggregationInput>
    by: Array<TypesScalarFieldEnum>
    having?: TypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }


  export type TypesGroupByOutputType = {
    id: string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: string | null
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends TypesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type TypesSelect = {
    id?: boolean
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: boolean
    Tipo_que_precisar?: boolean | TypesTipoQuePrecisarArgs
    address?: boolean | TypesAddressArgs
    contact?: boolean | TypesContactArgs
    orderStatus?: boolean | TypesOrderStatusArgs
  }


  export type TypesInclude = {

  } 

  export type TypesGetPayload<S extends boolean | null | undefined | TypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Types :
    S extends undefined ? never :
    S extends { include: any } & (TypesArgs | TypesFindManyArgs)
    ? Types 
    : S extends { select: any } & (TypesArgs | TypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Tipo_que_precisar' ? Array < TypesTipoQuePrecisarGetPayload<S['select'][P]>>  :
        P extends 'address' ? Array < TypesAddressGetPayload<S['select'][P]>>  :
        P extends 'contact' ? Array < TypesContactGetPayload<S['select'][P]>>  :
        P extends 'orderStatus' ? Array < TypesOrderStatusGetPayload<S['select'][P]>>  :  P extends keyof Types ? Types[P] : never
  } 
      : Types


  type TypesCountArgs = Merge<
    Omit<TypesFindManyArgs, 'select' | 'include'> & {
      select?: TypesCountAggregateInputType | true
    }
  >

  export interface TypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Types that matches the filter.
     * @param {TypesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Types'> extends True ? Prisma__TypesClient<TypesGetPayload<T>> : Prisma__TypesClient<TypesGetPayload<T> | null, null>

    /**
     * Find one Types that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TypesFindUniqueOrThrowArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Types'> extends True ? Prisma__TypesClient<TypesGetPayload<T>> : Prisma__TypesClient<TypesGetPayload<T> | null, null>

    /**
     * Find the first Types that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TypesFindFirstOrThrowArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypesFindManyArgs>(
      args?: SelectSubset<T, TypesFindManyArgs>
    ): PrismaPromise<Array<TypesGetPayload<T>>>

    /**
     * Create a Types.
     * @param {TypesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
    **/
    create<T extends TypesCreateArgs>(
      args: SelectSubset<T, TypesCreateArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Create many Types.
     *     @param {TypesCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const types = await prisma.types.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypesCreateManyArgs>(
      args?: SelectSubset<T, TypesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Types.
     * @param {TypesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
    **/
    delete<T extends TypesDeleteArgs>(
      args: SelectSubset<T, TypesDeleteArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Update one Types.
     * @param {TypesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypesUpdateArgs>(
      args: SelectSubset<T, TypesUpdateArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Delete zero or more Types.
     * @param {TypesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypesDeleteManyArgs>(
      args?: SelectSubset<T, TypesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypesUpdateManyArgs>(
      args: SelectSubset<T, TypesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Types.
     * @param {TypesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
    **/
    upsert<T extends TypesUpsertArgs>(
      args: SelectSubset<T, TypesUpsertArgs>
    ): Prisma__TypesClient<TypesGetPayload<T>>

    /**
     * Find zero or more Types that matches the filter.
     * @param {TypesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const types = await prisma.types.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TypesFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Types.
     * @param {TypesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const types = await prisma.types.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TypesAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypesCountArgs>(
      args?: Subset<T, TypesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypesGroupByArgs['orderBy'] }
        : { orderBy?: TypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TypesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Tipo_que_precisar<T extends TypesTipoQuePrecisarArgs= {}>(args?: Subset<T, TypesTipoQuePrecisarArgs>): PrismaPromise<Array<TypesTipoQuePrecisarGetPayload<T>>| Null>;

    address<T extends TypesAddressArgs= {}>(args?: Subset<T, TypesAddressArgs>): PrismaPromise<Array<TypesAddressGetPayload<T>>| Null>;

    contact<T extends TypesContactArgs= {}>(args?: Subset<T, TypesContactArgs>): PrismaPromise<Array<TypesContactGetPayload<T>>| Null>;

    orderStatus<T extends TypesOrderStatusArgs= {}>(args?: Subset<T, TypesOrderStatusArgs>): PrismaPromise<Array<TypesOrderStatusGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Types base type for findUnique actions
   */
  export type TypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter, which Types to fetch.
     * 
    **/
    where: TypesWhereUniqueInput
  }

  /**
   * Types: findUnique
   */
  export interface TypesFindUniqueArgs extends TypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Types findUniqueOrThrow
   */
  export type TypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter, which Types to fetch.
     * 
    **/
    where: TypesWhereUniqueInput
  }


  /**
   * Types base type for findFirst actions
   */
  export type TypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter, which Types to fetch.
     * 
    **/
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     * 
    **/
    orderBy?: Enumerable<TypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     * 
    **/
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     * 
    **/
    distinct?: Enumerable<TypesScalarFieldEnum>
  }

  /**
   * Types: findFirst
   */
  export interface TypesFindFirstArgs extends TypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Types findFirstOrThrow
   */
  export type TypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter, which Types to fetch.
     * 
    **/
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     * 
    **/
    orderBy?: Enumerable<TypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     * 
    **/
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     * 
    **/
    distinct?: Enumerable<TypesScalarFieldEnum>
  }


  /**
   * Types findMany
   */
  export type TypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter, which Types to fetch.
     * 
    **/
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     * 
    **/
    orderBy?: Enumerable<TypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     * 
    **/
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TypesScalarFieldEnum>
  }


  /**
   * Types create
   */
  export type TypesCreateArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * The data needed to create a Types.
     * 
    **/
    data: XOR<TypesCreateInput, TypesUncheckedCreateInput>
  }


  /**
   * Types createMany
   */
  export type TypesCreateManyArgs = {
    /**
     * The data used to create many Types.
     * 
    **/
    data: Enumerable<TypesCreateManyInput>
  }


  /**
   * Types update
   */
  export type TypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * The data needed to update a Types.
     * 
    **/
    data: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
    /**
     * Choose, which Types to update.
     * 
    **/
    where: TypesWhereUniqueInput
  }


  /**
   * Types updateMany
   */
  export type TypesUpdateManyArgs = {
    /**
     * The data used to update Types.
     * 
    **/
    data: XOR<TypesUpdateManyMutationInput, TypesUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     * 
    **/
    where?: TypesWhereInput
  }


  /**
   * Types upsert
   */
  export type TypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * The filter to search for the Types to update in case it exists.
     * 
    **/
    where: TypesWhereUniqueInput
    /**
     * In case the Types found by the `where` argument doesn't exist, create a new Types with this data.
     * 
    **/
    create: XOR<TypesCreateInput, TypesUncheckedCreateInput>
    /**
     * In case the Types was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
  }


  /**
   * Types delete
   */
  export type TypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
    /**
     * Filter which Types to delete.
     * 
    **/
    where: TypesWhereUniqueInput
  }


  /**
   * Types deleteMany
   */
  export type TypesDeleteManyArgs = {
    /**
     * Filter which Types to delete
     * 
    **/
    where?: TypesWhereInput
  }


  /**
   * Types findRaw
   */
  export type TypesFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Types aggregateRaw
   */
  export type TypesAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Types without action
   */
  export type TypesArgs = {
    /**
     * Select specific fields to fetch from the Types
     * 
    **/
    select?: TypesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TypesInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    providerId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    providerId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    providerId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    providerId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    providerId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    providerId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    accessMethods?: boolean | UserAccessMethodsArgs
    providerId?: boolean
  }


  export type UserInclude = {

  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accessMethods' ? Array < UserAccessMethodsGetPayload<S['select'][P]>>  :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accessMethods<T extends UserAccessMethodsArgs= {}>(args?: Subset<T, UserAccessMethodsArgs>): PrismaPromise<Array<UserAccessMethodsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProviderClientReminderConfigsScalarFieldEnum: {
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
  };

  export type ProviderClientReminderConfigsScalarFieldEnum = (typeof ProviderClientReminderConfigsScalarFieldEnum)[keyof typeof ProviderClientReminderConfigsScalarFieldEnum]


  export const ProviderClientReminderOrderScalarFieldEnum: {
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
  };

  export type ProviderClientReminderOrderScalarFieldEnum = (typeof ProviderClientReminderOrderScalarFieldEnum)[keyof typeof ProviderClientReminderOrderScalarFieldEnum]


  export const ProviderClientRemindersScalarFieldEnum: {
    id: 'id',
    providerClientOrder: 'providerClientOrder',
    providerClientReminderConfigId: 'providerClientReminderConfigId'
  };

  export type ProviderClientRemindersScalarFieldEnum = (typeof ProviderClientRemindersScalarFieldEnum)[keyof typeof ProviderClientRemindersScalarFieldEnum]


  export const ProviderClientsScalarFieldEnum: {
    id: 'id',
    CNPJ: 'CNPJ',
    CPF: 'CPF',
    cellphone: 'cellphone',
    email: 'email',
    isWhatsapp: 'isWhatsapp',
    name: 'name',
    providerId: 'providerId'
  };

  export type ProviderClientsScalarFieldEnum = (typeof ProviderClientsScalarFieldEnum)[keyof typeof ProviderClientsScalarFieldEnum]


  export const ProviderDockScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    peopleId: 'peopleId',
    providerId: 'providerId',
    registrationId: 'registrationId',
    statusSPD: 'statusSPD'
  };

  export type ProviderDockScalarFieldEnum = (typeof ProviderDockScalarFieldEnum)[keyof typeof ProviderDockScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    hasOnboarding: 'hasOnboarding'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const ProviderServicesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    priceType: 'priceType',
    providerId: 'providerId'
  };

  export type ProviderServicesScalarFieldEnum = (typeof ProviderServicesScalarFieldEnum)[keyof typeof ProviderServicesScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TypesScalarFieldEnum: {
    id: 'id',
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas: 'Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ProviderWhereInput = {
    AND?: Enumerable<ProviderWhereInput>
    OR?: Enumerable<ProviderWhereInput>
    NOT?: Enumerable<ProviderWhereInput>
    id?: StringFilter | string
    adresses?: XOR<ProviderAdressesCompositeListFilter, Enumerable<ProviderAdressesObjectEqualityInput>>
    contacts?: XOR<ProviderContactsCompositeListFilter, Enumerable<ProviderContactsObjectEqualityInput>>
    hasOnboarding?: BoolFilter | boolean
    legalPerson?: XOR<ProviderLegalPersonNullableCompositeFilter, ProviderLegalPersonObjectEqualityInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableCompositeFilter, ProviderPhysicalPersonObjectEqualityInput> | null
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    adresses?: ProviderAdressesOrderByCompositeAggregateInput
    contacts?: ProviderContactsOrderByCompositeAggregateInput
    hasOnboarding?: SortOrder
    legalPerson?: ProviderLegalPersonOrderByInput
    physicalPerson?: ProviderPhysicalPersonOrderByInput
  }

  export type ProviderWhereUniqueInput = {
    id?: string
  }

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    hasOnboarding?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    hasOnboarding?: BoolWithAggregatesFilter | boolean
  }

  export type ProviderClientReminderConfigsWhereInput = {
    AND?: Enumerable<ProviderClientReminderConfigsWhereInput>
    OR?: Enumerable<ProviderClientReminderConfigsWhereInput>
    NOT?: Enumerable<ProviderClientReminderConfigsWhereInput>
    id?: StringFilter | string
    amountSessions?: StringFilter | string
    clientId?: StringFilter | string
    dateTimeEnd?: StringFilter | string
    dateTimeStart?: StringFilter | string
    isTotalPriceCustom?: StringFilter | string
    occurrenceType?: StringFilter | string
    providerId?: StringFilter | string
    reminderStatus?: StringFilter | string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListCompositeListFilter, Enumerable<ProviderClientReminderConfigsServicesListObjectEqualityInput>>
    totalPrice?: StringFilter | string
    totalPricePayed?: StringFilter | string
    totalReminders?: XOR<ProviderClientReminderConfigsTotalRemindersCompositeFilter, ProviderClientReminderConfigsTotalRemindersObjectEqualityInput>
  }

  export type ProviderClientReminderConfigsOrderByWithRelationInput = {
    id?: SortOrder
    amountSessions?: SortOrder
    clientId?: SortOrder
    dateTimeEnd?: SortOrder
    dateTimeStart?: SortOrder
    isTotalPriceCustom?: SortOrder
    occurrenceType?: SortOrder
    providerId?: SortOrder
    reminderStatus?: SortOrder
    servicesList?: ProviderClientReminderConfigsServicesListOrderByCompositeAggregateInput
    totalPrice?: SortOrder
    totalPricePayed?: SortOrder
    totalReminders?: ProviderClientReminderConfigsTotalRemindersOrderByInput
  }

  export type ProviderClientReminderConfigsWhereUniqueInput = {
    id?: string
  }

  export type ProviderClientReminderConfigsOrderByWithAggregationInput = {
    id?: SortOrder
    amountSessions?: SortOrder
    clientId?: SortOrder
    dateTimeEnd?: SortOrder
    dateTimeStart?: SortOrder
    isTotalPriceCustom?: SortOrder
    occurrenceType?: SortOrder
    providerId?: SortOrder
    reminderStatus?: SortOrder
    totalPrice?: SortOrder
    totalPricePayed?: SortOrder
    _count?: ProviderClientReminderConfigsCountOrderByAggregateInput
    _max?: ProviderClientReminderConfigsMaxOrderByAggregateInput
    _min?: ProviderClientReminderConfigsMinOrderByAggregateInput
  }

  export type ProviderClientReminderConfigsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderClientReminderConfigsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderClientReminderConfigsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderClientReminderConfigsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    amountSessions?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
    dateTimeEnd?: StringWithAggregatesFilter | string
    dateTimeStart?: StringWithAggregatesFilter | string
    isTotalPriceCustom?: StringWithAggregatesFilter | string
    occurrenceType?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
    reminderStatus?: StringWithAggregatesFilter | string
    totalPrice?: StringWithAggregatesFilter | string
    totalPricePayed?: StringWithAggregatesFilter | string
  }

  export type ProviderClientReminderOrderWhereInput = {
    AND?: Enumerable<ProviderClientReminderOrderWhereInput>
    OR?: Enumerable<ProviderClientReminderOrderWhereInput>
    NOT?: Enumerable<ProviderClientReminderOrderWhereInput>
    id?: StringFilter | string
    amount?: StringFilter | string
    amountPayed?: StringFilter | string
    clientId?: StringFilter | string
    dueDate?: StringFilter | string
    generateDate?: StringFilter | string
    paymentDate?: StringFilter | string
    providerClientReminderId?: StringFilter | string
    providerId?: StringFilter | string
    statusType?: StringFilter | string
  }

  export type ProviderClientReminderOrderOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    amountPayed?: SortOrder
    clientId?: SortOrder
    dueDate?: SortOrder
    generateDate?: SortOrder
    paymentDate?: SortOrder
    providerClientReminderId?: SortOrder
    providerId?: SortOrder
    statusType?: SortOrder
  }

  export type ProviderClientReminderOrderWhereUniqueInput = {
    id?: string
  }

  export type ProviderClientReminderOrderOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    amountPayed?: SortOrder
    clientId?: SortOrder
    dueDate?: SortOrder
    generateDate?: SortOrder
    paymentDate?: SortOrder
    providerClientReminderId?: SortOrder
    providerId?: SortOrder
    statusType?: SortOrder
    _count?: ProviderClientReminderOrderCountOrderByAggregateInput
    _max?: ProviderClientReminderOrderMaxOrderByAggregateInput
    _min?: ProviderClientReminderOrderMinOrderByAggregateInput
  }

  export type ProviderClientReminderOrderScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderClientReminderOrderScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderClientReminderOrderScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderClientReminderOrderScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    amount?: StringWithAggregatesFilter | string
    amountPayed?: StringWithAggregatesFilter | string
    clientId?: StringWithAggregatesFilter | string
    dueDate?: StringWithAggregatesFilter | string
    generateDate?: StringWithAggregatesFilter | string
    paymentDate?: StringWithAggregatesFilter | string
    providerClientReminderId?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
    statusType?: StringWithAggregatesFilter | string
  }

  export type ProviderClientRemindersWhereInput = {
    AND?: Enumerable<ProviderClientRemindersWhereInput>
    OR?: Enumerable<ProviderClientRemindersWhereInput>
    NOT?: Enumerable<ProviderClientRemindersWhereInput>
    id?: StringFilter | string
    client?: XOR<ProviderClientRemindersClientCompositeFilter, ProviderClientRemindersClientObjectEqualityInput>
    dateTimeSend?: XOR<ProviderClientRemindersDateTimeSendCompositeFilter, ProviderClientRemindersDateTimeSendObjectEqualityInput>
    provider?: XOR<ProviderClientRemindersProviderCompositeFilter, ProviderClientRemindersProviderObjectEqualityInput>
    providerClientOrder?: StringFilter | string
    providerClientReminderConfigId?: StringFilter | string
  }

  export type ProviderClientRemindersOrderByWithRelationInput = {
    id?: SortOrder
    client?: ProviderClientRemindersClientOrderByInput
    dateTimeSend?: ProviderClientRemindersDateTimeSendOrderByInput
    provider?: ProviderClientRemindersProviderOrderByInput
    providerClientOrder?: SortOrder
    providerClientReminderConfigId?: SortOrder
  }

  export type ProviderClientRemindersWhereUniqueInput = {
    id?: string
  }

  export type ProviderClientRemindersOrderByWithAggregationInput = {
    id?: SortOrder
    providerClientOrder?: SortOrder
    providerClientReminderConfigId?: SortOrder
    _count?: ProviderClientRemindersCountOrderByAggregateInput
    _max?: ProviderClientRemindersMaxOrderByAggregateInput
    _min?: ProviderClientRemindersMinOrderByAggregateInput
  }

  export type ProviderClientRemindersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderClientRemindersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderClientRemindersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderClientRemindersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    providerClientOrder?: StringWithAggregatesFilter | string
    providerClientReminderConfigId?: StringWithAggregatesFilter | string
  }

  export type ProviderClientsWhereInput = {
    AND?: Enumerable<ProviderClientsWhereInput>
    OR?: Enumerable<ProviderClientsWhereInput>
    NOT?: Enumerable<ProviderClientsWhereInput>
    id?: StringFilter | string
    CNPJ?: StringFilter | string
    CPF?: StringFilter | string
    cellphone?: StringFilter | string
    email?: StringFilter | string
    isWhatsapp?: StringFilter | string
    name?: StringFilter | string
    providerId?: StringFilter | string
  }

  export type ProviderClientsOrderByWithRelationInput = {
    id?: SortOrder
    CNPJ?: SortOrder
    CPF?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    isWhatsapp?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderClientsWhereUniqueInput = {
    id?: string
  }

  export type ProviderClientsOrderByWithAggregationInput = {
    id?: SortOrder
    CNPJ?: SortOrder
    CPF?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    isWhatsapp?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    _count?: ProviderClientsCountOrderByAggregateInput
    _max?: ProviderClientsMaxOrderByAggregateInput
    _min?: ProviderClientsMinOrderByAggregateInput
  }

  export type ProviderClientsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderClientsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderClientsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderClientsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    CNPJ?: StringWithAggregatesFilter | string
    CPF?: StringWithAggregatesFilter | string
    cellphone?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    isWhatsapp?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
  }

  export type ProviderDockWhereInput = {
    AND?: Enumerable<ProviderDockWhereInput>
    OR?: Enumerable<ProviderDockWhereInput>
    NOT?: Enumerable<ProviderDockWhereInput>
    id?: StringFilter | string
    accountId?: StringFilter | string
    onboardingRequiredData?: XOR<ProviderDockOnboardingRequiredDataCompositeFilter, ProviderDockOnboardingRequiredDataObjectEqualityInput>
    peopleId?: StringFilter | string
    providerId?: StringFilter | string
    registrationId?: StringFilter | string
    statusSPD?: StringFilter | string
  }

  export type ProviderDockOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    onboardingRequiredData?: ProviderDockOnboardingRequiredDataOrderByInput
    peopleId?: SortOrder
    providerId?: SortOrder
    registrationId?: SortOrder
    statusSPD?: SortOrder
  }

  export type ProviderDockWhereUniqueInput = {
    id?: string
  }

  export type ProviderDockOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    peopleId?: SortOrder
    providerId?: SortOrder
    registrationId?: SortOrder
    statusSPD?: SortOrder
    _count?: ProviderDockCountOrderByAggregateInput
    _max?: ProviderDockMaxOrderByAggregateInput
    _min?: ProviderDockMinOrderByAggregateInput
  }

  export type ProviderDockScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderDockScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderDockScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderDockScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    accountId?: StringWithAggregatesFilter | string
    peopleId?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
    registrationId?: StringWithAggregatesFilter | string
    statusSPD?: StringWithAggregatesFilter | string
  }

  export type ProviderServicesWhereInput = {
    AND?: Enumerable<ProviderServicesWhereInput>
    OR?: Enumerable<ProviderServicesWhereInput>
    NOT?: Enumerable<ProviderServicesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    price?: FloatFilter | number
    priceType?: StringFilter | string
    providerId?: StringFilter | string
  }

  export type ProviderServicesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderServicesWhereUniqueInput = {
    id?: string
  }

  export type ProviderServicesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    providerId?: SortOrder
    _count?: ProviderServicesCountOrderByAggregateInput
    _avg?: ProviderServicesAvgOrderByAggregateInput
    _max?: ProviderServicesMaxOrderByAggregateInput
    _min?: ProviderServicesMinOrderByAggregateInput
    _sum?: ProviderServicesSumOrderByAggregateInput
  }

  export type ProviderServicesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProviderServicesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProviderServicesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProviderServicesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    priceType?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
  }

  export type TypesWhereInput = {
    AND?: Enumerable<TypesWhereInput>
    OR?: Enumerable<TypesWhereInput>
    NOT?: Enumerable<TypesWhereInput>
    id?: StringFilter | string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: StringNullableFilter | string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarCompositeListFilter, Enumerable<TypesTipoQuePrecisarObjectEqualityInput>>
    address?: XOR<TypesAddressCompositeListFilter, Enumerable<TypesAddressObjectEqualityInput>>
    contact?: XOR<TypesContactCompositeListFilter, Enumerable<TypesContactObjectEqualityInput>>
    orderStatus?: XOR<TypesOrderStatusCompositeListFilter, Enumerable<TypesOrderStatusObjectEqualityInput>>
  }

  export type TypesOrderByWithRelationInput = {
    id?: SortOrder
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: SortOrder
    Tipo_que_precisar?: TypesTipoQuePrecisarOrderByCompositeAggregateInput
    address?: TypesAddressOrderByCompositeAggregateInput
    contact?: TypesContactOrderByCompositeAggregateInput
    orderStatus?: TypesOrderStatusOrderByCompositeAggregateInput
  }

  export type TypesWhereUniqueInput = {
    id?: string
  }

  export type TypesOrderByWithAggregationInput = {
    id?: SortOrder
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: SortOrder
    _count?: TypesCountOrderByAggregateInput
    _max?: TypesMaxOrderByAggregateInput
    _min?: TypesMinOrderByAggregateInput
  }

  export type TypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<TypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TypesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    accessMethods?: XOR<UserAccessMethodsCompositeListFilter, Enumerable<UserAccessMethodsObjectEqualityInput>>
    providerId?: StringFilter | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    accessMethods?: UserAccessMethodsOrderByCompositeAggregateInput
    providerId?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    providerId?: StringWithAggregatesFilter | string
  }

  export type ProviderCreateInput = {
    id?: string
    adresses?: XOR<ProviderAdressesListCreateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListCreateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding: boolean
    legalPerson?: XOR<ProviderLegalPersonNullableCreateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableCreateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    adresses?: XOR<ProviderAdressesListCreateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListCreateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding: boolean
    legalPerson?: XOR<ProviderLegalPersonNullableCreateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableCreateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderUpdateInput = {
    adresses?: XOR<ProviderAdressesListUpdateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListUpdateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding?: BoolFieldUpdateOperationsInput | boolean
    legalPerson?: XOR<ProviderLegalPersonNullableUpdateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableUpdateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderUncheckedUpdateInput = {
    adresses?: XOR<ProviderAdressesListUpdateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListUpdateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding?: BoolFieldUpdateOperationsInput | boolean
    legalPerson?: XOR<ProviderLegalPersonNullableUpdateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableUpdateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderCreateManyInput = {
    id?: string
    adresses?: XOR<ProviderAdressesListCreateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListCreateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding: boolean
    legalPerson?: XOR<ProviderLegalPersonNullableCreateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableCreateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderUpdateManyMutationInput = {
    adresses?: XOR<ProviderAdressesListUpdateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListUpdateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding?: BoolFieldUpdateOperationsInput | boolean
    legalPerson?: XOR<ProviderLegalPersonNullableUpdateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableUpdateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderUncheckedUpdateManyInput = {
    adresses?: XOR<ProviderAdressesListUpdateEnvelopeInput, Enumerable<ProviderAdressesCreateInput>>
    contacts?: XOR<ProviderContactsListUpdateEnvelopeInput, Enumerable<ProviderContactsCreateInput>>
    hasOnboarding?: BoolFieldUpdateOperationsInput | boolean
    legalPerson?: XOR<ProviderLegalPersonNullableUpdateEnvelopeInput, ProviderLegalPersonCreateInput> | null
    physicalPerson?: XOR<ProviderPhysicalPersonNullableUpdateEnvelopeInput, ProviderPhysicalPersonCreateInput> | null
  }

  export type ProviderClientReminderConfigsCreateInput = {
    id?: string
    amountSessions: string
    clientId: string
    dateTimeEnd: string
    dateTimeStart: string
    isTotalPriceCustom: string
    occurrenceType: string
    providerId: string
    reminderStatus: string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListCreateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice: string
    totalPricePayed: string
    totalReminders: XOR<ProviderClientReminderConfigsTotalRemindersCreateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsUncheckedCreateInput = {
    id?: string
    amountSessions: string
    clientId: string
    dateTimeEnd: string
    dateTimeStart: string
    isTotalPriceCustom: string
    occurrenceType: string
    providerId: string
    reminderStatus: string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListCreateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice: string
    totalPricePayed: string
    totalReminders: XOR<ProviderClientReminderConfigsTotalRemindersCreateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsUpdateInput = {
    amountSessions?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateTimeEnd?: StringFieldUpdateOperationsInput | string
    dateTimeStart?: StringFieldUpdateOperationsInput | string
    isTotalPriceCustom?: StringFieldUpdateOperationsInput | string
    occurrenceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    reminderStatus?: StringFieldUpdateOperationsInput | string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListUpdateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice?: StringFieldUpdateOperationsInput | string
    totalPricePayed?: StringFieldUpdateOperationsInput | string
    totalReminders?: XOR<ProviderClientReminderConfigsTotalRemindersUpdateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsUncheckedUpdateInput = {
    amountSessions?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateTimeEnd?: StringFieldUpdateOperationsInput | string
    dateTimeStart?: StringFieldUpdateOperationsInput | string
    isTotalPriceCustom?: StringFieldUpdateOperationsInput | string
    occurrenceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    reminderStatus?: StringFieldUpdateOperationsInput | string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListUpdateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice?: StringFieldUpdateOperationsInput | string
    totalPricePayed?: StringFieldUpdateOperationsInput | string
    totalReminders?: XOR<ProviderClientReminderConfigsTotalRemindersUpdateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsCreateManyInput = {
    id?: string
    amountSessions: string
    clientId: string
    dateTimeEnd: string
    dateTimeStart: string
    isTotalPriceCustom: string
    occurrenceType: string
    providerId: string
    reminderStatus: string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListCreateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice: string
    totalPricePayed: string
    totalReminders: XOR<ProviderClientReminderConfigsTotalRemindersCreateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsUpdateManyMutationInput = {
    amountSessions?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateTimeEnd?: StringFieldUpdateOperationsInput | string
    dateTimeStart?: StringFieldUpdateOperationsInput | string
    isTotalPriceCustom?: StringFieldUpdateOperationsInput | string
    occurrenceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    reminderStatus?: StringFieldUpdateOperationsInput | string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListUpdateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice?: StringFieldUpdateOperationsInput | string
    totalPricePayed?: StringFieldUpdateOperationsInput | string
    totalReminders?: XOR<ProviderClientReminderConfigsTotalRemindersUpdateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderConfigsUncheckedUpdateManyInput = {
    amountSessions?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dateTimeEnd?: StringFieldUpdateOperationsInput | string
    dateTimeStart?: StringFieldUpdateOperationsInput | string
    isTotalPriceCustom?: StringFieldUpdateOperationsInput | string
    occurrenceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    reminderStatus?: StringFieldUpdateOperationsInput | string
    servicesList?: XOR<ProviderClientReminderConfigsServicesListListUpdateEnvelopeInput, Enumerable<ProviderClientReminderConfigsServicesListCreateInput>>
    totalPrice?: StringFieldUpdateOperationsInput | string
    totalPricePayed?: StringFieldUpdateOperationsInput | string
    totalReminders?: XOR<ProviderClientReminderConfigsTotalRemindersUpdateEnvelopeInput, ProviderClientReminderConfigsTotalRemindersCreateInput>
  }

  export type ProviderClientReminderOrderCreateInput = {
    id?: string
    amount: string
    amountPayed: string
    clientId: string
    dueDate: string
    generateDate: string
    paymentDate: string
    providerClientReminderId: string
    providerId: string
    statusType: string
  }

  export type ProviderClientReminderOrderUncheckedCreateInput = {
    id?: string
    amount: string
    amountPayed: string
    clientId: string
    dueDate: string
    generateDate: string
    paymentDate: string
    providerClientReminderId: string
    providerId: string
    statusType: string
  }

  export type ProviderClientReminderOrderUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    amountPayed?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    generateDate?: StringFieldUpdateOperationsInput | string
    paymentDate?: StringFieldUpdateOperationsInput | string
    providerClientReminderId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientReminderOrderUncheckedUpdateInput = {
    amount?: StringFieldUpdateOperationsInput | string
    amountPayed?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    generateDate?: StringFieldUpdateOperationsInput | string
    paymentDate?: StringFieldUpdateOperationsInput | string
    providerClientReminderId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientReminderOrderCreateManyInput = {
    id?: string
    amount: string
    amountPayed: string
    clientId: string
    dueDate: string
    generateDate: string
    paymentDate: string
    providerClientReminderId: string
    providerId: string
    statusType: string
  }

  export type ProviderClientReminderOrderUpdateManyMutationInput = {
    amount?: StringFieldUpdateOperationsInput | string
    amountPayed?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    generateDate?: StringFieldUpdateOperationsInput | string
    paymentDate?: StringFieldUpdateOperationsInput | string
    providerClientReminderId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientReminderOrderUncheckedUpdateManyInput = {
    amount?: StringFieldUpdateOperationsInput | string
    amountPayed?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    generateDate?: StringFieldUpdateOperationsInput | string
    paymentDate?: StringFieldUpdateOperationsInput | string
    providerClientReminderId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersCreateInput = {
    id?: string
    client: XOR<ProviderClientRemindersClientCreateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend: XOR<ProviderClientRemindersDateTimeSendCreateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider: XOR<ProviderClientRemindersProviderCreateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder: string
    providerClientReminderConfigId: string
  }

  export type ProviderClientRemindersUncheckedCreateInput = {
    id?: string
    client: XOR<ProviderClientRemindersClientCreateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend: XOR<ProviderClientRemindersDateTimeSendCreateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider: XOR<ProviderClientRemindersProviderCreateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder: string
    providerClientReminderConfigId: string
  }

  export type ProviderClientRemindersUpdateInput = {
    client?: XOR<ProviderClientRemindersClientUpdateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend?: XOR<ProviderClientRemindersDateTimeSendUpdateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider?: XOR<ProviderClientRemindersProviderUpdateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder?: StringFieldUpdateOperationsInput | string
    providerClientReminderConfigId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersUncheckedUpdateInput = {
    client?: XOR<ProviderClientRemindersClientUpdateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend?: XOR<ProviderClientRemindersDateTimeSendUpdateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider?: XOR<ProviderClientRemindersProviderUpdateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder?: StringFieldUpdateOperationsInput | string
    providerClientReminderConfigId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersCreateManyInput = {
    id?: string
    client: XOR<ProviderClientRemindersClientCreateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend: XOR<ProviderClientRemindersDateTimeSendCreateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider: XOR<ProviderClientRemindersProviderCreateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder: string
    providerClientReminderConfigId: string
  }

  export type ProviderClientRemindersUpdateManyMutationInput = {
    client?: XOR<ProviderClientRemindersClientUpdateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend?: XOR<ProviderClientRemindersDateTimeSendUpdateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider?: XOR<ProviderClientRemindersProviderUpdateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder?: StringFieldUpdateOperationsInput | string
    providerClientReminderConfigId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersUncheckedUpdateManyInput = {
    client?: XOR<ProviderClientRemindersClientUpdateEnvelopeInput, ProviderClientRemindersClientCreateInput>
    dateTimeSend?: XOR<ProviderClientRemindersDateTimeSendUpdateEnvelopeInput, ProviderClientRemindersDateTimeSendCreateInput>
    provider?: XOR<ProviderClientRemindersProviderUpdateEnvelopeInput, ProviderClientRemindersProviderCreateInput>
    providerClientOrder?: StringFieldUpdateOperationsInput | string
    providerClientReminderConfigId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientsCreateInput = {
    id?: string
    CNPJ: string
    CPF: string
    cellphone: string
    email: string
    isWhatsapp: string
    name: string
    providerId: string
  }

  export type ProviderClientsUncheckedCreateInput = {
    id?: string
    CNPJ: string
    CPF: string
    cellphone: string
    email: string
    isWhatsapp: string
    name: string
    providerId: string
  }

  export type ProviderClientsUpdateInput = {
    CNPJ?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isWhatsapp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientsUncheckedUpdateInput = {
    CNPJ?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isWhatsapp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientsCreateManyInput = {
    id?: string
    CNPJ: string
    CPF: string
    cellphone: string
    email: string
    isWhatsapp: string
    name: string
    providerId: string
  }

  export type ProviderClientsUpdateManyMutationInput = {
    CNPJ?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isWhatsapp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientsUncheckedUpdateManyInput = {
    CNPJ?: StringFieldUpdateOperationsInput | string
    CPF?: StringFieldUpdateOperationsInput | string
    cellphone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    isWhatsapp?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDockCreateInput = {
    id?: string
    accountId: string
    onboardingRequiredData: XOR<ProviderDockOnboardingRequiredDataCreateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId: string
    providerId: string
    registrationId: string
    statusSPD: string
  }

  export type ProviderDockUncheckedCreateInput = {
    id?: string
    accountId: string
    onboardingRequiredData: XOR<ProviderDockOnboardingRequiredDataCreateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId: string
    providerId: string
    registrationId: string
    statusSPD: string
  }

  export type ProviderDockUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    onboardingRequiredData?: XOR<ProviderDockOnboardingRequiredDataUpdateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    statusSPD?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDockUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    onboardingRequiredData?: XOR<ProviderDockOnboardingRequiredDataUpdateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    statusSPD?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDockCreateManyInput = {
    id?: string
    accountId: string
    onboardingRequiredData: XOR<ProviderDockOnboardingRequiredDataCreateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId: string
    providerId: string
    registrationId: string
    statusSPD: string
  }

  export type ProviderDockUpdateManyMutationInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    onboardingRequiredData?: XOR<ProviderDockOnboardingRequiredDataUpdateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    statusSPD?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDockUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    onboardingRequiredData?: XOR<ProviderDockOnboardingRequiredDataUpdateEnvelopeInput, ProviderDockOnboardingRequiredDataCreateInput>
    peopleId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    registrationId?: StringFieldUpdateOperationsInput | string
    statusSPD?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesCreateInput = {
    id?: string
    name: string
    price: number
    priceType: string
    providerId: string
  }

  export type ProviderServicesUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    priceType: string
    providerId: string
  }

  export type ProviderServicesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesCreateManyInput = {
    id?: string
    name: string
    price: number
    priceType: string
    providerId: string
  }

  export type ProviderServicesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderServicesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    priceType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type TypesCreateInput = {
    id?: string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListCreateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListCreateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListCreateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListCreateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesUncheckedCreateInput = {
    id?: string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListCreateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListCreateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListCreateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListCreateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesUpdateInput = {
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListUpdateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListUpdateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListUpdateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListUpdateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesUncheckedUpdateInput = {
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListUpdateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListUpdateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListUpdateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListUpdateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesCreateManyInput = {
    id?: string
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListCreateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListCreateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListCreateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListCreateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesUpdateManyMutationInput = {
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListUpdateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListUpdateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListUpdateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListUpdateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type TypesUncheckedUpdateManyInput = {
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_que_precisar?: XOR<TypesTipoQuePrecisarListUpdateEnvelopeInput, Enumerable<TypesTipoQuePrecisarCreateInput>>
    address?: XOR<TypesAddressListUpdateEnvelopeInput, Enumerable<TypesAddressCreateInput>>
    contact?: XOR<TypesContactListUpdateEnvelopeInput, Enumerable<TypesContactCreateInput>>
    orderStatus?: XOR<TypesOrderStatusListUpdateEnvelopeInput, Enumerable<TypesOrderStatusCreateInput>>
  }

  export type UserCreateInput = {
    id?: string
    accessMethods?: XOR<UserAccessMethodsListCreateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    accessMethods?: XOR<UserAccessMethodsListCreateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId: string
  }

  export type UserUpdateInput = {
    accessMethods?: XOR<UserAccessMethodsListUpdateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    accessMethods?: XOR<UserAccessMethodsListUpdateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    accessMethods?: XOR<UserAccessMethodsListCreateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId: string
  }

  export type UserUpdateManyMutationInput = {
    accessMethods?: XOR<UserAccessMethodsListUpdateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    accessMethods?: XOR<UserAccessMethodsListUpdateEnvelopeInput, Enumerable<UserAccessMethodsCreateInput>>
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ProviderAdressesCompositeListFilter = {
    equals?: Enumerable<ProviderAdressesObjectEqualityInput>
    every?: ProviderAdressesWhereInput
    some?: ProviderAdressesWhereInput
    none?: ProviderAdressesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProviderAdressesObjectEqualityInput = {
    city: string
    complement: string
    country: string
    default: InputJsonValue
    federativeUnit: string
    mailingAddress: InputJsonValue
    neighborhood: string
    number: string
    referencePoint: string
    street: string
    type: string
    zipCode: string
  }

  export type ProviderContactsCompositeListFilter = {
    equals?: Enumerable<ProviderContactsObjectEqualityInput>
    every?: ProviderContactsWhereInput
    some?: ProviderContactsWhereInput
    none?: ProviderContactsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProviderContactsObjectEqualityInput = {
    content: string
    default: InputJsonValue
    type: string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ProviderLegalPersonNullableCompositeFilter = {
    equals?: ProviderLegalPersonObjectEqualityInput | null
    is?: ProviderLegalPersonWhereInput | null
    isNot?: ProviderLegalPersonWhereInput | null
    isSet?: boolean
  }

  export type ProviderLegalPersonObjectEqualityInput = {
    CNPJ: string
    companyName: string
    others: ProviderLegalPersonOthersObjectEqualityInput
    tradingName: string
  }

  export type ProviderPhysicalPersonNullableCompositeFilter = {
    equals?: ProviderPhysicalPersonObjectEqualityInput | null
    is?: ProviderPhysicalPersonWhereInput | null
    isNot?: ProviderPhysicalPersonWhereInput | null
    isSet?: boolean
  }

  export type ProviderPhysicalPersonObjectEqualityInput = {
    CPF: string
    fullName: string
    others: ProviderPhysicalPersonOthersObjectEqualityInput
  }

  export type ProviderAdressesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderContactsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderLegalPersonOrderByInput = {
    CNPJ?: SortOrder
    companyName?: SortOrder
    others?: ProviderLegalPersonOthersOrderByInput
    tradingName?: SortOrder
  }

  export type ProviderPhysicalPersonOrderByInput = {
    CPF?: SortOrder
    fullName?: SortOrder
    others?: ProviderPhysicalPersonOthersOrderByInput
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    hasOnboarding?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    hasOnboarding?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    hasOnboarding?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ProviderClientReminderConfigsServicesListCompositeListFilter = {
    equals?: Enumerable<ProviderClientReminderConfigsServicesListObjectEqualityInput>
    every?: ProviderClientReminderConfigsServicesListWhereInput
    some?: ProviderClientReminderConfigsServicesListWhereInput
    none?: ProviderClientReminderConfigsServicesListWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ProviderClientReminderConfigsServicesListObjectEqualityInput = {
    idService: string
    nameService: string
    price: string
  }

  export type ProviderClientReminderConfigsTotalRemindersCompositeFilter = {
    equals?: ProviderClientReminderConfigsTotalRemindersObjectEqualityInput
    is?: ProviderClientReminderConfigsTotalRemindersWhereInput
    isNot?: ProviderClientReminderConfigsTotalRemindersWhereInput
  }

  export type ProviderClientReminderConfigsTotalRemindersObjectEqualityInput = {
    generated: string
    sended: string
  }

  export type ProviderClientReminderConfigsServicesListOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderClientReminderConfigsTotalRemindersOrderByInput = {
    generated?: SortOrder
    sended?: SortOrder
  }

  export type ProviderClientReminderConfigsCountOrderByAggregateInput = {
    id?: SortOrder
    amountSessions?: SortOrder
    clientId?: SortOrder
    dateTimeEnd?: SortOrder
    dateTimeStart?: SortOrder
    isTotalPriceCustom?: SortOrder
    occurrenceType?: SortOrder
    providerId?: SortOrder
    reminderStatus?: SortOrder
    totalPrice?: SortOrder
    totalPricePayed?: SortOrder
  }

  export type ProviderClientReminderConfigsMaxOrderByAggregateInput = {
    id?: SortOrder
    amountSessions?: SortOrder
    clientId?: SortOrder
    dateTimeEnd?: SortOrder
    dateTimeStart?: SortOrder
    isTotalPriceCustom?: SortOrder
    occurrenceType?: SortOrder
    providerId?: SortOrder
    reminderStatus?: SortOrder
    totalPrice?: SortOrder
    totalPricePayed?: SortOrder
  }

  export type ProviderClientReminderConfigsMinOrderByAggregateInput = {
    id?: SortOrder
    amountSessions?: SortOrder
    clientId?: SortOrder
    dateTimeEnd?: SortOrder
    dateTimeStart?: SortOrder
    isTotalPriceCustom?: SortOrder
    occurrenceType?: SortOrder
    providerId?: SortOrder
    reminderStatus?: SortOrder
    totalPrice?: SortOrder
    totalPricePayed?: SortOrder
  }

  export type ProviderClientReminderOrderCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    amountPayed?: SortOrder
    clientId?: SortOrder
    dueDate?: SortOrder
    generateDate?: SortOrder
    paymentDate?: SortOrder
    providerClientReminderId?: SortOrder
    providerId?: SortOrder
    statusType?: SortOrder
  }

  export type ProviderClientReminderOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    amountPayed?: SortOrder
    clientId?: SortOrder
    dueDate?: SortOrder
    generateDate?: SortOrder
    paymentDate?: SortOrder
    providerClientReminderId?: SortOrder
    providerId?: SortOrder
    statusType?: SortOrder
  }

  export type ProviderClientReminderOrderMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    amountPayed?: SortOrder
    clientId?: SortOrder
    dueDate?: SortOrder
    generateDate?: SortOrder
    paymentDate?: SortOrder
    providerClientReminderId?: SortOrder
    providerId?: SortOrder
    statusType?: SortOrder
  }

  export type ProviderClientRemindersClientCompositeFilter = {
    equals?: ProviderClientRemindersClientObjectEqualityInput
    is?: ProviderClientRemindersClientWhereInput
    isNot?: ProviderClientRemindersClientWhereInput
  }

  export type ProviderClientRemindersClientObjectEqualityInput = {
    email: string
    id: string
    name: string
    whatsapp: string
  }

  export type ProviderClientRemindersDateTimeSendCompositeFilter = {
    equals?: ProviderClientRemindersDateTimeSendObjectEqualityInput
    is?: ProviderClientRemindersDateTimeSendWhereInput
    isNot?: ProviderClientRemindersDateTimeSendWhereInput
  }

  export type ProviderClientRemindersDateTimeSendObjectEqualityInput = {
    firstAttempt: string
    secondAttempt: string
    thirdAttempt: string
  }

  export type ProviderClientRemindersProviderCompositeFilter = {
    equals?: ProviderClientRemindersProviderObjectEqualityInput
    is?: ProviderClientRemindersProviderWhereInput
    isNot?: ProviderClientRemindersProviderWhereInput
  }

  export type ProviderClientRemindersProviderObjectEqualityInput = {
    contact: string
    id: string
    name: string
  }

  export type ProviderClientRemindersClientOrderByInput = {
    email?: SortOrder
    id?: SortOrder
    name?: SortOrder
    whatsapp?: SortOrder
  }

  export type ProviderClientRemindersDateTimeSendOrderByInput = {
    firstAttempt?: SortOrder
    secondAttempt?: SortOrder
    thirdAttempt?: SortOrder
  }

  export type ProviderClientRemindersProviderOrderByInput = {
    contact?: SortOrder
    id?: SortOrder
    name?: SortOrder
  }

  export type ProviderClientRemindersCountOrderByAggregateInput = {
    id?: SortOrder
    providerClientOrder?: SortOrder
    providerClientReminderConfigId?: SortOrder
  }

  export type ProviderClientRemindersMaxOrderByAggregateInput = {
    id?: SortOrder
    providerClientOrder?: SortOrder
    providerClientReminderConfigId?: SortOrder
  }

  export type ProviderClientRemindersMinOrderByAggregateInput = {
    id?: SortOrder
    providerClientOrder?: SortOrder
    providerClientReminderConfigId?: SortOrder
  }

  export type ProviderClientsCountOrderByAggregateInput = {
    id?: SortOrder
    CNPJ?: SortOrder
    CPF?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    isWhatsapp?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    CNPJ?: SortOrder
    CPF?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    isWhatsapp?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderClientsMinOrderByAggregateInput = {
    id?: SortOrder
    CNPJ?: SortOrder
    CPF?: SortOrder
    cellphone?: SortOrder
    email?: SortOrder
    isWhatsapp?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderDockOnboardingRequiredDataCompositeFilter = {
    equals?: ProviderDockOnboardingRequiredDataObjectEqualityInput
    is?: ProviderDockOnboardingRequiredDataWhereInput
    isNot?: ProviderDockOnboardingRequiredDataWhereInput
  }

  export type ProviderDockOnboardingRequiredDataObjectEqualityInput = {
    address: string
    birthDate: string
    companyName: string
    deviceIdentification: string
    document: string
    dueDate: string
    fatherName: string
    federativeUnit: string
    gender: string
    idBusinessSource: string
    idNationality: string
    idNumber: string
    idProduct: string
    idProfession: string
    identityIssuingEntity: string
    incomeValue: string
    isPep: string
    isPepSince: string
    issuingDateIdentity: string
    motherName: string
    name: string
    phone: string
    printedName: string
    termsAndConditionsTokens: string
  }

  export type ProviderDockOnboardingRequiredDataOrderByInput = {
    address?: SortOrder
    birthDate?: SortOrder
    companyName?: SortOrder
    deviceIdentification?: SortOrder
    document?: SortOrder
    dueDate?: SortOrder
    fatherName?: SortOrder
    federativeUnit?: SortOrder
    gender?: SortOrder
    idBusinessSource?: SortOrder
    idNationality?: SortOrder
    idNumber?: SortOrder
    idProduct?: SortOrder
    idProfession?: SortOrder
    identityIssuingEntity?: SortOrder
    incomeValue?: SortOrder
    isPep?: SortOrder
    isPepSince?: SortOrder
    issuingDateIdentity?: SortOrder
    motherName?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    printedName?: SortOrder
    termsAndConditionsTokens?: SortOrder
  }

  export type ProviderDockCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    peopleId?: SortOrder
    providerId?: SortOrder
    registrationId?: SortOrder
    statusSPD?: SortOrder
  }

  export type ProviderDockMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    peopleId?: SortOrder
    providerId?: SortOrder
    registrationId?: SortOrder
    statusSPD?: SortOrder
  }

  export type ProviderDockMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    peopleId?: SortOrder
    providerId?: SortOrder
    registrationId?: SortOrder
    statusSPD?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type ProviderServicesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderServicesAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProviderServicesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderServicesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    priceType?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderServicesSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type TypesTipoQuePrecisarCompositeListFilter = {
    equals?: Enumerable<TypesTipoQuePrecisarObjectEqualityInput>
    every?: TypesTipoQuePrecisarWhereInput
    some?: TypesTipoQuePrecisarWhereInput
    none?: TypesTipoQuePrecisarWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type TypesTipoQuePrecisarObjectEqualityInput = {
    code: string
    name: string
  }

  export type TypesAddressCompositeListFilter = {
    equals?: Enumerable<TypesAddressObjectEqualityInput>
    every?: TypesAddressWhereInput
    some?: TypesAddressWhereInput
    none?: TypesAddressWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type TypesAddressObjectEqualityInput = {
    code: string
    name: string
  }

  export type TypesContactCompositeListFilter = {
    equals?: Enumerable<TypesContactObjectEqualityInput>
    every?: TypesContactWhereInput
    some?: TypesContactWhereInput
    none?: TypesContactWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type TypesContactObjectEqualityInput = {
    code: string
    name: string
  }

  export type TypesOrderStatusCompositeListFilter = {
    equals?: Enumerable<TypesOrderStatusObjectEqualityInput>
    every?: TypesOrderStatusWhereInput
    some?: TypesOrderStatusWhereInput
    none?: TypesOrderStatusWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type TypesOrderStatusObjectEqualityInput = {
    code: string
    name: string
  }

  export type TypesTipoQuePrecisarOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TypesAddressOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TypesContactOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TypesOrderStatusOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type TypesCountOrderByAggregateInput = {
    id?: SortOrder
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: SortOrder
  }

  export type TypesMaxOrderByAggregateInput = {
    id?: SortOrder
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: SortOrder
  }

  export type TypesMinOrderByAggregateInput = {
    id?: SortOrder
    Essa_tabela___apenas_sabe_o_que_significa_cada_codigo_o_tipo_usado_em_outras_tabelas?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type UserAccessMethodsCompositeListFilter = {
    equals?: Enumerable<UserAccessMethodsObjectEqualityInput>
    every?: UserAccessMethodsWhereInput
    some?: UserAccessMethodsWhereInput
    none?: UserAccessMethodsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type UserAccessMethodsObjectEqualityInput = {
    campo?: string | null
    id?: string | null
    password?: string | null
    type: string
  }

  export type UserAccessMethodsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
  }

  export type ProviderAdressesListCreateEnvelopeInput = {
    set?: Enumerable<ProviderAdressesCreateInput>
  }

  export type ProviderAdressesCreateInput = {
    city: string
    complement: string
    country: string
    default: InputJsonValue
    federativeUnit: string
    mailingAddress: InputJsonValue
    neighborhood: string
    number: string
    referencePoint: string
    street: string
    type: string
    zipCode: string
  }

  export type ProviderContactsListCreateEnvelopeInput = {
    set?: Enumerable<ProviderContactsCreateInput>
  }

  export type ProviderContactsCreateInput = {
    content: string
    default: InputJsonValue
    type: string
  }

  export type ProviderLegalPersonNullableCreateEnvelopeInput = {
    set?: ProviderLegalPersonCreateInput | null
  }

  export type ProviderLegalPersonCreateInput = {
    CNPJ: string
    companyName: string
    others: ProviderLegalPersonOthersCreateInput
    tradingName: string
  }

  export type ProviderPhysicalPersonNullableCreateEnvelopeInput = {
    set?: ProviderPhysicalPersonCreateInput | null
  }

  export type ProviderPhysicalPersonCreateInput = {
    CPF: string
    fullName: string
    others: ProviderPhysicalPersonOthersCreateInput
  }

  export type ProviderAdressesListUpdateEnvelopeInput = {
    set?: Enumerable<ProviderAdressesCreateInput>
    push?: Enumerable<ProviderAdressesCreateInput>
    updateMany?: ProviderAdressesUpdateManyInput
    deleteMany?: ProviderAdressesDeleteManyInput
  }

  export type ProviderContactsListUpdateEnvelopeInput = {
    set?: Enumerable<ProviderContactsCreateInput>
    push?: Enumerable<ProviderContactsCreateInput>
    updateMany?: ProviderContactsUpdateManyInput
    deleteMany?: ProviderContactsDeleteManyInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProviderLegalPersonNullableUpdateEnvelopeInput = {
    set?: ProviderLegalPersonCreateInput | null
    upsert?: ProviderLegalPersonUpsertInput
    unset?: boolean
  }

  export type ProviderPhysicalPersonNullableUpdateEnvelopeInput = {
    set?: ProviderPhysicalPersonCreateInput | null
    upsert?: ProviderPhysicalPersonUpsertInput
    unset?: boolean
  }

  export type ProviderClientReminderConfigsServicesListListCreateEnvelopeInput = {
    set?: Enumerable<ProviderClientReminderConfigsServicesListCreateInput>
  }

  export type ProviderClientReminderConfigsServicesListCreateInput = {
    idService: string
    nameService: string
    price: string
  }

  export type ProviderClientReminderConfigsTotalRemindersCreateEnvelopeInput = {
    set?: ProviderClientReminderConfigsTotalRemindersCreateInput
  }

  export type ProviderClientReminderConfigsTotalRemindersCreateInput = {
    generated: string
    sended: string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProviderClientReminderConfigsServicesListListUpdateEnvelopeInput = {
    set?: Enumerable<ProviderClientReminderConfigsServicesListCreateInput>
    push?: Enumerable<ProviderClientReminderConfigsServicesListCreateInput>
    updateMany?: ProviderClientReminderConfigsServicesListUpdateManyInput
    deleteMany?: ProviderClientReminderConfigsServicesListDeleteManyInput
  }

  export type ProviderClientReminderConfigsTotalRemindersUpdateEnvelopeInput = {
    set?: ProviderClientReminderConfigsTotalRemindersCreateInput
    update?: ProviderClientReminderConfigsTotalRemindersUpdateInput
  }

  export type ProviderClientRemindersClientCreateEnvelopeInput = {
    set?: ProviderClientRemindersClientCreateInput
  }

  export type ProviderClientRemindersClientCreateInput = {
    email: string
    id: string
    name: string
    whatsapp: string
  }

  export type ProviderClientRemindersDateTimeSendCreateEnvelopeInput = {
    set?: ProviderClientRemindersDateTimeSendCreateInput
  }

  export type ProviderClientRemindersDateTimeSendCreateInput = {
    firstAttempt: string
    secondAttempt: string
    thirdAttempt: string
  }

  export type ProviderClientRemindersProviderCreateEnvelopeInput = {
    set?: ProviderClientRemindersProviderCreateInput
  }

  export type ProviderClientRemindersProviderCreateInput = {
    contact: string
    id: string
    name: string
  }

  export type ProviderClientRemindersClientUpdateEnvelopeInput = {
    set?: ProviderClientRemindersClientCreateInput
    update?: ProviderClientRemindersClientUpdateInput
  }

  export type ProviderClientRemindersDateTimeSendUpdateEnvelopeInput = {
    set?: ProviderClientRemindersDateTimeSendCreateInput
    update?: ProviderClientRemindersDateTimeSendUpdateInput
  }

  export type ProviderClientRemindersProviderUpdateEnvelopeInput = {
    set?: ProviderClientRemindersProviderCreateInput
    update?: ProviderClientRemindersProviderUpdateInput
  }

  export type ProviderDockOnboardingRequiredDataCreateEnvelopeInput = {
    set?: ProviderDockOnboardingRequiredDataCreateInput
  }

  export type ProviderDockOnboardingRequiredDataCreateInput = {
    address: string
    birthDate: string
    companyName: string
    deviceIdentification: string
    document: string
    dueDate: string
    fatherName: string
    federativeUnit: string
    gender: string
    idBusinessSource: string
    idNationality: string
    idNumber: string
    idProduct: string
    idProfession: string
    identityIssuingEntity: string
    incomeValue: string
    isPep: string
    isPepSince: string
    issuingDateIdentity: string
    motherName: string
    name: string
    phone: string
    printedName: string
    termsAndConditionsTokens: string
  }

  export type ProviderDockOnboardingRequiredDataUpdateEnvelopeInput = {
    set?: ProviderDockOnboardingRequiredDataCreateInput
    update?: ProviderDockOnboardingRequiredDataUpdateInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TypesTipoQuePrecisarListCreateEnvelopeInput = {
    set?: Enumerable<TypesTipoQuePrecisarCreateInput>
  }

  export type TypesTipoQuePrecisarCreateInput = {
    code: string
    name: string
  }

  export type TypesAddressListCreateEnvelopeInput = {
    set?: Enumerable<TypesAddressCreateInput>
  }

  export type TypesAddressCreateInput = {
    code: string
    name: string
  }

  export type TypesContactListCreateEnvelopeInput = {
    set?: Enumerable<TypesContactCreateInput>
  }

  export type TypesContactCreateInput = {
    code: string
    name: string
  }

  export type TypesOrderStatusListCreateEnvelopeInput = {
    set?: Enumerable<TypesOrderStatusCreateInput>
  }

  export type TypesOrderStatusCreateInput = {
    code: string
    name: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TypesTipoQuePrecisarListUpdateEnvelopeInput = {
    set?: Enumerable<TypesTipoQuePrecisarCreateInput>
    push?: Enumerable<TypesTipoQuePrecisarCreateInput>
    updateMany?: TypesTipoQuePrecisarUpdateManyInput
    deleteMany?: TypesTipoQuePrecisarDeleteManyInput
  }

  export type TypesAddressListUpdateEnvelopeInput = {
    set?: Enumerable<TypesAddressCreateInput>
    push?: Enumerable<TypesAddressCreateInput>
    updateMany?: TypesAddressUpdateManyInput
    deleteMany?: TypesAddressDeleteManyInput
  }

  export type TypesContactListUpdateEnvelopeInput = {
    set?: Enumerable<TypesContactCreateInput>
    push?: Enumerable<TypesContactCreateInput>
    updateMany?: TypesContactUpdateManyInput
    deleteMany?: TypesContactDeleteManyInput
  }

  export type TypesOrderStatusListUpdateEnvelopeInput = {
    set?: Enumerable<TypesOrderStatusCreateInput>
    push?: Enumerable<TypesOrderStatusCreateInput>
    updateMany?: TypesOrderStatusUpdateManyInput
    deleteMany?: TypesOrderStatusDeleteManyInput
  }

  export type UserAccessMethodsListCreateEnvelopeInput = {
    set?: Enumerable<UserAccessMethodsCreateInput>
  }

  export type UserAccessMethodsCreateInput = {
    campo?: string | null
    id?: string | null
    password?: string | null
    type: string
  }

  export type UserAccessMethodsListUpdateEnvelopeInput = {
    set?: Enumerable<UserAccessMethodsCreateInput>
    push?: Enumerable<UserAccessMethodsCreateInput>
    updateMany?: UserAccessMethodsUpdateManyInput
    deleteMany?: UserAccessMethodsDeleteManyInput
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ProviderAdressesWhereInput = {
    AND?: Enumerable<ProviderAdressesWhereInput>
    OR?: Enumerable<ProviderAdressesWhereInput>
    NOT?: Enumerable<ProviderAdressesWhereInput>
    city?: StringFilter | string
    complement?: StringFilter | string
    country?: StringFilter | string
    default?: JsonFilter
    federativeUnit?: StringFilter | string
    mailingAddress?: JsonFilter
    neighborhood?: StringFilter | string
    number?: StringFilter | string
    referencePoint?: StringFilter | string
    street?: StringFilter | string
    type?: StringFilter | string
    zipCode?: StringFilter | string
  }

  export type ProviderContactsWhereInput = {
    AND?: Enumerable<ProviderContactsWhereInput>
    OR?: Enumerable<ProviderContactsWhereInput>
    NOT?: Enumerable<ProviderContactsWhereInput>
    content?: StringFilter | string
    default?: JsonFilter
    type?: StringFilter | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ProviderLegalPersonWhereInput = {
    AND?: Enumerable<ProviderLegalPersonWhereInput>
    OR?: Enumerable<ProviderLegalPersonWhereInput>
    NOT?: Enumerable<ProviderLegalPersonWhereInput>
    CNPJ?: StringFilter | string
    companyName?: StringFilter | string
    others?: XOR<ProviderLegalPersonOthersCompositeFilter, ProviderLegalPersonOthersObjectEqualityInput>
    tradingName?: StringFilter | string
  }

  export type ProviderLegalPersonOthersObjectEqualityInput = {
    etc?: string | null
    legalStatus: string
    openingCompany: string
  }

  export type ProviderPhysicalPersonWhereInput = {
    AND?: Enumerable<ProviderPhysicalPersonWhereInput>
    OR?: Enumerable<ProviderPhysicalPersonWhereInput>
    NOT?: Enumerable<ProviderPhysicalPersonWhereInput>
    CPF?: StringFilter | string
    fullName?: StringFilter | string
    others?: XOR<ProviderPhysicalPersonOthersCompositeFilter, ProviderPhysicalPersonOthersObjectEqualityInput>
  }

  export type ProviderPhysicalPersonOthersObjectEqualityInput = {
    birthDate: string
    etc?: string | null
    fatherName?: string | null
    gender: string
    motherName?: string | null
  }

  export type ProviderLegalPersonOthersOrderByInput = {
    etc?: SortOrder
    legalStatus?: SortOrder
    openingCompany?: SortOrder
  }

  export type ProviderPhysicalPersonOthersOrderByInput = {
    birthDate?: SortOrder
    etc?: SortOrder
    fatherName?: SortOrder
    gender?: SortOrder
    motherName?: SortOrder
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ProviderClientReminderConfigsServicesListWhereInput = {
    AND?: Enumerable<ProviderClientReminderConfigsServicesListWhereInput>
    OR?: Enumerable<ProviderClientReminderConfigsServicesListWhereInput>
    NOT?: Enumerable<ProviderClientReminderConfigsServicesListWhereInput>
    idService?: StringFilter | string
    nameService?: StringFilter | string
    price?: StringFilter | string
  }

  export type ProviderClientReminderConfigsTotalRemindersWhereInput = {
    AND?: Enumerable<ProviderClientReminderConfigsTotalRemindersWhereInput>
    OR?: Enumerable<ProviderClientReminderConfigsTotalRemindersWhereInput>
    NOT?: Enumerable<ProviderClientReminderConfigsTotalRemindersWhereInput>
    generated?: StringFilter | string
    sended?: StringFilter | string
  }

  export type ProviderClientRemindersClientWhereInput = {
    AND?: Enumerable<ProviderClientRemindersClientWhereInput>
    OR?: Enumerable<ProviderClientRemindersClientWhereInput>
    NOT?: Enumerable<ProviderClientRemindersClientWhereInput>
    email?: StringFilter | string
    id?: StringFilter | string
    name?: StringFilter | string
    whatsapp?: StringFilter | string
  }

  export type ProviderClientRemindersDateTimeSendWhereInput = {
    AND?: Enumerable<ProviderClientRemindersDateTimeSendWhereInput>
    OR?: Enumerable<ProviderClientRemindersDateTimeSendWhereInput>
    NOT?: Enumerable<ProviderClientRemindersDateTimeSendWhereInput>
    firstAttempt?: StringFilter | string
    secondAttempt?: StringFilter | string
    thirdAttempt?: StringFilter | string
  }

  export type ProviderClientRemindersProviderWhereInput = {
    AND?: Enumerable<ProviderClientRemindersProviderWhereInput>
    OR?: Enumerable<ProviderClientRemindersProviderWhereInput>
    NOT?: Enumerable<ProviderClientRemindersProviderWhereInput>
    contact?: StringFilter | string
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type ProviderDockOnboardingRequiredDataWhereInput = {
    AND?: Enumerable<ProviderDockOnboardingRequiredDataWhereInput>
    OR?: Enumerable<ProviderDockOnboardingRequiredDataWhereInput>
    NOT?: Enumerable<ProviderDockOnboardingRequiredDataWhereInput>
    address?: StringFilter | string
    birthDate?: StringFilter | string
    companyName?: StringFilter | string
    deviceIdentification?: StringFilter | string
    document?: StringFilter | string
    dueDate?: StringFilter | string
    fatherName?: StringFilter | string
    federativeUnit?: StringFilter | string
    gender?: StringFilter | string
    idBusinessSource?: StringFilter | string
    idNationality?: StringFilter | string
    idNumber?: StringFilter | string
    idProduct?: StringFilter | string
    idProfession?: StringFilter | string
    identityIssuingEntity?: StringFilter | string
    incomeValue?: StringFilter | string
    isPep?: StringFilter | string
    isPepSince?: StringFilter | string
    issuingDateIdentity?: StringFilter | string
    motherName?: StringFilter | string
    name?: StringFilter | string
    phone?: StringFilter | string
    printedName?: StringFilter | string
    termsAndConditionsTokens?: StringFilter | string
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type TypesTipoQuePrecisarWhereInput = {
    AND?: Enumerable<TypesTipoQuePrecisarWhereInput>
    OR?: Enumerable<TypesTipoQuePrecisarWhereInput>
    NOT?: Enumerable<TypesTipoQuePrecisarWhereInput>
    code?: StringFilter | string
    name?: StringFilter | string
  }

  export type TypesAddressWhereInput = {
    AND?: Enumerable<TypesAddressWhereInput>
    OR?: Enumerable<TypesAddressWhereInput>
    NOT?: Enumerable<TypesAddressWhereInput>
    code?: StringFilter | string
    name?: StringFilter | string
  }

  export type TypesContactWhereInput = {
    AND?: Enumerable<TypesContactWhereInput>
    OR?: Enumerable<TypesContactWhereInput>
    NOT?: Enumerable<TypesContactWhereInput>
    code?: StringFilter | string
    name?: StringFilter | string
  }

  export type TypesOrderStatusWhereInput = {
    AND?: Enumerable<TypesOrderStatusWhereInput>
    OR?: Enumerable<TypesOrderStatusWhereInput>
    NOT?: Enumerable<TypesOrderStatusWhereInput>
    code?: StringFilter | string
    name?: StringFilter | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type UserAccessMethodsWhereInput = {
    AND?: Enumerable<UserAccessMethodsWhereInput>
    OR?: Enumerable<UserAccessMethodsWhereInput>
    NOT?: Enumerable<UserAccessMethodsWhereInput>
    campo?: StringNullableFilter | string | null
    id?: StringNullableFilter | string | null
    password?: StringNullableFilter | string | null
    type?: StringFilter | string
  }

  export type ProviderLegalPersonOthersCreateInput = {
    etc?: string | null
    legalStatus: string
    openingCompany: string
  }

  export type ProviderPhysicalPersonOthersCreateInput = {
    birthDate: string
    etc?: string | null
    fatherName?: string | null
    gender: string
    motherName?: string | null
  }

  export type ProviderAdressesUpdateManyInput = {
    where: ProviderAdressesWhereInput
    data: ProviderAdressesUpdateInput
  }

  export type ProviderAdressesDeleteManyInput = {
    where: ProviderAdressesWhereInput
  }

  export type ProviderContactsUpdateManyInput = {
    where: ProviderContactsWhereInput
    data: ProviderContactsUpdateInput
  }

  export type ProviderContactsDeleteManyInput = {
    where: ProviderContactsWhereInput
  }

  export type ProviderLegalPersonUpsertInput = {
    set: ProviderLegalPersonCreateInput | null
    update: ProviderLegalPersonUpdateInput
  }

  export type ProviderPhysicalPersonUpsertInput = {
    set: ProviderPhysicalPersonCreateInput | null
    update: ProviderPhysicalPersonUpdateInput
  }

  export type ProviderClientReminderConfigsServicesListUpdateManyInput = {
    where: ProviderClientReminderConfigsServicesListWhereInput
    data: ProviderClientReminderConfigsServicesListUpdateInput
  }

  export type ProviderClientReminderConfigsServicesListDeleteManyInput = {
    where: ProviderClientReminderConfigsServicesListWhereInput
  }

  export type ProviderClientReminderConfigsTotalRemindersUpdateInput = {
    generated?: StringFieldUpdateOperationsInput | string
    sended?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersClientUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersDateTimeSendUpdateInput = {
    firstAttempt?: StringFieldUpdateOperationsInput | string
    secondAttempt?: StringFieldUpdateOperationsInput | string
    thirdAttempt?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderClientRemindersProviderUpdateInput = {
    contact?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderDockOnboardingRequiredDataUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    birthDate?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    deviceIdentification?: StringFieldUpdateOperationsInput | string
    document?: StringFieldUpdateOperationsInput | string
    dueDate?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    federativeUnit?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    idBusinessSource?: StringFieldUpdateOperationsInput | string
    idNationality?: StringFieldUpdateOperationsInput | string
    idNumber?: StringFieldUpdateOperationsInput | string
    idProduct?: StringFieldUpdateOperationsInput | string
    idProfession?: StringFieldUpdateOperationsInput | string
    identityIssuingEntity?: StringFieldUpdateOperationsInput | string
    incomeValue?: StringFieldUpdateOperationsInput | string
    isPep?: StringFieldUpdateOperationsInput | string
    isPepSince?: StringFieldUpdateOperationsInput | string
    issuingDateIdentity?: StringFieldUpdateOperationsInput | string
    motherName?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    printedName?: StringFieldUpdateOperationsInput | string
    termsAndConditionsTokens?: StringFieldUpdateOperationsInput | string
  }

  export type TypesTipoQuePrecisarUpdateManyInput = {
    where: TypesTipoQuePrecisarWhereInput
    data: TypesTipoQuePrecisarUpdateInput
  }

  export type TypesTipoQuePrecisarDeleteManyInput = {
    where: TypesTipoQuePrecisarWhereInput
  }

  export type TypesAddressUpdateManyInput = {
    where: TypesAddressWhereInput
    data: TypesAddressUpdateInput
  }

  export type TypesAddressDeleteManyInput = {
    where: TypesAddressWhereInput
  }

  export type TypesContactUpdateManyInput = {
    where: TypesContactWhereInput
    data: TypesContactUpdateInput
  }

  export type TypesContactDeleteManyInput = {
    where: TypesContactWhereInput
  }

  export type TypesOrderStatusUpdateManyInput = {
    where: TypesOrderStatusWhereInput
    data: TypesOrderStatusUpdateInput
  }

  export type TypesOrderStatusDeleteManyInput = {
    where: TypesOrderStatusWhereInput
  }

  export type UserAccessMethodsUpdateManyInput = {
    where: UserAccessMethodsWhereInput
    data: UserAccessMethodsUpdateInput
  }

  export type UserAccessMethodsDeleteManyInput = {
    where: UserAccessMethodsWhereInput
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type ProviderLegalPersonOthersCompositeFilter = {
    equals?: ProviderLegalPersonOthersObjectEqualityInput
    is?: ProviderLegalPersonOthersWhereInput
    isNot?: ProviderLegalPersonOthersWhereInput
  }

  export type ProviderPhysicalPersonOthersCompositeFilter = {
    equals?: ProviderPhysicalPersonOthersObjectEqualityInput
    is?: ProviderPhysicalPersonOthersWhereInput
    isNot?: ProviderPhysicalPersonOthersWhereInput
  }

  export type ProviderAdressesUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    complement?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    default?: InputJsonValue | InputJsonValue
    federativeUnit?: StringFieldUpdateOperationsInput | string
    mailingAddress?: InputJsonValue | InputJsonValue
    neighborhood?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    referencePoint?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderContactsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    default?: InputJsonValue | InputJsonValue
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderLegalPersonUpdateInput = {
    CNPJ?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    others?: XOR<ProviderLegalPersonOthersUpdateEnvelopeInput, ProviderLegalPersonOthersCreateInput>
    tradingName?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderPhysicalPersonUpdateInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    others?: XOR<ProviderPhysicalPersonOthersUpdateEnvelopeInput, ProviderPhysicalPersonOthersCreateInput>
  }

  export type ProviderClientReminderConfigsServicesListUpdateInput = {
    idService?: StringFieldUpdateOperationsInput | string
    nameService?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
  }

  export type TypesTipoQuePrecisarUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypesAddressUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypesContactUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TypesOrderStatusUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserAccessMethodsUpdateInput = {
    campo?: NullableStringFieldUpdateOperationsInput | string | null
    id?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderLegalPersonOthersWhereInput = {
    AND?: Enumerable<ProviderLegalPersonOthersWhereInput>
    OR?: Enumerable<ProviderLegalPersonOthersWhereInput>
    NOT?: Enumerable<ProviderLegalPersonOthersWhereInput>
    etc?: StringNullableFilter | string | null
    legalStatus?: StringFilter | string
    openingCompany?: StringFilter | string
  }

  export type ProviderPhysicalPersonOthersWhereInput = {
    AND?: Enumerable<ProviderPhysicalPersonOthersWhereInput>
    OR?: Enumerable<ProviderPhysicalPersonOthersWhereInput>
    NOT?: Enumerable<ProviderPhysicalPersonOthersWhereInput>
    birthDate?: StringFilter | string
    etc?: StringNullableFilter | string | null
    fatherName?: StringNullableFilter | string | null
    gender?: StringFilter | string
    motherName?: StringNullableFilter | string | null
  }

  export type ProviderLegalPersonOthersUpdateEnvelopeInput = {
    set?: ProviderLegalPersonOthersCreateInput
    update?: ProviderLegalPersonOthersUpdateInput
  }

  export type ProviderPhysicalPersonOthersUpdateEnvelopeInput = {
    set?: ProviderPhysicalPersonOthersCreateInput
    update?: ProviderPhysicalPersonOthersUpdateInput
  }

  export type ProviderLegalPersonOthersUpdateInput = {
    etc?: NullableStringFieldUpdateOperationsInput | string | null
    legalStatus?: StringFieldUpdateOperationsInput | string
    openingCompany?: StringFieldUpdateOperationsInput | string
  }

  export type ProviderPhysicalPersonOthersUpdateInput = {
    birthDate?: StringFieldUpdateOperationsInput | string
    etc?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: StringFieldUpdateOperationsInput | string
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
import EventEmitter = NodeJS.EventEmitter;

import {IDescribeFn, IDescribeOpts, TDescribeHook} from "./describe";
import {ISumanConfig, ISumanOpts} from "./global";
import {DefineObjectContext} from 'suman/lib/test-suite-helpers/define-options-classes';
import {ITestSuite} from "./test-suite";

export interface IIntegrantsMessage {
  data: string,
  info: string,
  val: string
}

export interface ICreateOpts {
  delay: boolean,
  skip: boolean,
  only: boolean
}

// we don't know any of the args because of dependency injection
export type TCreateHook = (b: ITestSuite, ...args: any[]) => void;

export interface ISumanModuleExtended extends NodeModule {
  sumanInitted?: boolean
}

export interface IInitOpts {
  __expectedExitCode?: number;
  pre?: Array<string>;
  integrants?: Array<string>;
  series?: boolean;
  timeout?: number;
  post?: Array<any>;
  iocData?: IIoCData;
  ioc?: Object;
}

export interface IIoCData {
  $pre?: Object;
  [key: string]: any;
}

export type TDefineCallback = (o: DefineObjectContext) => void;

export type TDefine = (desc?: string | TDefineCallback, f?: TDefineCallback) => DefineObjectContext;

export interface IInitRet {
  Test: IInitRet,
  create: IStartCreate
  file: string,
  parent: string,
  define: TDefine
}

export type TArray = Array<string | IDescribeOpts | TCreateHook>;

export interface IStartCreate1 {
  (desc: string, opts: IDescribeOpts, arr: TArray): void;
  tooLate?: boolean;
}

export interface IStartCreate2 {
  (opts: IDescribeOpts, arr: TArray): void;
  tooLate?: boolean;
}

export interface IStartCreate3 {
  (opts: IDescribeOpts, fn: TCreateHook): void;
  tooLate?: boolean;
}

export interface IStartCreate4 {
  (arr: Array<string | IDescribeOpts | TCreateHook>): void;
  tooLate?: boolean;
}

export interface IStartCreate5 {
  (fn: TCreateHook): void;
  tooLate?: boolean;
}

export interface IStartCreate6 {
  (desc: string, arr: TArray): void;
  tooLate?: boolean;
}

export interface IStartCreate7 {
  (desc: string, fn: TCreateHook): void;
  tooLate?: boolean;
}

export type IStartCreateOld = IStartCreate1 | IStartCreate2 | IStartCreate3 |
  IStartCreate4 | IStartCreate5 | IStartCreate6 | IStartCreate7;

export interface IStartCreate {
  (desc: string | IDescribeOpts | TCreateHook | TArray,
   opts?: IDescribeOpts | TCreateHook | TArray,
   arr?: TArray | TCreateHook): void;
  tooLate?: boolean;
}

export interface IInitFn {
  (module: ISumanModuleExtended, opts?: IInitOpts, sumanOptsOverride?: Partial<ISumanOpts>, sumanConfigOverride?: Partial<ISumanConfig>): IInitRet;
}

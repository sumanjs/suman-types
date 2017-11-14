import EventEmitter = NodeJS.EventEmitter;

import {IDescribeFn, IDescribeOpts, TDescribeHook} from "./describe";
import {ISumanConfig, ISumanOpts} from "./global";

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
export type TCreateHook = (...args: any[]) => void;

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

export interface IInitRet {
  Test: IInitRet,
  create: IStartCreate
  file: string,
  parent: string
}

export interface IStartCreate {
  (desc?: string, opts?: IDescribeOpts, arr?: Array<string | IDescribeOpts | TCreateHook>, fn?: TCreateHook): void;

  tooLate?: boolean;
}

export interface IInitFn {
  (module: ISumanModuleExtended, opts?: IInitOpts, sumanOptsOverride?: Partial<ISumanOpts>, sumanConfigOverride?: Partial<ISumanConfig>): IInitRet;
}

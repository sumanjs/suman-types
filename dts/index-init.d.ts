import EventEmitter = NodeJS.EventEmitter;

import {IDescribeFn, IDescribeOpts, TDescribeHook} from "./describe";
import {ISumanConfig} from "./global";

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

export type TCreateHook = (...args: any[]) => void;


export interface ISumanModuleExtended extends NodeModule {
  testSuiteQueue?: Array<Function>,
  sumanInitted?: boolean
}

export interface IInitOpts {
  export?: boolean;
  __expectedExitCode?: number;
  pre?: Array<string>;
  integrants?: Array<string>;
  series?: boolean;
  writable?: EventEmitter;
  timeout?: number;
  post?: Array<any>;
  interface?: string;
  iocData?: IIoCData;
  ioc?: Object;
}

export interface IIoCData {
  $pre?: Object;
  [key: string]: any;
}

export declare type TConfigOverride = Partial<ISumanConfig>;

export interface IStartCreate {
  (desc: string, opts: IDescribeOpts, arr?: Array<string | TDescribeHook>, fn?: TCreateHook): void;
  delay?: IDescribeFn;
  skip?: IDescribeFn;
  only?: IDescribeFn;
}
export interface IInit {
  (module: ISumanModuleExtended, opts?: IInitOpts, confOverride?: TConfigOverride): IStartCreate;
  $ingletonian?: any;
  tooLate?: boolean;
}

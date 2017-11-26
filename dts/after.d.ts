import {IHookParam, IOnceHookObj} from "./test-suite";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import EventEmitter = NodeJS.EventEmitter;
import {DefineObjectAllHook} from 'suman/lib/test-suite-helpers/define-options-classes';

type SubsetOfAfterOpts = Partial<IAfterOpts>;
type IAfterFnArgTypes = SubsetOfAfterOpts | TAfterHook | Array<string | SubsetOfAfterOpts | TAfterHook>;

export type TDefineCallback = (o: DefineObjectAllHook) => void;
export type TDefine = (desc?: string | TDefineCallback, f?: TDefineCallback) => DefineObjectAllHook;

export interface IAfterFn {
  // (desc?: string; opts?: IAfterOpts; fn?: TAfterHook): void;
  (name: string, ...args: IAfterFnArgTypes[]): void;
  cb?: IAfterFn,
  skip?: IAfterFn,
  always?: IAfterFn,
  last?: IAfterFn,
  define?: TDefine
}

export interface IAfterObj extends IOnceHookObj {
  last: boolean;
  always: boolean;
}

export interface IAfterOpts {
  __preParsed?: boolean;
  skip: boolean;
  timeout: number;
  fatal: boolean;
  cb: boolean;
  throws: RegExp;
  plan: number;
  last: boolean;
  always: boolean;
}

export type AfterHookCallbackMode = (h: IHookParam) => void;
export type AfterHookRegularMode = (h?: IHookParam) => Promise<any>;
export type AfterHookObservableMode = (h?: IHookParam) => Observable<any>;
export type AfterHookSubscriberMode = (h?: IHookParam) => Subscriber<any>;
export type AfterHookEEMode = (h?: IHookParam) => EventEmitter;

export type TAfterHook =
  AfterHookCallbackMode |
  AfterHookRegularMode |
  AfterHookObservableMode |
  AfterHookSubscriberMode |
  AfterHookEEMode

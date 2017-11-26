import {ITestCaseParam, THook, ITestSuite, ITestOrHookBase, IAllOpts} from "./test-suite";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import EventEmitter = NodeJS.EventEmitter;
import {DefineObjectTestCase} from 'suman/lib/test-suite-helpers/define-options-classes';


export interface ITestDataObj extends ITestOrHookBase {
  alreadyInitiated: boolean,
  sumanModulePath?: string,
  skipped?: boolean,
  skippedDueToOnly?: boolean,
  fixed: boolean,
  skippedDueToItOnly?: boolean,
  testId: number,
  error?: Error | string,
  errorDisplay?: string,
  stubbed?: boolean,
  data?: IRawTestData,
  originalOpts?: Object,
  only?: boolean,
  skip?: boolean,
  value?: Object,
  throws?: RegExp,
  parallel?: boolean,
  mode?: string,
  delay?: number,
  cb?: boolean,
  type: 'it/test-case',
  desc: string,
  fn?: THook,
  warningErr?: Error
  timedOut?: boolean,
  complete?: boolean,
  dateStarted?: number,
  dateComplete?: number,
  skippedDueToParentSkipped?: boolean,
  skippedDueToParentOnly?: boolean
}

type ISubsetItOpts = Partial<IItOpts>;
type ItFnArgs = ISubsetItOpts | ItHook | Array<string | ISubsetItOpts | ItHook>


export type TDefineCallback = (o: DefineObjectTestCase) => void;
export type TDefine = (desc?: string | TDefineCallback, f?: TDefineCallback) => DefineObjectTestCase;

export interface ItFn {
  (desc: string, ...args: ItFnArgs[]): ITestSuite,
  skip?: ItFn,
  only?: ItFn,
  cb?: ItFn,
  parallel?: ItFn,
  series?: ItFn,
  define: TDefine
}

export interface IRawTestData {
  //empty
}

export interface IItOpts extends IAllOpts {
  cb: boolean;
  plan: number,
  throws: RegExp,
}

export type ItHookCallbackMode = (t: ITestCaseParam) => void;
export type ItHookRegularMode = (t?: ITestCaseParam) => Promise<any>;
export type ItHookObservableMode = (t?: ITestCaseParam) => Observable<any>;
export type ItHookSubscriberMode = (t?: ITestCaseParam) => Subscriber<any>;
export type ItHookEEMode = (t?: ITestCaseParam) => EventEmitter;

export type ItHook = ItHookCallbackMode | ItHookRegularMode |
  ItHookObservableMode | ItHookSubscriberMode | ItHookEEMode;

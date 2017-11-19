// dts
import Timer = NodeJS.Timer;
import {Subscriber} from "rxjs/Subscriber";
import {Observable} from "rxjs/Observable";
import {IPseudoError} from "./global";
import EventEmitter = NodeJS.EventEmitter;
import {ITestSuiteMakerOpts} from "./test-suite-maker";
import {ITestDataObj, ItFn} from "./it";
import {IBeforeEachFn, IBeforeEachObj} from "./before-each";
import {IAfterFn, IAfterObj} from "./after";
import {IAfterEachFn, IAFterEachObj} from "./after-each";
import {IBeforeFn} from "./before";
import {IDescribeFn} from "./describe";
import AssertStatic = Chai.AssertStatic;

/////////////////////////////////////////////////////////////////////

export type TestSuiteMethodType = IBeforeEachFn | IBeforeFn | ItFn | IDescribeFn | IAfterFn | IAfterEachFn;

export interface IAcceptableOptions {
  [key: string]: true
}

export type TestSuiteGetterFn <T> = () => Array<T>;

export interface IAssertObj {
  num: number
}

export interface ITimerObj {
  timer: Timer
}

export interface IAllOpts {
  __preParsed?: boolean,
  mode: string,
  parallel: boolean,
  series: boolean,
  serial: boolean,
  skip: boolean,
  only: boolean
}

export interface IHookOrTestCaseParam {
  assert: AssertStatic,
  slow: Function,
  log: Function,
  wrapErrFirst: Function,
  wrapErrorFirst: Function,
  wrap: Function,
  fatal: Function
  callbackMode: boolean,
  timeout: Function,
  done: Function,
}

export interface IHookParam extends IHookOrTestCaseParam {
  // the h in h => {}
  (err?: Error): void,
  ctn: Function,
}

export interface ITestCaseParam extends IHookOrTestCaseParam {
  // the t in t => {}
  (err?: Error): void
  skip: Function,
  pass: Function,
  fail: Function
}

export type IHandleError = (e: IPseudoError) => void;
export type THookCallbackMode = (h: IHookOrTestCaseParam) => void;
export type HookRegularMode = (h?: IHookOrTestCaseParam) => Promise<any>;
export type HookObservableMode = (h?: IHookOrTestCaseParam) => Observable<any>;
export type HookSubscriberMode = (h?: IHookOrTestCaseParam) => Subscriber<any>;
export type HookEEMode = (h?: IHookOrTestCaseParam) => EventEmitter;
export type THook = THookCallbackMode | HookRegularMode | HookObservableMode | HookSubscriberMode | HookEEMode

export interface IInjectionObj extends IHookObj {

}

export interface ITestOrHookBaseEvents {
  success: string | Array<string>
  error: string | Array<string>
}

export interface ITestOrHookBase {
  alreadyInitiated?: boolean,
  desc: string,
  warningErr?: Error,
  errorPlanCount?: string,
  planCountExpected?: number
  throws?: RegExp,
  didNotThrowErrorWithExpectedMessage?: string,
  ctx: ITestSuite,
  timeout: number,
  cb: boolean,
  fn: THook,
  type: string
  successEvents: string | Array<string>,
  errorEvents: string | Array<string>,
  events: ITestOrHookBaseEvents
}

export interface IHookObj extends ITestOrHookBase {
  fatal: boolean,
  retries: number
}

export interface IOnceHookObj extends IHookObj {

}

export interface IEachHookObj extends IHookObj {

}

export interface IInjectedValues {
  [key: string]: any
}

export interface ITestSuiteBase {

  injectedValues: IInjectedValues,

  // getters
  getInjections: Function,
  getChildren: Function,

  getTests: TestSuiteGetterFn<ITestDataObj>,
  getParallelTests: TestSuiteGetterFn<ITestDataObj>,
  getTestsParallel: TestSuiteGetterFn<any>,
  getLoopTests: TestSuiteGetterFn<any>,
  getBefores: TestSuiteGetterFn<any>,
  getBeforeEaches: TestSuiteGetterFn<IBeforeEachObj>,
  getAfters: TestSuiteGetterFn<IAfterObj>,
  getAftersLast: TestSuiteGetterFn<IAfterObj>,
  getAfterEaches: TestSuiteGetterFn<IAFterEachObj>,
  getResumeValue?: Function,
  fatal?: Function,
  resume?: Function,

}

export interface ITestSuite extends ITestSuiteBase {

  new (opts: ITestSuiteMakerOpts): void;

  [key: string]: any,

  // object
  opts: Object,
  parent: ITestSuite,

  //number
  testId: number,

  //boolean
  skippedDueToDescribeOnly: boolean,
  isSetupComplete: boolean,
  parallel: boolean,
  skipped: boolean,
  only: boolean,

  // string
  desc: string,
  filename: string,
  fileName: string

  // function
  _run?: Function,
  invokeChildren?: Function,
  bindExtras: Function

}

export interface ITestSuiteBaseInitObjOpts {
  skip: boolean,
  only: boolean,
  mode: string,
  parallel: boolean,
  series: boolean,
  serial: boolean
}

export interface ITestSuiteBaseInitObj {
  opts: ITestSuiteBaseInitObjOpts

}

import {IAllOpts, ITestSuite} from "./test-suite";

type IDescribeFnArgTypes = IDescribeOpts | TDescribeHook | Array<string | TDescribeHook>;

export interface IDescribeFn {
  (s: string, ...args: IDescribeFnArgTypes[]): void,

  delay?: IDescribeFn,
  skip?: IDescribeFn,
  only?: IDescribeFn,
  parallel?: IDescribeFn,
  series?: IDescribeFn
}

export interface IDescribeOpts extends IAllOpts {

}

export type TDescribeHook = (b: ITestSuite, ...args: any[]) => void;

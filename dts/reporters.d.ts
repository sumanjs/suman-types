
export interface IResultsObj{
  n: number,
  passes: number,
  failures: number,
  skipped: number,
  stubbed: number
}


export interface IRet {
  results: IResultsObj,
  reporterName: string,
  count: number,
  cb: Function,
  completionHook?: Function
}

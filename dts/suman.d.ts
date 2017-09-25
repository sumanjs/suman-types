import EventEmitter = NodeJS.EventEmitter;
import {ITestSuite} from "./test-suite";


export interface ISumanGlobalInternal {
  // defintion for global.__suman
}

export interface ITableDataCallbackObj {
  exitCode: number,
  tableData: Object
}

export interface ISumanInputs {
  interface: string,
  fileName: string,
  timestamp: number,
  usingLiveSumanServer: boolean
  server: ISumanServerInfo
}

export interface ISumanServerInfo {
  host: string,
  port: number
}




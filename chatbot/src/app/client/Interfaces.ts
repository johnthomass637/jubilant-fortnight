import { ApiAiConstants } from './ApiAiConstants';

export interface IRequestOptions {
  request?: string;
  event?: { name: string; data?: IStringMap };
  serviceid?: string;
  lang?: ApiAiConstants.AVAILABLE_LANGUAGES;
  session?: string;
}

export interface IServerResponse {
  id?: string;
  result?: {
    action: string;
    resolvedQuery: string;
    speech: string;
    fulfillment?: {
      speech: string;
    };
  };
  status: {
    code: number;
    errorDetails?: string;
    errorID?: string;
    errorType: string;
  };
}

export interface IStringMap {
  [s: string]: string;
}

export interface IApiClientOptions {
  lang?: ApiAiConstants.AVAILABLE_LANGUAGES;
  version?: string;
  baseUrl?: string;
  session?: string;
  streamClientClass?: IStreamClientConstructor;
  serviceid: string;
}

export interface IStreamClientConstructor {
  new (options: IStreamClientOptions): IStreamClient;
}

export interface IStreamClient {
  init(): void;
  open(): void;
  close(): void;
  startListening(): void;
  stopListening(): void;
}

export interface IStreamClientOptions {
  server?: string;
  token?: string;
  session?: string;
  lang?: ApiAiConstants.AVAILABLE_LANGUAGES;
  contentType?: string;
  readingInterval?: string;
  onOpen?: () => void;
  onClose?: () => void;
  onInit?: () => void;
  onStartListening?: () => void;
  onStopListening?: () => void;
  onResults?: (data: IServerResponse) => void;
}

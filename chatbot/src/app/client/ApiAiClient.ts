import { ApiAiConstants } from './ApiAiConstants';
import TextRequest from './TextRequest';
import { ApiAiClientConfigurationError } from './Errors';

import {
  IApiClientOptions,
  IRequestOptions,
  IServerResponse
} from './Interfaces';

export * from './Interfaces';
export { ApiAiConstants } from './ApiAiConstants';

export class ApiAiClient {
  // private apiLang: ApiAiConstants.AVAILABLE_LANGUAGES;
  // private apiVersion: string;
  private apiBaseUrl: string;
  private session: string;
  private serviceid: string;

  constructor(options: IApiClientOptions) {
    if (!options || !options.serviceid) {
      throw new ApiAiClientConfigurationError(
        'Service ID is required for new ApiAi.Client instance'
      );
    }

    this.serviceid = options.serviceid;
    // this.apiLang = options.lang || ApiAiConstants.DEFAULT_CLIENT_LANG;
    // this.apiVersion = options.version || ApiAiConstants.DEFAULT_API_VERSION;
    this.apiBaseUrl = options.baseUrl || ApiAiConstants.DEFAULT_BASE_URL;
    this.session = options.session;
  }

  public textRequest(
    request,
    options: IRequestOptions = {}
  ): Promise<IServerResponse> {
    if (!request) {
      throw new ApiAiClientConfigurationError('Request should not be empty');
    }
    options.request = request;
    return new TextRequest(this, options).perform();
  }

  public getAccessToken(): string {
    return this.serviceid;
  }

  // public getApiVersion(): string {
  //     return (this.apiVersion) ? this.apiVersion : ApiAiConstants.DEFAULT_API_VERSION;
  // }

  // public getApiLang(): ApiAiConstants.AVAILABLE_LANGUAGES {
  //     return (this.apiLang) ? this.apiLang : ApiAiConstants.DEFAULT_CLIENT_LANG;
  // }

  public getApiBaseUrl(): string {
    return this.apiBaseUrl ? this.apiBaseUrl : ApiAiConstants.DEFAULT_BASE_URL;
  }

  public setSession(sessionId: string) {
    this.session = sessionId;
  }

  public getSession(): string {
    return this.session;
  }
}

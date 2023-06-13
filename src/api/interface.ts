import { AxiosResponse } from 'axios';

export interface RequestConfig {
  url: string;
  data?: any;
  headers?: any;
  gateWay?: string;
}

export interface ResponseConfig<T> {
  code: number;
  data: T;
  subCode: number;
  msg: string;
}

export interface ListResponseData<T> {
  result: T;
  totalPages: number;
  totalResults: number;
}

export type ResponsePromise<T> = Promise<T>;

export type ResponseListPromise<T> = ResponsePromise<ListResponseData<T[]>>;

export interface ResponseError<T> {
  data: ResponseConfig<T>;
  response: AxiosResponse<ResponseConfig<T>>;
}

export interface PageRequestParams {
  currentPage?: number;
  pageSize?: number;
}

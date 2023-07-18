import { IGenericErrorMessage } from './error';

export type IGenericResponse<T> = {
  data: T;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

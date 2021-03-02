import { AxiosError } from 'axios';

export interface ErrorResponse {
  errors: string[];
}

export const isAxiosResponse = (error: Error): error is AxiosError => {
  return (error as AxiosError).response !== undefined;
};

export const isErrorResponse = (response: any): response is ErrorResponse => {
  return (response as ErrorResponse).errors !== undefined;
};

export const getErrorsFromError = (e: Error) => {
  if (isAxiosResponse(e)) {
    const axiosError = e as AxiosError;

    if (isErrorResponse(axiosError.response?.data)) {
      const axiosError_ErrorResponse = e as AxiosError<ErrorResponse>;

      if (!axiosError_ErrorResponse.response) {
        return [];
      }

      return axiosError_ErrorResponse.response.data.errors;
    } else {
      return [axiosError.message];
    }
  } else {
    return [e.message];
  }
};

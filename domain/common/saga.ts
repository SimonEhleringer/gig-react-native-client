import { AxiosError } from 'axios';

export interface ErrorResponse {
  errors: string[];
}

const isAxiosResponse = (error: Error): error is AxiosError => {
  return (error as AxiosError).response !== undefined;
};

const isErrorResponse = (response: any): response is ErrorResponse => {
  return (response as ErrorResponse).errors !== undefined;
};

// export const handleError = (e: Error, action: (errors: string[]) => void) => {
//   const axiosError = e as AxiosError<ErrorResponse>;

//   if (axiosError.response) {
//     action(axiosError.response.data.errors);
//     //yield put(loginRegisterFailed(e.response.data.errors));
//   }
// };

export const getErrorsFromError = (e: Error) => {
  if (isAxiosResponse(e)) {
    const axiosError = e as AxiosError;

    if (isErrorResponse(axiosError.response?.data)) {
      const axiosError_ErrorResponse = e as AxiosError<ErrorResponse>;

      if (!axiosError_ErrorResponse.response) {
        return [];
      }

      console.log(axiosError_ErrorResponse.response.data.errors);
      return axiosError_ErrorResponse.response.data.errors;
    } else {
      console.log(axiosError.message);
      return [axiosError.message];
    }
  } else {
    return [e.message];
  }
};

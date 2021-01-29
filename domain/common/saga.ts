import { AxiosError } from 'axios';

export interface ErrorResponse {
  errors: string[];
}

// export const handleError = (e: Error, action: (errors: string[]) => void) => {
//   const axiosError = e as AxiosError<ErrorResponse>;

//   if (axiosError.response) {
//     action(axiosError.response.data.errors);
//     //yield put(loginRegisterFailed(e.response.data.errors));
//   }
// };

export const getErrorsFromError = (e: Error) => {
  const axiosError = e as AxiosError<ErrorResponse>;

  if (!axiosError.response) {
    return [];
  }

  return axiosError.response.data.errors;
};

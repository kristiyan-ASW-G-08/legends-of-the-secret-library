import ValidationError from '@losl/common/source/types/ValidationError';
import { FormikErrors, FormikValues } from 'formik';
import transformValidationErrors from './transformValidationErrors';

type setErrors = (validationErrors: FormikErrors<FormikValues>) => void;
type setNotification = (notification: Notification) => {};

const formErrorHandler = (
  error: any,
  setErrors: setErrors,
  setNotification: setNotification,
) => {
  if (error?.graphQLErrors !== undefined) {
    if (error.graphQLErrors[0]?.extensions?.validationErrors !== undefined) {
      const { validationErrors } = error.graphQLErrors[0]?.extensions;
      setErrors(transformValidationErrors(validationErrors));
    } else {
      console.log(JSON.stringify(error));
    }
  }
};

export default formErrorHandler;

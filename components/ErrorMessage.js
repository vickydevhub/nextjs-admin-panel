import { getIn } from 'formik';
import Error from './Error';

export const ErrorMessage = ({ name, touched, errors }) => {
  const isTouched = getIn(touched, name);
  const hasError = getIn(errors, name);

  return isTouched && hasError ? (
    <Error message={hasError} />
  ) : null;
};

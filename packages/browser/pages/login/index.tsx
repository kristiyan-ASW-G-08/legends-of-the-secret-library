import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import HeadLayout from '@/components/HeadLayout';
import UserLoginValidator from '@losl/common/source/schemaValidators/UserLoginValidator';
import Input from '@/components/Input';
import loginQuery from '@/queries/loginQuery';
import transformValidationErrors from '@/utilities/transformValidationErrors';
import FormButton from '@/components/FormButton';
import Background, { FieldsWrapper } from '@/components/Signup/styled';
import formErrorHandler from '@/utilities/formErrorHandler';
import { Container } from './styled';
import { setAuthState } from 'slices/AuthSlice';
const Login: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [login, { data, loading, error }] = useMutation(loginQuery);
  useEffect(() => {
    if (data !== undefined) {
      const {
        user: { hasSelectedStarters },
      } = data.login;
      dispatch(setAuthState(data.login));
      if (hasSelectedStarters) {
        router.push('/lobby');
        console.log(data);
      } else router.push('/starters');
    }
  }, [data, router]);
  return (
    <>
      <HeadLayout
        title="Login"
        description="Legends of the secret library"
        keywords="login"
      />

      <Formik
        validationSchema={UserLoginValidator}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { setErrors }: FormikHelpers<FormikValues>) => {
          login({ variables: values })
            .then(() => {})
            .catch(error => {
              //@ts-ignore
              formErrorHandler(error, setErrors, () => {});
            });
        }}
      >
        <Container>
          <Background>
            <Form>
              <FieldsWrapper>
                <Input name="email" type="email" placeholder="Email address" />

                <Input name="password" type="password" placeholder="Password" />

                <FormButton text={'Login'} loading={loading} />
              </FieldsWrapper>
            </Form>
          </Background>
        </Container>
      </Formik>
    </>
  );
};

export default Login;

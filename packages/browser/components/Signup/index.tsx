import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { Formik, Form, FormikValues, FormikHelpers } from 'formik';
import { gql, useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import HeadLayout from '@/components/HeadLayout';
import UserSignUpValidator from '@losl/common/source/schemaValidators/UserSignUpValidator';
import Input from '@/components/Input';
import signupQuery from '@/queries/signupQuery';
import transformValidationErrors from '@/utilities/transformValidationErrors';
import FormButton from '../FormButton';
import Background, { FieldsWrapper } from './styled';
import formErrorHandler from '@/utilities/formErrorHandler';
const SignUp: FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signup, { data, loading, error }] = useMutation(signupQuery);
  useEffect(() => {
    if (data !== undefined) {
      router.push('/login');
    }
  }, [data, router]);
  return (
    <>
      <HeadLayout
        title="Sign Up"
        description="Sign up page for PodCaster"
        keywords="sign up, register"
      />

      <Formik
        validationSchema={UserSignUpValidator}
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values, { setErrors }: FormikHelpers<FormikValues>) => {
          signup({ variables: values })
            .then(() => {})
            .catch(error => {
              //@ts-ignore
              formErrorHandler(error, setErrors, () => {});
            });
        }}
      >
        <Background>
          <Form>
            <FieldsWrapper>
              <Input name="username" type="text" placeholder="Username" />

              <Input name="email" type="email" placeholder="Email address" />

              <Input name="password" type="password" placeholder="Password" />

              <Input
                name="confirmPassword"
                type="password"
                placeholder="Repeat Password"
              />
              <FormButton text={'Sign Up'} loading={loading} />
            </FieldsWrapper>
          </Form>
        </Background>
      </Formik>
    </>
  );
};

export default SignUp;

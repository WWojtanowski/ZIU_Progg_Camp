import { useForm } from 'react-hook-form'
import { Text, Box, Input, Button, Field, Link } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { PageStore } from '@/stores/PageStore';
import { loginMock } from '@/mocks/loginMock';


interface LoginForm {
  username: string;
  password: string;
}


export default function LoginPage() {
  const navigate = useNavigate();
  const logIn = PageStore((state) => state.logIn);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>()

  const onSubmit = async (values: LoginForm) => {
    if (await loginAttempt(values))
      navigate("/courses");
  }

  const loginAttempt = async (values: LoginForm) => {
    const response = await loginMock(values);

    if (!response.success) {
      setError("root", {
        message: response.message,
      });
      return false;
    }

    logIn();
    return true;
  }

  return (
    <Box as="section" textAlign='center' py={16}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Field.Root alignItems='center' invalid={!!errors.username || !!errors.password}>

            <Box py={2}>
              <Field.Label htmlFor='username' py={2}>
                Nazwa użytkownika:
              </Field.Label>
              <Input
                id='username'
                {...register('username', {
                  required: 'Pole wymagane',
                  minLength: { value: 4, message: 'Minimum 4 znaki.' },
                })}
              />
              <Field.ErrorText color="semantic.error">
                {errors.username && errors.username.message}
              </Field.ErrorText>
            </Box>
            
            <Box py={2}>
              <Field.Label htmlFor='password' py={2}>Hasło:</Field.Label>
              <Input
                id='password'
                type="password"
                {...register('password', {
                  required: 'Pole wymagane'
                })}
              />
              <Field.ErrorText color="semantic.error">
                {errors.password && errors.password.message}
              </Field.ErrorText>
            </Box>
            
          </Field.Root>
          <Button type='submit' mt={4} variant="primary" loading={isSubmitting}>
            Zaloguj się
          </Button>

          <Text color="semantic.error" mt={4}>
            {errors.root?.message}
          </Text>
          <Text mt={4}>
            Nie masz konta?
          </Text>
          <Link 
            color="semantic.progress"
            onClick={() => navigate("/signup")}
          >
            Zarejestruj się
          </Link>
      </form>
    </Box>
  );
}
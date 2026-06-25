import { useForm } from 'react-hook-form'
import { Box, Input, Button, Field, Text, Heading } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { signupMock } from '@/mocks/signupMock';


interface SignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}


export default function SignupPage() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>()

  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();


  const emailChecker = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const passwordChecker = (password: string) => {
    let check = true
    check = check && (password.length >= 6)
    check = check && (/[A-Z]/.test(password))
    check = check && (/[a-z]/.test(password))
    check = check && (/[0-9]/.test(password))

    return check;
  }

  const onSubmit = async (values: SignupForm) => {
    const response = await signupMock(values);

    if (!response.success) {
      setError("root", {
        message: response.message,
      });
      return;
    }

    setIsRegistered(true);
  }


  return (
    <Box as="section" textAlign='center' py={16}>
      {!isRegistered && (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root alignItems='center' invalid={!!errors.username || !!errors.email || !!errors.password || !!errors.confirmPassword}>

              <Box py={2}>
                <Field.Label htmlFor='username' py={2}>Nazwa użytkownika:</Field.Label>
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
                <Field.Label htmlFor='email' py={2}>E-mail:</Field.Label>
                <Input
                  id='email'
                  {...register('email', {
                    required: 'Pole wymagane',
                    validate: (value) => 
                      value ? (emailChecker(value) ? undefined : 'Adres e-mail niepoprawny.') : undefined,
                  })}
                />
                <Field.ErrorText color="semantic.error">
                  {errors.email && errors.email.message}
                </Field.ErrorText>
              </Box>
              
              <Box py={2}>
                <Field.Label htmlFor='password' py={2}>Hasło:</Field.Label>
                <Input
                  id='password'
                  type="password"
                  {...register('password', {
                    required: 'Pole wymagane',
                    validate: (value) => 
                      value ? (passwordChecker(value) ? undefined : 'Hasło musi spełniać poszczególne kryteria.') : undefined,
                  })}
                />
                <Field.HelperText color="text.secondary">
                  Minimum 6 liter w tym: 1 mała, 1 duża i 1 cyfra.
                </Field.HelperText>
                <Field.ErrorText color="semantic.error">
                  {errors.password && errors.password.message}
                </Field.ErrorText>
              </Box>

              <Box py={2}>
                <Field.Label htmlFor='confirm-password' py={2}>Powtórz hasło:</Field.Label>
                <Input
                  id='confirm-password'
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Pole wymagane'
                  })}
                />
                <Field.ErrorText color="semantic.error">
                  {errors.confirmPassword && errors.confirmPassword.message}
                </Field.ErrorText>
              </Box>
              
            </Field.Root>
            <Button type='submit' mt={4} variant="primary" loading={isSubmitting}>
              Zarejestruj się
            </Button>

            <Text color="semantic.error" mt={4}>
              {errors.root?.message}
            </Text>
        </form>
      )}
      {isRegistered && (
        <>
          <Heading color="semantic.success">Zarejestrowano pomyślnie</Heading>
          <Button mt={4} variant="primary" onClick={() => navigate("/login")}>
            Przejdź do strony logowania
          </Button>
        </>
      )}

    </Box>
  );
}
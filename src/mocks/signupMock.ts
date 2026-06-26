export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupResponse {
  success: boolean;
  code: number;
  message?: string;
}


export async function signupMock(data: SignupRequest): Promise<SignupResponse> {

  // Symulacja opóźnienia sieci
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (
    data.password === data.confirmPassword
  ) {
    return {
      success: true,
      code: 200
    };
  }

  return {
    success: false,
    code: 400,
    message: "Podane hasła nie są takie same.",
  };
}
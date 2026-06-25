export interface SignupRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SignupResponse {
  success: boolean;
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
    };
  }

  return {
    success: false,
    message: "Podane hasła nie są takie same.",
  };
}
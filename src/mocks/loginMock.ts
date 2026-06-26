export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  code: number;
  message?: string;
}

export async function loginMock(
  data: LoginRequest
): Promise<LoginResponse> {

  // Symulacja opóźnienia sieci
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (
    data.username === "Jan Kowalski" &&
    data.password === "jKow123"
  ) {
    return {
      success: true,
      code: 200
    };
  }

  return {
    success: false,
    code: 400,
    message: "Nieprawidłowa nazwa użytkownika lub hasło.",
  };
}
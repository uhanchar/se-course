type ValidationResult = {
  result: boolean;
  errors: string[];
};

type ErrorParams = {
  passwordLengthError: boolean;
  passwordDigitError: boolean;
  passwordUppercaseLetterError: boolean;
};

export class PasswordValidator {
  public validate(password: string): ValidationResult {
    const isCorrectLength = this.validateLength(password);
    const hasDigit = this.validateDigit(password);
    const hasUpperCaseLetter = this.validateUppercaseLetter(password);

    return {
      result: isCorrectLength && hasDigit && hasUpperCaseLetter,
      errors: this.formatErrorMessages({
        passwordLengthError: !isCorrectLength,
        passwordDigitError: !hasDigit,
        passwordUppercaseLetterError: !hasUpperCaseLetter,
      }),
    };
  }

  private validateLength(password: string): boolean {
    return password.length > 5 && password.length < 16;
  }

  private validateDigit(password: string): boolean {
    return /\d/.test(password);
  }

  private validateUppercaseLetter(password: string): boolean {
    return password !== password.toLowerCase();
  }

  private formatErrorMessages(params: ErrorParams): string[] {
    const { passwordLengthError } = params;
    const passwordLengthErrorMessage = passwordLengthError
      ? 'InvalidPasswordLengthError'
      : '';

    return [passwordLengthErrorMessage].filter((error: string) => error);
  }
}

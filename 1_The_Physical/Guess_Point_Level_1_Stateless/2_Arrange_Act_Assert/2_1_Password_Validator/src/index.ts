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
    return password.length >= 5 && password.length <= 15;
  }

  private validateDigit(password: string): boolean {
    return /\d/.test(password);
  }

  private validateUppercaseLetter(password: string): boolean {
    return password !== password.toLowerCase();
  }

  private formatErrorMessages(params: ErrorParams): string[] {
    const { passwordLengthError, passwordDigitError } = params;
    const passwordLengthErrorMessage = passwordLengthError
      ? 'InvalidPasswordLengthError'
      : '';
    const passwordDigitErrorMessage = passwordDigitError
      ? 'DigitMissingError'
      : '';

    return [passwordLengthErrorMessage, passwordDigitErrorMessage].filter(
      (error: string) => error,
    );
  }
}

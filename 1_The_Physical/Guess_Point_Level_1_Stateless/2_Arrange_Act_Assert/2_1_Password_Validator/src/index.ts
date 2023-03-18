type ValidationResult = {
  result: boolean;
  errors: string[];
};

export class PasswordValidator {
  public validate(password: string): ValidationResult {
    const isCorrectLength = this.validateLength(password);
    const hasDigit = this.validateDigit(password);
    const hasUpperCaseLetter = this.validateUppercaseLetter(password);

    return {
      result: isCorrectLength && hasDigit && hasUpperCaseLetter,
      errors: [],
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
}

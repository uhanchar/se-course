export class PasswordValidator {
  public validate(password: string) {
    const isCorrectLength = this.validateLength(password);
    const hasDigit = this.validateDigit(password);

    return isCorrectLength && hasDigit;
  }

  private validateLength(password: string): boolean {
    return password.length > 5 && password.length < 16;
  }

  private validateDigit(password: string): boolean {
    return /\d/.test(password);
  }
}

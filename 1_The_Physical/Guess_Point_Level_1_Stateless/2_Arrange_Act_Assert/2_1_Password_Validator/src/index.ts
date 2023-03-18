export class PasswordValidator {
  public validate(password: string) {
    const isCorrectLength = this.validateLength(password);
    const hasDigit = this.validateDigit(password);
    const hasUpperCaseLetter = this.validateUppercaseLetter(password);

    return isCorrectLength && hasDigit && hasUpperCaseLetter;
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

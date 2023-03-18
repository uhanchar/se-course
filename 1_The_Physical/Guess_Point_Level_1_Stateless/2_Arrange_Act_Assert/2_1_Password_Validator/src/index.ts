export class PasswordValidator {
  public validate(password: string) {
    const isCorrectLength = password.length > 5 && password.length < 16;
    const hasDigit = /\d/.test(password);

    return isCorrectLength && hasDigit;
  }
}

export class LoginRegisterValidationController {

    comparePasswords(password, confirmPassword) {
        return password === confirmPassword;
    }

    isEmailValid = (email) => {
        const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
        return emailRegex.test(email.toLocaleLowerCase());
    };

    isPasswordValid = (password) => {
        const passwordRegExp = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);
        return passwordRegExp.test(password);
    };
}

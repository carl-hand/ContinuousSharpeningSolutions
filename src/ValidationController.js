export class ValidationController {

    validate(portfolioValues) {
        let validationErrors = [];

        for (let labelIndex = 0; labelIndex < portfolioValues.length; labelIndex++) {
            let value = portfolioValues[labelIndex];

            // check all fields have a value before proceeding
            this.checkIfFieldIsEmpty(validationErrors, labelIndex, value);
        }

        return validationErrors;
    }

    checkIfFieldIsEmpty(validationErrors,
                        labelIndex,
                        value) {
        if (value === '' || value === undefined) {
            validationErrors.splice(labelIndex, 1, 'true');
        }
    }
}

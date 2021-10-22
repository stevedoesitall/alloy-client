const validateEmail = (email) => {
    if ((email.trim().length) === 0) {
        return false;
    }

	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regex.test(email.toLowerCase());
};

const validateString = (str, id) => {
    if ((str.trim().length) === 0) {
        return false
    }

    return true
};

const validateZip = (zip) => {
    if ((zip.trim().length) === 0) {
        return false;
    }

    const regex = /^\d{5}(-\d{4})?$/;
    return regex.test(zip);
};

const validateSSN = (ssn) => {
    if ((ssn.trim().length) === 0) {
        return false;
    }

    const regex = /^(?!000|666)[0-8][0-9]{2}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4}$/;
    return regex.test(ssn)
};

const validatePhone = (phone) => {
    if ((phone.trim().length) === 0) {
        return false;
    }

    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    return regex.test(phone)
}

export { validateEmail, validateString, validateZip, validateSSN, validatePhone };
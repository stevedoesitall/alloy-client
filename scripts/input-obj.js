const inputObj = {
    firstName: {
        label: "First Name",
        id: "fn-input",
        isDropdown: false,
        isDate: false,
        placeholder: "Marty",
        value: "name_first",
        isDanger: false
    },
    lastName: {
        label: "Last Name",
        id: "ln-input",
        isDropdown: false,
        isDate: false,
        placeholder: "McFly",
        value: "name_last",
        isDanger: false
    },
    addressOne: {
        label: "Address Line 1",
        id: "ad1-input",
        isDropdown: false,
        isDate: false,
        placeholder: "9303 Lyon Drive",
        value: "address_line_1",
        isDanger: false
    },
    addressTwo: {
        label: "Address Line 2 (Optional)",
        id: "ad2-input",
        isDropdown: false,
        isDate: false,
        placeholder: "Lyon Estates",
        value: "address_line_2",
        isDanger: false
    },
    city: {
        label: "City",
        id: "city-input",
        isDropdown: false,
        isDate: false,
        placeholder: "Hill Valley",
        value: "address_city",
        isDanger: false
    },
    state: {
        label: "State",
        id: "state-input",
        isDropdown: true,
        isDate: false,
        placeholder: null,
        value: "address_state",
        isDanger: false
    },
    zip: {
        label: "Postal Code",
        id: "zip-input",
        isDropdown: false,
        isDate: false,
        placeholder: "95420",
        value: "address_postal_code",
        isDanger: false
    },
    emailAddress: {
        label: "Email Address",
        id: "email-input",
        isDropdown: false,
        isDate: false,
        placeholder: "mmcfly@greatscott.org",
        value: "email_address",
        isDanger: false
    },
    socialSecurityNumber: {
        label: "Social Security Number",
        id: "ssn-input",
        isDropdown: false,
        isDate: false,
        placeholder: "019850703",
        value: "document_ssn",
        isDanger: false
    },
    birthDate: {
        label: "Birth Date",
        id: "bday-input",
        isDropdown: false,
        isDate: true,
        placeholder: null,
        value: "birth_date",
        isDanger: false
    },
    phoneNumber: {
        label: "Phone Number",
        id: "phone-input",
        isDropdown: false,
        isDate: false,
        placeholder: "555-209-1234",
        value: "phone_number",
        isDanger: false
    },
}

export default inputObj;
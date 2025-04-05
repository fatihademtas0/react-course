import * as yup from "yup";

export const registerFromSchemas = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email !")
        .required("Email is required !"),

    age: yup
        .number()
        .positive("Enter a positive value !")
        .integer("Enter an integer !")
        .required("Age is required !"),

    password: yup.string().required("Password is required !"),

    passwordConfirmation: yup
        .string()
        .required("Password confirmation is required !")
        .oneOf([yup.ref("password", yup.password), "Password must match !"]),

    term: yup.boolean().required("You must accept the terms and conditions !"),
});

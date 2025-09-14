"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSessionSchema = exports.createUserSchema = void 0;
const yup_1 = require("yup");
exports.createUserSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("Name is Required"),
        password: (0, yup_1.string)()
            .required("Password is required")
            .min(6, "Password should be 6 characters")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Only letters and numbers are allowed"),
        passwordConfirmation: (0, yup_1.string)().oneOf([(0, yup_1.ref)("password")], "Password must match"),
        email: (0, yup_1.string)()
            .email("Must be a valid email")
            .required("Email is required")
    })
});
exports.createUserSessionSchema = (0, yup_1.object)({
    body: (0, yup_1.object)({
        password: (0, yup_1.string)()
            .required("Password is required")
            .min(6, "Password should be 6 characters")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Only letters and numbers are allowed"),
        email: (0, yup_1.string)()
            .email("Must be a valid email")
            .required("Email is required")
    })
});
//# sourceMappingURL=userScema.js.map
export declare const createUserSchema: import("yup").ObjectSchema<{
    body: {
        passwordConfirmation?: string | undefined;
        name: string;
        password: string;
        email: string;
    };
}, import("yup").AnyObject, {
    body: {
        name: undefined;
        password: undefined;
        passwordConfirmation: undefined;
        email: undefined;
    };
}, "">;
export declare const createUserSessionSchema: import("yup").ObjectSchema<{
    body: {
        password: string;
        email: string;
    };
}, import("yup").AnyObject, {
    body: {
        password: undefined;
        email: undefined;
    };
}, "">;
//# sourceMappingURL=userScema.d.ts.map
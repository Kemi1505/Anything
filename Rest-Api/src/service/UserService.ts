import User, {UserDocument} from "../model/userModel";
import {omit} from "lodash";

type UserInput = Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">;

export async function createUser(input: UserInput) {
    try {
        return await User.create(input);
    } catch (error: any ) {
        throw new Error(error)
    }
}

function findUser() {}

export async function validatePassword({
    email,
    password,
}: {
    email: UserDocument["email"];
    password: string
}) {
    const user = await User.findOne({email});

    if(!user) {
        return false;
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) {
        return false;
    }

    return omit(user.toJSON(), "password");
}
import  config  from "config";
import Session, {SessionDocument} from "../model/sessionModel";
import { UserDocument } from "../model/userModel";
import  {Document} from 'mongoose';
import {sign} from '../utils/jwt.utils'

type LeanDocument<T> = T & { [key: string]: any };

export async function createSession(userId: string, userAgent: string) {
    const session = await Session.create({user: userId, userAgent});

    return session.toJSON();
}

export function createAccessToken({
    user,
    session,
}: {
    user:
    | Omit<UserDocument, "password">
    | LeanDocument<Omit<UserDocument, "password">>;
    session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
    const accessToken = sign(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")}
    );

    return accessToken
}
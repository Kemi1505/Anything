import { SessionDocument } from "../model/sessionModel";
import { UserDocument } from "../model/userModel";
type LeanDocument<T> = T & {
    [key: string]: any;
};
export declare function createSession(userId: string, userAgent: string): Promise<import("mongoose").FlattenMaps<SessionDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export declare function createAccessToken({ user, session, }: {
    user: Omit<UserDocument, "password"> | LeanDocument<Omit<UserDocument, "password">>;
    session: Omit<SessionDocument, "password"> | LeanDocument<Omit<SessionDocument, "password">>;
}): string;
export {};
//# sourceMappingURL=sessionSevice.d.ts.map
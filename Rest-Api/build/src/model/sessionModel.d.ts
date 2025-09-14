import mongoose from "mongoose";
import { UserDocument } from "./userModel";
export interface SessionDocument extends mongoose.Document {
    user: UserDocument["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const Session: mongoose.Model<SessionDocument, {}, {}, {}, mongoose.Document<unknown, {}, SessionDocument, {}, {}> & SessionDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default Session;
//# sourceMappingURL=sessionModel.d.ts.map
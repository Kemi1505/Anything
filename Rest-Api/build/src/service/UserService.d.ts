import { UserDocument } from "../model/userModel";
type UserInput = Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">;
export declare function createUser(input: UserInput): Promise<import("mongoose").Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export declare function validatePassword({ email, password, }: {
    email: UserDocument["email"];
    password: string;
}): Promise<false | Pick<import("mongoose").FlattenMaps<UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}>, "id" | "_id" | "__v" | "$assertPopulated" | "$clearModifiedPaths" | "$clone" | "$createModifiedPathsSnapshot" | "$getAllSubdocs" | "$ignore" | "$isDefault" | "$isDeleted" | "$getPopulatedDocs" | "$inc" | "$isEmpty" | "$isValid" | "$locals" | "$markValid" | "$model" | "$op" | "save" | "validate" | "$restoreModifiedPathsSnapshot" | "$session" | "$set" | "$where" | "baseModelName" | "collection" | "db" | "deleteOne" | "depopulate" | "directModifiedPaths" | "equals" | "errors" | "get" | "getChanges" | "increment" | "init" | "invalidate" | "isDirectModified" | "isDirectSelected" | "isInit" | "isModified" | "isNew" | "isSelected" | "markModified" | "model" | "modifiedPaths" | "overwrite" | "$parent" | "populate" | "populated" | "replaceOne" | "schema" | "set" | "toJSON" | "toObject" | "unmarkModified" | "updateOne" | "validateSync" | "email" | "name" | "createdAt" | "updatedAt" | "comparePassword">>;
export {};
//# sourceMappingURL=UserService.d.ts.map
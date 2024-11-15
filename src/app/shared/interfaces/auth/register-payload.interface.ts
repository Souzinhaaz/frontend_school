import { IAuth } from "./auth.interface";

export type RegisterPayload = Omit<IAuth, 'id'>
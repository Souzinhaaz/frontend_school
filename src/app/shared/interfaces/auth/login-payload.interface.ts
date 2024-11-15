import { IAuth } from "./auth.interface";

export type LoginPayload = Omit<IAuth, 'id' | 'nome'>
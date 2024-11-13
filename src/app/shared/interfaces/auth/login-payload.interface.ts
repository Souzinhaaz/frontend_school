import { User } from "./user.interface";

export type LoginPayload = Omit<User, 'id' | 'nome'>
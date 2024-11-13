import { User } from "./user.interface";

export type RegisterPayload = Omit<User, 'id'>
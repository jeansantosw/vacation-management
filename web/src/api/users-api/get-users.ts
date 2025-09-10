import { api } from "../axios";
import type { IUser } from "./types";

export async function getUsers(): Promise<IUser[]> {
  const response = await api.get('/users')

  return response.data.users.users 
}

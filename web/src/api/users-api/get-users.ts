import { api } from "../axios";
import type { IGetUsersResponse } from "./types";

export async function getUsers() {
  const { data } = await api.get<IGetUsersResponse>('/users')

  return data.users
}

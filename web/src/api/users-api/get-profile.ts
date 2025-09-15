import { api } from "../axios";
import type { IGetUsersBasicResponse } from "./types";

export async function getProfile() {
  const { data } = await api.post<IGetUsersBasicResponse>('/me')
  
  return data.user
}
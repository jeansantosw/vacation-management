import { api } from "../axios";
import type { IGetUsersBasicResponse } from "./types";

export async function getProfile() {
  const response = await api.post<IGetUsersBasicResponse>('/me')
  return response.data.user
}
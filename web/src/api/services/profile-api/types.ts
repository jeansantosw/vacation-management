export interface IGetProfileResponse {
  profile: {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'collaborator'
  managerId: string | null
  }
}

export interface IUpdateProfileRequest {
  name: string | null
  email: string | null
  password?: string | null
}
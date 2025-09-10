export interface ISignInBody {
  email: string
  password: string
}


export interface IGetUsersBasicResponse {
  user: {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'collaborator'
  managerId: string | null
  }
}

export interface IUser {
  id: string
  email: string
  name: string
  role: 'admin' | 'manager' | 'collaborator'
  managerId: string | null
}

export interface IGetUsersResponse {
  users: IUser[]
}
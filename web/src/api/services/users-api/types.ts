export interface ISignInBody {
  email: string
  password: string
}

export interface IGetUserDetails {
  userId: string
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

export interface IGetUserDatails {
  user: {
    id: string
    email: string
    name: string
    role: 'admin' | 'manager' | 'collaborator'
    managerId: string | null
  }
}

export interface IUserTableRow {
  user: {
    id: string
    email: string
    name: string
    role: 'admin' | 'manager' | 'collaborator'
    managerId: string | null
  }
}

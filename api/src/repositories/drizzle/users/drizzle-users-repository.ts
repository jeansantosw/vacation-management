import { db } from '@/database/client'
import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'
import type { TUsersInsert } from '@/helpers/global-types/drizzle-types'
import type { UserRepository } from './users-repository'
// import type { IGetUsersBasic } from '@/helpers/global-types/types'
import type { IUpdateUseCase } from './types'

export class DrizzleUsersRepository implements UserRepository {
  async findByIdToUpdateUser(userId: string, userUpdate: IUpdateUseCase) {
    const [user] = await db
      .update(users)
      .set(userUpdate)
      .where(eq(users.id, userId))
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        managerId: users.managerId,
      })

    return user
  }

  async findByUserId(id: string) {
    const [user] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        managerId: users.managerId,
      })
      .from(users)
      .where(eq(users.id, id))

    return user
  }

  async findManyUser() {
    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        managerId: users.managerId,
      })
      .from(users)

    return user
  }

  async findManyByManagerId(userId: string) {
    const user = await db
      .select({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        managerId: users.managerId,
      })
      .from(users)
      .where(eq(users.managerId, userId))

    return user
  }

  async findByEmail(email: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email))

    return user
  }

  async create(data: TUsersInsert) {
    const [user] = await db.insert(users).values(data).returning()

    return user
  }
}

import { db } from '@/database/client'
import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'
import type { TUsersInsert } from '@/helpers/global-types/drizzle-types'
import type { UserRepository } from './users-repository'

export class DrizzleUsersRepository implements UserRepository {
  async findByUserId(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id))

    return user
  }

  async findManyByUserId(userId: string) {
    const user = await db
      .select({ name: users.name, email: users.email, role: users.role })
      .from(users)
      .where(eq(users.managerId, userId))

    return user
  }

  async findByEmail(email: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email))

    return user
  }

  async create(data: TUsersInsert) {
    console.log('#### DATA ####: ', data)
    const [user] = await db.insert(users).values(data).returning()

    return user
  }
}

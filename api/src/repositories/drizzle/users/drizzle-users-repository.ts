import { db } from '@/database/client'
import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'
import type { TUsersInsert } from '@/helpers/global-types/drizzle-types'
import type { UserRepository } from './users-repository'

export class DrizzleUsersRepository implements UserRepository {
  async findById(id: string) {
    const [user] = await db.select().from(users).where(eq(users.id, id))

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

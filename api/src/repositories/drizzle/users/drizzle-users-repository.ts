import { db } from '@/database/client'
import { eq } from 'drizzle-orm'
import { users } from '@/database/schema'
import type { UserRepository } from './users-repository'
import type { TUpdateProfile } from '@/helpers/global-types/profile-types/types'
import type { TCurrentId } from '@/helpers/global-types/type'
import type {
  TCreateUserDTO,
  TUpdateUserDTOS,
} from '@/helpers/global-types/users-types/types'

export class DrizzleUsersRepository implements UserRepository {
  async findByProfileId(currentId: TCurrentId) {
    const [profile] = await db
      .select({
        id: users.id,
        email: users.email,
        name: users.name,
        role: users.role,
        managerId: users.managerId,
      })
      .from(users)
      .where(eq(users.id, currentId))

    return { profile }
  }

  async findProfileByIdToUpdate(
    currentId: TCurrentId,
    updateProfile: TUpdateProfile,
  ) {
    await db.update(users).set(updateProfile).where(eq(users.id, currentId))
  }

  async findByUserIdForShutdown(userId: string) {
    await db.delete(users).where(eq(users.id, userId))
  }

  async findByIdToUpdateUser(userId: string, userUpdate: TUpdateUserDTOS) {
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

  async create(data: TCreateUserDTO) {
    const [user] = await db.insert(users).values(data).returning({
      id: users.id,
      email: users.email,
      password: users.password,
      name: users.name,
      role: users.role,
      managerId: users.managerId,
    })

    return user
  }
}

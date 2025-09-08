import { users } from '@/database/schema'

export type TUsersInsert = typeof users.$inferInsert

export type TUserSelect = typeof users.$inferSelect

import {
  pgTable,
  uuid,
  text,
  pgEnum,
  uniqueIndex,
  timestamp,
} from 'drizzle-orm/pg-core'

export const userRole = pgEnum('user_role', [
  'admin',
  'manager',
  'collaborator',
])

export const users = pgTable(
  'users',
  {
    id: uuid().primaryKey().defaultRandom(),
    email: text().notNull().unique(),
    password: text().notNull(),
    name: text().notNull(),
    role: userRole().notNull().default('collaborator'),
    managerId: uuid(),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex().on(table.managerId, table.id)],
)

export const vacation = pgTable('vacation_requests', {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid()
    .notNull()
    .references(() => users.id),
  startDate: timestamp({ withTimezone: true }).notNull().defaultNow(),
  endDate: timestamp({ withTimezone: true }).notNull().defaultNow(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
})

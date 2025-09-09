import 'dotenv/config'
import { db } from './client.ts'
import { fakerPT_BR as faker } from '@faker-js/faker'
import { hash } from 'argon2'
import { users } from './schema.ts'

async function seed() {
  const passwordHass = await hash('123456')
  await db
    .insert(users)
    .values([
      {
        name: 'João Pedro',
        password: passwordHass,
        role: 'admin',
        email: 'joao@example.com',
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'manager',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'manager',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'manager',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: null,
      },
    ])
    .returning()
}

seed()

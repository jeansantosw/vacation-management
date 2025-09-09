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
        id: '37e0c3ba-4f81-425c-81b1-c5e6ae33c2ea',
        name: 'Sara',
        password: passwordHass,
        role: 'manager',
        email: 'sara@example.com',
        managerId: null,
      },
      {
        id: 'd103cd09-2bf2-45f7-acdf-80e5dbeb3994',
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'manager',
        email: faker.internet.email(),
        managerId: null,
      },
      {
        id: 'a150b186-5898-4452-87aa-49940b0c82bf',
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
        managerId: 'a150b186-5898-4452-87aa-49940b0c82bf',
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: 'a150b186-5898-4452-87aa-49940b0c82bf',
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: 'd103cd09-2bf2-45f7-acdf-80e5dbeb3994',
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: '37e0c3ba-4f81-425c-81b1-c5e6ae33c2ea',
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: '37e0c3ba-4f81-425c-81b1-c5e6ae33c2ea',
      },
      {
        name: faker.person.fullName(),
        password: passwordHass,
        role: 'collaborator',
        email: faker.internet.email(),
        managerId: '37e0c3ba-4f81-425c-81b1-c5e6ae33c2ea',
      },
    ])
    .returning()
}

seed()

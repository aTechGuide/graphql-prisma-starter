import prisma from '../../src/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userOne = {
  input: {
    name: 'Jen',
      email: 'jen@example.com',
      password: bcrypt.hashSync('Red095345!')
  },
  user: undefined,
  jwt: undefined
}

const userTwo = {
  input: {
    name: 'Jeff',
      email: 'jeff@example.com',
      password: bcrypt.hashSync('PassForJeff')
  },
  user: undefined,
  jwt: undefined
}

const seeddatabase = async () => {

  jest.setTimeout(100000);

  // Delete Test Data
  await prisma.mutation.deleteManyUsers()

  // Create UserOne
  // we need to hash password already as node hashes our password. As we are bypassing node so we need to hash password
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  })

  userOne.jwt = jwt.sign({userId: userOne.user.id }, process.env.JWT_SECRET)

  // Create UserTwo
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input
  })

  userTwo.jwt = jwt.sign({userId: userTwo.user.id }, process.env.JWT_SECRET)
}

export { seeddatabase as default, userOne, userTwo}
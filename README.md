# Graphql Prisma Starter

This starter contains the following functionality

- `User` schema
- Authentication
- Test Suite

# How to use the boiler Plate
- Edit the configuration files inside `config` folder, specifying the `service` and `stage` in `PRISMA_ENDPOINT`
- Launch Prisma and database
  - `cd prisma`
  - `docker-compose up -d`

- Deploy the prisma Datamodel. From inside `prisma` folder run
  - Dev: `prisma deploy -e ../config/dev.env`
  - Test: `prisma deploy -e ../config/test.env`
  - Prod: `prisma deploy -e ../config/prod.env`

- Install the dependencies
  - `npm install`

- Generate the dependencies
  - Edit the `.graphqlconfig` file with correct `service` and `stage` as done in step 1
  - Run `npm run get-schema`

- Run the App
  - `npm run dev`
  - `npm run test`

# Endpoint
- Localhost Playground => http://localhost:4000/
- Prisma Playground => http://localhost:4466/boilerplate/dev
  - We need to generate a token for prisma playground via `prisma token`. Then supply the token in the query
  ```
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Prisma Admin Panel => http://localhost:4466/boilerplate/dev/_admin
  - We need to generate a token for prisma Admin Panel via `prisma token`. Then supply the token in the `Project Settings` in top right corner

# Reference
- This project was built as a part of [The Modern GraphQL Bootcamp (with Node.js and Apollo)](https://www.udemy.com/course/graphql-bootcamp/) Udemy course by Andrew Mead
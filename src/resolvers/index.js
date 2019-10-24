import { extractFragmentReplacements } from 'prisma-binding';
import Query from './query';
import Mutation from './mutation';
import User from './user';
import Subscription from './subscription';

const resolvers = {
  Query,
  Mutation,
  // Subscription,
  User
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }
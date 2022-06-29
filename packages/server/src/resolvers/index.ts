import userMutations from '@users/mutations';
import starterPackQueries from '../starterPacks/query';

const resolvers = {
  Query: { ...starterPackQueries },
  Mutation: { ...userMutations },
};

export default resolvers;

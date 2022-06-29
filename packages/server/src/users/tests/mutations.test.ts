import connectToDB from '@customUtilities/connectToDB';
import mongoose from 'mongoose';
import UserModel from '@src/users/UserModel';
// @ts-ignore
import typeDefs from '@typeDefs/typeDefs';
import { string } from 'yup';
import { ApolloServer } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import resolvers from '../../resolvers/index';
describe('Resolvers', () => {
  const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env;
  const mongoURI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.ol9wi.mongodb.net/${MONGO_DATABASE}?retryWrites=true`;
  beforeAll(async () => {
    await mongoose.disconnect();
    await connectToDB(mongoURI);
    await UserModel.deleteMany({}).exec();
  });

  afterEach(async () => {
    await UserModel.deleteMany({}).exec();
  });
  afterAll(async () => {
    await mongoose.disconnect();
  });

  describe('Mutations', () => {
    afterEach(async () => {
      await UserModel.deleteMany({}).exec();
    });
    const password = 'someValidPassword';
    const values = {
      username: 'name',
      email: 'somemail@mail.com',
      password,
      confirmPAssword: password,
    };

    const incorrectValues = {
      username: '',
      email: 'notAnEMail',
      password: 'pass',
      confirmPAssword: 'correctPassword',
    };
    describe('login', () => {
      it('login successfully', async () => {
        expect.assertions(2);

        await new UserModel({
          username: values.username,
          email: values.email,
          password: await bcrypt.hash(values.password, 12),
        }).save();
        const query = `mutation {
          login(email:"${values.email}",password:"${values.password}",) {
            token
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });
        expect(result.errors).toBeUndefined();
        expect(result.data?.login.token).toBeTruthy();
      });

      it('login unsuccessfully', async () => {
        expect.assertions(1);

        await new UserModel({
          username: values.username,
          email: values.email,
          password: await bcrypt.hash(values.password, 12),
        }).save();
        const query = `mutation {
          login(email:"${values.email}",password:"${incorrectValues.password}",) {
            token
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });
        expect(result.errors).toMatchSnapshot();
      });
      it('login unsuccessfully because user is not found', async () => {
        expect.assertions(1);
        const query = `mutation {
          login(email:"${values.email}",password:"${incorrectValues.password}",) {
            token
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });
        expect(result.errors).toMatchSnapshot();
      });
    });
    describe('signup', () => {
      it('it creates and returns a User successfully', async () => {
        expect.assertions(2);
        const query = `mutation {
          signup(username:"${values.username}",email:"${values.email}",password:"${values.password}",confirmPassword:"${values.confirmPAssword}"){
            _id
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });

        expect(result.errors).toBeUndefined();
        expect(result.data?.signup._id).toBeTruthy();
      });
      it('it fails validation and returns validation errors', async () => {
        expect.assertions(1);
        const query = `mutation {
          signup(username:"${incorrectValues.username}",email:"${incorrectValues.email}",password:"${incorrectValues.password}",confirmPassword:"${incorrectValues.confirmPAssword}"){
            _id
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });

        // @ts-ignore
        expect(result.errors[0].extensions?.validationErrors).toMatchSnapshot();
      });

      it('it uses duplicate email and username and returns validation errors', async () => {
        expect.assertions(1);

        await new UserModel({
          username: values.username,
          email: values.email,
          password: values.password,
        }).save();
        const query = `mutation {
          signup(username:"${values.username}",email:"${values.email}",password:"${values.password}",confirmPassword:"${values.confirmPAssword}"){
            _id
          }
        }`;

        const testServer = new ApolloServer({
          typeDefs,
          resolvers,
        });

        const result = await testServer.executeOperation({
          query,
        });
        // @ts-ignore
        expect(result.errors[0].extensions?.validationErrors).toMatchSnapshot();
      });
    });
  });
});

import { UserInputError } from 'apollo-server-express';
import mongoose, { Model, Document } from 'mongoose';

interface FindQuery {
  name: string;
  value: number | string | mongoose.Types.ObjectId;
}
const getResource = async <T extends Document>(
  model: Model<T>,
  { value, name }: FindQuery,
  select: string = '',
  error: any = new Error('resource not found'),
): Promise<T> => {
  const resource = await model.findOne({ [name]: value }).select(select);
  if (!resource) {
    throw error;
  }
  return resource;
};

export default getResource;

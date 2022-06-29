import mongoose from 'mongoose';
import logger from '@customUtilities/logger';
import { Battler } from '@src/battlers/Battler';
const connectToDB = async (mongoURI: string): Promise<void> => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.model('Battler', Battler);
  } catch (err) {
    logger.error(`MongoDB Connection Error: ${err}`);
  }
};
export default connectToDB;

import dotenv from 'dotenv';
import Joi from 'joi';

dotenv.config();

const environmentSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow('development', 'production')
    .default('development'),
  MONGO_URL: Joi.string().required().description('Mongo DB URL is required'),
  PORT: Joi.number().default(5000),
  JWT_KEY: Joi.string().required('JWT Key is required'),
})
  .unknown()
  .required();

// eslint-disable-next-line no-undef
const { error, value } = environmentSchema.validate(process.env);

if (error) {
  throw new Error(`env vars validation error: ${error.message}`);
}

export const NODE_ENV = value.NODE_ENV;
export const MONGO_URL = value.MONGO_URL;
export const PORT = value.PORT;
export const JWT_KEY = value.JWT_KEY;

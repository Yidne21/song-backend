import songSchema from './schema';
import * as staticFunctions from './statics';
import * as methodFunctions from './methods';
import mongoose from 'mongoose';
import { modelNames } from '../../utils/constants';

songSchema.static(staticFunctions);
songSchema.method(methodFunctions);

const Song = mongoose.model(modelNames.songs, songSchema);

export default Song;

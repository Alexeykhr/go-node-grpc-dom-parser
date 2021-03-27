'use strict';

import { address } from '../config/env';
import Grpc from './Grpc';

export default new Grpc(address);

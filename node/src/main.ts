'use strict';

import 'dotenv';

import ChromeBrowser from './browser/ChromeBrowser';
import ParserService from './grpc/services/Parser';
import grpc from './grpc';

const browser = new ChromeBrowser();

grpc.addService(new ParserService(browser));
grpc.runInsecure()
  .then((port) => console.log(`GRPC Server running at port ${port}`));

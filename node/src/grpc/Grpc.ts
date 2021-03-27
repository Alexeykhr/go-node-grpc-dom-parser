'use strict';

import * as grpc from 'grpc';
import { IService } from '../types';

export default class Grpc {
  private server: grpc.Server;
  private readonly address: string;

  constructor(address: string) {
    this.server = Grpc.createServer();
    this.address = address;
  }

  runInsecure(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.server.bindAsync(this.address, Grpc.insecureCredentials(), (error, port) => {
        if (error === null) {
          this.server.start();

          resolve(port);
        }

        reject(error);
      });
    });
  }

  addService(service: IService) {
    this.server.addService(service.service(), service.implementation());
  }

  private static insecureCredentials() {
    return grpc.ServerCredentials.createInsecure();
  }

  private static createServer(options?: object) {
    return new grpc.Server(options);
  }
}

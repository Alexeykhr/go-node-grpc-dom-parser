'use strict';

import { sendUnaryData, ServerUnaryCall, ServiceDefinition, UntypedServiceImplementation } from 'grpc';

export interface IService<ImplementationType = UntypedServiceImplementation> {
  service(): ServiceDefinition<ImplementationType>;

  implementation(): { [name: string]: (call: ServerUnaryCall<any>, callback: sendUnaryData<any>) => void };
}

export interface IBrowser {
  html(url: string): Promise<string>;

  image(url: string): Promise<Buffer>;
}

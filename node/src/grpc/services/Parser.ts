'use strict';

import { sendUnaryData, ServerUnaryCall, ServiceDefinition } from 'grpc';
import { HtmlRequest, HtmlResponse, ImageRequest, ImageResponse } from '../proto/parser_pb';
import { IParserSvcService, ParserSvcService } from '../proto/parser_grpc_pb';
import { IBrowser, IService } from '../../types';

export default class Parser implements IService<IParserSvcService> {
  private readonly browser: IBrowser;

  constructor(browser: IBrowser) {
    this.browser = browser;
  }

  htmlHandler(call: ServerUnaryCall<HtmlRequest>, callback: sendUnaryData<HtmlResponse>): void {
    const url = call.request.getUrl();

    this.browser.html(url)
      .then((html) => {
        const resp = new HtmlResponse();
        resp.setContent(html);

        callback(null, resp);
      })
      .catch((err) => {
        callback(err, null);
      });
  };

  imageHandler(call: ServerUnaryCall<ImageRequest>, callback: sendUnaryData<ImageResponse>): void {
    const url = call.request.getUrl();

    this.browser.image(url)
      .then((image) => {
        const resp = new ImageResponse();
        resp.setContent(image);

        callback(null, resp);
      })
      .catch((err) => {
        callback(err, null);
      });
  }

  service(): ServiceDefinition<IParserSvcService> {
    return ParserSvcService;
  }

  implementation(): { [name: string]: (call: ServerUnaryCall<any>, callback: sendUnaryData<any>) => void } {
    return {
      html: this.htmlHandler.bind(this),
      image: this.imageHandler.bind(this),
    };
  };
};

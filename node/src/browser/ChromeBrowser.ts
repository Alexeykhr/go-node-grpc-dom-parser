'use strict';

import { BrowserType, chromium, ChromiumBrowser } from 'playwright';
import { LaunchOptions } from 'playwright/types/types';
import { IBrowser } from '../types';

export default class ChromeBrowser implements IBrowser {
  private browser: BrowserType<ChromiumBrowser>;
  private readonly options: LaunchOptions | null;

  constructor(options?: LaunchOptions) {
    this.browser = chromium;
    this.options = options;
    // default options for tab, page, etc..
  }

  async html(url: string): Promise<string> {
    const instance = await this.launch();
    const tab = await instance.newPage();
    const page = await tab.goto(url);
    const html = await page.text();
    await instance.close();

    return html;
  }

  async image(url: string, screenOpt?: object): Promise<Buffer> {
    const instance = await this.launch();
    const tab = await instance.newPage();
    await tab.goto(url);
    const screen = await tab.screenshot(screenOpt);
    await instance.close();

    return screen;
  }

  private launch(options?: object) {
    return this.browser.launch(options || this.options);
  }
}

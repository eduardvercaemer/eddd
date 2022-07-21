import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  logger = new Logger('AppService');

  async onModuleInit() {
    this.logger.log('Initialized !');
  }

  getHello(): string {
    return 'Hello World!';
  }
}

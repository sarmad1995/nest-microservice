import { Module } from '@nestjs/common';
import {
  ConfigModule as NestJsConfigModule,
  ConfigService,
} from '@nestjs/config';
import * as joi from 'joi';
@Module({
  imports: [
    NestJsConfigModule.forRoot({
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
      }),
    }),
  ],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}

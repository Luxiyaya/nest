import { Module } from '@nestjs/common'
import { WechartService } from './wechart.service';
import { HttpModule } from '@nestjs/axios'
import { WechartController } from './wechart.controller';

@Module({
  imports: [HttpModule],
  providers: [WechartService],
  controllers: [WechartController]
})
export class WechartModule { }
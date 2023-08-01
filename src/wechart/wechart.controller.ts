import { Controller, Get, Req, Query } from "@nestjs/common";
import { WechartService } from './wechart.service';



@Controller('wechart')
export class WechartController {
  constructor(private wechartService: WechartService) { }

  @Get('/')
  getCat(): String {
    return '微信认证'
  }

  /** 实现签名 */
  @Get('/getWXSignture')
  getWXSignture(@Query('code') code) {
    console.log('code来了', code)
    this.wechartService.getAccessCode(code)
    return '签名'
  }

  @Get('/getPlainAccessCode')
  getPlainAccessCode() {
    return this.wechartService.getPlainAccessCode()
  }


  /** 
   * 1. 通过code获取网页授权access_tokeN  返回openid, access_token
   * 2. 通过access_token 拉取用户信息  https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
   * 
   */
}
import { Injectable } from "@nestjs/common";
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs';
const { createHash } = require('crypto');
/**
 * @param {string} algorithm
 * @param {any} content
 *  @return {string}
 */
const encrypt = (algorithm, content) => {
  let hash = createHash(algorithm)
  hash.update(content)
  return hash.digest('hex')
}

@Injectable()
export class WechartService {
  constructor(private httpService: HttpService) {
  }
  // 随机字符串
  timestamp: 'ADFASDFSAAASD'
  appId: "wxa2496d7093096355"
  appsecret: "94837dba7ad9f8614178d0a55c9c0d01"
  nonceStr: 'sdd'

  // 网页授权access_token
  async getAccessCode(code) {
    await this.getPlainAccessCode()

    const resultObservable = this.httpService.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxa2496d7093096355&secret=94837dba7ad9f8614178d0a55c9c0d01&code=${code}&grant_type=authorization_code`)
    const result = (await lastValueFrom(resultObservable)).data
    console.log(result)

    if (result.access_token) {
      const { access_token, expires_in, refresh_token, openid, scope } = result

      // 获取用户信息
      const userInfoObservable = this.httpService.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`)
      const userInfo = (await lastValueFrom(userInfoObservable)).data
      console.log(userInfo)
      const { headimgurl, nickname } = userInfo

      return userInfo
    }

    // {
    //   access_token: '71_Z-exc9Zi8nAEwyjkPyckBX1BOFJz9xalUnwG95-FvGUI4MtMT6KX-W-OmH1iqN8sMlUC4iSYLp089ePiGosYHpTCs6DRR36FzEk0Nk5kQc8',
    //   expires_in: 7200,
    //   refresh_token: '71_A_3q_mwTGTLEkq45JmFMKSk_F29nWR8CXEo1v8e8xAD8_N3rHsB9rhA31B0xriJzwTWS0zDhFw3qiTuM3-zAOPfBayxY1sSJEyZgco4J8Ec',
    //   openid: 'oNgdp67hragbEGeor93B3sVFnC-U',
    //   scope: 'snsapi_userinfo'
    // }

    // {
    //   openid: 'oNgdp67hragbEGeor93B3sVFnC-U',
    //   nickname: 'v',
    //   sex: 0,
    //   language: '',
    //   city: '',
    //   province: '',
    //   country: '',
    //   headimgurl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/FDCnjt5DJ7f6icLwlK5nnyLYyC1aLm8J3nuScBWZDjaWsbIe6wNFdHdX85N1WaB8DtkUX3WPFFw0PCzOQbVUcKA/132',
    //   privilege: []
    // }


  }


  // 普通access_token
  async getPlainAccessCode() {
    const resultObservable = this.httpService.get('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa2496d7093096355&secret=94837dba7ad9f8614178d0a55c9c0d01')
    const result = (await lastValueFrom(resultObservable)).data
    const { access_token, } = result
    // {
    //   access_token: '71_c-W911w2GkfbKjoaBmhv7rmNOvR1QXp_Amlcyw0hGaGbcqaQNOSXZzJrh7pc9VIwMSS8LJaPfUGh2I9EaET9_ojvWsMA0v1nkLtuTf5ZwibQz0cyjyg9oMbjL8gZHTaAGANVH',
    //   expires_in: 7200
    // }
    // 签名
    const signatureObservable = this.httpService.get(`https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`)
    const signature = (await lastValueFrom(signatureObservable)).data
    console.log('签名', signature)
    const { ticket, expires_in, errmsg, } = signature
    // 对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）
    const time = new Date().getTime()
    const string1 = `jsapi_ticket=ticket&noncestr=Wm3WZYTPz0wzccnW&timestamp=${time}&url=http://192.168.30.3:8080`
    // 加密后的签名
    const sha1 = encrypt('sha1', string1)

    console.log(sha1)

    return {
      signature: sha1,
      nonceStr: 'Wm3WZYTPz0wzccnW',
      timestamp: time

    }
    // {
    //   errcode: 0,
    //   errmsg: 'ok',
    //   ticket: 'O3SMpm8bG7kJnF36aXbe82oDuSWzX16L78peq8ecUr-JQBkj0zofw0jjhvZYd6_S9hRYzmrKZMKz_JtaNthw9w',
    //   expires_in: 7200
    // }
  }

}
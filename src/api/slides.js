import AV from '@/helpers/av.js'
import {Message} from 'element-ui'

export default {
  // todo: 这里应该改为随机选择 6 张图片
  fetchImage() {
    return new Promise((resolve, reject) => {
      var query = new AV.Query('slideShow')

      query.find().then(pictures => {
        resolve(pictures.map(p => p.get('url')))
      }).catch(err => {
        Message.error('背景图似乎出了点问题')
        reject(err)
      })
    })
  }
}
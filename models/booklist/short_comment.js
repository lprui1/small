import { HTTP } from '../../utils/http.js'

class shortComment extends HTTP {
  modelindex(callback) {
    this.request({
      url: 'book/1/short_comment',
      success: res => {
        callback(res)
      }
    })
  }
}
export { shortComment }
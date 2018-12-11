import { HTTP } from '../../utils/http.js'
class duanping extends HTTP {
  dp(id,callback) {
    this.request({
      url: '/book/'+id+'/short_comment',
      success: res => {
        callback(res)
      }
    })
  }
}
export { duanping }